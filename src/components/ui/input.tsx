import classNames from "classnames";
import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, label, errorMessage, containerClassName, ...props },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className={classNames("input", containerClassName)}>
        {label && (
          <label className="text-sm font-medium text-white mb-2">{label}</label>
        )}

        <div className="relative">
          <input
            type={showPassword ? "text" : type}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  focus-visible:shadow focus-visible:shadow-black disabled:cursor-not-allowed disabled:opacity-50",
              {
                "px-3": type !== "password",
                "pl-3 pr-14": type === "password",
              },
              className
            )}
            ref={ref}
            {...props}
          />

          {type === "password" && (
            <p
              className="text-xs font-medium absolute top-3 right-4 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </p>
          )}
        </div>

        {errorMessage && (
          <p className="text-xs text-red-500 font-medium mt-1">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
