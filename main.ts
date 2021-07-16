radio.onReceivedString(function (receivedString) {
    if (receivedString == "U") {
        basic.showArrow(ArrowNames.North)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 200)
    } else if (receivedString == "D") {
        basic.showArrow(ArrowNames.South)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 200)
    } else if (receivedString == "L") {
        basic.showArrow(ArrowNames.West)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 100)
    } else if (receivedString == "R") {
        basic.showArrow(ArrowNames.East)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 50)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 100)
    } else if (receivedString == "P") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        DFRobotMaqueenPlus.clearDistance(Motors.M1)
    } else if (receivedString == "BU") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (receivedString == "BD") {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (receivedString == "BL") {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # . .
            . # # . .
            . . # . .
            `)
    } else if (receivedString == "BR") {
        basic.showLeds(`
            . . # . .
            . . # # .
            . . # # #
            . . # # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
let distance = 0
let d = ""
let speed = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
OLEDV1.initDisplay()
DFRobotMaqueenPlus.PID(PID.ON)
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
    basic.pause(500)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.BLUE)
    basic.pause(500)
})
basic.forever(function () {
    speed = DFRobotMaqueenPlus.readSpeed(Motors1.M1)
    OLEDV1.showUserText(0, "Speed : " + speed)
    d = DFRobotMaqueenPlus.readeDistance(Motors1.M1)
    distance = parseFloat(d) * 166.5
    OLEDV1.showUserText(1, "Milage : " + distance)
    basic.pause(100)
    OLEDV1.clear()
})
basic.forever(function () {
    huskylens.request()
    if (true) {
    	
    }
})
