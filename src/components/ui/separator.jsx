import { cn } from "../../lib/utils.js"

const Separator = ({ orientation = "horizontal", decorative = true, className, ...props }) => (
  <div
    role={!decorative ? "separator" : undefined}
    aria-orientation={orientation === "vertical" ? orientation : undefined}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    )}
    {...props}
  />
)

export { Separator }