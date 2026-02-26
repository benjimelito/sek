import { cva, type VariantProps } from "class-variance-authority";

/**
 * Nav2 Variants
 * Extracted from: https://sek.es, https://www.sek.es/tipos-de-bachillerato-en-espana-que-elegir, https://www.sek.es/en/international-baccalaureate-admission-requirements, https://www.sek.es/testimonial_category/covid, https://www.sek.es/testimonial_category/covid-en, https://www.sek.es/testimonial_category/covid19
 * Usage count: 6x
 */
export const nav2Variants = cva(
  // Base styles observed
  "collapse navbar-collapse mobile-menu",
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

export type Nav2Variants = VariantProps<typeof nav2Variants>;
