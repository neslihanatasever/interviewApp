import Link from "next/link";

export default function Header() {
    return(
        <div className="border-b h-[70px] flex justify-between items-center p-5 absolute w-full">
            <p className="font-bold text-xl">Intervija</p>
            <Link href={"/"} className="text-md text-orangeIA">Anasayfa</Link>
        </div>
    )
}