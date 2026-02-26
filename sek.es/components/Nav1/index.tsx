import * as React from "react";
import { cn } from "@/lib/utils";
import { nav1Variants, type Nav1Variants } from "./variants";

/**
 * Nav1
 * 
 * Extracted from source site.
 * Original structure:
 * <nav class="collapse navbar-collapse" role="navigation">
                        <ul id="menu-menu-principal" class="nav navbar-nav"><li class="dropdown menu-institucion-sek"><a class="dropdown-toggle
 * 
 * Observed on: https://sek.es, https://www.sek.es/tipos-de-bachillerato-en-espana-que-elegir, https://www.sek.es/en/international-baccalaureate-admission-requirements, https://www.sek.es/testimonial_category/covid, https://www.sek.es/testimonial_category/covid-en, https://www.sek.es/testimonial_category/covid19
 * Usage count: 6x
 */
export interface Nav1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Nav1Variants {}

export const Nav1 = React.forwardRef<HTMLDivElement, Nav1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(nav1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Nav1.displayName = "Nav1";
