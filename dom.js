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
