import * as React from "react";
import { cn } from "@/lib/utils";
import { nav3Variants, type Nav3Variants } from "./variants";

/**
 * Nav3
 * 
 * Extracted from source site.
 * Original structure:
 * <nav class="post-nav">
    <ul class="pager">
      <li class="previous"><a href="https://www.sek.es/testimonial_category/covid-en/page/2/">← Publicaciones anteriores</a></li>
      <li class="next"><
 * 
 * Observed on: https://www.sek.es/testimonial_category/covid-en, https://www.sek.es/testimonial_category/covid19
 * Usage count: 2x
 */
export interface Nav3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Nav3Variants {}

export const Nav3 = React.forwardRef<HTMLDivElement, Nav3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(nav3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Nav3.displayName = "Nav3";
