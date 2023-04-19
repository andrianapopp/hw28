const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// //1
// let sum = 0
// const quantity = []
//
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0){
//         quantity.push(arr[i])
//         sum += arr[i]
//     }
// }
// alert("Quantity of positive elements = " + quantity.length)
// alert("Sum of positive elements = " + sum)
//
// //2
// let minArr = 0
// let sequenceNumber = 0
// for (let i = 0; i < arr.length; i++){
//     if (arr[i]< minArr){
//         sequenceNumber = i
//         minArr = arr[i]
//     }
// }
// alert("Minimal number = " + minArr)
// alert("Sequence of minimal number = " + sequenceNumber)
//
// //3
// let maxArr = 0
// let sequenceMaxNumber = 0
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > maxArr){
//         sequenceMaxNumber = i
//         maxArr = arr[i]
//     }
// }
// alert("Max number = " + maxArr)
// alert("Sequence of max number = " + sequenceMaxNumber)
//
// //4
// let negNums = 0
// for (let i = 0; i < arr.length; i++){
//     if (arr[i]< 0){
//         negNums++
//     }
// }
// alert("Quantity of negative numbers = " + negNums)
//
// //5 //8
// let oddNums = 0
// let sumOdd = 0
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0 && arr[i] % 2 !== 0){
//         oddNums++
//         sumOdd += arr[i]
//     }
// }
// alert("Quantity of odd numbers = " + oddNums)
// alert("Sum of odd numbers = " + sumOdd)
//
// //6 //7
// let evenNums = 0
// let sumEven = 0
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0 && arr[i] % 2 === 0){
//         evenNums++
//         sumEven += arr[i]
//     }
// }
// alert("Quantity of odd numbers = " + evenNums)
// alert("Sum of odd numbers = " + sumEven)
//
// //9
// let product = 1
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0 && arr[i] % 2 === 0){
//         product *= arr[i]
//      }
// }
// alert("Product of positive numbers = " + product)

//10
let max10 = Math.max(...arr)
for (let i = 0; i < arr.length; i++){
    if (arr[i] !== max10){
        arr[i] = 0
    }
}
alert(arr)