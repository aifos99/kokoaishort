// AI 知識問答遊戲邏輯與動畫
const aiQuizData = [
  {
    question: "AI 是什麼的縮寫？",
    options: ["Artificial Intelligence", "Automatic Internet", "Advanced Input", "Active Interface"],
    answer: 0
  },
  {
    question: "下列哪一項是機器學習的應用？",
    options: ["自動駕駛汽車", "手寫信件", "傳統電視", "紙本報紙"],
    answer: 0
  },
  {
    question: "深度學習主要模仿哪種生物結構？",
    options: ["神經網路", "骨骼", "肌肉", "血液"],
    answer: 0
  },
  {
    question: "ChatGPT 屬於哪一類 AI 技術？",
    options: ["自然語言處理", "圖像辨識", "語音合成", "機器視覺"],
    answer: 0
  },
  {
    question: "AI 最常用來解決什麼問題？",
    options: ["模式辨識", "物理運動", "手工勞動", "天氣變化"],
    answer: 0
  }
];

let quizIndex = 0;
let score = 0;

function renderQuiz() {
  const quizBox = document.getElementById('ai-quiz-box');
  if (quizIndex >= aiQuizData.length) {
    quizBox.innerHTML = `
      <div class="quiz-finish animate__fadeInUp">
        <h3>🎉 恭喜完成問答！</h3>
        <p>你的分數：<span style="color:#ff4757;font-weight:bold;">${score} / ${aiQuizData.length}</span></p>
        <button class="quiz-btn" onclick="restartQuiz()">再玩一次</button>
      </div>
    `;
    return;
  }
  const q = aiQuizData[quizIndex];
  quizBox.innerHTML = `
    <div class="quiz-question animate__fadeInUp">
      <h3>第 ${quizIndex + 1} 題</h3>
      <p>${q.question}</p>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `<button class="quiz-btn" onclick="selectOption(${i})">${opt}</button>`).join('')}
      </div>
    </div>
  `;
}

function selectOption(selected) {
  const q = aiQuizData[quizIndex];
  const quizBox = document.getElementById('ai-quiz-box');
  const isCorrect = selected === q.answer;
  if (isCorrect) score++;
  // 顯示正確/錯誤動畫
  quizBox.querySelectorAll('.quiz-btn')[selected].classList.add(isCorrect ? 'correct' : 'wrong');
  setTimeout(() => {
    quizIndex++;
    renderQuiz();
  }, 900);
}

function restartQuiz() {
  quizIndex = 0;
  score = 0;
  renderQuiz();
}

document.addEventListener('DOMContentLoaded', () => {
  const quizSection = document.getElementById('ai-quiz-section');
  if (quizSection) renderQuiz();
});
