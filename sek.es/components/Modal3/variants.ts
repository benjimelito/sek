import { cva, type VariantProps } from "class-variance-authority";

/**
 * Modal3 Variants
 * Extracted from: https://sek.es
 * Usage count: 1x
 */
export const modal3Variants = cva(
  // Base styles observed
  "ytp-playlist-menu",
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

export type Modal3Variants = VariantProps<typeof modal3Variants>;
