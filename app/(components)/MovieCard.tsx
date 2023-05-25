import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { movie } from "@/lib/types"
import Image from "next/image"
import { cn } from "@/lib/utils"

  const MovieCard = ({movie}:{movie:movie}) => {
    return (

      <Dialog >
      <DialogTrigger  asChild>
      <div className=" relative aspect-video inline-block h-36 md:h-40 overflow-hidden  mx-1">
          {movie.poster_path && (
            
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="img"
              fill
              // placeholder="blur"
              // blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRm knyJckliyjqTzSlT54b6bk+h0R//2Q=="
              className=" hover:scale-125  transition duration-5 ease-in-out rounded-md hover:filter   object-fill"
              />
                      )}
        </div>
      </DialogTrigger>
      <DialogContent className=" sm:max-w-2xl   p-0 overflow-hidden  bg-neutral-900 text-white   border-none ">
        <DialogHeader className="  p-0 aspect-video  relative"  >
      <Image
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="img"
              fill
              // placeholder="blur"
              // blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRm knyJckliyjqTzSlT54b6bk+h0R//2Q=="
              className=""
              />
          <DialogTitle></DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter  className=" p-3 sm:p-6 space-x-0 " >
        <p className=" line-clamp-1 text-base font-semibold sm:text-2xl">{movie.title}</p>
        <p  className=" text-sm my-2 text-green-500">Votes {movie.vote_average}%</p>
        <p className=" line-clamp-4 text-sm">{movie.overview}</p>
          {/* <Button type="submit">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>

      
  
    )
  }
  
  export default MovieCard