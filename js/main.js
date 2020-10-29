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
function addVideoGame() {
    alert("test");
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
    function displayGame(myGame) {
        var displayDiv = getById("display");
        var gameHeading = document.createElement("h2");
        gameHeading.innerText = myGame.title;
        var gameInfo = document.createElement("p");
        var notDigitalDisplay = "";
        if (myGame.isDigitalOnly) {
            notDigitalDisplay = "not";
        }
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
        var priceInput = document.getElementById("price");
        game.price = parseFloat(priceInput.value);
        var ratingInput = getById("rating");
        game.rating = ratingInput.value;
        var DigitalOnly = getById("online");
        game.isDigitalOnly = DigitalOnly.checked;
        if (DigitalOnly.checked) {
            game.isDigitalOnly = true;
        }
        else {
            game.isDigitalOnly = false;
            return game;
        }
    }
}
function isAllDataValid() {
    return true;
}
