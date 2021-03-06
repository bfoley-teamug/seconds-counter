var min = document.getElementById("min"); 
var hr = document.getElementById("hr"); 
var day = document.getElementById("day"); 
var wk = document.getElementById("wk"); 
var yr = document.getElementById("yr"); 
var cent = document.getElementById("cent"); 


min.addEventListener('click', (e) => { 
  const num = document.getElementById("number"); 
  const input = num.querySelector(".form-control");
  const answer = input.value; 
  var finalAnswer = answer * 60;
  
  function numberWithCommas(finalAnswer) {
    return finalAnswer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
  }
  
  e.preventDefault(); 
  console.log(answer * 60);
  const p = document.getElementById('display');
 
  p.innerHTML = "<h3>That would be a total of <span class='numberColor'>" + numberWithCommas(finalAnswer)   + "</span> seconds.</h3>" 
}); 



hr.addEventListener('click', (e) => { 
  const num = document.getElementById("number"); 
  const input = num.querySelector(".form-control");
  const answer = input.value;
  
  var finalAnswer = answer * 3600; 
  
  function numberWithCommas(finalAnswer) {
    return finalAnswer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
  }
  
  e.preventDefault(); 
  console.log(answer * 3600);
  const p = document.getElementById('display');
  p.innerHTML = "<h3>That would be a total of <span class='numberColor'>" + numberWithCommas(finalAnswer)   + "</span> seconds.</h3>"
}); 



day.addEventListener('click', (e) => { 
  const num = document.getElementById("number"); 
  const input = num.querySelector(".form-control");
  const answer = input.value;
  
   var finalAnswer = answer * 86400; 
  
  function numberWithCommas(finalAnswer) {
    return finalAnswer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
  }
  
  e.preventDefault(); 
  console.log(answer * 86400);
  const p = document.getElementById('display');
  p.innerHTML = "<h3>That would be a total of <span class='numberColor'>" + numberWithCommas(finalAnswer)   + "</span> seconds.</h3>"
}); 


wk.addEventListener('click', (e) => { 
  const num = document.getElementById("number"); 
  const input = num.querySelector(".form-control");
  const answer = input.value;
  var finalAnswer = answer * 604800; 
  
  function numberWithCommas(finalAnswer) {
    return finalAnswer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
  }
  
  e.preventDefault(); 
  console.log(answer * 604800);
  const p = document.getElementById('display');
   p.innerHTML = "<h3>That would be a total of <span class='numberColor'>" + numberWithCommas(finalAnswer)   + "</span> seconds.</h3>"
}); 


yr.addEventListener('click', (e) => {   
  const num = document.getElementById("number"); 
  const input = num.querySelector(".form-control");
  const answer = input.value;
  var finalAnswer = answer * 31540000;
  
  function numberWithCommas(finalAnswer) {
    return finalAnswer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
  }
  
  e.preventDefault(); 
  console.log(answer * 31540000);
  const p = document.getElementById('display');
  p.innerHTML = "<h3>That would be a total of <span class='numberColor'>" + numberWithCommas(finalAnswer)   + "</span> seconds.</h3>"
}); 


cent.addEventListener('click', (e) => {   
  const num = document.getElementById("number"); 
  const input = num.querySelector(".form-control");
  const answer = input.value;
   var finalAnswer = answer * 3154000000;
  
  function numberWithCommas(finalAnswer) {
    return finalAnswer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
  }
  
  e.preventDefault(); 
  console.log(answer * 3154000000);
  const p = document.getElementById('display');
  p.innerHTML = "<h3>That would be a total of <span class='numberColor'>" + numberWithCommas(finalAnswer)   + "</span> seconds.</h3>"
}); 