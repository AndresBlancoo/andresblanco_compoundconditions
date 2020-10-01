let celsius = 0
let farenheit = 0
basic.forever(function () {
    celsius = input.temperature()
    farenheit = celsius * (9 / (5 + 32))
    if (farenheit <= 14 && farenheit >= -22) {
        basic.showString("Stay home there is heavy snow")
        basic.showIcon(IconNames.No)
    } else if (farenheit > 14 && farenheit <= 23) {
        basic.showString("Go for your skis and have fun!")
        basic.showIcon(IconNames.Yes)
    } else if (farenheit > 23 && farenheit <= 32) {
        basic.showString("Warning! You can only ski in the highest parts")
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else if (farenheit > 32) {
        basic.showString("Sorry, it is not ski season")
        basic.showIcon(IconNames.Confused)
    }
})
