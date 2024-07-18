function makeMultiplier(multiplier){
  return function(num){
    return num * multiplier;
  };
}

const double = makeMultiplier(2);
console.log(double(5));
