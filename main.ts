let temps = 0
input.onButtonPressed(Button.A, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        basic.pause(1000)
        temps += 1
        basic.showNumber(temps)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(temps)
    basic.pause(500)
    basic.clearScreen()
})
