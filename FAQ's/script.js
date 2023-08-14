const accordion = document.getElementsByClassName('accordion')[0]

const createCard = (q, a) => {
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");

  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  questionDiv.textContent = q;

  const answerDiv = document.createElement("div");
  answerDiv.classList.add("answer");
  answerDiv.textContent = a;

  contentDiv.appendChild(questionDiv);
  contentDiv.appendChild(answerDiv);
  accordion.appendChild(contentDiv);

  return contentDiv;
};

const contentDivs = [];

let contentDiv = createCard("What is your Name?", "Khuzaima Ahmed");
contentDivs.push(contentDiv);

contentDiv = createCard("What is your Age?", "I am 22 years old");
contentDivs.push(contentDiv);

contentDiv = createCard(
  "What is the name of your university?",
  "Punjab University College of Information & Technology"
);
contentDivs.push(contentDiv);

contentDiv = createCard(
  "Tell us about yourself?",
  "I am MERN Stack Developer & Machine Learning Enthusiast"
);
contentDivs.push(contentDiv);

for (i = 0; i < contentDivs.length; i++) {
  contentDivs[i].onclick = function () {
    this.classList.toggle("active");
  };
}


