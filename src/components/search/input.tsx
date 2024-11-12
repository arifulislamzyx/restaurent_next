import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Form from "next/form";
import { ISearch } from "@/types/search";

export const SearchInput = ({ openSearch, search }: ISearch) => (
  <div className="relative">
    <Search onClick={openSearch} />

    <AnimatePresence>
      {search && (
        <Form className="absolute -top-3   right-80" action="/search">
          <motion.input
            type="search"
            placeholder="Search here ..."
            name="query"
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: "280px",
              opacity: 1,
              borderWidth: "2px",
              borderColor: "black",
            }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="absolute  py-2 pl-5 pr-10 bg-white border border-black rounded-2xl text-black focus:outline-none"
          />
        </Form>
      )}
    </AnimatePresence>
  </div>
);
