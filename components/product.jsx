import { GlareCard } from "./ui/glare-card";

const GlareCardDemo = () => {
    return (
        <div className="flex items-center justify-center h-screen" style={{ backgroundColor: '#1a1a1a' }}>
            <GlareCard className="flex flex-col items-center justify-center">
                <img
                    className="h-full w-full absolute inset-0 object-cover"
                    src="/prod.jpeg"
                    alt="Product" />
            </GlareCard>
        </div>
    );
};

export default GlareCardDemo; 
