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