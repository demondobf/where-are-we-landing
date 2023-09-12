interface Props {
  text: string;
}

export function Button({ text }: Props) {
  return (
    <button className="bg-blue-2 border-blue-3 text-xl border-6 text-white font-bold px-7 py-3.5 leading-none">
      {text}
    </button>
  );
}
