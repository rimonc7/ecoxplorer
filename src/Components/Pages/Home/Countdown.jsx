import React, { useState, useEffect } from "react";

const Countdown = () => {
    const targetDate = new Date("2024-12-25T00:00:00").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://i.ibb.co/PDVXX7D/362dbc1c.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="text-center">
                    <h1 className="mb-5 text-5xl font-bold capitalize">New Adventures Begin in</h1>
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center ">
                        <div className="flex flex-col">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": timeLeft.days }}></span>
                            </span>
                            days
                        </div>
                        <div className="flex flex-col">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": timeLeft.hours }}></span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": timeLeft.minutes }}></span>
                            </span>
                            min
                        </div>
                        <div className="flex flex-col">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": timeLeft.seconds }}></span>
                            </span>
                            sec
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
