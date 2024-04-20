import {auth} from "@clerk/nextjs/server"
import Link from "next/link";
import Image from "next/image";
import { SignInButton, UserButton } from "@clerk/nextjs";

function Header() {
    const {userId} = auth();
  return (
    <header className="flex items-center justify-between px-8 border-b mb-8">
      <div className="flex items-center justify-center h-20 overflow-hidden">
        <Link href="/">
          <Image src="https://links.papareact.com/xgu" alt="logo" width={200} height={100} 
          className="object-contain h-32 cursor-pointer"/>
        </Link>
        </div>

        {userId ? (
          <div>
            <UserButton/>
          </div>
        )
      :(
        <SignInButton afterSignInUrl="/translate" mode="modal"/>
      )}
    </header>
  )
}

export default Header