import { isAuthenticated } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav className="flex gap-4 text-white">
        <Image src="/logo.svg" alt="Logo" width={38} height={32} />
        <Link href="/" className="flex items-center gap-2">
          <h3>Home</h3>
        </Link>
      </nav>
      {children}
    </div>
  );
};
export default RootLayout;
