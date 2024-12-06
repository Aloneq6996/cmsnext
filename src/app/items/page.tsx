import axios from "axios";
import Layout from "../layout";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";

interface Item {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: {
    url: string;
  };
}

const fetchItems = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/get_products");
    return res.data.docs;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const ProductsPage = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/not-found");
    return null;
  }

  const items = await fetchItems();

  return (
    <Layout>
      <div>
        <h1>Witam w Mega sklepie</h1>
        <h2>Produkty:</h2>
        <ul>
          {items.map((item: any) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <h5>{item?.description}</h5>
              <p>Cena: ${item.price}</p>
              <img src={item.image.url} alt={item.name} width="100" />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default ProductsPage;
