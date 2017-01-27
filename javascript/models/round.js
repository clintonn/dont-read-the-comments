class Round{

  constructor(){
    this.$text_to_type = $("#text-to-type")
    this.selectedText = this.textSelection()
    this.displayText = this.selectedText.displayer
    this.inputText = this.selectedText.inputText
    this.$text_to_type.append(this.selectedText.text)
    this.$roundText = $('#full-text')
    this.$inputArea = $('#typing-area')
    this.currentIndex = 0
    this.setKeyCheck()
  }

  setKeyCheck() {
    this.$inputArea.keypress(this.inputComparer.bind(this))
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

   inputComparer(event, updateIndex){
     this.updateCurrentIndex()
     if (event.key === this.inputText[this.currentIndex]) {
      console.log("Correct!")
      this.displayText[this.currentIndex] = `<span class="correct">${this.inputText[this.currentIndex]}</span>`
      this.$roundText.html(this.displayText.join(""))
    } else {
      debugger
      console.log("Alternatively correct!")
      this.displayText[this.currentIndex] = `<span class="incorrect">${this.inputText[this.currentIndex]}</span>`
      this.$roundText.html(this.displayText.join(""))
    }
  }

  updateCurrentIndex() {
    this.currentIndex = this.$inputArea.val().length
  }

  // setCurrentIndex() {
  //   if ($('#typing-area').val().length == 0) {
  //     this.$currentIndex = 0
  //   } else {
  //     this.$currentIndex = ($('#typing-area').val().length)
  //   }
  // }

}
