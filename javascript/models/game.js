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
    this.rounds = selectedTexts.map(comment => { return new Round(comment)})
    let currentRounds = 0
    this.startTimer = new Timer(3, "STARTING IN", '#countdown')
    setTimeout(this.playRounds.bind(this), 4000)
  }

  playRounds() {
    this.rounds[0].init(0, this.rounds)
  }

  textSelection(){
    let texts = [
      new BadComment("I have heard about the great wall of China and it seems Ike an amazing well. I am planning on visiting it but I don't know which country it's in. I've tried asking my friends but hey just gave me an angry look and walked away... I also asked my little slster and she just laughed. So where is it? Is it in like France at something? Its actually in Engend, used by the tomens to keep the welsh out. half of It was moved to lhe USA In 1872."),
      new BadComment("Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."),
      new BadComment("Nullam id dolor id nibh ultricies vehicula ut id elit."),
      new BadComment("Donec sed odio dui.")
    ]
    let rounds = []
    for (let i = 0; i < 5; i++) {
      let randomSample = Math.floor(Math.random() * texts.length)
      rounds.push(texts[randomSample])
    }
    return rounds
  }
}
