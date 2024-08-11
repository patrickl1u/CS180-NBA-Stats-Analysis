const loadCsvDataFunc = require('./mycsv');



let loadAllData = function () {
    loadCsvDataFunc('data/teams.csv',
        function onNext(record) {
            //let nbaTeam = new NbaTeam(record);
            //nbaTeams.push(nbaTeam);
            nbaTeams.push(record);
            //console.log(record);
        },
        function onComplete() {
            console.log('teams Done!');
        }
    );

    loadCsvDataFunc('data/games.csv',
        function onNext(record) {
            nbaGames.push(record);
        },
        function onComplete() {
            console.log('games Done!');
        }
    );

    loadCsvDataFunc('data/games_details.csv',
        function onNext(record) {
            nbaGamesDetails.push(record);
        },
        function onComplete() {
            console.log('games_details Done!');
        }
    );

    loadCsvDataFunc('data/players.csv',
        function onNext(record) {
            nbaPlayers.push(record);
        },
        function onComplete() {
            console.log('players Done!');
        }
    );

    loadCsvDataFunc('data/ranking.csv',
        function onNext(record) {
            nbaRankings.push(record);
        },
        function onComplete() {
            console.log('ranking Done!');
        }
    );
}

class mydb {
    nbaTeams = [];
    nbaGames = [];
    nbaGamesDetails = [];
    nbaPlayers = [];
    nbaRankings = [];

    constructor() {

    }

    loadAllData () {
        let self = this;
        loadCsvDataFunc('data/teams.csv',
            function onNext(record) {
                //let nbaTeam = new NbaTeam(record);
                //nbaTeams.push(nbaTeam);
                self.nbaTeams.push(record);
                //console.log(record);
            },
            function onComplete() {
                console.log('teams Done!');
            }
        )

        loadCsvDataFunc('data/games.csv',
            function onNext(record) {
                self.nbaGames.push(record);
            },
            function onComplete() {
                console.log('games Done!');
            }
        );

        loadCsvDataFunc('data/games_details.csv',
            function onNext(record) {
                self.nbaGamesDetails.push(record);
            },
            function onComplete() {
                console.log('games_details Done!');
            }
        );

        loadCsvDataFunc('data/players.csv',
            function onNext(record) {
                self.nbaPlayers.push(record);
            },
            function onComplete() {
                console.log('players Done!');
            }
        );

        loadCsvDataFunc('data/ranking.csv',
            function onNext(record) {
                self.nbaRankings.push(record);
            },
            function onComplete() {
                console.log('ranking Done!');
            }
        );

        console.log("--- loadAllData done---");
    }

    getPlayers(){
        return this.nbaPlayers;
    }

    getTeams(){
        return this.nbaTeams;
    }
}

module.exports = mydb;