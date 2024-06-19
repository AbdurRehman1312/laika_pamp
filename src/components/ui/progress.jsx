import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef(({ className, value, id, ...props }, ref) => (
  <>
    <div className="flex items-center gap-2">
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden rounded-full bg-black",
          {
            'md:h-8 h-4': id === "pamp",
            'md:h-3 h-2': id !== "pamp" 
          },
          className
        )}
        {...props}>
        <ProgressPrimitive.Indicator
          className="h-full w-full flex-1 bg-secondary transition-all duration-300 ease-in-out rounded-full"
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
      </ProgressPrimitive.Root>
      {id !== "pamp" && (  // Only display the value if id is not 'pamp'
        <div className="font-medium">
          {value}%
        </div>
      )}
    </div>
  </>
));

Progress.displayName = "Progress";
export { Progress };
