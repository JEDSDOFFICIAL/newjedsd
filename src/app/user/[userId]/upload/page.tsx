"use client";

import { useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { z } from "zod";
import { storage } from "@/firebaseconfig/firebase"; // Ensure Firebase is initialized
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  paperName: z.string().max(50, "Max 50 words allowed").nonempty("Paper Name is required"),
  abstract: z.string().max(300, "Max 300 words allowed").nonempty("Abstract is required"),
  keywords: z.string().nonempty("Keyword is required"),
  authors: z.array(
    z.object({
      name: z.string().min(1, "Name is required"),
      emailId: z.string().email("Invalid email"),
      contactNumber: z.string().regex(/^\d{10}$/, "Invalid contact number"),
      affiliation: z.string().nonempty("Affiliation is required"),
    })
  ).min(1, "At least one author is required"),
  pointofContact: z.object({
    name: z.string().min(1, "Name is required"),
    emailId: z.string().email("Invalid email"),
    contactNumber: z.string().regex(/^\d{10}$/, "Invalid contact number"),
    affiliation: z.string().nonempty("Affiliation is required"),
  }),
  fileUrl: z.string().url().nonempty("Menuscript is required"),
  coverletterUrl: z.string().url().optional(),
});

type FormData = z.infer<typeof formSchema>;

const steps = ["Paper Details", "Authors", "Point of Contact", "Upload File", "Upload Cover Letter", "Review & Submit"];

export default function MultiStepForm() {

  const router = useRouter();
  const {toast} = useToast();
  const [step, setStep] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      authors: [{ name: "", emailId: "", contactNumber: "", affiliation: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "authors" });

  const handleFileUpload = async (file: File, field: "fileUrl" | "coverletterUrl") => {
    if (!file) return;
    setUploading(true);
    const fileRef = ref(storage, `uploads/${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.error(error);
        setUploading(false);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setValue(field, downloadURL, { shouldValidate: true });
        toast({ title: "File uploaded successfully", variant: "default" });
        setUploading(false);
      }
    );
  };

  const {data:session} = useSession();
  const username =session?.user.username ; // Replace with actual userId
  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      console.log("submit button click");
      

      console.log("Submitting form", data);
      console.log("Username", username);
      
      
      const response = await axios.post(`/api/uploadPaper/${username}`, data);
      console.log("Submission successful", response.data);
      toast({ title: "Submission successful", variant: "default" });
      router.push(`/user/${username}`)
    } catch (error:any) {
      console.error("Error submitting form", error);
      toast({ title: "Error submitting form", description: error?.message, variant: "destructive" });
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-full mx-auto h-full p-6 flex justify-center items-center bg-gray-400">
      <CardContent className="w-full">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {step === 0 && (
            <>
              <h2 className="text-2xl font-semibold mb-4 text-center">Manuscript Details</h2>
              <Input {...register("paperName")} placeholder="Paper Name" className="border-black border-2 rounded-sm shadow-md shadow-black"/>
              <p className="text-red-500 py-4 ">{errors.paperName?.message}</p>
              <Textarea {...register("abstract")} placeholder="Abstract" className="border-black border-2 rounded-sm shadow-md shadow-black"/>
              <p className="text-red-500 py-4">{errors.abstract?.message}</p>
              <Input {...register("keywords")} placeholder="Keywords (comma separated)" className="border-black border-2 rounded-sm shadow-md shadow-black" />
              <p className="text-red-500 py-4">{errors.keywords?.message}</p>
            </>
          )}

          {step === 1 && (
            <>
              <h2 className="text-2xl text-center font-semibold mb-4">Authors</h2>
              {fields.map((field, index) => (
                <div key={field.id} className="space-y-2 my-4">
                  <Input {...register(`authors.${index}.name` as const)} placeholder="Name" />
                  <Input {...register(`authors.${index}.emailId` as const)} placeholder="Email" />
                  <Input {...register(`authors.${index}.contactNumber` as const)} placeholder="Contact" />
                  <Input {...register(`authors.${index}.affiliation` as const)} placeholder="Affiliation" />
                  <Button variant="destructive" onClick={() => remove(index)} className="my-2">Remove</Button>
                </div>
              ))}
              <Button className="my-2" onClick={() => append({ name: "", emailId: "", contactNumber: "", affiliation: "" })}>
                Add Author
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-2xl text-center font-semibold mb-4">Point of Contact</h2>
              <Input {...register("pointofContact.name")} placeholder="Name"                        className="my-3"/>
              <Input {...register("pointofContact.emailId")} placeholder="Email"                    className="my-3"/>
              <Input {...register("pointofContact.contactNumber")} placeholder="Contact Number"     className="my-3"/>
              <Input {...register("pointofContact.affiliation")} placeholder="Affiliation"          className="my-3"/>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-2xl text-center font-semibold mb-4">Upload Manuscript</h2>
              <Input type="file" onChange={(e) => e.target.files && handleFileUpload(e.target.files[0], "fileUrl")} />
              {uploading && <Loader2 className="animate-spin" />}
            </>
          )}
          
          {step === 4 && (
            <>
              <h2 className="text-2xl text-center font-semibold mb-4">Upload Cover Letter</h2>
              <Input type="file" onChange={(e) => e.target.files && handleFileUpload(e.target.files[0], "coverletterUrl")} />
              {uploading && <Loader2 className="animate-spin" />}
            </>
          )}

          {step === 5 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Review & Submit</h2>
              <pre className="bg-gray-200 p-4 max-w-[90vw] overflow-hidden">{JSON.stringify(getValues(), null, 2)}</pre>
              <Button onClick={handleSubmit(onSubmit)} className="w-full">{!loading && <>Submit</> }{loading && <>loading</>}</Button>
            </>
          )}
        </motion.div>

        <div className="flex justify-between mt-4">
          <Button disabled={step === 0} onClick={() => setStep((prev) => prev - 1)}>Back</Button>
           <Button disabled={step === steps.length - 1} onClick={() => setStep((prev) => prev + 1)}>Next</Button> 
        </div>
      </CardContent>
    </Card>
  );
}
