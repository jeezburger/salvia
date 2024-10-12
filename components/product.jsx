import { GlareCard } from "./ui/glare-card";

const GlareCardDemo = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <GlareCard className="flex flex-col items-center justify-center">
                <img
                    className="h-full w-full absolute inset-0 object-cover"
                    src="/card.png"
                    alt="Product" />
            </GlareCard>
        </div>
    );
};

export default GlareCardDemo; 
