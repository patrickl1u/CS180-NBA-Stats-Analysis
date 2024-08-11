class NbaTeam {
    constructor(
        league_id,
        team_id,
        min_year,
        max_year,
        abbreviation,
        nickname,
        yearfounded,
        city,
        arena,
        arenacapacity,
        owner,
        generalmanager,
        headcoach,
        dleagueaffiliation,
    ) {

        this.league_id = league_id;
        this.team_id = team_id;
        this.min_year = min_year;
        this.max_year = max_year;
        this.abbreviation = abbreviation;
        this.nickname = nickname;
        this.yearfounded = yearfounded;
        this.city = city;
        this.arena = arena;
        this.arenacapacity = arenacapacity;
        this.owner = owner;
        this.generalmanager = generalmanager;
        this.headcoach = headcoach;
        this.dleagueaffiliation = dleagueaffiliation;
    }
}