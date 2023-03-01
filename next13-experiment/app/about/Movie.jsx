import Link from "next/link"

export default function Movie({ title }) {
    return(
        <div>
            <h1>{title}</h1>
            <h2>Release date </h2>
            <Link href={`/asd`}>
              <img src="" alt="" />
            </Link>
        </div>
    )
}
