/**
 * SuiteScript module
 *
 * @module N/cache
 * @NApiVersion 2.x
 *
 */
define([], function(){        
    /**
     * @namespace cache
     */    
    var cache = {};    
        
    /**
     * Get a named, scoped cache.
     * @restriction Server SuiteScript only
     * @governance none
     *
     * @param {Object} options
     * @param {string} options.name The cache name. If a cache does not exist with the given name it will be created and returned. The maximum size for the cache name is 1K.
     * @param {string} [options.scope] The cache scope (optional). The default cache scope is SCRIPT.
     *
     * @return {Cache}
     *
     * @since 2016.2
     */    
    cache.getCache = function(options) {};    
    
    /**
     * Defines all possible cache scopes.
     *
     * PRIVATE (default) - Cache entries are only accessible to the current script.
     * PROTECTED - Cache entries are only accessible to scripts in the same bundle or not in bundle.
     * PUBLIC - Cache entries are accessible to any script running in your account.
     *
     * @enum {string}
     * @readonly
     */    
    function cacheScope() {
        this.PRIVATE = 'PRIVATE';
        this.PROTECTED = 'PROTECTED';
        this.PUBLIC = 'PUBLIC';
    }
    
    cache.prototype.Scope = new cacheScope();    
        
    /**
     * Get a named, scoped cache.
     * @restriction Server SuiteScript only
     * @governance none
     *
     * @param {Object} options
     * @param {string} options.name The cache name. If a cache does not exist with the given name it will be created and returned. The maximum size for the cache name is 1K.
     * @param {string} [options.scope] The cache scope (optional). The default cache scope is SCRIPT.
     *
     * @return {Cache}
     *
     * @since 2016.2
     */    
    function getCache() {    
    }    
        
    /**
     * @class Cache
     * @classdesc Named Cache for caching the result of expensive (in terms of time or governance) computations.
     * @protected
     * @constructor
     */    
    function Cache() {    
        
        /**
         * The name of the cache.
         * @name Cache#name
         * @type {string}
         * @readonly
         * @throws READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2016.2
         */        
        this.name = undefined;        
        /**
         * The scope of the cache.
         * @name Cache#scope
         * @type {string}
         * @readonly
         * @throws READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2016.2
         */        
        this.scope = undefined;        
        /**
         * get JSON format of the object
         * @restriction Server SuiteScript only
         * @governance none
         * @return {Object}
         *
         * @since 2016.2
         */        
        this.toJSON = function() {};        
        
        /**
         * Returns stringified version of this object
         * @restriction Server SuiteScript only
         * @governance none
         * @return {string}
         *
         * @since 2016.2
         */        
        this.toString = function() {};        
        
        /**
         * Get a value from the cache. If the key is not present, the loader will be called to generate the value which will
         * then be cached and returned. If the value returned by the loader is not a string, JSON.stringify() will be called
         * on the value before it is placed in the cache.
         * The maximum size for the cache key is 4kb and 500kb for the value returned by the loader.
         * @restriction Server SuiteScript only
         * @governance 1 unit for cache hit and 2 units for cache miss
         *
         * @param {Object} options
         * @param {string} options.key The cache key used to identify the value.
         * @param {Function} [options.loader] A function which will return the value if it is not present in the cache.
         * The callback signature for the loader is loader({ key : key }), which allows the loader to be pre-defined in a key-agnostic way (used to get different values for the same cache type, for example).
         * @param {Object} [options.ttl] The Time To Live (aka TTL) duration in seconds. The cache entry will be
         * automatically purged when the TTL expires, if it is still in the cache.
         *
         * @return {string}
         *
         * @since 2016.2
         */        
        this['get'] = function(options) {};        
        
        /**
         * Remove a value from the cache. If values in the cache were retrieved from a record, the associated cache keys
         * should be invalidated by a beforeSubmit UserEvent Script when the record is updated in order to prevent stale
         * values.
         * @restriction Server SuiteScript only
         * @governance 1 unit
         *
         * @param {Object} options
         * @param {string} options.key The cache key used to identify the value.
         *
         * @since 2016.2
         */        
        this.remove = function(options) {};        
        
        /**
         * Put a value into the cache. Note that "get" can be called with a loader as simpler alternative. If the value
         * is not a string, JSON.stringify() will be called on the value before it is placed in the cache.
         * @restriction Server SuiteScript only
         * @governance 1 unit
         *
         * @param {Object} options
         * @param {string} options.key The cache key used to identify the value.
         * @param {Object} options.value The value to cache.
         * @param {Object} [options.ttl] The Time To Live (aka TTL) duration in seconds. The cache entry will be automatically purged when the TTL expires, if it is still in the cache.
         * The default TTL is no limit; the minimal value is 5 minutes.
         *
         * @since 2016.2
         */        
        this.put = function(options) {};        
    }    
    
    N.cache = cache;
    
    /**
     * @exports N/cache
     */
    return cache;
});