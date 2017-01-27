class Round{

  constructor(){
    var $text_to_type = $("#text-to-type")  
    this.text = this.textSelection()
    //this.textCheck = text.this.counter += 1
    this.counter = 0
    var displayText = `<div>${this.text}</div>`
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
    return "yolo yummy youtubezz"
  }

   inputComparer(event){
    if (event.key === this.text[counter]){
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



