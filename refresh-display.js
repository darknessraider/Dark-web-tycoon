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
  
    document.getElementById("bitCoinProfit").innerHTML = bitcoinProfit;
  
    document.getElementById("humanLeatherFactories").innerHTML = humanLeatherFactories;
  
    document.getElementById("humanLeatherFactoryCost").innerHTML = humanLeatherFactoryCost;
  
    document.getElementById("humanLeatherFactoryProfit").innerHTML = humanLeatherFactoryProfit;
  
    document.getElementById("marijuanaFactories").innerHTML = marijuanaFactories;
  
    document.getElementById("marijuanaFactoryCost").innerHTML = marijuanaFactoryCost;
  
    document.getElementById("marijuanaFactoryProfit").innerHTML = marijuanaFactoryProfit;
  
    document.getElementById("cocaineFactories").innerHTML = cocaineFactories;
  
    document.getElementById("cocaineFactoryCost").innerHTML = cocaineFactoryCost;
  
    document.getElementById("cocaineFactoryProfit").innerHTML = cocaineFactoryProfit;
    
    document.getElementById("nukeFactoryProfit").innerHTML = nukeFactoryProfit;

    document.getElementById("nukeFactoryCost").innerHTML = nukeFactoryCost;

    document.getElementById("nukeFactories").innerHTML = nukeFactories;

    document.getElementById("perSecondDisplay").innerHTML = totalBitCoinPerSecond
  
    setTimeout(refreshDisplay, 10);
  }