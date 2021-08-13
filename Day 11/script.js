var questions = [
["Who is Peter Parker's nemesis in the first Spider-Man film?", "The Joker", "Magneto", "The Green Goblin","None", "3"],
["What is Cyclops' power in X-Men?", "Telekinesis", "Optic blast", " Diamond skin", "all","2"],
["What is the name of the cosmic cube that Loki takes control of in The Avengers?", "the Tesseract", "the Magic Cube", "the Mjolnir", "all","1"],
[" How many Avengers are there in the Avengers movie?", " 4", " 10", "6", "100","3"],
["How do the Fantastic Four get their powers?", "  they were bitten by a radioactive spider", " they were exposed to cosmic radiation in space", " they were experimented on", "Dont know","2"],
[" What's the name of Tony Stark's company in the Iron Man trilogy?", "  Stark and Sons", "  Stark and Co", " Stark Industries", "Avg co","3"],
["Who does Dare Devil team up with in his film?", " Elektra", "  Storm", "The Invisible Woman", "Wonder Women","1"],
["How many years was Captain America frozen for in Captain America: The First Avenger?", " Nearly 100 years", " Nearly 70 years", "Nearly 20 years", "Nearly 10 years","2"],
["Who is Thor's main romantic interest in Thor?", "Jane Foster", "Jean Grey", "Mary Jane", "peta Jenson","1"],
[" In X2, who do the X-Men find hidden in a church?", "The Nightcrawler", "The Silver Surfer", "The beast", "Monkey Man","3"],
[" What's the name of Jean Grey's alter-ego in X-Men?", " The Black Widow", "The Invisible Woman", "The Phoenix", "The Hulk","2"],
["What is the name of Rhodey's iron suit in Iron Man 3", "Death Proof", "  War Machine", " Killing Machine", "Jump Suit","1"],
];






var quiz=document.getElementById("quiz");
var ques= document.getElementById("question");
var opt1=document.getElementById("option1");
var opt2=document.getElementById("option2");
var opt3=document.getElementById("option3");
var opt4=document.getElementById("option4");
var res=document.getElementById("result");
var nextbutton= document.getElementById("next");
var q=document.getElementById('quit');

var tques=questions.length;
var score=0;
var quesindex=0;
function quit()
{         
quiz.style.display='none';
result.style.display='';
var f=score/tques;
result.textContent="SCORE ="+f*100;
q.style.display="none";
}
function give_ques(quesindex) 
{
ques.textContent=quesindex+1+". "+questions[quesindex][0];
opt1.textContent=questions[quesindex][1];
opt2.textContent=questions[quesindex][2];
opt3.textContent=questions[quesindex][3];
opt4.textContent=questions[quesindex][4];
return;// body...
};
give_ques(0);
function nextques()
{
var selected_ans= document.querySelector('input[type=radio]:checked');
if(!selected_ans)
{alert("SELECT AN OPTION");return;}

if(selected_ans.value==questions[quesindex][5])
{score=score+1;}
selected_ans.checked=false;
quesindex++;
if(quesindex==tques-1)
nextbutton.textContent="Finish";
var f=score/tques;
if(quesindex==tques)
{
q.style.display='none';
quiz.style.display='none';
result.style.display='';
result.textContent="SCORED:"+(f*100).toFixed(2)+"%";
return;
}
give_ques(quesindex);

}
