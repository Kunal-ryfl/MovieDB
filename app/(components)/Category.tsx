import MovieCard from "./MovieCard";
import  {movie} from "../../lib/types"
export  async function Category({
    data,Category_name
  }: {
    data: Promise<Response>;
    Category_name:string
  }) {

    const movies = (await data.then((res) => res.json()))
   return (
    <div className="px-4">
      <h1 className=" md:text-xl text-base " >{Category_name}</h1>
        <div className=" my-2  overflow-auto whitespace-nowrap">
{
    movies.results.map((item:movie)=>(
        <MovieCard movie={item} key={item.id} />
        ))
}
        </div>
    </div>
  )
}

