function outerfunction(){
  let outerVariable = "am outside";
  functions innerFunction(){
    console.log(outerVariable);
  }
  return innerFunction;
}
const myClosure = outerFunction();
myClosure();
