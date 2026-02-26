import * as React from "react";
import { cn } from "@/lib/utils";
import { header1Variants, type Header1Variants } from "./variants";

/**
 * Header1
 * 
 * Extracted from source site.
 * Original structure:
 * <header class="header banner navbar navbar-default navbar-static-top" role="banner">
  <div class="after-header">
   <div class="container">
        <div class="row">
            <div class="col-sm-4 
 * 
 * Observed on: https://sek.es, https://www.sek.es/tipos-de-bachillerato-en-espana-que-elegir, https://www.sek.es/en/international-baccalaureate-admission-requirements, https://www.sek.es/testimonial_category/covid, https://www.sek.es/testimonial_category/covid-en, https://www.sek.es/testimonial_category/covid19
 * Usage count: 6x
 */
export interface Header1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Header1Variants {}

export const Header1 = React.forwardRef<HTMLDivElement, Header1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(header1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Header1.displayName = "Header1";
