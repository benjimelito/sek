import { cva, type VariantProps } from "class-variance-authority";

/**
 * Input2 Variants
 * Extracted from: https://sek.es
 * Usage count: 2x
 */
export const input2Variants = cva(
  // Base styles observed
  "ytp-share-panel-include-playlist-checkbox",
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

export type Input2Variants = VariantProps<typeof input2Variants>;
