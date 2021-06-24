
function calc(){
    const rate = 20/1200;
    console.log(rate);
    let time = +timeh.value;
    let sum  = +sumh.value;
    let credit = sum*time*rate+sum;
    let pay = credit/time;
    console.log(credit);
    credittable.innerHTML ="<tr><th class='month'>Місяць</th><th>Борг</th><th>Відсотки</th><th>До сплати</th></tr>";
    for (let i = 1; i <= time; i++){
        credit = Math.round(credit);
        pay = Math.round(pay);
        credittable.innerHTML +=`<tr><td class="month">${i}</td><td>${credit} грн</td><td>${Math.round(sum*rate)} грн</td><td>${pay} грн</td></tr>`;
        credit = credit - pay;
    }

    
}