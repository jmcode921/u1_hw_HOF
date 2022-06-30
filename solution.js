// You must RETURN your result in each function!

function printNums(nums) {
  const newArr =[]
  nums.forEach((element) => {
    newArr.push(element)
  })
  return newArr
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
}

function returnSums(nums) {
  const newArr = []
  nums.forEach((n, index) => {
    newArr.push(n + index)

  })
  return newArr
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
}

function returnTotal(objs) {
  let objSum = 0
  objs.forEach((element) => {
    objSum += element.n
  })
  return objSum
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
}

function printMoney(decimals) {
/**   * @param decimals => [2.30, 2.40, 32.99]   * Using .map, return an array of decimals formatted as dollars.   * EX: {   * input: [12.34, 9.99],   * output: ['$12.34', '$9.99']   * }   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)   */
        // @param decimals   
  const newNum = decimals.map(value => {
    let newString = value.toFixed(2)
    newString = newString.toString()
    let dollarString = "$" + newString
    return dollarString



    })
    return newNum



 }





/**   *=> [2.30, 2.40, 32.99]   * Using .map, return an array of decimals formatted as dollars.   * EX: {   * input: [12.34, 9.99],   * output: ['$12.34', '$9.99']   * }   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)   */
        // @param decimals 
  
 

  //=> [2.30, 2.40, 32.99]
//    * Using .map, return an array of decimals formatted as dollars.
//    * EX: {
//    * input: [12.34, 9.99],
//    * output: ['$12.34', '$9.99']
//    * }
//    * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
//    */


function returnAllTrueValues(values) {
  const newNum = values.filter((element) => {
    if (element.happy === true) {
      return element
    }
  })
  return newNum
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
}

function addTwo(nums) {
  const addTwo = nums.map((num) => {
    return num + 2
  }).reduce((acc, value)=>{
    return acc + value
  })
return addTwo
  
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
}

function joinStrings(strings) {
  const newString = strings.reduce((acc, value)=> {
    return acc + value
  })

  return newString

  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
}

//Bonus
function sortObjectsByValue(objs) {
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
}

module.exports = {
  printNums,
  returnSums,
  returnTotal,
  printMoney,
  returnAllTrueValues,
  sortObjectsByValue,
  addTwo,
  joinStrings
}
