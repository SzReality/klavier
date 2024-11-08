input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    basic.setLedColor(0xff0080)
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.showString("D")
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    basic.setLedColor(0x00ff00)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("C")
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    basic.setLedColor(0xffff00)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.showString("E")
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    basic.setLedColor(0x00ffff)
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.showString("F")
})
basic.showIcon(IconNames.Heart)
