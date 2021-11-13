//game founded by woodyspivey 

//all variables
var balance = 0;
var autoSave = "off";
var bitCoinUpgradeNumber = 1;
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
var marihuanaFactories = 0;
var marihuanaFactoryCost = 10000;
var marihuanaFactoryProfit = 0;
var marihuanaFactoryIncrease = 50
var cocainFactories = 0;
var cocainFactoryCost = 50000;
var cocainFactoryProfit = 0;
var cocainFactoryIncrease = 1000;


//Display All Numbers 

//Runs when you click the bit coin and gives you money
function bitcoinClick () {
  balance += bitcoinProfit
}


//Runs when you click Upgrade bitcoin
function upgradeBitcoin () {
  if (balance >= bitCoinUpgradeCost) {
  balance = balance - bitCoinUpgradeCost;
  bitCoinUpgradeNumber += 1;
  bitCoinUpgradeCost += bitCoinUpgradeCost/10;
  bitcoinProfit += bitcoinIcrease;
  bitCoinUpgradeCost = parseInt(bitCoinUpgradeCost);

  }
}

//runs when you click upgrade gun factory I think you can figure out what the rest of these do
function upgradeGunFactory () {
  if (balance >= gunFactoryCost) {
    balance = balance - gunFactoryCost;
    gunFactories += 1;
    gunFactoryCost += gunFactoryCost/10;
    gunFactoryProfit += gunFactoryIncrease;
    gunFactoryCost = parseInt(gunFactoryCost);

  }
}


function upgradeBombFactory () {
  if (balance >= bombFactoryCost) {
    balance = balance - bombFactoryCost;
    bombFactories += 1;
    bombFactoryCost += bitCoinUpgradeCost/10;
    bombFactoryProfit += bombFactoryIncrease;
    bombFactoryCost = parseInt(bombFactoryCost);
  }
}


function upgradeHumanLeatherFactory () {
  if (balance >= humanLeatherFactoryCost) {
    balance = balance - humanLeatherFactoryCost;
    humanLeatherFactories += 1;
    humanLeatherFactoryCost += humanLeatherFactoryCost/10;
    humanLeatherFactoryProfit += humanLeatherFactoryIncrease;
    humanLeatherFactoryCost = parseInt(humanLeatherFactoryCost);
  }
}


function upgradeMarihuanaFactory () {
  if (balance >= marihuanaFactoryCost) {
    balance = balance - marihuanaFactoryCost;
    marihuanaFactories += 1;
    marihuanaFactoryCost += marihuanaFactoryCost/10;
    marihuanaFactoryProfit += marihuanaFactoryIncrease;
    marihuanaFactoryCost = parseInt(marihuanaFactoryCost);
  }
}


function upgradeCocainFactory () {
  if (balance >=  cocainFactoryCost) {
    balance = balance - cocainFactoryCost;
    cocainFactories += 1;
    cocainFactoryCost += cocainFactoryCost/10;
    cocainFactoryProfit += cocainFactoryIncrease;
    cocainFactoryCost = parseInt(cocainFactoryCost);
  }
}
 
//runs every second and adds up the total profit 
function idleBalanceIncrease () {
  totalBitCoinPerSecond = gunFactoryProfit + bombFactoryProfit + humanLeatherFactoryProfit + marihuanaFactoryProfit + cocainFactoryProfit;
  balance += totalBitCoinPerSecond
  //cool thing that loop the function every second
  setTimeout(idleBalanceIncrease, 1000);
}


function autoSaveToggle (){
  if (autoSave == "on"){
    autoSave = "off"
  }else{
    autoSave = "on"
  }
  
}

function autoSaveLoop (){
  if (autoSave == "on"){
    save()
  } 
  setTimeout(autoSaveLoop, 60000)
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

//this is code I stole to set cookies 
function setCookie(cName, cValue) {
        let date = new Date();
        date.setTime(date.getTime() + (1000000000000 * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

//this is also code I stole but this time to get cookies
function getCookie(cName, noParse) {
      const name = cName + "=";
      const cDecoded = decodeURIComponent(document.cookie); //to be careful
      const cArr = cDecoded .split('; ');
      let res;
      cArr.forEach(val => {
          if (val.indexOf(name) === 0) res = val.substring(name.length);
      })
      if (noParse){
        return res;
      }
      return parseInt(res)
}


//this runs when you push the load button and loads all the cookies into variables
function load() {
  balance = getCookie ("balance");
  bitCoinUpgradeNumber = getCookie ("bitCoinUpgradeNumber");
  bitCoinUpgradeCost = getCookie ("bitCoinUpgradeCost");
  bitcoinProfit = getCookie ("bitcoinProfit");
  bitcoinIcrease = getCookie ("bitcoinIcrease");
  totalBitCoinPerSecond = getCookie ("totalBitCoinPerSecond");
  gunFactories = getCookie ("gunFactories");
  gunFactoryCost = getCookie ("gunFactoryCost");
  gunFactoryProfit = getCookie ("gunFactoryProfit");
  gunFactoryIncrease = getCookie ("gunFactoryIncrease");
  bombFactories = getCookie ("bombFactories");
  bombFactoryCost = getCookie ("bombFactoryCost");
  bombFactoryProfit = getCookie ("bombFactoryProfit");
  humanLeatherFactories = getCookie ("humanLeatherFactories");
  humanLeatherFactoryCost = getCookie ("humanLeatherFactoryCost");
  humanLeatherFactoryProfit = getCookie ("humanLeatherFactoryProfit");
  humanLeatherFactoryIncrease = getCookie("humanLeatherFactoryIncrease");
  marihuanaFactories = getCookie ("marihuanaFactories");
  marihuanaFactoryCost = getCookie ("marihuanaFactoryCost");
  marihuanaFactoryProfit = getCookie ("marihuanaFactoryProfit");
  marihuanaFactoryIncrease = getCookie ("marihuanaFactoryIncrease");
  cocainFactories = getCookie ("cocainFactories");
  cocainFactoryCost = getCookie ("cocainFactoryCost");
  cocainFactoryProfit = getCookie ("cocainFactoryProfit");
  cocainFactoryIncrease = getCookie ("cocainFactoryIncrease");
  autoSave = getCookie("autoSave");
}

//this saves all the variables into cookies
function save() {
    setCookie("balance", balance);
    setCookie("bitCoinUpgradeNumber", bitCoinUpgradeNumber);
    setCookie("bitCoinUpgradeCost", bitCoinUpgradeCost);
    setCookie("bitcoinProfit", bitcoinProfit);
    setCookie("bitcoinIcrease", bitcoinIcrease);
    setCookie("totalBitCoinPerSecond", totalBitCoinPerSecond);
    setCookie("gunFactories", gunFactories);
    setCookie("gunFactoryCost", gunFactoryCost);
    setCookie("gunFactoryProfit", gunFactoryProfit);
    setCookie("gunFactoryIncrease", gunFactoryIncrease);
    setCookie("bombFactories", bombFactories);
    setCookie("bombFactoryCost", bombFactoryCost);
    setCookie("bombFactoryProfit", bombFactoryProfit);
    setCookie("humanLeatherFactories", humanLeatherFactories);
    setCookie("humanLeatherFactoryCost", humanLeatherFactoryCost);
    setCookie("humanLeatherFactoryProfit", humanLeatherFactoryProfit);
    setCookie("humanLeatherFactoryIncrease", humanLeatherFactoryIncrease);
    setCookie("marihuanaFactories", marihuanaFactories);
    setCookie("marihuanaFactoryCost", marihuanaFactoryCost);
    setCookie("marihuanaFactoryProfit", marihuanaFactoryProfit);
    setCookie("marihuanaFactoryIncrease", marihuanaFactoryIncrease);
    setCookie("cocainFactories", cocainFactories);
    setCookie("cocainFactoryCost", cocainFactoryCost);
    setCookie("cocainFactoryProfit", cocainFactoryProfit);
    setCookie("cocainFactoryIncrease", cocainFactoryIncrease);
    setCookie("autoSave", autoSave);
    
}




//this runs every milisecond and displays all the variables that should be shown
function refreshDisplay() {
  document.getElementById("balanceDisplay").innerHTML = balance;

  document.getElementById("bitCoinUpgradeNumber").innerHTML = bitCoinUpgradeNumber;

  document.getElementById("bitCoinUpgradeCost").innerHTML = bitCoinUpgradeCost;

  document.getElementById("gunFactories").innerHTML = gunFactories;

  document.getElementById("gunFactoryCost").innerHTML = gunFactoryCost;

  document.getElementById("titlebalanceDisplay").innerHTML = balance;

  document.getElementById("bombFactories").innerHTML = bombFactories;

  document.getElementById("bombFactoryCost").innerHTML = bombFactoryCost;
  
  document.getElementById("bombFactoryProfit").innerHTML = bombFactoryProfit;

  document.getElementById("gunFactoryProfit").innerHTML = gunFactoryProfit;

  document.getElementById("bitCoinProfit").innerHTML = bitCoinUpgradeNumber;

  document.getElementById("humanLeatherFactories").innerHTML = humanLeatherFactories;

  document.getElementById("humanLeatherFactoryCost").innerHTML = humanLeatherFactoryCost;

  document.getElementById("humanLeatherFactoryProfit").innerHTML = humanLeatherFactoryProfit;

  document.getElementById("marihuanaFactories").innerHTML = marihuanaFactories;

  document.getElementById("marihuanaFactoryCost").innerHTML = marihuanaFactoryCost;

  document.getElementById("marihuanaFactoryProfit").innerHTML = marihuanaFactoryProfit;

  document.getElementById("cocainFactories").innerHTML = cocainFactories;

  document.getElementById("cocainFactoryCost").innerHTML = cocainFactoryCost;

  document.getElementById("cocainFactoryProfit").innerHTML = cocainFactoryProfit;
  
  document.getElementById("perSecondDisplay").innerHTML = totalBitCoinPerSecond

  setTimeout(refreshDisplay, 10);
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

