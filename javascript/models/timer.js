class Timer {

  constructor(time, timerText, display){
    this.time = time
    this.display = display
    this.displaySet = $(display).text(timerText)
    this.seconds = (setInterval(this.countdown.bind(this), 1000))
    this.call = call
  }


  countdown(){
    if (this.time > 0){
      $(this.display).text(this.time)
      this.time -= 1
    }
    else {
      clearInterval(this.seconds)
      $(this.display).text(this.time).remove()
      //this.call
      //$('#game-wrapper').css("display","block") needed for start timer
    }
  }







}
