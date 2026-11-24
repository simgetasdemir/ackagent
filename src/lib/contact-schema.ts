import { z } from "zod";
import { budgetOptions, serviceOptions } from "./content";

export const contactSchema = z.object({
  name: z.string("Adınızı ve soyadınızı yazın.").trim().min(2, "Adınızı ve soyadınızı yazın.").max(80),
  email: z.email("Geçerli bir e-posta adresi yazın."),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+()\s-]{10,20}$/, "Geçerli bir telefon numarası yazın.")
    .optional()
    .or(z.literal("")),
  company: z.string("Şirket adını yazın.").trim().min(2, "Şirket adını yazın.").max(120),
  website: z.string().trim().max(200).optional().or(z.literal("")),
  service: z.enum(serviceOptions, "Bir hizmet seçin."),
  budget: z.enum(budgetOptions, "Aylık reklam bütçenizi seçin."),
  message: z
    .string("Hedefinizi en az 20 karakterle anlatın.")
    .trim()
    .min(20, "Hedefinizi en az 20 karakterle anlatın.")
    .max(2000),
  kvkk: z.literal(true, "KVKK aydınlatma metnini onaylamanız gerekiyor."),
  // Bot tuzağı: gerçek kullanıcılar bu alanı görmez ve boş bırakır.
  fax: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
