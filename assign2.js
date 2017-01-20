const myVal = process.argv
let myArr = []
myArr.push(Number(myVal[2]),Number(myVal[3]))
console.log(myArr)
let sum = myArr[0]+myArr[1]
myArr.push(sum)
console.log(myArr)