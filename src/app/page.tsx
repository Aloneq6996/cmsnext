"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session || !session.user) {
    return (
      <div>
        <button onClick={() => signIn("google")}>
          Zaloguj się używając google
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => router.push("/items")}>
          Przejdź do produktów
        </button>
        {/* <p>{session.user}</p> */}
        <button onClick={() => signOut()}>Wyloguj</button>
      </div>
    );
  }
};

export default HomePage;
