/**
 * SuiteScript module
 *
 * @module N/certificateControl
 * @NApiVersion 2.x
 *
 */
define([], function(){        
    /**
     * @namespace certificateControl
     */    
    var certificateControl = {};    
        
    /**
     * @enum {string}
     * @readonly
     */    
    function certificateControlType() {
        this.PFX = 'PFX';
        this.P12 = 'P12';
        this.PEM = 'PEM';
    }
    
    certificateControl.prototype.Type = new certificateControlType();    
    
    /**
     * @enum {string}
     * @readonly
     */    
    function certificateControlOperator() {
        this.STARTS_WITH = 'startswith';
        this.CONTAINS = 'contains';
        this.ENDS_WITH = 'endswith';
        this.EQUALS = 'equals';
    }
    
    certificateControl.prototype.Operator = new certificateControlOperator();    
    
    /**
     * @enum {string}
     * @readonly
     */    
    function certificateControlOperation() {
        this.FIND = 'find';
        this.HEAD = 'head';
        this.POST = 'post';
        this.GET = 'get';
        this.PUT = 'put';
        this.DELETE = 'delete';
        this.VERIFY_XML = 'verifyXmlSignature';
        this.VERIFY_STRING = 'verify';
        this.SIGN_STRING = 'sign';
        this.SIGN_XML = 'signXml';
        this.CONNECT = 'connect';
    }
    
    certificateControl.prototype.Operation = new certificateControlOperation();    
        
    /**
     * @class Certificate
     * @classdesc Certificate object mirrors all the properties settable in UI
     * @protected
     * @constructor
     */    
    function Certificate() {    
        
        /**
         * @name Certificate#file
         * @type {File}
         * @since 2019.2
         */        
        this.file = undefined;        
        /**
         * @name Certificate#subsidiaries
         * @type {Array<number>}
         * @since 2019.2
         */        
        this.subsidiaries = undefined;        
        /**
         * @name Certificate#restrictions
         * @type {Array<number>}
         * @since 2019.2
         */        
        this.restrictions = undefined;        
        /**
         * @name Certificate#scriptRestrictions
         * @type {Array<string>}
         * @since 2021.1
         */        
        this.scriptRestrictions = undefined;        
        /**
         * @name Certificate#notifications
         * @type {Array<number>}
         * @since 2019.2
         */        
        this.notifications = undefined;        
        /**
         * @name Certificate#password
         * @type {string}
         * @since 2019.2
         */        
        this.password = undefined;        
        /**
         * @name Certificate#scriptId
         * @type {string}
         * @since 2019.2
         */        
        this.scriptId = undefined;        
        /**
         * @name Certificate#name
         * @type {string}
         * @since 2019.2
         */        
        this.name = undefined;        
        /**
         * @name Certificate#description
         * @type {string}
         * @since 2019.2
         */        
        this.description = undefined;        
        /**
         * @name Certificate#weekReminder
         * @type {boolean}
         * @since 2019.2
         */        
        this.weekReminder = undefined;        
        /**
         * @name Certificate#monthReminder
         * @type {boolean}
         * @since 2019.2
         */        
        this.monthReminder = undefined;        
        /**
         * @name Certificate#threeMonthsReminder
         * @type {boolean}
         * @since 2019.2
         */        
        this.threeMonthsReminder = undefined;        
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
         * Returns the object type name (certificateControl.Certificate)
         * @restriction Server SuiteScript only
         * @governance none
         * @return {string}
         *
         * @since 2019.2
         */        
        this.toString = function() {};        
        
        /**
         * Persist current certificate object to database
         * @restriction Server SuiteScript only
         * @governance 10 units
         * @return {Object} Object containing scriptId property
         *
         * @since 2019.2
         */        
        this.save = function() {};        
    }    
        
    /**
     * Creates a certificate object
     * @restriction Server SuiteScript only
     * @governance none
     * @param {Object} options
     * @param {File} options.file File object containing the certificate
     * @param {string} [options.password] Password for the certificate file (can be in a form of guid token or secret - "custsecret...")
     * @param {string} [options.scriptId] Desired scriptId under which this certificate should be later saved
     * @param {string} options.name Name of the certificate
     * @param {string} [options.description] Description for this certificate
     * @param {Array<number>} [options.subsidiaries] Subsidiaries for which is this certificate intended
     * @param {Array<number>} [options.notifications] Array of entities to be notified when certificate nears expiration
     * @param {Array<number>} [options.restrictions] Array of entities which can use the certificate
     * @param {Array<string>} [options.scriptRestrictions] Array of scripts allowed to use the certificate
     * @param {boolean} [options.weekReminder] Indicator, whether notification email should be sent one week before certificate expiration
     * @param {boolean} [options.monthReminder] Indicator, whether notification email should be sent one month before certificate expiration
     * @param {boolean} [options.threeMonthsReminder] Indicator, whether notification email should be sent three months before certificate expiration
     * @return {Certificate}
     *
     * @since 2019.2
     */    
    function createCertificate() {    
    }    
        
    /**
     * Deletes a certificate
     * @restriction Server SuiteScript only
     * @governance 10 units
     * @param {Object} options
     * @param {string} options.scriptId Id of the certificate to delete
     * @return {Object} Object containing scriptId property of deleted certificate
     *
     * @since 2019.2
     */    
    function deleteCertificate() {    
    }    
        
    /**
     * Loads a certificate
     * @restriction Server SuiteScript only
     * @governance 10 units
     * @param {Object} options
     * @param {string} options.scriptId Id of the certificate to load
     * @return {Certificate}
     *
     * @since 2019.2
     */    
    function loadCertificate() {    
    }    
        
    /**
     * Returns a list of signing certificates available to the user the script is run under.
     * @restriction Server SuiteScript only
     * @governance 10 units
     * @param {Object} [options]
     * @param {number} [options.subsidiary] subsidiary filter
     * @param {number} [options.restriction] restriction filter
     * @param {string} [options.scriptRestriction] script restriction filter
     * @param {number} [options.notification] notification filter
     * @param {string|Object} [options.name] name filter - if object is supplied, it expects properties 'operator' (from Operator enum), 'ignoreCase' (boolean indicator whether to search ignoring case) and 'value'
     * @param {string|Object} [options.description] description filter - if object is supplied, it expects properties 'operator' (from Operator enum), 'ignoreCase' (boolean indicator whether to search ignoring case) and 'value'
     * @param {string} [options.type] type filter
     *
     * @return {Array<Object>} metadata about certificates
     *
     * @since 2019.2
     */    
    function findCertificates() {    
    }    
        
    /**
     * Locks a certificate, so it is not editable in UI
     * @governance 10 units
     * @param {Object} options
     * @param {string} options.id id of the certificate to lock
     * @throws {error.SuiteScriptError} CERTIFICATE_NOT_FOUND when the certificate with such id does not exist
     * @throws {error.SuiteScriptError} ACCESS_TO_CERTIFICATE_RESTRICTED when current entity/script has no permission to lock the certificate
     * @throws {error.SuiteScriptError} CERTIFICATE_ALREADY_LOCKED when the certificate is already locked
     * @return {void}
     *
     * @since 2021.1
     */    
    function lock() {    
    }    
        
    /**
     * Unlocks a certificate, so it is editable in UI
     * @governance 10 units
     * @param {Object} options
     * @param {string} options.id id of the certificate to unlock
     * @throws {error.SuiteScriptError} CERTIFICATE_NOT_FOUND when the certificate with such id does not exist
     * @throws {error.SuiteScriptError} ACCESS_TO_CERTIFICATE_RESTRICTED when current entity/script has no permission to unlock the certificate
     * @throws {error.SuiteScriptError} CERTIFICATE_NOT_LOCKED when the certificate is not locked
     * @return {void}
     *
     * @since 2021.1
     */    
    function unlock() {    
    }    
        
    /**
     * Returns audit trail (operations performed with certificate, their exact times, responsible entity/script ...)
     * @governance 10 units
     * @param {Object} [options]
     * @param {Date} [options.from] start date
     * @param {Date} [options.to]  end date
     * @param {string} [options.id] scriptId of certificate to restrict the search for
     * @param {string} [options.operation] certificate operation to search for (from Operation enum)
     * @param {number} [options.script] internal id of the script which was using the certificate
     * @param {number} [options.deploy] internal id of the script deployment used to run the script which uses the certificate
     * @param {number} [options.entity] id of the entity which used the certificate
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG when any parameter is of wrong type
     * @throws {error.SuiteScriptError} TOO_MANY_RESULTS when there are more than 1000 results
     * @return {Array<Object>}
     *
     * @since 2019.2
     */    
    function findUsages() {    
    }    
    
    N.certificateControl = certificateControl;
    
    /**
     * @exports N/certificateControl
     */
    return certificateControl;
});