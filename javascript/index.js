$(document).ready(() => {
  $('#1-player-button').click(function() {
    $('#main-menu').css("display", "none")
    let game = new Game(1)
  })
  $('#2-player-button').click(function() {
    $('#main-menu').css("display", "none")
    let game = new Game(2)
  })
})
