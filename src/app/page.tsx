import { Logo } from "@/components/logo";
import { SpotsList } from "@/components/spots-list";
import { Button } from "@/components/button";

const TEMP = [
  { id: "01", text: "Mega City" },
  { id: "02", text: "Frenzy Fields" },
  { id: "03", text: "Steamy Springs" },
  { id: "04", text: "Shattered Slabs" },
  { id: "05", text: "Breakwater Bay" },
  { id: "06", text: "Shady Stilts" },
  { id: "07", text: "Relentless Retreat" },
  { id: "08", text: "Creeky Compound" },
];

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-radial from-blue-2 to-blue-1 p-4 text-white">
        <Logo />
        <SpotsList items={TEMP} currentItemIndex={0} />
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
