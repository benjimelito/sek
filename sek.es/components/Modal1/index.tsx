import * as React from "react";
import { cn } from "@/lib/utils";
import { modal1Variants, type Modal1Variants } from "./variants";

/**
 * Modal1
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="core-slide videoModal" style="$style">
 * 
 * Observed on: https://sek.es
 * Usage count: 1x
 */
export interface Modal1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Modal1Variants {}

export const Modal1 = React.forwardRef<HTMLDivElement, Modal1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(modal1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Modal1.displayName = "Modal1";
