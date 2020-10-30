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
/**
 * Clears all errors in the validation summary
 */
function clearALLErrors(){
    let errSummary = getInputById("validation-summary");
    errSummary.innerText = "";
}

function addVideoGame(){
    console.log("Add video game was called");
    clearALLErrors();
    if(isAllDataValid()){
        
    let game:VideoGame = getVideoGame();
    displayGame(game);
    }
function displayGame(myGame:VideoGame):void{
        let displayDiv = getById("display");

        // Create <h2> with game title
        let gameHeading = document.createElement("h2");
        gameHeading.innerText = myGame.title;
//
        let gameInfo = document.createElement("p");
        let gameMediumDisplay = "";
        if(myGame.isDigitalOnly){
            gameMediumDisplay = "This is a digital only game";

        }
       else{
           gameMediumDisplay = "You can come buy a Physical copy"
       }

        gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating} 
         It cost ${myGame.price}. ${gameMediumDisplay}`;

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
    
}

}
function getInputById(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id)

    
}

function isAllDataValid(){
    let isValid = true;

    let title = getInputById("title").value;
    if(title == ""){
       isValid = false;
        let errSummary = getInputById("validation-summary");
        let errItem = document.createElement("li");
        errItem.innerText = "Title is required!";

            errSummary.appendChild(errItem);
    }
     let price = getInputById("price").value;
     let priceValue = parseFloat(price);
     if(price == "" || priceValue == NaN){
        isValid = false;

        let errSummary = getInputById("validation-summary");
        let errItem = document.createElement("li");
        errItem.innerText = "Price is required and must be a number";

        errSummary.appendChild(errItem);
     }   
    
    return isValid;
}