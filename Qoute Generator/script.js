const textArea = document.getElementsByClassName("quote")[0];
const buttonNext = document.querySelector("#next");
const buttonAdd = document.querySelector("#add");
const buttonSubmit = document.querySelector("#submit");
const author = document.getElementsByClassName("person")[0];
const textBox = document.getElementsByClassName("text-area")[0];
const form = document.getElementsByClassName("form")[0];

let quotes = [
  {
    quote: '"The first draft is just you telling yourself the story."',
    person: "Terry Pratchett",
  },

  {
    quote:
      '"You do not start out writing good stuff. You start out writing crap and thinking it is good stuff, and then gradually you get better at it."',
    person: "Octavia E. Butler",
  },

  {
    quote: '"Start before you are ready."',
    person: "Steven Pressfield",
  },

  {
    quote: '"You can always edit a bad page. You can not edit a blank page"',
    person: "Jodi Picoult",
  },

  {
    quote:
      '"I have never started a poem yet whose end I knew. Writing a poem is discovering."',
    person: "Robert Frost",
  },

  {
    quote:
      '"If there is a book that you want to read, but it has not been written yet, then you must write it."',
    person: "Toni Morrison",
  },

  {
    quote:
      '"I get a lot of letters from people. They say, "I want to be a writer. What should I do?" I tell them to stop writing to me and get on with it."',
    person: "Ruth Rendell",
  },
  {
    quote:
      '"I get a lot of letters from people. They say, "I want to be a writer. What should I do?" I tell them to stop writing to me and get on with it."',
    person: "Ruth Rendell",
  },
];

let random = Math.floor(Math.random() * quotes.length);

textArea.innerText = quotes[random].quote;
author.innerText = quotes[random].person;

buttonNext.onclick = function () {
  let random = Math.floor(Math.random() * quotes.length);

  textArea.innerText = quotes[random].quote;
  author.innerText = quotes[random].person;
};

buttonAdd.onclick = function () {
  textBox.style.display = "none";
  form.style.display = "block";
  buttonSubmit.style.display = "block";
  buttonAdd.style.display = "none";
  buttonNext.style.display = "none";
};

buttonSubmit.onclick = function () {
  let newquote = {
    quote: document.getElementById("newquote").value,
    person: document.getElementById("author").value,
  };
  quotes.push(newquote);
  textBox.style.display = "block";
  form.style.display = "none";
  buttonSubmit.style.display = "none";
  buttonAdd.style.display = "inline";
  buttonNext.style.display = "inline";

  textArea.innerText = quotes[quotes.length - 1].quote;
  author.innerText = quotes[quotes.length - 1].person;
};
