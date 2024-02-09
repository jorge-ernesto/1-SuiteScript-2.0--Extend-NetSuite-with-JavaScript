/**
 * SuiteScript Map and Reduce Context module
 *
 * @module N/mapReduceContext
 * @NApiVersion 2.x
 *
 */
define([], function(){        
    /**
     * @namespace mapReduceContext
     */    
    var mapReduceContext = {};    
            
    /**
     * Return a new instance of mapreduce.InputContext
     * @class
     * @classdesc Contains ObjectRefType enum.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function InputContext() {    
        
        /**
         * @name InputContext#isRestarted
         * @type {boolean} isRestarted - Indicates whether the getInputData(inputContext) function was invoked again
         * @readonly
         *
         * @since 2015.2
         */        
        this.isRestarted = undefined;        
        /**
         * @name InputContext#ObjectRefType
         * @type {string} value - Enum describing valid "type" attribute values for ObjectRef.
         * @readonly
         *
         * @since 2015.2
         */        
        this.ObjectRefType = undefined;        
        /**
         * Returns the object type name (mapreduce.InputContext)
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
     * Return a new instance of mapreduce.MapContext
     * @class
     * @classdesc Contains the key/value pairs to process through the map stage.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function MapContext() {    
        
        /**
         * @name MapContext#isRestarted
         * @type {boolean} isRestarted - Indicates whether the map(mapContext) function was invoked again
         * @readonly
         *
         * @since 2015.2
         */        
        this.isRestarted = undefined;        
        /**
         * @name MapContext#executionNo
         * @type {number} executionNo - execution no for current map record, i.e. for which time is the map function for the current record executed
         * @readonly
         *
         * @since 2018.1
         */        
        this.executionNo = undefined;        
        /**
         * @name MapContext#key
         * @type {string} key - The key to be processed through the map stage
         * @readonly
         *
         * @since 2015.2
         */        
        this.key = undefined;        
        /**
         * @name MapContext#value
         * @type {string} value - The value to be processed through the map stage.
         * @readonly
         *
         * @since 2015.2
         */        
        this.value = undefined;        
        /**
         * @name MapContext#errors#iterator
         * @type {Iterator} iterator - Iterator which provides errors thrown during particular map function execution.
         *      <pre> context.errors.each(function(key, value){...}); </pre>
         * @readonly
         *
         * @since 2015.2
         */        
        this.errors = undefined;        
        /**
         * Writes the key value pairs
         * @restriction Server SuiteScript only
         * @governance none
         *
         * @param {string} key - The key to write
         * @param {Object} value - The value to write
         * @return {void}
         *
         * @since 2015.2
         */        
        this.write = function(options) {};        
        
        /**
         * Returns the object type name (mapreduce.MapContext)
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
     * Return a new instance of mapreduce.ReduceContext
     * @class
     * @classdesc Contains the key/values groups to process through the reduce stage.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function ReduceContext() {    
        
        /**
         * @name ReduceContext#isRestarted
         * @type {boolean} isRestarted - Indicates whether the Rap(reduceContext) function was invoked again
         * @readonly
         *
         * @since 2015.2
         */        
        this.isRestarted = undefined;        
        /**
         * @name ReduceContext#executionNo
         * @type {number} executionNo - execution no for current reduce record list, i.e. for which time is the reduce function for the current reduce record list executed
         * @readonly
         *
         * @since 2018.1
         */        
        this.executionNo = undefined;        
        /**
         * @name ReduceContext#key
         * @type {string} key - When the map/reduce process includes a map stage, the key is derived from the key written
         *     by MapContext.write(key,value).
        When the map stage is skipped, the key depends on the input type:
         * @readonly
         *
         * @since 2015.2
         */        
        this.key = undefined;        
        /**
         * @name MapContext#value
         * @type {string} values - When the map/reduce process includes a map stage, the values are derived from the values
         *     written by MapContext.write(key,value).
        When the map stage is skipped, the values are already grouped by key into a list, and the value depends on the input type:
         * @readonly
         *
         * @since 2015.2
         */        
        this.values = undefined;        
        /**
         * @name ReduceContext#errors#iterator
         * @type {Iterator} iterator - Iterator which provides errors thrown during particular reduce function execution.
         *      <pre> context.errors.iterator().each(function(key, value){...}); </pre>
         * @readonly
         *
         * @since 2015.2
         */        
        this.errors = undefined;        
        /**
         * Writes the key/values groups
         * @restriction Server SuiteScript only
         * @governance none
         *
         * @param {string} key - The key to write
         * @param {Object} value - The value to write
         * @return {void}
         *
         * @since 2015.2
         */        
        this.write = function(options) {};        
        
        /**
         * Returns the object type name (mapreduce.ReduceContext)
         * @restriction Server SuiteScript only
         * @governance none
         * @return {string}
         *
         * @since 2020.2
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
    
    N.mapReduceContext = mapReduceContext;
    
    /**
     * @exports N/mapReduceContext
     */
    return mapReduceContext;
});