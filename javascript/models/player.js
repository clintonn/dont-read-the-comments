class Player{
  constructor(playerNum){
    this.playerNum = playerNum
    this.wpm = 0
    this.accuracy = 0
    this.score = 0
    this.errors = 0
    this.roundAccuracy = []
    //this.finalAccuracy = averageAccuracy()
  } 

  averageAccuracy(){
    let sum = this.roundAccuracy.reduce(function(a, b){
      return parseInt(a)+parseInt(b)
    })
    let avg = sum / this.roundAccuracy.length
    //debugger
    return avg
  }


}