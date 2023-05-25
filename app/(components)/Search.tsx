"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/search-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChangeEvent, useState } from "react"
import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { SearchIcon } from "lucide-react"
import { movie } from "@/lib/types"
import Image from "next/image"


export function Search() {
    const [searchArray,setSearchArray] = useState([]); 
    const submitContact = async (event:ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        // alert(`So your name is ${event.target.name.value}?`);
        const query = event.target.value;
        console.log("query = ",query)
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API}&query=${query}`);
        const res =await data.json();
        setSearchArray(res.results)
        // setActive(false)
    };
    return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="default" className=" hover:bg-slate-800 hover:text-white text-slate-400 border-[1px]    border-white ">search movie</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl py-1 px-1 border-slate-400 border-2 bg-slate-900 text-white ">
        <DialogHeader >
          <DialogTitle className=" flex px-1  gap-1 items-center "  >
            <SearchIcon className=" stroke-slate-400 "/>
            <Input id="name" onChange={submitContact} placeholder=" Search movies"  className=" text-slate-300  text-base font-normal focus-visible:ring-0 focus-visible:ring-offset-0 ring-0  border-none outline-none  rounded-sm  "  />
          </DialogTitle>
            <Separator className="my-2  bg-slate-400" />
          
          <DialogDescription >
          <ScrollArea className={searchArray.length !== 0 ?"h-72 w-full rounded-md border-0":"  w-full rounde0d-md border-0"}>
      <div className="p-2 ">
        <h4 className="mb-4 text-base  font-medium leading-none text-slate-400">Movies </h4>
        {searchArray.length>0 && searchArray.map((item:movie) => (
          <React.Fragment key={item.id}>








<Dialog >
      <DialogTrigger  asChild>
            <div className="text-base hover:bg-slate-700 grid grid-cols-10  gap-2   rounded-md p-2" key={item.id}>
            <div className=" col-span-1">

            <Image
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt="img"
              height={40}
              width={40}
              // placeholder="blur"
              // blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRm knyJckliyjqTzSlT54b6bk+h0R//2Q=="
              className=" w-16 h-10 sm:w-12 sm:h-16 aspect-square  rounded-sm    "
              />
              </div>
              <div className=" col-span-9">

            <p className="  line-clamp-1">{item.title}</p>
              </div>
            </div>
     
      </DialogTrigger>
      <DialogContent className=" sm:max-w-2xl   p-0  bg-neutral-900 text-white   border-none ">
        <DialogHeader className="  p-0 aspect-video relative"  >
      <Image
              src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
              alt="img"
              fill
              // placeholder="blur"
              // blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRm knyJckliyjqTzSlT54b6bk+h0R//2Q=="
              className="    -z-10  object-cover"
              />
          <DialogTitle></DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter  className=" p-3 sm:p-6 space-x-0 " >
        <p className=" text-base line-clamp-1 font-semibold sm:text-2xl">{item.title}</p>
        <p  className=" text-sm my-2 text-green-500">Votes {item.vote_average}%</p>
        <p className=" line-clamp-4 text-sm">{item.overview}</p>
          {/* <Button type="submit">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>

          





            {/* <Separator className="my-2  bg-slate-400" /> */}
          </React.Fragment>
        ))}
        {
          searchArray.length<1 && <p className="  text-slate-400 font-bold text-base text-center">Nothing here.</p> 
        }
      </div>
    </ScrollArea>
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter>
       
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}



export default Search