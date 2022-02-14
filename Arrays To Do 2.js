function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

const array = [8, 2, 3, 4, 5];
console.log(reverseArray(array));


//***********************************************************************

function rotateArray(arr, moveBy) {
    
    let mvmNeeded;
    if (moveBy > 0) {
        mvmNeeded = moveBy % arr.length;
    } else {
        mvmNeeded = Math.abs(moveBy) % arr.length;
    }
    if (moveBy > 0) {
        // Rotation to the right
        for (let i = 0; i < mvmNeeded; i++) {
            let temp = arr[arr.length - 1];
            for (let k = arr.length - 2; k >= 0; k--) {
                arr[k+1] = arr[k];
            }
            arr[0] = temp; //first el assigned temps value
        } return arr;
    } else {// Rotation to the left
        for (let i = 0; i < mvmNeeded; i++) {
            let temp = arr[0];
            for (let k = 1; k < arr.length; k++) {
                arr[k-1] = arr[k];
            }
        }return arr;
    }
}
const array1 = [8, 2, 3, 4, 5];
console.log("Array Org:", rotateArray(array1));
console.log("Array New", rotateArray(array1, 2));

//***************************************************************************

function filterRange(arr, minVal, maxVal) {
    let nextInd = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= minVal && arr[i] <= maxVal) {
            arr[nextInd] = arr[i];
            nextInd++;  
        }
    }
    arr.length = nextInd;  
    return arr;
}

const array3 = [8, 2, 3, 4, 5, 7, 9, 1];
console.log(array3);
console.log(filterRange(array3, 3, 6));
 
//*****************************************************************
 
function concatArrays(arr1, arr2) {
    let newArr = [];
    let curInd = 0; // starting index for the new array content
    for (let i = 0; i < arr1.length; i++) {//loop first arr
        newArr[curInd] = arr1[i]; 
        curInd++;
    }
    for (let i = 0; i < arr2.length; i++) {//loop second array
        newArr[curInd] = arr2[i];
        curInd++;
    }
    return newArr;
}

const arrayA = [1, 2, 3, 4, 5], arrayB = [6, 7, 8, 9, 10];
console.log(concatArrays(arrayA, arrayB));
