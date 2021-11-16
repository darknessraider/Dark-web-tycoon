//game founded by woodyspivey 



//all variables
var balance = 0;
var autoSave = "off";
var buyActive = "on";
var bitCoinUpgradeNumber = 0;
var bitCoinUpgradeCost = 50;
var bitcoinProfit = 1;
var bitcoinIcrease = 1;
var totalBitCoinPerSecond = 0;
var gunFactories = 0;
var gunFactoryCost = 500;
var gunFactoryProfit = 0;
var gunFactoryIncrease = 1;
var bombFactories = 0;
var bombFactoryCost = 1000;
var bombFactoryProfit = 0;
var bombFactoryIncrease = 5;
var humanLeatherFactories = 0;
var humanLeatherFactoryCost = 5000;
var humanLeatherFactoryProfit = 0;
var humanLeatherFactoryIncrease = 20;
var marijuanaFactories = 0;
var marijuanaFactoryCost = 10000;
var marijuanaFactoryProfit = 0;
var marijuanaFactoryIncrease = 50
var cocaineFactories = 0;
var cocaineFactoryCost = 50000;
var cocaineFactoryProfit = 0;
var cocaineFactoryIncrease = 1000;
var nukeFactories = 0;
var nukeFactoryCost = 150000;
var nukeFactoryProfit = 0;
var nukeFactoryIncrease = 5000;

//Display All Numbers 

//Runs when you click the bit coin and gives you money
function bitcoinClick () {
  balance += bitcoinProfit
}

 
//runs every second and adds up the total profit 
function idleBalanceIncrease () {
  totalBitCoinPerSecond = gunFactoryProfit + bombFactoryProfit + humanLeatherFactoryProfit + marijuanaFactoryProfit + cocaineFactoryProfit + nukeFactoryProfit;
  balance += totalBitCoinPerSecond
  //cool thing that loop the function every second
  setTimeout(idleBalanceIncrease, 1000);
}


function autoSaveToggle (){
  if (autoSave == "on"){
    autoSave = "off"
    document.getElementById("autoSaveToggle").style.backgroundColor = "red";
  }else{
    autoSave = "on"
    document.getElementById("autoSaveToggle").style.backgroundColor = "green";
  }
  
}

function autoSaveLoop (){
  if (autoSave == "on"){
    save()
  } 
  setTimeout(autoSaveLoop, 10000)
}



//this is from the upgrade store on the right and is disabled right now because it causes a glitch with saving and loading 
function doubleClickUpgrade () {
  if (balance >= 1000) {
    balance = balance - 1000;
    bitcoinIcrease = bitcoinIcrease * 2;
    bitcoinProfit = bitcoinProfit * 2;
    document.getElementById("doubleClickUpgrade").style.visibility = "hidden"
  }
}


//this was an idea

if (document.cookie == ""){
  save()
}else{
  load()
}


//these start the repeating functions
refreshDisplay();
idleBalanceIncrease();
autoSaveLoop();


//checks the auto save cookie to change the color of the button 
if (autoSave == "off"){
  document.getElementById("autoSaveToggle").style.backgroundColor = "red";
}else if(autoSave == "on"){
  document.getElementById("autoSaveToggle").style.backgroundColor = "green";
}else{
  document.getElementById("autoSaveToggle").style.backgroundColor = "red";
}

