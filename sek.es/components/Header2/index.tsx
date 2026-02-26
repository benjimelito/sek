import * as React from "react";
import { cn } from "@/lib/utils";
import { header2Variants, type Header2Variants } from "./variants";

/**
 * Header2
 * 
 * Extracted from source site.
 * Original structure:
 * <header>
            <h1 class="entry-title">Tipos de Bachillerato en España ¿qué elegir?</h1>
            <div class="entry-meta">
<time class="published" datetime="2025-04-03T11:35:44+00:00">03/04/2
 * 
 * Observed on: https://www.sek.es/tipos-de-bachillerato-en-espana-que-elegir, https://www.sek.es/en/international-baccalaureate-admission-requirements, https://www.sek.es/testimonial_category/covid, https://www.sek.es/testimonial_category/covid-en, https://www.sek.es/testimonial_category/covid19
 * Usage count: 7x
 */
export interface Header2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Header2Variants {}

export const Header2 = React.forwardRef<HTMLDivElement, Header2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(header2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Header2.displayName = "Header2";
