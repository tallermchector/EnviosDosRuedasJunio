import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface BrutalistCardProps {
  children?: ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  // New props for generic cards compatibility
  title?: string;
  description?: string;
  icon?: ReactNode;
  bgClass?: string;
}

export function BrutalistCard({
  children,
  className,
  variant = 'default',
  title,
  description,
  icon,
  bgClass
}: BrutalistCardProps) {
  const variantStyles = {
    default: "bg-white text-black",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
  };

  const isGenericCard = title || description || icon;

  const combinedClasses = cn(
    "w-full border-4 border-black p-5 sm:p-6 shadow-brutal flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    bgClass ? bgClass : variantStyles[variant],
    className
  );

  if (isGenericCard) {
    return (
      <div className={combinedClasses}>
        <div className="space-y-3">
          {icon && (
            <div className="inline-flex p-3 border-2 border-black bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-2">
              {icon}
            </div>
          )}
          {title && (
            <h3 className="font-subheadline text-2xl sm:text-3xl uppercase tracking-tight text-foreground">{title}</h3>
          )}
          {description && (
            <p className="font-medium text-sm sm:text-base leading-relaxed">{description}</p>
          )}
        </div>
        {children}
      </div>
    );
  }

  // Fallback to original behavior
  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
}
