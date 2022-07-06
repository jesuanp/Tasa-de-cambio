const axios = require("axios");

exports.getChangeController = async (req, res) => {

    const {coin, amount} = req.params;

    const {currencyToDollar} = req.query;

    try{

        const response = await axios(`https://openexchangerates.org/api/latest.json?app_id=${process.env.APP_ID}`);
    
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