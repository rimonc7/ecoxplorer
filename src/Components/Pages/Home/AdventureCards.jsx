import { useEffect, useState } from "react";
import AdventureCard from "./AdventureCard";

const AdventureCards = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <h2 className="text-5xl font-bold text-center mt-12">
                Plan Your Adventure
            </h2>
            <div className="w-11/12 mx-auto my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    data.map((singleData, index) => <AdventureCard key={index} singleData={singleData} ></AdventureCard>)
                }
            </div>
        </div>

    );
};

export default AdventureCards;