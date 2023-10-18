const router = require('express').Router();

router.get( '/', ( req, res ) => {
    console.log( 'Health Request' );
    res.sendStatus( 200 );
})

module.exports = router;