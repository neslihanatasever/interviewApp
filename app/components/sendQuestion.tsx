import Link from 'next/link'

export default function SendQuestion(props:any) {
    return (
        <Link className="absolute right-3 bottom-3 shadow-md shadow-orangeIA p-3" href={props.url}>
            <p className="transition-all ease-out hover:-translate-y-1">{props.text}</p>
        </Link>
    )
}
