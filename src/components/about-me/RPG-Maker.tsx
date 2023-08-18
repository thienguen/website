// import Image from "next/image"

// function classNames(...classes: any) {
//   return classes.filter(Boolean).join(" ")
// }

// export async function TopSongs(props: any) {
//   const data = await getSpotifyTopSongs()
//   return (
//     <>
//       <div className="max-w-4xl h-full overflow-x-auto rounded-lg min-h-[13rem] bg-[#1a202c]">
//         <div className="p-5 w-fit">
//           <h1 className="font-bold text-text-color text-lg w-auto">
//             Top Songs{" "}
//             <span className="hidden xxsm:inline">
//               (From{" "}
//               <a
//                 href="https://retrievify.hayasaka.moe"
//                 className="text-text-darker hover:text-pink-accent transition-all ease-in-out hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[1px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-pink-accent before:absolute before:left-0 before:bottom-0"
//               >
//                 Retrievify
//               </a>
//               )
//             </span>
//           </h1>
//           <div className="mt-2 flex gap-4 w-fit">
//             {data.data.items.map((song: any) => (
//               <a key={song.id} href={song.external_urls.spotify} className="w-fit">
//                 <div className="group w-[170px] relative h-full">
//                   <div
//                     style={{ width: 170, height: 170 }}
//                     className="z-10 cursor-pointer flex flex-col transition-color duration-200 rounded-lg bg-transparent dark:group-hover:bg-black group-hover:bg-white dark:group-hover:bg-opacity-60 group-hover:bg-opacity-70 absolute"
//                   >
//                     <div className="absolute bottom-3 px-2 transition-all duration-200 text-transparent group-hover:text-black dark:group-hover:text-white">
//                       <h4 className="font-metropolis-bold text-lg leading-5 line-clamp-2">{song.name}</h4>
//                       <p className="text-md font-metropolis leading-5 w-36 text-ellipsis whitespace-nowrap overflow-hidden">
//                         {song.artists.map((artist: any) => artist.name).join(", ")}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="h-[170px] w-[170px]">
//                     <Image
//                       fill
//                       alt={song.name}
//                       src={song.album.images[0].url}
//                       placeholder="blur"
//                       style={{ objectFit: "cover" }}
//                       blurDataURL={song.album.images[2].url}
//                       className="rounded-lg"
//                     />
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// async function getSpotifyTopSongs() {
//   const res = await fetch(`https://api.jackli.dev/spotify/top-items/tracks?time_range=short_term&limit=10`, {
//     next: { revalidate: 60 },
//   })
//   if (!res.ok) {
//     throw new Error("Failed to fetch spotify top songs")
//   }

//   return res.json()
// }
