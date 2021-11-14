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
      bombFactoryCost += bombFactoryCost/10;
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

  function upgradeNukeFactory () {
    if (balance >= nukeFactoryCost) {
      balance = balance - nukeFactoryCost;
      nukeFactories += 1;
      nukeFactoryCost += nukeFactoryCost/10;
      nukeFactoryProfit += nukeFactoryIncrease;
      nukeFactoryCost = parseInt(nukeFactoryCost);
    }
  }