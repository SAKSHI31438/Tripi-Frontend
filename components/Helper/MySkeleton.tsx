import { Skeleton } from "@/components/ui/skeleton";

const MySkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[170px] w-[300px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default MySkeleton;
