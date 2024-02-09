/**
 * SuiteScript format/i18n module
 *
 * @module N/format/i18n
 * @NApiVersion 2.x
 *
 */
define([], function(){        
    /**
     * @namespace i18n
     */    
    var i18n = {};    
            
    /**
     * @class PhoneNumber
     * @classdesc This object holds all necessary information about phone number.
     * @constructor
     * @protected
     *
     * @since 2020.2
     *
     * Here must be different version for client side. API is the same but internal reperesentation is different
     * because libphonenumber-js uses different approach to formatting. It calls PN.format('INTERNATIONAL')
     * instead of our PNFormatter.format(PN) where PN is object of type PhoneNumber
     */    
    function PhoneNumber() {    
        
        /**
         * Valid - it means legacyPhoneNumber was successfuly parsed and contains correct phone number object
         * @name PhoneNumber#valid
         * @type {boolean}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.valid = undefined;        
        /**
         * Country code
         * @name PhoneNumber#countryCode
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.countryCode = undefined;        
        /**
         * Extension
         * @name PhoneNumber#extension
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.extension = undefined;        
        /**
         * National number
         * @name PhoneNumber#nationalNumber
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.nationalNumber = undefined;        
        /**
         * Number of leading zeros
         * @name PhoneNumber#numberOfLeadingZeros
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.numberOfLeadingZeros = undefined;        
        /**
         * Carrier code
         * @name PhoneNumber#carrierCode
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.carrierCode = undefined;        
        /**
         * Raw input
         * @name PhoneNumber#rawInput
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.rawInput = undefined;        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
        
        /**
         * Returns the object type name
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
    }    
        
    /**
     * Object for parsing phone numbers.
     * @class
     * @classdesc Method 'parse' takes string and returns object of PhoneNumber type.
     * @constructor
     * @protected
     *
     * @param {string} defaultCountry Default country for parsing (e.g. UNITEDSTATES)
     * @param {string} defaultCountryCode Code of default country (e.g. US)
     * @since 2020.2
     */    
    function PhoneNumberParser() {    
        
        /**
         * Default country
         * @name PhoneNumberParser#defaultCountry
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.defaultCountry = undefined;        
        /**
         * Default country code
         * @name PhoneNumberParser#defaultCountryCode
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.defaultCountryCode = undefined;        
        /**
         * Returns parsed phone number.
         * @governance none
         *
         * @param {Object} options
         * @param {string} options.number Phone number to be parsed
         *
         * @return {Object} of type PhoneNumber
         *
         * @since 2020.2
         */        
        this.parse = function(options) {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
        
        /**
         * Returns the object type name
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
    }    
        
    /**
     * Object for formatting phone numbers.
     * @class
     * @classdesc Method format takes object of type PhoneNumber and returns string.
     * @constructor
     * @protected
     *
     * @param {*} formatType enum, to specify required format (e.g. INTERNATIONAL)
     *
     * @since 2020.2
     */    
    function PhoneNumberFormatter() {    
        
        /**
         * Format Type
         * @name PhoneNumberFormatter#formatType
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.formatType = undefined;        
        /**
         * Returns the formatted phone number.
         * @governance none
         *
         * @param {Object} options
         * @param {Object} options.number Phone number to be formatted
         *
         * @return {string}
         *
         * @since 2020.2
         */        
        this.format = function(options) {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
        
        /**
         * Returns the object type name
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
    }    
    
    var format = {};
N.format = format;
    format.i18n = i18n;
    
    /**
     * @exports N/format/i18n
     */
    return i18n;
});