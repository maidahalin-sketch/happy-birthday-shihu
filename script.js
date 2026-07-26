/* ==========================
TEXT
========================== */

const typingText =
"Every heartbeat of mine whispers your name... ❤️";
const letterMessage = `

প্রিয়,
প্রতিনিয়ত কারণে-অকারণে আমি যে মানুষটার প্রেমে পড়ি, সে তুমি।
তোমার কথা ভেবে ঠোঁটের  কোণে হাসি চলে আসা আমার অভ্যাস । তোমার সব কিছুই আমার নিজের লাগে। তুমি এমন একজন মানুষ যার কাছে আমি আমার সব কথা, সুখ, দুঃখ, রাগ, চুপচাপ, অভিমান সব খুলে বলতে পারি। তোমার সংস্পর্শে এলেই বোধহয় যেন introvert থেকে extrovert হয়ে যাই। যাকগে, এসব কথা পুরোনো।

নতুন কথা শুধু একটাই — আমি তোমাকে ভালোবাসি, তবে তোমার চেয়ে একটু কম। ভাবলাম এবার একটু ভিন্ন ভাবে জানাই, দূর থেকে এর চেয়ে ভালো কিছু পেলাম না। লিখতে লিখতে আসল কারণ টাই  ভুলে গিয়েছিলাম।


“শুভ জন্মদিন প্রিয়”


পৃথিবীর সকল সুখ তোমার হোক।
তোমার সকল জন্মদিনে আমি যেন তোমার পাশে থাকতে পারি। আমি তোমাকে নিয়ে আমার গোটা জীবন সাজাতে চেয়েছি, বাকিটুকু সৃষ্টিকর্তার ইচ্ছা। পরিশেষে একটা ছোট অনুরোধ, তোমার খারাপ অভ্যাস টি ছেড়ে দিও।
 ভালোবাসি, ভালোবাসি, ভালোবাসি।
তোমার
প্রিয়া !❤️

`;
/* ==========================
ELEMENTS
========================== */

const giftBtn = document.getElementById("giftBtn");

const home = document.getElementById("home");

const countdown = document.getElementById("countdown");

const message = document.getElementById("message");

const birthday = document.getElementById("birthday");

const bgMusic = document.getElementById("bgMusic");

/* ==========================
OPEN MY GIFT
========================== */

giftBtn.addEventListener("click", openGift);

function openGift(){

    if(bgMusic){

        bgMusic.play().catch(()=>{});

    }

    home.style.display = "none";

    countdown.style.display = "flex";

    startCountdown();

}

/* ==========================
COUNTDOWN
========================== */

function startCountdown(){

    let number = 3;

    const text = document.getElementById("number");

    text.innerHTML = number;

    const timer = setInterval(function(){

        number--;

        if(number > 0){

            text.innerHTML = number;

        }

        else{

            clearInterval(timer);

            countdown.style.display = "none";

            showMessage();

        }

    },1000);

}
/* ==========================
MIDNIGHT MESSAGE
========================== */

function showMessage(){

    message.style.display = "flex";

    setTimeout(function(){

        message.style.display = "none";

        showBirthday();

    },5000);

}

/* ==========================
BIRTHDAY SCREEN
========================== */

function showBirthday(){

    birthday.style.display = "flex";

    typeMessage();

    /* 6 সেকেন্ড পর লেখা লুকাবে,
       তখন Slideshow শুরু হবে (Part 3) */

    setTimeout(function(){

        document.querySelector(".logo").style.display = "none";

        document.querySelector(".birthdayTitle").style.display = "none";

        document.querySelector(".birthdayName").style.display = "none";

        document.getElementById("typing").style.display = "none";

        document.getElementById("slideshow").style.display = "block";

        startSlideshow();

    },6000);

}

/* ==========================
TYPING EFFECT
========================== */

let typingIndex = 0;

function typeMessage(){

    typingIndex = 0;

    const typing = document.getElementById("typing");

    typing.innerHTML = "";

    typingAnimation();

}

function typingAnimation(){

    if(typingIndex < typingText.length){

        document.getElementById("typing").innerHTML += typingText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typingAnimation,70);

    }

}
/* ==========================
FULL SCREEN SLIDESHOW
========================== */

let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function startSlideshow(){

    if(slides.length === 0) return;

    slides.forEach(slide => slide.classList.remove("active"));

    currentSlide = 0;

    slides[currentSlide].classList.add("active");

    const slideshow = document.getElementById("slideshow");

    slideshow.style.display = "block";

    const slideTimer = setInterval(function(){

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if(currentSlide >= slides.length){

            clearInterval(slideTimer);

slideshow.style.display="none";

document.getElementById("letterBtn").style.display="block";

return;

        }

        slides[currentSlide].classList.add("active");

    },3000);

}
/* ==========================
LETTER
========================== */

const letterBtn = document.getElementById("letterBtn");

const letterPage = document.getElementById("letterPage");

const letterText = document.getElementById("letterText");

let letterIndex = 0;

letterBtn.addEventListener("click", function(){

    letterBtn.style.display = "none";

    letterPage.style.display = "flex";
letterText.style.display = "block";
    letterText.innerHTML = "";

    letterIndex = 0;

    // শুরুতে এগুলো লুকানো থাকবে
    document.getElementById("realLetter").style.display = "none";
    document.getElementById("continueBtn").style.display = "none";

    // Typing শুরু
    typeLetter();

});
function typeLetter(){

    if(letterIndex < letterMessage.length){

        letterText.innerHTML += letterMessage.charAt(letterIndex);

        letterIndex++;

        letterText.scrollTop = letterText.scrollHeight;

        setTimeout(typeLetter,40);

    }

    else{

        letterText.style.display = "none";

        const realLetter = document.getElementById("realLetter");
        const continueBtn = document.getElementById("continueBtn");

        realLetter.style.display = "block";
        continueBtn.style.display = "block";

    }

}/* ==========================
CONTINUE BUTTON
========================== */

continueBtn.addEventListener("click",function(){

letterPage.style.display="none";

document.getElementById("finalPage").style.display="flex";

});
/* ==========================
FINAL ENDING
========================== */

const fingerprint = document.getElementById("fingerprint");
const finalPage = document.getElementById("finalPage");

fingerprint.addEventListener("click", function(){

    finalPage.innerHTML = `

    <div class="ending">

        <h1>I Love You Forever ❤️</h1>

        <p>

        No matter what happens...

        <br><br>

        I'll always choose you.

        <br><br>

        Thank you for being the best part of my life.

        </p>

        <h2>

        🌙 Happy Birthday Jan😗 🌙

        </h2>

        <small>

        Forever Yours,

        <br>

        Alin ❤️

        </small>

    </div>

    `;

    musicFade();

});
function musicFade(){

    if(!bgMusic) return;

    let volume = 1;

    const fade = setInterval(function(){

        volume -= 0.05;

        if(volume <= 0){

            bgMusic.pause();

            clearInterval(fade);

        }

        bgMusic.volume = Math.max(volume,0);

    },200);

}
/* ❤️ Heart Rain */

function createHeart(){

    const container = document.getElementById("heart-rain");

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 25) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    container.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    },8000);

}

setIwindow.addEventListener("load", function(){

    setInterval(createHeart,300);

});
