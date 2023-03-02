import Movie from "./Movie"

export default async function About() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d`)
   const res = await data.json()

    return(
        <div>
            <h1 className="text-3xl font-bold underline">About page.</h1>
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
    )
} 