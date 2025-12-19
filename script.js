const quotes = [
"Learning new skills takes time and patience. Every small step you take builds confidence and knowledge. Typing regularly helps improve both speed and accuracy. Mistakes are a normal part of the learning process. Consistent practice is more important than talent. Setting daily goals keeps motivation high. Focus on accuracy before increasing speed. Technology skills are essential in modern careers. Hard work always gives long term results. Never stop learning and improving yourself.",

"Technology plays an important role in everyday life. Computers help us solve complex problems faster. The internet connects people across the world instantly. Learning to type efficiently saves valuable time. Good typing skills improve productivity and confidence. Practice helps build muscle memory in fingers. Patience is required to master any new skill. Discipline turns effort into success. Small improvements lead to big achievements. Continuous learning leads to personal growth.",

"Success is achieved through consistent effort and dedication. Every expert was once a beginner. Typing is a skill that improves with regular practice. Accuracy should be prioritized before speed. Learning from mistakes helps in improvement. Time management is important for personal growth. Technology makes learning more accessible. Self confidence grows with skill development. Focused practice delivers better results. Persistence is the key to long term success.",

"Education empowers individuals to achieve their goals. Modern learning depends heavily on technology. Typing is an essential skill in the digital age. Regular practice strengthens coordination and accuracy. Clear goals improve learning efficiency. Mistakes help identify areas of improvement. Discipline creates strong habits over time. Confidence grows with consistent progress. Hard work always pays off eventually. Learning is a lifelong journey.",

"Personal growth requires dedication and commitment. Daily practice improves typing speed gradually. Accuracy builds the foundation for fast typing. Learning new skills increases self confidence. Technology simplifies communication and work. Small efforts repeated daily bring success. Focus helps reduce errors while typing. Patience leads to long term improvement. Discipline strengthens professional abilities. Continuous learning creates better opportunities."
];


const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input");
const timeEl = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const submitBtn = document.getElementById("submitBtn");
const resultEl = document.getElementById("result");

let time = 60;
let timer;
let currentQuote = "";

// Start test
startBtn.addEventListener("click", () => {
    currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.innerText = currentQuote;

    inputEl.value = "";
    inputEl.disabled = false;
    inputEl.focus();

    startBtn.disabled = true;
    submitBtn.disabled = false;

    time = 60;
    timeEl.innerText = time;

    timer = setInterval(() => {
        time--;
        timeEl.innerText = time;

        if (time === 0) {
            finishTest();
        }
    }, 1000);
});

// Submit manually
submitBtn.addEventListener("click", finishTest);

function finishTest() {
    clearInterval(timer);
    inputEl.disabled = true;
    submitBtn.disabled = true;
    startBtn.disabled = false;

    const typedText = inputEl.value.trim();
    const quoteWords = currentQuote.split(" ");
    const typedWords = typedText.split(" ");

    let correct = 0;
    typedWords.forEach((word, index) => {
        if (word === quoteWords[index]) {
            correct++;
        }
    });

    const totalWords = typedWords.length;
    const accuracy = totalWords === 0 ? 0 : Math.round((correct / totalWords) * 100);
    const wpm = Math.round((correct / 60) * 60);

    resultEl.innerHTML = `
        <p><b>Speed:</b> ${wpm} WPM</p>
        <p><b>Accuracy:</b> ${accuracy}%</p>
        <p><b>Correct Words:</b> ${correct}</p>
        <p><b>Wrong Words:</b> ${totalWords - correct}</p>
    `;
}
