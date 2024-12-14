import { z } from "zod";

interface validation {
  type: 'step1' | 'step2' | 'all',
  data?: any
}

export function ValidationReservation({ type, data }: validation) {
  const reservation1 = z.object({
    date: z.string().min(5, {message: "Harap isi tanggal" }),
    email: z.array(
      z.string().email({message: "kesalahan domain email"}).refine((email) => email.endsWith("mhs.dinus.ac.id"), {
        message: "Hanya email dengan domain @mhs.dinus.ac.id yang diperbolehkan",
      }),
    ),
    totalperson: z.number().min(1, {message: "Jika kamu tim pastikan lebih dari 1!"}),
    type: z.string().min(2, { message: "Harap isi tipe reservasi" }),
    reason: z.string().min(2, { message: "Harap isi alasan" }),
  })

  const reservation2 = z.object({
    table: z.number().min(1).max(24),
    timeslot: z.string()
  })

  switch (type) {
    case 'step1':
      let result = reservation1.safeParse(data)
      let grouped = result.error?.issues.reduce((acc: any, item: any) => {
        let key = item.path ? item.path.join("index") : 'no-path';
        if(key.includes("email")){
          key = "email"
        }
        if (!acc[key]) acc[key] = [];
        if (acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
      }, {});
      
      return {success: result.success, data:grouped}
    case 'step2':
      let result2 = reservation2.safeParse(data)
      let grouped2 = result2.error?.issues.reduce((acc: any, item: any) => {
        let key = item.path ? item.path.join("index") : 'no-path';

        if (!acc[key]) acc[key] = [];
        if (acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
      }, {})
      return {success: result2.success, data:grouped2}
    case 'all':
      return [reservation1.safeParse(data), reservation2.safeParse(data)]
  }
}


export const ValidationLogin = () => {}