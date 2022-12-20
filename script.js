var textInput=document.querySelector("#textInput");
var btnTranslate=document.querySelector("#btn-translate");
var output=document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslation(input){
   return serverURL+ "?"+ "text="+ input;
}


function clickHandler(){
var inputText=textInput.value;
 fetch(getTranslation(inputText)).then(response=> response.json())
 .then(json=>{
   var translatedText= json.contents.translated;
   output.innerText= translatedText;
 }
    )
}
btnTranslate.addEventListener("click",clickHandler);

