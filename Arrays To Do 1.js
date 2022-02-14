

function pushFront(array, item){

    
    let reserve1 = array[0];
    let reserve2 = array[1];

    for (let i = 0; i < array.length && reserve1 != undefined; i++){
        array[i+1] = reserve1;
        reserve1 = reserve2;
        reserve2 = array[i+2];
    }
 
    array[0] = item;
    
    return array;

}
const arr = [1, 2, 3, 4, 5];
const num = 6;

console.log(pushFront(arr, num));
 
//********************************************************************** 
 
function returnFront(array){
    const targetVal = array[0];
    for(let i = 1; i < array.length; i++){
        array[i - 1] = array[i];
    }
    array.pop();

    return targetVal;
}

const array = [8, 2, 3, 4, 5];
console.log(returnFront(array));

//**********************************************************************

//sampleArray= [2, 4, 1, 6, 9] indexTarget = [3] targetNum = 5
//              0   1  2  3  4 
// new index    0   1  2  3  4  5
// new index for 6 is [3+1]   [i+1]
// new index for 6 is [4+1]   [i+1]
function insertAt(array, targetNum, indexTarget) {
   
    for (let i = array.length - 1; i >= indexTarget; i--) {
        array[i+1] = array[i];
    }
    array[indexTarget] = targetNum;
    return array;
}
const array1 = [8, 2, 3, 4, 5];
console.log(insertAt(array, 7, 3));