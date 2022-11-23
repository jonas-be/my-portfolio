import React from 'react';
import Link from "next/link";

const ServicesUpCard = () => {
    return (
        <Link href="https://monitor.jonasbe.de" className="max-w-sm h-full p-2">
            <div className="flex items-start gap-3 p-3 bg-zinc-200/60 dark:bg-zinc-900/60 backdrop-blur-[.9px] rounded-2xl drop-shadow-md">
                <div className="mt-1.5 mx-1 w-4 h-4">
                    <div className="absolute w-4 h-4 rounded-full bg-green-600 animate-ping"/>
                    <div className="w-4 h-4 rounded-full bg-green-600"/>
                </div>
                <div>
                    <h3 className="topic text-lg">All Services up!</h3>
                    <p className="text text-sm">Click here to see more Information about Uptime of the Services.</p>
                </div>
            </div>
        </Link>
    );
};

export default ServicesUpCard;
