import { useEffect, useState } from "react";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 4;
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <div className="carousel w-full relative">
            <div
                id="slide1"
                className={`carousel-item relative w-full h-[500px] ${
                    currentSlide === 1 ? "block" : "hidden"
                }`}
            >
                <img
                    src="https://i.ibb.co/qBq5xnn/nature-6567542-1280.jpg"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
                        Embrace the Thrill of{" "}
                        <span className="text-green-400">Eco-Adventure</span>
                    </h1>
                </div>
            </div>

            <div
                id="slide2"
                className={`carousel-item relative w-full h-[500px] ${
                    currentSlide === 2 ? "block" : "hidden"
                }`}
            >
                <img
                    src="https://i.ibb.co/ysp9ntG/mountaineer-1834841-1280.jpg"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
                        Conquer <span className="text-green-400">Majestic Peaks</span>
                    </h1>
                </div>
            </div>

            <div
                id="slide3"
                className={`carousel-item relative w-full h-[500px] ${
                    currentSlide === 3 ? "block" : "hidden"
                }`}
            >
                <img
                    src="https://i.ibb.co/dJjVtfW/mountains-6060586-1280.jpg"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
                        Discover <span className="text-green-400">Hidden Trails</span>
                    </h1>
                </div>
            </div>

            <div
                id="slide4"
                className={`carousel-item relative w-full h-[500px] ${
                    currentSlide === 4 ? "block" : "hidden"
                }`}
            >
                <img
                    src="https://i.ibb.co/TYtSN6g/climbing-2609319-1280.jpg"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
                        Live the Adventure,{" "}
                        <span className="text-green-400">Sustainably</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
