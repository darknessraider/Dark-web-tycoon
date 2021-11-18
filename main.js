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
var allVariables = [
    balance, 
    autoSave ,
    buyActive ,
    bitCoinUpgradeNumber ,
    bitCoinUpgradeCost ,
    bitcoinProfit ,
    bitcoinIcrease ,
    totalBitCoinPerSecond,
    gunFactories,
    gunFactoryCost,
    gunFactoryProfit,
    gunFactoryIncrease,
    bombFactories,
    bombFactoryCost,
    bombFactoryProfit,
    bombFactoryIncrease,
    humanLeatherFactories,
    humanLeatherFactoryCost,
    humanLeatherFactoryProfit,
    humanLeatherFactoryIncrease,
    marijuanaFactories,
    marijuanaFactoryCost,
    marijuanaFactoryProfit,
    marijuanaFactoryIncrease,
    cocaineFactories,
    cocaineFactoryCost,
    cocaineFactoryProfit,
    cocaineFactoryIncrease,
    nukeFactories,
    nukeFactoryCost,
    nukeFactoryProfit,
    nukeFactoryIncrease,
]

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

//import

var I = 0

function importFile(){
    
  document.getElementById('inputfile')
  .addEventListener('change', function() {
        
  var fr=new FileReader();
  fr.onload=function(){

    
   importData = fr.result;
   parsedData = importData.split(',');
   

    //really unefficient way of setting all the varibles 
     balance = parseInt(parsedData[I])
     ++I
     bitCoinUpgradeNumber = parseInt(parsedData[I])
     ++I
     bitCoinUpgradeCost = parseInt(parsedData[I])
     ++I
     bitcoinProfit = parseInt(parsedData[I])
     ++I
     bitcoinIcrease = parseInt(parsedData[I])
     ++I
     totalBitCoinPerSecond = parseInt(parsedData[I])
     ++I
     gunFactories = parseInt(parsedData[I])
     ++I
     gunFactoryCost = parseInt(parsedData[I])
     ++I
     gunFactoryProfit = parseInt(parsedData[I])
     ++I
     gunFactoryIncrease = parseInt(parsedData[I])
     ++I
     bombFactories = parseInt(parsedData[I])
     ++I
     bombFactoryCost = parseInt(parsedData[I])
     ++I
     bombFactoryProfit = parseInt(parsedData[I])
     ++I
     bombFactoryIncrease = parseInt(parsedData[I])
     ++I
     humanLeatherFactories = parseInt(parsedData[I])
     ++I
     humanLeatherFactoryCost = parseInt(parsedData[I])
     ++I
     humanLeatherFactoryProfit = parseInt(parsedData[I])
     ++I
     humanLeatherFactoryIncrease = parseInt(parsedData[I])
     ++I
     marijuanaFactories = parseInt(parsedData[I])
     ++I
     marijuanaFactoryCost = parseInt(parsedData[I])
     ++I
     marijuanaFactoryProfit = parseInt(parsedData[I])
     ++I
     marijuanaFactoryIncrease = parseInt(parsedData[I])
     ++I
     cocaineFactories = parseInt(parsedData[I])
     ++I
     cocaineFactoryCost = parseInt(parsedData[I])
     ++I
     cocaineFactoryProfit = parseInt(parsedData[I])
     ++I
     cocaineFactoryIncrease = parseInt(parsedData[I])
     ++I
     nukeFactories = parseInt(parsedData[I])
     ++I
     nukeFactoryCost = parseInt(parsedData[I])
     ++I
     nukeFactoryProfit = parseInt(parsedData[I])
     ++I
     nukeFactoryIncrease = parseInt(parsedData[I])
     I = 0
   
  }
        
  fr.readAsText(this.files[0]);
  
})}