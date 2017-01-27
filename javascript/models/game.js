class Game {
  constructor(players) {
    // add a Timer
    // instantiate a new game
    // fire off the countdown method
    // display the game at the end of the countdown
    this.players = players
    this.finalWpm = 0
    this.finalAccuracy = 0
    this.finalScore = 0
    this.init()
  }

  init() {
    let round = new Round
    this.startTimer = new Timer(3, "STARTING IN", '#countdown', round)
  }
}
