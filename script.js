

const themes = [

{
day:"MONDAY",
title:"👷 WORKERS' DAY",
description:"Dress as your chosen profession and showcase the career that inspires you.",
image:"images/workers.jpg",
date:new Date("2026-08-03T06:00:00")
},

{
day:"TUESDAY",
title:"💸 RICH VS POOR DAY",
description:"Choose your side and dress to represent either a luxurious lifestyle or a simple one.",
image:"images/richpoor.jpg",
date:new Date("2026-08-04T06:00:00")
},

{
day:"WEDNESDAY",
title:"🕴 MAFIA DAY",
description:"Dress in elegant black-and-white formal attire inspired by the classic mafia style.",
image:"images/mafia.jpg",
date:new Date("2026-08-05T06:00:00")
},

{
day:"THURSDAY",
title:"👵 ELDERLY / LOBOLA DAY",
description:"Celebrate culture and tradition in respectful attire.",
image:"images/elderly.jpg",
date:new Date("2026-08-06T06:00:00")
},

{
day:"FRIDAY",
title:"🎭 CHARACTER DAY",
description:"Dress as your favourite movie, TV, anime, cartoon, game or book character.",
image:"images/character.jpg",
date:new Date("2026-08-07T06:00:00")
}

];


/*=========================================
HTML ELEMENTS
=========================================*/

const container=document.getElementById("themesContainer");

const banner=document.getElementById("banner");

const countdownTitle=document.querySelector("#countdown h2");

const days=document.getElementById("days");

const hours=document.getElementById("hours");

const minutes=document.getElementById("minutes");

const seconds=document.getElementById("seconds");

const timer=document.querySelector(".timer");


/*=========================================
CREATE THEME CARDS
=========================================*/

function createCard(theme){

const card=document.createElement("div");

card.className="theme-card";

card.innerHTML=`

<img src="${theme.image}">

<div class="theme-content">

<span class="theme-day">${theme.day}</span>

<h3>${theme.title}</h3>

<p>${theme.description}</p>

</div>

`;

container.appendChild(card);

}


/*=========================================
SHOW BANNER
=========================================*/

function showBanner(){

banner.style.display="block";

setTimeout(function(){

banner.style.display="none";

},3000);

}


/*=========================================
GREEN & GOLD STARS
=========================================*/

function createStars(){

for(let i=0;i<50;i++){

let star=document.createElement("div");

star.innerHTML="★";

star.classList.add("star");

if(Math.random()>0.5){

star.classList.add("gold");

}else{

star.classList.add("green");

}

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top="-20px";

star.style.fontSize=(10+Math.random()*20)+"px";

star.style.animation="fall 3s linear";

star.style.zIndex="9999";

document.body.appendChild(star);

setTimeout(function(){

star.remove();

},3000);

}

}


/*=========================================
REVEAL THEMES
=========================================*/

let revealed=-1;

function revealThemes(){

let now=new Date();

for(let i=0;i<themes.length;i++){

if(now>=themes[i].date && i>revealed){

createCard(themes[i]);

document.querySelectorAll(".theme-card")[i].style.display="block";

showBanner();

createStars();

revealed=i;

}

}

}


/*=========================================
COUNTDOWN
=========================================*/

function updateCountdown(){

let now=new Date();

let next=null;

for(let i=0;i<themes.length;i++){

if(now<themes[i].date){

next=themes[i];

break;

}

}

if(next==null){

countdownTitle.innerHTML="🎉 HAPPY SPIRIT WEEK!";

timer.style.display="none";

return;

}

let distance=next.date-now;

let d=Math.floor(distance/(1000*60*60*24));

let h=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

let m=Math.floor((distance%(1000*60*60))/(1000*60));

let s=Math.floor((distance%(1000*60))/1000);

days.innerHTML=d;
hours.innerHTML=h;
minutes.innerHTML=m;
seconds.innerHTML=s;

}


/*=========================================
BACK TO TOP
=========================================*/

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/*=========================================
RUN WEBSITE
=========================================*/

revealThemes();

updateCountdown();

setInterval(function(){

revealThemes();

updateCountdown();

},1000);