class Round{

  constructor(){
    let $roundText = $('#full-text')
    var $text_to_type = $("#text-to-type")
    this.selectedText = this.textSelection()
    this.counter = 0
    var displayText = `<span id="full-text">${this.selectedText.text}</span>`
    $text_to_type.append(displayText)
    this.setKeyCheck()
  }
  setKeyCheck(){
    var $inputArea = $('#typing-area')
    $inputArea.keyup(function(event) {
      if (event.key == "Backspace") {
        console.log("Backspace pressed")
        console.log(`Counter = ${this.counter}`)
        if (this.counter > 0) {
          this.counter -= 1
        }
        console.log(`Counter is now = ${this.counter}`)
      }
    }.bind(this))
    $inputArea.keypress(function(event){
        this.inputComparer(event)
      }.bind(this))
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
    if (event.key === this.selectedText.inputText[this.counter]){
      console.log("Right key!")

      // !! how do we ignore keyup events that aren't chars?

      //set key color black
      //renderedArray[0] = `<span class="green">${inputArray[0]}</span>`
    //renderedArray.join("")
    // and re-render on the screen somehow
      this.counter += 1
    }
    else {
      console.log("Wrong key!")
      this.counter += 1
    }
  }




}
