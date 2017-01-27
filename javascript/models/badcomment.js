class BadComment {
  constructor(string) {
    this.text = string
    // "Hello world"
    this.inputText = string.split("")
    // ["H", "e" ...]
    this.displayer = this.inputText.slice()
    // exact copy of inputText, but to manipulate to be able to add span classes
  }
}
