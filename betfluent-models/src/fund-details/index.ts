import { FirebaseCollection } from '../firebase-collection';

export type FundDetailType = {
  summaryHtml: string,
  potentialGames: FirebaseCollection<string>
};

export default class FundDetails {
  public summaryHtml: string;

  public potentialGames: Map<string, string>;

  constructor({
    summaryHtml,
    potentialGames,
  }: FundDetailType) {
    this.summaryHtml = summaryHtml;
    this.potentialGames = new Map(Object.keys(potentialGames).map(k => [k, potentialGames[k]]));
  }
}
