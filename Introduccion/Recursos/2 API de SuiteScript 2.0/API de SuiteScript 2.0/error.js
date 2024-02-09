/**
 * SuiteScript error module
 *
 * @module N/error
 * @suiteScriptVersion 2.x
 *
 */
define([], function(){        
    /**
     * @namespace error
     */    
    var error = {};    
        
    /**
     * Create a new custom SuiteScript Error object
     * @governance none
     * @param {Object} options
     * @param {string} options.name A user-defined error code. Sets the value for the SuiteSriptError.name property.
     * @param {string} options.message The error message displayed in the Execution Log Details column. The default
     *     value is null. Sets the value for the SuiteScriptError.message property.
     * @param {boolean} [options.notifyOff=false] Sets whether email notification is suppressed. If set to false, the system
     *     emails the users identified on the applicable script record's Unhandled Errors subtab (when the error is
     *     thrown). If set to true, users will not be notified. The default value is false.
     * @return {SuiteScriptError}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT when some mandatory argument is missing
     * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when some argument has incorrect type
     *
     * @since 2015.2
     */    
    error.create = function(options) {};    
    
    /**
     * @enum {string}
     * @readonly
     */    
    error.Type = function() {};    
        
    /**
     *
     * @protected
     * @class SuiteScriptError
     * @classdesc Base class of SuiteScript errors
     * @constructor
     *
     * @since 2015.2
     */    
    function SuiteScriptError() {    
        
        /**
         * @name SuiteScriptError#type
         * @type {string}
         * @readonly
         *
         * @since 2015.2
         */        
        this.type = undefined;        
        /**
         * Error ID that is automatically generated when a new error is created
         * @name SuiteScriptError#id
         * @type {string}
         * @readonly
         *
         * @since 2015.2
         */        
        this.id = undefined;        
        /**
         * User-defined error code
         * @name SuiteScriptError#name
         * @type {string}
         * @readonly
         *
         * @since 2015.2
         */        
        this.name = undefined;        
        /**
         * Error message text displayed in the Details column of the Execution Log.
         * @name SuiteScriptError#message
         * @type {string}
         * @readonly
         *
         * @since 2015.2
         */        
        this.message = undefined;        
        /**
         * List of method calls that the script is executing when the error is thrown. The most recently executed method is
         * listed at the top or the list.
         * @name SuiteScriptError#stack
         * @type {Array<string>}
         * @readonly
         *
         * @since 2015.2
         */        
        this.stack = undefined;        
        /**
         * Cause of the SuiteScript error. It either returns the error itself, or another error, which caused this new
         * error to happen.
         * @name SuiteScriptError#cause
         * @type {SuiteScriptError}
         * @readonly
         *
         * @since 2016.1
         */        
        this.cause = undefined;        
        /**
         * Error email supression indicator
         * @name SuiteScriptError#notifyOff
         * @type {boolean}
         * @readonly
         *
         * @since 2016.2
         */        
        this.notifyOff = undefined;        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2015.2
         */        
        this.toJSON = function() {};        
        
        /**
         * Returns stringified representation of this SuiteScriptError
         * @governance none
         * @return {string}
         *
         * @since 2015.2
         */        
        this.toString = function() {};        
    }    
        
    /**
     *
     * @protected
     * @class UserEventError
     * @classdesc SuiteScript error class for user events
     * @constructor
     *
     * @since 2015.2
     */    
    function UserEventError() {    
        
        /**
         * Internal ID of the submitted record that triggered the script. This property only holds a value when the error
         * is thrown by an afterSubmit user event.
         * @name UserEventError#recordId
         * @type {string}
         * @readonly
         *
         * @since 2015.2
         */        
        this.recordId = undefined;        
        /**
         * @name UserEventError#eventType
         * @type {string}
         * @readonly
         *
         * @since 2015.2
         */        
        this.eventType = undefined;        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2015.2
         */        
        this.toJSON = function() {};        
        
        /**
         * Returns stringified representation of this error
         * @governance none
         * @return {string}
         *
         * @since 2015.2
         */        
        this.toString = function() {};        
    }    
    
    N.error = error;
    
    /**
     * @exports N/error
     */
    return error;
});