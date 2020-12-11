var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"


//server url
var serverURL = "https://api.funtranslations.com/translate/minion.json"


// adding, text name to be translated, into serverURL
function getTranslate(text){
    return serverURL + "?" + "text=" + text;
}

//error handler
function errorHandler(error){
    console.log("error occurred", error);
    alert("Something is wrong with server!!!!")
}


btnTranslate.addEventListener("click", clickHandler);


function clickHandler() {
    var InputText = textInput.value; //taking input

    //calling server for processing
    fetch(getTranslate(InputText))   //passing text as argument
        .then(Response => Response.json())  //converting response in json format
        .then(json => {
            var translatedText = json.contents.translated;   //get json translated into variable
            outputDiv.innerHTML = translatedText;   // show output
            })
        .catch(errorHandler)
};
