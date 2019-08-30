export type BetType = {
  createdTimeMillis: number;
  fundId: string;
  gameId: string;
  gameLeague: string;
  id?: string;
  liveTimeMillis?: number;
  managerId: string;
  overUnder?: string;
  pctOfFund?: number;
  points?: number;
  reason?: number;
  returned: number;
  returning: number;
  returnTimeMillis?: number;
  selection?: string;
  selectionId?: string;
  status: string;
  type: string;
  wagered: number;
  fade: boolean;
};


export default class Bet {
  public createdTimeMillis: number;

  public fundId: string;

  public gameId: string;

  public gameLeague: string;

  public id?: string;

  public liveTimeMillis?: number;

  public managerId: string;

  public overUnder?: string;

  public pctOfFund?: number;

  public points?: number;

  public reason?: number;

  public returned: number;

  public returning: number;

  public returnTimeMillis?: number;

  public selection?: string;

  public selectionId?: string;

  public status: string;

  public type: string;

  public wagered: number;

  public fade: boolean;

  constructor({
    createdTimeMillis,
    fundId,
    gameId,
    gameLeague,
    id,
    liveTimeMillis,
    managerId,
    overUnder,
    pctOfFund, // between 0 and 100
    points,
    reason,
    returned = -1,
    returning,
    returnTimeMillis,
    selection,
    selectionId,
    status,
    type,
    wagered,
    fade,
  }: BetType) {
    this.createdTimeMillis = createdTimeMillis;
    if (this.id) this.id = id;
    this.fundId = fundId;
    this.gameId = gameId;
    this.gameLeague = gameLeague;
    if (liveTimeMillis) this.liveTimeMillis = liveTimeMillis;
    this.managerId = managerId;
    if (overUnder) this.overUnder = overUnder;
    if (pctOfFund) this.pctOfFund = pctOfFund;
    if (points) this.points = points;
    if (reason) this.reason = reason;
    this.returned = returned;
    this.returning = returning;
    if (returnTimeMillis) this.returnTimeMillis = returnTimeMillis;
    if (selection) this.selection = selection;
    if (selectionId) this.selectionId = selectionId;
    this.status = status;
    this.type = type;
    this.wagered = wagered || 0;
    this.fade = fade;
  }
}
