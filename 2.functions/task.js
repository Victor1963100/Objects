"use strict"
// Задание №1
function getArrayParams(...arr) {
  let min, max, sum;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
    }
  let avg = +(sum/arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задача №2

function summElementsWorker(...arr) {
  if (arr.length) {
    return arr.reduce((accumulator, current) => accumulator + current, 0);
  } else {
    return 0;
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return max - min;
  } else {
    return 0;
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length) {
    let sumEvenElement = 0;
    let sumOddElemnt = 0;

    for (let num of arr) {
      if ( num % 2 === 0) sumEvenElement += num;
      else sumOddElemnt += num;
    }
    return sumEvenElement - sumOddElemnt;
  } else {
    return 0;
  }
}

function averageEvenElementsWorker(...arr) {
  if (arr.length) {
    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (let num of arr) {
      if ( num % 2 === 0) {
        sumEvenElement += num;
        countEvenElement++;
      }
    }
    return sumEvenElement / countEvenElement;
  } else {
    return 0;
  }
}

// Задача №3

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

    for (let arr of arrOfArr) {
      if (func(...arr) > maxWorkerResult) maxWorkerResult = func(...arr);
    }
    return maxWorkerResult;
}