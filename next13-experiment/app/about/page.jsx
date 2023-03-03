import Movie from "./Movie"

export default async function About() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d`,{
        next: {revalidate: 0}
    })
   
   const res = await data.json()

    return(
     <main>
         <div className="grid gap-16 grid-cols-fluid">
          {res.results.map((movie) => (
          <Movie
           key={movie.id}
           id={movie.id}
           title={movie.title}
           poster_path={movie.poster_path}
           release_date={movie.release_date}
          />
          ))}
        </div>
        </main>
    )


} 