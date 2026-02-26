import { cva, type VariantProps } from "class-variance-authority";

/**
 * Footer1 Variants
 * Extracted from: https://www.sek.es/tipos-de-bachillerato-en-espana-que-elegir, https://www.sek.es/en/international-baccalaureate-admission-requirements
 * Usage count: 2x
 */
export const footer1Variants = cva(
  // Base styles observed
  "",
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

export type Footer1Variants = VariantProps<typeof footer1Variants>;
