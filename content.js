chrome.runtime.sendMessage({ action: "fetchNBAStats" }, (response) => {
    if (response.success) {
        console.log("NBA Stats:", response.data);
    } else {
        console.error("Error fetching NBA stats:", response.error);
    }
});
