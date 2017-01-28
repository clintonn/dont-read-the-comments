class Timer {

  constructor(time, displayText, selector, resetRound){
    this.resetRound = resetRound
    this.time = time // static time
    this.displayTime = time // dynamic time used for display
    this.$timeEl = $(selector) // the element where time is shown
    this.$timeEl.css("display","block")
    this.$timeEl.text(displayText)
    this.seconds = (setInterval(this.countdown.bind(this), 1000))
    
  }

  countdown(){
    if (this.displayTime >= 0){
      $(this.$timeEl).text(this.displayTime)
      this.displayTime -= 1
    }
    else {
      $('#game-wrapper').css("display","block")
      this.clearSelf()
      this.resetRound()    
    }
  }

  clearSelf(){
    clearInterval(this.seconds)
    this.$timeEl.css("display", "none")  
  }
  
}
