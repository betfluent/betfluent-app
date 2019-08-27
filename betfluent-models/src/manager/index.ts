export type ManagerType = {
  avatarUrl?: string;
  id: string;
  joinTimeMillis: number;
  name: string;
  details: ManagerDetails;
};

export type ManagerDetails = {
  specialty: string
  summary: string
};

export default class Manager {
  public avatarUrl?: string;

  public id: string;

  public joinTimeMillis: number;

  public name: string;

  public details: ManagerDetails;

  constructor({
    avatarUrl,
    id,
    joinTimeMillis,
    name,
  }: ManagerType,
  details: ManagerDetails) {
    if (avatarUrl) this.avatarUrl = avatarUrl;
    this.id = id;
    this.joinTimeMillis = joinTimeMillis;
    this.name = name;
    this.details = details;
  }
}
