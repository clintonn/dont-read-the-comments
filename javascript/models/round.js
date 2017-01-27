class Round{

  constructor(){
    var $text_to_type = $("#text-to-type")
    this.text = this.textSelection()
    //this.textCheck = text.this.counter += 1
    this.counter = 0
    var displayText = `<span id="full-text">${this.text}</span>`
    $text_to_type.append(displayText)
    this.setKeyCheck()
  }
  setKeyCheck(){
    var $inputArea = $('#typing-area')
    $inputArea.keydown(function(event){
      if (event.key === 'Backspace'){
        alert("backspace, yo!")
      }
      else {
        this.inputComparer(event)
      }
    }.bind(this))
  }

  textSelection(){
    let texts = ["Donec ullamcorper nulla non metus auctor fringilla.", "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.", "Nullam id dolor id nibh ultricies vehicula ut id elit.", "Donec sed odio dui.", "Sed posuere consectetur est at lobortis."]
    let randomSample = Math.round(Math.random() * texts.length)
    return texts[randomSample]
  }

   inputComparer(event){
     debugger
    if (event.key === this.text[this.counter]){
      //set key color black
      //renderedArray[0] = `<span class="green">${inputArray[0]}</span>`
    //renderedArray.join("")
    // and re-render on the screen somehow
      this.counter += 1
    }
    else {
      //set key color red
      this.counter += 1
    }
  }




}
