/**
 * SuiteScript selectFieldOptions module
 *
 * @private
 * @module N/selectFieldOptions
 * @NApiVersion 2.0
 *
 */
define([], function(){        
    /**
     * @namespace selectFieldOptions
     */    
    var selectFieldOptions = {};    
        
    /**
     * Returns filter options, segmentation options and value options relevant to a field
     * with respect to the state of the supplied record.
     *
     * @governance 0 units
     * @param {Object} options
     * @param {Object} options.record
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {string} [options.group=-ALLGROUP-]
     * @param {string} [options.searchText=]
     * @param {number|string} [options.segment=1]
     * @param {string} [options.optionText] - retruns a segment containing the option text provided (options.segment parameter
     *     is ignored)
     *
     * @returns {ResultTypedef}
     *
     * @throws {SuiteScriptError} MISSING_REQD_ARGUMENT if options is missing
     * @throws {SuiteScriptError} MISSING_REQD_ARGUMENT if options.record is missing
     * @throws {SuiteScriptError} MISSING_REQD_ARGUMENT if options.fieldId is missing
     * @throws {SuiteScriptError} INVALID_KEY_OR_REF if options.record does not have a field with an id macthing
     *     options.fieldId
     * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE if options.group is not a string
     * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE if options.searchText is not a string
     * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE if options.segment is not an integer
     *
     * @since 2015.2
     */    
    selectFieldOptions['get'] = function(options) {};    
        
    /**
     * responsible for taking an options object and making a server request to retieve select field options data
     *
     * @param {Object} options
     * @param {Object} options.record
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {string} [options.group=-ALLGROUP-]
     * @param {string} [options.searchText=]
     * @param {number|string} [options.segment=1]
     * @param {string} [options.optionText] - retruns a segment containing the option text provided (options.segment parameter is ignored)
     *
     * @returns {ResultTypedef}
     */    
    function fetchOptions() {    
    }    
        
    /**
     * @typedef {Object} ResultTypedef
     * @property {Array<{value: string, label:string}>} filters
     * @property {Array<{value: string, label:string, selected:boolean}>} segments
     * @property {Array<{key: string, value:string, label:string, description: Array<string>}>} options
     */    
    function ResultTypedefTypedef() {    
    }    
    
    N.selectFieldOptions = selectFieldOptions;
    
    /**
     * @exports N/selectFieldOptions
     */
    return selectFieldOptions;
});