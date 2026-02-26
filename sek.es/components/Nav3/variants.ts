import { cva, type VariantProps } from "class-variance-authority";

/**
 * Nav3 Variants
 * Extracted from: https://www.sek.es/testimonial_category/covid-en, https://www.sek.es/testimonial_category/covid19
 * Usage count: 2x
 */
export const nav3Variants = cva(
  // Base styles observed
  "post-nav",
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

export type Nav3Variants = VariantProps<typeof nav3Variants>;
