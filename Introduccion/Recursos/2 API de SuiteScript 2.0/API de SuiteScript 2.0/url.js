/**
 * SuiteScript module
 *
 * @module N/url
 * @NApiVersion 2.x
 *
 */
define([], function(){        
    /**
     * @namespace url
     */    
    var url = {};    
        
    /**
     * @restriction Server SuiteScript only
     * @governance none
     * @param {Object} options
     * @param {string} options.recordType
     * @param {string} [options.recordId]
     * @param {boolean} [options.isEditMode]
     * @param {Object} [options.params] url parameters
     * @return {String} url
     *
     * @since 2015.1
     */    
    url.resolveRecord = function(options) {};    
    
    /**
     * @restriction Server SuiteScript only
     * @governance none
     * @param {Object} options
     * @param {string} options.id
     * @param {Object} [options.params] url parameters
     * @return {String} url
     *
     * @since 2015.1
     */    
    url.resolveTaskLink = function(options) {};    
    
    /**
     * @restriction Server SuiteScript only
     * @governance none
     * @param {Object} options
     * @param {string} options.scriptId
     * @param {string} options.deploymentId
     * @param {boolean} [options.returnExternalUrl]
     * @param {Object} [options.params] url parameters
     * @return {String} url
     *
     * @since 2015.1
     */    
    url.resolveScript = function(options) {};    
    
    /**
     * @restriction Server SuiteScript only
     * @governance none
     * @param {Object} options
     * @param {string} options.hostType
     * @param {string} [options.accountId]
     * @return {String} domain
     *
     * @since 2017.1
     */    
    url.resolveDomain = function(options) {};    
    
    /**
     * @restriction Server SuiteScript only
     * @governance none
     * @param {Object} options
     * @param {string} options.domain
     * @param {Object} options.params query string data parameters as an object
     * @return {String} url
     *
     * @since 2015.1
     */    
    url.format = function(options) {};    
    
    /**
     * @enum {string}
     * @readonly
     */    
    function urlHostType() {
        this.APPLICATION = 'APPLICATION';
        this.CUSTOMER_CENTER = 'CUSTOMERCENTER';
        this.RESTLET = 'RESTLETS';
        this.SUITETALK = 'SUITETALK';
        this.FORM = 'FORMS';
    }
    
    url.prototype.HostType = new urlHostType();    
    
    N.url = url;
    
    /**
     * @exports N/url
     */
    return url;
});