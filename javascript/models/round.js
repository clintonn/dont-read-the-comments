class Round{

  constructor(){
    this.wpm = 0
    this.score = 0
    this.accuracy = 0.0
    this.nextRound = nextRound
  }

  init() {
    // add conditional here to make sure there's no rounds left, otherwise don't initialize a timer
    this.roundTimer = new Timer(10, "TIME LEFT:", "#round-timer", this.nextRound)
    this.$textToType = $("#text-to-type")
    this.$inputArea = $('#typing-area')
    debugger

    // this.displayText = this.displayer
    // this.inputText = this.selectedText.inputText
    this.currentIndex = 0

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
