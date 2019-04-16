var arrayOfQuotes = [

{
  "author":"Dr. Suess",
  "quote":"You know you are in love when you can’t fall asleep because reality is finally better than your dreams."
},

{
  "author":"Marilyn Monroe",
  "quote":"I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best."
},
{
  "author":"Stephen King",
  "quote":"Get busy living or get busy dying."
},
{
  "author":"Mark Caine",
  "quote":"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself."
},
{
  "author":"Helen Keller",
  "quote":"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us."
},
{
  "author":"Mark Twain",
  "quote":"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do."
},
{
  "author":"Audre Lorde",
  "quote":"When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid."
},
{
  "author":"Eleanor Roosevelt",
  "quote":"Great minds discuss ideas; average minds discuss events; small minds discuss people."
},
{
  "author":"David Brinkley",
  "quote":"A successful man is one who can lay a firm foundation with the bricks others have thrown at him."
},
{
  "author":"My Own Quote",
  "quote":"Do not hesitate to try and implement things, keep working until you feel good about it. Do not let people decide what you should do!"
}



]


function randomSelector(arraylength){
  return Math.floor(Math.random()*arraylength);
}



function generateQuote(){

var randomNumber = randomSelector(arrayOfQuotes.length);

document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote+ '"';

document.getElementById("authorOutput").innerHTML = "- "+ arrayOfQuotes[randomNumber].author;


}
