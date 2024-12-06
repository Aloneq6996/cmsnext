import { getSession } from "next-auth/react";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export const GET = async () => {
  const session = await getSession();

  console.log(session, session?.user, session?.expires);

  if (!session) {
    return Response.json({ error: "Unauthorized" });
  }

  const payload = await getPayload({
    config: configPromise,
  });

  try {
    const products = await payload.find({
      collection: "products",
    });
    return Response.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return Response.json({ error: "Failed to fetch products" });
  }
};
