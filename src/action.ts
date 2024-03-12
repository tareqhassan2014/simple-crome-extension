const onclick = async () => {
    if (chrome && chrome.tabs) {
        const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true,
        });

        if (tab) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id! },
                func: () => {
                    // Selecting elements with the specified class name
                    const elements = document.querySelectorAll(
                        ".w-full.bg-white.md\\:p-8.py-4.px-4.rounded-\\[30px\\]"
                    ) as NodeListOf<HTMLElement>;

                    // Looping through the selected elements
                    elements.forEach((element) => {
                        if (element) {
                            if (
                                element.style.backgroundColor ===
                                "rgb(4, 175, 184)"
                            ) {
                                element.style.backgroundColor = "";
                            } else {
                                element.style.backgroundColor = "#04afb8";
                            }
                        }
                    });
                },
            });
        }
    }
};

export default onclick;
