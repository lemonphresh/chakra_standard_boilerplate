const router = require( 'express' ).Router();

// Route Files
const health = require( './health' );
const api = require( './api' );

router.use( ['/health', '/healthz'], health );
router.use( '/api', api );

module.exports = router;