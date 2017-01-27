class Timer {

  constructor(time, timerText){
    this.time = time
    this.$timerText = $("#countdown").text(timerText)
    this.seconds = (setInterval(this.countdown.bind(this), 1000))
  }

  
  countdown(){
    if (this.time > 0){
      $("#countdown").text(this.time)
      this.time -= 1
    }
    else {
      clearInterval(this.seconds)
      $("#countdown").text(this.time).remove()
      $('#game-wrapper').css("display","block")
    }
  }







}