"use client";
import Link from "next/link"; // Import Link from next/link
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
    const imageUrl = "/cd.jpeg"; // Image URL for the hover effect

    return (
        <div className="w-full flex items-center justify-center ml-3 lg:mr-28">
            <div className="relative w-64 h-80 mx-auto">

                <Link href="/product" className="block w-full h-full">
                    <DirectionAwareHover imageUrl={imageUrl}>
                        <div className="flex items-center justify-center h-full">
                            <p className="font-bold text-xl text-center">Explore</p>
                        </div>
                    </DirectionAwareHover>
                </Link>
            </div>
        </div>
    );
}
