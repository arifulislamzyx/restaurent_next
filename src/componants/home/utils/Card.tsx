// import React from "react";
// import {motion} from "framer-motion"
// import Image from "next/image";
// import { showSlideProduct } from "@/animation/varients";

// const Card = () => {
//   return (
//     <div>
//       <motion.div
//         variants={showSlideProduct}
//         initial={"hidden"}
//         whileInView={"show"}
//         key={items._id}
//         className="max-w-[450px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all "
//       >
//         <Image
//           alt={items.name}
//           width={300}
//           height={150}
//           src={items.image}
//           className="rounded-t-xl items-center transition duration-700 ease-in-out transform hover:scale-105"
//         ></Image>
//         <div className="py-5">
//           <div className="px-3">
//             <h4 className="text-sm font-bold md:text-base lg:text-lg mb-2">
//               {items.name}
//             </h4>
//             <p className="mb-2">{truncateText(items.recipe, textLength)}</p>
//           </div>
//           <div className="flex justify-between px-3">
//             <p className="font-bold">${items.price}</p>
//             <button className="flex items-center gap-1 text-xs font-bold rounded-full p-1 shadow-2xl bg-slate-50 hover:bg-orange-600 hover:rounded-full hover:p-1">
//               <IoBagAdd></IoBagAdd>Add
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Card;
