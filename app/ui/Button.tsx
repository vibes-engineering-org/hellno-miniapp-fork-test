"use client";
import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  type = "button",
  icon,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center xp-button transition-colors focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-[var(--app-accent)] disabled:opacity-50 disabled:pointer-events-none";

  const variantClasses = {
    primary: "text-[var(--app-foreground)]",
    secondary: "text-[var(--app-foreground)]",
    outline: "text-[var(--app-accent)]",
    ghost: "text-[var(--app-foreground-muted)] !border-none !bg-transparent !box-shadow-none hover:!bg-[var(--app-accent-light)]",
  };

  const sizeClasses = {
    sm: "px-3 py-1 min-h-[22px]",
    md: "px-4 py-2 min-h-[26px]",
    lg: "px-6 py-3 min-h-[32px]",
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="flex items-center mr-2">{icon}</span>}
      {children}
    </button>
  );
}
