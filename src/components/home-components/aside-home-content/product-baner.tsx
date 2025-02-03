export const ProductBanner = () => {
    return (
        <div className="w-full h-[160px] rounded-xl bg-gradient-to-r from-[#14bf60] to-[#108787] duration-300 hover:to-red-400 text-white flex items-center justify-between p-4 relative overflow-hidden">
            <div className="w-[200px] h-[200px] border-2 border-sky-300 absolute rounded-full bottom-4 -right-8 z-0"></div>
            <div className="flex flex-col gap-3 z-10">
                <h3 className="text-lg font-semibold leading-tight">
                    Summer product from top brands
                </h3>
                <p className="text-sm font-light">Buy it Now</p>
            </div>
                <div className="z-10">
                    <img
                        src="src/photo/product-for-baner.png"
                        alt="Headphones"
                        className="w-20 h-20 object-contain"
                    />
                </div>
        </div>
    );
};
