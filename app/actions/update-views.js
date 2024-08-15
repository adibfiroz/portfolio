"use server";

import prisma from "../../lib/prisma";


export default async function UpdateViews() {
  try {
    const id = "66bdc30249a2822e0882899a";

    await prisma.view.update({
      where: {
        id: id,
      },
      data: { views: { increment: 1 } },
    });

    return { message: "view increased" };
  } catch (error) {
    throw new Error(error);
  }
}
