import { cva, type VariantProps } from "class-variance-authority";

/**
 * Header1 Variants
 * Extracted from: https://sek.es, https://www.sek.es/tipos-de-bachillerato-en-espana-que-elegir, https://www.sek.es/en/international-baccalaureate-admission-requirements, https://www.sek.es/testimonial_category/covid, https://www.sek.es/testimonial_category/covid-en, https://www.sek.es/testimonial_category/covid19
 * Usage count: 6x
 */
export const header1Variants = cva(
  // Base styles observed
  "header banner navbar navbar-default navbar-static-top",
  {
    variants: {
      variant: {
        default: "",
        // Add more variants based on observed patterns
      },
      size: {
        default: "",
        // Add size variants if detected
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type Header1Variants = VariantProps<typeof header1Variants>;
