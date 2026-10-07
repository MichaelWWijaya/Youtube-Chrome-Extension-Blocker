let questions = [
  "integral1.png",
  "integral2.png",
  "integral3.png",
];

let answers = [
  "0.13497",
  "0.98865",
  "0.04119",
];


//show image
const thousan = 1000;
let second = 10;
let img;
let index = 0;

function load_image(){
  //do random function
  index = Math.floor(Math.random() * questions.length);

  img = document.createElement('img');
  img.src = chrome.runtime.getURL(questions[index]);
  img.alt = 'integrate this';
  // img.style.width = '400px';  // optional sizing
  // img.style.display = 'block';
  // img.style.margin = '20px auto';
  // document.body.appendChild(img);

  // 2. Style it to float in the center of the screen
  img.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    width: 400px;
    border: 1000px solid white;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
    background: white;
    padding: 10px;
  `;

  document.body.appendChild(img);
  setTimeout(() => {display_integral()},100);
}


function display_integral(){
  
  let text;
  let ans = prompt("Evaluate the integral (5 decimal places):");

  if (ans == null || ans !== answers[index]) {
    text = "Sorry, that's incorrect.";
    alert(text)
    display_integral();
    
  } else {
    text = "Great job! The correct answer is "+answers[index];
    alert(text)
    document.body.removeChild(img);

    setTimeout(load_image, (thousan * second));
    
  }


  
}
  
function set_timer(){
  const five_b = document.getElementById("time1");
  const ten_b = document.getElementById("time2");
  const fifteen_b = document.getElementById("time3");
  const timerResult = document.getElementById("timerResult");

  if(five_b.checked){
    timerResult.textContent = "This will repeat every 5 seconds";
    second = 5;
  } 
  else if(ten_b.checked){
    timerResult.textContent = "This will repeat every 10 seconds";
    second = 10;
  }
  else if(fifteen_b.checked){
    timerResult.textContent = "This will repeat every 15 seconds";
    second = 15;
  }
  else{
    timerResult.textContent = "This will repeat every 5 seconds";
  }
  // alert("hey");
}


// function run_code(){
//   // set_timer();
//   setInterval(load_image(), (thousan*second));

// }
// run_code();

load_image();


// load_image();