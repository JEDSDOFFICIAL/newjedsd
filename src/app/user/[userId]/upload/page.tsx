"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import { Router } from "next/router";

const formSchema = z.object({
  paperName: z
    .string()
    .max(50, "Max 50 words allowed")
    .nonempty("Paper Name is required"),
  abstract: z
    .string()
    .max(300, "Max 300 words allowed")
    .nonempty("Abstract is required"),
  keywords: z
    .string()
    .nonempty("Keyword is required"),
  
  authors: z
    .array(
      z.object({
        name: z.string().min(1, "Name is required"),
        emailId: z.string().email("Invalid email"),
        contactNumber: z.string().regex(/^\d{10}$/, "Invalid contact number"),
        affiliation: z.string().optional(), // Affiliation is optional
      })
    )
    .min(1, "At least one author is required"),
  pointofContact: z.object({
    name: z.string().min(1, "Name is required"),
    emailId: z.string().email("Invalid email"),
    contactNumber: z.string().regex(/^\d{10}$/, "Invalid contact number"),
    affiliation: z.string().optional(), // Affiliation is optional
  }),
  fileUrl: z.string().url(),
  coverletterUrl:z.string().url(),
});

export default function MultiPageForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paperName: "",
      abstract: "",
      keywords: "",
      authors: [{ name: "", emailId: "", contactNumber: "", affiliation: "" }], // Removed affiliation from default authors
      pointofContact: {
        name: "",
        emailId: "",
        contactNumber: "",
        affiliation: "",
      }, // Removed affiliation from default point of contact
      fileUrl: "",
      coverletterUrl:""
    },
  });

  const {
    fields: authorFields,
    append: appendAuthor,
    remove: removeAuthor,
  } = useFieldArray({
    name: "authors",
    control,
  });

  const handleMenuscriptFileUpload = async (file: File) => {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "uploads_file_jedsd"); // Replace with your preset
    formData.append("resource_type", "raw");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dvnys2mq6/raw/upload", // Replace with your cloud name
        formData
      );
      setValue("fileUrl", res.data.secure_url);
      toast({
        title: "Upload Success",
        description: "File uploaded successfully!",
      });
      console.log("res",res);
      
    } catch (error) {
      console.error("Upload failed", error);
      toast({
        title: "Upload Failed",
        description: "Error uploading file.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  const handleCoverletterFileUpload = async (file: File) => {
    if (!file) return;
    if (file && file.size > 10 * 1024 * 1024) { // 10MB limit
      alert("File size exceeds 10MB limit. Please upload a smaller file.");
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "uploads_file_jedsd"); // Replace with your preset
    formData.append("resource_type", "raw");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dvnys2mq6/raw/upload", // Replace with your cloud name
        formData
      );
      setValue("coverletterUrl", res.data.secure_url);
      toast({
        title: "Upload Success",
        description: "File uploaded successfully!",
      });
      console.log("res",res);
      
    } catch (error) {
      console.error("Upload failed", error);
      toast({
        title: "Upload Failed",
        description: "Error uploading file.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: any) => {
    if (errors){
      toast({
        title:"filled error",
        description:"Every field is not properly filled"
      })
    }
    if (!session?.user?.username) {
      toast({
        title: "Authentication Error",
        description: "User not authenticated",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
       const res = await axios.post(
         `/api/uploadPaper/${session.user.username}`,
         data
       );
      console.log("data",data)
      console.log("res",res) 
      toast({ title: "Success", description: "Paper submitted successfully!" });
      setStep(1); // Reset form after successful submission
    } catch (error) {
      console.error("Submission failed", error);
      toast({
        title: "Submission Failed",
        description: "Failed to submit paper",
        variant: "destructive",
      });
    } finally {
      
      setLoading(false);
      
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Manuscript Details</h2>
            <input
              type="text"
              {...register("paperName")}
              placeholder="Menuscript Title"
              className="w-full p-2 border rounded-md mb-2"
            />
            {errors.paperName && (
              <p className="text-red-500">{errors.paperName.message}</p>
            )}

            <textarea
              {...register("abstract")}
              placeholder="Abstract"
              className="w-full min-h-24 p-2 border rounded-md mb-2"
            />
            {errors.abstract && (
              <p className="text-red-500">{errors.abstract.message}</p>
            )}

            <label htmlFor="keywords">Keywords (max 8, comma-separated):</label>
            <input
              type="text"
              id="keywords"
              {...register("keywords")}
              
                
              
              placeholder="Keyword1, Keyword2, ..."
              className="w-full p-2 border rounded-md mb-2"
              
            
            />
            {errors.keywords && (
              <p className="text-red-500">{errors.keywords.message}</p>
            )}

            <button
              type="button"
              onClick={() => setStep(2)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Author Details</h2>
            {authorFields.map((field, index) => (
              <div
                key={field.id}
                className="mb-4 bg-white p-4 rounded-lg shadow"
              >
                <input
                  {...register(`authors.${index}.name`)}
                  placeholder="Name"
                  className="w-full p-2 border rounded-md mb-2"
                />
                {errors.authors?.[index]?.name && (
                  <p className="text-red-500">
                    {errors.authors[index].name.message}
                  </p>
                )}

                <input
                  {...register(`authors.${index}.emailId`)}
                  placeholder="Email"
                  className="w-full p-2 border rounded-md mb-2"
                />
                {errors.authors?.[index]?.emailId && (
                  <p className="text-red-500">
                    {errors.authors[index].emailId.message}
                  </p>
                )}

                <input
                  {...register(`authors.${index}.contactNumber`)}
                  placeholder="Contact Number"
                  className="w-full p-2 border rounded-md mb-2"
                />
                {errors.authors?.[index]?.contactNumber && (
                  <p className="text-red-500">
                    {errors.authors[index].contactNumber.message}
                  </p>
                )}

                <input
                  {...register(`authors.${index}.affiliation`)}
                  placeholder="Affiliation"
                  className="w-full p-2 border rounded-md"
                />
                {errors.authors?.[index]?.affiliation && (
                  <p className="text-red-500">
                    {errors.authors[index].affiliation.message}
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => removeAuthor(index)}
                  className="mt-2 px-2 py-1 bg-red-600 text-white rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                appendAuthor({ name: "", emailId: "", contactNumber: "" })
              }
              className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
            >
              Add Author
            </button>

            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 bg-gray-600 text-white rounded"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Point of Contact</h2>
            <input
              {...register("pointofContact.name")}
              placeholder="Name"
              className="w-full p-2 border rounded-md mb-2"
            />
            {errors.pointofContact?.name && (
              <p className="text-red-500">
                {errors.pointofContact.name.message}
              </p>
            )}

            <input
              {...register("pointofContact.emailId")}
              placeholder="Email"
              className="w-full p-2 border rounded-md mb-2"
            />
            {errors.pointofContact?.emailId && (
              <p className="text-red-500">
                {errors.pointofContact.emailId.message}
              </p>
            )}

            <input
              {...register("pointofContact.contactNumber")}
              placeholder="Contact Number"
              className="w-full p-2 border rounded-md mb-2"
            />
            {errors.pointofContact?.contactNumber && (
              <p className="text-red-500">
                {errors.pointofContact.contactNumber.message}
              </p>
            )}

            <input
              {...register("pointofContact.affiliation")}
              placeholder="Affiliation"
              className="w-full p-2 border rounded-md"
            />
            {errors.pointofContact?.affiliation && (
              <p className="text-red-500">
                {errors.pointofContact.affiliation.message}
              </p>
            )}

            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2 bg-gray-600 text-white rounded"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(4)}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Upload Manuscript</h2>
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleMenuscriptFileUpload(e.target.files[0]);
                }
              }}
              className="w-full p-2 border rounded-md mb-2"
            />
            {loading && <p>Uploading...</p>}
            {errors.fileUrl && (
              <p className="text-red-500">{errors.fileUrl.message}</p>
            )}
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-4 py-2 bg-gray-600 text-white rounded"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(5)}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Next
              </button>
            </div>
          </div>
        )}{" "}
        {step === 5 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Upload Cover letter</h2>
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleCoverletterFileUpload(e.target.files[0]);
                }
              }}
              className="w-full p-2 border rounded-md mb-2"
            />
            {loading && <p>Uploading...</p>}
            {errors.fileUrl && (
              <p className="text-red-500">{errors.fileUrl.message}</p>
            )}
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => setStep(4)}
                className="px-4 py-2 bg-gray-600 text-white rounded"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50 disabled:bg-gray-400"
                disabled={Object.keys(errors).length > 0}
              >
                Submit
              </button>
            </div>
          </div>
        )}{" "}
      </form>
    </div>
  );
}
