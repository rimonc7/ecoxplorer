import { useLoaderData, useParams } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import { FaCheckCircle } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { AiOutlineWarning } from "react-icons/ai";
import moment from 'moment';

const AdventureDetails = () => {
    const data = useLoaderData();
    const { ID } = useParams();

    const matchedAdventure = data.find((item) => item.ID === parseInt(ID));

    const handleTalkToExpert = () => {
        const currentTime = moment();
        const startTime = moment('10:00 AM', 'hh:mm A');
        const endTime = moment('8:00 PM', 'hh:mm A');

        if (currentTime.isBetween(startTime, endTime)) {
            window.open("https://meet.google.com/", "_blank");
        } else {
            document.getElementById('my_modal_5').showModal();
        }
    }



    return (
        <div>
            <header className="w-11/12 mx-auto">
                <nav>
                    <Nav />
                </nav>
            </header>
            <main className="w-11/12 mx-auto py-10">
                <h2 className="text-center my-10 text-4xl font-extrabold text-gray-800 bg-gradient-to-r from-[#87CEEB] to-green-400 text-transparent bg-clip-text shadow-md w-fit mx-auto p-4 rounded-lg">
                    Adventure Details: Explore Your Next Great Journey
                </h2>
                {matchedAdventure ? (
                    <div>
                        <div className="flex flex-col lg:flex-row items-start gap-8 bg-white p-6 rounded-lg shadow-lg">
                            <img
                                src={matchedAdventure.Image}
                                alt={matchedAdventure.AdventureTitle}
                                className="w-full lg:w-1/2 h-auto rounded-lg shadow-md object-cover"
                            />
                            <div className="flex-1">
                                <h1 className="text-3xl font-bold text-gray-800">
                                    {matchedAdventure.AdventureTitle}
                                </h1>
                                <p className="mt-4 text-lg text-gray-600">
                                    {matchedAdventure.ShortDescription}
                                </p>
                                <div className="mt-6 space-y-2 text-gray-700">
                                    <p className="flex items-center gap-2">
                                        <strong className="text-gray-800">Location:</strong> {matchedAdventure.Location}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <strong className="text-gray-800">Duration:</strong> {matchedAdventure.Duration}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <strong className="text-gray-800">Level:</strong> {matchedAdventure.AdventureLevel}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <strong className="text-gray-800">Cost:</strong> ${matchedAdventure.AdventureCost}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <strong className="text-gray-800">Max Group Size:</strong> {matchedAdventure.MaxGroupSize}
                                    </p>
                                </div>
                                <button onClick={handleTalkToExpert} className="mt-8 px-6 py-3 bg-gradient-to-r from-[#87CEEB] to-green-400 text-white text-lg font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-[#87CEEB] hover:to-blue-700 transition duration-300 ease-in-out">
                                    Talk with Expert
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                            <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
                                <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                    <FaCheckCircle className="text-green-400" /> What's Included
                                </h2>
                                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                    {matchedAdventure.IncludedItems.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <FaCheckCircle className="text-green-400" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
                                <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                    <BsSun className="text-blue-500" /> Eco-Friendly Features
                                </h2>
                                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                    {matchedAdventure.EcoFriendlyFeatures.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <BsSun className="text-blue-400" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="bg-gray-100 p-6 rounded-lg shadow-lg md:col-span-2">
                                <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                    <AiOutlineWarning className="text-yellow-500" /> Special Instructions
                                </h2>
                                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                    {matchedAdventure.SpecialInstructions.map((instruction, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <AiOutlineWarning className="text-yellow-400" />
                                            {instruction}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-red-500 text-2xl mt-20">Adventure not found.</p>
                )}
                {/* modal */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Out of Office Hours</h3>
                        <p className="py-4">Sorry, we are only available between 10:00 AM and 8:00 PM.</p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AdventureDetails;
