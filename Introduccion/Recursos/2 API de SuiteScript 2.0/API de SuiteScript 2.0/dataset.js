/**
 * SuiteScript dataset module
 * Create/Load a dataset and execute it using the SuiteAnalytics Workbook query engine. Or use it as a data source for the workbook
 * itself.
 *
 * @module N/dataset
 * @suiteScriptVersion 2.x
 */
define([], function(){        
    /**
     * @namespace dataset
     */    
    var dataset = {};    
            
    /**
     * @class Dataset
     * @classDescription Object representing SuiteAnalytics dataset
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function Dataset() {    
        
        /**
         * Executes the dataset and returns the result set (the same as in query module)
         * @restriction Server SuiteScript only
         * @governance 10 units
         * @param {Object} options
         * @param {string} options.metadataProvider
         * @return {ResultSet}
         *
         * @since 2020.2
         */        
        this.run = function(options) {};        
        this.run.promise = function(options) {};        
        
        /**
         * Executes the dataset and returns paginated data (the same as in query module)
         * @restriction Server SuiteScript only
         * @governance 10 units
         * @param {Object} options
         * @param {number} options.pageSize
         * @param {string} options.metadataProvider
         * @return {PagedData}
         *
         * @since 2020.2
         */        
        this.runPaged = function(options) {};        
        this.runPaged.promise = function(options) {};        
        
        /**
         * Returns expression which can be used in workbook
         * @restriction Server SuiteScript only
         * @governance none
         * @param {Object} options
         * @param {number} options.columnId
         * @param {string} options.alias
         * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS both columnId and alias are used
         * @throws {SuiteScriptError} NEITHER_ARGUMENT_DEFINED neither columnId nor alias parameters are defined
         * @return {Expression}
         *
         * @since 2020.2
         */        
        this.getExpressionFromColumn = function(options) {};        
        
        /**
         * Saves the dataset
         * @restriction Server SuiteScript only
         * @governance 10 units
         * @param {Object} options
         * @param {string|Expression} options.name name of the dataset
         * @param {string|Expression} [options.description] decription of the dataset
         * @param {string} [options.id] target id for the saved dataset
         * @throws {SuiteScriptError} INVALID_ID_PREFIX when desired dataset id does not start with 'custdataset'
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.save = function(options) {};        
        
        /**
         * Condition for the whole dataset (criterion)
         * @name Dataset#condition
         * @type {Condition}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when assigning something else than dataset.Condition
         *
         * @since 2020.2
         */        
        this.condition = undefined;        
        /**
         * id of the dataset
         * @name Dataset#id
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when assigning something else than string
         *
         * @since 2020.2
         */        
        this.id = undefined;        
        /**
         * Columns in the dataset
         * @name Dataset#columns
         * @type {Array<Column>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when assigning something else than Array<dataset.Column>
         *
         * @since 2020.2
         */        
        this.columns = undefined;        
        /**
         * base record type
         * @name Dataset#type
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when assigning something else than string
         * @throws {SuiteScriptError} INVALID_SEARCH_TYPE when the type is invalid
         *
         * @since 2020.2
         */        
        this.type = undefined;        
        /**
         * Name of the dataset
         * @name Dataset#name
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.name = undefined;        
        /**
         * Description of the dataset
         * @name Dataset#description
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.description = undefined;        
        /**
         * Returns the object type name (dataset.Dataset)
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
     * @class Column
     * @classDescription Object representing dataset column
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function Column() {    
        
        /**
         * formula of the column
         * @name Column#formula
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.formula = undefined;        
        /**
         * label of the column
         * @name Column#label
         * @type {string|Expression}
         * @readonly
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.label = undefined;        
        /**
         * alias of the column
         * @name Column#alias
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting value of different type than string
         *
         * @since 2020.2
         */        
        this.alias = undefined;        
        /**
         * internal id of the column, populated only in loaded datasets
         * @name Column#id
         * @type {number}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting value of different type than string
         *
         * @since 2021.2
         */        
        this.id = undefined;        
        /**
         * return type of the formula
         * @name Column#type
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.type = undefined;        
        /**
         * Join for the column, polulated only if the column is not on a base record
         * @name Column#join
         * @type {Join}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.join = undefined;        
        /**
         * id of the field of the column
         * @name Column#fieldId
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.fieldId = undefined;        
        /**
         * Returns the object type name (dataset.Column)
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
     * @class Condition
     * @classDescription Object dataset condition
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function Condition() {    
        
        /**
         * column on which the condition is placed
         * @name Condition#column
         * @type {Column}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.column = undefined;        
        /**
         * children of this condition (e. g. subconditions ANDed or ORed)
         * @name Condition#children
         * @type {Array<Condition>}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.children = undefined;        
        /**
         * operator of the condition
         * @name Condition#operator
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         */        
        this.operator = undefined;        
        /**
         * values for this condition
         * @name Condition#values
         * @type {Array<Date | number | string | boolean | Object>}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         */        
        this.values = undefined;        
        /**
         * Indicates whether the sort is case sensitive.
         * @name Condition#caseSensitive
         * @type {Boolean}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when setting non-boolean parameter
         *
         * @since 2018.2
         */        
        this.caseSensitive = undefined;        
        /**
         * Returns the object type name (dataset.Condition)
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
     * @class Join
     * @classDescription object for joining fields from other record types
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function Join() {    
        
        /**
         * id of the field on which the join was performed
         * @name Join#fieldId
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.fieldId = undefined;        
        /**
         * source record type of the join
         * @name Join#source
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.source = undefined;        
        /**
         * polymorphic target of the join
         * @name Join#target
         * @type {string}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.target = undefined;        
        /**
         * child join if this is a multilevel join
         * @name Join#join
         * @type {Join}
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.join = undefined;        
        /**
         * Returns the object type name (dataset.Join)
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
     * Create a Dataset join
     * @restriction Server SuiteScript only
     * @governance none
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {string=} options.source - for inverse joins
     * @param {string=} options.target - for polymorphic joins
     * @param  {Join=}  options.join - for multi-level joins
     * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS when both source and target parameters are specified
     * @return {Join}
     *
     * @since 2020.2
     */    
    function createJoin() {    
    }    
        
    /**
     * Create a Dataset object
     * @restriction Server SuiteScript only
     * @governance none
     * @param {Object} options
     * @param {string} options.type Record type on which to build the dataset
     * @param {Condition} [options.condition] Dataset's condition
     * @param {Array<Column>} [options.columns] Dataset's columns
     * @throws {SuiteScriptError} INVALID_SEARCH_TYPE when the type is invalid
     * @return {Dataset}
     *
     * @since 2020.2
     */    
    function createDataset() {    
    }    
        
    /**
     * Loads a dataset
     * @restriction Server SuiteScript only
     * @governance 10 units
     * @param {Object} options
     * @param {string} options.id id of the dataset to load
     * @return {Dataset}
     *
     * @since 2020.2
     */    
    function loadDataset() {    
    }    
        
    /**
     * Creates a dataset column
     * @restriction Server SuiteScript only
     * @governance none
     * @param {Object} options
     * @param {string} [options.formula] formula for the column
     * @param {string} [options.type] return type of the formula
     * @param {string} [options.fieldId] fieldId for the column (exclusive with formula/type)
     * @param {string|Expression} [options.label] label for the column to display in UI
     * @param {string} [options.alias] Alias for the column which can be used to get corresponding expression for the column,
     *     which can later be used in a workbook, also used in results mapping
     * @param {Join} options.join join record on which the field is present
     * @throws {SuiteScriptError} INVALID_FORMULA_TYPE when invalid formula return type was entered
     * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS when both formula and fieldId parameters are specified, or both
     *     formula and join are specified
     * @return {Column}
     *
     * @since 2020.2
     */    
    function createColumn() {    
    }    
        
    /**
     * Creates a Dataset condition
     * @restriction Server SuiteScript only
     * @governance none
     * @param {Object} options
     * @param {Column=} options.column column to apply this filter on
     * @param {string} options.operator filter's operator
     * @param {Array<string | number | boolean | Date | Object>=} options.values
     * @param {Array<Condition>} options.children child conditions (when AND/OR operator is used)
     * @throws {SuiteScriptError} INVALID_OPERATOR if invalid operator is used
     * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS when both column and children parameters are specified
     * @return {Condition}
     *
     * @since 2020.2
     */    
    function createCondition() {    
    }    
        
    /**
     * Create translation expression
     * @param {Object} options
     * @param {string} {options.key} Key of the translation
     * @param {string} {options.collection} Collection of the translation
     * @return {Expression} Expression for the translation
     *
     * @since 2021.2
     */    
    function createTranslation() {    
    }    
        
    /**
     * Describes a dataset. Returns name, description and list of columns/formulas with their labels and types
     * @restriction Server SuiteScript only
     * @governance 10 units
     * @param {Object} options
     * @param {string} options.id id of the dataset to describe
     * @return {Array<Object>}
     *
     * @since 2021.1
     */    
    function describe() {    
    }    
    
    N.dataset = dataset;
    
    /**
     * @exports N/dataset
     */
    return dataset;
});