chrome.runtime.onInstalled.addListener(function (details) {
    console.log("Extension installed or updated:", details);
  
    fetch('https://stats.nba.com/stats/leaguestandingsv3', {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0",
        "Referer": "https://stats.nba.com"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("API Response:", data);
  
        let iconPath = "basketball-nogame.png"; // Default icon
  
        if (data.some_condition) {  // Replace with a real condition
          iconPath = "basketball-game.png";
        }
  
        chrome.action.setIcon({ path: iconPath });
      })
      .catch(error => {
        console.error("Error fetching NBA stats:", error);
      });
  });
  