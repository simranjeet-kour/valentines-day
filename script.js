// function showMessage() {
//     document.getElementById("loveMessage").classList.toggle("hidden");
// }
// Typing effect
const text = "You are my favorite notification, my safest place, and my forever person. ❤️";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();

// Funny No Button (runs away)
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function() {
    noBtn.style.top = Math.random() * 80 + "%";
    noBtn.style.left = Math.random() * 80 + "%";
});

// Yes Button
document.getElementById("yesBtn").addEventListener("click", function() {
    document.body.innerHTML = `
        <div style="text-align:center; padding-top:20%;">
            <h1>YAYYYYY ❤️😭</h1>
            <h2>You just made me the happiest person alive 💕</h2>
        </div>

        
    `
    ;
});

setInterval(() => {
    const tinyBow = document.createElement("div");
    tinyBow.innerHTML = "🎀";
    tinyBow.style.position = "absolute";
    tinyBow.style.left = Math.random() * 100 + "vw";
    tinyBow.style.top = "100vh";
    tinyBow.style.fontSize = "20px";
    tinyBow.style.opacity = "0.4";
    tinyBow.style.animation = "heartFloat 6s linear forwards";
    document.body.appendChild(tinyBow);

    setTimeout(() => tinyBow.remove(), 6000);
}, 1500);




document.getElementById("yesBtn").addEventListener("click", function() {
    document.body.innerHTML = `
    <style>
        body {
            margin: 0;
            background: linear-gradient(to right, #ff9a9e, #fad0c4);
            overflow: hidden;
            font-family: 'Poppins', sans-serif;
            text-align: center;
            color: white;
        }

            for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "50vh";
    heart.style.fontSize = "20px";
    heart.style.animation = "confetti 3s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
}


        .message-container {
            padding: 60px 20px;
            position: relative;
            z-index: 2;
        }

        h1 {
            font-size: 50px;
            animation: pop 1s ease-in-out infinite alternate;
        }

        h2 {
            margin-bottom: 30px;
        }

        .note {
            max-width: 700px;
            margin: auto;
            font-size: 18px;
            line-height: 1.6;
        }

        @keyframes pop {
            from { transform: scale(1); }
            to { transform: scale(1.1); }
        }

        .heart {
            position: absolute;
            bottom: -20px;
            font-size: 24px;
            animation: float 6s linear infinite;
        }

        @keyframes float {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(-100vh); opacity: 0; }
        }

        .flower {
            position: absolute;
            font-size: 28px;
            animation: sway 4s ease-in-out infinite alternate;
        }

        @keyframes sway {
            from { transform: rotate(-10deg); }
            to { transform: rotate(10deg); }
        }
    </style>

    <div class="message-container">
        <h1>YOU SAID YESSSS 😭💖</h1>
        <h2>You just made me the happiest girl alive 🌸</h2>

        <div class="note">
            My love,  
            I don’t even know where to start.  
            You are not just my boyfriend… you are my comfort, my peace, my safe place.  
            You are the reason my bad days feel lighter and my good days feel magical.  

            Every time you smile, my heart melts a little.  
            Every time you care for me, I feel the luckiest person in this world.  

            I love the way you talk, the way you think, the way you exist.  
            You make my world softer, warmer, and brighter.  

            I promise to support you, annoy you, laugh with you, stand beside you,  
            and choose you every single day.  

            Thank you for being mine.  
            And thank you for making me yours.  

            I love you more than words will ever be able to explain ❤️

           <h2> HAPPY VALENTINE'S DAYY MY BABY 🌸💖🌷<h2>
        </div>
    </div>
    `;

    // Add floating hearts
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 300);

    // Add flowers in corners
    const flower1 = document.createElement("div");
    flower1.classList.add("flower");
    flower1.innerHTML = "🌸";
    flower1.style.top = "10px";
    flower1.style.left = "20px";
    document.body.appendChild(flower1);

    const flower2 = document.createElement("div");
    flower2.classList.add("flower");
    flower2.innerHTML = "🌷";
    flower2.style.bottom = "10px";
    flower2.style.right = "20px";
    document.body.appendChild(flower2);
});


function playMusic() {
    const music = document.getElementById("bgMusic");
    music.play();
}





// const songLink = "https://open.spotify.com/track/1hQia6rxgfM1ly2hE3StWp?si=LHIg-41GRuKjtji9-UOYkw";

// const qrImage = document.getElementById("qrCode");

// qrImage.src =
//   "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" +
//   encodeURIComponent(songLink);





  document.addEventListener("DOMContentLoaded", function () {

    const songLink = "https://open.spotify.com";  // temporary test link

    const qrImage = document.getElementById("qrCode");

    qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" +
        encodeURIComponent(songLink);

});

const songLink = "https://open.spotify.com/track/1hQia6rxgfM1ly2hE3StWp?si=LHIg-41GRuKjtji9-UOYkw";


function openEnvelope() {
    document.querySelector(".envelope").classList.toggle("open");
}
