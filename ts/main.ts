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
            }
    // TODO: Populate with data from the form
    // TODO: return game
}

}
// ADD VALIDATION CODE*********
function isAllDataValid(){
    return true;

}