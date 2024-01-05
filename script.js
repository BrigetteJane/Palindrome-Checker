
const checkButton = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn")
const textInput = document.getElementById ("text-input");
const result = document.getElementById("result");

function cleaningText (text){
  const cleanedText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reverseText = cleanedText.split("").reverse().join('');
  return cleanedText === reverseText;
}

function clickCheckButton (){
  result.innerHTML="";
if (textInput.value.trim() === "" || textInput.value === null){
  alert("please input a value");
}
else if(cleaningText(textInput.value)){
result.innerHTML +=`${textInput.value} is a palindrome`

}else{
  result.innerHTML +=`${textInput.value} is not a palindrome`
}
}

checkButton.addEventListener('click',clickCheckButton);


