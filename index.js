const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce (function (accumulation, element){
    return element += accumulation},0)
