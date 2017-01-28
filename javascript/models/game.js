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
    //debugger
    let selectedText = this.textSelection()
    let round = new Round(selectedText, this)
    this.rounds.push(round)
    round.init()
  }

  roundCheck(){
    if (this.rounds.length < 3){
      this.init()
    }
    else {
      console.log("end game")
    }
  }

  endGame(){
    alert("end game!!")
  }

  textSelection(){
    let texts = [
      new BadComment("Donec ullamcorper nulla non metus auctor fringilla."),
      new BadComment("Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."),
      new BadComment("Nullam id dolor id nibh ultricies vehicula ut id elit."),
      new BadComment("Donec sed odio dui.")
    ]
    return texts[Math.floor(Math.random() * texts.length)]

    // let comments = []
    // for (let i = 0; i < 2; i++) {
    //   let randomSample = Math.floor(Math.random() * texts.length)
    //   comments.push(texts[randomSample])
    // }
    // return rounds
  }
}
