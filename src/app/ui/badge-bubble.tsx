interface BadgeBubbleProps {
  text: string;
  size: "xs" | "sm" | "md" | "lg";
}

export default function BadgeBubble(props: BadgeBubbleProps) {
  const { text } = props;
  return (
    <div
      className={`h-fit rounded-full border border-gray-100
      ${"text-" + props.size}
      ${
        props.size === "xs"
          ? "px-3 py-0.5"
          : props.size === "sm"
          ? "px-4 py-1"
          : props.size === "md"
          ? "px-4 py-1.5"
          : "px-5 py-2"
      }`}
    >
      {text}
    </div>
  );
}
