export type TeamType = {
  abbr: string;
  avatarUrl: string;
  color: string;
  id?: string;
  market: string;
  name: string;
};

export default class Team {
  public abbr: string;

  public avatarUrl: string;

  public color: string;

  public id?: string;

  public market: string;

  public name: string;

  constructor({
    abbr, avatarUrl, color, id, market, name,
  }: TeamType) {
    this.abbr = abbr;
    this.avatarUrl = avatarUrl;
    this.color = color;
    if (this.id) this.id = id;
    this.market = market;
    this.name = name;
  }
}
