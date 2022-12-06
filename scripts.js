var btnTrnslate=document.querySelector("#Translate-btn");
var inputText=document.querySelector("#text-input");
var outputDiv=document.querySelector("#output-div");

var url="	https://api.funtranslations.com/translate/minion.json"

function getTranslation(text){
    return url + "?" + "text=" + text
}

function errorHandler(error){
    console.log("Error Occured", error);
    alert("Something went wrong with server! try again later");
}

function clickHandler(){
    var txtInput= inputText.value;
    fetch(getTranslation(txtInput))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerHTML=translatedText;
    })
    .catch(errorHandler)
}


btnTrnslate.addEventListener("click",clickHandler)
