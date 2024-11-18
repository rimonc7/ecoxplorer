
const AdventureCard = ({ singleData }) => {
    const { AdventureTitle, EcoFriendlyFeatures, Image } = singleData;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl border border-green-400">
            <figure>
                <img
                    src={Image}
                    alt="Eco Adventure Gear"
                    className="w-full h-48 object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl text-green-500 font-bold">
                    {AdventureTitle}
                </h2>
                <p className="text-gray-600">
                    {
                        EcoFriendlyFeatures.map((EcoFriendlyFeature, index) => <li key={index}>{EcoFriendlyFeature}</li>)
                    }
                </p>
                <div className="card-actions justify-end">
                    <button className="btn bg-green-400 hover:bg-green-500 text-white">
                        Explore Now
                    </button>
                </div>
            </div>
        </div>

    );
};

export default AdventureCard;