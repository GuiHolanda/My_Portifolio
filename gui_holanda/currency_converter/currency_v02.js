function testInput (input, list = []) {
    switch(list) {
        case currencyList:
            if (list.includes(input) !== true){
                return 'Unknown currency';
            } else { return 'Valid input'}
        break;
        case options:
            if (list.includes(input) !== true) {
                return 'Unknown input';
            } else if (input === 1) {
                return 'Valid input'
            } else {
                return 'Have a nice day!'
            };
        break;
    }
}

console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`)

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

const options = [1, 2];

do {
    console.log(`What do you want to do?
1-Convert currencies 2-Exit program`)
    var option = Number('2');
    if (testInput(option, options) == 'Valid input') {
        var fromCurrency = ('USD').toUpperCase();
        if (testInput (fromCurrency, currencyList) == 'Valid input') {
            var toCurrency = ('JPY').toUpperCase();
            if (testInput (toCurrency, currencyList)) {
                var amount = Number('2');
                if (amount >= 1) {
                    console.log(`Result: ${amount} ${fromCurrency} equals ${(amount * currencies[toCurrency] / currencies[fromCurrency]).toFixed(4)} ${toCurrency}`);
                } else if (isNaN(amount)) {
                    console.log('The amount has to be a number');
                } else {
                    console.log('The amount can not be less than 1');
                }
            } else {
                console.log(testInput (toCurrency, currencyList));
            }
        } else {
            console.log(testInput (fromCurrency, currencyList));
        }  
    } else if (testInput(option, options) === 2) { 
        console.log(testInput(option, options));
    } else {
        console.log(testInput(option, options));
    }
} while (option !== 2);