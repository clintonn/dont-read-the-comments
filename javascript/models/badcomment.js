class BadComment {
  constructor(string) {
    this.text = string
    this.inputText = string.split("")
    this.displayer = this.inputText.slice()
  }
}
