'use strict';

function App() {
  
  let data = [];
  let wins = 0;
  let losses = 0;

  for(let i = 0; i < 10000; i++){
    data = Problem(wins, losses);
    wins = data[0];
    losses = data[1];
  }

  

  function Problem(wins, losses){
    let options = [true, false, false]
    let ChosenOption = options[Math.floor(Math.random() * 3)]
    //console.log("First Option: ", ChosenOption)

    options.splice(options.indexOf(ChosenOption), 1);

    let TrueChosenOption = false;

    if(options[0] == false){
      TrueChosenOption = options[1];
    }
    else if(options[0] == true) {
      TrueChosenOption = options[0];
    }

    //console.log(options)

    //console.log("Final Option: ", TrueChosenOption)

    if(TrueChosenOption == true){
      wins += 1;
    }
    else {
      losses += 1;
    }

    return [wins, losses]

  }

  console.log("Wins: ", wins)
  console.log("Losses: ", losses)

}

App();
