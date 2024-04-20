import  Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1>Hello World</h1>

      <Link href="/translate">
        Translate Now
      </Link>
    </main>
  );
}
