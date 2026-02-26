import * as React from "react";
import { cn } from "@/lib/utils";
import { card1Variants, type Card1Variants } from "./variants";

/**
 * Card1
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="div-sc card-colegios" style="">
<div class="div-sc__content">
<p><a href="https://dublin.sek.es/" target="_blank" rel="noopener noreferrer"></a></p><a href="https://dublin.sek.es/" target=
 * 
 * Observed on: https://sek.es
 * Usage count: 3x
 */
export interface Card1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Card1Variants {}

export const Card1 = React.forwardRef<HTMLDivElement, Card1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(card1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Card1.displayName = "Card1";
