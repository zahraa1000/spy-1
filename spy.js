const russianWords =[
    "мама", "папа", "друзья", "солнце", "ночь", "день", "вода", "огонь", "дерево", "цветок",
    "собака", "кошка", "машина", "птица", "дом", "книга", "стол", "стул", "окно", "дверь",
    "город", "улица", "площадь", "река", "гора", "лес", "север", "юг", "восток", "запад",
    "друг", "враг", "учёба", "работа", "счастье", "грусть", "любовь", "знания", "сила", "мудрость",
    "смеяться", "плакать", "играть", "работать", "читать", "писать", "слушать", "смотреть", "бежать", "стоять",
    "идти", "прыгать", "плавать", "бить", "целовать", "пить", "есть", "спать", "вставать", "садиться",
    "покупать", "продавать", "строить", "разрушать", "находить", "терять", "помогать", "мешать", "надеяться", "бояться",
    "понимать", "забывать", "вспоминать", "звать", "приглашать", "говорить", "шептать", "сказать", "спрашивать", "отвечать",
    "думать", "знать", "помнить", "учить", "рассказывать", "повторять", "отдыхать", "работать", "дружить", "ссориться",
    "праздник", "подарок", "время", "ситуация", "план", "проект", "цель", "победа", "проигрыш", "путь",
    "планета", "галактика", "космос", "звезда", "луна", "солнце", "погода", "лето", "зима", "весна",
    "осень", "дождь", "снег", "туман", "ветер", "облако", "град", "шторм", "температура", "микроклимат"
];
let randomWord = russianWords[ Math.floor(Math.random() * russianWords.length)]
let result = document.getElementById("result")
let main =document.getElementById("main")
let word=document.getElementById("word")
var players=[]
function startGame(){
main.style.display ="none"
result.style.display = "block"
let playerCount = document.getElementById('players').value
for (let  i=0; i<playerCount; i++){
    players.push(randomWord)
}
console.log(players)
var spy = Math.floor(Math.random() * playerCount)
players[spy] ="spy"
console.log(players)



}


function select(){
    selectedPlayer =Math.floor(Math.random()* players.length)
    word.innerHTML =players[selectedPlayer]
    players.splice(selectedPlayer, 1)
    console.log(players)
     document.getElementById("cart").style.display = "block"
}



  ффф

function hide(){
    document.getElementById("cart").style.display = "none"
    if (players.length == 0)
        window.location.reload()
}
