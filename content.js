'use strict';
// this is just the loader and it removes the CSP so it can make sure there are no errors and run the latest version
//also the acctual menu is located in the root of the repo menu.js
(() => {
    try {
        // Remove CSP meta tags
        document.querySelectorAll('meta[http-equiv="Content-Security-Policy"]').forEach(c => c.remove());

        // Create a script element to inject the Universal Menu script from jsDelivr
        const timestamp = (new Date).getTime();
        const script = document.createElement("script");
        script.src = `https://cdn.jsdelivr.net/gh/SAPH1TE/Universal-Menu@main/menu.js?timestamp=${timestamp}`;

        // Append the script to the body of the document
        document.body.appendChild(script);

        // Log success message
        console.log("Universal Menu script injected successfully after removing CSP meta tags.");
    } catch (error) {
        // Log any errors
        console.error("Error modifying the page or injecting the script:", error);
    }
})();
