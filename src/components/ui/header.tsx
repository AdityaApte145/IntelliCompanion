import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
    function refreshPage() {
        window.location.reload();
      }
    return (
        <header className="flex justify-between p-5">
            <div>
                <Link className="flex" href='/chat' onClick={refreshPage}>
                    <Image src={logo} alt="IntelliCompanion Logo" width={48} height={48} />
                    <div className="font-extrabold text-2xl pl-2 pt-4 pb-4">IntelliCompanion</div>
                </Link>
            </div>
            <UserButton appearance={{ elements: { userButtonAvatarBox: "w-12 h-12" }}} afterSignOutUrl="/" />
        </header>
    );
};