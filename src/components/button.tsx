import { ComponentProps } from "react";

type LimitedButtonProps = Omit<
  ComponentProps<"button">,
  "children" | "className"
>;

interface Props extends LimitedButtonProps {
  text: string;
}

export function Button({ text, ...props }: Props) {
  return (
    <button
      className="border-6 border-blue-3 bg-blue-2 px-7 py-3.5 text-xl leading-none text-white"
      {...props}
    >
      {text}
    </button>
  );
}
