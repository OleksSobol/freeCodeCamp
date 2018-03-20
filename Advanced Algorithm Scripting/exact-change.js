
function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var register = 0;
  var amountOfMoney = [];

  for(var i = 0; i < cid.length;i++){
    register+=cid[i][1];
    register = Number(Math.round(register+'e2')+'e-2'); // 1.01
    addAmount(cid[i][0], cid[i][1]);
  }
  
  
  function addAmount(str, amount){
    if(str === "PENNY"){
      amount /= 0.01;
      amountOfMoney.push(amount);
    }
    if(str === "NICKEL"){
      amount /= 0.05;
      amount = Number(Math.round(amount+'e2')+'e-2');

      amountOfMoney.push(amount);
    }
    if(str === "DIME"){
      amount /= 0.1;
      amountOfMoney.push(amount);
    }
    if(str === "QUARTER"){
      amount /= 0.25;
      amountOfMoney.push(amount);
    }
    if(str === "ONE"){
      amount /= 1;
      amountOfMoney.push(amount);
    }
    if(str === "FIVE"){
      amount /= 5;
      amountOfMoney.push(amount);
    }
    if(str === "TEN"){
      amount /= 10;
      amountOfMoney.push(amount);
    }    
    if(str === "TWENTY"){
      amount /= 20;
      amountOfMoney.push(amount);
    }
    
    if(str === "ONE HUNDRED"){
      amount /= 100;
      amountOfMoney.push(amount);
    }
  }
  
//   var amountOfMoney = [101,41,31,17,90,11,2,3,1];
  var mass = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];
  
  var money = [];
  
  if(register < change){
    return"Insufficient Funds";
  }
  else if(register === change){
    return "Closed";
  }
  else if(register> change){
    var total = 0;
    for(var i = mass.length - 1; i >= 0; i--){
    
      total = mass[i] * (amountOfMoney[i]);
      total = Number(Math.round(total+'e2')+'e-2');
      
      for(var j = amountOfMoney[i]; j >= 1; j--){
        total = mass[i] * (j);
        total = Number(Math.round(total+'e2')+'e-2');

          if(change >= total){
             change-= total;
             change = Number(Math.round(change+'e2')+'e-2');
             money.push([cid[i][0], total]);
            break;
        }
       
      }
     } 
    if (change == 0){
      return money;      
    }
    else{
      return"Insufficient Funds";
    }
  }
}
// [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);