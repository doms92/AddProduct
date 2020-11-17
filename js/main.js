var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
var myGame = new VideoGame();
myGame.title = "Mario";
myGame.rating = "E";
myGame.isDigitalOnly = true;
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function clearALLErrors() {
    var errSummary = getInputById("validation-summary");
    errSummary.innerText = "";
}
function addVideoGame() {
    console.log("Add video game was called");
    clearALLErrors();
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function displayGame(myGame) {
    var displayDiv = getById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var gameMediumDisplay = "";
    if (myGame.isDigitalOnly) {
        gameMediumDisplay = "This is a digital only game";
    }
    else {
        gameMediumDisplay = "You can come buy a Physical copy";
    }
    gameInfo.innerText = myGame.title + " has a rating of " + myGame.rating + " \n         It cost " + myGame.price + ". " + gameMediumDisplay;
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function getById(id) {
    return document.getElementById(id);
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = getById("title");
    game.title = titleInput.value;
    var priceInput = getById("price");
    game.price = parseFloat(priceInput.value);
    var ratingInput = getById("rating");
    game.rating = ratingInput.value;
    var DigitalOnly = getById("online");
    game.isDigitalOnly = DigitalOnly.checked;
    return game;
}
function getInputById(id) {
    return document.getElementById(id);
}
function isAllDataValid() {
    var isValid = true;
    var title = getInputById("title").value;
    if (title == "") {
        isValid = false;
        addErrorMessage("Title is required");
    }
    var price = getInputById("price").value;
    var priceValue = parseFloat(price);
    if (price == "" || priceValue == NaN) {
        isValid = false;
        addErrorMessage("Price is required and must be a number");
    }
    var rating = getInputById("rating").value;
    return isValid;
}
function addErrorMessage(errMsg) {
    var errSummary = getInputById("validation-summary");
    var errItem = document.createElement("li");
    errItem.innerText = errMsg;
    return { errSummary: errSummary, errItem: errItem };
}
