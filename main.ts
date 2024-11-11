input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 2; index++) {
        Listx[index] = Listx[index] + 1
    }
    basic.clearScreen()
    for (let index = 0; index <= 2; index++) {
        led.plot(Listx[index], Listy[index])
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 2; index++) {
        Listx[index] = Listx[index] - 1
    }
    basic.clearScreen()
    for (let index = 0; index <= 2; index++) {
        led.plot(Listx[index], Listy[index])
    }
})
let Listy: number[] = []
let Listx: number[] = []
Listx = [0, 1, 2]
Listy = [0, 0, 0]
for (let index = 0; index <= 2; index++) {
    led.plot(Listx[index], Listy[index])
}
led.plot(0, 0)
basic.pause(1000)
