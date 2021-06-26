
function calc(){
    const rate = 20/1200;
    console.log(rate);
    let time = +timeh.value;
    let sum  = +sumh.value;
    let credit = sum*time*rate+sum;
    let pay = credit/time;
    console.log(credit);

        credit = Math.round(credit);
        pay = Math.round(pay);
        outplace.innerHTML='<div class="mt-2"><p class="text-info">Щомісячний платіж:</p><span class="fs-3"  id="payout" ></span> грн</div><div class="mt-2"><p class="text-info" for="sumh">Відсотки:</p><span class="fs-3"   id="sumout"></span> грн</div>'
        payout.innerHTML = pay;
        sumout.innerHTML = Math.round(sum*time*rate);

    
}