document.getElementById("changeSell").style.backgroundColor = "gray";
document.getElementById("changeBuy").style.backgroundColor = "white";



function changeSell() {
  document.getElementById("changeBuy").style.backgroundColor = "gray";
  document.getElementById("changeSell").style.backgroundColor = "white";
  buyActive = "off"
}


function changeBuy() {
  document.getElementById("changeSell").style.backgroundColor = "gray";
  document.getElementById("changeBuy").style.backgroundColor = "white";
  buyActive = "on"
}


function sell(number, cost, profit, increase) {
  if (!(number == 0) && (buyActive == "off")){
    balance += parseInt(cost-cost/10);
    number -= 1;
    cost -= cost/10
    profit -= increase; 
    cost = parseInt(cost);
    var newNumber = number;
    var newCost = cost;
    var newProfit = profit;
    return [newNumber, newCost, newProfit];
  }
}



//Runs when you click Upgrade bitcoin
function upgradeBitcoin () {
  if ((buyActive == "off") && !(bitCoinUpgradeNumber == 0)){
    bitcoinValues = sell(bitCoinUpgradeNumber, bitCoinUpgradeCost, bitcoinProfit, bitcoinIcrease);
    bitCoinUpgradeNumber = bitcoinValues[0];
    bitCoinUpgradeCost = bitcoinValues[1];
    bitcoinProfit = bitcoinValues[2];
  }
  if (balance >= bitCoinUpgradeCost && buyActive == "on") {
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
  
  
  function upgrademarijuanaFactory () {
    if (balance >= marijuanaFactoryCost) {
      balance = balance - marijuanaFactoryCost;
      marijuanaFactories += 1;
      marijuanaFactoryCost += marijuanaFactoryCost/10;
      marijuanaFactoryProfit += marijuanaFactoryIncrease;
      marijuanaFactoryCost = parseInt(marijuanaFactoryCost);
    }
  }
  
  
  function upgradeCocaineFactory () {
    if (balance >=  cocaineFactoryCost) {
      balance = balance - cocaineFactoryCost;
      cocaineFactories += 1;
      cocaineFactoryCost += cocaineFactoryCost/10;
      cocaineFactoryProfit += cocaineFactoryIncrease;
      cocaineFactoryCost = parseInt(cocaineFactoryCost);
    }
  } 