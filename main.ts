radio.onReceivedNumber(function (receivedNumber) {
    if ("" == "") {
        basic.showIcon(IconNames.Yes)
        basic.pause(5000)
        basic.showNumber(3)
        basic.showNumber(2)
        basic.showNumber(1)
        basic.showIcon(IconNames.No)
        basic.pause(5000)
    }
})
function green () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
input.onButtonPressed(Button.A, function () {
    if ("" == "") {
        radio.sendNumber(5)
    }
})
function amber () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
input.onButtonPressed(Button.AB, function () {
	
})
function red () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
basic.showLeds(`
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    `)
// Put this to P16 when testing.
strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
strip.setBrightness(255)
radio.setGroup(5)
while (true) {
    basic.pause(5000)
    green()
    basic.pause(5000)
    amber()
    basic.pause(5000)
    red()
}
basic.forever(function () {
	
})
