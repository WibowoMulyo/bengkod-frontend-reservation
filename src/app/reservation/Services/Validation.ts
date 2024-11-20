import { z } from "zod";

interface validation {
  type: 'step1' | 'step2' | 'all',
  data?: any
}

export function ValidationReservation({ type, data }: validation) {
  const reservation1 = z.object({
    date: z.date({message: "Harap isi tanggal" }),
    // email: z.string().email().refine((email) => email.endsWith("@mhs.dinus.ac.id"), {
    //   message: "Hanya email dengan domain @mhs.dinus.ac.id yang diperbolehkan",
    // }),
    email: z.array(
      z.string().email({message: "kesalahan domain email"}).refine((email) => email.endsWith("mhs.dinus.ac.id"), {
        message: "Hanya email dengan domain @mhs.dinus.ac.id yang diperbolehkan",
      }),
    ),
    typereserve: z.string().min(2, { message: "Harap isi tipe reservasi" }),
    reason: z.string().min(2, { message: "Harap isi alasan" }),
  })

  const reservation2 = z.object({
    table: z.number().min(1).max(24),
    timeslot: z.string()
  })

  switch (type) {
    case 'step1':
      return reservation1.safeParse(data)
    case 'step2':
      return reservation2.safeParse(data)
    case 'all':
      return [reservation1.safeParse(data), reservation2.safeParse(data)]
  }
}