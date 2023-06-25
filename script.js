//variables

let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[{
    quote:`""I can accept failure, everyone fails at something. But I can't accept not trying.""`,
    person:`Michael Jordan`
},
{
     quote:`""The only thing that feels better than winning is winning when nobody thought you could.""`,
    person:` Hank Aaron`
},
{
     quote:`""Success is not final, failure is not fatal: It is the courage to continue that counts.""`,
    person:` Winston Churchill`
},
{
    quote:`""If your actions inspire others to dream more, learn more, do more and become more, you are a leader.""`,
    person:` John Quincy Adams`
},
{
     quote:`""In order to be truly happy, you must pursue your dreams and goals.""`,
    person:` Oprah Winfrey`
},
{
     quote:`""You can have anything you want if you are willing to give up everything you have.""`,
    person:`Oprah Winfrey`
},
{
    quote:`""Don't let anyone tell you what you can't do. Follow your dreams and persist.""`,
    person:`Barack Obama`
},
{
    quote:`""The only limit to our realization of tomorrow will be our doubts of today.""`,
    person:`Franklin D. Roosevelt` 
},
{
    quote:`""I can't change the direction of the wind, but I can adjust my sails to always reach my destination.""`,
    person:`Jimmy Dean`
},
{
    quote:`""The only Limit to our realization of tomorrow will be our doubts of today.""`,
    person:`Franklin D. Roosevelt`
},
{
     quote:`""Don't walk in front of me; I may not follow. Don't walk behind me; I may not lead. Walk beside me; just be my friend.""`,
    person:`Albert Camus`
},];

btn.addEventListener('click',function()
{
    let random=Math.floor(Math.random()* quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})
