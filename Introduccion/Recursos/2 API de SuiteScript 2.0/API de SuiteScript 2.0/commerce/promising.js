/**
 * Webstore sales order.
 *
 * @module N/commerce/promising
 * @public
 * @NApiVersion 2.x
 *
 */
define([], function(){        
    /**
     * @namespace promising
     */    
    var promising = {};    
            
    /**
     * Calculates the promise date for each of the lines passed as parameters.
     *
     * @param {Object} options containing the lines to be promised
     * @return {Object} result containing the promise dates for each input line
     * @throws {SuiteScriptError} MISSING_REQD_ARGUMENT if any line does not have the required parameters: itemId, subsidiaryId, shipCountry, zipCode, sequenceNumber, lineQuantity
     * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE if options is not object or an array or if any of the required parameters in the line is not the correct type
     * @since 2020.2
     */    
    function getAvailableDate() {    
    }    
    
    var commerce = {};
N.commerce = commerce;
    commerce.promising = promising;
    
    /**
     * @exports N/commerce/promising
     */
    return promising;
});