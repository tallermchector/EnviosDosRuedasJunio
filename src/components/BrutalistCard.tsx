
import { cn } from "@/lib/utils";
import React from "react";

interface BrutalistCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
}

export function BrutalistCard({ children, className, variant = 'default' }: BrutalistCardProps) {
  const variantStyles = {
    default: "bg-white",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
  };

  return (
    <div className={cn(
      "border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all p-6",
      variantStyles[variant],
      className
    )}>
      {children}
    </div>
  );
}
