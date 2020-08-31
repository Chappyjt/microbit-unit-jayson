basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . # . #
            . . . # .
            . . # # #
            . # # . .
            # . . # .
            `)
    }
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # # .
        . # # . .
        # . . # .
        `)
    music.playMelody("C5 C5 - - - - - - ", 120)
})
