"use client";

import { LOCATIONS } from "@/constants/locations";
import { shuffle } from "@/helpers/shuffle";
import { SpotsList } from "./spots-list";

interface Props {
  seed: string;
}

export function SpotsListWrapper({ seed }: Props) {
  const GENLIST = Array.from(
    { length: 99 },
    () => LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
  );

  const MAPLIST = shuffle(GENLIST, Number(seed)).map((location, index) => {
    return {
      id: (index + 1).toString().padStart(2, "0"),
      text: location,
    };
  });

  return <SpotsList items={MAPLIST} currentItemIndex={0} />;
}

export default SpotsListWrapper;
