"use client";

import { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/button";
import { SpotsList } from "@/components/spots-list";
import { getRandomLocations } from "@/helpers/locations";

interface Props {
  params: {
    seed: string;
  };
}

export default function Page({ params }: Props) {
  const seed = params.seed;

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  function incrementItemIndex() {
    setCurrentItemIndex((a) => a + 1);
  }

  function decrementItemIndex() {
    setCurrentItemIndex((a) => a - 1);
  }

  return (
    <main>
      <div className="bg-gradient-radial from-blue-2 to-blue-1 p-4 text-white">
        <Logo />

        <SpotsList
          items={getRandomLocations(seed)}
          currentItemIndex={currentItemIndex}
        />

        <div className="mt-1 grid grid-cols-2 gap-1">
          <Button text="Previous" onClick={decrementItemIndex} />
          <Button text="Next" onClick={incrementItemIndex} />
        </div>

        <div className="mb-5 mt-16 grid grid-rows-1">
          <p className="mb-2">
            You&#39;re a bambik and those locations don&#39;t fit you?
          </p>
          <Button text="Regenerate" />
        </div>
      </div>
    </main>
  );
}
