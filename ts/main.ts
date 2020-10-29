class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

// test code
let myGame = new VideoGame();
myGame.title = "Mario";
myGame.rating = "E";
myGame.isDigitalOnly = true;

window.onload = function(){
    let addBtn = 
    <HTMLElement>document.querySelector("input[type=button]")
    addBtn.onclick = addVideoGame;
}

function addVideoGame(){
    alert("test");

    if(isAllDataValid()){
    let game = getVideoGame();
    displayGame(game);
    }
function displayGame(myGame:VideoGame):void{
        let displayDiv = getById("display");

        // Create <h2> with game title
        let gameHeading = document.createElement("h2");
        gameHeading.innerText = myGame.title;
//
        let gameInfo = document.createElement("p");
        let notDigitalDisplay = "";
        if(myGame.isDigitalOnly){
            notDigitalDisplay = "not";
        }
       

       // gameInfo.innerText = ${myGame.title} has a rating of $
       // {myGame.rating}. It cost ${myGame.price}. It is $
        //{notDigitalDisplay} digital only ;

        // Add <h2> in the div 
        displayDiv.appendChild(gameHeading);

        displayDiv.appendChild(gameInfo);

}
   // TODO: DISPLAY VIDEO GAME BELOW THE FORM
    function getById(id:string){
        return document.getElementById(id);
    }

/**
 * Gets all game data from the form 
 * and returns it in a VideoGame object
 */
   function getVideoGame():VideoGame{
    let game = new VideoGame();
    // Populate with data from the form
    let titleInput = 
     <HTMLInputElement>getById("title");
    game.title = titleInput.value;
     
    let priceInput =
        <HTMLInputElement>document.getElementById("price");
        game.price = parseFloat(priceInput.value);

        let ratingInput = <HTMLSelectElement>getById("rating");
        game.rating = ratingInput.value

        let DigitalOnly = <HTMLInputElement>getById("online");
        game.isDigitalOnly = DigitalOnly.checked
            if(DigitalOnly.checked){
                game.isDigitalOnly = true;
            }
            else{
                game.isDigitalOnly = false;
                
                return game;
            }
    // TODO: Populate with data from the form
    // TODO: return game
}

}
// ADD VALIDATION CODE*********
function isAllDataValid(){
    return true;

}