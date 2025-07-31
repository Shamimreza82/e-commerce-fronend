import z from "zod";

export const registerShopSchema = z.object({
  name: z.string().min(2, "Shop name is required").max(50, "Shop name must be less than 50 characters"),
  description: z.string().min(15, "Description must be at least 15 characters long").max(200, "Description must be between 15 and 200 characters"),
  contactEmail: z.string().email(),
  phone: z.string().min(11, "Phone number must be at least 11 characters long").max(11, "Phone number must be at most 11 characters long"),
  address: z.string().min(15, "Address must be at least 15 characters long").max(100, "Address must be between 15 and 100 characters"),
  seoTitle: z.string().max(60, "SEO title must be less than 60 characters").optional(),
  seoDescription: z.string().max(160, "SEO description must be less than 160 characters").optional(),
  documentUrl: z.any().optional(), // for file
});

export type TRegisterShopSchema = z.infer<typeof registerShopSchema>;