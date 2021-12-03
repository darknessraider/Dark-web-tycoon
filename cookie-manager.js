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
  cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  if (noParse){
    return res
  }
  return parseFloat(res)
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
marijuanaFactories = getCookie ("marijuanaFactories");
marijuanaFactoryCost = getCookie ("marijuanaFactoryCost");
marijuanaFactoryProfit = getCookie ("marijuanaFactoryProfit");
marijuanaFactoryIncrease = getCookie ("marijuanaFactoryIncrease");
cocaineFactories = getCookie ("cocainFactories");
cocaineFactoryCost = getCookie ("cocaineFactoryCost");
cocaineFactoryProfit = getCookie ("cocaineFactoryProfit");
cocaineFactoryIncrease = getCookie ("cocaineFactoryIncrease");
nukeFactories = getCookie ("nukeFactories")
nukeFactoryCost = getCookie ("nukeFactoryCost")
nukeFactoryIncrease = getCookie ("nukeFactoryIncrease")
nukeFactoryProfit = getCookie ("nukeFactoryProfit")
autoSave = getCookie("autoSave", true);
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
setCookie("marijuanaFactories", marijuanaFactories);
setCookie("marijuanaFactoryCost", marijuanaFactoryCost);
setCookie("marijuanaFactoryProfit", marijuanaFactoryProfit);
setCookie("marijuanaFactoryIncrease", marijuanaFactoryIncrease);
setCookie("cocainFactories", cocaineFactories);
setCookie("cocaineFactoryCost", cocaineFactoryCost);
setCookie("cocaineFactoryProfit", cocaineFactoryProfit);
setCookie("cocaineFactoryIncrease", cocaineFactoryIncrease);
setCookie("nukeFactories", nukeFactories);
setCookie("nukeFactoryCost", nukeFactoryCost)
setCookie("nukeFactoryIncrease", nukeFactoryIncrease)
setCookie("nukeFactoryProfit", nukeFactoryProfit)
setCookie("autoSave", autoSave);

}