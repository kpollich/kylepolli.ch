export interface SpacerProps {
  size: "xs" | "small" | "medium" | "large";
}

export function Spacer({ size }: SpacerProps) {
  const sizes = {
    xs: "mb-2",
    small: "mb-4",
    medium: "mb-8",
    large: "mb-16",
  };

  return <div className={sizes[size]} />;
}
