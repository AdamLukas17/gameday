const mockData = [
  {
    "gameDate": "02/09/2025 00:00:00",
    "games": [
      {
        "gameId": "0022400754",
        "gameCode": "20250209/PHIMIL",
        "gameStatus": 1,
        "gameStatusText": "2:00 pm ET",
        "gameSequence": 3,
        "gameDateEst": "2025-02-09T00:00:00Z",
        "gameTimeEst": "1900-01-01T14:00:00Z",
        "gameDateTimeEst": "2025-02-09T14:00:00Z",
        "gameDateUTC": "2025-02-09T05:00:00Z",
        "gameTimeUTC": "1900-01-01T19:00:00Z",
        "gameDateTimeUTC": "2025-02-09T19:00:00Z",
        "awayTeamTime": "2025-02-09T14:00:00Z",
        "homeTeamTime": "2025-02-09T13:00:00Z",
        "day": "Sun",
        "monthNum": 2,
        "weekNumber": 16,
        "weekName": "Week 16",
        "ifNecessary": false,
        "seriesGameNumber": "",
        "gameLabel": "",
        "gameSubLabel": "",
        "seriesText": "",
        "arenaName": "Fiserv Forum",
        "arenaState": "WI",
        "arenaCity": "Milwaukee",
        "postponedStatus": "A",
        "branchLink": "",
        "gameSubtype": "",
        "isNeutral": false,
        "broadcasters": {
          "nationalTvBroadcasters": [
            {
              "broadcasterScope": "natl",
              "broadcasterMedia": "tv",
              "broadcasterId": 1001318,
              "broadcasterDisplay": "ABC/ESPN+",
              "broadcasterAbbreviation": "ABC/ESPN+",
              "broadcasterDescription": "",
              "tapeDelayComments": "",
              "broadcasterVideoLink": "https://www.espn.com/espnplus/player/_/id/221c126b-569a-4839-afe7-f5f6b7b7eac4?ex_cid=nba",
              "regionId": 1,
              "broadcasterTeamId": -1
            }
          ],
          "nationalRadioBroadcasters": [
            {
              "broadcasterScope": "natl",
              "broadcasterMedia": "radio",
              "broadcasterId": 3,
              "broadcasterDisplay": "ESPN Radio",
              "broadcasterAbbreviation": "ESPNR",
              "broadcasterDescription": "",
              "tapeDelayComments": "",
              "broadcasterVideoLink": "",
              "regionId": 1,
              "broadcasterTeamId": -1
            }
          ],
          "nationalOttBroadcasters": [],
          "homeTvBroadcasters": [],
          "homeRadioBroadcasters": [
            {
              "broadcasterScope": "home",
              "broadcasterMedia": "radio",
              "broadcasterId": 1697,
              "broadcasterDisplay": "620 AM/103.3 FM WTMJ",
              "broadcasterAbbreviation": "WTMJ-AM/FM",
              "broadcasterDescription": "",
              "tapeDelayComments": "",
              "broadcasterVideoLink": "",
              "regionId": 1,
              "broadcasterTeamId": 1610612749
            }
          ],
          "homeOttBroadcasters": [],
          "awayTvBroadcasters": [],
          "awayRadioBroadcasters": [
            {
              "broadcasterScope": "away",
              "broadcasterMedia": "radio",
              "broadcasterId": 1001343,
              "broadcasterDisplay": "102-9 MGK",
              "broadcasterAbbreviation": "WMGK",
              "broadcasterDescription": "",
              "tapeDelayComments": "",
              "broadcasterVideoLink": "",
              "regionId": 1,
              "broadcasterTeamId": 1610612755
            }
          ],
          "awayOttBroadcasters": [],
          "intlRadioBroadcasters": [],
          "intlTvBroadcasters": [],
          "intlOttBroadcasters": []
        },
        "homeTeam": {
          "teamId": 1610612749,
          "teamName": "Bucks",
          "teamCity": "Milwaukee",
          "teamTricode": "MIL",
          "teamSlug": "bucks",
          "wins": 27,
          "losses": 23,
          "score": 0,
          "seed": 0,
          "teamLogo": "https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg"
        },
        "awayTeam": {
          "teamId": 1610612755,
          "teamName": "76ers",
          "teamCity": "Philadelphia",
          "teamTricode": "PHI",
          "teamSlug": "sixers",
          "wins": 20,
          "losses": 31,
          "score": 0,
          "seed": 0,
          "teamLogo": "https://cdn.nba.com/logos/nba/1610612755/global/L/logo.svg"
        },
        "pointsLeaders": []
      }
    ]
  }
]

function changeExtensionIcon(path) {
  console.log("Changing icon to:", path);
  chrome.action.setIcon({ path: path });
}

chrome.runtime.onInstalled.addListener( async function (details) {
  
  const fetchGameData = async (team, date) => {
    const params = new URLSearchParams ({
      'team': team,
      'date': date
    });
    const url = `https://nba-schedule.p.rapidapi.com/schedule?${params}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'e4a436805cmsh747e5fd0ce75c98p1af6c2jsn97e94f69dc8b',
        'x-rapidapi-host': 'nba-schedule.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  const todaysGameData = mockData;

  if(todaysGameData && todaysGameData.length) {
    chrome.action.setIcon({ path: "icons/basketball-game.png" });
  }
});