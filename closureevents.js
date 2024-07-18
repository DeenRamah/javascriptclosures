function setEvent(){
  let message ="Button Clicked";

  document.getElementById("myButton").addEventslistener("click", function(){
    alert(message);
  });
}

setupEvent();
