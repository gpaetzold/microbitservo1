basic.showIcon(IconNames.Happy)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P2, 90)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(2000)
})
