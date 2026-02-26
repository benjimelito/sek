import * as React from "react";
import { cn } from "@/lib/utils";
import { modal3Variants, type Modal3Variants } from "./variants";

/**
 * Modal3
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="ytp-playlist-menu" role="dialog" id="ytp-id-22" data-layer="5" style="display: none;">
 * 
 * Observed on: https://sek.es
 * Usage count: 1x
 */
export interface Modal3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Modal3Variants {}

export const Modal3 = React.forwardRef<HTMLDivElement, Modal3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(modal3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Modal3.displayName = "Modal3";
