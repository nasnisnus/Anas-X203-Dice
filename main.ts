function SetDevicePattern () {
    list = [
    images.createImage(`
        . # . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . # . # .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    ]
}
function RollDice () {
    list[randint(0, 5)].showImage(0)
}
input.onGesture(Gesture.Shake, function () {
    RollDice()
})
let list: Image[] = []
SetDevicePattern()
RollDice()
