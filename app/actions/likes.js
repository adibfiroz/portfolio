
"use server"

import prisma from "../../lib/prisma";


export const fetchLikes = async () => {
    try {
        const id = "687df3c7c599223bb6b92979";

        const record = await prisma.like.findUnique({
        where: {
            id: id, // Find the record with the specific `id`
        },
        select: {
            count: true, // Select the `views` field
        },
        });

        const count = record?.count ?? 0; // Safely access the like count or return 0 if the record is not found

        return count;
    } catch (error) {
        
    }
}

export const updateLike = async () => {
    try {
        const id = "687df3c7c599223bb6b92979";

       await prisma.like.update({
        where: {
            id: id,
        },
        data: { count: { increment: 1 } },
        });

        return { message: "like increased" };
    } catch (error) {
        
    }
}