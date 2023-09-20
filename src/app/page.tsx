import { Logo } from "@/components/logo";
import { SpotsList } from "@/components/spots-list";
import { Button } from "@/components/button";
import { LOCATIONS } from "@/constants/locations";

const MAPLIST = LOCATIONS.map((location, index) => {
  return {
    id: (index + 1).toString().padStart(2, "0"),
    text: location,
  };
});

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-radial from-blue-2 to-blue-1 p-4 text-white">
        <Logo />
        <SpotsList items={MAPLIST} currentItemIndex={0} />
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
