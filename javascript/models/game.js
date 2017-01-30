class Game {
  constructor(players) {
    this.players = players
    this.finalWpm = 0
    this.finalAccuracy = 0
    this.finalScore = 0
    this.currentRound = 0
    this.init()
  }

  init() {
    let selectedTexts = this.textSelection()
    this.rounds = selectedTexts.map(comment => { return new Round(comment, this)})
    this.playRounds()
  }

  playRounds() {
    this.rounds[this.currentRound].init()
    this.currentRound += 1
  }

  roundCheck(){
    if (this.currentRound < this.rounds.length - 1){
      this.playRounds()
    }
    else {
      this.endGame()
    }
  }

  endGame(){
    this.hideGame()
  }

  hideGame() {
    $('#round-timer').toggleClass("animated fadeOutDown")
    $('#game-wrapper').toggleClass("animated fadeOutDown")
    setTimeout(function() {
      $('#round-timer').css("display", "none")
      $('#game-wrapper').css("display", "none")
      this.showResults()
    }.bind(this), 500)
  }

  showResults() {
    debugger
    $('#final-wpm-player-1').css("display", "block")
    $('#final-acc-player-1').css("display", "block")
    if (this.players.length == 2) {
      $('#final-wpm-player-2').css("display", "block")
      $('#final-acc-player-2').css("display", "block")
    }
    $('#final-results').css("display", "block")
    $('#final-results').toggleClass("animated fadeInUp")
  }

  textSelection(){
   let threads = [
      [
        new BadComment("I have heard about the great wall of China and it seems Ike an amazing well."),
        new BadComment("I am planning on visiting it but I don't know which country it's in. I've tried asking my friends but hey just gave me an angry look and walked away..."),
        new BadComment(" I also asked my little sister and she just laughed. So where is it? Is it in like France at something?"),
        new BadComment("Its actually in Engend, used by the tomens to keep the welsh out. half of It was moved to lhe USA In 1872.")
      ],

      [
        new BadComment("My mom is in the hospital after being struck more or less head on while a passenger in her friend's car. They were wearing their seatbelts and the airbags deployed so all four people in both cars are alive."),

        new BadComment("She is staying the night at medical center in and is fully expecting to be discharged in the morning with nothing worse than cuts, bruises and maybe some cracked ribs. Yikes! Not enjoying these near misses lately!!"),

        new BadComment("MEGAN THIS IS AUNT HELEN. I HAVE A FREIND AND WANTS TO ASK YOU SOMETHING. so HERE ISS HER LETTER TO You....."),

        new BadComment("MEGAN MY NAME IS BARBARA AND MY QUSTION IS THIS."),

        new BadComment("I WOULD BE INTERESTED IN , IF YOU EVER HAVE, FOR SALE, A RED FEMALE DOBBY.I AM A FORMER OWNER OFSEVERAL"),

        new BadComment("STANDARD DOBERMANNs. MY LAST WAS A MINNIE SIZE. PLEASE WRlTE TO ME ON HELEN'S COMPUTER. l AM HER COMPANlON")
      ],

      [
        new BadComment("I was just telling my students that \'brunch,\' like many strange-sounding words, is an example of an onomatopoeia because it is derived from the sound one makes while enjoying a good meal."),
        new BadComment("Were your students silly enough to believe you Ken?"),
        new BadComment("The word you are looking for is portmanteau."),
        new BadComment("That's a common and enduring myth."),
        new BadComment("You must chew with your mouth open. In any case, I hope your \"students\" are squirrels, because you misinformed them."),
        new BadComment("The word 'onomatopoeia' is also an onomatopoeia because it‘s derived from the sound produced when the word is spoken aloud.")
      ],
      [
        new BadComment("in the 80s we had thousands of game systems, now we only have 3, gee no wonder todays kids have limited imaginations"),
        new BadComment("Thousands of game systems? What planet did you grow up on?"),
        new BadComment("your too young to remember but we had entire arcades filled with different game systems, from pac man to space invaders, watch the original tron"),
        new BadComment("Ken must have smoked something back in the 80's, as there were only a handful of consoles (game systems) then - arcade games aren't systems, they are a single game"),
        new BadComment("im talking about the actual arcade games"),
        new BadComment("I fail to see how having thousands of different giant, clunky systems that can only play 1 game is better than having 1 sleek, portable system that can play thousands of games-"),
        new BadComment("for one thing arcade games cost a qaurter while today's systems cost like $300 another big difference is there were a lot more gaming systems back then"),
        new BadComment("Those weren't systems, Those were games and games today cost $50-$60 to play as many times as you want not $025 for every 5 minutes- You don't understand the difference between a Video game, an arcade game and a video gaming system-"),
        new BadComment("your actualy proving my point because the xbox requires a $50 game cartridge on top of the $300 you pay for the joystick and power cord - the old arcade systems had the game cartridge and joystick built in and were only a qaurter- Have you ever seen Tron?")
      ],
      [
        new BadComment("911 doesnt do nothing we called the cops on our neighbor for littering and they told us not to call b ack"),
        new BadComment("Because littering is not an EMERGENCY! Don't blame 911 because you don‘t know who to properly contact for your problems."),
        new BadComment("neighbor left a cigarrette butt in his driveway and there is a law that says your not suppose to litter"),
        new BadComment("I understand that littering is against the law but not all crimes are supposed to be reported to 911- 911 is reserved only for emergencies. If you need to report a non-emergency like littering, you are supposed to call the police department. By calling 911, you are distracting 911 operators from answering more important phone calls relating to actual emergencies."),
        new BadComment("well he also starts his car at 8AM when i am still sleeping but 911 wont do nothing")
      ],
      [
        new BadComment("The thing I really like about Planes is that we learn that WWII happened in the Cars universe."),
        new BadComment("Which means there was a Cars Hitler, a Cars holocaust, a Cars Pacific War, a Cars D-Day, a Cars nuking of Hiroshima and Nagasaki, a Cars Rape of Nanking, a Cars Battle of Iwo Jima..."),
        new BadComment("This leads to so many important questions, like: were the Cars Little Boy and Fat Man nukes sentient? Was it a suicide mission? Are ALL Cars nuclear weapons sentient? Did Tsar Bomba have a personality?"),
        new BadComment("What kind of car was Car Hitler? A VW? A forklift? Was there a Cars 9/11? Were the planes hijacked, or were the planes themselves radicalized? I could go on"),
        new BadComment("Edit: I just realized a Cars 9/11 gives a whole new layer of meaning to the phrase \"let's roll\"")
      ],
      [
        new BadComment("Here's the thing. You said a \"pupper is a doggo.\" Is it in the same family? Yes. No one's arguing that."),
        new BadComment("As someone who is a scientist who studies puppers, doggos, yappers, and even woofers, I am telling you, specifically, in doggology, no one calls puppers doggos. If you want to be \"specific\" like you said, then you shouldn't either. They're not the same thing."),
        new BadComment("If you're saying \"doggo family\" you're referring to the taxonomic grouping of Doggodaemous, which includes things from sub woofers to birdos to sharkos (the glub glub kind not the bork bork kind)."),
        new BadComment("So your reasoning for calling a pupper a doggo is because random people \"call the small yip yip ones doggos?\" Let's get penguos and turkos in there, then, too."),
        new BadComment("Also, calling someone a human or an ape? It's not one or the other, that's not how taxonomy works. They're both. A pupper is a pupper and a member of the doggo family."),
        new BadComment("But that's not what you said. You said a pupper is a doggo, which is not true unless you're okay with calling all members of the doggo family doggos, which means you'd call piggos, sluggos, and other species doggos, too. Which you said you don't."),
        new BadComment("It's okay to just admit you're wrong, you know?")
      ]
    ]

    let randomSample = Math.floor(Math.random() * threads.length)
    return threads[randomSample]
  }

}
