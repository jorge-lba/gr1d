require( 'dotenv/config' )

module.exports = {
    url: process.env.API_URL_TRAVEL_ACE,
    headers:{
        'X-Api-Key': process.env.API_KEY_TRAVEL_ACE
    }
}