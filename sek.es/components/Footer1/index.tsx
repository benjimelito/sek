import * as React from "react";
import { cn } from "@/lib/utils";
import { footer1Variants, type Footer1Variants } from "./variants";

/**
 * Footer1
 * 
 * Extracted from source site.
 * Original structure:
 * <footer>
                    </footer>
 * 
 * Observed on: https://www.sek.es/tipos-de-bachillerato-en-espana-que-elegir, https://www.sek.es/en/international-baccalaureate-admission-requirements
 * Usage count: 2x
 */
export interface Footer1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Footer1Variants {}

export const Footer1 = React.forwardRef<HTMLDivElement, Footer1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(footer1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Footer1.displayName = "Footer1";
