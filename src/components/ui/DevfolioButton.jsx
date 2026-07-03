// src/components/ui/DevfolioButton.jsx
import React, { useEffect } from 'react';

const DevfolioButton = ({ hackathonSlug }) => {
    useEffect(() => {
        // Check if script already exists to prevent duplicate loading
        if (!document.querySelector(`script[src="https://apply.devfolio.co/v2/sdk.js"]`)) {
            const script = document.createElement('script');
            script.src = 'https://apply.devfolio.co/v2/sdk.js';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div
            className="apply-button"
            data-hackathon-slug={hackathonSlug}
            data-button-theme="dark"
            style={{ height: '44px', width: '312px' }}
        ></div>
    );
};

export default DevfolioButton;