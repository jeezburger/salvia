import Image from "next/image";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { DirectionAwareHoverDemo } from "@/components/cards";


export default function Home() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <DirectionAwareHoverDemo />
    </div>
  );
}
