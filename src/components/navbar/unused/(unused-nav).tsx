
// export const NavbarRight = () => {
//   const { query } = useKBar()
//   return (
//     <div className="flex">
//       <div className="hidden text-sm sm:flex">
//         {Navlinks.map((link) => (
//           <Link
//             key={link.title}
//             href={link.href !== '/kbar' ? link.href : '/'} // Check if the href is /kbar and if so, prevent navigation by using a dummy URL.
//             onClick={(e) => {
//               if (link.href === '/kbar') {
//                 e.preventDefault() // Prevent the default behavior.
//                 query.toggle() // Open the command bar.
//               }
//             }}
//             rel="noopener noreferrer"
//             className="link-underline link-underline2 rounded tracking-wider text-black hover:bg-slate-50 dark:text-gray-100 dark:hover:bg-gray-700 sm:px-3 sm:py-2"
//           >
//             <div className="flex flex-row items-center font-dosis text-sm font-medium dark:font-normal dark:tracking-wider">
//               {link.href !== '/kbar' && IconMapping[link.title]}
//               {link.href !== '/kbar' && link.title}
//               {link.href === '/kbar' && <div className="m-0 p-0">{IconMapping[link.title]}</div>}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }