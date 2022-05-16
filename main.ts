radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 5) {
        red()
    } else if (receivedNumber == 6) {
        green()
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
    pedestrian = true
})
function traffic () {
    basic.pause(5000)
    red()
    basic.pause(5000)
    amber()
    basic.pause(5000)
    green()
}
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
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(6)
    for (let index = 0; index < 4; index++) {
        sonar()
    }
    if (distance < 5) {
        count += 1
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
function red () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function sonar () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P1, PulseValue.High) + 58
}
let count = 0
let distance = 0
let range: neopixel.Strip = null
let pedestrian = false
let strip: neopixel.Strip = null
basic.showLeds(`
    # # . # #
    # # . # #
    # # . # #
    # # . # #
    # # . # #
    `)
radio.setGroup(5)
// Put this to P16 when testing.
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(255)
pedestrian = true
traffic()
if (pedestrian == true) {
    red()
    basic.pause(2000)
    amber()
    basic.pause(2000)
    green()
    basic.pause(2000)
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
    basic.showIcon(IconNames.No)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
} else {
	
}
basic.forever(function () {
	
})
