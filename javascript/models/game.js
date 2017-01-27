class Game {
  constructor(players) {
    this.players = players
    this.finalWpm = 0
    this.finalAccuracy = 0
    this.finalScore = 0
    this.rounds = []
    this.init()
  }

  init() {
    let selectedTexts = this.textSelection()
    let rounds = selectedTexts.map(comment => { return new Round()})
    this.roundsCount = rounds.length
    this.startTimer = new Timer(3, "STARTING IN", '#countdown', rounds[0])
  }

  textSelection(){
    let texts = [
      new BadComment("Donec ullamcorper nulla non metus auctor fringilla."),
      new BadComment("Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."),
      new BadComment("Nullam id dolor id nibh ultricies vehicula ut id elit."),
      new BadComment("Donec sed odio dui.")
    ]
    let comments = []
    for (let i = 0; i < 2; i++) {
      let randomSample = Math.floor(Math.random() * texts.length)
      comments.push(texts[randomSample])
    }
    return rounds
  }
}
