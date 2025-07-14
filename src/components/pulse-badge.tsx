import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pulseBadgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        success:
          "border-transparent bg-green-500 text-white hover:bg-green-500/80",
        warning:
          "border-transparent bg-yellow-500 text-white hover:bg-yellow-500/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        default: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
      pulseSpeed: {
        slow: "",
        normal: "",
        fast: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      pulseSpeed: "normal",
    },
  }
);

const pulseAnimationVariants = cva(
  "absolute inset-0 rounded-full opacity-75 animate-ping",
  {
    variants: {
      variant: {
        default: "bg-primary",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        destructive: "bg-destructive",
      },
      pulseSpeed: {
        slow: "animate-pulse [animation-duration:3s]",
        normal: "animate-ping [animation-duration:2s]",
        fast: "animate-ping [animation-duration:1s]",
      },
    },
    defaultVariants: {
      variant: "default",
      pulseSpeed: "normal",
    },
  }
);

export interface PulseBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pulseBadgeVariants> {}

function PulseBadge({
  className,
  variant,
  size,
  pulseSpeed,
  ...props
}: PulseBadgeProps) {
  return (
    <div
      className={cn(pulseBadgeVariants({ variant, size }), className)}
      {...props}
    >
      <div className={cn(pulseAnimationVariants({ variant, pulseSpeed }))} />
      <span className="relative z-10">{props.children}</span>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { PulseBadge, pulseBadgeVariants };
