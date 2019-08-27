import Team from '../team';

export type GameType = {
  id: string;
  description: string;
  league: string;
  status: string;
  scheduledTimeUnix: number;
  startTimeMillis: number;
  completedTimeMillis: number;
  awayTeamId: string;
  awayTeamName: string;
  awayTeamAlias: string;
  homeTeamId: string;
  homeTeamName: string;
  homeTeamAlias: string;
  awayTeamScore: number;
  awayScoring: number;
  homeTeamScore: number;
  homeScoring: number;
  clock?: string;
  period: number;
  possession: string;

  // MLB-specific fields
  count?: BaseballCount;

  bases?: BaseballBases;

  awayTeamHits?: number;

  awayTeamErrors?: number;

  homeTeamHits?: number;

  homeTeamErrors?: number;

  pitcher?: string;

  // Football-specific fields
  situation?: FootballSituation;
};

export type BaseballCount = {
  balls: number
  strikes: number
  outs: number
};

export type BaseballBases = {
  first: boolean
  second: boolean
  third: boolean
};

export type FootballSituation = {
  ballLocation: string
  ballYardLine: number
  down: number
  yfd: number
};

export default class Game {
  public id: string;

  public description: string;

  public league: string;

  public status: string;

  public scheduledTimeUnix: number;

  public startTimeMillis: number;

  public completedTimeMillis: number;

  public awayTeamId: string;

  public awayTeamName: string;

  public awayTeamAlias: string;

  public homeTeamId: string;

  public homeTeamName: string;

  public homeTeamAlias: string;

  public awayTeamScore: number;

  public awayScoring: number;

  public homeTeamScore: number;

  public homeScoring: number;

  public clock?: string;

  public period: number;

  public possession: string;

  // MLB-specific fields
  public count?: BaseballCount;

  public bases?: BaseballBases;

  public awayTeamHits?: number;

  public awayTeamErrors?: number;

  public homeTeamHits?: number;

  public homeTeamErrors?: number;

  public pitcher?: string;

  // Football-specific fields
  public situation?: FootballSituation;

  public awayTeam: Team;

  public homeTeam: Team;

  constructor(
    {
      id,
      description,
      league,
      status,
      scheduledTimeUnix,
      startTimeMillis,
      completedTimeMillis,
      awayTeamId,
      awayTeamName,
      awayTeamAlias,
      homeTeamId,
      homeTeamName,
      homeTeamAlias,
      awayTeamScore = 0,
      awayScoring,
      homeTeamScore = 0,
      homeScoring,
      clock,
      period,
      possession,
      // MLB-specific fields
      count: { balls, strikes, outs } = { balls: 0, strikes: 0, outs: 0 },
      bases: { first, second, third } = { first: false, second: false, third: false },
      awayTeamHits = 0,
      awayTeamErrors = 0,
      homeTeamHits = 0,
      homeTeamErrors = 0,
      pitcher,
      // Football-specific fields
      situation: {
        ballLocation,
        ballYardLine,
        down,
        yfd,
      } = {
        ballLocation: '',
        ballYardLine: 50,
        down: 1,
        yfd: 10,
      },
    }: GameType,
    awayTeam: Team,
    homeTeam: Team,
  ) {
    this.id = id;
    this.description = description;
    this.league = league;
    this.status = status;
    this.scheduledTimeUnix = scheduledTimeUnix;
    if (startTimeMillis) this.startTimeMillis = startTimeMillis;
    if (completedTimeMillis) this.completedTimeMillis = completedTimeMillis;
    if (awayTeam) this.awayTeam = awayTeam;
    this.awayTeamId = awayTeamId;
    this.awayTeamName = awayTeamName;
    this.awayTeamAlias = awayTeamAlias;
    if (homeTeam) this.homeTeam = homeTeam;
    this.homeTeamId = homeTeamId;
    this.homeTeamName = homeTeamName;
    this.homeTeamAlias = homeTeamAlias;
    this.awayTeamScore = awayTeamScore;
    this.awayScoring = awayScoring;
    this.homeTeamScore = homeTeamScore;
    this.homeScoring = homeScoring;
    if (clock) this.clock = clock;
    this.period = period;
    if (possession) this.possession = possession;
    if (league === 'MLB') {
      this.count = { balls, strikes, outs };
      this.bases = { first, second, third };
      if (awayTeamHits !== undefined) this.awayTeamHits = awayTeamHits;
      if (awayTeamErrors !== undefined) this.awayTeamErrors = awayTeamErrors;
      if (homeTeamHits !== undefined) this.homeTeamHits = homeTeamHits;
      if (homeTeamErrors !== undefined) this.homeTeamErrors = homeTeamErrors;
      if (pitcher) this.pitcher = pitcher;
    }
    if (league === 'NFL' || league === 'NCAAF') {
      this.situation = {
        down,
        ballLocation,
        ballYardLine,
        yfd,
      };
    }
  }
}
