export type ManagerType = {
  avatarUrl?: string;
  id?: string;
  joinTimeMillis: number;
  name: string;
};

export default class Manager {
  public avatarUrl?: string;

  public id?: string;

  public joinTimeMillis: number;

  public name: string;

  constructor({
    avatarUrl,
    id,
    joinTimeMillis,
    name,
  }: ManagerType) {
    if (avatarUrl) this.avatarUrl = avatarUrl;
    if (this.id) this.id = id;
    this.joinTimeMillis = joinTimeMillis;
    this.name = name;
  }
}
