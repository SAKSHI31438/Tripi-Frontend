import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SmallSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-7 w-7 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        {/* <Skeleton className="h-4 w-[200px]" /> */}
      </div>
    </div>
  );
};

export default SmallSkeleton;
