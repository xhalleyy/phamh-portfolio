import React, { useEffect, useState } from "react";

const UnityComponent = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="flex flex-1 justify-center items-center">
            {isClient && (
                <iframe
                    frameBorder="0"
                    src="https://itch.io/embed-upload/10350649?color=333333"
                    allowFullScreen
                    className="h-[280px] w-[320px] md:h-[500px] md:w-[700px] lg:h-[660px] lg:w-[960px]"
                >
                    <a href="https://xhalleyy.itch.io/bleach-trivia">Play Bleach Trivia on itch.io</a>
                </iframe>
            )}
        </div>
    );
};

export default UnityComponent;
