import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req) {
  const { email, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    return new Response(JSON.stringify({ user }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'User registration failed' }), { status: 500 });
  }
}
