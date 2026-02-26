import { cva, type VariantProps } from "class-variance-authority";

/**
 * Card1 Variants
 * Extracted from: https://sek.es
 * Usage count: 3x
 */
export const card1Variants = cva(
  // Base styles observed
  "div-sc card-colegios",
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

export type Card1Variants = VariantProps<typeof card1Variants>;
