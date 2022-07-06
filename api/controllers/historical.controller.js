const axios = require('axios');

exports.historical = async (req, res) => {
    
    try{

        // El historical debe ser año-mes-día. ej: 2010-08-02

        const {coin, amount, date} = req.params;

        const {currencyToDollar} = req.query;

        const response = await axios(`https://openexchangerates.org/api/historical/${date}.json?app_id=${process.env.APP_ID}`);

        let change = response.data.rates[coin];
    
        if(currencyToDollar === 'true'){
            change = amount / change;
        }
        else {

            if(amount > 1){
                change = change * amount;
            }
        }
        
        change += '';
    
        let indexDecimal = change.indexOf('.')
    
        if(change.split('').includes('.')){
            change = change.slice(0, indexDecimal + 3);
        }

        res.json(change);
    }
    catch(err){
        console.log(err);
        res.status(404).json({message: err.message});
    }
}