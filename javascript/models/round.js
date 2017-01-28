class Round{

  constructor(comment){
    this.wpm = 0
    this.score = 0
    this.accuracy = 0.0
    this.comment = comment
    this.displayText = this.comment.displayer
    this.inputText = this.comment.inputText
    this.$textToType = $("#text-to-type")
    this.$inputArea = $('#typing-area')
    this.currentIndex = 0
  }

  init(roundId, rounds) {
    this.roundId = roundId
    this.rounds = rounds
    $('#game-wrapper').css("display","block")
    this.$textToType.html(this.displayText.join(""))
    this.timeout = setTimeout(this.endRound.bind(this), 11000)
    this.roundTimer = new Timer(10, "TIME LEFT:", "#round-timer")
    this.setKeyCheck()
  }

  setKeyCheck() {
    this.$inputArea.keypress(this.inputComparer.bind(this))
    this.$inputArea.keyup(this.updateText.bind(this))
  }

  inputComparer(event){
    console.log("Firing off inputComparer!")
    this.updateCurrentIndex()
    if (event.key == this.inputText[this.currentIndex]) {
      console.log("Correct!")
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
    if (event.key === "Enter") {
      this.$inputArea.off()
      this.endRound()
    } else {
      this.updateCurrentIndex()
      let newDisplay = this.displayText.slice(0, this.currentIndex)
      newDisplay = newDisplay.concat(this.inputText.slice(this.currentIndex))
      this.displayText = newDisplay
      this.$textToType.html(newDisplay.join(""))
    }
  }

  endRound() {
    console.log("Entering next round...")
    clearInterval(this.roundTimer.seconds)
    clearTimeout(this.timeout)
    this.$inputArea.off()
    this.$inputArea.val('')
    if (this.roundId < (this.rounds.length - 1)) {
      let newRound = this.rounds[this.roundId + 1]
      setInterval(newRound.init((this.roundId+1), this.rounds), 500)
  } else {
      alert("u finished!!!")
    }
  }

}
