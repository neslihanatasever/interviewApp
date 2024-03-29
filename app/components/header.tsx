import Link from "next/link";

export default function Header() {
    return(
        <div className="border-b h-[70px] flex justify-between items-center p-3 absolute w-full">
            <p>Intervija</p>
            <Link href={"/"}>Anasayfa</Link>
        </div>
    )
}