/**
 * SuiteScript datasetLink module
 * Create a DatasetLink object which can be constructed using multiple datasets and expression matrix.
 * Such object can be used in Pivot/Chart
 *
 * @module N/datasetLink
 * @suiteScriptVersion 2.x
 */
define([], function(){        
    /**
     * @namespace datasetLink
     */    
    var datasetLink = {};    
            
    /**
     * @class DatasetLink
     * @classDescription Object representing SuiteAnalytics DatasetLink - multiple datasets linked by expressions matrix
     * @constructor
     * @protected
     *
     * @since 2021.2
     */    
    function DatasetLink() {    
        
        /**
         * id of the dataset link
         * @name DatasetLink#id
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.2
         */        
        this.id = undefined;        
        /**
         * datasets of the link
         * @name DatasetLink#datasets
         * @type {Array<Dataset>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when assigning something else than Array<Dataset>
         * @throws {SuiteScriptError} NO_DATASET_DEFINED when assigning empty array
         *
         * @since 2021.2
         */        
        this.datasets = undefined;        
        /**
         * Mapping expressions
         * @name DatasetLink#expressions
         * @type {Array<Array<Expression>>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when assigning something else than Array<Array<Expresion>>
         *
         * @since 2021.2
         */        
        this.expressions = undefined;        
        /**
         * Returns the object type name (datasetLink.DatasetLink)
         * @restriction Server SuiteScript only
         * @governance none
         * @return {string}
         *
         * @since 2021.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @restriction Server SuiteScript only
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * Creates a dataset link
     * @governance none
     * @param {Object} options
     * @param {Array<Dataset>} options.datasets Datasets for this link
     * @param {Array<Array<Expression>>} options.expressions Mapping expressions
     * @param {string} options.id id of this dataset link
     * @return {DatasetLink}
     * @throws {SuiteScriptError} NO_DATASET_DEFINED when assigning empty array for datasets
     *
     * @since 2021.2
     */    
    function createDatasetLink() {    
    }    
    
    N.datasetLink = datasetLink;
    
    /**
     * @exports N/datasetLink
     */
    return datasetLink;
});