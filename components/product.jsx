import { GlareCard } from "./ui/glare-card";

const GlareCardDemo = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            <GlareCard className="flex flex-col items-center justify-center relative">
                <img
                    className="h-full w-full absolute inset-0 object-cover"
                    src="/card.png"
                    alt="Product"
                />
            </GlareCard>
            {/* <p className="mt-4 text-white text-sm">em breve</p> */}
        </div>
    );
};

export default GlareCardDemo;
