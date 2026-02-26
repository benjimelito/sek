import { cva, type VariantProps } from "class-variance-authority";

/**
 * Modal2 Variants
 * Extracted from: https://sek.es
 * Usage count: 1x
 */
export const modal2Variants = cva(
  // Base styles observed
  "ytp-mdx-popup-dialog",
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

export type Modal2Variants = VariantProps<typeof modal2Variants>;
