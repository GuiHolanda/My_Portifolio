console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP
What do you want to do?
1-Convert currencies 2-Exit program`)

const currencies = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
};

const currencyList = [];

for (let currency in currencies) {
    currencyList.push(currency);
};

let fromCurrency = ('JPY').toUpperCase();

if (currencyList.includes(fromCurrency)) {
    
    let toCurrency = ('JPY').toUpperCase();
    
    if (currencyList.includes(toCurrency)){
        let amount = 3;

        if (amount >= 1) {
            console.log(`Result: ${amount} ${fromCurrency} equals ${(amount * currencies[toCurrency] / currencies[fromCurrency]).toFixed(4)} ${toCurrency}`)
        } else if (isNaN(amount)) {
            console.log("The amount has to be a number");
        } else {
            console.log("The amount can not be less than 1");
        } 
    } else {
     console.log("Unknown currency"); 
    }    
 } else {
     console.log("Unknown currency");
};