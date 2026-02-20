let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

const params = new URLSearchParams(window.location.search);
let username = params.get("name");

const maxLength = 20;
const safeUsername = username ? username.substring(0, maxLength) : "???";

if (username) {
  questionText.innerText = questionText.innerText + safeUsername;
}

let clickCount = 0; 

const noTexts = [
  "？Are you sure…",
  "Think abt it again？",
  "Stop saying no！ ",
  "Imma be sad…",
  "No :(",
];

noButton.addEventListener("click", function () {
  clickCount++;
  
  let yesSize = 1 + clickCount * 1.2;
  yesButton.style.transform = `scale(${yesSize})`;

  let noOffset = clickCount * 50;
  noButton.style.transform = `translateX(${noOffset}px)`;

  let moveUp = clickCount * 25;
  mainImage.style.transform = `translateY(-${moveUp}px)`;
  questionText.style.transform = `translateY(-${moveUp}px)`;

  if (clickCount <= 5) {
    noButton.innerText = noTexts[clickCount - 1];
  }

  if (clickCount === 1) mainImage.src = "images/shocked.png"; // 震惊
  if (clickCount === 2) mainImage.src = "images/think.png"; // 思考
  if (clickCount === 3) mainImage.src = "images/angry.png"; // 生气
  if (clickCount === 4) mainImage.src = "images/crying.png"; // 哭
  if (clickCount >= 5) mainImage.src = "images/IMG_0596.heic"; // 之后一直是哭
});

const loveTest = `!!!I Love You BABY!! ( >᎑<)♡︎ᐝ  ${
  username ? `${safeUsername}  ♡︎ᐝ(>᎑< )` : ""
}`;

yesButton.addEventListener("click", function () {
  document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text"></h1>
            <img src="images/IMG_6065.JPG" alt="Final_Image" class="yes-image">
        </div>
    `;

  document.querySelector(".yes-text").innerText = loveTest;

  document.body.style.overflow = "hidden";

});











