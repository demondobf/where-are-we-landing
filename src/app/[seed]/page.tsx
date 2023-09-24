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

  return (
    <main>
      <div className="bg-gradient-radial from-blue-2 to-blue-1 p-4 text-white">
        <Logo />
        <SpotsList items={getRandomLocations(seed)} currentItemIndex={0} />

        <div className="mt-1 grid grid-cols-2 gap-1">
          <Button text="Previous" />
          <Button text="Next" />
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
