import React, { useEffect, useState } from "react";

const UnityComponent = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div>
            {isClient && (
                <iframe
                    frameBorder="0"
                    src="https://itch.io/embed-upload/10350649?color=333333"
                    allowFullScreen
                    width="960"
                    height="660"
                >
                    <a href="https://xhalleyy.itch.io/bleach-trivia">Play Bleach Trivia on itch.io</a>
                </iframe>
            )}
        </div>
    );
};

export default UnityComponent;
