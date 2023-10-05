
// q5
/* For

function powerOfTowFor (inputArray){
const resultArray =[];
for (let i =0 ; i< inputArray.length; i++){
    const power = Math.pow(2,inputArray[i]);
    resultArray.push(power);
}

return resultArray ;

}
const inputArray = [1,2,3];
const resulFor =powerOfTowFor(inputArray);
console.log(resulFor);

*/
//ForEach
/*


function powerOfTowForEach (inputArray){
const resultArray = [];



inputArray.forEach(function (element)  {
    const power  =Math.pow (2,element);
    resultArray.push(power);
 });
return resultArray;
}
const inputArray =[1,2,3];
const resulForEach =powerOfTowForEach(inputArray);
console.log(resulForEach);
*/


// map
/*
function powerOfTwoMap(inputArray) {
    const resultArray = inputArray.map(function (element) {
      return Math.pow(2, element);
    });

    return resultArray;
  }
  
  const inputArray = [1, 2, 3];
  const resultMap = powerOfTwoMap(inputArray);
  console.log(resultMap);*/




  //q6
/*
  function classifyNumbers(Arr){
    const result = Arr.map((element) =>{
        if (typeof element === 'number') {
            
                 if(element%2==0)
                     return 'even';
            else 
                return 'odd'
          }
          else {
            return 'N/A';
          }
    });

    return result;
}

const inputArray = [1, 6, 7, "Amer"];
const resultArray = classifyNumbers(inputArray);
console.log(resultArray); 
*/
//q7
/*
function fizzbuzz(inputArray) {
    const outputArray = inputArray.map(function (number) {
      if (number % 3 === 0 && number % 5 === 0) {
        return "Fizz Buzz";
      } else if (number % 3 === 0) {
        return "Fizz";
      } else if (number % 5 === 0) {
        return "Buzz";
      } else {
        return number;
      }
    });
  
    return outputArray;
  }
  
  const inputArray = [1, 2, 3, 4, 5, 15];
  const resultArray = fizzbuzz(inputArray);
  console.log(resultArray);*/


  