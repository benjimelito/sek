import * as React from "react";
import { cn } from "@/lib/utils";
import { modal2Variants, type Modal2Variants } from "./variants";

/**
 * Modal2
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="ytp-mdx-popup-dialog" role="dialog" data-layer="4" style="display: none;">
 * 
 * Observed on: https://sek.es
 * Usage count: 1x
 */
export interface Modal2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Modal2Variants {}

export const Modal2 = React.forwardRef<HTMLDivElement, Modal2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(modal2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Modal2.displayName = "Modal2";
