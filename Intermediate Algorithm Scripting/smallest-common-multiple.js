// working on it 
//  1
// 1 2 3 4 5 

//  5
//5 10 15 20 25 30 35 40 45 50 55 60

// 1. start bigger number iteration and compare to smaller number 
// 2. check if it is devided by first and 
// second number

function smallestCommons(arr) {
  
  var arrFirst = [];
  var arrSecond = [];
  var bool = true;

  var bigger = Math.max(arr[0],arr[1]);
  var smaller = Math.min(arr[0],arr[1]);;

  var bigNum = bigger;
  var smallNum = smaller;

  function check(){
     if (bigNum % smaller === 0 && smallNum % bigger === 0) {
            bool = false;
            arr = "Least Common Multiple is " + bigNum;
            console.log(arr);  
      }
  }
  
  while(bool){
      console.log("bigNum", bigNum);
      console.log("smallNum", smallNum);

    while (smallNum <= bigNum) {
       smallNum += smaller;
       arrSecond.push(smallNum);
       check();
    }

     bigNum += bigger;
     arrFirst.push(bigNum);
     check();
  

    


    // if (bigNum % smaller === 0 && smallNum % bigger ===0) {
    //   bool = false;
    //   arr = "Least Common Multiple is " + bigNum;
    // }


  }
  
  
  return arr;
}


smallestCommons([1,5]);

