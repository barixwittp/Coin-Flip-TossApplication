let heads = 0;
let tails = 0;

let coin = document.querySelector("#coin");
let flipBtn = document.querySelector(".flip-button");
let resetBtn = document.querySelector(".reset");


function updateCount() {
    document.querySelector(".heads-count").textContent = `Heads: ${heads}`;
    document.querySelector(".tails_count").textContent = `Tails: ${tails}`;
}

function disadbledBtn(){
    flipBtn.disabled=true;
    resetBtn.disabled=true;
    setTimeout(function(){

        flipBtn.disabled=false;
        resetBtn.disabled=false;


    },3000)
}

resetBtn.addEventListener('click',()=>{

     heads = 0;
     tails = 0;
     updateCount();

})

flipBtn.addEventListener('click', () => {
    let randomss = Math.floor(Math.random() * 2); // Generate 0 or 1
    console.log(randomss);
    coin.style.animation = "none"; // Reset animation

    if (randomss) { 
        setTimeout(function() {
            coin.style.animation = "spin-heads 3s forwards"; // Corrected typo
        }, 100);
        heads++;
    } else {
        setTimeout(function() {
            coin.style.animation = "spin-tails 3s forwards"; // Corrected typo
        }, 100);
        tails++;
    }
    setTimeout(updateCount,3000);
    disadbledBtn();
});
