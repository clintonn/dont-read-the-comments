class Round{

  constructor(){
    this.$textToType = $("#text-to-type")
    this.selectedText = this.textSelection()
    this.displayText = this.selectedText.displayer
    this.inputText = this.selectedText.inputText
    this.$textToType.append(this.selectedText.text)
    this.$inputArea = $('#typing-area')
    this.currentIndex = 0
    // this.startTimer = new Timer(3, "STARTING IN")
    $('#game-wrapper').css("display","block") // comment this out in production
    this.setKeyCheck()
  }

  setKeyCheck() {
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
    debugger
    newDisplay = newDisplay.concat(this.inputText.slice(this.currentIndex))
    this.displayText = newDisplay
    this.$textToType.html(newDisplay.join(""))
  }
}
