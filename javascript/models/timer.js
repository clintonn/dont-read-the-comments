class Timer {

  constructor(time, displayText, selector, roundCheck){
    this.roundCheck = roundCheck
    this.time = time // static time
    this.displayTime = time // dynamic time used for display
    this.$timeEl = $(selector) // the element where time is shown
    this.$timeEl.css("display","block")
    this.$timeEl.text(displayText)
    this.roundCheck = roundCheck
    this.seconds = (setInterval(this.countdown.bind(this), 1000))
    
  }

  countdown(){
    if (this.displayTime > 0){
      $(this.$timeEl).text(this.displayTime)
      this.displayTime -= 1
    }
    else {
      clearInterval(this.seconds)
      this.$timeEl.html("")
      $('#game-wrapper').css("display","block")
      this.roundCheck()
    }
  }

}
