import EventEmitter from 'events';
import { GameType } from 'betfluent-models';

class GameEventsHandler extends EventEmitter {
  public startGame(league: string, id: string, game: GameType) {
    this.emit(`${league}_${id}_start`, game);
  }

  public onGameStart(league: string, id: string, callback: (game: GameType) => void) {
    return this.on(`${league}_${id}_start`, callback);
  }

  public endGame(league: string, id: string, game: GameType) {
    this.emit(`${league}_${id}_end`, game);
  }

  public onGameEnd(league: string, id: string, callback: (game: GameType) => void) {
    return this.on(`${league}_${id}_end`, callback);
  }
}

const GameEvents = new GameEventsHandler();

export default GameEvents;
