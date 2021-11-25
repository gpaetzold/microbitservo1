basic.showIcon(IconNames.Happy)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, 90)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(2000)
})
