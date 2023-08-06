/**
 * SuiteScript module - defines the Suitelet response and request objects
 *
 * @module N/suiteletContext
 * @NApiVersion 2.x
 *
 */
define([], function(){        
    /**
     * @namespace suiteletContext
     */    
    var suiteletContext = {};    
            
    /**
     * Return a new instance of ServerRequest object that carries incoming HTTP request info.
     *
     * @class ServerRequest
     * @classDescription Encapsulation of the HTTP request incoming to the suitelet.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function ServerRequest() {    
        
        /**
         * Server request headers.
         * @name ServerRequest#headers
         * @type {Object}
         * @readonly
         * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.headers = undefined;        
        /**
         * Server request clientIpAddress.
         * @name ServerRequest#clientIpAddress
         * @type {Object}
         * @readonly
         * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2018.1
         */        
        this.clientIpAddress = undefined;        
        /**
         * Server request client public port.
         * @name ServerRequest#clientPublicPort
         * @type {number}
         * @readonly
         *
         * @since 2021.2
         */        
        this.clientPublicPort = undefined;        
        /**
         * Server request vendor public ip.
         * @name ServerRequest#vendorPublicIp
         * @type {string}
         * @readonly
         *
         * @since 2021.2
         */        
        this.vendorPublicIp = undefined;        
        /**
         * Server request forwarded vendor.
         * @name ServerRequest#forwardedVendor
         * @type {string}
         * @readonly
         *
         * @since 2021.2
         */        
        this.forwardedVendor = undefined;        
        /**
         * Server request parameters.
         * @name ServerRequest#parameters
         * @type {Object}
         * @readonly
         * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.parameters = undefined;        
        /**
         * Server request files.
         * @name ServerRequest#files
         * @type {Object}
         * @readonly
         * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.files = undefined;        
        /**
         * Server request body.
         * @name ServerRequest#body
         * @type {string}
         * @readonly
         * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.body = undefined;        
        /**
         * Server request HTTP method.
         * @name ServerRequest#method
         * @type {string}
         * @readonly
         * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.method = undefined;        
        /**
         * Server request URL.
         * @name ServerRequest#url
         * @type {string}
         * @readonly
         * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.url = undefined;        
        /**
         * Returns the number of lines in a sublist.
         * @restriction Server SuiteScript only
         * @governance none
         * @param {Object} options
         * @param {string} options.group sublist internal ID
         * @return {integer} the integer value of the number of line items in the sublist
         * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         *
         * @since 2015.2
         */        
        this.getLineCount = function(options) {};        
        
        /**
         * Returns the value of a sublist line item.
         * @restriction Server SuiteScript only
         * @governance none
         * @param {Object} options
         * @param {string} options.group sublist internal ID
         * @param {string} options.name the name of the field whose value is returned
         * @param {string} options.line the line number for this field (1-based)
         * @return {string} the string value of the line item
         * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         *
         * @since 2015.2
         */        
        this.getSublistValue = function(options) {};        
        
        /**
         * Returns the object type name (http.ServerRequest)
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
     * Return a new instance of ServerResponse object that carries the response to an incoming HTTP request.
     *
     * @class ServerResponse
     * @classDescription Encapsulation of the HTTP response that will be returned to the browser.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function ServerResponse() {    
        
        /**
         * Server response headers.
         * @name ServerResponse#headers
         * @type {Object} key/value pairs with all the headers; if multiple values are assigned to one header name, they are returned as an array
         * @readonly
         * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.headers = undefined;        
        /**
         * Sets the value of a response header.
         * @restriction Server SuiteScript only
         * @governance none
         * @param {Object} options
         * @param {string} options.name the name of the header
         * @param {string} options.value the value used to set the header
         * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         * @throws {error.SuiteScriptError} SSS_INVALID_HEADER if the header name or value is invalid
         *
         * @since 2015.2
         */        
        this.setHeader = function(options) {};        
        
        /**
         * Adds a header to the response. If this header has already been set, this will add another line for that header.
         * @restriction Server SuiteScript only
         * @governance none
         * @param {Object} options
         * @param {string} options.name the name of the header
         * @param {string} options.value the value used to set the header
         * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         * @throws {error.SuiteScriptError} SSS_INVALID_HEADER if the header name or value is invalid
         *
         * @since 2015.2
         */        
        this.addHeader = function(options) {};        
        
        /**
         * Sets the redirect URL by resolving to a NetSuite resource. Note that all parameters must be prefixed with custparam.
         * @restriction Server SuiteScript only
         * @governance none
         * @param {Object} options
         * @param {string} options.type the base type for this resource - one of RECORD, TASKLINK or SUITELET
         * @param {string} options.identifier the primary id for this resource
         * @param {string} options.id (optional) the secondary id for this resource
         * @param {boolean} options.editMode (optional) for RECORD calls, this determines whether to return a URL for the record in edit mode or view mode
         * @param {Object} options.parameters (optional) additional URL parameters as name/value pairs
         * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         * @throws {error.SuiteScriptError} SSS_INVALID_URL_CATEGORY if type is none of RECORD, TASKLINK or SUITELET
         * @throws {error.SuiteScriptError} SSS_INVALID_TASK_ID if type is TASKLINK and an invalid task identifier is passed in the options.identifier parameter
         * @throws {error.SuiteScriptError} SSS_INVALID_RECORD_TYPE if type is RECORD and an invalid record type is passed in the options.identifier parameter
         * @throws {error.SuiteScriptError} SSS_INVALID_SCRIPT_ID_1 if type is SUITELET and an invalid script ID and deployment ID are passed in the options.identifier and options.id parameters
         *
         * @since 2015.2
         */        
        this.sendRedirect = function(options) {};        
        
        /**
         * Write information (text/xml/html) to the response.
         * @restriction Server SuiteScript only
         * @governance none
         * @param {Object} options
         * @param {string} options.output string or file being written
         * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a string
         *
         * @since 2015.2
         */        
        this.write = function(options) {};        
        
        /**
         * Write line information (text/xml/html) to the response.
         * @restriction Server SuiteScript only
         * @governance none
         * @param {Object} options
         * @param {string} options.output string being written
         * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a string
         *
         * @since 2015.2
         */        
        this.writeLine = function(options) {};        
        
        /**
         * Generates a page using a page element object.
         * @restriction Server SuiteScript only
         * @governance none
         * @param {Object} options
         * @param {serverWidget.Assistant|serverWidget.Form|serverWidget.List} options.pageObject standalone page object: assistant, form or list
         * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         *
         * @since 2015.2
         */        
        this.writePage = function(options) {};        
        
        /**
         * Write a file to the response.
         * @restriction Server SuiteScript only
         * @governance none
         * @param {Object} options
         * @param {file.File} options.file the file to be written
         * @param {boolean} options.isInline (optional) true if the file is inline
         * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a file.File object
         *
         * @since 2015.2
         */        
        this.writeFile = function(options) {};        
        
        /**
         * Returns the value for a header returned in the response.
         * @restriction Server SuiteScript only
         * @governance none
         * @param {Object} options
         * @param {string} options.name the header name
         * @return {string|Array} the value of the header; if multiple values are assigned to the header name, they are returned as an array
         * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         *
         * @since 2015.2
         */        
        this.getHeader = function(options) {};        
        
        /**
         * Generates and renders a PDF directly to the response.
         * @restriction Server SuiteScript only
         * @governance none
         * @param {Object} options
         * @param {string} options.xmlString content of your PDF
         * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         *
         * @since 2015.2
         */        
        this.renderPdf = function(options) {};        
        
        /**
         * Sets CDN caching for a period of time.
         * @restriction Server SuiteScript only
         * @governance none
         * @param {Object} options
         * @param {string} options.type constant value to represent the caching duration, see http.CacheDuration enum
         * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         *
         * @since 2015.2
         */        
        this.setCdnCacheable = function(options) {};        
        
        /**
         * Returns the object type name (http.ServerResponse)
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
    
    N.suiteletContext = suiteletContext;
    
    /**
     * @exports N/suiteletContext
     */
    return suiteletContext;
});