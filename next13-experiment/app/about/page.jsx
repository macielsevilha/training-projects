export default async function About() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
   const res = await data.json()
   console.log(res)
    return(
        <div>
            <h1 className="text-3xl font-bold underline">About page.</h1>
        </div>
    )
}