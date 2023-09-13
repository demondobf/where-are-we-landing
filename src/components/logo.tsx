interface Props {
  width?: number;
  height?: number;
}

export function Logo({ width = 379, height = 240 }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.webp"
      alt="Where Are We Landing?"
      width={width}
      height={height}
    />
  );
}
