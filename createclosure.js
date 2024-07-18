function greet(name){
  const greeting = "hello";

  return function(){
    console.log(`${greetings}, ${name} `);
  };
}

const greetjohn = greet("John");
greetjohn();
