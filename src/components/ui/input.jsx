import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, id, ...props }, ref) => {
  // State for the default file input
  const [fileName, setFileName] = React.useState("No file chosen");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "No file chosen");
  };

  // State for the "banner" file input
  const [fileNameUpload, setFileNameUpload] = React.useState("Upload a Banner");
  const handleFileChangeUpload = (event) => {
    const file = event.target.files[0];
    setFileNameUpload(file ? file.name : "Upload a Banner");
  };

  if (type === "file") {
    if (id === "banner") {
      return (
        <div className={cn("flex items-center", className)}>
          <input
            type="file"
            id={id}
            ref={ref}
            onChange={handleFileChangeUpload}
            className="hidden"
            {...props}
          />
          <label
            htmlFor={id}
            className="flex h-10 w-full md:w-[100%] lg:px-10 px-5 cursor-pointer rounded-xl border-0 bg-primary text-white justify-center items-center md:py-7 py-5 text-nowrap lg:text-lg text-base font-medium focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 file:font-medium disabled:cursor-not-allowed disabled:opacity-50"
          >
            {fileNameUpload}
          </label>
        </div>
      );
    } else {
      // Default file input setup
      return (
        <div className={cn("flex items-center", className)}>
          <input
            type="file"
            id={id}
            ref={ref}
            onChange={handleFileChange}
            className="hidden"
            {...props}
          />
          <label
            htmlFor={id}
            className="flex h-10 w-full md:w-[100%] lg:px-10 px-5 cursor-pointer rounded-xl border-[3px] border-primary bg-background justify-center items-center md:py-7 py-5 text-nowrap lg:text-lg text-base font-medium text-primary placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 file:font-medium disabled:cursor-not-allowed disabled:opacity-50"
          >
            {fileName}
          </label>
        </div>
      );
    }
  }
  return (
    <input
      type={type}
      id={id}
      className={cn(
        "flex h-10 rounded-md border-[3px] border-primary bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
