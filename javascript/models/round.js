class Round {

  constructor(selectedText, game){
    this.wpm = 0
    this.score = 0
    this.accuracy = 0.0
    this.errors = 0
    this.selectedText = selectedText
    this.game = game
    this.$textToType = $("#text-to-type")
    this.$inputArea = $('#typing-area')
    this.$showPlayer = $("#show-player")
    this.displayText = this.selectedText.displayer
    this.inputText = this.selectedText.inputText
    this.currentIndex = 0
  }


  init(player) {
    this.player = player
    $('#game-wrapper').css("display","block") // comment this out in production
    this.$textToType.append(this.selectedText.text)
    this.$inputArea.attr('maxlength', this.selectedText.text.length)
    this.$textToType.scrollLeft(0)
    this.roundTimer = new Timer(this.setTimeLimit(), "TIME LEFT:", "#round-timer", this.resetRound.bind(this))
    this.setKeyCheck()
    this.wpmInterval = setInterval(this.displayWPM.bind(this), 1000)
  }

  setTimeLimit() {
    return Math.ceil(this.selectedText.wordLength/40*60/5)*5
    // nearest 5 rounded up, set 40 to custom wpm for modified diff
  }

  resetRound(){
    clearInterval(this.roundTimer.seconds)
    clearInterval(this.wpmInterval)
    this.$inputArea.off()
    this.$inputArea.val('')
    this.$textToType.html('')
    this.$showPlayer.empty()
    this.slideOut()
    this.game.roundCheck()
  }

  setKeyCheck() {
    this.$inputArea.keypress(this.inputComparer.bind(this))
    this.$inputArea.keyup(this.updateText.bind(this))
    $('#post-reply').click(this.resetRound.bind(this))
  }

  inputComparer(event){
    this.updateCurrentIndex()
    if (event.key == "Enter") {}
    else if (event.key === this.inputText[this.currentIndex]) {
      this.displayText[this.currentIndex] = `<span class="correct">${this.inputText[this.currentIndex]}</span>`
      this.$textToType.html(this.displayText.join(""))
    } else {
      this.errors++
      this.displayText[this.currentIndex] = `<span class="incorrect">${this.inputText[this.currentIndex]}</span>`
      this.$textToType.html(this.displayText.join(""))
      this.$inputArea.toggleClass("animated shake")
      setTimeout(() => {this.$inputArea.toggleClass("animated shake")}, 500)
    }
  }

  scrollText(e) {
    let chars = this.selectedText.text.length
    let currentChars = this.$inputArea.val().length
    let scrollWidth = this.$textToType.get(0).scrollWidth
    this.$textToType.animate({scrollLeft: ((scrollWidth / chars) * currentChars) - (15 * scrollWidth / chars)}, 50)
  }

  updateCurrentIndex() {
    this.currentIndex = this.$inputArea.val().length
  }

  updateText(event) {
    if (event.key === "Enter") {
        this.resetRound()
    } else {
      this.updateCurrentIndex()
      let newDisplay = this.displayText.slice(0, this.currentIndex)
      newDisplay = newDisplay.concat(this.inputText.slice(this.currentIndex))
      this.displayText = newDisplay
      this.$textToType.html(newDisplay.join(""))
      this.scrollText(event)
      this.displayAccuracy()
    }
  }

  displayWPM() {
    let currentWPM = this.findWPM()
    $('#round-wpm').text(`${currentWPM}`)
  }

  displayAccuracy() {
    let currentAcc = this.findAcc()
    $('#round-acc').text(`${currentAcc}%`)
  }

  findWPM() {
    let words = this.$inputArea.val().split(" ").length
    let elapsedTime = this.roundTimer.time - this.roundTimer.displayTime // seconds
    return (words / elapsedTime * 60).toFixed()
  }

  findAcc() {
    return ((1 - this.errors / this.selectedText.text.length) * 100).toFixed()
  }

  slideOut() {
    $('#typing-area-wrapper').toggleClass("animated bounceOutLeft")
    setTimeout(() => {$('#typing-area-wrapper').toggleClass("animated bounceOutLeft")}, 750)
  }
}
