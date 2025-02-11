"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";

const formSchema = z.object({
  paperName: z.string().max(50, "Max 50 words allowed"),
  abstract: z.string().max(250, "Max 250 words allowed"),
  authors: z
    .array(
      z.object({
        name: z.string().min(1, "Required"),
        email: z.string().email("Invalid email"),
        contactNumber: z.string().min(10, "Invalid contact number"),
      })
    )
    .min(1, "At least one author required"),
  primaryContact: z.object({
    name: z.string().min(1, "Required"),
    email: z.string().email("Invalid email"),
    contactNumber: z.string().min(10, "Invalid contact number"),
  }),
  file: z.instanceof(File),
  fileUrl: z.string().optional(),
  termsAccepted: z.boolean().refine((val) => val, "You must accept terms"),
});

export default function MultiPageForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paperName: "",
      abstract: "",
      authors: [{ name: "", email: "", contactNumber: "" }],
      primaryContact: { name: "", email: "", contactNumber: "" },
      file: undefined,
      fileUrl: "",
      termsAccepted: false,
    },
  });

  const { fields, append } = useFieldArray({ name: "authors", control });

  console.log("Current Step:", step);

  const handleFileUpload = async (file: any) => {
    console.log("File selected:", file);
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "upload_files_jedsd");
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dvnys2mq6/upload",
        formData
      );
      console.log("Upload success", res.data.secure_url);
      setValue("fileUrl", res.data.secure_url);
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="max-w-full h-full mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Paper Details</h2>
            <input
              {...register("paperName")}
              placeholder="Paper Name"
              className="w-full p-2 border rounded-md"
            />
            <p className="text-red-500 text-sm">{errors.paperName?.message}</p>
            <textarea
              {...register("abstract")}
              placeholder="Abstract"
              className="w-full p-2 border rounded-md mt-2"
            />
            <p className="text-red-500 text-sm">{errors.abstract?.message}</p>
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
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="mb-4 bg-white p-4 rounded-lg shadow"
              >
                <input
                  {...register(`authors.${index}.name`)}
                  placeholder="Name"
                  className="w-full p-2 border rounded-md"
                />
                <input
                  {...register(`authors.${index}.email`)}
                  placeholder="Email"
                  className="w-full p-2 border rounded-md mt-2"
                />
                <input
                  {...register(`authors.${index}.contactNumber`)}
                  placeholder="Contact Number"
                  className="w-full p-2 border rounded-md mt-2"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                append({ name: "", email: "", contactNumber: "" })
              }
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              + Add Author
            </button>
            <label className="block mt-4">
              <input type="checkbox" {...register("primaryContact")} /> I am the
              primary contact
            </label>
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
            <h2 className="text-2xl font-semibold mb-4">Upload Paper</h2>
            <input
              type="file"
              onChange={(e) =>
                e.target.files && handleFileUpload(e.target.files[0])
              }
              className="w-full p-2 border rounded-md"
            />
            {loading && <p className="text-blue-500">Uploading file...</p>}
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
            <h2 className="text-2xl font-semibold mb-4">Terms & Conditions</h2>
            <label>
              <input
                type="checkbox"
                {...register("termsAccepted")}
              />{" "}
              I accept the terms
            </label>
            <p className="text-red-500 text-sm">
              {errors.termsAccepted?.message}
            </p>
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-4 py-2 bg-gray-600 text-white rounded"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
