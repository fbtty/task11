basic.showString("2F21")
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
})
