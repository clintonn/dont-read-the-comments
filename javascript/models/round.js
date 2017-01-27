class Round{

  constructor(){
    this.wpm = 0
    this.score = 0
    this.accuracy = 0.0
  }

  init() {
    // $('#game-wrapper').css("display","block") // comment this out in production
    let nextRound = new Round()
    this.roundTimer = new Timer(10, "TIME LEFT:", "#round-timer", nextRound)
    this.$textToType = $("#text-to-type")
    this.$inputArea = $('#typing-area')

    this.selectedText = this.textSelection()
    this.displayText = this.selectedText.displayer
    this.inputText = this.selectedText.inputText
    this.currentIndex = 0

    // this.startTimer = new Timer(3, "STARTING IN", "#countdown", )
    $('#game-wrapper').css("display","block") // comment this out in production
    this.$textToType.append(this.selectedText.text)
    this.setKeyCheck()
  }

  setKeyCheck() {
    this.$inputArea.keypress((event) => {
      if (event.key == "Enter") {
      }
    })
    this.$inputArea.keypress(this.inputComparer.bind(this))
    this.$inputArea.keyup(this.updateText.bind(this))
  }

  textSelection(){
    let texts = [
      new BadComment("Donec ullamcorper nulla non metus auctor fringilla."),
      new BadComment("Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."),
      new BadComment("Nullam id dolor id nibh ultricies vehicula ut id elit."),
      new BadComment("Donec sed odio dui.")
    ]
    let randomSample = Math.floor(Math.random() * texts.length)
    return texts[randomSample]
  }

  inputComparer(event){
    this.updateCurrentIndex()
    if (event.key === this.inputText[this.currentIndex]) {
      this.displayText[this.currentIndex] = `<span class="correct">${this.inputText[this.currentIndex]}</span>`
      this.$textToType.html(this.displayText.join(""))
    } else {
      console.log("Alternatively correct!")
      this.displayText[this.currentIndex] = `<span class="incorrect">${this.inputText[this.currentIndex]}</span>`
      this.$textToType.html(this.displayText.join(""))
    }
  }

  updateCurrentIndex() {
    this.currentIndex = this.$inputArea.val().length
  }

  updateText(event) {
    this.updateCurrentIndex()
    let newDisplay = this.displayText.slice(0, this.currentIndex)
    newDisplay = newDisplay.concat(this.inputText.slice(this.currentIndex))
    this.displayText = newDisplay
    this.$textToType.html(newDisplay.join(""))
  }
}
