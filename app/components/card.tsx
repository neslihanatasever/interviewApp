import Link from "next/link";

export default function Card(props:any) {
    return (
        <div className="my-5">
            <Link href={`/level/${props.number}`} className="flex justify-center items-center gap-5">
                <div className="border-b border-t h-12 w-16 flex justify-center items-center text-2xl">{props.number}</div>
                <div>
                    <h3 className="text-xl">{props.head}</h3>
                    <p className="opacity-50">{props.description}</p>
                </div>
            </Link>
        </div>
    )
}
