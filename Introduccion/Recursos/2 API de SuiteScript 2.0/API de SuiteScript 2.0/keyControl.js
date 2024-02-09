/**
 * SuiteScript module
 *
 * @module N/keyControl
 * @NApiVersion 2.x
 *
 */
define([], function(){        
    /**
     * @namespace keyControl
     */    
    var keyControl = {};    
        
    /**
     * @enum {string}
     * @readonly
     */    
    function keyControlOperator() {
        this.STARTS_WITH = 'startswith';
        this.CONTAINS = 'contains';
        this.ENDS_WITH = 'endswith';
        this.EQUALS = 'equals';
    }
    
    keyControl.prototype.Operator = new keyControlOperator();    
        
    /**
     * @class Key
     * @classdesc Key object mirrors all the properties settable in UI
     * @protected
     * @constructor
     */    
    function Key() {    
        
        /**
         * @name Key#file
         * @type {File}
         * @since 2019.2
         */        
        this.file = undefined;        
        /**
         * @name Key#restrictions
         * @type {Array<number>}
         * @since 2019.2
         */        
        this.restrictions = undefined;        
        /**
         * @name Key#scriptRestrictions
         * @type {Array<string>}
         * @since 2019.2
         */        
        this.scriptRestrictions = undefined;        
        /**
         * @name Key#password
         * @type {String}
         * @since 2019.2
         */        
        this.password = undefined;        
        /**
         * @name Key#scriptId
         * @type {String}
         * @since 2019.2
         */        
        this.scriptId = undefined;        
        /**
         * @name Key#name
         * @type {String}
         * @since 2019.2
         */        
        this.name = undefined;        
        /**
         * @name Key#description
         * @type {String}
         * @since 2019.2
         */        
        this.description = undefined;        
        /**
         * get JSON format of the object
         * @restriction Server SuiteScript only
         * @governance none
         * @return {Object}
         *
         * @since 2019.2
         */        
        this.toJSON = function() {};        
        
        /**
         * Returns the object type name (keyControl.Key)
         * @restriction Server SuiteScript only
         * @governance none
         * @return {string}
         *
         * @since 2019.2
         */        
        this.toString = function() {};        
        
        /**
         * Persist current key object to database
         * @restriction Server SuiteScript only
         * @governance 10 units
         * @return {Object} Object containing scriptId property
         *
         * @since 2019.2
         */        
        this.save = function() {};        
    }    
        
    /**
     * Creates a key object
     * @restriction Server SuiteScript only
     * @governance none
     * @param {Object} options
     * @param {File} options.file File object containing the key
     * @param {string} [options.password] Password for the key file (can be in a form of guid token or secret - "custsecret...")
     * @param {string} [options.scriptId] Desired scriptId under which this key should be later saved
     * @param {string} options.name Name of the key
     * @param {string} [options.description] Description for this key
     * @param {Array<string>} [options.scriptRestrictions] Array of scripts allowed to use the key
     * @param {Array<number>} [options.restrictions] Array of entities which can use the key
     * @return {Key}
     *
     * @since 2019.2
     */    
    function createKey() {    
    }    
        
    /**
     * Deletes a key
     * @restriction Server SuiteScript only
     * @governance 10 units
     * @param {Object} options
     * @param {string} options.scriptId Id of the key to delete
     * @return {Object} Object containing scriptId property of deleted key
     *
     * @since 2019.2
     */    
    function deleteKey() {    
    }    
        
    /**
     * Loads a key
     * @restriction Server SuiteScript only
     * @governance 10 units
     * @param {Object} options
     * @param {string} options.scriptId Id of the key to load
     * @return {Key}
     *
     * @since 2019.2
     */    
    function loadKey() {    
    }    
        
    /**
     * Locks a key, so it is not editable in UI
     * @governance 10 units
     * @param {Object} options
     * @param {string} options.id id of the key to lock
     * @throws {error.SuiteScriptError} KEY_NOT_FOUND when the key with such id does not exist
     * @throws {error.SuiteScriptError} ACCESS_TO_KEY_RESTRICTED when current entity/script has no permission to lock the key
     * @throws {error.SuiteScriptError} KEY_ALREADY_LOCKED when the key is already locked
     * @return {void}
     *
     * @since 2021.1
     */    
    function lock() {    
    }    
        
    /**
     * Unlocks a key, so it is editable in UI
     * @governance 10 units
     * @param {Object} options
     * @param {string} options.id id of the key to unlock
     * @throws {error.SuiteScriptError} KEY_NOT_FOUND when the key with such id does not exist
     * @throws {error.SuiteScriptError} ACCESS_TO_KEY_RESTRICTED when current entity/script has no permission to unlock the key
     * @throws {error.SuiteScriptError} KEY_NOT_LOCKED when the key is not locked
     * @return {void}
     *
     * @since 2021.1
     */    
    function unlock() {    
    }    
        
    /**
     * Returns a list of keys available to the user the script is run under.
     * @restriction Server SuiteScript only
     * @governance 10 units
     * @param {Object} options
     * @param {number} options.restriction (optional) filter
     * @param {string} options.scriptRestriction (optional) filter
     * @param {string|Object} options.name (optional) filter
     * @param {string|Object} options.description (optional) filter
     *
     * @return {Object} metadata about key
     */    
    function findKeys() {    
    }    
    
    N.keyControl = keyControl;
    
    /**
     * @exports N/keyControl
     */
    return keyControl;
});