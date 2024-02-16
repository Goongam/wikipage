import Link from "next/link";

export default async function Header() {
  return (
    <header className="w-full min-h-14 bg-black flex justify-between items-center text-white px-3">
      <Link href={"/"} className="font-extrabold text-3xl">
        CODING WIKI
      </Link>
      <Link href={"/new"} className="font-bold">
        추가
      </Link>
    </header>
  );
}
