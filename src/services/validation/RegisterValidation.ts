import { z } from "zod";

interface validation {
  data?: any,
}

export function ValidationRegister({ data }: validation) {
  const val = z.object({
    name: z.string().min(1, { message: 'This field is required' }),
    email_mhs: z.string().email({ message: "kesalahan domain email" }).refine((email) => email.endsWith("mhs.dinus.ac.id"), {
      message: "Hanya email dengan domain @mhs.dinus.ac.id yang diperbolehkan",
    }),

    password_confirmation: z.string().min(1, {message: 'This field is required!'}).refine(pwd => pwd.matchAll(data.password), { message: 'confirmation must be same as password!' }),
    password: z.string().min(8, { message: 'Minimum length is 8' })
  })

  let result = val.safeParse(data)
  let grouped = result.error?.issues.reduce((acc: any, item: any) => {
    let key = item.path;

    if (!acc[key]) acc[key] = []
    if (acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {})
  return {success: result.success, err:grouped}
}