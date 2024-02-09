/**
 * SuiteScript mapReduceSummary module
 *
 * @module N/mapReduceSummary
 * @NApiVersion 2.x
 *
 */
define([], function(){        
    /**
     * @namespace mapReduceSummary
     */    
    var mapReduceSummary = {};    
            
    /**
     * Return a new instance of mapreduce.Summary
     * @class
     * @classdesc Used for accessing Map/Reduce job output and metadata.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function Summary() {    
        
        /**
         * @name Summary#dateCreated
         * @type {Date} dateCreated - Time M/R job began running.
         * @readonly
         *
         * @since 2015.2
         */        
        this.dateCreated = undefined;        
        /**
         * @name Summary#isRestarted
         * @type {boolean} isRestarted - Indicates whether the summarize(summarizeContext) function was invoked again
         * @readonly
         *
         * @since 2015.2
         */        
        this.isRestarted = undefined;        
        /**
         * @name Summary#seconds
         * @type {number} seconds - Total seconds elapsed while running.
         * @readonly
         *
         * @since 2015.2
         */        
        this.seconds = undefined;        
        /**
         * @name Summary#usage
         * @type {number} usage - Total usage points consumed while running.
         * @readonly
         *
         * @since 2015.2
         */        
        this.usage = undefined;        
        /**
         * @name Summary#concurrency
         * @type {number} concurrency - Maximum number of queues utilized at the same time while running.
         * @readonly
         *
         * @since 2015.2
         */        
        this.concurrency = undefined;        
        /**
         * @name Summary#yields
         * @type {number} yields - Total number of times yielding the queue while running.
         * @readonly
         *
         * @since 2015.2
         */        
        this.yields = undefined;        
        /**
         * @name Summary#output#iterator()
         * @type {Iterator} iterator - Iterator which provides keys and values written as output during the REDUCE phase.
         *      <pre> summary.output.iterator().each(function(key, value){...}); </pre>
         * @readonly
         *
         * @since 2015.2
         */        
        this.output = undefined;        
        /**
         * @name Summary#inputSummary
         * @type {InputSummary} inputSummary - Stats about the INPUT stage.
         *
         * @since 2015.2
         */        
        this.inputSummary = undefined;        
        /**
         * @name Summary#mapSummary
         * @type {mapSummary} mapSummary - Stats about the MAP stage.
         *
         * @since 2015.2
         */        
        this.mapSummary = undefined;        
        /**
         * @name Summary#reduceSummary
         * @type {reduceSummary} reduceSummary - Stats about the REDUCE stage.
         *
         * @since 2015.2
         */        
        this.reduceSummary = undefined;        
        /**
         * Returns the object type name (mapreduce.Summary)
         * @restriction Server SuiteScript only
         * @governance none
         * @return {string}
         *
         * @since 2015.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @restriction Server SuiteScript only
         * @governance none
         * @return {Object}
         *
         * @since 2015.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * Return a new instance of mapreduce.InputSummary
     * @class
     * @classdesc Used for accessing Map/Reduce INPUT stage metadata.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function InputSummary() {    
        
        /**
         * @name InputSummary#dateCreated
         * @type {Date} dateCreated - Time M/R INPUT stage began running.
         * @readonly
         *
         * @since 2015.2
         */        
        this.dateCreated = undefined;        
        /**
         * @name InputSummary#seconds
         * @type {number} seconds - Total seconds elapsed while during the INPUT stage.
         * @readonly
         *
         * @since 2015.2
         */        
        this.seconds = undefined;        
        /**
         * @name InputSummary#usage
         * @type {number} usage - Total usage points consumed during the INPUT stage.
         * @readonly
         *
         * @since 2015.2
         */        
        this.usage = undefined;        
        /**
         * @name InputSummary#error
         * @type {SuiteScriptError} error - Serialized error is thrown out of getInputData() - if applicable
         *      <pre> var inputError = summary.input.error; </pre>
         * @readonly
         *
         * @since 2015.2
         */        
        this.error = undefined;        
        /**
         * Returns the object type name (mapreduce.InputSummary)
         * @restriction Server SuiteScript only
         * @governance none
         * @return {string}
         *
         * @since 2015.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @restriction Server SuiteScript only
         * @governance none
         * @return {Object}
         *
         * @since 2015.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * Return a new instance of mapreduce.MapSummary
     * @class
     * @classdesc Used for accessing Map/Reduce MAP stage metadata.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function MapSummary() {    
        
        /**
         * @name MapSummary#dateCreated
         * @type {Date} dateCreated - Time MAP stage began running.
         * @readonly
         *
         * @since 2015.2
         */        
        this.dateCreated = undefined;        
        /**
         * @name MapSummary#seconds
         * @type {number} seconds - Total seconds elapsed while running MAP stage.
         * @readonly
         *
         * @since 2015.2
         */        
        this.seconds = undefined;        
        /**
         * @name MapSummary#usage
         * @type {number} usage - Total usage points consumed while running MAP stage.
         * @readonly
         *
         * @since 2015.2
         */        
        this.usage = undefined;        
        /**
         * @name MapSummary#concurrency
         * @type {number} concurrency - Maximum number of queues utilized at the same time while running MAP stage.
         * @readonly
         *
         * @since 2015.2
         */        
        this.concurrency = undefined;        
        /**
         * @name MapSummary#yields
         * @type {number} yields - Total number of times yielding the queue while running MAP stage.
         * @readonly
         *
         * @since 2015.2
         */        
        this.yields = undefined;        
        /**
         * @name MapSummary#keys#iterator
         * @type {Iterator} iterator - Iterator which provides input keys processed during the MAP phase.
         *      <pre> summary.map.keys.iterator.each(function(key){...}); </pre>
         * @readonly
         *
         * @since 2015.2
         */        
        this.keys = undefined;        
        /**
         * @name MapSummary#errors#iterator
         * @type {Iterator} iterator - Iterator which provides errors thrown during the MAP phase.
         *      <pre> summary.map.errors.each(function(key, value){...}); </pre>
         * @readonly
         *
         * @since 2015.2
         */        
        this.errors = undefined;        
        /**
         * Returns the object type name (mapreduce.MapSummary)
         * @restriction Server SuiteScript only
         * @governance none
         * @return {string}
         *
         * @since 2015.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @restriction Server SuiteScript only
         * @governance none
         * @return {Object}
         *
         * @since 2015.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * Return a new instance of mapreduce.ReduceSummary
     * @class
     * @classdesc Used for accessing Map/Reduce REDUCE stage metadata.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function ReduceSummary() {    
        
        /**
         * @name ReduceSummary#dateCreated
         * @type {Date} dateCreated - Time REDUCE stage began running.
         * @readonly
         *
         * @since 2015.2
         */        
        this.dateCreated = undefined;        
        /**
         * @name ReduceSummary#seconds
         * @type {number} seconds - Total seconds elapsed while running REDUCE stage.
         * @readonly
         *
         * @since 2015.2
         */        
        this.seconds = undefined;        
        /**
         * @name ReduceSummary#usage
         * @type {number} usage - Total usage points consumed while running REDUCE stage.
         * @readonly
         *
         * @since 2015.2
         */        
        this.usage = undefined;        
        /**
         * @name ReduceSummary#concurrency
         * @type {number} concurrency - Maximum number of queues utilized at the same time while running REDUCE stage.
         * @readonly
         *
         * @since 2015.2
         */        
        this.concurrency = undefined;        
        /**
         * @name ReduceSummary#yields
         * @type {number} yields - Total number of times yielding the queue while running REDUCE stage.
         * @readonly
         *
         * @since 2015.2
         */        
        this.yields = undefined;        
        /**
         * @name ReduceSummary#keys#iterator
         * @type {Iterator} iterator - Iterator which provides input keys processed during the REDUCE phase.
         *      <pre> summary.reduce.iterator.keys.each(function(key){...}); </pre>
         * @readonly
         *
         * @since 2015.2
         */        
        this.keys = undefined;        
        /**
         * @name ReduceSummary#errors#iterator
         * @type {Iterator} iterator - Iterator which provides errors thrown during the REDUCE phase.
         *      <pre> summary.reduce.errors.iterator().each(function(key, value){...}); </pre>
         * @readonly
         *
         * @since 2015.2
         */        
        this.errors = undefined;        
        /**
         * Returns the object type name (mapreduce.ReduceSummary)
         * @restriction Server SuiteScript only
         * @governance none
         * @return {string}
         *
         * @since 2015.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @restriction Server SuiteScript only
         * @governance none
         * @return {Object}
         *
         * @since 2015.2
         */        
        this.toJSON = function() {};        
    }    
    
    N.mapReduceSummary = mapReduceSummary;
    
    /**
     * @exports N/mapReduceSummary
     */
    return mapReduceSummary;
});