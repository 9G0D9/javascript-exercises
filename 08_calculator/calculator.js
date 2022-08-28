const add = function(numb1,numb2) {

  return numb1+numb2 ;
	
};

const subtract = function(numb1,numb2) {
  return numb1-numb2 ;
};

const sum = function(array) {
	let total=0 ;

  for (let i=0 ; i<array.length ; i++){
    total+=array[i] ;
  }
  return total;
};

const multiply = function(array) {

  let total=1 ;
  for (let i=0 ; i<array.length ; i++){
    total=total*array[i] ;
  }
  return total

};

const power = function(numb1,numb2) {

  let result=1 ;
	for (let i=0 ; i<numb2 ; i++){
    result=numb1*result ;
  }
  return result ;
};

const factorial = function(numb) {

  if (numb==0) return 1

  return numb*factorial(numb-1) ;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
