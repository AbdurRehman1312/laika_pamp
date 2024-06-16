import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <>
  <div className="flex items-center gap-2">
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-3 w-full overflow-hidden rounded-full bg-black", className)}
    {...props}>
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-secondary transition-all rounded-xl"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
    
  </ProgressPrimitive.Root>
  <div className="font-medium">
  {value}%
</div>
  </div>
   
  </>
 
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
