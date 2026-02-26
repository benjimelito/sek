import { cva, type VariantProps } from "class-variance-authority";

/**
 * Header2 Variants
 * Extracted from: https://www.sek.es/tipos-de-bachillerato-en-espana-que-elegir, https://www.sek.es/en/international-baccalaureate-admission-requirements, https://www.sek.es/testimonial_category/covid, https://www.sek.es/testimonial_category/covid-en, https://www.sek.es/testimonial_category/covid19
 * Usage count: 7x
 */
export const header2Variants = cva(
  // Base styles observed
  "entry-title",
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

export type Header2Variants = VariantProps<typeof header2Variants>;
