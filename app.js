var go = document.getElementById("button"); 

go.addEventListener('click', (e) => { 
  e.preventDefault(); 
  
  const wordA = document.getElementById("wordA"); 
  const inputA = wordA.querySelector('.inputA');
  
  const wordB = document.getElementById("wordB"); 
  const inputB = wordB.querySelector('.inputB');
  
  const wordC = document.getElementById("wordC"); 
  const inputC = wordC.querySelector('.inputC');
  
  const wordD = document.getElementById("wordD"); 
  const inputD = wordD.querySelector('.inputD');
  
  const wordE = document.getElementById("wordE"); 
  const inputE = wordE.querySelector('.inputE');
  
  const wordF = document.getElementById("wordF"); 
  const inputF = wordF.querySelector('.inputF');
  
  const wordG = document.getElementById("wordG"); 
  const inputG = wordG.querySelector('.inputG');
  
  const wordH = document.getElementById("wordH"); 
  const inputH = wordH.querySelector(".inputH");
  
  const wordI = document.getElementById("wordI"); 
  const inputI = wordI.querySelector(".inputI");
  
  const wordJ = document.getElementById("wordJ"); 
  const inputJ = wordJ.querySelector(".inputJ");
  
  var result = document.getElementById("result"); 
  const newWordA = inputA.value;
  const newWordB = inputB.value;
  const newWordC = inputC.value;
  const newWordD = inputD.value;
  const newWordE = inputE.value;
  const newWordF = inputF.value;
  const newWordG = inputG.value;  
  const newWordH = inputH.value; 
  const newWordI = inputI.value; 
  const newWordJ = inputJ.value; 
  
  const p = document.getElementById('result');
  console.log("Today I drove to the " + newWordA);
  
  p.textContent = "This morning when I woke up in my " + newWordA + ",  I had a craving for some " + newWordB + ". I decided to find some " + newWordB + ", so I " + newWordC + " on over to the neighbor's house and knocked on their " + newWordD +". They " + newWordE + " invited me inside and gave me some of their leftover " + newWordB +". I asked how their new job was as a " + newWordF + " and they answered it was ' " + newWordG + " ' but their co-workers were " + newWordH + ". I said thanks for the " + newWordB + " and have a great day! As I walked out the " + newWordD + ", I waved and " + newWordI + ". I told myself I will give them some " + newWordJ + " as a token of my appreciation.";               
 }); 
    