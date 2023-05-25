import Image from "next/image";
import { Inter } from "next/font/google";
import { Category } from "./(components)/Category";
import { Suspense } from "react";
import LoadingSkel from "./(components)/LoadingSkel";
import { Category_type } from "@/lib/types";

const inter = Inter({ subsets: ["latin"] });

let arr:Category_type[] = [
{data:`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_API}`,Category_name:"Trending"},
{data:`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API}`,Category_name:"Popular"},
{data:`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API}`,Category_name:"Upcomming"},
]

export default async function Home() {
  return (
    <div className="   md:px-5  md:py-2 text-white h-[100vh]">
      {
        arr.map((x)=>(
        <Suspense fallback={<LoadingSkel />}>
        {/* @ts-expect-error Async Server Component */}
        <Category
          data={fetch(
            x.data,
            {cache:"no-store"})} 
            Category_name={x.Category_name}
            />
      </Suspense>

        ))

          }
     
    </div>
  );
}
