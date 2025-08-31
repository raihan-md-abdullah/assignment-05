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
    addToHistory(serviceName, servicenumber)
    alert("You are calling " + serviceName + " (" + servicenumber + ")"); 
  })
})
