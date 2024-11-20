import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

export function SetCookie(req: NextApiRequest, res: NextApiResponse, {}) {
  const { token } = req.body;

  res.setHeader('Set-Cookie', serialize('token', token, {
    httpOnly: true, // Tidak dapat diakses dari JavaScript
    sameSite: 'strict',
    path: '/dashboard',
    maxAge: 60 * 60, // 1 jam
  }));

  res.status(200).json({ message: 'Cookie berhasil diset' });
}