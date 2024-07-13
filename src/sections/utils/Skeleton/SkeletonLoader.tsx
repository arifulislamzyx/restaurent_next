const SkeletonLoader = () => {
  return (
    <div className="flex gap-2 animate-pulse">
      <div className="rounded-s-xl bg-gray-300 w-16 h-16"></div>
      <div className="flex flex-col w-full">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-2/4"></div>
        <div className="flex justify-between mt-1">
          <div className="h-4 bg-gray-300 rounded w-10"></div>
          <div className="flex items-center gap-1 text-xs font-bold rounded-full p-1 bg-gray-300">
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            Add
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
