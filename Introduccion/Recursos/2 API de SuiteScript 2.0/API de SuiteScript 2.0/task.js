/**
 * SuiteScript module
 *
 * @module N/task
 * @suiteScriptVersion 2.x
 *
 */
define([], function(){        
    /**
     * @namespace task
     */    
    var task = {};    
        
    /**
     * Creates a task of the given type and returns the task object.
     * @restriction Server SuiteScript only
     * @governance none
     *
     * @param {Object} options
     * @param {string} options.taskType specifies the type of task to be created; use values from the task.TaskType enum
     * @return {ScheduledScriptTask|MapReduceScriptTask|CsvImportTask|EntityDeduplicationTask|WorkflowTriggerTask|SearchTask|RecordActionTask}
     * @throws {SSS_MISSING_REQD_ARGUMENT} if taskType argument is missing
     *
     * @since 2015.2
     */    
    task.create = function(options) {};    
    
    /**
     * Check current status of a submitted task. The task to be checked is identified by its task ID.
     * @restriction Server SuiteScript only
     * @governance none
     *
     * @param {Object} options
     * @param {string} options.taskId
     * @return {ScheduledScriptTaskStatus|MapReduceScriptTaskStatus|CsvImportTaskStatus|EntityDeduplicationTaskStatus|WorkflowTriggerTaskStatus|SearchTaskStatus|RecordActionTaskStatus|QueryTaskStatus|SuiteQLTaskStatus}
     * @throws {SSS_MISSING_REQD_ARGUMENT} if taskId argument is missing
     *
     * @since 2015.2
     */    
    task.checkStatus = function(options) {};    
    
    /**
     * Enumeration that holds the string values for the types of task objects, supported by the N/task Module, that you can create with task.create(options).
     * @enum {string}
     * @readonly
     */    
    function taskTaskType() {
        this.SCHEDULED_SCRIPT = 'SCHEDULED_SCRIPT';
        this.MAP_REDUCE = 'MAP_REDUCE';
        this.CSV_IMPORT = 'CSV_IMPORT';
        this.ENTITY_DEDUPLICATION = 'ENTITY_DEDUPLICATION';
        this.WORKFLOW_TRIGGER = 'WORKFLOW_TRIGGER';
        this.SEARCH = 'SEARCH';
        this.QUERY = 'QUERY';
        this.SUITE_QL = 'SUITEQL';
        this.RECORD_ACTION = 'RECORD_ACTION';
        this.PIVOT = 'PIVOT';
    }
    
    task.prototype.TaskType = new taskTaskType();    
    
    /**
     * Enumeration that holds the string values for the possible status of tasks created and submitted with the N/task Module.
     * @enum {string}
     * @readonly
     */    
    function taskTaskStatus() {
        this.PENDING = 'PENDING';
        this.PROCESSING = 'PROCESSING';
        this.COMPLETE = 'COMPLETE';
        this.FAILED = 'FAILED';
    }
    
    task.prototype.TaskStatus = new taskTaskStatus();    
    
    /**
     * Enumeration that holds the string values for supported master selection modes when merging duplicate records with EntityDeduplicationTask.
     * @enum {string}
     * @readonly
     */    
    function taskMasterSelectionMode() {
        this.CREATED_EARLIEST = 'CREATED_EARLIEST';
        this.MOST_RECENT_ACTIVITY = 'MOST_RECENT_ACTIVITY';
        this.MOST_POPULATED_FIELDS = 'MOST_POPULATED_FIELDS';
        this.SELECT_BY_ID = 'SELECT_BY_ID';
    }
    
    task.prototype.MasterSelectionMode = new taskMasterSelectionMode();    
    
    /**
     * Enumeration that holds the string values for available deduplication modes when merging duplicate records with EntityDeduplicationTask.
     * @enum {string}
     * @readonly
     */    
    function taskDedupeMode() {
        this.MERGE = 'MERGE';
        this.DELETE = 'DELETE';
        this.MAKE_MASTER_PARENT = 'MAKE_MASTER_PARENT';
        this.MARK_AS_NOT_DUPES = 'MARK_AS_NOT_DUPES';
    }
    
    task.prototype.DedupeMode = new taskDedupeMode();    
    
    /**
     * Enumeration that holds the string values for entity types for which you can merge duplicate records with EntityDeduplicationTask.
     * @enum {string}
     * @readonly
     */    
    function taskDedupeEntityType() {
        this.CUSTOMER = 'CUSTOMER';
        this.CONTACT = 'CONTACT';
        this.VENDOR = 'VENDOR';
        this.PARTNER = 'PARTNER';
        this.LEAD = 'LEAD';
        this.PROSPECT = 'PROSPECT';
    }
    
    task.prototype.DedupeEntityType = new taskDedupeEntityType();    
    
    /**
     * Enumeration that holds the string values for the stages of a map/reduce script deployment, which is encapsulated by the MapReduceScriptTask object.
     * @enum {string}
     * @readonly
     */    
    function taskMapReduceStage() {
        this.GET_INPUT = 'GET_INPUT';
        this.MAP = 'MAP';
        this.SHUFFLE = 'SHUFFLE';
        this.REDUCE = 'REDUCE';
        this.SUMMARIZE = 'SUMMARIZE';
    }
    
    task.prototype.MapReduceStage = new taskMapReduceStage();    
    
    /**
     * Enumeration that holds the string values for the possible record action conditions.
     * @enum {Object}
     * @readonly
     */    
    task.ActionCondition = function() {};    
        
    /**
     * @class ScheduledScriptTask
     * @classdesc Encapsulates all the properties of a scheduled script task in SuiteScript. Use this object to place a scheduled script deployment into the NetSuite scheduling queue.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function ScheduledScriptTask() {    
        
        /**
         * The ID of the task.
         * @name ScheduledScriptTask#id
         * @type {string}
         *
         * @since 2015.2
         */        
        this.id = undefined;        
        /**
         * The Internal ID or Script ID of the Script record.
         * @name ScheduledScriptTask#scriptId
         * @type {string | number}
         *
         * @since 2015.2
         */        
        this.scriptId = undefined;        
        /**
         * The Internal ID or Script ID of the Script Deployment record.
         * @name ScheduledScriptTask#deploymentId
         * @type {string | number}
         *
         * @since 2015.2
         */        
        this.deploymentId = undefined;        
        /**
         * Key/value pairs which override static script parameter field values on the deployment.
         * Used to dynamically pass context to the script.
         * @name ScheduledScriptTask#params
         * @type {Object}
         *
         * @since 2015.2
         */        
        this.params = undefined;        
        /**
         * Submits the task and returns an unique ID.
         * @restriction Server SuiteScript only
         * @governance 20 units
         *
         * @return {string} taskId
         * @throws {SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
         * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT scriptId property was not set
         *
         * @since 2015.2
         */        
        this.submit = function() {};        
        
        /**
         * Returns the object type name (task.ScheduledScriptTask)
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
     * @class ScheduledScriptTaskStatus
     * @classdesc Encapsulates the status of a scheduled script placed into the NetSuite scheduling queue.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function ScheduledScriptTaskStatus() {    
        
        /**
         * The taskId associated with the specified task.
         * @name ScheduledScriptTaskStatus#taskId
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.taskId = undefined;        
        /**
         * Script ID.
         * @name ScheduledScriptTaskStatus#scriptId
         * @type {number}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.scriptId = undefined;        
        /**
         * Script deployment ID.
         * @name ScheduledScriptTaskStatus#deploymentId
         * @type {number}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         */        
        this.deploymentId = undefined;        
        /**
         * Represents the task status. Returns one of the task.TaskStatus enum values.
         * @name ScheduledScriptTaskStatus#status
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.status = undefined;        
        /**
         * Returns the object type name (task.ScheduledScriptTaskStatus).
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
     * @class MapReduceScriptTask
     * @classdesc Encapsulates a map/reduce script deployment.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function MapReduceScriptTask() {    
        
        /**
         * The ID of the task.
         * @name MapReduceScriptTask#id
         * @type {string}
         *
         * @since 2015.2
         */        
        this.id = undefined;        
        /**
         * The Internal ID or Script ID of the Script record.
         * @name MapReduceScriptTask#scriptId
         * @type {string | number}
         *
         * @since 2015.2
         */        
        this.scriptId = undefined;        
        /**
         * The Internal ID or Script ID of the Script Deployment record.
         * @name MapReduceScriptTask#deploymentId
         * @type {string | number}
         *
         * @since 2015.2
         */        
        this.deploymentId = undefined;        
        /**
         * Key/value pairs which override static script parameter field values on the deployment.
         * Used to dynamically pass context to the script.
         * @name MapReduceScriptTask#params
         * @type {Object}
         *
         * @since 2015.2
         */        
        this.params = undefined;        
        /**
         * Submits the task and returns an unique ID.
         * @restriction Server SuiteScript only
         * @governance 20 units
         * @return {string} taskId
         *
         * @since 2015.2
         */        
        this.submit = function() {};        
        
        /**
         * Returns the object type name (task.MapReduceScriptTask).
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
     * @class MapReduceScriptTaskStatus
     * @classdesc Encapsulates the status of a map/reduce script deployment that has been submitted for processing.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function MapReduceScriptTaskStatus() {    
        
        /**
         * The taskId associated with the specified task.
         * @name MapReduceScriptTaskStatus#taskId
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.taskId = undefined;        
        /**
         * Script ID.
         * @name MapReduceScriptTaskStatus#scriptId
         * @type {number}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.scriptId = undefined;        
        /**
         * Script deployment ID.
         * @name MapReduceScriptTaskStatus#deploymentId
         * @type {number}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.deploymentId = undefined;        
        /**
         * Represents the task status. Returns one of the task.TaskStatus enum values.
         * @name MapReduceScriptTaskStatus#status
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.status = undefined;        
        /**
         * Represents the current stage of the Map/Reduce script. Returns one of the task.MapReduceStage enum values.
         * @name MapReduceScriptTaskStatus#stage
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.stage = undefined;        
        /**
         * Get percentage of completion for the current stage. Note that INPUT and SUMMARIZE are either 0% or 100% complete at any given time.
         * @restriction Server SuiteScript only
         * @governance 10 units
         * @return {number}
         *
         * @since 2015.2
         */        
        this.getPercentageCompleted = function() {};        
        
        /**
         * Total number of records/rows not yet processed by the MAP phase.
         * @restriction Server SuiteScript only
         * @governance 10 units
         * @return {number}
         *
         * @since 2015.2
         */        
        this.getPendingMapCount = function() {};        
        
        /**
         * Total number of record/row inputs to the MAP phase.
         * @restriction Server SuiteScript only
         * @governance 10 units
         * @return {number}
         *
         * @since 2015.2
         */        
        this.getTotalMapCount = function() {};        
        
        /**
         * Total number of bytes not yet processed by the MAP phase (a component of total size).
         * @restriction Server SuiteScript only
         * @governance 25 units
         * @return {number}
         *
         * @since 2015.2
         */        
        this.getPendingMapSize = function() {};        
        
        /**
         * Total number of records/rows not yet processed by the REDUCE phase.
         * @restriction Server SuiteScript only
         * @governance 10 units
         * @return {number}
         *
         * @since 2015.2
         */        
        this.getPendingReduceCount = function() {};        
        
        /**
         * Total number of record/row inputs to the REDUCE phase.
         * @restriction Server SuiteScript only
         * @governance 10 units
         * @return {number}
         *
         * @since 2015.2
         */        
        this.getTotalReduceCount = function() {};        
        
        /**
         * Total number of bytes not yet processed by the REDUCE phase (a component of total size).
         * @restriction Server SuiteScript only
         * @governance 25 units
         * @return {number}
         *
         * @since 2015.2
         */        
        this.getPendingReduceSize = function() {};        
        
        /**
         * Total number of records/rows not yet iterated by the script.
         *
         * @governance 10 units
         * @return {number}
         *
         * @since 2015.2
         */        
        this.getPendingOutputCount = function() {};        
        
        /**
         * Returns the total size in bytes of all key/value pairs written as output (a component of total size).
         * @restriction Server SuiteScript only
         * @governance 25 units
         * @return {number}
         *
         * @since 2015.2
         */        
        this.getPendingOutputSize = function() {};        
        
        /**
         * Total number of record/row inputs to the OUTPUT phase.
         * @restriction Server SuiteScript only
         * @governance 10 units
         * @return {number}
         *
         * @since 2015.2
         */        
        this.getTotalOutputCount = function() {};        
        
        /**
         * Returns the total size in bytes of all stored work in progress.
         * @restriction Server SuiteScript only
         * @governance 25 units
         * @returns {number}
         *
         * @since 2015.2
         */        
        this.getCurrentTotalSize = function() {};        
        
        /**
         * Returns the object type name (task.MapReduceScriptTaskStatus).
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
     * @class SearchTask
     * @classdesc Encapsulates the properties required to initiate an asynchronous search.
     * @protected
     * @constructor
     *
     * @since 2017.1
     */    
    function SearchTask() {    
        
        /**
         * The ID of the task.
         * @name SearchTask#id
         * @type {number}
         *
         * @since 2017.1
         */        
        this.id = undefined;        
        /**
         * An ID of saved search to be executed during the task.
         * @name SearchTask#savedSearchId
         * @type {number}
         *
         * @since 2017.1
         */        
        this.savedSearchId = undefined;        
        /**
         * Id of CVS file to export results of search into. See N/file.
         * If fileId is provided then parameter filePath is ignored.
         * There's no synchronization between fileId and filePath attributes.
         * @name SearchTask#fileId
         * @throws {SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to se both SearchTask#filePath and SearchTask#fileId
         * @type {number}
         *
         * @since 2017.1
         */        
        this.fileId = undefined;        
        /**
         * Path of CVS file to export results of search into. See N/file.
         * If fileId is provided then parameter filePath is ignored.
         * There's no synchronization between fileId and filePath attributes.
         * @name SearchTask#filePath
         * @throws {SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to se both SearchTask#filePath and SearchTask#fileId
         * @type {number}
         *
         * @since 2017.1
         */        
        this.filePath = undefined;        
        /**
         * Completion scripts which will be run when the async search finishes.
         * When submission succeeds an id attribute will be added into each completion task.
         *
         * Example - two inbound dependencies, a Scheduled Script and a Map Reduce Script.
         *
         * inboundDependencies before submit(), after adding two inbound dependencies:
         * {"0":{"type":"task.ScheduledScriptTask","scriptId":"customscript_as_ftr_ss","deploymentId":"customdeploy_ss_dpl","params":{"custscript_ss_as_srch_res":"SuiteScripts/ExportFile.csv"}},
         * "1":{"type":"task.MapReduceScriptTask","scriptId":"customscript_as_ftr_mr","deploymentId":"customdeploy_mr_dpl","params":{"custscript_mr_as_srch_res":"SuiteScripts/ExportFile.csv"}}}
         *
         * inboundDependencies after succesfull submit(), id was added into tasks:
         * {"0":{"type":"task.ScheduledScriptTask","id":"SCHEDSCRIPT_0168697b126d1705061d0d690a787755500b046a1912686b10_349d94266564827c739a2ba0a5b9d476f4097217","scriptId":"customscript_as_ftr_ss","deploymentId":"customdeploy_ss_dpl","params":{"custscript_ss_as_srch_res":"SuiteScripts/ExportFile.csv"}},
         * "1":{"type":"task.MapReduceScriptTask","id":"MAPREDUCETASK_0268697b126d1705061d0d69027f7b39560f01001c_7a02acb4bdebf0103120b09302170720aa57bca4","scriptId":"customscript_as_ftr_mr","deploymentId":"customdeploy_mr_dpl","params":{"custscript_mr_as_srch_res":"SuiteScripts/ExportFile.csv"}}}
         *
         * @name SearchTask#inboundDependencies
         * @type {Array<Object>}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting of the property is attempted
         *
         * @since 2018.2
         */        
        this.inboundDependencies = undefined;        
        /**
         * Submits the task and returns an unique ID. Sets inbound dependency (task) id in inboundDependencies attribute on successful submit.
         *
         * @governance 100 units
         *
         * @return {string} taskId
         * @throws {SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
         * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         * @throws {SuiteScriptError} YOU_DO_NOT_HAVE_ACCESS_TO_THE_MEDIA_ITEM_YOU_SELECTED if you do not have permission to access the file
         * @throws {SuiteScriptError} THAT_RECORD_DOES_NOT_EXIST if file object references non existing file
         * @throws {SuiteScriptError} MUST_IDENTIFY_A_FILE if path specifies folder
         * @throws {SuiteScriptError} CANNOT_RESUBMIT_SUBMITTED_ASYNC_SEARCH_TASK an attempt to submit a search task instance which has been submitted successfully before
         * @throws {SuiteScriptError} ASYNC_SEARCH_DEPENDENCY_MR_ALREADY_SUBMITTED map reduce dependency has had already been submitted and has not finished yet
         * @throws {SuiteScriptError} ASYNC_SEARCH_DEPENDENCY_MR_INCORRECT_STATUS status of map reduce dependency script is incorrect, it has to be "Not Scheduled"
         * @throws {SuiteScriptError} ASYNC_SEARCH_DEPENDENCY_SS_ALREADY_SUBMITTED scheduled script dependency has had already been submitted and has not finished yet
         * @throws {SuiteScriptError} ASYNC_SEARCH_DEPENDENCY_SS_INCORRECT_STATUS status of scheduled script dependency script is incorrect, it has to be "Not Scheduled"
         * @throws {SuiteScriptError} ASYNC_SEARCH_DEPLOYMENT_FOR_DEPENDENCY no available deployment was found for dependency
         * @throws {SuiteScriptError} ASYNC_SEARCH_MULTIPLE_DEPENDENCIES multiple dependencies with the same script id were submitted
         * @throws {SuiteScriptError} ASYNC_SEARCH_SCRIPT_ID_NOT_FOUND script with the entered id was not found
         * @throws {SuiteScriptError} ASYNC_SEARCH_SEARCH_ID_NOT_FOUND search id was not found
         *
         * @since 2017.1
         */        
        this.submit = function() {};        
        
        /**
         * Returns the object type name (task.SearchTask).
         * @restriction Server SuiteScript only
         * @governance none
         * @return {string}
         *
         * @since 2017.1
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @restriction Server SuiteScript only
         * @governance none
         * @return {Object}
         *
         * @since 2017.1
         */        
        this.toJSON = function() {};        
        
        /**
         * Adds an inbound dependency (completion script).
         * @restriction Server SuiteScript only
         * @param {Object} options
         * @param {Object} options.taskType task.TaskType.SCHEDULED_SCRIPT | task.TaskType.MAP_REDUCE
         * @param {Object} options.scriptId
         * @param {Object} [options.deploymentId] optional, the script has to be deployed, a free deployment id can be detected automatically if available
         * @param {Object} [options.params] a previosly created script parameter has to be set to async search csv result file id if the file is needed in the script, e.g. {'custscript_srch_res' : 'File.csv'}
         * @return {void}
         *
         * @since 2018.2
         */        
        this.addInboundDependency = function(options) {};        
    }    
        
    /**
     * Represents the status of a search task
     * @protected
     * @constructor
     */    
    function SearchTaskStatus() {    
        
        /**
         * The taskId associated with the specified task.
         * @name SearchTaskStatus#taskId
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2017.1
         */        
        this.taskId = undefined;        
        /**
         * Represents the task status. Returns one of the task.TaskStatus enum values.
         * @name SearchTaskStatus#status
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         */        
        this.status = undefined;        
        /**
         * Represents the fileId of exported file.
         * @name SearchTaskStatus#fileId
         * @type {number}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2017.1
         */        
        this.fileId = undefined;        
        /**
         * Represents id of saved search being used for export.
         * @name SearchTaskStatus#savedSearchId
         * @type {number}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2017.1
         */        
        this.savedSearchId = undefined;        
        /**
         * Returns the object type name (task.SearchTaskStatus).
         * @restriction Server SuiteScript only
         * @governance none
         * @return {string}
         *
         * @since 2017.1
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @restriction Server SuiteScript only
         * @governance none
         * @return {Object}
         *
         * @since 2017.1
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class QueryTask
     * @classdesc Encapsulates the properties required to initiate an asynchronous query.
     * @protected
     * @constructor
     *
     * @since 2020.2
     */    
    function QueryTask() {    
        
        /**
         * The ID of the task.
         * @name QueryTask#id
         * @type {number}
         *
         * @since 2020.2
         */        
        this.id = undefined;        
        /**
         * Query definition
         * @name QueryTask#query
         * @type {Query}
         *
         * @since 2020.2
         */        
        this.query = undefined;        
        /**
         * Id of CVS file to export results of search into. See N/file.
         * If fileId is provided then parameter filePath is ignored.
         * There's no synchronization between fileId and filePath attributes.
         * @name QueryTask#fileId
         * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to se both QueryTask#filePath and QueryTask#fileId
         * @type {number}
         *
         * @since 2020.2
         */        
        this.fileId = undefined;        
        /**
         * Path of CVS file to export results of search into. See N/file.
         * If fileId is provided then parameter filePath is ignored.
         * There's no synchronization between fileId and filePath attributes.
         * @name QueryTask#filePath
         * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to se both QueryTask#filePath and QueryTask#fileId
         * @type {number}
         *
         * @since 2020.2
         */        
        this.filePath = undefined;        
        /**
         * Completion scripts which will be run when the async query finishes.
         * When submission succeeds an id attribute will be added into each completion task.
         *
         * @name QueryTask#inboundDependencies
         * @type {Array<Object>}
         * @readonly
         * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting of the property is attempted
         *
         * @since 2020.2
         */        
        this.inboundDependencies = undefined;        
        /**
         * Submits the task and returns an unique ID. Sets inbound dependency (task) id in inboundDependencies attribute on successful submit.
         *
         * @governance 100 units
         *
         * @returns {String} taskId
         * @throws {SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
         * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         * @throws {error.SuiteScriptError} YOU_DO_NOT_HAVE_ACCESS_TO_THE_MEDIA_ITEM_YOU_SELECTED if you do not have permission to access the file
         * @throws {error.SuiteScriptError} THAT_RECORD_DOES_NOT_EXIST if file object references non existing file
         * @throws {error.SuiteScriptError} MUST_IDENTIFY_A_FILE if path specifies folder
         * @throws {error.SuiteScriptError} CANNOT_RESUBMIT_SUBMITTED_ASYNC_QUERY_TASK an attempt to submit a query task instance which has been submitted successfully before
         * @throws {SuiteScriptError} ASYNC_QUERY_DEPENDENCY_MR_ALREADY_SUBMITTED map reduce dependency has had already been submitted and has not finished yet
         * @throws {SuiteScriptError} ASYNC_QUERY_DEPENDENCY_MR_INCORRECT_STATUS status of map reduce dependency script is incorrect, it has to be "Not Scheduled"
         * @throws {SuiteScriptError} ASYNC_QUERY_DEPENDENCY_SS_ALREADY_SUBMITTED scheduled script dependency has had already been submitted and has not finished yet
         * @throws {SuiteScriptError} ASYNC_QUERY_DEPENDENCY_SS_INCORRECT_STATUS status of scheduled script dependency script is incorrect, it has to be "Not Scheduled"
         * @throws {SuiteScriptError} ASYNC_QUERY_DEPLOYMENT_FOR_DEPENDENCY no available deployment was found for dependency
         * @throws {SuiteScriptError} ASYNC_QUERY_MULTIPLE_DEPENDENCIES multiple dependencies with the same script id were submitted
         * @throws {SuiteScriptError} ASYNC_QUERY_SCRIPT_ID_NOT_FOUND script with the entered id was not found
         *
         * @since 2020.2
         */        
        this.submit = function() {};        
        
        /**
         * Returns the object type name (task.QueryTask).
         * @restriction Server SuiteScript only
         * @governance none
         * @returns {string}
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
         * @since 2020.2
         */        
        this.toJSON = function() {};        
        
        /**
         * Adds an inbound dependency (completion script).
         * @restriction Server SuiteScript only
         * @param {Object} options
         * @param {Object} options.taskType task.TaskType.SCHEDULED_SCRIPT | task.TaskType.MAP_REDUCE
         * @param {Object} options.query
         * @param {Object} [options.deploymentId] optional, the script has to be deployed, a free deployment id can be detected automatically if available
         * @param {Object} [options.params] a previosly created script parameter has to be set to async search csv result file id if the file is needed in the script, e.g. {'custscript_srch_res' : 'File.csv'}
         * @return {void}
         *
         * @since 2020.2
         */        
        this.addInboundDependency = function(options) {};        
    }    
        
    /**
     * Represents the status of a query task
     * @protected
     * @constructor
     */    
    function QueryTaskStatus() {    
        
        /**
         * The taskId associated with the specified task.
         * @name QueryTaskStatus#taskId
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.taskId = undefined;        
        /**
         * Represents the task status. Returns one of the task.TaskStatus enum values.
         * @name QueryTaskStatus#status
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         */        
        this.status = undefined;        
        /**
         * Represents the fileId of exported file.
         * @name QueryTaskStatus#fileId
         * @type {number}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.fileId = undefined;        
        /**
         * Represents query being used for the task execution
         * @name QueryTaskStatus#query
         * @type {query}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.query = undefined;        
        /**
         * Returns the object type name (task.QueryTaskStatus).
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
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class SuiteQLTask
     * @classdesc Encapsulates the properties required to initiate an asynchronous SuiteQL.
     * @protected
     * @constructor
     *
     * @since 2020.2
     */    
    function SuiteQLTask() {    
        
        /**
         * The ID of the task.
         * @name SuiteQLTask#id
         * @type {number}
         *
         * @since 2020.2
         */        
        this.id = undefined;        
        /**
         * SuiteQL query
         * @name SuiteQLTask#query
         * @type {string}
         *
         * @since 2020.2
         */        
        this.query = undefined;        
        /**
         * SuiteQL parameters
         * @name SuiteQLTask#params
         * @type {string}
         *
         * @since 2020.2
         */        
        this.params = undefined;        
        /**
         * Id of CVS file to export results of search into. See N/file.
         * If fileId is provided then parameter filePath is ignored.
         * There's no synchronization between fileId and filePath attributes.
         * @name SuiteQLTask#fileId
         * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to se both SuiteQLTask#filePath and QueryTask#fileId
         * @type {number}
         *
         * @since 2020.2
         */        
        this.fileId = undefined;        
        /**
         * Path of CVS file to export results of search into. See N/file.
         * If fileId is provided then parameter filePath is ignored.
         * There's no synchronization between fileId and filePath attributes.
         * @name SuiteQLTask#filePath
         * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to se both SuiteQLTask#filePath and QueryTask#fileId
         * @type {number}
         *
         * @since 2020.2
         */        
        this.filePath = undefined;        
        /**
         * Completion scripts which will be run when the async query finishes.
         * When submission succeeds an id attribute will be added into each completion task.
         *
         * @name SuiteQLTask#inboundDependencies
         * @type {Array<Object>}
         * @readonly
         * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting of the property is attempted
         *
         * @since 2020.2
         */        
        this.inboundDependencies = undefined;        
        /**
         * Submits the task and returns an unique ID. Sets inbound dependency (task) id in inboundDependencies attribute on successful submit.
         *
         * @governance 100 units
         *
         * @returns {String} taskId
         * @throws {SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
         * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         * @throws {error.SuiteScriptError} YOU_DO_NOT_HAVE_ACCESS_TO_THE_MEDIA_ITEM_YOU_SELECTED if you do not have permission to access the file
         * @throws {error.SuiteScriptError} THAT_RECORD_DOES_NOT_EXIST if file object references non existing file
         * @throws {error.SuiteScriptError} MUST_IDENTIFY_A_FILE if path specifies folder
         * @throws {error.SuiteScriptError} CANNOT_RESUBMIT_SUBMITTED_ASYNC_SUITEQL_TASK an attempt to submit a SuiteQL task instance which has been submitted successfully before
         * @throws {SuiteScriptError} ASYNC_SUITEQL_DEPENDENCY_MR_ALREADY_SUBMITTED map reduce dependency has had already been submitted and has not finished yet
         * @throws {SuiteScriptError} ASYNC_SUITEQL_DEPENDENCY_MR_INCORRECT_STATUS status of map reduce dependency script is incorrect, it has to be "Not Scheduled"
         * @throws {SuiteScriptError} ASYNC_SUITEQL_DEPENDENCY_SS_ALREADY_SUBMITTED scheduled script dependency has had already been submitted and has not finished yet
         * @throws {SuiteScriptError} ASYNC_SUITEQL_DEPENDENCY_SS_INCORRECT_STATUS status of scheduled script dependency script is incorrect, it has to be "Not Scheduled"
         * @throws {SuiteScriptError} ASYNC_SUITEQL_DEPLOYMENT_FOR_DEPENDENCY no available deployment was found for dependency
         * @throws {SuiteScriptError} ASYNC_SUITEQL_MULTIPLE_DEPENDENCIES multiple dependencies with the same script id were submitted
         * @throws {SuiteScriptError} ASYNC_SUITEQL_SCRIPT_ID_NOT_FOUND script with the entered id was not found
         *
         * @since 2020.2
         */        
        this.submit = function() {};        
        
        /**
         * Returns the object type name (task.QueryTask).
         * @restriction Server SuiteScript only
         * @governance none
         * @returns {string}
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
         * @since 2020.2
         */        
        this.toJSON = function() {};        
        
        /**
         * Adds an inbound dependency (completion script).
         * @restriction Server SuiteScript only
         * @param {Object} options
         * @param {Object} options.taskType task.TaskType.SCHEDULED_SCRIPT | task.TaskType.MAP_REDUCE
         * @param {Object} options.query
         * @param {Object} [options.deploymentId] optional, the script has to be deployed, a free deployment id can be detected automatically if available
         * @param {Object} [options.params] a previosly created script parameter has to be set to async search csv result file id if the file is needed in the script, e.g. {'custscript_srch_res' : 'File.csv'}
         * @return {void}
         *
         * @since 2020.2
         */        
        this.addInboundDependency = function(options) {};        
    }    
        
    /**
     * Represents the status of a SuiteQL task
     * @protected
     * @constructor
     */    
    function SuiteQLTaskStatus() {    
        
        /**
         * The taskId associated with the specified task.
         * @name SuiteQLTaskStatus#taskId
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.taskId = undefined;        
        /**
         * Represents the task status. Returns one of the task.TaskStatus enum values.
         * @name SuiteQLTaskStatus#status
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         */        
        this.status = undefined;        
        /**
         * Represents the fileId of exported file.
         * @name SuiteQLTaskStatus#fileId
         * @type {number}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.fileId = undefined;        
        /**
         * Represents SuiteQL query being used for the task execution
         * @name SuiteQLTaskStatus#query
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.query = undefined;        
        /**
         * Represents SuiteQL query parameters used for the task execution
         * @name SuiteQLTaskStatus#params
         * @type {Array<string>|Array<boolean>|Array<number>}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.params = undefined;        
        /**
         * Returns the object type name (task.SuiteQLTaskStatus).
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
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class CsvImportTask
     * @classdesc Encapsulates the properties of a CSV import task. Use the methods and properties for this object to submit a CSV import task into the task queue and asynchronously import record data into NetSuite.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function CsvImportTask() {    
        
        /**
         * The ID of the task.
         * @name CsvImportTask#id
         * @type {string}
         *
         * @since 2015.2
         */        
        this.id = undefined;        
        /**
         * A file.File object containing data to be imported OR a string containing raw CSV text to be imported.
         * @name CsvImportTask#importFile
         * @type {string | File}
         *
         * @since 2015.2
         */        
        this.importFile = undefined;        
        /**
         * Internal ID or script ID of a saved import map to be used for the import.
         * @name CsvImportTask#mappingId
         * @type {string | number}
         */        
        this.mappingId = undefined;        
        /**
         * Overrides the CSV import queue preference.
         * @name CsvImportTask#queueId
         * @type {number}
         *
         * @since 2015.2
         */        
        this.queueId = undefined;        
        /**
         * The name of the import job to be shown on the status page for CSV imports.
         * @name CsvImportTask#name
         * @type {string}
         *
         * @since 2015.2
         */        
        this.name = undefined;        
        /**
         * A map of key/value pairs "sublist->file" for a multi-file import job.
         * The key defines the internal ID of the record sublist for which data is being imported.
         * The value is a file.File object containing data to be imported OR a string containing raw CSV text to be imported.
         * @name CsvImportTask#linkedFiles
         * @type {Object}
         *
         * @since 2015.2
         */        
        this.linkedFiles = undefined;        
        /**
         * Submits the task and returns an unique ID.
         * @restriction Server SuiteScript only
         * @governance 100 units
         *
         * @return {string} taskId
         * @throws {SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
         *
         * @since 2015.2
         */        
        this.submit = function() {};        
        
        /**
         * Returns the object type name (task.CsvImportTask).
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
     * @class CsvImportTaskStatus
     * @classdesc Encapsulates the status of a CSV import task placed into the NetSuite scheduling queue.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function CsvImportTaskStatus() {    
        
        /**
         * The taskId associated with the specified task.
         * @name CsvImportTaskStatus#taskId
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.taskId = undefined;        
        /**
         * Represents the task status. Returns one of the task.TaskStatus enum values.
         * @name CsvImportTaskStatus#status
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.status = undefined;        
        /**
         * Returns the object type name (task.CsvImportTaskStatus).
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
     * @class EntityDeduplicationTask
     * @classdesc Encapsulates all the properties of a merge duplicate records task request. Use the methods and properties of this object to submit a merge duplicate record job task into the NetSuite task queue.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function EntityDeduplicationTask() {    
        
        /**
         * The ID of the task.
         * @name EntityDeduplicationTask#id
         * @type {string}
         *
         * @since 2015.2
         */        
        this.id = undefined;        
        /**
         * Represents the entity type. Use values from the task.DedupeEntityType enum.
         * @name EntityDeduplicationTask#entityType
         * @type {string}
         *
         * @since 2015.2
         */        
        this.entityType = undefined;        
        /**
         * Master record ID.
         * @name EntityDeduplicationTask#masterRecordId
         * @type {number}
         *
         * @since 2015.2
         */        
        this.masterRecordId = undefined;        
        /**
         * Master selection mode. Use values from the task.MasterSelectionMode enum.
         * @name EntityDeduplicationTask#masterSelectionMode
         * @type {string}
         *
         * @since 2015.2
         */        
        this.masterSelectionMode = undefined;        
        /**
         * Deduplication mode. Use values from the task.DedupeMode enum.
         * @name EntityDeduplicationTask#dedupeMode
         * @type {string}
         *
         * @since 2015.2
         */        
        this.dedupeMode = undefined;        
        /**
         * Records to deduplicate.
         * @name EntityDeduplicationTask#recordIds
         * @type {Array<number>}
         *
         * @since 2015.2
         */        
        this.recordIds = undefined;        
        /**
         * Submits the task and returns an unique ID.
         * @restriction Server SuiteScript only
         * @governance 100 units
         *
         * @return {string} taskId
         * @throws {SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
         *
         * @since 2015.2
         */        
        this.submit = function() {};        
        
        /**
         * Returns the object type name (task.EntityDeduplicationTask).
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
     * @class EntityDeduplicationTaskStatus
     * @classdesc Encapsulates the status of a merge duplicate record task placed into the NetSuite task queue.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function EntityDeduplicationTaskStatus() {    
        
        /**
         * The taskId associated with the specified task.
         * @name EntityDeduplicationTaskStatus#taskId
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.taskId = undefined;        
        /**
         * Represents the task status. Returns one of the task.TaskStatus enum values.
         * @name EntityDeduplicationTaskStatus#status
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.status = undefined;        
        /**
         * Returns the object type name (task.EntityDeduplicationTaskStatus).
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
     * @class WorkflowTriggerTask
     * @classdesc Encapsulates all the properties required to asynchronously initiate a workflow. Use WorkflowTriggerTask to create a task that initiates an instance of a specific workflow.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function WorkflowTriggerTask() {    
        
        /**
         * The ID of the task.
         * @name WorkflowTriggerTask#id
         * @type {string}
         *
         * @since 2015.2
         */        
        this.id = undefined;        
        /**
         * The record type of the workflow base record.
         * @name WorkflowTriggerTask#recordType
         * @type {string}
         *
         * @since 2015.2
         */        
        this.recordType = undefined;        
        /**
         * The internal ID of the base record.
         * @name WorkflowTriggerTask#recordId
         * @type {number}
         *
         * @since 2015.2
         */        
        this.recordId = undefined;        
        /**
         * The internal ID (int) or script ID (string) for the workflow definition. This is the ID that appears in the ID field on the Workflow Definition Page.
         * @name WorkflowTriggerTask#workflowId
         * @type {string | number}
         *
         * @since 2015.2
         */        
        this.workflowId = undefined;        
        /**
         * Key/value pairs which override static script parameter field values on the deployment.
         * Used to dynamically pass context to the script.
         * @name WorkflowTriggerTask#params
         * @type {Object}
         *
         * @since 2015.2
         */        
        this.params = undefined;        
        /**
         * Submits the task and returns an unique ID.
         * @restriction Server SuiteScript only
         * @governance 20 units
         *
         * @return {string} taskId
         * @throws {SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
         *
         * @since 2015.2
         */        
        this.submit = function() {};        
        
        /**
         * Returns the object type name (task.WorkflowTriggerTask).
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
     * @class WorkflowTriggerTask
     * @classdesc Encapsulates the status of an asynchronous workflow initiation task placed into the NetSuite task queue.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function WorkflowTriggerTaskStatus() {    
        
        /**
         * The taskId associated with the specified task.
         * @name WorkflowTriggerTaskStatus#taskId
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.taskId = undefined;        
        /**
         * Represents the task status. Returns one of the task.TaskStatus enum values.
         * @name WorkflowTriggerTaskStatus#status
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2015.2
         */        
        this.status = undefined;        
        /**
         * Returns the object type name (task.WorkflowTriggerTaskStatus).
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
     * @class RecordActionTask
     * @classdesc Encapsulates the properties of a record action task. Use this object to place a record action task into the NetSuite scheduling queue.
     * @protected
     * @constructor
     *
     * @since 2019.1
     */    
    function RecordActionTask() {    
        
        /**
         * The ID of the task.
         * @name RecordActionTask#id
         * @type {string}
         *
         * @since 2019.1
         */        
        this.id = undefined;        
        /**
         * The record type of on which the action is to be invoked.
         * @name RecordActionTask#recordType
         * @type {string}
         *
         * @since 2019.1
         */        
        this.recordType = undefined;        
        /**
         * The ID of the action to be invoked.
         * @name RecordActionTask#action
         * @type {number}
         *
         * @since 2019.1
         */        
        this.action = undefined;        
        /**
         * Array of parameter objects. Each parameter object contains a mandatory recordId property and any number of other
         * properties that will be passed as action parameters when the action is invoked on the record with that record ID.
         * @name RecordActionTask#params
         * @type {Array<Object>}
         *
         * @since 2019.1
         */        
        this.params = undefined;        
        /**
         * Condition used to get the record instance IDs. Currently only task.ActionCondition.ALL_QUALIFIED_INSTANCES
         * is supported. This parameter is mutually exclusive with params.
         * @name RecordActionTask#condition
         * @type {Object}
         *
         * @since 2019.1
         */        
        this.condition = undefined;        
        /**
         * Function that generates a parameter object for a given ID. To be used in conjunction with condition.
         * Cannot be specified when params is specified.
         * @name RecordActionTask#paramCallback
         * @type {Function}
         *
         * @since 2019.1
         */        
        this.paramCallback = undefined;        
        /**
         * Submits the task and returns an unique ID.
         * @restriction Server SuiteScript only
         * @governance 50 units
         *
         * @returns {string} taskId
         * @throws {SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
         *
         * @since 2019.1
         */        
        this.submit = function() {};        
        
        /**
         * Returns the object type name (task.RecordActionTask).
         * @restriction Server SuiteScript only
         * @governance none
         * @return {string}
         *
         * @since 2019.1
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @restriction Server SuiteScript only
         * @governance none
         * @return {Object}
         *
         * @since 2019.1
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class PivotExecutionTask
     * @classdesc Encapsulates all the properties of a pivot execution task in SuiteScript. Use this object to submit a pivot for execution.
     * @protected
     * @constructor
     *
     * @since 2021.2
     */    
    function PivotExecutionTask() {    
        
        /**
         * The ID of the task.
         * @name PivotExecutionTask#pivotStorageId
         * @type {number}
         *
         * @since 2021.2
         */        
        this.pivotStorageId = undefined;        
        /**
         * Id of the pivot in workbook
         * @name PivotExecutionTask#pivotId
         * @type {string}
         *
         * @since 2021.2
         */        
        this.pivotId = undefined;        
        /**
         * Workbook with pivot to execute
         * @name PivotExecutionTask#workbook
         * @type {Workbook}
         *
         * @since 2021.2
         */        
        this.workbook = undefined;        
        /**
         * Id of the pivot task
         * @name PivotExecutionTask#id
         * @type {Object}
         *
         * @since 2021.2
         */        
        this.id = undefined;        
        /**
         * Adds an inbound dependency (completion script).
         * @restriction Server SuiteScript only
         * @param {Object} options
         * @param {Object} options.task MapReduce or ScheduledScript task
         * @return {void}
         *
         * @since 2021.2
         */        
        this.addInboundDependency = function(options) {};        
        
        /**
         * Submits the task and returns an unique ID. Sets inbound dependency (task) id in inboundDependencies attribute on successful submit.
         *
         * @governance 100 units
         *
         * @returns {String} taskId
         * @throws {SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
         * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         * @throws {error.SuiteScriptError} CANNOT_RESUBMIT_SUBMITTED_ASYNC_PIVOT_TASK an attempt to submit a pivot execution task instance which has been submitted successfully before
         * @throws {SuiteScriptError} PIVOT_EXECUTION_DEPENDENCY_MR_ALREADY_SUBMITTED map reduce dependency has had already been submitted and has not finished yet
         * @throws {SuiteScriptError} PIVOT_EXECUTION_DEPENDENCY_MR_INCORRECT_STATUS status of map reduce dependency script is incorrect, it has to be "Not Scheduled"
         * @throws {SuiteScriptError} PIVOT_EXECUTION_DEPENDENCY_SS_ALREADY_SUBMITTED scheduled script dependency has had already been submitted and has not finished yet
         * @throws {SuiteScriptError} PIVOT_EXECUTION_DEPENDENCY_SS_INCORRECT_STATUS status of scheduled script dependency script is incorrect, it has to be "Not Scheduled"
         * @throws {SuiteScriptError} PIVOT_EXECUTION_DEPLOYMENT_FOR_DEPENDENCY no available deployment was found for dependency
         * @throws {SuiteScriptError} PIVOT_EXECUTION_MULTIPLE_DEPENDENCIES multiple dependencies with the same script id were submitted
         * @throws {SuiteScriptError} PIVOT_EXECUTION_SCRIPT_ID_NOT_FOUND script with the entered id was not found
         *
         * @since 2021.2
         */        
        this.submit = function() {};        
        
        /**
         * Returns the object type name (task.PivotExecutionTask)
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
         * @since 2015.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class PivotTaskStatus
     * @classdesc Encapsulates the status of a pivot execution
     * @protected
     * @constructor
     *
     * @since 2015.2
     */    
    function PivotTaskStatus() {    
        
        /**
         * The taskId associated with the specified task.
         * @name PivotTaskStatus#taskId
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.taskId = undefined;        
        /**
         * Represents the task status. Returns one of the task.TaskStatus enum values.
         * @name PivotTaskStatus#status
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.status = undefined;        
        /**
         * Returns the object type name (task.PivotTaskStatus).
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
         * @since 2021.2
         */        
        this.toJSON = function() {};        
    }    
    
    N.task = task;
    
    /**
     * @exports N/task
     */
    return task;
});