import type { Email } from '@prisma/client';
import { db } from "~/utils/db.server";

export async function getEmails(): Promise<Email[]> {
    return db.email.findMany();
}

export async function storeEmail(email: string): Promise<Email> {
    return db.email.create({
        data: {
            email
        }
    });
}