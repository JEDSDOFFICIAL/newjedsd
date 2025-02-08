import { z } from 'zod';

// Author Validation Schema
export const authorSchema = z.object({
  name: z.string().min(2, 'Author name must be at least 2 characters'),
  emailId: z.string().email('Invalid email address').optional(),
  contactNumber: z
    .string()
    .min(10, 'Contact number must be at least 10 digits')
    .max(15, 'Contact number must be no more than 15 digits')
    .optional(),
});

// Paper Upload Validation Schema
export const paperUploadSchema = z.object({
  paperName: z.string().min(3, 'Paper name must be at least 3 characters'),
  abstract: z.string().min(10, 'Abstract must be at least 10 characters long'),
  authors: z.array(authorSchema).min(1, 'At least one author is required'),
  keywords: z.array(z.string().min(2)).min(1, 'At least one keyword is required'),
  publishDate: z.date(),
  status: z.enum(['published', 'uploaded', 'onreview']).default('uploaded'),
  pointofContact: authorSchema,
  paperurl: z.string().url('Invalid paper URL'),
});

// Type Inference for TypeScript
export type PaperUploadInput = z.infer<typeof paperUploadSchema>;
