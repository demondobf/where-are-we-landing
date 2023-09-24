import { LOCATIONS } from "@/constants/locations";
import { seededRandom } from "@/helpers/random";

export function getRandomLocations(seed: string) {
  const rng = seededRandom(seed);
  const locations = createArrayWithLength(LOCATIONS, 99, rng);

  for (let i = locations.length - 1; i > 0; i--) {
    const randomInt = Math.floor(rng() * (i + 1));

    const j = randomInt;
    const x = locations[i];

    locations[i] = locations[j];
    locations[j] = x;
  }

  return locations.map((location, index) => {
    return {
      id: transformToFancyId(index),
      text: location,
    };
  });
}

function createArrayWithLength<TItem>(
  array: TItem[],
  length: number,
  rng: () => number,
): TItem[] {
  return Array.from({ length }, () => getRandomItem(array, rng));
}

function getRandomItem<TItem>(array: TItem[], rng: () => number): TItem {
  return array[Math.floor(rng() * array.length)];
}

function transformToFancyId(index: number): string {
  return (index + 1).toString().padStart(2, "0");
}
