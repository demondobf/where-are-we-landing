interface Item {
  id: string;
  text: string;
}

interface Props {
  items: Item[];
  currentItemIndex: number;
}

export function SpotsList({ items, currentItemIndex }: Props) {
  return (
    <ol className="max-h-96 space-y-4 overflow-y-auto border-6 border-solid border-blue-3 bg-black/20 p-4 text-white">
      {items.map(({ id, text }, index) => {
        const isActive = index === currentItemIndex;
        const dynamicStyles = isActive ? "opacity-100" : "opacity-50";

        return (
          <li key={id} className="border-b-2 border-black/20 pb-4">
            <div className={dynamicStyles}>
              <span className="text-4xl" aria-hidden>
                {id}{" "}
              </span>
              <span className="text-2xl">{text}</span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
