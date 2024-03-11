// // import { ApolloServer, gql } from "";
// import { ApolloServer } from "@apollo/server";
// // import { NextResponse } from "next/server";
// import mongoose from "mongoose";
// import Menu from "../../../models/menu.schema";
// import connectionDb from "@/libs/db.connection";
// import { NextResponse } from "next/server";
// import gql from "graphql-tag";

// // interface MenuItem {
// //   _id: string;
// //   name: string;
// //   price: number;
// //   category: string;
// //   recipe: string;
// //   image: string;
// // }

// const typeDefs = gql`
//   type MenuItem {
//     _id: ID!
//     name: String!
//     price: Float!
//     category: String!
//     recipe: String!
//     image: String!
//   }

//   type Query {
//     menuItems: [MenuItem]
//   }
// `;

// const resolvers = {
//   Query: {
//     menuItems: async () => {
//       try {
//         await mongoose.connect(connectionDb);
//         const menuItems = await Menu.find();
//         console.log("mongosse connected", menuItems);
//         return NextResponse.json(menuItems);
//       } catch (error) {
//         console.log("Error", error);
//         throw new Error("Internal Error");
//       }
//     },
//   },
// };
// // export const config = {
// //   api: {
// //     bodyParser: false,
// //   },
// // };
// // const apolloServer = new ApolloServer({
// //   typeDefs,
// //   resolvers,
// // });

// export default apolloServer.createHandler({ path: "/api/menu" });

import Menu from "../../../models/menu.schema";
import mongoose from "mongoose";
import connectionDb from "@/libs/db.connection";
// import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    await mongoose.connect(connectionDb);
    const menuItems = await Menu.find();
    console.log(menuItems);

    return Response.json(menuItems);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ error: "Internal Error" });
  }
};
