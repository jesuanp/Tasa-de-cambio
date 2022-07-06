const axios = require('axios');

exports.abbreviationCoins = async (req, res) => {

    try{

        const response = await axios(`https://openexchangerates.org/api/latest.json?app_id=${process.env.APP_ID}`);

        const abbreviation = Object.keys(response.data.rates)

        res.json(abbreviation);
    }
    catch(err){
        console.log(err);
        res.status(404).json({message: err.message});
    }
}