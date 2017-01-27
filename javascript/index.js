$(document).ready(() => {
  $('#start').click(function() {
    $('#main-menu').css("display", "none")
    let round = new Round()
  })

  let $inputArea = $('#typing-area')
  $inputArea.keydown(function(event) {
    if (event.key === 'Backspace'){

    }
    else {
      // alert("not a backspace, yo!")
    }
  });

  // const text = {display:"yolo yummy youtubezz", inputArray:display.split("")}

  // const texts = [
  //   {
  //     display: "Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.",
  //     inputArray: display.split("")
  //   },
  //   "Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  //   "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue.",
  //   "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus."
  // ]

  /*
    ON KEYDOWN:
      1. Make sure that the event.key != "Backspace"
      2. if != backspace, check to make sure the event.key == inputArray[textPointer]
      3. increment the textPointer by 1
      4. else if event.key == backspace
      5. decrement the textPointer
      6. also change the color of the char at textpointer to grey

  */

  // function inputChecker(keydownEvent, currentChar) {
  //   if (keydownEvent.key == currentChar) {
  //     // go into the display text and change the color of the char at this position to green
  //   } else {
  //     // change to red
  //   }
  // }

})
