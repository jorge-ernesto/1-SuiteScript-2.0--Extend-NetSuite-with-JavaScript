/**
 * Commerce record view
 *
 * @module N/commerce/recordView
 * @NApiVersion 2.x
 *
 */
define([], function(){        
    /**
     * @namespace recordView
     */    
    var recordView = {};    
        
    /**
     * Returns item's field values
     *
     * @param {Object} options
     * @param {array} options.ids Array of item ids for which the fields are returned
     * @param {array} options.fields Array of item fields that are returned
     *
     * @since 2019.1
     */    
    recordView.viewItems = function(options) {};    
    
    /**
     * Returns site's field values
     *
     * @param {Object} options
     * @param {array} options.id  Id of site for which the fields are returned
     * @param {array} options.fields List of website fields that are returned
     *
     * @since 2019.1
     */    
    recordView.viewWebsite = function(options) {};    
    
    var commerce = {};
N.commerce = commerce;
    commerce.recordView = recordView;
    
    /**
     * @exports N/commerce/recordView
     */
    return recordView;
});