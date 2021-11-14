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