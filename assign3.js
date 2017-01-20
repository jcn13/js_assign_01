const myVal = process.argv
let myArr = []
myArr.push(Number(myVal[2]),Number(myVal[3]))
let sum = myArr[0]+myArr[1]
let text = null
if(sum>=10&&sum<100){
	text = " is greater than 10 and less than 100 "
}
else if(sum>=100&&sum<1000){
	text =" is greater than 100 and less than 1000"
}
console.log(sum + text)
console.log(myArr)