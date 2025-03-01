
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Github, ExternalLink } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "github" | "live";
  size?: "default" | "sm" | "lg";
  icon?: "github" | "live" | "none";
}

export const CustomButton = ({
  children,
  variant = "primary",
  size = "default",
  icon = "none",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50",
        // Variant styles
        variant === "primary" && "bg-primary text-white hover:bg-primary/90 border-2 border-primary hover:shadow-[0_0_15px_rgba(134,67,245,0.6)] hover:-translate-y-1",
        variant === "secondary" && "border-2 border-muted-foreground text-muted-foreground hover:text-white hover:border-white hover:-translate-y-1",
        variant === "outline" && "border-2 border-primary bg-transparent text-primary hover:bg-primary/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(134,67,245,0.4)]",
        variant === "github" && "bg-[#333] text-white hover:bg-[#444] border-2 border-[#333] hover:shadow-[0_0_15px_rgba(51,51,51,0.6)] hover:-translate-y-1",
        variant === "live" && "bg-[#0EA5E9] text-white hover:bg-[#0EA5E9]/90 border-2 border-[#0EA5E9] hover:shadow-[0_0_15px_rgba(14,165,233,0.6)] hover:-translate-y-1",
        // Size styles
        size === "default" && "h-10 px-6 py-2",
        size === "sm" && "h-8 px-4 text-sm",
        size === "lg" && "h-12 px-8 text-lg",
        className
      )}
      {...props}
    >
      {icon === "github" && <Github className="mr-2 h-4 w-4" />}
      {icon === "live" && <ExternalLink className="mr-2 h-4 w-4" />}
      {children}
    </button>
  );
};

// Export buttonVariants for use in other components
export const customButtonVariants = ({
  variant = "primary",
  size = "default",
  className = "",
}: Partial<ButtonProps> = {}) => {
  return cn(
    "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50",
    // Variant styles
    variant === "primary" && "bg-primary text-white hover:bg-primary/90 border-2 border-primary hover:shadow-[0_0_15px_rgba(134,67,245,0.6)] hover:-translate-y-1",
    variant === "secondary" && "border-2 border-muted-foreground text-muted-foreground hover:text-white hover:border-white hover:-translate-y-1",
    variant === "outline" && "border-2 border-primary bg-transparent text-primary hover:bg-primary/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(134,67,245,0.4)]",
    variant === "github" && "bg-[#333] text-white hover:bg-[#444] border-2 border-[#333] hover:shadow-[0_0_15px_rgba(51,51,51,0.6)] hover:-translate-y-1",
    variant === "live" && "bg-[#0EA5E9] text-white hover:bg-[#0EA5E9]/90 border-2 border-[#0EA5E9] hover:shadow-[0_0_15px_rgba(14,165,233,0.6)] hover:-translate-y-1",
    // Size styles
    size === "default" && "h-10 px-6 py-2",
    size === "sm" && "h-8 px-4 text-sm",
    size === "lg" && "h-12 px-8 text-lg",
    className
  );
};
