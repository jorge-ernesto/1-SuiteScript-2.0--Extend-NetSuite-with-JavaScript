/**
 * SuiteScript module for handling the session record.
 *
 * @module N/sessionRecordHandler
 * @public
 * @NApiVersion 2.x
 *
 */
define([], function(){        
    /**
     * @namespace sessionRecordHandler
     */    
    var sessionRecordHandler = {};    
        
    /**
     * Creates an instance of the SessionRecordHandler for a session record with the given parameters.
     *
     * @param {string} options.recordType record type of the session record
     * @param {string} options.recordId (optional) if present, this is the id of existing record to be loaded; otherwise a new record instance will be created
     * @param {string} options.storageKey (optional) the storage slot id to be used to store this session record in the session; if missing, a default slot is used
     * @param {string} options.targetRecordType (optional) if present, the session record will be initialized by transforming the original record type to this record type
     * @returns {SessionRecordHandler} a SessionRecordHandler object used to manipulate the specified session record
     *
     * @since 2018.2
     */    
    sessionRecordHandler.instance = function(options) {};    
    
    /**
     * Enum for known session record keys.
     * @enum {string}
     * @readonly
     */    
    function sessionRecordHandlerSessionRecordKey() {
        this.SESSION_RECORD_1 = 'SESSION_RECORD_1';
        this.SESSION_RECORD_2 = 'SESSION_RECORD_2';
        this.SESSION_RECORD_3 = 'SESSION_RECORD_3';
        this.SESSION_RECORD_4 = 'SESSION_RECORD_4';
        this.SESSION_RECORD_5 = 'SESSION_RECORD_5';
    }
    
    sessionRecordHandler.prototype.SessionRecordKey = new sessionRecordHandlerSessionRecordKey();    
    
    N.sessionRecordHandler = sessionRecordHandler;
    
    /**
     * @exports N/sessionRecordHandler
     */
    return sessionRecordHandler;
});