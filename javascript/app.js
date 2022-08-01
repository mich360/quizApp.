const quiz = [
  {
  question: 'ゲーム市場、最も売れた機種は次のうちどれ？',
  answers: [
     'スーパーファミコン',
     'プレイステーション2',
     'ニンテンドーS',
     'ニンテンドーDS'
    ],
  correct: 'ニンテンドーDS'
  }, {
  question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
  answers: [
     'MOTHER2', 
     'スーパーマリオブラザーズ3',
     'スーパードンキーコング',
     '星のカービィ'
    ],
     correct: 'MOTHER2'
  }, {
    question: 'ファイナルファンタジーIVの主人公の名前は？',
    answers: [
     'フリオニール',
     'クラウド',
     'ティーダ',
     'セシル'
     ],
     correct: 'セシル'
  }

];

const quizLength = quiz.length;
let quizIndex = 0; 
let score = 0;

const button = document.getElementsByTagName('button');
const buttonLength = button.length;
//クイズの問題文、選択肢を定義する
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = button.length;
  while(buttonIndex < buttonLength){
    button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent ){
    window.alert('正解 !');
    score++;
   }else{
    window.alert('不正解 !');
   }
   
quizIndex++;  

 if(quizIndex < quizLength){
 //もし問題数があればこっちを実行
 setupQuiz();
 }else{
 //問題数がもうなければこっちを実行
 window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
 
 }
};

//ボタンを押したら正誤判定する
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  button[handlerIndex].addEventListener('click', (e) => {
  clickHandler(e);

});
  handlerIndex++;
}
