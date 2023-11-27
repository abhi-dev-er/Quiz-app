const Questions =[{
    'Question': "What Is Correct Syntax to Write an Html comment?",
    'a': "<!--Comment-->",
    'b': "// Comment",
    "c": "#Comment", 
    'd': "/*Comment*/",
    'correct': "a"
},
{
    'Question': "Html Stands For",
    'a': "HighText Machine Language",
    'b': "HyperText and Links Markup Language",
    "c": "HyperText Markup Language",
    'd': "None of these",
    'correct': "c"
},
{
    'Question': "Which of the following tag is used to insert a line break in html",
    'a': "<br>",
    'b': "<a>",
    "c": "<pre>",
    'd': "<b>",
    'correct': "a"
},
{
    'Question': "Html tags are enclosed in",
    'a': "# and #",
    'b': "{ and }",
    "c": "! and ?",
    'd': "< and >",
    'correct': "d"
},
{
    'Question': "The '<hr>' tag in html is used for",
    'a': "new line",
    'b': "vertical ruler",
    "c": "new paragraph",
    'd': "horizontal ruler",
    'correct': "d"
},
{
    'Question': "Which of the following is the paragraph tag in html?",
    'a': "<p>",
    'b': "<b>",
    "c": "<pre>",
    'd': "none of the above",
    'correct': "a"
},
{
    'Question': "An Html program is saved by using the_____extension",
    'a': ".ht",
    'b': ".html",
    "c": ".hml",
    'd': "None of the above",
    'correct': "b"
},
{
    'Question': "The tags in Html are-",
    'a': "case-sensitive",
    'b': "in upper case",
    "c": "not case-sensitive",
    'd': "in Lowercase",
    'correct': "c"
},
{
    'Question': "root tag of the html is",
    'a': "<body>",
    'b': "<head>",
    "c": "<title>",
    'd': "<html>",
    'correct': "d",
},
{
    'Question': "Select not a Block Lavel element",
    'a': "span",
    'b': "h1",
    "c": "p",
    'd': "div",
    'correct': "c"
}];
let index =0;
let total = Questions.length;
let right = 0,
    wrong = 0;
const QuestionsBox =document.getElementById('QuesBox');
const optionsInput = document.querySelectorAll('.options');
const ShowQuestion=()=>{
    if(index===total){
       return QuizEnd();
    }
    reset();
  const data = Questions[index];
  QuestionsBox.innerHTML = ` ${index+1})${data.Question}`;
  optionsInput[0].nextElementSibling.innerText = data.a;
  optionsInput[1].nextElementSibling.innerText = data.b;
  optionsInput[2].nextElementSibling.innerText = data.c;
  optionsInput[3].nextElementSibling.innerText = data.d;
}

const SubmitQuiz =()=>{
    const data = Questions[index];
   const ans = getAns();
   if(ans ===data.correct){
    right++;
   }else{
    wrong++;
   }
   index++;
   ShowQuestion();
   return;
}
const getAns = () =>{
    let answer;
  optionsInput.forEach(
    (input) =>{
        if(input.checked){
        answer = input.value;
        }
    }
  )
  return answer;
}

const reset =()=>{
    optionsInput.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}
 const QuizEnd =()=>{
    document.getElementById('box').innerHTML=`
    <div style="text-align: center">
    <h23> Your Quiz Has Ended Thank You... </h23> 
    <h2>${right} / ${total} are Correct</h2>
    </div>
    `
 }
ShowQuestion();