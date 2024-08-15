
"use server"

import prisma from "../../lib/prisma";

export default async function GetViews() {
  try {
    const id = "66bdc30249a2822e0882899a";

    const record = await prisma.view.findUnique({
      where: {
        id: id, // Find the record with the specific `id`
      },
      select: {
        views: true, // Select the `views` field
      },
    });

    const count = record?.views ?? 0; // Safely access the views count or return 0 if the record is not found

    return count;
  } catch (error) {
    throw new Error(error);
  }
}
