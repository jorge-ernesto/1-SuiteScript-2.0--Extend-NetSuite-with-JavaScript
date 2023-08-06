/**
 * SuiteScript crypto random module (Client Side)
 * The N/crypto/random module provides cryptographically-secure pseudorandom generator methods.
 *
 * @module N/crypto/random
 * @NApiVersion 2.x
 * @since 2023.2
 * @ownership {@link ProductTeam.SUITE_SCRIPT_API}
 *
 */
define([], function(){        
    /**
     * @namespace random
     */    
    var random = {};    
        
    var crypto = {};
N.crypto = crypto;
    crypto.random = random;
    
    /**
     * @exports N/crypto/random
     */
    return random;
});