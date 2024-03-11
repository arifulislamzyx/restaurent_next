// "use client";
// import useMenus from "@/Hooks/useMenus";
// import Image from "next/image";
// import React, { useState } from "react";
// import { IoBagAdd } from "react-icons/io5";

// const Card = ({ items }) => {
//   //   const { menuItems } = useMenus();
//   //   const { image, name, recipe, price } = items || [];
//   //   const textLength = 40;
//   const [show, setShowAll] = useState(false);
//   console.log("here is menu items", items);

//   //   const truncateText = (text, maxLength) => {
//   //     if (text.length <= maxLength) {
//   //       return text;
//   //     }
//   //     return `${text.slice(0, maxLength)}...`;
//   //   };

//   //   if (!Array.isArray(menuItems)) {
//   //     return <div>No product Load</div>;
//   //   }
//   return (
//     <div>
//       <div className="rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all ">
//         <Image
//           alt={items.name}
//           src={items.image}
//           width={100}
//           height={100}
//           className="rounded-t-xl transition duration-700 ease-in-out transform hover:scale-105"
//         ></Image>
//         <div className="py-5">
//           <div className="px-3">
//             <h4 className="text-sm font-bold md:text-base lg:text-lg mb-2">
//               {items.name}
//             </h4>
//             {/* <p className="mb-2">{truncateText(recipe, textLength)}</p> */}
//           </div>
//           <div className="flex justify-between px-3">
//             <p>${items.price}</p>
//             <p className="flex items-center gap-1">
//               <IoBagAdd></IoBagAdd>Add
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
