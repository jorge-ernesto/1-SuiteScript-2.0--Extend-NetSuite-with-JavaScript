/**
 * SuiteScript workbook module
 * Create/Load a workbook with possibility to execute Pivots and TableViews
 *
 * @module N/workbook
 * @suiteScriptVersion 2.x
 */
define([], function(){        
    /**
     * @namespace workbook
     */    
    var workbook = {};    
        
    /**
     * @enum {string}
     * @readonly
     */    
    function workbookStacking() {
        this.DISABLED = 'DISABLED';
        this.NORMAL = 'NORMAL';
        this.PERCENT = 'PERCENT';
    }
    
    workbook.prototype.Stacking = new workbookStacking();    
    
    /**
     * @enum {string}
     * @readonly
     */    
    function workbookChartType() {
        this.AREA = 'AREA';
        this.BAR = 'BAR';
        this.LINE = 'LINE';
        this.COLUMN = 'COLUMN';
    }
    
    workbook.prototype.ChartType = new workbookChartType();    
    
    /**
     * @enum {string}
     * @readonly
     */    
    function workbookAspectType() {
        this.VALUE = 'value';
        this.COLOR = 'color';
    }
    
    workbook.prototype.AspectType = new workbookAspectType();    
    
    /**
     * @enum {string}
     * @readonly
     */    
    function workbookTotalLine() {
        this.HIDDEN = 'HIDDEN';
        this.FIRST_LINE = 'FIRST_LINE';
        this.LAST_LINE = 'LAST_LINE';
    }
    
    workbook.prototype.TotalLine = new workbookTotalLine();    
    
    /**
     * @enum {string}
     * @readonly
     */    
    function workbookColor() {
        this.BLACK = 'BLACK';
        this.BLUE = 'BLUE';
        this.BROWN = 'BROWN';
        this.GRAY = 'GRAY';
        this.GREEN = 'GREEN';
        this.ORANGE = 'ORANGE';
        this.PINK = 'PINK';
        this.PURPLE = 'PURPLE';
        this.RED = 'RED';
        this.YELLOW = 'YELLOW';
        this.WHITE = 'WHITE';
    }
    
    workbook.prototype.Color = new workbookColor();    
    
    /**
     * @enum {string}
     * @readonly
     */    
    function workbookImage() {
        this.EXCLAMATION = 'EXCLAMATION';
        this.QUESTION = 'QUESTION';
        this.SMILE = 'SMILE';
    }
    
    workbook.prototype.Image = new workbookImage();    
    
    /**
     * @enum {string}
     * @readonly
     */    
    function workbookUnit() {
        this.CM = 'CM';
        this.MM = 'MM';
        this.IN = 'IN';
        this.PX = 'PX';
        this.PT = 'PT';
        this.PC = 'PC';
        this.EM = 'EM';
        this.EX = 'EX';
        this.CH = 'CH';
        this.REM = 'REM';
        this.VW = 'VW';
        this.VH = 'VH';
        this.VMIN = 'VMIN';
        this.VMAX = 'VMAX';
    }
    
    workbook.prototype.Unit = new workbookUnit();    
    
    /**
     * @enum {string}
     * @readonly
     */    
    function workbookPosition() {
        this.LEFT = 'LEFT';
        this.RIGHT = 'RIGHT';
        this.CENTER = 'CENTER';
        this.TOP = 'TOP';
        this.BOTTOM = 'BOTTOM';
    }
    
    workbook.prototype.Position = new workbookPosition();    
    
    /**
     * @enum {string}
     * @readonly
     */    
    function workbookFontSize() {
        this.MEDIUM = 'MEDIUM';
        this.XX_SMALL = 'XX_SMALL';
        this.X_SMALL = 'X_SMALL';
        this.SMALL = 'SMALL';
        this.LARGE = 'LARGE';
        this.X_LARGE = 'X_LARGE';
        this.XX_LARGE = 'XX_LARGE';
        this.SMALLER = 'SMALLER';
        this.LARGER = 'LARGER';
    }
    
    workbook.prototype.FontSize = new workbookFontSize();    
    
    /**
     * @enum {string}
     * @readonly
     */    
    function workbookFontStyle() {
        this.NORMAL = 'NORMAL';
        this.ITALIC = 'ITALIC';
        this.OBLIQUE = 'OBLIQUE';
    }
    
    workbook.prototype.FontStyle = new workbookFontStyle();    
    
    /**
     * @enum {string}
     * @readonly
     */    
    function workbookFontWeight() {
        this.NORMAL = 'NORMAL';
        this.BOLD = 'BOLD';
    }
    
    workbook.prototype.FontWeight = new workbookFontWeight();    
    
    /**
     * @enum {string}
     * @readonly
     */    
    function workbookTextAlign() {
        this.LEFT = 'LEFT';
        this.RIGHT = 'RIGHT';
        this.CENTER = 'CENTER';
        this.JUSTIFY = 'JUSTIFY';
    }
    
    workbook.prototype.TextAlign = new workbookTextAlign();    
    
    /**
     * @enum {string}
     * @readonly
     */    
    function workbookTextDecorationLine() {
        this.NONE = 'NONE';
        this.UNDERLINE = 'UNDERLINE';
        this.OVERLINE = 'OVERLINE';
        this.LINE_THROUGH = 'LINE_THROUGH';
    }
    
    workbook.prototype.TextDecorationLine = new workbookTextDecorationLine();    
    
    /**
     * @enum {string}
     * @readonly
     */    
    function workbookTextDecorationStyle() {
        this.SOLID = 'SOLID';
        this.DOUBLE = 'DOUBLE';
        this.DOTTED = 'DOTTED';
        this.DASHED = 'DASHED';
        this.WAVY = 'WAVY';
    }
    
    workbook.prototype.TextDecorationStyle = new workbookTextDecorationStyle();    
    
    /**
     * @enum {string}
     * @readonly
     */    
    function workbookAggregation() {
        this.AVG = 'AVG';
        this.MIN = 'MIN';
        this.MAX = 'MAX';
        this.MEDIAN = 'MEDIAN';
        this.COUNT = 'COUNT';
        this.COUNT_DISTINCT = 'COUNT_DISTINCT';
        this.SUM = 'SUM';
    }
    
    workbook.prototype.Aggregation = new workbookAggregation();    
        
    /**
     * @class DescendantOrSelfNodesSelector
     * @classDescription Used to select all sub nodes from a certain path in a pivot
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function DescendantOrSelfNodesSelector() {    
        
        /**
         * Returns the object type name (workbook.DescendantOrSelfNodesSelector)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class Aspect
     * @classDescription Aspect of a series in a chart
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function Aspect() {    
        
        /**
         * type of this aspect - color|measure
         * @name Aspect#type
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_ASPECT_TYPE when the type outside of the AspectType enum
         *
         * @since 2020.2
         */        
        this.type = undefined;        
        /**
         * measure of this aspect
         * @name Aspect#measure
         * @type {DataMeasure | CalculatedMeasure}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.measure = undefined;    }    
        
    /**
     * @class Category
     * @classDescription Category of a chart
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function Category() {    
        
        /**
         * Axis for this category
         * @name Category#axis
         * @type {ChartAxis}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.axis = undefined;        
        /**
         * Section or data dimension
         * @name Category#root
         * @type {Section | DataDimension}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.root = undefined;        
        /**
         * Sort definitions
         * @name Category#sortDefinitions
         * @type {Array<SortDefinition>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.sortDefinitions = undefined;        
        /**
         * Returns the object type name (workbook.Category)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class Chart
     * @classDescription Object representing a chart of a workbook
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function Chart() {    
        
        /**
         * name of the chart
         * @name Chart#name
         * @type {string | Expression}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.name = undefined;        
        /**
         * portlet name of the chart
         * @name Chart#portletName
         * @type {string | Expression}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.2
         */        
        this.portletName = undefined;        
        /**
         * title of the chart
         * @name Chart#title
         * @type {string | Expression}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.title = undefined;        
        /**
         * Subtitle of the chart
         * @name Chart#subTitle
         * @type {string | Expression}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.subTitle = undefined;        
        /**
         * id of the chart
         * @name Chart#id
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.id = undefined;        
        /**
         * stacking settings
         * @name Chart#stacking
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_STACKING_TYPE when assigned value is outside of Stacking enum
         *
         * @since 2020.2
         */        
        this.stacking = undefined;        
        /**
         * Filter expressions
         * @name Chart#filterExpressions
         * @type {Array<Expression>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.filterExpressions = undefined;        
        /**
         * Limiting and conditional filters
         * @name Chart#aggregationFilters
         * @type {Array<LimitingFilter> | Array<ConditionalFilter>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.aggregationFilters = undefined;        
        /**
         * Legend of the chart
         * @name Chart#legend
         * @type {Legend}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @since 2020.2
         */        
        this.legend = undefined;        
        /**
         * Category of the chart
         * @name Chart#category
         * @type {Category}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @since 2020.2
         */        
        this.category = undefined;        
        /**
         * Series of the chart
         * @name Chart#series
         * @type {Series}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @since 2020.2
         */        
        this.series = undefined;        
        /**
         * Type of the chart
         * @name Chart#type
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_CHART_TYPE when value outside of ChartType enum is used for type parameter
         *
         * @since 2020.2
         */        
        this.type = undefined;        
        /**
         * Underlying dataset
         * @name Chart#dataset
         * @type {Dataset}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.dataset = undefined;        
        /**
         * Underlying datasetLink
         * @name Chart#datasetLink
         * @type {DatasetLink}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.datasetLink = undefined;        
        /**
         * Returns the object type name (workbook.Chart)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class ChartAxis
     * @classDescription Axis of a chart
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function ChartAxis() {    
        
        /**
         * Title of the axis
         * @name ChartAxis#title
         * @type {string | Expression}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.title = undefined;        
        /**
         * Returns the object type name (workbook.ChartAxis)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class ChildNodesSelector
     * @classDescription Used to select all child nodes from a certain path in a pivot
     * @constructor
     * @protected
     *
     * @since 2021.2
     */    
    function ChildNodesSelector() {    
        
        /**
         * Returns the object type name (workbook.ChildNodesSelector)
         * @governance none
         * @return {string}
         *
         * @since 2021.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class ConditionalFilter
     * @classDescription Object for pivot filtering based on a measure
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function ConditionalFilter() {    
        
        /**
         * Indicator, whether filtering is appliad on rows (on columns if set to false)
         * @name ConditionalFilter#row
         * @type {boolean}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.row = undefined;        
        /**
         * Measure for this filter
         * @name ConditionalFilter#measure
         * @type {DataMeasure | CalculatedMeasure}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.measure = undefined;        
        /**
         * Row selector
         * @name ConditionalFilter#rowSelector
         * @type {DescendantOrSelfNodesSelector | PathSelector | DimensionSelector | ChildNodesSelector}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.rowSelector = undefined;        
        /**
         * Column selector
         * @name ConditionalFilter#columnSelector
         * @type {DescendantOrSelfNodesSelector | PathSelector | DimensionSelector | ChildNodesSelector}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.columnSelector = undefined;        
        /**
         * The actual predicate which sayes whether the condition is met
         * @name ConditionalFilter#predicate
         * @type {Expression}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.predicate = undefined;        
        /**
         * Returns the object type name (dataset.Dataset)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class DataDimension
     * @classDescription Object representing data dimension in a pivot
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function DataDimension() {    
        
        /**
         * Value of total line - HIDDEN/FIRST_LINE/LAST_LINE
         * @name DataDimension#totalLine
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_TOTAL_LINE when the value is outside of TotalLine enum
         *
         * @since 2020.2
         */        
        this.totalLine = undefined;        
        /**
         * Children of this data dimension
         * @name DataDimension#children
         * @type {Array<Section> | Array<DataDimension> | Array<DataMeasure> | Array<CalculatedMeasure>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.children = undefined;        
        /**
         * items of this data dimension
         * @name DataDimension#items
         * @type {Array<DataDimensionItem>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.items = undefined;        
        /**
         * Returns the object type name (workbook.DataDimension)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class DataDimensionItem
     * @classDescription Object representing data dimension item of a data dimension
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function DataDimensionItem() {    
        
        /**
         * Label
         * @name DataDimensionItem#label
         * @type {string | Expression}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.label = undefined;        
        /**
         * Expression for data dimension item
         * @name DataDimensionItem#expression
         * @type {Expression}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.expression = undefined;        
        /**
         * Returns the object type name (workbook.DataDimensionItem)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class DimensionSelector
     * @classDescription Used to select a dimension in a pivot
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function DimensionSelector() {    
        
        /**
         * Dimension of this selector
         * @name DimensionSelector#dimension section or data dimension
         * @type {Section | DataDimension}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.dimension = undefined;        
        /**
         * Returns the object type name (workbook.DimensionSelector)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class SortByDataDimensionItem
     * @classDescription Sort by option for data dimension items
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function SortByDataDimensionItem() {    
        
        /**
         * Sort object for this dimension sort
         * @name SortByDataDimensionItem#sort
         * @type {Sort}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.sort = undefined;        
        /**
         * Data dimension item
         * @name SortByDataDimensionItem#item
         * @type {DataDimensionItem}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.item = undefined;        
        /**
         * Returns the object type name (workbook.SortByDataDimensionItem)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class FieldContext
     * @classDescription Object for specifying in which context should the field in the table view column be displayed
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function FieldContext() {    
        
        /**
         * Name of the context (DISPLAY, CURRENCY_CONSOLIDATED, CONVERTED ...)
         * @name FieldContext#name
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.name = undefined;        
        /**
         * parameters of the context
         * @name FieldContext#parameters
         * @type {Object}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.parameters = undefined;        
        /**
         * Returns the object type name (workbook.FieldContext)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class LimitingFilter
     * @classDescription Object representing limiting aggregation filter
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function LimitingFilter() {    
        
        /**
         * Row axis indicator
         * @name LimitingFilter#row
         * @type {boolean}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.row = undefined;        
        /**
         * Sort by elements of this filter
         * @name LimitingFilter#sortBys
         * @type {Array<SortByDataDimensionItem> | Array<SortByMeasure>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.sortBys = undefined;        
        /**
         * What to filter
         * @name LimitingFilter#filteredNodesSelector
         * @type {DescendantOrSelfNodesSelector | PathSelector | DimensionSelector | ChildNodesSelector}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.filteredNodesSelector = undefined;        
        /**
         * Limit number for this filter
         * @name LimitingFilter#limit
         * @type {number}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.limit = undefined;        
        /**
         * Returns the object type name (workbook.LimitingFilter)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class CalculatedMeasure
     * @classDescription Object representing calculated measure to be used in pivot or chart
     * @constructor
     * @protected
     *
     * @since 2021.1
     */    
    function CalculatedMeasure() {    
        
        /**
         * expression for this calculated measure
         * @name CalculatedMeasure#expression
         * @type {Expression}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.1
         */        
        this.expression = undefined;        
        /**
         * label of the measure
         * @name CalculatedMeasure#label
         * @type {string | Expression}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.1
         */        
        this.label = undefined;        
        /**
         * Returns the object type name (workbook.CalculatedMeasure)
         * @governance none
         * @return {string}
         *
         * @since 2021.1
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.1
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class DataMeasure
     * @classDescription Object representing data measure to be used in pivot or chart
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function DataMeasure() {    
        
        /**
         * desired aggregation of the measure
         * @name DataMeasure#aggregation
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_AGGREGATION when the the value is outside of Aggregation enum
         * @throws {SuiteScriptError} EXPRESSIONS_MUST_BE_SPECIFIED_WHEN_USING_COUNT_DISTINCT_AGGREGATION when trying to assign count distinct aggregation while expressions are not specified
         * @throws {SuiteScriptError} EXPRESSION_MUST_BE_SPECIFIED_WHEN_USING_OTHER_THAN_COUNT_DISTINCT_AGGREGATION when trying to assign other that count distinct aggregation while expression is not specified
         *
         * @since 2020.2
         */        
        this.aggregation = undefined;        
        /**
         * expression for this measure, used if this is a single expression measure (cannot be used when doing COUNT_DISTINCT aggregation)
         * @name DataMeasure#expression
         * @type {Expression}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS when expressions are already defined
         * @throws {SuiteScriptError} EXPRESSION_CANNOT_BE_SPECIFIED_WHEN_USING_COUNT_DISTINCT_AGGREGATION when count distinct aggregation is used
         *
         * @since 2020.2
         */        
        this.expression = undefined;        
        /**
         * expressions for this measure, used if this is a multi expression measure (needed when COUNT_DISTINCT aggregation is used)
         * @name DataMeasure#expressions
         * @type {Array<Expression>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS expression is already defined
         * @throws {SuiteScriptError} AT_LEAST_ONE_EXPRESSION_IS_NEEDED supplied expressions array is empty
         * @throws {SuiteScriptError} EXPRESSIONS_CANNOT_BE_SPECIFIED_WHEN_USING_OTHER_THAN_COUNT_DISTINCT_AGGREGATION when other than count distinct aggregation is used
         *
         * @since 2020.2
         */        
        this.expressions = undefined;        
        /**
         * label of the measure
         * @name DataMeasure#label
         * @type {string | Expression}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.label = undefined;        
        /**
         * Returns the object type name (workbook.DataMeasure)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class Legend
     * @classDescription Legend of a chart
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function Legend() {    
        
        /**
         * Axes of this legend
         * @name Legend#axes
         * @type {Array<ChartAxis>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.axes = undefined;        
        /**
         * Section or data dimension
         * @name Legend#root
         * @type {Section | DataDimension}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.root = undefined;        
        /**
         * Sort definitions
         * @name Legend#sortDefinitions
         * @type {Array<SortDefinition>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.sortDefinitions = undefined;        
        /**
         * Returns the object type name (workbook.Legend)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class MeasureSelector
     * @classDescription Selector for measures to be used in conditional formatting of pivot
     * @constructor
     * @protected
     *
     * @since 2021.1
     */    
    function MeasureSelector() {    
        
        /**
         * Measures of this selector
         * @name MeasureSelector#measures
         * @type {Array<CalculatedMeasure> | Array<DataMeasure>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the array is empty
         *
         * @since 2021.1
         */        
        this.measures = undefined;        
        /**
         * Returns the object type name (workbook.MeasureSelector)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.1
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class SortByMeasure
     * @classDescription Sort by option for measures
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function SortByMeasure() {    
        
        /**
         * Sort object for this sort
         * @name SortByMeasure#sort
         * @type {Sort}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.sort = undefined;        
        /**
         * This sort's measure
         * @name SortByMeasure#parameters
         * @type {DataMeasure | CalculatedMeasure}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         */        
        this.measure = undefined;        
        /**
         * In a sort definition, the sort is applied to a row or column, this is the selector for the other axis
         * @name SortByMeasure#otherAxisSelector
         * @type {DescendantOrSelfNodesSelector | PathSelector | DimensionSelector | ChildNodesSelector}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.otherAxisSelector = undefined;        
        /**
         * Returns the object type name (workbook.SortByMeasure)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class MeasureValueSelector
     * @classDescription Selector for selecting a measure value using row, column and list of measures to use
     * @constructor
     * @protected
     *
     * @since 2021.1
     */    
    function MeasureValueSelector() {    
        
        /**
         * Measure selector
         * @name MeasureValueSelector#measureSelector
         * @type {Array<MeasureSelector>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.1
         */        
        this.measureSelector = undefined;        
        /**
         * select row where to apply styling
         * @name ReportStyle#rowSelector
         * @type {DescendantOrSelfNodesSelector | PathSelector | DimensionSelector | ChildNodesSelector}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.1
         */        
        this.rowSelector = undefined;        
        /**
         * select column where to apply styling
         * @name ReportStyle#rowSelector
         * @type {DescendantOrSelfNodesSelector | PathSelector | DimensionSelector | ChildNodesSelector}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.1
         */        
        this.columnSelector = undefined;        
        /**
         * Returns the object type name (workbook.MeasureValueSelector)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.1
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class PathSelector
     * @classDescription Used to select a portion of a pivot aither for sorting or filtering
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function PathSelector() {    
        
        /**
         * Elements denoting 'xpath' of this selector
         * @name DimensionSelector#dimension section or data dimension
         * @type {DescendantOrSelfNodesSelector | DimensionSelector | ChildNodesSelector}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} NO_ELEMENTS_DEFINED when the array is empty
         *
         * @since 2020.2
         */        
        this.elements = undefined;        
        /**
         * Returns the object type name (workbook.PathSelector)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class Pivot
     * @classDescription Object representing SuiteAnalytics pivot
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function Pivot() {    
        
        /**
         * Filter expressions
         * @name Pivot#filterExpressions
         * @type {Array<Expression>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.filterExpressions = undefined;        
        /**
         * Limiting and conditional filters
         * @name Pivot#aggregationFilters
         * @type {Array<LimitingFilter> | Array<ConditionalFilter>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.aggregationFilters = undefined;        
        /**
         * name of the pivot
         * @name Pivot#name
         * @type {string | Expression}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.name = undefined;        
        /**
         * portlet name of the pivot
         * @name Pivot#portletName
         * @type {string | Expression}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.2
         */        
        this.portletName = undefined;        
        /**
         * id of the pivot
         * @name Pivot#id
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.id = undefined;        
        /**
         * Column axis of this pivot
         * @name Pivot#columnAxis
         * @type {PivotAxis}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.columnAxis = undefined;        
        /**
         * Row axis of this pivot
         * @name Pivot#rowAxis
         * @type {PivotAxis}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.rowAxis = undefined;        
        /**
         * Underlying dataset
         * @name Pivot#dataset
         * @type {Dataset}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.dataset = undefined;        
        /**
         * Underlying datasetLink
         * @name Pivot#datasetLink
         * @type {DatasetLink}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.datasetLink = undefined;        
        /**
         * Report styles
         * @name Pivot#reportStyles
         * @type {Array<ReportStyle>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.1
         */        
        this.reportStyles = undefined;        
        /**
         * Returns the object type name (workbook.Pivot)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class Pivot axis
     * @classDescription Pivot axis holds root dimension a its sorts
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function PivotAxis() {    
        
        /**
         * Root data definition
         * @name PivotAxis#root
         * @type {DataDimension | Section}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.root = undefined;        
        /**
         * Sort definitions
         * @name Category#sortDefinitions
         * @type {Array<SortDefinition>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.sortDefinitions = undefined;        
        /**
         * Returns the object type name (workbook.PivotAxis)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class Series
     * @classDescription Series of a chart
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function Series() {    
        
        /**
         * Aspects for this series
         * @name Series#aspects
         * @type {Array<Aspect>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} NO_ASPECTS_DEFINED when the array is empty
         *
         * @since 2020.2
         */        
        this.aspects = undefined;        
        /**
         * Returns the object type name (workbook.Series)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class Section
     * @classDescription Object representing section of a pivot - used for creating a hierarchy tree
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function Section() {    
        
        /**
         * Value of total line - HIDDEN/FIRST_LINE/LAST_LINE
         * @name Section#totalLine
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_TOTAL_LINE when the value is outside of TotalLine enum
         *
         * @since 2020.2
         */        
        this.totalLine = undefined;        
        /**
         * Children of this section
         * @name Section#children
         * @type {Array<CalculatedMeasure> | Array<DataMeasure> | Array<DataDimension> | Array<Section>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} NO_CHILDREN_DEFINED when the array is empty
         *
         * @since 2020.2
         */        
        this.children = undefined;        
        /**
         * Returns the object type name (workbook.Section)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class Sort
     * @classDescription Object which can be used in sort definitions
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function Sort() {    
        
        /**
         * ascending indicator
         * @name Sort#ascending
         * @type {boolean}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.ascending = undefined;        
        /**
         * locale of the sort
         * @name Sort#locale
         * @type {string}
         * @throws {SuiteScriptError} INVALID_SORT_LOCALE if the locale is invalid
         *
         * @since 2020.2
         */        
        this.locale = undefined;        
        /**
         * nullsLast indicator
         * @name Sort#nullsLast
         * @type {boolean}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.nullsLast = undefined;        
        /**
         * case sensitivity indicator
         * @name Sort#caseSensitive
         * @type {boolean}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.caseSensitive = undefined;        
        /**
         * sort order indicator
         * @name Sort#order
         * @type {number}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2022.2
         */        
        this.order = undefined;        
        /**
         * Returns the object type name (workbook.Sort)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class SortDefinition
     * @classDescription Object used for defining a sort in a pivot or chart
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function SortDefinition() {    
        
        /**
         * Dimension and measure sorts
         * @name LimitingFilter#sortBys
         * @type {Array<SortByDataDimensionItem> | Array<SortByMeasure>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.sortBys = undefined;        
        /**
         * Selector for this definition
         * @name SortDefinition#selector
         * @type {DescendantOrSelfNodesSelector | PathSelector | DimensionSelector | ChildNodesSelector}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.selector = undefined;        
        /**
         * Returns the object type name (workbook.SortDefinition)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class Table
     * @classDescription Object representing SuiteAnalytics table
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function Table() {    
        
        /**
         * Dataset used in table view
         * @name Table#dataset
         * @type {Dataset}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.dataset = undefined;        
        /**
         * name of the table view
         * @name Table#name
         * @type {string | Expression}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.name = undefined;        
        /**
         * portlet name of the table view
         * @name Table#portletName
         * @type {string | Expression}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.2
         */        
        this.portletName = undefined;        
        /**
         * id of the table view
         * @name Table#id
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.id = undefined;        
        /**
         * Columns used in table view
         * @name Table#columns
         * @type {Array<TableColumn>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.columns = undefined;    }    
        
    /**
     * @class TableColumn
     * @classDescription Column of a table view
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function TableColumn() {    
        
        /**
         * condition for the column
         * @name TableColumn#condition
         * @type {TableColumnCondition}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.1
         */        
        this.condition = undefined;        
        /**
         * conditional formats for the column
         * @name TableColumn#conditionalFormats
         * @type {Array<ConditionalFormat>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.conditionalFormats = undefined;        
        /**
         * Context specification for the field used in this column
         * @name TableColumn#fieldContext
         * @type {FieldContext}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.fieldContext = undefined;        
        /**
         * Alias of dataset column from which was this column created
         * @name TableColumn#datasetColumnAlias
         * @type {number}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS datasetColumnId is already defined
         *
         * @since 2020.2
         */        
        this.datasetColumnAlias = undefined;        
        /**
         * desired width of the column in UI
         * @name TableColumn#width
         * @type {number}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         */        
        this.width = undefined;        
        /**
         * label of the column
         * @name TableColumn#label
         * @type {string | Expression}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.label = undefined;        
        /**
         * Returns the object type name (workbook.TableColumn)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class TableColumnFilter
     * @classDescription Filter for a table view column
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function TableColumnFilter() {    
        
        /**
         * values for this filter
         * @name TableColumnFilter#values
         * @type {Array<boolean> | Array<number> | Array<string> | Array<Date> | Array<Object>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.values = undefined;        
        /**
         * operator of this filter
         * @name TableColumnFilter#operator
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID OPERATOR when the value is outside of query.Operator enum
         *
         * @since 2020.2
         */        
        this.operator = undefined;        
        /**
         * Returns the object type name (workbook.TableColumnFilter)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class TableColumnCondition
     * @classDescription Condition for a table view column
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function TableColumnCondition() {    
        
        /**
         * filters for this condition
         * @name TableColumnCondition#filters
         * @type {Array<TableColumnFilter>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.filters = undefined;        
        /**
         * operator of this filter
         * @name TableColumnCondition#operator
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID OPERATOR when the value is neither AND nor OR
         *
         * @since 2020.2
         */        
        this.operator = undefined;        
        /**
         * Returns the object type name (workbook.TableColumnCondition)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.1
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class ReportStyle
     * @classDescription Conditional formatting object for reports
     * @constructor
     * @protected
     *
     * @since 2021.1
     */    
    function ReportStyle() {    
        
        /**
         * Selectors
         * @name ReportStyle#selectors
         * @type {Array<MeasureValueSelector>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} NO_SELECTORS_DEFINED when the array is empty
         *
         * @since 2021.1
         */        
        this.selectors = undefined;        
        /**
         * measure of this report style
         * @name ReportStyle#measure
         * @type {DataMeasure | CalculatedMeasure}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.1
         */        
        this.measure = undefined;        
        /**
         * Formatting rules for this report style
         * @name ReportStyle#rules
         * @type {Array<ReportStyleRule>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} NO_RULE_DEFINED when the array is empty
         *
         * @since 2021.1
         */        
        this.rules = undefined;        
        /**
         * Returns the object type name (workbook.ReportStyle)
         * @governance none
         * @return {string}
         *
         * @since 2021.1
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.1
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class ConditionalFormat
     * @classDescription Conditional format object holding conditional format rules
     * @constructor
     * @protected
     *
     * @since 2021.1
     */    
    function ConditionalFormat() {    
        
        /**
         * Formatting rules for this conditional format
         * @name ConditionalFormat#rules
         * @type {Array<ConditionalFormatRule>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} NO_RULE_DEFINED when the array is empty
         *
         * @since 2021.1
         */        
        this.rules = undefined;        
        /**
         * Returns the object type name (workbook.ConditionalFormat)
         * @governance none
         * @return {string}
         *
         * @since 2021.1
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.1
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class ConditionalFormatRule
     * @classDescription Conditional format rule object for styling resulting cells of a table column
     * @constructor
     * @protected
     *
     * @since 2021.1
     */    
    function ConditionalFormatRule() {    
        
        /**
         * filter determining which rows/cells to apply the style to
         * @name ConditionalFormatRule#filter
         * @type {TableColumnFilter}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.1
         */        
        this.filter = undefined;        
        /**
         * style for particular row/cell
         * @name ConditionalFormatRule#style
         * @type {Style}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.1
         */        
        this.style = undefined;        
        /**
         * Returns the object type name (workbook.ConditionalFormatRule)
         * @governance none
         * @return {string}
         *
         * @since 2021.1
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.1
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class Color
     * @classDescription Color for row/cell background
     * @constructor
     * @protected
     *
     * @since 2021.1
     */    
    function Color() {    
        
        /**
         * red portion of the color
         * @name Color#red
         * @type {number}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_COLOR_VALUE when the value is not between 0 and 255
         *
         * @since 2021.1
         */        
        this.red = undefined;        
        /**
         * green portion of the color
         * @name Color#green
         * @type {number}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_COLOR_VALUE when the value is not between 0 and 255
         *
         * @since 2021.1
         */        
        this.green = undefined;        
        /**
         * blue portion of the color
         * @name Color#blue
         * @type {number}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_COLOR_VALUE when the value is not between 0 and 255
         *
         * @since 2021.1
         */        
        this.blue = undefined;        
        /**
         * opacity - transparency of the color
         * @name Color#alpha
         * @type {number}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_ALPHA_VALUE when the value is not between 0 and 255
         *
         * @since 2021.1
         */        
        this.alpha = undefined;        
        /**
         * Returns the object type name (workbook.Color)
         * @governance none
         * @return {string}
         *
         * @since 2021.1
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.1
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class PositionPercent
     * @classDescription Position background using percentage values
     * @constructor
     * @protected
     *
     * @since 2021.1
     */    
    function PositionPercent() {    
        
        /**
         * Percent of X dimension
         * @name PositionPercent#percentX
         * @type {number}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.1
         */        
        this.percentX = undefined;        
        /**
         * Percent of Y dimension
         * @name PositionPercent#percentY
         * @type {number}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.1
         */        
        this.percentY = undefined;        
        /**
         * Returns the object type name (workbook.PositionPercent)
         * @governance none
         * @return {string}
         *
         * @since 2021.1
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.1
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class PositionValues
     * @classDescription Position background using horizontal and vertical values
     * @constructor
     * @protected
     *
     * @since 2021.1
     */    
    function PositionValues() {    
        
        /**
         * Horizontal setting
         * @name PositionValues#horizontal
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_POSITION when the assigned value is outside of Position enum
         *
         * @since 2021.1
         */        
        this.horizontal = undefined;        
        /**
         * Vertical setting
         * @name PositionPercent#vertical
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_POSITION when the assigned value is outside of Position enum
         *
         * @since 2021.1
         */        
        this.vertical = undefined;        
        /**
         * Returns the object type name (workbook.PositionValues)
         * @governance none
         * @return {string}
         *
         * @since 2021.1
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.1
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class PositionUnits
     * @classDescription Position background using selected units
     * @constructor
     * @protected
     *
     * @since 2021.1
     */    
    function PositionUnits() {    
        
        /**
         * X setting
         * @name PositionUnits#x
         * @type {number}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.1
         */        
        this.x = undefined;        
        /**
         * Y setting
         * @name PositionUnits#y
         * @type {number}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.1
         */        
        this.y = undefined;        
        /**
         * Units setting
         * @name PositionUnits#unit
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_UNIT when assigned value is outside of Unit enum
         *
         * @since 2021.1
         */        
        this.unit = undefined;        
        /**
         * Returns the object type name (workbook.PositionUnits)
         * @governance none
         * @return {string}
         *
         * @since 2021.1
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.1
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class FontSize
     * @classDescription Font size defined by units
     * @constructor
     * @protected
     *
     * @since 2021.1
     */    
    function FontSize() {    
        
        /**
         * Size
         * @name FontSize#size
         * @type {number}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.1
         */        
        this.size = undefined;        
        /**
         * Units of the font size
         * @name FontSize#unit
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_UNIT when assigned value is outside of Unit enum
         *
         * @since 2021.1
         */        
        this.unit = undefined;        
        /**
         * Returns the object type name (workbook.PositionUnits)
         * @governance none
         * @return {string}
         *
         * @since 2021.1
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.1
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class Style
     * @classDescription Style to be used in conditional filter
     * @constructor
     * @protected
     *
     * @since 2021.1
     */    
    function Style() {    
        
        /**
         * Background image
         * @name Style#backgroundImage
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_IMAGE when assigned value is outside of Image enum
         *
         * @since 2021.1
         */        
        this.backgroundImage = undefined;        
        /**
         * Background color
         * @name Style#backgroundColor
         * @type {Color | string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} UNSUPPORTED_COLOR when a string value outside of Color enum is used to set the value
         *
         * @since 2021.1
         */        
        this.backgroundColor = undefined;        
        /**
         * Background position
         * @name Style#backgroundPosition
         * @type {PositionUnits | PositionValues | PositionPercent}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2021.1
         */        
        this.backgroundPosition = undefined;        
        /**
         * Font size
         * @name Style#fontSize
         * @type {string | FontSize}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_FONT_SIZE when assigned value is outside of FontSize enum
         *
         * @since 2021.1
         */        
        this.fontSize = undefined;        
        /**
         * Font style
         * @name Style#fontStyle
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_FONT_STYLE when assigned value is outside of FontStyle enum
         *
         * @since 2021.1
         */        
        this.fontStyle = undefined;        
        /**
         * Font weight
         * @name Style#fontWeight
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_FONT_WEIGHT when assigned value is outside of FontWeight enum
         *
         * @since 2021.1
         */        
        this.fontWeight = undefined;        
        /**
         * Text align
         * @name Style#textAlign
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_TEXT_ALIGN when assigned value is outside of TextAlign enum
         *
         * @since 2021.1
         */        
        this.textAlign = undefined;        
        /**
         * Color
         * @name Style#color
         * @type {Color | string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} UNSUPPORTED_COLOR when a string value outside of Color enum is used to set the value
         *
         * @since 2021.1
         */        
        this.color = undefined;        
        /**
         * Text decoration color
         * @name Style#textDecorationColor
         * @type {Color | string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} UNSUPPORTED_COLOR when a string value outside of Color enum is used to set the value
         *
         * @since 2021.1
         */        
        this.textDecorationColor = undefined;        
        /**
         * Text decoration line
         * @name Style#textDecorationLine
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_TEXT_DECORATION_LINE when assigned value is outside of TextDecorationLine enum
         *
         * @since 2021.1
         */        
        this.textDecorationLine = undefined;        
        /**
         * Text decoration style
         * @name Style#textDecorationStyle
         * @type {string}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         * @throws {SuiteScriptError} INVALID_TEXT_DECORATION_STYLE when assigned value is outside of TextDecorationStyle enum
         *
         * @since 2021.1
         */        
        this.textDecorationStyle = undefined;        
        /**
         * Returns the object type name (workbook.Style)
         * @governance none
         * @return {string}
         *
         * @since 2021.1
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.1
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class PivotResultsIterator
     * @classDescription Iterator over pivot intersections
     * @constructor
     * @protected
     *
     * @since 2021.2
     */    
    function PivotResultsIterator() {    
    }    
        
    /**
     * @class PivotIntersection
     * @classDescription Intersection of row and column holding measure values
     * @constructor
     * @protected
     *
     * @since 2021.2
     */    
    function PivotIntersection() {    
        
        /**
         * Row dimension value
         * @name PivotIntersection#row
         * @type {DimensionValue|SectionValue}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.row = undefined;        
        /**
         * Column dimension values
         * @name PivotIntersection#column
         * @type {DimensionValue|SectionValue}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.column = undefined;        
        /**
         * Measure values in the intersection
         * @name PivotIntersection#measureValues
         * @type {Array<MeasureValue>}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.measureValues = undefined;        
        /**
         * Returns the object type name (workbook.PivotIntersection)
         * @governance none
         * @return {string}
         *
         * @since 2021.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class SectionValue
     * @classDescription Value of the section from pivot intersection
     * @constructor
     * @protected
     *
     * @since 2021.2
     */    
    function SectionValue() {    
        
        /**
         * Section
         * @name SectionValue#section
         * @type {Section}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.section = undefined;        
        /**
         * Returns the object type name (workbook.SectionValue)
         * @governance none
         * @return {string}
         *
         * @since 2021.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class DataDimensionValue
     * @classDescription Value of the data dimension from pivot intersection
     * @constructor
     * @protected
     *
     * @since 2021.2
     */    
    function DataDimensionValue() {    
        
        /**
         * Data dimension
         * @name DataDimensionValue#dataDimension
         * @type {DataDimension}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.dataDimension = undefined;        
        /**
         * Item values
         * @name DataDimensionValue#itemValues
         * @type {Array<DataDimensionItemValue>}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.itemValues = undefined;        
        /**
         * Returns the object type name (workbook.DataDimensionValue)
         * @governance none
         * @return {string}
         *
         * @since 2021.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class DataDimensionItemValue
     * @classDescription Class holding reference to the dimension item and its value
     * @constructor
     * @protected
     *
     * @since 2021.2
     */    
    function DataDimensionItemValue() {    
        
        /**
         * Data dimension item
         * @name DataDimensionItemValue#dataDimensionItem
         * @type {DataDimension}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.item = undefined;        
        /**
         * Value of the data dimension item
         * @name DataDimensionItemValue#value
         * @type {string|number|boolean|Record|Currency|Range}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.value = undefined;        
        /**
         * Returns the object type name (workbook.DataDimensionItemValue)
         * @governance none
         * @return {string}
         *
         * @since 2021.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class MeasureValue
     * @classDescription Value of the measure from pivot intersection
     * @constructor
     * @protected
     *
     * @since 2021.2
     */    
    function MeasureValue() {    
        
        /**
         * Measure
         * @name MeasureValue#measure
         * @type {MeasureValue}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.measure = undefined;        
        /**
         * Value of the measure
         * @name MeasureValue#value
         * @type {string|number|boolean|Range|Record|Currency}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.value = undefined;        
        /**
         * Returns the object type name (workbook.MeasureValue)
         * @governance none
         * @return {string}
         *
         * @since 2021.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class Currency
     * @classDescription Simple container for currency id and amount
     * @constructor
     * @protected
     *
     * @since 2021.2
     */    
    function Currency() {    
        
        /**
         * id of the currency (USD|EUR|GBP ...)
         * @name Currency#id
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.id = undefined;        
        /**
         * amount of the currency
         * @name Currency#amount
         * @type {number}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.amount = undefined;        
        /**
         * Returns the object type name (workbook.Currency)
         * @governance none
         * @return {string}
         *
         * @since 2021.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class Duration
     * @classDescription Simple container for currency id and amount
     * @constructor
     * @protected
     *
     * @since 2021.2
     */    
    function Duration() {    
        
        /**
         * Duration units
         * @name Duration#units
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.units = undefined;        
        /**
         * Amount of units in this duration
         * @name Duration#amount
         * @type {number}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.amount = undefined;        
        /**
         * Returns the object type name (workbook.Currency)
         * @governance none
         * @return {string}
         *
         * @since 2021.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class Record
     * @classDescription Record returned from pivot execution
     * @constructor
     * @protected
     *
     * @since 2021.2
     */    
    function Record() {    
        
        /**
         * Primary key of this record
         * @name Record#primaryKey
         * @type {number}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.primaryKey = undefined;        
        /**
         * Properties of this record
         * @name Record#properties
         * @type {Object}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.properties = undefined;        
        /**
         * Name of the record type
         * @name Record#name
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.name = undefined;        
        /**
         * Returns the object type name (workbook.Record)
         * @governance none
         * @return {string}
         *
         * @since 2021.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class RecordKey
     * @classDescription RecordKey can either be returned from pivot execution or created as an input to constant expression
     * @constructor
     * @protected
     *
     * @since 2021.2
     */    
    function RecordKey() {    
        
        /**
         * Properties of the record key
         * @name RecordKey#properties
         * @type {Object}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.properties = undefined;        
        /**
         * Returns the object type name (workbook.RecordKey)
         * @governance none
         * @return {string}
         *
         * @since 2021.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class Range
     * @classDescription Range value returned from pivot execution
     * @constructor
     * @protected
     *
     * @since 2021.2
     */    
    function Range() {    
        
        /**
         * Start date/dateTime of this range (formatted according to user preferences)
         * @name Range#start
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.start = undefined;        
        /**
         * End date/dateTime of this range (formatted according to user preferences)
         * @name Range#end
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2021.2
         */        
        this.end = undefined;        
        /**
         * Returns the object type name (workbook.Range)
         * @governance none
         * @return {string}
         *
         * @since 2021.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2021.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * @class Workbook
     * @classDescription Object representing SuiteAnalytics workbook
     * @constructor
     * @protected
     *
     * @since 2020.2
     */    
    function Workbook() {    
        
        /**
         * name of the workbook
         * @name Workbook#name
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.name = undefined;        
        /**
         * description of the workbook
         * @name Workbook#description
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.description = undefined;        
        /**
         * Workbook's pivots
         * @name Workbook#pivots
         * @type {Array<Pivot>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.pivots = undefined;        
        /**
         * Workbook's charts
         * @name Workbook#charts
         * @type {Array<Chart>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.charts = undefined;        
        /**
         * Workbook's tables
         * @name Workbook#tables
         * @type {Array<Table>}
         * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE when the type is not right
         *
         * @since 2020.2
         */        
        this.tables = undefined;        
        /**
         * id of the workbook
         * @name Workbook#id
         * @type {string}
         * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
         *
         * @since 2020.2
         */        
        this.id = undefined;        
        /**
         * Runs pivot and returns array of intersections
         * @param {Object} options
         * @param {string} options.id id of the pivot
         * @governance 10 units for each intersection returned
         * @return {Array<PivotIntersection>}
         * @throws {SuiteScriptError} PIVOT_DOES_NOT_EXIST when there is no pivot under supplied id in the workbook
         *
         * @since 2021.2
         */        
        this.runPivot = function(options) {};        
        this.runPivot.promise = function(options) {};        
        
        /**
         * Returns the object type name (workbook.Workbook)
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * Loads a workbook
     * @governance 10 units
     * @param {Object} options
     * @param {string} options.id id of the workbook to load
    
     * @return {Workbook}
     *
     * @since 2020.2
     */    
    function loadWorkbook() {    
    }    
        
    /**
     * Creates an aspect for chart series
     * @governance none
     * @param {Object} options
     * @param {string}  [options.type] type of this aspect (value|color) - default is value
     * @param {DataMeasure|CalculatedMeasure}  options.measure measure of the series
     * @return {Aspect}
     *
     * @since 2020.2
     */    
    function createAspect() {    
    }    
        
    /**
     * Creates a chart category
     * @governance none
     * @param {Object} options
     * @param {ChartAxis}  options.axis category axis definition
     * @param {Section|DataDimension} options.root data to feed the chart from
     * @param {Array<SortDefinition>} [options.sortDefinitions] Sorting for this category
     * @return {Category}
     *
     * @since 2020.2
     */    
    function createCategory() {    
    }    
        
    /**
     * Creates a chart
     * @governance none
     * @param {Object} options
     * @param {string|Expression} options.name name of the chart
     * @param {string|Expression} options.portletName portletName of the chart
     * @param {string|Expression} [options.title] title of the chart
     * @param {string|Expression} [options.subTitle] subTitle of the chart
     * @param {string} options.id id of the chart
     * @param {string} options.type type of the chart (BAR|AREA|COLUMN ...)
     * @param {string} [options.stacking] stacking indicator (defaults to DISABLED)
     * @param {Category} options.category Category for this chart
     * @param {Legend} options.legend Legend for this chart
     * @param {Array<Series>} options.series Series for this chart
     * @param {Array<Expression>} [options.filterExpressions] simple non-aggregated filters
     * @param {Array<(LimitingFilter|ConditionalFilter)>} [options.aggregationFilters] conditional and limiting filters
     * @param {Dataset=} options.dataset Dataset on which is this chart is based
     * @param {DatasetLink=} options.datasetLink DatasetLink on which this chart is based
     * @throws {SuiteScriptError} INVALID_STACKING_TYPE when value outside of Stacking enum is used for stacking parameter
     * @throws {SuiteScriptError} INVALID_CHART_TYPE when value outside of ChartType enum is used for type parameter
     * @return {Chart}
     *
     * @since 2020.2
     */    
    function createChart() {    
    }    
        
    /**
     * Creates a chart axis
     * @governance none
     * @param {Object} options
     * @param {string|Expression}  options.title title of the axis
     * @return {ChartAxis}
     *
     * @since 2020.2
     */    
    function createChartAxis() {    
    }    
        
    /**
     * Creates a Conditional filter
     * @governance none
     * @param {Object} options
     * @param {boolean} options.row indicates whether to filter on rows (filters on column if set to false)
     * @param {DimensionSelector|DescendantOrSelfNodesSelector|PathSelector|ChildNodesSelector} options.rowSelector selector for row
     * @param {DimensionSelector|DescendantOrSelfNodesSelector|PathSelector|ChildNodesSelector} options.columnSelector - selector for column
     * @param {DataMeasure|CalculatedMeasure} options.measure - filter measure
     * @param {Expression} options.predicate - predicate expression for this filter
     * @return {ConditionalFilter}
     *
     * @since 2020.2
     */    
    function createConditionalFilter() {    
    }    
        
    /**
     * Creates a DataDimension
     * @governance none
     * @param {Object} options
     * @param {string} [options.totalLine]
     * @param {Array<(DataDimension|Section|DataMeasure|CalculatedMeasure)>} [options.children]
     * @param {Array<DataDimensionItem>} options.items
     * @throws {SuiteScriptError} INVALID_TOTAL_LINE when using value outside of TotalLine enum for totalLine
     * @throws {SuiteScriptError} NO_DIMENSION_ITEM_DEFINED when array of dimension items is empty
     * @return {DataDimension}
     *
     * @since 2020.2
     */    
    function createDataDimension() {    
    }    
        
    /**
     * Creates a DataDimensionItem
     * @governance none
     * @param {Object} options
     * @param {string|Expression} [options.label] - label to use
     * @param {Expression} options.expression - expression for this data dimension item
     * @return {DataDimensionItem}
     *
     * @since 2020.2
     */    
    function createDataDimensionItem() {    
    }    
        
    /**
     * Creates a DimensionSelector
     * @governance none
     * @param {Object} options
     * @param {DataDimension|Section} options.dimension - dimension to select
     * @return {DimensionSelector}
     *
     * @since 2020.2
     */    
    function createDimensionSelector() {    
    }    
        
    /**
     * Creates a SortByDataDimensionItem object
     * @governance none
     * @param {Object} options
     * @param {DataDimensionItem} options.item item to sort by
     * @param {Sort} options.sort - sort object
     * @return {SortByDataDimensionItem}
     *
     * @since 2020.2
     */    
    function createSortByDataDimensionItem() {    
    }    
        
    /**
     * Creates a field context for table view column
     * @governance none
     * @param {Object} options
     * @param {string}  options.name name of this context
     * @param   {Object} [options.parameters] parameters of this context
     * @return {FieldContext}
     *
     * @since 2020.2
     */    
    function createFieldContext() {    
    }    
        
    /**
     * Creates a Limiting filter
     * @governance none
     * @param {Object} options
     * @param {boolean} options.row indicates whether this filter is for a row axis (if set to false, then it is on column axis)
     * @param {number} options.limit limit for this filter
     * @param {Array<(MeaureSort|SortByDataDimensionItem)>} options.sortBys  - Particular sort by elements
     * @param {DimensionSelector|DescendantOrSelfNodesSelector|PathSelector|ChildNodesSelector} options.filteredNodesSelector - selector for this filter
     * @return {LimitingFilter}
     *
     * @since 2020.2
     */    
    function createLimitingFilter() {    
    }    
        
    /**
     * Creates a DataMeasure
     * @governance none
     * @param {Object} options
     * @param {string|Expression} [options.label] label to use
     * @param {string} options.aggregation - aggregation to use
     * @param {Expression} options.expression - expression for this measure (if this is a single expression measure)
     * @param {Array<Expression>} options.expressions - expressions for this measure (if this is a multi expression measure)
     * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both expressions and expression parameters are defined
     * @throws {SuiteScriptError} AT_LEAST_ONE_EXPRESSION_IS_NEEDED if expressions parameter is empty array
     * @throws {SuiteScriptError} EXPRESSIONS_MUST_BE_SPECIFIED_WHEN_USING_COUNT_DISTINCT_AGGREGATION when trying to use count distinct aggregation while not defining expressions
     * @throws {SuiteScriptError} EXPRESSION_MUST_BE_SPECIFIED_WHEN_USING_OTHER_THAN_COUNT_DISTINCT_AGGREGATION when trying to use other than count distinct aggregation while not defining expression
     * @return {DataMeasure}
     *
     * @since 2020.2
     */    
    function createDataMeasure() {    
    }    
        
    /**
     * Creates a CalculatedMeasure
     * @governance none
     * @param {Object} options
     * @param {string|Expression} [options.label] label to use
     * @param {Expression} options.expression - expression for this calculated measure
     * @return {CalculatedMeasure}
     *
     * @since 2021.1
     */    
    function createCalculatedMeasure() {    
    }    
        
    /**
     * Creates a chart legend
     * @governance none
     * @param {Object} options
     * @param {Array<ChartAxis>}  options.axes legend axes definition
     * @param {Section|DataDimension} options.root data to feed the chart from
     * @param {Array<SortDefinition>} [options.sortDefinitions] Sorting for this legend
     * @return {Legend}
     *
     * @since 2020.2
     */    
    function createLegend() {    
    }    
        
    /**
     * Creates a SortByMeasure object
     * @governance none
     * @param {Object} options
     * @param {DataMeasure|CalculatedMeasure} options.measure sort by measure
     * @param {DimensionSelector|DescendantOrSelfNodesSelector|PathSelector|ChildNodesSelector} options.otherAxisSelector selector of this sort
     * @param {Sort} options.sort - sort object
     * @return {SortByMeasure}
     *
     * @since 2020.2
     */    
    function createSortByMeasure() {    
    }    
        
    /**
     * Creates a PathSelector
     * @governance none
     * @param {Object} options
     * @param {Array<(DescendantOrSelfNodesSelector|DimensionSelector|ChildNodesSelector)>} options.elements
     * @return {PathSelector}
     * @throws {SuiteScriptError} NO_ELEMENTS_DEFINED when elements array is empty
     *
     * @since 2020.2
     */    
    function createPathSelector() {    
    }    
        
    /**
     * Creates a pivot
     * @governance none
     * @param {Object} options
     * @param {Array<Expression>} [options.filterExpressions] simple non-aggregated filters
     * @param {Array<(LimitingFilter|ConditionalFilter)>} [options.aggregationFilters] conditional and limiting filters
     * @param {string|Expression} options.name name of the pivot
     * @param {string|Expression} [options.portletName] portlet name of the pivot
     * @param {string} options.id id of the pivot
     * @param {PivotAxis} options.rowAxis rowAxis containing sections, data dimensions ...
     * @param {PivotAxis} options.columnAxis columnAxis containing sections, data dimensions ...
     * @param {Dataset=} options.dataset Dataset on which is this pivot is based
     * @param {DatasetLink=} options.datasetLink DatasetLink on which this pivot is based
     * @param {Array<ReportStyle>} [options.reportStyles] Conditional formatting for this pivot
     * @return {Pivot}
     * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both dataset and datasetLink are defined
     * @throws {SuiteScriptError} NEITHER_ARGUMENT_DEFINED if neither dataset nor datasetLink is defined
     *
     * @since 2020.2
     */    
    function createPivot() {    
    }    
        
    /**
     * Creates a pivot axis
     * @governance none
     * @param {Object} options
     * @param {Section|DataDimension}  options.root definition of the data
     * @param {Array<SortDefinition>}  [options.sortDefinitions] sorting definition
     * @return {PivotAxis}
     *
     * @since 2020.2
     */    
    function createPivotAxis() {    
    }    
        
    /**
     * Creates a chart series
     * @governance none
     * @param {Object} options
     * @param {Array<Aspect>}  options.aspects - aspects for this series
     * @return {Series}
     * @throws {SuiteScriptError} NO_ASPECTS_DEFINED when aspects array is empty
     *
     * @since 2020.2
     */    
    function createSeries() {    
    }    
        
    /**
     * Creates a Section
     * @governance none
     * @param {Object} options
     * @param {string} [options.totalLine]
     * @param {Array<(DataDimension|Section|DataMeasure|CalculatedMeasure)>} options.children
     * @throws {SuiteScriptError} INVALID_TOTAL_LINE when using value outside of TotalLine enum for totalLine
     * @throws {SuiteScriptError} NO_CHILDREN_DEFINED when children array is empty
     * @return {Section}
     *
     * @since 2020.2
     */    
    function createSection() {    
    }    
        
    /**
     * Creates a Sort object
     * @param {Object} [options]
     * @param {boolean} [options.ascending] ascending/descending indicator (defaults to true)
     * @param {string} [options.locale]  - option for locale specific sorting (validated against query.SortLocale enum)
     * @param {boolean} [options.nullsLast]  - sort null items last indicator (defaults to the value of ascending parameter)
     * @param {boolean} [options.caseSensitive]  - case sensitivity indicator
     * @throws {SuiteScriptError} INVALID_SORT_LOCALE - when using a value outside of query.SortLocale enum for locale parameter
     * @return {Sort}
     *
     * @since 2020.2
     */    
    function createSort() {    
    }    
        
    /**
     * Creates a SortDefinition
     * @governance none
     * @param {Object} options
     * @param {DescendantOrSelfNodesSelector|DimensionSelector|PathSelector|ChildNodesSelector} options.selector  - selector for this sort definition
     * @param {Array<(MeaureSort|SortByDataDimensionItem)>} options.sortBys  - Particular sort by elements
     * @throws {SuiteScriptError} NO_SORT_BY_DEFINED - when sortBys array is empty
     * @return {SortDefinition}
     *
     * @since 2020.2
     */    
    function createSortDefinition() {    
    }    
        
    /**
     * Creates a table
     * @governance none
     * @param {Object} options
     * @param {string|Expression} options.name name of the table
     * @param {string|Expression} [options.portletName] name of the table
     * @param {string} options.id id of the table view
     * @param {Dataset} options.dataset Dataset on which is this table view based
     * @param {Array<TableColumn>} options.columns columns used in this table view
     * @return {Table}
     *
     * @since 2020.2
     */    
    function createTable() {    
    }    
        
    /**
     * Creates a table view column
     * @governance none
     * @param {Object} options
     * @param {TableColumnCondition}  [options.condition] additional condition
     * @param {number} [options.width] width of the column in pixels
     * @param {string} options.datasetColumnAlias alias of underlying dataset column
     * @param {string|Expression} [options.label] label for this column
     * @param {Sort} options.sort sorting definition for this column
     * @param {Array<ConditionalFormat>} options.conditionalFormats Conditional formatting for this column
     * @return {TableColumn}
     *
     * @since 2020.2
     */    
    function createTableColumn() {    
    }    
        
    /**
     * Creates a table column filter
     * @governance none
     * @param {Object} options
     * @param {string}  options.operator operator of this filter
     * @param {Array<(null|number|string|boolean|Date|Object)>} [options.values] values for this filter
     * @throws {SuiteScriptError} INVALID_OPERATOR if the operator is not valid
     * @return {TableColumnFilter}
     *
     * @since 2020.2
     */    
    function createTableColumnFilter() {    
    }    
        
    /**
     * Creates a table column condition
     * @governance none
     * @param {Object} options
     * @param {string}  options.operator operator of this filter
     * @param {Array<TableColumnFilter>} options.filters] filters for this condition
     * @throws {SuiteScriptError} INVALID_OPERATOR if the operator is not valid
     * @return {TableColumnCondition}
     *
     * @since 2021.1
     */    
    function createTableColumnCondition() {    
    }    
        
    /**
     * Creates a conditional format rule
     * @governance none
     * @param {Object} options
     * @param {Style}  options.style style to use for this conditional formatting rule
     * @param {TableColumnFilter} options.filter restriction when such formatting rule should be applied
     * @return {ConditionalFormatRule}
     *
     * @since 2021.1
     */    
    function createConditionalFormatRule() {    
    }    
        
    /**
     * Creates a conditional format
     * @governance none
     * @param {Object} options
     * @param {Array<ConditionalFormatRule>} options.rules style to use for this conditional formatting object
     * @throws {SuiteScriptError} NO_RULE_DEFINED when array rules is empty
     * @return {ConditionalFormat}
     *
     * @since 2021.1
     */    
    function createConditionalFormat() {    
    }    
        
    /**
     * Creates a report style
     * @governance none
     * @param {Object} options
     * @param {Array<ReportStyleRule>} options.rules rules to apply in this report style
     * @param {Array<MeasureValueSelector>} options.selectors select where to apply the style
     * @throws {SuiteScriptError} NO_RULE_DEFINED when array of rules is empty
     * @throws {SuiteScriptError} NO_SELECTORS_DEFINED when array of selectors is empty
     * @return {ReportStyle}
     *
     * @since 2021.1
     */    
    function createReportStyle() {    
    }    
        
    /**
     * Creates a measure value selector
     * @governance none
     * @param {Object} options
     * @param {MeasureSelector} options.measureSelector measures to apply conditional formatting to
     * @param {DescendantOrSelfNodesSelector|DimensionSelector|PathSelector|ChildNodesSelector} options.rowSelector select row to style
     * @param {DescendantOrSelfNodesSelector|DimensionSelector|PathSelector|ChildNodesSelector} options.columnSelector select column to style
     * @return {MeasureValueSelector}
     *
     * @since 2021.1
     */    
    function createMeasureValueSelector() {    
    }    
        
    /**
     * Creates a measure selector
     * @governance none
     * @param {Object} options
     * @param {Array<(DataMeasure|CalculatedMeasure)>} options.measures
     * @throws {SuiteScriptError} NO_MEASURE_DEFINED when array of measures is empty
     * @return {MeasureSelector}
     *
     * @since 2021.1
     */    
    function createMeasureSelector() {    
    }    
        
    /**
     * Creates a report style formatting rule
     * @governance none
     * @param {Object} options
     * @param {Style}  options.style style to use for this report style rule
     * @param {Expression} options.expression restriction when such formatting rule should be applied
     * @return {ReportStyleRule}
     *
     * @since 2021.1
     */    
    function createReportStyleRule() {    
    }    
        
    /**
     * Creates a color
     * @governance none
     * @param {Object} options
     * @param {number}  [options.red] red portion of the color
     * @param {number}  [options.green] green portion of the color
     * @param {number}  [options.blue] blud portion of the color
     * @param {number}  [options.alpha] opacity - transparency
     * @throws {SuiteScriptError} INVALID_COLOR_VALUE if value for any of red|green/blue is either smaller than 0 or greater
     *     than 255
     * @throws {SuiteScriptError} INVALID_INVALID_ALPHA_VALUE if value for alpha parameter is either smaller than 0 or greater
     *     than 1
     * @return {Color}
     *
     * @since 2021.1
     */    
    function createColor() {    
    }    
        
    /**
     * Creates a percent-defined background position
     * @governance none
     * @param {Object} options
     * @param {number}  options.percentX percent of the X dimension
     * @param {number}  options.percentY percent of the Y dimension
     * @return {PositionPercent}
     *
     * @since 2021.1
     */    
    function createPositionPercent() {    
    }    
        
    /**
     * Creates a values-defined background position
     * @governance none
     * @param {Object} options
     * @param {string}  options.horizontal horizontal setting
     * @param {string}  options.vertical vertical setting
     * @throws {SuiteScriptError} INVALID_POSITION if the value vertical|horizontal position is outside of Position enum
     * @return {PositionValues}
     *
     * @since 2021.1
     */    
    function createPositionValues() {    
    }    
        
    /**
     * Creates a font size defined by units
     * @governance none
     * @param {Object} options
     * @param {number}  options.size size of the font
     * @param {string}  options.unit unit of the font size
     * @throws {SuiteScriptError} INVALID_UNIT when assigned value is outside of Unit enum
     * @return {FontSize}
     *
     * @since 2021.1
     */    
    function createFontSize() {    
    }    
        
    /**
     * Creates a background position defined by x/y coordinates and units
     * @governance none
     * @param {Object} options
     * @param {number}  options.x X coordinate
     * @param {number}  options.y Y coordinate
     * @param {string}  options.unit units to use for x/y coordinates
     * @throws {SuiteScriptError} INVALID_POSITION if the value vertical|horizontal position is outside of Position enum
     * @return {PositionUnits}
     *
     * @since 2021.1
     */    
    function createPositionUnits() {    
    }    
        
    /**
     * Creates a style to be used in conditional formatting
     * @governance none
     * @param {Object} options
     * @param {string} [options.backgroundImage] background image
     * @param {Color|string} [options.backgroundColor] background color
     * @param {PositionUnits|PositionValues|PositionPercent} [options.backgroundPosition] background position
     * @param {string} [options.fontSize] font size
     * @param {string} [options.fontStyle] font style
     * @param {string} [options.fontWeight] font weight
     * @param {string} [options.textAlign] text alignment
     * @param {Color|string} [options.color] color
     * @param {Color|string} [options.textDecorationColor] text decoration color
     * @param {string} [options.textDecorationLine] text decoration line
     * @param {string} [options.textDecorationStyle] text decoration style
     * @throws {SuiteScriptError} INVALID_IMAGE if backgroundImage parameter is outside of Image enum
     * @throws {SuiteScriptError} INVALID_FONT_SIZE if fontSize parameter is outside of FontSize enum
     * @throws {SuiteScriptError} INVALID_FONT_STYLE if fontStyle parameter is outside of FontStyle enum
     * @throws {SuiteScriptError} INVALID_FONT_WEIGHT if fontWeight parameter is outside of FontWeight enum
     * @throws {SuiteScriptError} INVALID_TEXT_ALIGN if textAlign parameter is outside of TextAlign enum
     * @throws {SuiteScriptError} INVALID_COLOR if backgroundColor, color or textDecorationColor is outside of Color enum
     *     (while not being color object)
     * @throws {SuiteScriptError} INVALID_TEXT_DECORATION_LINE if textDecorationLine parameter is outside of TextDecorationLine
     *     enum
     * @throws {SuiteScriptError} INVALID_TEXT_DECORATION_STYLE if textDecorationStyle parameter is outside of
     *     TextDecorationStyle enum
     * @return {Style}
     *
     * @since 2021.1
     */    
    function createStyle() {    
    }    
        
    /**
     * Create a Workbook object
     * @governance none
     * @param {Object} options
     * @param {Array<Pivot>} [options.pivots] Pivots in this workbook
     * @param {Array<Chart>} [options.charts] Charts in this workbook
     * @param {Array<Table>} [options.tables] Tables in this workbook
     * @return {Workbook}
     *
     * @since 2020.2
     */    
    function createWorkbook() {    
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
     * Creates a Range object
     * @param {Object} options
     * @param {string} {options.start} Date or Date time formatted as string
     * @param {string} {options.end} Date or Date time formatted as string
     * @return {Range} Range object
     *
     * @since 2021.2
     */    
    function createRange() {    
    }    
        
    /**
     * Creates a Duration object
     * @param {Object} options
     * @param {string} {options.start} Date or Date time formatted as string
     * @param {string} {options.end} Date or Date time formatted as string
     * @throws {SuiteScriptError} INVALID_TEMPORAL_UNIT if provided units are outside of TemporalUnit enum
     * @return {Duration} Duration object
     *
     * @since 2021.2
     */    
    function createDuration() {    
    }    
        
    /**
     * Creates a complex RecordKey object from an object
     * @param {Object} options Properties of the record key (e. g. {numberkey: 1, stringkey:"a"})
     * @return {RecordKey} RecordKey object
     *
     * @since 2021.2
     */    
    function createComplexRecordKey() {    
    }    
        
    /**
     * Creates a RecordKey object
     * @param {Object} options
     * @param {string|number} {options.key} string or number key
     * @return {RecordKey} RecordKey object
     *
     * @since 2021.2
     */    
    function createSimpleRecordKey() {    
    }    
        
    /**
     * Creates a Currency object
     * @param {Object} options
     * @param {number} {options.amount} Currency amount
     * @param {string} {options.id} Currency id
     * @throws {SuiteScriptError} INVALID_CURRENCY if provided currency id is outside of Currency enum
     * @return {Currency} Range object
     *
     * @since 2021.2
     */    
    function createCurrency() {    
    }    
        
    /**
     * Create pivot storage which can be used to hold results of asynchronous pivot execution
     * @governance 10 units
     * @return {number} Id of pivot storage which can be used to retrieve results of asynchronous pivot execution
     *
     * @since 2021.2
     */    
    function createPivotStorage() {    
    }    
        
    /**
     * Loads pivot results from storage
     * @governance 10 units
     * @param {Object} options
     * @param {number} options.id id of the pivot storage
     *
     * @return {Iterator}
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE when method is called from browser
     * @since 2021.2
     */    
    function loadPivotResults() {    
    }    
    
    N.workbook = workbook;
    
    /**
     * @exports N/workbook
     */
    return workbook;
});