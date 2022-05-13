radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 5) {
        red()
    } else if (receivedNumber == 6) {
        green()
        basic.pause(100)
        basic.showIcon(IconNames.Yes)
        basic.showIcon(IconNames.No)
    }
})
function green () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    for (let index = 0; index < 10; index++) {
        basic.showNumber(count)
        count += -1
    }
    if (pedestrian == true || false) {
        red()
        basic.pause(2000)
        amber()
        basic.pause(2000)
        green()
        basic.pause(2000)
    } else {
    	
    }
}
input.onButtonPressed(Button.A, function () {
    pedestrian = true
})
function traffic () {
    basic.pause(5000)
    green()
    basic.pause(5000)
    amber()
    basic.pause(5000)
    red()
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
})
function red () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let distance = 0
let count = 0
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
strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
strip.setBrightness(255)
pedestrian = true
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P1, PulseValue.High) + 58
    basic.pause(2000)
    if (distance <= 5) {
        basic.pause(2000)
        traffic()
    }
})
