// > Did I shutter?, typewriter title is good, but i failed
// useEffect(() => {
//   const SITE_NAME = metadata.creator;
//   const TIME = 0.2 * 1000;

//   const yieldTime = (seconds: number) => new Promise((resolve) => setTimeout(resolve, seconds));

//   async function initTypewriter() {
//     await yieldTime(TIME * 4);
//     for (let s = SITE_NAME.length; s >= 0; s--) {
//       let newTitle = SITE_NAME.substring(0, s);  // Use .substring() here
//       if (s === 0) newTitle = '_';

//       document.title = newTitle;
//       await yieldTime(TIME);
//     }

//     await yieldTime(TIME);
//     for (let s = 0; s <= SITE_NAME.length; s++) {
//       let newTitle = SITE_NAME.substring(0, s);  // Use .substring() here
//       if (s === 0) newTitle = '_';

//       document.title = newTitle;
//       await yieldTime(TIME);
//     }

//     await initTypewriter();  // Call the function without 'await'
//   }

//   void initTypewriter();  // Call the function without 'await'

//   // Cleanup the effect when component unmounts
//   return () => {
//     document.title = SITE_NAME;
//   };
// }, []);

// // Initialize SVG elements as list items
// const initialItems = [
//   {
//     id: 1,
//     component: <motion.circle cx="100" cy="100" r="80" stroke="#ff0055" variants={draw} custom={1} />,
//   },
//   {
//     id: 2,
//     component: <motion.line x1="220" y1="30" x2="360" y2="170" stroke="#00cc88" variants={draw} custom={2} />,
//   },
//   {
//     id: 3,
//     component: <motion.line x1="220" y1="170" x2="360" y2="30" stroke="#00cc88" variants={draw} custom={2.5} />,
//   },
//   {
//     id: 4,
//     component: (
//       <motion.rect width="140" height="140" x="410" y="30" rx="20" stroke="#0099ff" variants={draw} custom={3} />
//     ),
//   },
//   {
//     id: 5,
//     component: <motion.circle cx="100" cy="300" r="80" stroke="#0099ff" variants={draw} custom={2} />,
//   },
//   {
//     id: 6,
//     component: <motion.line x1="220" y1="230" x2="360" y2="370" stroke="#ff0055" custom={3} variants={draw} />,
//   },
//   {
//     id: 7,
//     component: <motion.line x1="220" y1="370" x2="360" y2="230" stroke="#ff0055" custom={3.5} variants={draw} />,
//   },
//   {
//     id: 8,
//     component: (
//       <motion.rect width="140" height="140" x="410" y="230" rx="20" stroke="#00cc88" custom={4} variants={draw} />
//     ),
//   },
//   {
//     id: 9,
//     component: <motion.circle cx="100" cy="500" r="80" stroke="#00cc88" variants={draw} custom={3} />,
//   },
//   {
//     id: 10,
//     component: <motion.line x1="220" y1="430" x2="360" y2="570" stroke="#0099ff" variants={draw} custom={4} />,
//   },
//   {
//     id: 11,
//     component: <motion.line x1="220" y1="570" x2="360" y2="430" stroke="#0099ff" variants={draw} custom={4.5} />,
//   },
//   {
//     id: 12,
//     component: (
//       <motion.rect width="140" height="140" x="410" y="430" rx="20" stroke="#ff0055" variants={draw} custom={5} />
//     ),
//   },
// ]

// export default function Motion() {
//   const [items, setItems] = useState(initialItems)

//   return (
//     <Reorder.Group values={items} onReorder={setItems}>
//       {items.map((item) => (
//         <Reorder.Item key={item.id} value={item} drag={true}>
//           <motion.svg width="30" height="30" viewBox="0 0 600 600" initial="hidden" animate="visible">
//             {item.component}
//           </motion.svg>
//         </Reorder.Item>
//       ))}
//     </Reorder.Group>
//   )
// }

// place to throw stuff in
{
  /* <span
            className={cn(
              'dark:bg-gradient-to-b dark:from-slate-300 dark:to-gray-300 dark:text-[#0D0D0D]', // light
              'bg-gradient-to-b from-slate-500 to-gray-900 text-slate-200', // dark
              'span-h2 absolute flex h-full w-full origin-center flex-col justify-center '
            )}
          >
            Dreams
        </span> */
}
