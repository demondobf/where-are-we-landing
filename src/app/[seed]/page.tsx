import { Logo } from "@/components/logo";
import { Button } from "@/components/button";
import dynamic from "next/dynamic";

const LazySpotsListWrapper = dynamic(
  () => import("@/components/spots-list-wrapper"),
  {
    ssr: false,
  },
);

export default function Page({ params }: { params: { seed: string } }) {
  return (
    <main>
      <div className="bg-gradient-radial from-blue-2 to-blue-1 p-4 text-white">
        <Logo />
        <LazySpotsListWrapper seed={params.seed} />
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
