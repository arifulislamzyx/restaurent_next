"use client";
import { SearchInput } from "@/components/search/input";
import { SearchedMenu } from "@/components/search/SearchedMenu";
import SearchFilter from "@/components/search/SearchFilter";
import React, { ReactNode } from "react";

const Page = ({ searchParams }: { searchParams: any }) => {
  const { query } = searchParams;
  console.log("searchParams", searchParams);

  const results = SearchFilter(query);

  return (
    <div>
      <SearchInput openSearch={undefined} search={undefined} />
      {results.length > 0 ? (
        <SearchedMenu menu={results} />
      ) : (
        <p className="flex justify-center items-center mx-auto h-screen text-xl font-bold">
          No Matched product
        </p>
      )}
    </div>
  );
};

export default Page;
