interface Props {
  text: string;
}

export function Button({ text }: Props) {
  return (
    <button className="border-6 border-blue-3 bg-blue-2 px-7 py-3.5 text-xl leading-none text-white">
      {text}
    </button>
  );
}
