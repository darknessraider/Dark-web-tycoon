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