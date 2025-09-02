// Add Copy Number
const copyCount = document.getElementById("copy-count");
const copyBtn = document.querySelectorAll(".copy")
copyBtn.forEach(function(btn){
  btn.addEventListener('click', function(){
    let addCount = parseInt(copyCount.innerText);
    copyCount.innerText = addCount + 1; 
    const card = btn.closest('.cardH');
    const serviceName = card.querySelector('.name').innerText;
    const servicenumber = card.querySelector('.number').innerText;
    alert("You are copied " + serviceName + " (" + servicenumber + ")"); 
  })
})
// Number Copy Section
const numbers = document.querySelectorAll(".number");
numbers.forEach(function(num){
  num.addEventListener("click", function(){
    const serviceNumber = num.innerText;
    navigator.clipboard.writeText(serviceNumber);
  });
});


// Add Heart Increase Number
const navHeart = document.getElementById('heart');
const heartIcon = document.querySelectorAll('.fa-heart');
heartIcon.forEach(function(heartF){
  heartF.addEventListener('click', function(){
    let add = parseInt(navHeart.innerText);
    navHeart.innerText = add + 1; 
  });
});

//  If Called Star decreased
const callBtns = document.querySelectorAll('.phn-call');
callBtns.forEach(function(c){
  c.addEventListener('click', function(){
    const starCount = document.getElementById("star");
    let starDecrease = parseInt(starCount.innerText);
    let i = 20;
    let newCount = starDecrease - i; 

    if(starDecrease < i){
      alert("You cant call right now. Please increase your star first.");
      return;
    }
    starCount.innerText = newCount; 
    const card = c.closest('.cardH');
    const serviceName = card.querySelector('.name').innerText;
    const servicenumber = card.querySelector('.number').innerText;
    addToHistory(serviceName, servicenumber);
    alert("You are calling " + serviceName + " (" + servicenumber + ")"); 
  })
})


// Call History Section 
const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.querySelector('.clear-history');
function addToHistory (serviceName, serviceNumber){
  const div = document.createElement('div');
  div.className = "flex justify-between items-center bg-gray-100 rounded-lg p-3"
  const now = new Date();
  const time = now.toLocaleTimeString();
  div.innerHTML = `
  <div>
      <p class="font-semibold">${serviceName}</p>
      <p class="text-gray-500 text-sm">${serviceNumber}</p>
    </div>
    <p class="text-gray-400 text-sm">${time}</p>
  `;
  historyList.prepend(div);
}
clearHistoryBtn.addEventListener('click', function(){
  historyList.innerHTML = "";
})
