(function() {
    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }

    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
    }

    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }

    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    (window["webpackJsonp"] = window["webpackJsonp"] || []).push([
        ["charts-charts-module"], {
            /***/
            "./src/app/pages/charts/chartjs/chartjs-bar-horizontal.component.ts":
                /*!**************************************************************************!*\
                  !*** ./src/app/pages/charts/chartjs/chartjs-bar-horizontal.component.ts ***!
                  \**************************************************************************/

                /*! exports provided: ChartjsBarHorizontalComponent */

                /***/
                function srcAppPagesChartsChartjsChartjsBarHorizontalComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "ChartjsBarHorizontalComponent", function() {
                        return ChartjsBarHorizontalComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! angular2-chartjs */
                        "./node_modules/angular2-chartjs/__ivy_ngcc__/dist/index.js");
                    /* harmony import */


                    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__);

                    var ChartjsBarHorizontalComponent = /*#__PURE__*/ function() {
                        function ChartjsBarHorizontalComponent(theme) {
                            var _this = this;

                            _classCallCheck(this, ChartjsBarHorizontalComponent);

                            this.theme = theme;
                            this.themeSubscription = this.theme.getJsTheme().subscribe(function(config) {
                                var colors = config.variables;
                                var chartjs = config.variables.chartjs;
                                _this.data = {
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                                    datasets: [{
                                        label: 'Dataset 1',
                                        backgroundColor: colors.infoLight,
                                        borderWidth: 1,
                                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()]
                                    }, {
                                        label: 'Dataset 2',
                                        backgroundColor: colors.successLight,
                                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()]
                                    }]
                                };
                                _this.options = {
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    elements: {
                                        rectangle: {
                                            borderWidth: 2
                                        }
                                    },
                                    scales: {
                                        xAxes: [{
                                            gridLines: {
                                                display: true,
                                                color: chartjs.axisLineColor
                                            },
                                            ticks: {
                                                fontColor: chartjs.textColor
                                            }
                                        }],
                                        yAxes: [{
                                            gridLines: {
                                                display: false,
                                                color: chartjs.axisLineColor
                                            },
                                            ticks: {
                                                fontColor: chartjs.textColor
                                            }
                                        }]
                                    },
                                    legend: {
                                        position: 'right',
                                        labels: {
                                            fontColor: chartjs.textColor
                                        }
                                    }
                                };
                            });
                        }

                        _createClass(ChartjsBarHorizontalComponent, [{
                            key: "ngOnDestroy",
                            value: function ngOnDestroy() {
                                this.themeSubscription.unsubscribe();
                            }
                        }, {
                            key: "random",
                            value: function random() {
                                return Math.round(Math.random() * 100);
                            }
                        }]);

                        return ChartjsBarHorizontalComponent;
                    }();

                    ChartjsBarHorizontalComponent.ɵfac = function ChartjsBarHorizontalComponent_Factory(t) {
                        return new(t || ChartjsBarHorizontalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]));
                    };

                    ChartjsBarHorizontalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: ChartjsBarHorizontalComponent,
                        selectors: [
                            ["ngx-chartjs-bar-horizontal"]
                        ],
                        decls: 1,
                        vars: 2,
                        consts: [
                            ["type", "horizontalBar", 3, "data", "options"]
                        ],
                        template: function ChartjsBarHorizontalComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "chart", 0);
                            }

                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
                            }
                        },
                        directives: [angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartjsBarHorizontalComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-chartjs-bar-horizontal',
                                template: "\n    <chart type=\"horizontalBar\" [data]=\"data\" [options]=\"options\"></chart>\n  "
                            }]
                        }], function() {
                            return [{
                                type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]
                            }];
                        }, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/chartjs/chartjs-bar.component.ts":
                /*!***************************************************************!*\
                  !*** ./src/app/pages/charts/chartjs/chartjs-bar.component.ts ***!
                  \***************************************************************/

                /*! exports provided: ChartjsBarComponent */

                /***/
                function srcAppPagesChartsChartjsChartjsBarComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "ChartjsBarComponent", function() {
                        return ChartjsBarComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! angular2-chartjs */
                        "./node_modules/angular2-chartjs/__ivy_ngcc__/dist/index.js");
                    /* harmony import */


                    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__);

                    var ChartjsBarComponent = /*#__PURE__*/ function() {
                        function ChartjsBarComponent(theme) {
                            var _this2 = this;

                            _classCallCheck(this, ChartjsBarComponent);

                            this.theme = theme;
                            this.themeSubscription = this.theme.getJsTheme().subscribe(function(config) {
                                var colors = config.variables;
                                var chartjs = config.variables.chartjs;
                                _this2.data = {
                                    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
                                    datasets: [{
                                        data: [65, 59, 80, 81, 56, 55, 40],
                                        label: 'Series A',
                                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.primaryLight, 0.8)
                                    }, {
                                        data: [28, 48, 40, 19, 86, 27, 90],
                                        label: 'Series B',
                                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.infoLight, 0.8)
                                    }]
                                };
                                _this2.options = {
                                    maintainAspectRatio: false,
                                    responsive: true,
                                    legend: {
                                        labels: {
                                            fontColor: chartjs.textColor
                                        }
                                    },
                                    scales: {
                                        xAxes: [{
                                            gridLines: {
                                                display: false,
                                                color: chartjs.axisLineColor
                                            },
                                            ticks: {
                                                fontColor: chartjs.textColor
                                            }
                                        }],
                                        yAxes: [{
                                            gridLines: {
                                                display: true,
                                                color: chartjs.axisLineColor
                                            },
                                            ticks: {
                                                fontColor: chartjs.textColor
                                            }
                                        }]
                                    }
                                };
                            });
                        }

                        _createClass(ChartjsBarComponent, [{
                            key: "ngOnDestroy",
                            value: function ngOnDestroy() {
                                this.themeSubscription.unsubscribe();
                            }
                        }]);

                        return ChartjsBarComponent;
                    }();

                    ChartjsBarComponent.ɵfac = function ChartjsBarComponent_Factory(t) {
                        return new(t || ChartjsBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]));
                    };

                    ChartjsBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: ChartjsBarComponent,
                        selectors: [
                            ["ngx-chartjs-bar"]
                        ],
                        decls: 1,
                        vars: 2,
                        consts: [
                            ["type", "bar", 3, "data", "options"]
                        ],
                        template: function ChartjsBarComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "chart", 0);
                            }

                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
                            }
                        },
                        directives: [angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartjsBarComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-chartjs-bar',
                                template: "\n    <chart type=\"bar\" [data]=\"data\" [options]=\"options\"></chart>\n  "
                            }]
                        }], function() {
                            return [{
                                type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]
                            }];
                        }, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/chartjs/chartjs-line.component.ts":
                /*!****************************************************************!*\
                  !*** ./src/app/pages/charts/chartjs/chartjs-line.component.ts ***!
                  \****************************************************************/

                /*! exports provided: ChartjsLineComponent */

                /***/
                function srcAppPagesChartsChartjsChartjsLineComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "ChartjsLineComponent", function() {
                        return ChartjsLineComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! angular2-chartjs */
                        "./node_modules/angular2-chartjs/__ivy_ngcc__/dist/index.js");
                    /* harmony import */


                    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__);

                    var ChartjsLineComponent = /*#__PURE__*/ function() {
                        function ChartjsLineComponent(theme) {
                            var _this3 = this;

                            _classCallCheck(this, ChartjsLineComponent);

                            this.theme = theme;
                            this.themeSubscription = this.theme.getJsTheme().subscribe(function(config) {
                                var colors = config.variables;
                                var chartjs = config.variables.chartjs;
                                _this3.data = {
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                    datasets: [{
                                        data: [65, 59, 80, 81, 56, 55, 40],
                                        label: 'Series A',
                                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.primary, 0.3),
                                        borderColor: colors.primary
                                    }, {
                                        data: [28, 48, 40, 19, 86, 27, 90],
                                        label: 'Series B',
                                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.danger, 0.3),
                                        borderColor: colors.danger
                                    }, {
                                        data: [18, 48, 77, 9, 100, 27, 40],
                                        label: 'Series C',
                                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.info, 0.3),
                                        borderColor: colors.info
                                    }]
                                };
                                _this3.options = {
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    scales: {
                                        xAxes: [{
                                            gridLines: {
                                                display: true,
                                                color: chartjs.axisLineColor
                                            },
                                            ticks: {
                                                fontColor: chartjs.textColor
                                            }
                                        }],
                                        yAxes: [{
                                            gridLines: {
                                                display: true,
                                                color: chartjs.axisLineColor
                                            },
                                            ticks: {
                                                fontColor: chartjs.textColor
                                            }
                                        }]
                                    },
                                    legend: {
                                        labels: {
                                            fontColor: chartjs.textColor
                                        }
                                    }
                                };
                            });
                        }

                        _createClass(ChartjsLineComponent, [{
                            key: "ngOnDestroy",
                            value: function ngOnDestroy() {
                                this.themeSubscription.unsubscribe();
                            }
                        }]);

                        return ChartjsLineComponent;
                    }();

                    ChartjsLineComponent.ɵfac = function ChartjsLineComponent_Factory(t) {
                        return new(t || ChartjsLineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]));
                    };

                    ChartjsLineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: ChartjsLineComponent,
                        selectors: [
                            ["ngx-chartjs-line"]
                        ],
                        decls: 1,
                        vars: 2,
                        consts: [
                            ["type", "line", 3, "data", "options"]
                        ],
                        template: function ChartjsLineComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "chart", 0);
                            }

                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
                            }
                        },
                        directives: [angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartjsLineComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-chartjs-line',
                                template: "\n    <chart type=\"line\" [data]=\"data\" [options]=\"options\"></chart>\n  "
                            }]
                        }], function() {
                            return [{
                                type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]
                            }];
                        }, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/chartjs/chartjs-multiple-xaxis.component.ts":
                /*!**************************************************************************!*\
                  !*** ./src/app/pages/charts/chartjs/chartjs-multiple-xaxis.component.ts ***!
                  \**************************************************************************/

                /*! exports provided: ChartjsMultipleXaxisComponent */

                /***/
                function srcAppPagesChartsChartjsChartjsMultipleXaxisComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "ChartjsMultipleXaxisComponent", function() {
                        return ChartjsMultipleXaxisComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! angular2-chartjs */
                        "./node_modules/angular2-chartjs/__ivy_ngcc__/dist/index.js");
                    /* harmony import */


                    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__);

                    var ChartjsMultipleXaxisComponent = /*#__PURE__*/ function() {
                        function ChartjsMultipleXaxisComponent(theme) {
                            var _this4 = this;

                            _classCallCheck(this, ChartjsMultipleXaxisComponent);

                            this.theme = theme;
                            this.themeSubscription = this.theme.getJsTheme().subscribe(function(config) {
                                var colors = config.variables;
                                var chartjs = config.variables.chartjs;
                                _this4.data = {
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                                    datasets: [{
                                        label: 'dataset - big points',
                                        data: [_this4.random(), _this4.random(), _this4.random(), _this4.random(), _this4.random(), _this4.random()],
                                        borderColor: colors.primary,
                                        backgroundColor: colors.primary,
                                        fill: false,
                                        borderDash: [5, 5],
                                        pointRadius: 8,
                                        pointHoverRadius: 10
                                    }, {
                                        label: 'dataset - individual point sizes',
                                        data: [_this4.random(), _this4.random(), _this4.random(), _this4.random(), _this4.random(), _this4.random()],
                                        borderColor: colors.dangerLight,
                                        backgroundColor: colors.dangerLight,
                                        fill: false,
                                        borderDash: [5, 5],
                                        pointRadius: 8,
                                        pointHoverRadius: 10
                                    }, {
                                        label: 'dataset - large pointHoverRadius',
                                        data: [_this4.random(), _this4.random(), _this4.random(), _this4.random(), _this4.random(), _this4.random()],
                                        borderColor: colors.info,
                                        backgroundColor: colors.info,
                                        fill: false,
                                        pointRadius: 8,
                                        pointHoverRadius: 10
                                    }, {
                                        label: 'dataset - large pointHitRadius',
                                        data: [_this4.random(), _this4.random(), _this4.random(), _this4.random(), _this4.random(), _this4.random()],
                                        borderColor: colors.success,
                                        backgroundColor: colors.success,
                                        fill: false,
                                        pointRadius: 8,
                                        pointHoverRadius: 10
                                    }]
                                };
                                _this4.options = {
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    legend: {
                                        position: 'bottom',
                                        labels: {
                                            fontColor: chartjs.textColor
                                        }
                                    },
                                    hover: {
                                        mode: 'index'
                                    },
                                    scales: {
                                        xAxes: [{
                                            display: true,
                                            scaleLabel: {
                                                display: true,
                                                labelString: 'Month'
                                            },
                                            gridLines: {
                                                display: true,
                                                color: chartjs.axisLineColor
                                            },
                                            ticks: {
                                                fontColor: chartjs.textColor
                                            }
                                        }],
                                        yAxes: [{
                                            display: true,
                                            scaleLabel: {
                                                display: true,
                                                labelString: 'Value'
                                            },
                                            gridLines: {
                                                display: true,
                                                color: chartjs.axisLineColor
                                            },
                                            ticks: {
                                                fontColor: chartjs.textColor
                                            }
                                        }]
                                    }
                                };
                            });
                        }

                        _createClass(ChartjsMultipleXaxisComponent, [{
                            key: "ngOnDestroy",
                            value: function ngOnDestroy() {
                                this.themeSubscription.unsubscribe();
                            }
                        }, {
                            key: "random",
                            value: function random() {
                                return Math.round(Math.random() * 100);
                            }
                        }]);

                        return ChartjsMultipleXaxisComponent;
                    }();

                    ChartjsMultipleXaxisComponent.ɵfac = function ChartjsMultipleXaxisComponent_Factory(t) {
                        return new(t || ChartjsMultipleXaxisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]));
                    };

                    ChartjsMultipleXaxisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: ChartjsMultipleXaxisComponent,
                        selectors: [
                            ["ngx-chartjs-multiple-xaxis"]
                        ],
                        decls: 1,
                        vars: 2,
                        consts: [
                            ["type", "line", 3, "data", "options"]
                        ],
                        template: function ChartjsMultipleXaxisComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "chart", 0);
                            }

                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
                            }
                        },
                        directives: [angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartjsMultipleXaxisComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-chartjs-multiple-xaxis',
                                template: "\n    <chart type=\"line\" [data]=\"data\" [options]=\"options\"></chart>\n  "
                            }]
                        }], function() {
                            return [{
                                type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]
                            }];
                        }, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/chartjs/chartjs-pie.component.ts":
                /*!***************************************************************!*\
                  !*** ./src/app/pages/charts/chartjs/chartjs-pie.component.ts ***!
                  \***************************************************************/

                /*! exports provided: ChartjsPieComponent */

                /***/
                function srcAppPagesChartsChartjsChartjsPieComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "ChartjsPieComponent", function() {
                        return ChartjsPieComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! angular2-chartjs */
                        "./node_modules/angular2-chartjs/__ivy_ngcc__/dist/index.js");
                    /* harmony import */


                    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__);

                    var ChartjsPieComponent = /*#__PURE__*/ function() {
                        function ChartjsPieComponent(theme) {
                            var _this5 = this;

                            _classCallCheck(this, ChartjsPieComponent);

                            this.theme = theme;
                            this.themeSubscription = this.theme.getJsTheme().subscribe(function(config) {
                                var colors = config.variables;
                                var chartjs = config.variables.chartjs;
                                _this5.data = {
                                    labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
                                    datasets: [{
                                        data: [300, 500, 100],
                                        backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight]
                                    }]
                                };
                                _this5.options = {
                                    maintainAspectRatio: false,
                                    responsive: true,
                                    scales: {
                                        xAxes: [{
                                            display: false
                                        }],
                                        yAxes: [{
                                            display: false
                                        }]
                                    },
                                    legend: {
                                        labels: {
                                            fontColor: chartjs.textColor
                                        }
                                    }
                                };
                            });
                        }

                        _createClass(ChartjsPieComponent, [{
                            key: "ngOnDestroy",
                            value: function ngOnDestroy() {
                                this.themeSubscription.unsubscribe();
                            }
                        }]);

                        return ChartjsPieComponent;
                    }();

                    ChartjsPieComponent.ɵfac = function ChartjsPieComponent_Factory(t) {
                        return new(t || ChartjsPieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]));
                    };

                    ChartjsPieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: ChartjsPieComponent,
                        selectors: [
                            ["ngx-chartjs-pie"]
                        ],
                        decls: 1,
                        vars: 2,
                        consts: [
                            ["type", "pie", 3, "data", "options"]
                        ],
                        template: function ChartjsPieComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "chart", 0);
                            }

                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
                            }
                        },
                        directives: [angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartjsPieComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-chartjs-pie',
                                template: "\n    <chart type=\"pie\" [data]=\"data\" [options]=\"options\"></chart>\n  "
                            }]
                        }], function() {
                            return [{
                                type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]
                            }];
                        }, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/chartjs/chartjs-radar.component.ts":
                /*!*****************************************************************!*\
                  !*** ./src/app/pages/charts/chartjs/chartjs-radar.component.ts ***!
                  \*****************************************************************/

                /*! exports provided: ChartjsRadarComponent */

                /***/
                function srcAppPagesChartsChartjsChartjsRadarComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "ChartjsRadarComponent", function() {
                        return ChartjsRadarComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! angular2-chartjs */
                        "./node_modules/angular2-chartjs/__ivy_ngcc__/dist/index.js");
                    /* harmony import */


                    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__);

                    var ChartjsRadarComponent = /*#__PURE__*/ function() {
                        function ChartjsRadarComponent(theme) {
                            var _this6 = this;

                            _classCallCheck(this, ChartjsRadarComponent);

                            this.theme = theme;
                            this.themeSubscription = this.theme.getJsTheme().subscribe(function(config) {
                                var colors = config.variables;
                                var chartjs = config.variables.chartjs;
                                _this6.data = {
                                    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                                    datasets: [{
                                        data: [65, 59, 90, 81, 56, 55, 40],
                                        label: 'Series A',
                                        borderColor: colors.danger,
                                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.dangerLight, 0.5)
                                    }, {
                                        data: [28, 48, 40, 19, 96, 27, 100],
                                        label: 'Series B',
                                        borderColor: colors.warning,
                                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.warningLight, 0.5)
                                    }]
                                };
                                _this6.options = {
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    scaleFontColor: 'white',
                                    legend: {
                                        labels: {
                                            fontColor: chartjs.textColor
                                        }
                                    },
                                    scale: {
                                        pointLabels: {
                                            fontSize: 14,
                                            fontColor: chartjs.textColor
                                        },
                                        gridLines: {
                                            color: chartjs.axisLineColor
                                        },
                                        angleLines: {
                                            color: chartjs.axisLineColor
                                        }
                                    }
                                };
                            });
                        }

                        _createClass(ChartjsRadarComponent, [{
                            key: "ngOnDestroy",
                            value: function ngOnDestroy() {
                                this.themeSubscription.unsubscribe();
                            }
                        }]);

                        return ChartjsRadarComponent;
                    }();

                    ChartjsRadarComponent.ɵfac = function ChartjsRadarComponent_Factory(t) {
                        return new(t || ChartjsRadarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]));
                    };

                    ChartjsRadarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: ChartjsRadarComponent,
                        selectors: [
                            ["ngx-chartjs-radar"]
                        ],
                        decls: 1,
                        vars: 2,
                        consts: [
                            ["type", "radar", 3, "data", "options"]
                        ],
                        template: function ChartjsRadarComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "chart", 0);
                            }

                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
                            }
                        },
                        directives: [angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartjsRadarComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-chartjs-radar',
                                template: "\n    <chart type=\"radar\" [data]=\"data\" [options]=\"options\"></chart>\n  "
                            }]
                        }], function() {
                            return [{
                                type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]
                            }];
                        }, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/chartjs/chartjs.component.ts":
                /*!***********************************************************!*\
                  !*** ./src/app/pages/charts/chartjs/chartjs.component.ts ***!
                  \***********************************************************/

                /*! exports provided: ChartjsComponent */

                /***/
                function srcAppPagesChartsChartjsChartjsComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "ChartjsComponent", function() {
                        return ChartjsComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var _chartjs_pie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! ./chartjs-pie.component */
                        "./src/app/pages/charts/chartjs/chartjs-pie.component.ts");
                    /* harmony import */


                    var _chartjs_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                        /*! ./chartjs-bar.component */
                        "./src/app/pages/charts/chartjs/chartjs-bar.component.ts");
                    /* harmony import */


                    var _chartjs_line_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                        /*! ./chartjs-line.component */
                        "./src/app/pages/charts/chartjs/chartjs-line.component.ts");
                    /* harmony import */


                    var _chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                        /*! ./chartjs-multiple-xaxis.component */
                        "./src/app/pages/charts/chartjs/chartjs-multiple-xaxis.component.ts");
                    /* harmony import */


                    var _chartjs_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                        /*! ./chartjs-bar-horizontal.component */
                        "./src/app/pages/charts/chartjs/chartjs-bar-horizontal.component.ts");
                    /* harmony import */


                    var _chartjs_radar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                        /*! ./chartjs-radar.component */
                        "./src/app/pages/charts/chartjs/chartjs-radar.component.ts");

                    var ChartjsComponent = function ChartjsComponent() {
                        _classCallCheck(this, ChartjsComponent);
                    };

                    ChartjsComponent.ɵfac = function ChartjsComponent_Factory(t) {
                        return new(t || ChartjsComponent)();
                    };

                    ChartjsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: ChartjsComponent,
                        selectors: [
                            ["ngx-chartjs"]
                        ],
                        decls: 37,
                        vars: 0,
                        consts: [
                            [1, "row"],
                            [1, "col-lg-6"]
                        ],
                        template: function ChartjsComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pie");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ngx-chartjs-pie");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-header");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bar");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card-body");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ngx-chartjs-bar");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-card");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-card-header");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Line");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nb-card-body");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ngx-chartjs-line");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nb-card");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nb-card-header");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Multiple x-axis");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nb-card-body");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "ngx-chartjs-multiple-xaxis");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nb-card");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nb-card-header");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Bar Horizontal");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nb-card-body");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "ngx-chartjs-bar-horizontal");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nb-card");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nb-card-header");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Radar");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nb-card-body");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "ngx-chartjs-radar");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                            }
                        },
                        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _chartjs_pie_component__WEBPACK_IMPORTED_MODULE_2__["ChartjsPieComponent"], _chartjs_bar_component__WEBPACK_IMPORTED_MODULE_3__["ChartjsBarComponent"], _chartjs_line_component__WEBPACK_IMPORTED_MODULE_4__["ChartjsLineComponent"], _chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_5__["ChartjsMultipleXaxisComponent"], _chartjs_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_6__["ChartjsBarHorizontalComponent"], _chartjs_radar_component__WEBPACK_IMPORTED_MODULE_7__["ChartjsRadarComponent"]],
                        styles: [".nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%] {\n  display: block;\n  height: 28.875rem;\n  width: 100%;\n}\n.nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%]     chart, .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%]     chart, .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%]     chart, .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%]     chart, .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%]     chart, .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%]     chart {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%] {\n  display: block;\n  height: 28.875rem;\n  width: 100%;\n}\n.nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%]     chart, .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%]     chart, .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%]     chart, .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%]     chart, .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%]     chart, .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%]     chart {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%] {\n  display: block;\n  height: 28.875rem;\n  width: 100%;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%]     chart, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%]     chart, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%]     chart, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%]     chart, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%]     chart, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%]     chart {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%] {\n  display: block;\n  height: 28.875rem;\n  width: 100%;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%]     chart, .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%]     chart, .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%]     chart, .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%]     chart, .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%]     chart, .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%]     chart {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvX3RoZW1pbmcuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhcnRzL2NoYXJ0anMvY2hhcnRqcy5jb21wb25lbnQuc2NzcyIsIm5vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS9fbWl4aW5zLnNjc3MiLCJub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvX2Z1bmN0aW9ucy5zY3NzIiwibm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9jb3JlL192YXJpYW50cy5zY3NzIiwibm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy90aGVtZXMvX21hcHBpbmcuc2NzcyIsIm5vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS90aGVtaW5nL19yZWdpc3Rlci5zY3NzIiwibm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9jb3JlL3RoZW1pbmcvX2luc3RhbGwuc2NzcyIsIm5vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS90aGVtaW5nL19nZXQtdmFsdWUuc2NzcyIsIm5vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzL19kZWZhdWx0LnNjc3MiLCJub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lcy9fZGFyay5zY3NzIiwibm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy90aGVtZXMvX2Nvc21pYy5zY3NzIiwibm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy90aGVtZXMvX2NvcnBvcmF0ZS5zY3NzIiwic3JjL2FwcC9AdGhlbWUvc3R5bGVzL3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VDSUU7QURFRjs7O0VDRUU7QUNSRjs7OztFRGFFO0FDMkpGOzs7O0VEdEpFO0FDZ0xGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NENURDO0FFdElEOzs7O0VGMklFO0FHM0lGOzs7O0VIZ0pFO0FJaEpGOzs7O0VKcUpFO0FLbkpGOzs7O0VMd0pFO0FNMUpGOzs7O0VOK0pFO0FPL0pGOzs7O0VQb0tFO0FRcEtGOzs7O0VSeUtFO0FFektGOzs7O0VGOEtFO0FDOUtGOzs7O0VEbUxFO0FDWEY7Ozs7RURnQkU7QUNVRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRDBHQztBUzVTRDs7OztFVGlURTtBRWpURjs7OztFRnNURTtBQ3RURjs7OztFRDJURTtBQ25KRjs7OztFRHdKRTtBQzlIRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRGtQQztBUXBiRDs7OztFUnliRTtBRXpiRjs7OztFRjhiRTtBQzliRjs7OztFRG1jRTtBQzNSRjs7OztFRGdTRTtBQ3RRRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRDBYQztBVTVqQkQ7Ozs7RVZpa0JFO0FFamtCRjs7OztFRnNrQkU7QUN0a0JGOzs7O0VEMmtCRTtBQ25hRjs7OztFRHdhRTtBQzlZRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRGtnQkM7QVNwc0JEOzs7O0VUeXNCRTtBRXpzQkY7Ozs7RUY4c0JFO0FDOXNCRjs7OztFRG10QkU7QUMzaUJGOzs7O0VEZ2pCRTtBQ3RoQkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0Qwb0JDO0FRNTBCRDs7OztFUmkxQkU7QUVqMUJGOzs7O0VGczFCRTtBQ3QxQkY7Ozs7RUQyMUJFO0FDbnJCRjs7OztFRHdyQkU7QUM5cEJGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NEa3hCQztBV3A5QkQ7Ozs7RVh5OUJFO0FFejlCRjs7OztFRjg5QkU7QUM5OUJGOzs7O0VEbStCRTtBQzN6QkY7Ozs7RURnMEJFO0FDdHlCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRDA1QkM7QVE1bENEOzs7O0VSaW1DRTtBRWptQ0Y7Ozs7RUZzbUNFO0FDdG1DRjs7OztFRDJtQ0U7QUNuOEJGOzs7O0VEdzhCRTtBQzk2QkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0RraUNDO0FNenBDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLTjZxQ0M7QUFydkNIOzs7Ozs7RUFNRSxjQUFjO0VBQ2QsaUJZRTJCO0VaRDNCLFdBQVc7QUF1dkNmO0FBcnZDSTs7Ozs7O0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0FBNnZDakI7QU1sc0NJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tOdXRDQztBQS94Q0g7Ozs7OztFQU1FLGNBQWM7RUFDZCxpQllpRTJCO0VaaEUzQixXQUFXO0FBaXlDZjtBQS94Q0k7Ozs7OztFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztBQXV5Q2pCO0FNNXVDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLTml3Q0M7QUF6MENIOzs7Ozs7RUFNRSxjQUFjO0VBQ2QsaUJZdUIyQjtFWnRCM0IsV0FBVztBQTIwQ2Y7QUF6MENJOzs7Ozs7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7QUFpMUNqQjtBTXR4Q0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S04yeUNDO0FBbjNDSDs7Ozs7O0VBTUUsY0FBYztFQUNkLGlCWTRDMkI7RVozQzNCLFdBQVc7QUFxM0NmO0FBbjNDSTs7Ozs7O0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0FBMjNDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGFydHMvY2hhcnRqcy9jaGFydGpzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4vKlxuICBEZWNsYXJlIHZhcmlhYmxlcyBiZWZvcmUgbWFraW5nIHRoZW0gZ2xvYmFsLlxuICBkYXJ0LXNhc3MgZG9lc24ndCBhbGxvdyB0byBkZWNsYXJlIHZhcmlhYmxlIHdpdGggIWdsb2JhbC5cbiAqL1xuJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXM6IGZhbHNlICFkZWZhdWx0O1xuJG5iLWVuYWJsZWQtdGhlbWVzOiAoKTtcbiRuYi10aGVtZXM6ICgpO1xuJG5iLXRoZW1lLXByb2Nlc3MtbW9kZTogbnVsbDtcbiRuYi10aGVtZS1uYW1lOiAnZGVmYXVsdCc7XG4kbmItdGhlbWU6ICgpO1xuJG5iLXByb2Nlc3NlZC10aGVtZTogKCk7XG4kbmItdGhlbWUtZXhwb3J0LW1vZGU6IGZhbHNlICFkZWZhdWx0O1xuJG5iLXRoZW1lcy1leHBvcnQ6ICgpO1xuXG4vLyBwdWJsaWMgdmFyaWFibGVzXG4kbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllczogZmFsc2UgIWdsb2JhbCAhZGVmYXVsdDtcbiRuYi1lbmFibGVkLXRoZW1lczogKCkgIWdsb2JhbDtcbiRuYi10aGVtZXM6ICgpICFnbG9iYWw7XG5cbi8vIHByaXZhdGUgdmFyaWFibGVzXG4kbmItdGhlbWUtcHJvY2Vzcy1tb2RlOiAnbGF6eS1wcm9jZXNzJyAhZ2xvYmFsO1xuJG5iLXRoZW1lLW5hbWU6IG51bGwgIWdsb2JhbDtcbiRuYi10aGVtZTogKCkgIWdsb2JhbDtcbiRuYi1wcm9jZXNzZWQtdGhlbWU6ICgpICFnbG9iYWw7XG4kbmItdGhlbWUtZXhwb3J0LW1vZGU6IGZhbHNlICFnbG9iYWwgIWRlZmF1bHQ7XG4kbmItdGhlbWVzLWV4cG9ydDogKCkgIWdsb2JhbDtcblxuQGltcG9ydCAnY29yZS9taXhpbnMnO1xuQGltcG9ydCAnY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnY29yZS92YXJpYW50cyc7XG5AaW1wb3J0ICdjb3JlL3RoZW1pbmcvcmVnaXN0ZXInO1xuQGltcG9ydCAnY29yZS90aGVtaW5nL2luc3RhbGwnO1xuQGltcG9ydCAnY29yZS90aGVtaW5nL2dldC12YWx1ZSc7XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9AdGhlbWUvc3R5bGVzL3RoZW1lcyc7XG5cbkBpbmNsdWRlIG5iLWluc3RhbGwtY29tcG9uZW50KCkge1xuICBuZ3gtY2hhcnRqcy1waWUsXG4gIG5neC1jaGFydGpzLWJhcixcbiAgbmd4LWNoYXJ0anMtbGluZSxcbiAgbmd4LWNoYXJ0anMtbXVsdGlwbGUteGF4aXMsXG4gIG5neC1jaGFydGpzLWJhci1ob3Jpem9udGFsLFxuICBuZ3gtY2hhcnRqcy1yYWRhciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiBuYi10aGVtZShjYXJkLWhlaWdodC1tZWRpdW0pO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgOjpuZy1kZWVwIGNoYXJ0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1zY3JvbGxiYXJzKCRmZywgJGJnLCAkc2l6ZSwgJGJvcmRlci1yYWRpdXM6ICRzaXplIC8gMikge1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJGZnO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gIH1cblxuICAvLyBUT0RPOiByZW1vdmVcbiAgLy8gRm9yIEludGVybmV0IEV4cGxvcmVyXG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkZmc7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJGJnO1xufVxuXG5AbWl4aW4gbmItaGVhZGluZ3MoJGZyb206IDEsICR0bzogNikge1xuICBAZm9yICRpIGZyb20gJGZyb20gdGhyb3VnaCAkdG8ge1xuICAgIGgjeyRpfSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1vdXRsaW5lKCRvdXRsaW5lLXdpZHRoLCAkb3V0bGluZS1jb2xvciwgJGluc2V0LXNoYWRvdy1sZW5ndGg6IDApIHtcbiAgJG91dHNldC1zaGFkb3c6IDAgMCAwICRvdXRsaW5lLXdpZHRoICRvdXRsaW5lLWNvbG9yO1xuICBib3gtc2hhZG93OiAkb3V0c2V0LXNoYWRvdztcblxuICBAaWYgKCRpbnNldC1zaGFkb3ctbGVuZ3RoICE9IDApIHtcbiAgICAmOm5vdCg6aG92ZXIpOm5vdCg6YWN0aXZlKSB7XG4gICAgICAkaW5zZXQtc2hhZG93OiBpbnNldCAkaW5zZXQtc2hhZG93LWxlbmd0aCAkb3V0bGluZS1jb2xvcjtcbiAgICAgIGJveC1zaGFkb3c6ICRvdXRzZXQtc2hhZG93LCAkaW5zZXQtc2hhZG93O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMtYWN0aXZlIHtcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUsXG4gICY6aG92ZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXItaG9yaXpvbnRhbC1hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIGxlZnQ6IDUwJTtcbn1cblxuQG1peGluIGluc3RhbGwtdGh1bWIoKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci10aHVtYidcbiAgICAnOjotbW96LXJhbmdlLXRodW1iJ1xuICAgICc6Oi1tcy10aHVtYidcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtdHJhY2soKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjaydcbiAgICAnOjotbW96LXJhbmdlLXRyYWNrJ1xuICAgICc6Oi1tcy10cmFjaydcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eTogMSkge1xuICAkcGxhY2Vob2xkZXItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcidcbiAgICAnOjotbW96LXBsYWNlaG9sZGVyJ1xuICAgICc6LW1vei1wbGFjZWhvbGRlcidcbiAgICAnOi1tcy1pbnB1dC1wbGFjZWhvbGRlcidcbiAgKTtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eSk7XG4gIH1cblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHBsYWNlaG9sZGVyLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KTtcbiAgICB9XG5cbiAgICAmOmZvY3VzI3skc2VsZWN0b3J9IHtcbiAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyLWZvY3VzKCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KSB7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyLWZvY3VzKCkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuQG1peGluIG5iLWNvbXBvbmVudC1hbmltYXRpb24oJHByb3BlcnRpZXMuLi4pIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6ICRwcm9wZXJ0aWVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbn1cblxuQG1peGluIGFuaW1hdGlvbigkYW5pbWF0ZS4uLikge1xuICAkbWF4OiBsZW5ndGgoJGFuaW1hdGUpO1xuICAkYW5pbWF0aW9uczogJyc7XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4IHtcbiAgICAkYW5pbWF0aW9uczogI3skYW5pbWF0aW9ucyArIG50aCgkYW5pbWF0ZSwgJGkpfTtcblxuICAgIEBpZiAkaSA8ICRtYXgge1xuICAgICAgJGFuaW1hdGlvbnM6ICN7JGFuaW1hdGlvbnMgKyAnLCAnfTtcbiAgICB9XG4gIH1cbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb25zO1xuICAtbW96LWFuaW1hdGlvbjogICAgJGFuaW1hdGlvbnM7XG4gIC1vLWFuaW1hdGlvbjogICAgICAkYW5pbWF0aW9ucztcbiAgYW5pbWF0aW9uOiAgICAgICAgICRhbmltYXRpb25zO1xufVxuXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb25OYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG5AbWl4aW4gYnRuLXB1bHNlKCRuYW1lLCAkY29sb3IpIHtcbiAgJi5idG4tcHVsc2Uge1xuICAgIEBpbmNsdWRlIGFuaW1hdGlvbihidG4tI3skbmFtZX0tcHVsc2UgMS41cyBpbmZpbml0ZSk7XG4gIH1cblxuICBAaW5jbHVkZSBrZXlmcmFtZXMoYnRuLSN7JG5hbWV9LXB1bHNlKSB7XG4gICAgMCUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG9wYWNpdHk6IG5iLXRoZW1lKGJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgJGNvbG9yO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBvcGFjaXR5OiBuYi10aGVtZShidG4tZGlzYWJsZWQtb3BhY2l0eSk7XG4gICAgfVxuICB9XG59XG5cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cblxuQG1peGluIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJHNlbGVjdG9yLCAkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gICN7JHNlbGVjdG9yfSAmIHtcbiAgICBAaWYgJHByb3AgIT0gbnVsbCB7XG4gICAgICAjeyRwcm9wfTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1sdHIoJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICBAaW5jbHVkZSBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCdbZGlyPWx0cl0nLCAkcHJvcCwgJHZhbHVlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLXJ0bCgkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gIEBpbmNsdWRlIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJ1tkaXI9cnRsXScsICRwcm9wLCAkdmFsdWUpIHtcbiAgICBAY29udGVudDtcbiAgfTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuLy8vIFNsaWdodGx5IGxpZ2h0ZW4gYSBjb2xvclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIC0gY29sb3IgdG8gdGludFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3Jcbi8vLyBAcmV0dXJuIHtDb2xvcn1cbkBmdW5jdGlvbiB0aW50KCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgod2hpdGUsICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG4vLy8gU2xpZ2h0bHkgZGFya2VuIGEgY29sb3Jcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciAtIGNvbG9yIHRvIHNoYWRlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRwZXJjZW50YWdlIC0gcGVyY2VudGFnZSBvZiBgJGNvbG9yYCBpbiByZXR1cm5lZCBjb2xvclxuLy8vIEByZXR1cm4ge0NvbG9yfVxuQGZ1bmN0aW9uIHNoYWRlKCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgoYmxhY2ssICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG5AZnVuY3Rpb24gbWFwLXNldCgkbWFwLCAka2V5LCAkdmFsdWU6IG51bGwpIHtcbiAgJG5ldzogKCRrZXk6ICR2YWx1ZSk7XG4gIEByZXR1cm4gbWFwLW1lcmdlKCRtYXAsICRuZXcpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AZnVuY3Rpb24gbmItZ2V0LXN0YXR1c2VzKCkge1xuICBAcmV0dXJuICdiYXNpYycsICdwcmltYXJ5JywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInLCAnaW5mbycsICdjb250cm9sJztcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC1zaXplcygpIHtcbiAgQHJldHVybiAndGlueScsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLCAnZ2lhbnQnO1xufVxuXG5AZnVuY3Rpb24gbmItZ2V0LXNoYXBlcygpIHtcbiAgQHJldHVybiAncmVjdGFuZ2xlJywgJ3NlbWktcm91bmQnLCAncm91bmQnO1xufVxuXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbiRldmEtbWFwcGluZzogKFxuXG4gIC8qIENvbXBvbmVudHMgbWFwcGluZ3MgLSBtYXBzIHRoZW1lIHZhcmlhYmxlcyBvbnRvIGNvbXBvbmVudCB2YXJpYWJsZXMgKi9cblxuICBsaW5rLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgbGluay10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSxcbiAgbGluay10ZXh0LWZvY3VzLWNvbG9yOiB0ZXh0LXByaW1hcnktZm9jdXMtY29sb3IsXG4gIGxpbmstdGV4dC1ob3Zlci1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuXG4gIGNhcmQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjYXJkLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhcmQtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGNhcmQtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgY2FyZC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgY2FyZC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgY2FyZC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgY2FyZC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjYXJkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGNhcmQtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY2FyZC1wYWRkaW5nOiAxcmVtIDEuNXJlbSxcbiAgY2FyZC1zaGFkb3c6IG5vbmUsXG4gIGNhcmQtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgY2FyZC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBjYXJkLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG5cbiAgY2FyZC1oZWFkZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FyZC1oZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgY2FyZC1oZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjYXJkLWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjYXJkLWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIGNhcmQtaGVhZGVyLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgY2FyZC1oZWFkZXItYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FyZC1oZWFkZXItcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY2FyZC1oZWFkZXItaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhcmQtaGVhZGVyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FyZC1oZWFkZXItd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhcmQtaGVhZGVyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcblxuICBjYXJkLWhlaWdodC10aW55OiAxMy41cmVtLFxuICBjYXJkLWhlaWdodC1zbWFsbDogMjEuMTg3NXJlbSxcbiAgY2FyZC1oZWlnaHQtbWVkaXVtOiAyOC44NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LWxhcmdlOiAzNi41NjI1cmVtLFxuICBjYXJkLWhlaWdodC1naWFudDogNDQuMjVyZW0sXG4gIGNhcmQtbWFyZ2luLWJvdHRvbTogMS44NzVyZW0sXG5cbiAgY2FyZC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgY2FyZC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIGNhcmQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG5cbiAgaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgaGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBoZWFkZXItaGVpZ2h0OiA0Ljc1cmVtLFxuICBoZWFkZXItcGFkZGluZzogMS4yNXJlbSxcbiAgaGVhZGVyLXNoYWRvdzogc2hhZG93LFxuXG4gIGZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGZvb3Rlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBmb290ZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGZvb3Rlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBmb290ZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGZvb3Rlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgZm9vdGVyLXRleHQtaGlnaGxpZ2h0LWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBmb290ZXItaGVpZ2h0OiA0LjcyNXJlbSxcbiAgZm9vdGVyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIGZvb3Rlci1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBmb290ZXItZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgZm9vdGVyLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIGZvb3Rlci1zaGFkb3c6IHNoYWRvdyxcblxuICBsYXlvdXQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBsYXlvdXQtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgbGF5b3V0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBsYXlvdXQtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgbGF5b3V0LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBsYXlvdXQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGxheW91dC1taW4taGVpZ2h0OiAxMDB2aCxcbiAgbGF5b3V0LWNvbnRlbnQtd2lkdGg6IDkwMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtbWluLXdpZHRoOiAzMDBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLW1heC13aWR0aDogMTkyMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBsYXlvdXQtd2luZG93LW1vZGUtcGFkZGluZy10b3A6IDQuNzVyZW0sXG4gIGxheW91dC13aW5kb3ctc2hhZG93OiBzaGFkb3csXG4gIGxheW91dC1wYWRkaW5nOiAyLjI1cmVtIDIuMjVyZW0gMC43NXJlbSxcbiAgbGF5b3V0LW1lZGl1bS1wYWRkaW5nOiAxLjVyZW0gMS41cmVtIDAuNXJlbSxcbiAgbGF5b3V0LXNtYWxsLXBhZGRpbmc6IDFyZW0gMXJlbSAwLFxuICBsYXlvdXQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBsYXlvdXQtc2Nyb2xsYmFyLWNvbG9yOiBzY3JvbGxiYXItY29sb3IsXG4gIGxheW91dC1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcblxuICBzaWRlYmFyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2lkZWJhci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzaWRlYmFyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzaWRlYmFyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNpZGViYXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNpZGViYXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHNpZGViYXItaGVpZ2h0OiAxMDB2aCxcbiAgc2lkZWJhci13aWR0aDogMTZyZW0sXG4gIHNpZGViYXItd2lkdGgtY29tcGFjdDogMy41cmVtLFxuICBzaWRlYmFyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIHNpZGViYXItaGVhZGVyLWhlaWdodDogMy41cmVtLFxuICBzaWRlYmFyLWZvb3Rlci1oZWlnaHQ6IDMuNXJlbSxcbiAgc2lkZWJhci1zaGFkb3c6IHNoYWRvdyxcbiAgc2lkZWJhci1tZW51LWl0ZW0taGlnaGxpZ2h0LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNpZGViYXItc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzaWRlYmFyLXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBzaWRlYmFyLXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuXG4gIG1lbnUtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIG1lbnUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgbWVudS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIG1lbnUtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIG1lbnUtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBtZW51LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcblxuICBtZW51LWdyb3VwLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBtZW51LWl0ZW0tYm9yZGVyLXJhZGl1czogMCxcbiAgbWVudS1pdGVtLXBhZGRpbmc6IDAuNzVyZW0gMXJlbSxcblxuICBtZW51LWl0ZW0taG92ZXItYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LWl0ZW0taG92ZXItY3Vyc29yOiBwb2ludGVyLFxuICBtZW51LWl0ZW0taG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuICBtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcjogbWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3IsXG5cbiAgbWVudS1pdGVtLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBtZW51LWJhY2tncm91bmQtY29sb3IsXG4gIG1lbnUtaXRlbS1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBtZW51LWl0ZW0taWNvbi1hY3RpdmUtY29sb3I6IG1lbnUtaXRlbS1hY3RpdmUtdGV4dC1jb2xvcixcblxuICBtZW51LWl0ZW0taWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBtZW51LWl0ZW0taWNvbi1tYXJnaW46IDAgMC41cmVtIDAgMCxcbiAgbWVudS1pdGVtLWljb24td2lkdGg6IDEuMjVyZW0sXG5cbiAgbWVudS1pdGVtLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIG1lbnUtaXRlbS1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBtZW51LWl0ZW0tZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICBtZW51LXN1Ym1lbnUtYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgbWVudS1zdWJtZW51LW1hcmdpbjogMCxcbiAgbWVudS1zdWJtZW51LXBhZGRpbmc6IDAgMS4yNXJlbSxcblxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItY29sb3I6IG1lbnUtc3VibWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItd2lkdGg6IDAsXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IDAsXG4gIG1lbnUtc3VibWVudS1pdGVtLXBhZGRpbmc6IG1lbnUtaXRlbS1wYWRkaW5nLFxuXG4gIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0taG92ZXItYm9yZGVyLWNvbG9yOiBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3I6IG1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWhvdmVyLWNvbG9yOiBtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcixcblxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS10ZXh0LWNvbG9yOiBtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWljb24tYWN0aXZlLWNvbG9yOiBtZW51LWl0ZW0taWNvbi1hY3RpdmUtY29sb3IsXG5cbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci10ZXh0LWNvbG9yOiBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWFjdGl2ZS1ob3Zlci1jb2xvcjogbWVudS1zdWJtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcixcblxuICB0YWJzZXQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC1ib3JkZXItcmFkaXVzOiAwLFxuICB0YWJzZXQtc2hhZG93OiBub25lLFxuXG4gIHRhYnNldC10YWItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItcGFkZGluZzogMXJlbSAycmVtLFxuICB0YWJzZXQtdGFiLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgdGFic2V0LXRhYi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgdGFic2V0LXRhYi10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgdGFic2V0LXRhYi10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgdGFic2V0LXRhYi10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIHRhYnNldC10YWItdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgdGFic2V0LXRhYi11bmRlcmxpbmUtd2lkdGg6IDAuMjVyZW0sXG4gIHRhYnNldC10YWItdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LXRhYi1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgdGFic2V0LXRhYi1hY3RpdmUtdW5kZXJsaW5lLWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIHRhYnNldC10YWItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICB0YWJzZXQtdGFiLWZvY3VzLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICB0YWJzZXQtdGFiLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgdGFic2V0LXRhYi1ob3Zlci11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgdGFic2V0LXRhYi1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LXRhYi1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICB0YWJzZXQtdGFiLWRpc2FibGVkLXVuZGVybGluZS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgdGFic2V0LWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIHRhYnNldC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICB0YWJzZXQtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICB0YWJzZXQtY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LWNvbnRlbnQtcGFkZGluZzogMXJlbSAycmVtLFxuICB0YWJzZXQtY29udGVudC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0YWJzZXQtY29udGVudC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdGFic2V0LWNvbnRlbnQtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdGFic2V0LWNvbnRlbnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHRhYnNldC1jb250ZW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuXG4gIHRhYnNldC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgdGFic2V0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgdGFic2V0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuICB0YWJzZXQtdGFiLXRleHQtaGlkZS1icmVha3BvaW50OiAzNnJlbSxcblxuICByb3V0ZS10YWJzZXQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC1ib3JkZXItcmFkaXVzOiAwLFxuICByb3V0ZS10YWJzZXQtc2hhZG93OiBub25lLFxuXG4gIHJvdXRlLXRhYnNldC10YWItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC10YWItcGFkZGluZzogMXJlbSAycmVtLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIHJvdXRlLXRhYnNldC10YWItdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgcm91dGUtdGFic2V0LXRhYi11bmRlcmxpbmUtd2lkdGg6IDAuMjVyZW0sXG4gIHJvdXRlLXRhYnNldC10YWItdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICByb3V0ZS10YWJzZXQtdGFiLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFic2V0LXRhYi1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICByb3V0ZS10YWJzZXQtdGFiLWFjdGl2ZS11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcblxuICByb3V0ZS10YWJzZXQtdGFiLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi1mb2N1cy11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcblxuICByb3V0ZS10YWJzZXQtdGFiLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi1ob3Zlci11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcblxuICByb3V0ZS10YWJzZXQtdGFiLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJvdXRlLXRhYnNldC10YWItZGlzYWJsZWQtdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICByb3V0ZS10YWJzZXQtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgcm91dGUtdGFic2V0LWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIHJvdXRlLXRhYnNldC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuXG4gIHJvdXRlLXRhYnNldC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgcm91dGUtdGFic2V0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgcm91dGUtdGFic2V0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtaGlkZS1icmVha3BvaW50OiAzNnJlbSxcblxuICB1c2VyLXBpY3R1cmUtYm94LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB1c2VyLXBpY3R1cmUtYm94LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIHVzZXItcGljdHVyZS1ib3gtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHVzZXItaW5pdGlhbHMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdXNlci1pbml0aWFscy10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdXNlci1pbml0aWFscy10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgdXNlci1uYW1lLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHVzZXItbmFtZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdXNlci1uYW1lLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICB1c2VyLXRpdGxlLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHVzZXItdGl0bGUtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtMi1mb250LWZhbWlseSxcbiAgdXNlci10aXRsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtd2VpZ2h0LFxuXG4gIHVzZXItcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IDAuNXJlbSxcbiAgdXNlci1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIHVzZXItcm91bmQtYm9yZGVyLXJhZGl1czogNTAlLFxuXG4gIHVzZXItdGlueS1oZWlnaHQ6IDEuMjVyZW0sXG4gIHVzZXItdGlueS13aWR0aDogMS4yNXJlbSxcbiAgdXNlci10aW55LWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXRpbnktaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXRpbnktbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSxcbiAgdXNlci10aW55LW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXRpbnktdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItdGlueS10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG5cbiAgdXNlci1zbWFsbC1oZWlnaHQ6IDEuNXJlbSxcbiAgdXNlci1zbWFsbC13aWR0aDogMS41cmVtLFxuICB1c2VyLXNtYWxsLWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXNtYWxsLWluaXRpYWxzLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcbiAgdXNlci1zbWFsbC1uYW1lLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXNtYWxsLW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXNtYWxsLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXNtYWxsLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcblxuICB1c2VyLW1lZGl1bS1oZWlnaHQ6IDIuNXJlbSxcbiAgdXNlci1tZWRpdW0td2lkdGg6IDIuNXJlbSxcbiAgdXNlci1tZWRpdW0taW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1tZWRpdW0taW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItbWVkaXVtLW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1tZWRpdW0tbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1tZWRpdW0tdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItbWVkaXVtLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcblxuICB1c2VyLWxhcmdlLWhlaWdodDogMy4yNXJlbSxcbiAgdXNlci1sYXJnZS13aWR0aDogMy4yNXJlbSxcbiAgdXNlci1sYXJnZS1pbml0aWFscy10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWxhcmdlLWluaXRpYWxzLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICB1c2VyLWxhcmdlLW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1sYXJnZS1uYW1lLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICB1c2VyLWxhcmdlLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtc2l6ZSxcbiAgdXNlci1sYXJnZS10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWxpbmUtaGVpZ2h0LFxuXG4gIHVzZXItZ2lhbnQtaGVpZ2h0OiA0cmVtLFxuICB1c2VyLWdpYW50LXdpZHRoOiA0cmVtLFxuICB1c2VyLWdpYW50LWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHVzZXItZ2lhbnQtaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItZ2lhbnQtbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWdpYW50LW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItZ2lhbnQtdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1naWFudC10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBwb3BvdmVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHBvcG92ZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIHBvcG92ZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgcG9wb3Zlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgcG9wb3Zlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgcG9wb3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHBvcG92ZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHBvcG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcG9wb3Zlci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBwb3BvdmVyLXNoYWRvdzogc2hhZG93LFxuICBwb3BvdmVyLWFycm93LXNpemU6IDAuNjg3NXJlbSxcbiAgcG9wb3Zlci1wYWRkaW5nOiAwLjc1cmVtIDFyZW0sXG5cbiAgY29udGV4dC1tZW51LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgY29udGV4dC1tZW51LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXdpZHRoOiAwLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY29udGV4dC1tZW51LXRleHQtYWxpZ246IGNlbnRlcixcbiAgY29udGV4dC1tZW51LW1pbi13aWR0aDogMTByZW0sXG4gIGNvbnRleHQtbWVudS1tYXgtd2lkdGg6IDE1cmVtLFxuICBjb250ZXh0LW1lbnUtc2hhZG93OiBzaGFkb3csXG5cbiAgYWN0aW9ucy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYWN0aW9ucy1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBhY3Rpb25zLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGFjdGlvbnMtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgYWN0aW9ucy1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGFjdGlvbnMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWN0aW9ucy10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgYWN0aW9ucy10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgYWN0aW9ucy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG5cbiAgYWN0aW9ucy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBhY3Rpb25zLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYWN0aW9ucy10aW55LWhlaWdodDogMXJlbSxcbiAgYWN0aW9ucy10aW55LWljb24taGVpZ2h0OiBhY3Rpb25zLXRpbnktaGVpZ2h0LFxuICBhY3Rpb25zLXRpbnktcGFkZGluZzogMCAxLjI1cmVtLFxuICBhY3Rpb25zLXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLFxuICBhY3Rpb25zLXNtYWxsLWhlaWdodDogMS41cmVtLFxuICBhY3Rpb25zLXNtYWxsLWljb24taGVpZ2h0OiBhY3Rpb25zLXNtYWxsLWhlaWdodCxcbiAgYWN0aW9ucy1zbWFsbC1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSxcbiAgYWN0aW9ucy1tZWRpdW0taGVpZ2h0OiAyLjI1cmVtLFxuICBhY3Rpb25zLW1lZGl1bS1pY29uLWhlaWdodDogYWN0aW9ucy1tZWRpdW0taGVpZ2h0LFxuICBhY3Rpb25zLW1lZGl1bS1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBhY3Rpb25zLWxhcmdlLWhlaWdodDogMy41cmVtLFxuICBhY3Rpb25zLWxhcmdlLWljb24taGVpZ2h0OiBhY3Rpb25zLWxhcmdlLWhlaWdodCxcbiAgYWN0aW9ucy1sYXJnZS1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLWxhcmdlLWZvbnQtc2l6ZSxcbiAgYWN0aW9ucy1naWFudC1oZWlnaHQ6IDRyZW0sXG4gIGFjdGlvbnMtZ2lhbnQtaWNvbi1oZWlnaHQ6IGFjdGlvbnMtZ2lhbnQtaGVpZ2h0LFxuICBhY3Rpb25zLWdpYW50LXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgYWN0aW9ucy1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplLFxuXG4gIHNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlYXJjaC1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBzZWFyY2gtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgc2VhcmNoLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIHNlYXJjaC1leHRyYS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlYXJjaC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWFyY2gtdGV4dC1mb250LWZhbWlseTogdGV4dC1oZWFkaW5nLTEtZm9udC1mYW1pbHksXG4gIHNlYXJjaC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTEtZm9udC1zaXplLFxuICBzZWFyY2gtdGV4dC1mb250LXdlaWdodDogdGV4dC1oZWFkaW5nLTEtZm9udC13ZWlnaHQsXG4gIHNlYXJjaC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWhlYWRpbmctMS1saW5lLWhlaWdodCxcbiAgc2VhcmNoLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VhcmNoLWluZm8tdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWFyY2gtaW5mby10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBzZWFyY2gtaW5mby10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHNlYXJjaC1pbmZvLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHNlYXJjaC1pbmZvLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzbWFydC10YWJsZS1oZWFkZXItbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzbWFydC10YWJsZS1oZWFkZXItZmc6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1iZzogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuXG4gIHNtYXJ0LXRhYmxlLWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc21hcnQtdGFibGUtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNtYXJ0LXRhYmxlLWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc21hcnQtdGFibGUtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzbWFydC10YWJsZS1mZzogdGV4dC1iYXNpYy1jb2xvcixcbiAgc21hcnQtdGFibGUtYmc6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcblxuICBzbWFydC10YWJsZS1iZy1ldmVuOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNtYXJ0LXRhYmxlLWZnLXNlY29uZGFyeTogdGV4dC1iYXNpYy1jb2xvcixcbiAgc21hcnQtdGFibGUtYmctYWN0aXZlOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHNtYXJ0LXRhYmxlLXBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW0sXG4gIHNtYXJ0LXRhYmxlLWZpbHRlci1wYWRkaW5nOiAwLjM3NXJlbSAwLjVyZW0sXG4gIHNtYXJ0LXRhYmxlLXNlcGFyYXRvcjogZGl2aWRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcblxuICBzbWFydC10YWJsZS1hY3Rpb24tYWRkLWVkaXQtaG92ZXItdGV4dC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzbWFydC10YWJsZS1hY3Rpb24tY2FuY2VsLWRlbGV0ZS1ob3Zlci10ZXh0LWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcblxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWJvcmRlci1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWJvcmRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi10ZXh0LWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1mb2N1cy1ib3JkZXItY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tYWN0aXZlLWJvcmRlci1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3IsXG5cbiAgc21hcnQtdGFibGUtcGFnaW5nLWZvbnQtZmFtaWx5OiBidXR0b24tdGV4dC1mb250LWZhbWlseSxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWZvbnQtc2l6ZTogYnV0dG9uLW1lZGl1bS10ZXh0LWZvbnQtc2l6ZSxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWxpbmUtaGVpZ2h0OiBidXR0b24tbWVkaXVtLXRleHQtbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1mZy1hY3RpdmU6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJnLWFjdGl2ZTogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXI6IHRyYW5zcGFyZW50LFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXItYm9yZGVyLWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWhvdmVyLXRleHQtY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItdGV4dC1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLXBhZ2UtdGV4dC1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS10ZXh0LWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctcGFnZS1mb2N1cy1ib3JkZXItY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctcGFnZS1mb2N1cy10ZXh0LWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLXRleHQtY29sb3IsXG5cbiAgdG9hc3RyLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHRvYXN0ci1ib3JkZXItd2lkdGg6IDFweCxcbiAgdG9hc3RyLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHRvYXN0ci1wYWRkaW5nOiAxcmVtLFxuICB0b2FzdHItc2hhZG93OiBzaGFkb3csXG5cbiAgdG9hc3RyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLTItZm9udC1mYW1pbHksXG4gIHRvYXN0ci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtMi1mb250LXNpemUsXG4gIHRvYXN0ci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtd2VpZ2h0LFxuICB0b2FzdHItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtMi1saW5lLWhlaWdodCxcbiAgdG9hc3RyLXRpdGxlLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHRvYXN0ci10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHRvYXN0ci10aXRsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICB0b2FzdHItdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICB0b2FzdHItYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2FzdHItYmFzaWMtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgdG9hc3RyLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvYXN0ci1pY29uLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24tYmFzaWMtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuXG4gIHRvYXN0ci1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9hc3RyLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvYXN0ci1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuXG4gIHRvYXN0ci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9hc3RyLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvYXN0ci1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24tc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuXG4gIHRvYXN0ci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9hc3RyLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRvYXN0ci1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24taW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuXG4gIHRvYXN0ci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9hc3RyLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvYXN0ci13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24td2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuXG4gIHRvYXN0ci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvYXN0ci1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9hc3RyLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvYXN0ci1pY29uLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuXG4gIHRvYXN0ci1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdG9hc3RyLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHRvYXN0ci1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgdG9hc3RyLWljb24tY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHRvYXN0ci1pY29uLWNvbnRyb2wtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuXG4gIGJ1dHRvbi1jdXJzb3I6IHBvaW50ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICBidXR0b24tb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgYnV0dG9uLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBidXR0b24tdGV4dC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGJ1dHRvbi1kaXNhYmxlZC1jdXJzb3I6IGRlZmF1bHQsXG5cbiAgYnV0dG9uLXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLFxuICBidXR0b24tdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi10aW55LWxpbmUtaGVpZ2h0LFxuICBidXR0b24tdGlueS1pY29uLXNpemU6IDAuNzVyZW0sXG4gIGJ1dHRvbi10aW55LWljb24tdmVydGljYWwtbWFyZ2luOiAtMC4xMjVyZW0sXG4gIGJ1dHRvbi10aW55LWljb24tb2Zmc2V0OiAwLjM3NXJlbSxcblxuICBidXR0b24tc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSxcbiAgYnV0dG9uLXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLXNtYWxsLWxpbmUtaGVpZ2h0LFxuICBidXR0b24tc21hbGwtaWNvbi1zaXplOiAxcmVtLFxuICBidXR0b24tc21hbGwtaWNvbi12ZXJ0aWNhbC1tYXJnaW46IC0wLjEyNXJlbSxcbiAgYnV0dG9uLXNtYWxsLWljb24tb2Zmc2V0OiAwLjM3NXJlbSxcblxuICBidXR0b24tbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBidXR0b24tbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcbiAgYnV0dG9uLW1lZGl1bS1pY29uLXNpemU6IDEuMjVyZW0sXG4gIGJ1dHRvbi1tZWRpdW0taWNvbi12ZXJ0aWNhbC1tYXJnaW46IC0wLjEyNXJlbSxcbiAgYnV0dG9uLW1lZGl1bS1pY29uLW9mZnNldDogMC41cmVtLFxuXG4gIGJ1dHRvbi1sYXJnZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbGFyZ2UtZm9udC1zaXplLFxuICBidXR0b24tbGFyZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbGFyZ2UtbGluZS1oZWlnaHQsXG4gIGJ1dHRvbi1sYXJnZS1pY29uLXNpemU6IDEuNXJlbSxcbiAgYnV0dG9uLWxhcmdlLWljb24tdmVydGljYWwtbWFyZ2luOiAtMC4xMjVyZW0sXG4gIGJ1dHRvbi1sYXJnZS1pY29uLW9mZnNldDogMC43NXJlbSxcblxuICBidXR0b24tZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLWdpYW50LWZvbnQtc2l6ZSxcbiAgYnV0dG9uLWdpYW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLWdpYW50LWxpbmUtaGVpZ2h0LFxuICBidXR0b24tZ2lhbnQtaWNvbi1zaXplOiAxLjVyZW0sXG4gIGJ1dHRvbi1naWFudC1pY29uLXZlcnRpY2FsLW1hcmdpbjogLTAuMTI1cmVtLFxuICBidXR0b24tZ2lhbnQtaWNvbi1vZmZzZXQ6IDAuNzVyZW0sXG5cbiAgYnV0dG9uLXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBidXR0b24tc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBidXR0b24tcm91bmQtYm9yZGVyLXJhZGl1czogMS41cmVtLFxuXG4gIGJ1dHRvbi1maWxsZWQtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgYnV0dG9uLWZpbGxlZC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgYnV0dG9uLWZpbGxlZC10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuXG4gIGJ1dHRvbi1maWxsZWQtdGlueS1wYWRkaW5nOiAwLjMxMjVyZW0gMC42MjVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtc21hbGwtcGFkZGluZzogMC40Mzc1cmVtIDAuODc1cmVtLFxuICBidXR0b24tZmlsbGVkLW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDEuMTI1cmVtLFxuICBidXR0b24tZmlsbGVkLWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxLjM3NXJlbSxcblxuICBidXR0b24tZmlsbGVkLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24tb3V0bGluZS1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgYnV0dG9uLW91dGxpbmUtdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgYnV0dG9uLW91dGxpbmUtZm9jdXMtaW5zZXQtc2hhZG93LWxlbmd0aDogMCAwIDAgMTAwdm1heCxcblxuICBidXR0b24tb3V0bGluZS10aW55LXBhZGRpbmc6IDAuMzEyNXJlbSAwLjYyNXJlbSxcbiAgYnV0dG9uLW91dGxpbmUtc21hbGwtcGFkZGluZzogMC40Mzc1cmVtIDAuODc1cmVtLFxuICBidXR0b24tb3V0bGluZS1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDEuMTI1cmVtLFxuICBidXR0b24tb3V0bGluZS1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxLjM3NXJlbSxcblxuICBidXR0b24tb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWhvdmVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWhvdmVyLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1pbmZvLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWZvY3VzLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctaG92ZXItdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYWN0aXZlLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWZvY3VzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3QtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgYnV0dG9uLWdob3N0LWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBidXR0b24tZ2hvc3QtdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgYnV0dG9uLWdob3N0LWZvY3VzLWluc2V0LXNoYWRvdy1sZW5ndGg6IDAgMCAwIDEwMHZtYXgsXG5cbiAgYnV0dG9uLWdob3N0LXRpbnktcGFkZGluZzogMC4zMTI1cmVtIDAuNjI1cmVtLFxuICBidXR0b24tZ2hvc3Qtc21hbGwtcGFkZGluZzogMC40Mzc1cmVtIDAuODc1cmVtLFxuICBidXR0b24tZ2hvc3QtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLWdob3N0LWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLWdob3N0LWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxLjM3NXJlbSxcblxuICBidXR0b24tZ2hvc3QtYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1mb2N1cy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtYmFzaWMtaG92ZXItdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtYmFzaWMtYWN0aXZlLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWZvY3VzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LWluZm8tdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3QtaW5mby1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWluZm8taG92ZXItdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWluZm8tYWN0aXZlLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZm9jdXMtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWhvdmVyLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZm9jdXMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWhvdmVyLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWFjdGl2ZS10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24taGVyby1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24taGVyby1ib3JkZXItd2lkdGg6IDAsXG4gIGJ1dHRvbi1oZXJvLXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsXG5cbiAgYnV0dG9uLWhlcm8tdGlueS1wYWRkaW5nOiAwLjM3NXJlbSAwLjY4NzVyZW0sXG4gIGJ1dHRvbi1oZXJvLXNtYWxsLXBhZGRpbmc6IDAuNXJlbSAwLjkzNzVyZW0sXG4gIGJ1dHRvbi1oZXJvLW1lZGl1bS1wYWRkaW5nOiAwLjc1cmVtIDEuMTg3NXJlbSxcbiAgYnV0dG9uLWhlcm8tbGFyZ2UtcGFkZGluZzogMC44NzVyZW0gMS4xODc1cmVtLFxuICBidXR0b24taGVyby1naWFudC1wYWRkaW5nOiAxcmVtIDEuNDM3NXJlbSxcblxuICBidXR0b24taGVyby1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWhlcm8tdGV4dC1zaGFkb3c6IHNoYWRvdyxcbiAgYnV0dG9uLWhlcm8tYmV2ZWwtc2l6ZTogMCAwIDAgMCxcbiAgYnV0dG9uLWhlcm8tZ2xvdy1zaXplOiAwIDAgMCAwLFxuICBidXR0b24taGVyby1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICBidXR0b24taGVyby1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtYmV2ZWwtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZ2xvdy1jb2xvcjogY29sb3ItYmFzaWMtNzAwLFxuICBidXR0b24taGVyby1iYXNpYy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0zMDAsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLFxuICBidXR0b24taGVyby1iYXNpYy1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktYmV2ZWwtY29sb3I6IGNvbG9yLXByaW1hcnktNjAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWdsb3ctY29sb3I6IGNvbG9yLXByaW1hcnktNzAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS00MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBidXR0b24taGVyby1wcmltYXJ5LWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktMzAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBidXR0b24taGVyby1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1iZXZlbC1jb2xvcjogY29sb3Itc3VjY2Vzcy02MDAsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZ2xvdy1jb2xvcjogY29sb3Itc3VjY2Vzcy03MDAsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTQwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBidXR0b24taGVyby1zdWNjZXNzLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy0zMDAsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24taGVyby1pbmZvLWJldmVsLWNvbG9yOiBjb2xvci1pbmZvLTYwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1nbG93LWNvbG9yOiBjb2xvci1pbmZvLTcwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNDAwLFxuICBidXR0b24taGVyby1pbmZvLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8taW5mby1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNTAwLFxuICBidXR0b24taGVyby1pbmZvLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLWluZm8taG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTMwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBidXR0b24taGVyby1pbmZvLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNTAwLFxuICBidXR0b24taGVyby1pbmZvLWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8taW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRpc2FibGVkLFxuICBidXR0b24taGVyby1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8td2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctYmV2ZWwtY29sb3I6IGNvbG9yLXdhcm5pbmctNjAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWdsb3ctY29sb3I6IGNvbG9yLXdhcm5pbmctNzAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy00MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBidXR0b24taGVyby13YXJuaW5nLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy01MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctMzAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy01MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICBidXR0b24taGVyby13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24taGVyby1kYW5nZXItYmV2ZWwtY29sb3I6IGNvbG9yLWRhbmdlci02MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1nbG93LWNvbG9yOiBjb2xvci1kYW5nZXItNzAwLFxuICBidXR0b24taGVyby1kYW5nZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItNDAwLFxuICBidXR0b24taGVyby1kYW5nZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci01MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci0zMDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItNTAwLFxuICBidXR0b24taGVyby1kYW5nZXItYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBidXR0b24taGVyby1jb250cm9sLWJldmVsLWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtZ2xvdy1jb2xvcjogY29sb3ItYmFzaWMtNzAwLFxuICBidXR0b24taGVyby1jb250cm9sLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBidXR0b24taGVyby1jb250cm9sLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICBidXR0b24taGVyby1jb250cm9sLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24taGVyby1jb250cm9sLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBidXR0b24taGVyby1jb250cm9sLWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpY29uLWJ1dHRvbi1maWxsZWQtdGlueS1wYWRkaW5nOiAwLjQzNzVyZW0gMC4zMTI1cmVtLFxuICBpY29uLWJ1dHRvbi1maWxsZWQtc21hbGwtcGFkZGluZzogMC41NjI1cmVtIDAuNDM3NXJlbSxcbiAgaWNvbi1idXR0b24tZmlsbGVkLW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMC41NjI1cmVtLFxuICBpY29uLWJ1dHRvbi1maWxsZWQtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDAuNjg3NXJlbSxcbiAgaWNvbi1idXR0b24tZmlsbGVkLWdpYW50LXBhZGRpbmc6IDEuMDYyNXJlbSAwLjkzNzVyZW0sXG5cbiAgaWNvbi1idXR0b24tb3V0bGluZS10aW55LXBhZGRpbmc6IDAuNDM3NXJlbSAwLjMxMjVyZW0sXG4gIGljb24tYnV0dG9uLW91dGxpbmUtc21hbGwtcGFkZGluZzogMC41NjI1cmVtIDAuNDM3NXJlbSxcbiAgaWNvbi1idXR0b24tb3V0bGluZS1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDAuNTYyNXJlbSxcbiAgaWNvbi1idXR0b24tb3V0bGluZS1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMC42ODc1cmVtLFxuICBpY29uLWJ1dHRvbi1vdXRsaW5lLWdpYW50LXBhZGRpbmc6IDEuMDYyNXJlbSAwLjkzNzVyZW0sXG5cbiAgaWNvbi1idXR0b24tZ2hvc3QtdGlueS1wYWRkaW5nOiAwLjQzNzVyZW0gMC4zMTI1cmVtLFxuICBpY29uLWJ1dHRvbi1naG9zdC1zbWFsbC1wYWRkaW5nOiAwLjU2MjVyZW0gMC40Mzc1cmVtLFxuICBpY29uLWJ1dHRvbi1naG9zdC1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDAuNTYyNXJlbSxcbiAgaWNvbi1idXR0b24tZ2hvc3QtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDAuNjg3NXJlbSxcbiAgaWNvbi1idXR0b24tZ2hvc3QtZ2lhbnQtcGFkZGluZzogMS4wNjI1cmVtIDAuOTM3NXJlbSxcblxuICBpY29uLWJ1dHRvbi1oZXJvLXRpbnktcGFkZGluZzogMC41cmVtIDAuMzc1cmVtLFxuICBpY29uLWJ1dHRvbi1oZXJvLXNtYWxsLXBhZGRpbmc6IDAuNTYyNXJlbSAwLjVyZW0sXG4gIGljb24tYnV0dG9uLWhlcm8tbWVkaXVtLXBhZGRpbmc6IDAuNzVyZW0gMC41NjI1cmVtLFxuICBpY29uLWJ1dHRvbi1oZXJvLWxhcmdlLXBhZGRpbmc6IDAuODc1cmVtIDAuNjg3NXJlbSxcbiAgaWNvbi1idXR0b24taGVyby1naWFudC1wYWRkaW5nOiAxLjA2MjVyZW0gMXJlbSxcblxuICBpbnB1dC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBpbnB1dC1ib3JkZXItd2lkdGg6IDFweCxcbiAgaW5wdXQtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgaW5wdXQtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcbiAgaW5wdXQtcGxhY2Vob2xkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGlucHV0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG5cbiAgaW5wdXQtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgaW5wdXQtYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWJhc2ljLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaW5wdXQtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGlucHV0LWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgaW5wdXQtYmFzaWMtZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpbnB1dC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LXByaW1hcnktcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgaW5wdXQtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGlucHV0LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgaW5wdXQtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGlucHV0LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBpbnB1dC1zdWNjZXNzLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaW5wdXQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGlucHV0LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBpbnB1dC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIGlucHV0LXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgaW5wdXQtc3VjY2Vzcy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGlucHV0LWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgaW5wdXQtaW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGlucHV0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBpbnB1dC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaW5wdXQtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICBpbnB1dC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgaW5wdXQtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXItYm9yZGVyLFxuICBpbnB1dC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LWluZm8tZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpbnB1dC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LXdhcm5pbmctcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgaW5wdXQtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGlucHV0LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgaW5wdXQtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGlucHV0LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBpbnB1dC13YXJuaW5nLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGlucHV0LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBpbnB1dC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBpbnB1dC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICBpbnB1dC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICBpbnB1dC1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LWRhbmdlci1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGlucHV0LWNvbnRyb2wtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBpbnB1dC1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgaW5wdXQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCxcbiAgaW5wdXQtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwLFxuICBpbnB1dC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwLFxuICBpbnB1dC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGlucHV0LWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC00MDAsXG4gIGlucHV0LWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBpbnB1dC1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGlucHV0LWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBpbnB1dC1jb250cm9sLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBpbnB1dC1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgaW5wdXQtc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBpbnB1dC1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgaW5wdXQtdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLTItZm9udC1zaXplLFxuICBpbnB1dC10aW55LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC10aW55LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LXRpbnktcGFkZGluZzogMC4xODc1cmVtIDFyZW0sXG4gIGlucHV0LXRpbnktbWF4LXdpZHRoOiAyMHJlbSxcblxuICBpbnB1dC1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgaW5wdXQtc21hbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIGlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaW5wdXQtc21hbGwtcGFkZGluZzogMC4xODc1cmVtIDFyZW0sXG4gIGlucHV0LXNtYWxsLW1heC13aWR0aDogMjByZW0sXG5cbiAgaW5wdXQtbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgaW5wdXQtbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGlucHV0LW1lZGl1bS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1tZWRpdW0tcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1tZWRpdW0tcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LW1lZGl1bS1wYWRkaW5nOiAwLjQzNzVyZW0gMXJlbSxcbiAgaW5wdXQtbWVkaXVtLW1heC13aWR0aDogMjByZW0sXG5cbiAgaW5wdXQtbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBpbnB1dC1sYXJnZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LWxhcmdlLXBhZGRpbmc6IDAuNjg3NXJlbSAxcmVtLFxuICBpbnB1dC1sYXJnZS1tYXgtd2lkdGg6IDMwcmVtLFxuXG4gIGlucHV0LWdpYW50LXRleHQtZm9udC1zaXplOiB0ZXh0LWhlYWRpbmctNi1mb250LXNpemUsXG4gIGlucHV0LWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtaGVhZGluZy02LWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWhlYWRpbmctNi1saW5lLWhlaWdodCxcbiAgaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1naWFudC1wYWRkaW5nOiAwLjkzNzVyZW0gMXJlbSxcbiAgaW5wdXQtZ2lhbnQtbWF4LXdpZHRoOiAzMHJlbSxcblxuICBjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW0sXG4gIGNoZWNrYm94LXdpZHRoOiAxLjI1cmVtLFxuICBjaGVja2JveC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjaGVja2JveC1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2hlY2tib3gtYm9yZGVyLXJhZGl1czogM3B4LFxuICBjaGVja2JveC1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICBjaGVja2JveC1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICBjaGVja2JveC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIGNoZWNrYm94LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBjaGVja2JveC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIGNoZWNrYm94LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgY2hlY2tib3gtdGV4dC1zcGFjZTogMC42ODc1cmVtLFxuICBjaGVja2JveC1wYWRkaW5nOiAwLFxuICBjaGVja2JveC1mb2N1cy1pbnNldC1zaGFkb3ctbGVuZ3RoOiAwIDAgMCAxMDB2bWF4LFxuXG4gIGNoZWNrYm94LWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGVja2JveC1iYXNpYy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtYmFzaWMtaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoZWNrYm94LWJhc2ljLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgY2hlY2tib3gtYmFzaWMtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICBjaGVja2JveC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIGNoZWNrYm94LWJhc2ljLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGNoZWNrYm94LWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjaGVja2JveC1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hlY2tib3gtcHJpbWFyeS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1wcmltYXJ5LWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGVja2JveC1wcmltYXJ5LWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgY2hlY2tib3gtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjaGVja2JveC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgY2hlY2tib3gtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICBjaGVja2JveC1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgY2hlY2tib3gtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGNoZWNrYm94LWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hlY2tib3gtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjaGVja2JveC1pbmZvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWluZm8taW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNoZWNrYm94LWluZm8taW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8taW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLFxuICBjaGVja2JveC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8tZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICBjaGVja2JveC1pbmZvLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLFxuICBjaGVja2JveC1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8taG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBjaGVja2JveC1pbmZvLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxuICBjaGVja2JveC1pbmZvLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGNoZWNrYm94LWluZm8tZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LWluZm8tZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjaGVja2JveC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY2hlY2tib3gtd2FybmluZy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC13YXJuaW5nLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjaGVja2JveC13YXJuaW5nLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgY2hlY2tib3gtd2FybmluZy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgY2hlY2tib3gtd2FybmluZy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjaGVja2JveC13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgY2hlY2tib3gtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICBjaGVja2JveC13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgY2hlY2tib3gtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgY2hlY2tib3gtZGFuZ2VyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgY2hlY2tib3gtZGFuZ2VyLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLFxuICBjaGVja2JveC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIGNoZWNrYm94LWRhbmdlci1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBjaGVja2JveC1kYW5nZXItaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgY2hlY2tib3gtZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGNoZWNrYm94LWNvbnRyb2wtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGNoZWNrYm94LWNvbnRyb2wtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtY2hlY2tlZC1jaGVja21hcmstY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgY2hlY2tib3gtY29udHJvbC1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgY2hlY2tib3gtY29udHJvbC1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBjaGVja2JveC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsXG4gIGNoZWNrYm94LWNvbnRyb2wtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUsXG4gIGNoZWNrYm94LWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGJhZGdlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGJhZGdlLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBiYWRnZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tdGlueS1mb250LXNpemUsXG4gIGJhZGdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBiYWRnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi10aW55LWxpbmUtaGVpZ2h0LFxuICBiYWRnZS1wYWRkaW5nOiAwLjI1cmVtIDAuNHJlbSxcblxuICBiYWRnZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGJhZGdlLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGJhZGdlLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBiYWRnZS1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBiYWRnZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgYmFkZ2UtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXMsXG4gIHByb2dyZXNzLWJhci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBwcm9ncmVzcy1iYXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcblxuICBwcm9ncmVzcy1iYXItdGlueS1oZWlnaHQ6IDFyZW0sXG4gIHByb2dyZXNzLWJhci10aW55LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIHByb2dyZXNzLWJhci10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLWhlaWdodDogMS4yNXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItc21hbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLWhlaWdodDogMS4zNzVyZW0sXG4gIHByb2dyZXNzLWJhci1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHByb2dyZXNzLWJhci1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLWhlaWdodDogMS41cmVtLFxuICBwcm9ncmVzcy1iYXItbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItbGFyZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIHByb2dyZXNzLWJhci1naWFudC1oZWlnaHQ6IDEuNzVyZW0sXG4gIHByb2dyZXNzLWJhci1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHByb2dyZXNzLWJhci1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICBwcm9ncmVzcy1iYXItYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBwcm9ncmVzcy1iYXItYmFzaWMtZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItNCxcbiAgcHJvZ3Jlc3MtYmFyLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItcHJpbWFyeS1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItc3VjY2Vzcy1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLWluZm8tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItaW5mby1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItd2FybmluZy1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHByb2dyZXNzLWJhci1kYW5nZXItZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBwcm9ncmVzcy1iYXItY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHByb2dyZXNzLWJhci1jb250cm9sLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHByb2dyZXNzLWJhci1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcblxuICBhbGVydC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBhbGVydC1ib3R0b20tbWFyZ2luOiAxLjVyZW0sXG4gIGFsZXJ0LXBhZGRpbmc6IDFyZW0gMS4xMjVyZW0sXG4gIGFsZXJ0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBhbGVydC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIGFsZXJ0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuICBhbGVydC1zaGFkb3c6IG5vbmUsXG4gIGFsZXJ0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBhbGVydC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGFsZXJ0LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGFsZXJ0LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgYWxlcnQtY2xvc2FibGUtc3RhcnQtcGFkZGluZzogM3JlbSxcblxuICBhbGVydC10aW55LWhlaWdodDogNC41cmVtLFxuICBhbGVydC1zbWFsbC1oZWlnaHQ6IDUuNzVyZW0sXG4gIGFsZXJ0LW1lZGl1bS1oZWlnaHQ6IDdyZW0sXG4gIGFsZXJ0LW1lZGl1bS1wYWRkaW5nOiAxcmVtIDEuMTI1cmVtLFxuICBhbGVydC1sYXJnZS1oZWlnaHQ6IDguMjVyZW0sXG4gIGFsZXJ0LWdpYW50LWhlaWdodDogOS41cmVtLFxuXG4gIGFsZXJ0LWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgYWxlcnQtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWxlcnQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGFsZXJ0LXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBhbGVydC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYWxlcnQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGFsZXJ0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBhbGVydC1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYWxlcnQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGFsZXJ0LXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBhbGVydC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGFsZXJ0LWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGFsZXJ0LWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBhbGVydC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcblxuICBhbGVydC1hY2NlbnQtYmFzaWMtY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBhbGVydC1hY2NlbnQtcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBhbGVydC1hY2NlbnQtaW5mby1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBhbGVydC1hY2NlbnQtc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBhbGVydC1hY2NlbnQtd2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBhbGVydC1hY2NlbnQtZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LWNvbnRyb2wtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcblxuICBhbGVydC1vdXRsaW5lLXdpZHRoOiAxcHgsXG4gIGFsZXJ0LW91dGxpbmUtYmFzaWMtY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS1wcmltYXJ5LWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS13YXJuaW5nLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtY29udHJvbC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXIsXG5cbiAgY2hhdC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGNoYXQtYm9yZGVyOiBub25lLFxuICBjaGF0LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGNoYXQtc2hhZG93OiBzaGFkb3csXG4gIGNoYXQtcGFkZGluZzogMXJlbSAxLjI1cmVtLFxuICBjaGF0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBjaGF0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgY2hhdC1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcblxuICBjaGF0LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoYXQtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGNoYXQtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgY2hhdC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgY2hhdC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBjaGF0LWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBjaGF0LWhlYWRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNoYXQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGNoYXQtaGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgY2hhdC10aW55LWhlaWdodDogMTMuNXJlbSxcbiAgY2hhdC1zbWFsbC1oZWlnaHQ6IDIxcmVtLFxuICBjaGF0LW1lZGl1bS1oZWlnaHQ6IDI4LjVyZW0sXG4gIGNoYXQtbGFyZ2UtaGVpZ2h0OiAzNnJlbSxcbiAgY2hhdC1naWFudC1oZWlnaHQ6IDQzLjVyZW0sXG5cbiAgY2hhdC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGNoYXQtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hhdC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hhdC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY2hhdC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY2hhdC1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY2hhdC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoYXQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgY2hhdC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcblxuICBjaGF0LWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGNoYXQtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgY2hhdC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuXG4gIGNoYXQtbWVzc2FnZS1iYWNrZ3JvdW5kOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoYXQtbWVzc2FnZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtbWVzc2FnZS1yZXBseS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNoYXQtbWVzc2FnZS1yZXBseS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGF0LW1lc3NhZ2UtYXZhdGFyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTUwMCxcbiAgY2hhdC1tZXNzYWdlLXNlbmRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGNoYXQtbWVzc2FnZS1xdW90ZS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNoYXQtbWVzc2FnZS1xdW90ZS10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGNoYXQtbWVzc2FnZS1maWxlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgY2hhdC1tZXNzYWdlLWZpbGUtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzcGlubmVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBzcGlubmVyLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBzcGlubmVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBzcGlubmVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcblxuICBzcGlubmVyLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1iYXNpYy1jaXJjbGUtZmlsbGVkLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNwaW5uZXItYmFzaWMtY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLXByaW1hcnktY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzcGlubmVyLXByaW1hcnktY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLWluZm8tY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBzcGlubmVyLWluZm8tY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLXN1Y2Nlc3MtY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzcGlubmVyLXN1Y2Nlc3MtY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLXdhcm5pbmctY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBzcGlubmVyLXdhcm5pbmctY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIHNwaW5uZXItZGFuZ2VyLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzcGlubmVyLWRhbmdlci1jaXJjbGUtZW1wdHktY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHNwaW5uZXItY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1jb250cm9sLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgc3Bpbm5lci1jb250cm9sLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1oZWlnaHQtdGlueTogMXJlbSxcbiAgc3Bpbm5lci1oZWlnaHQtc21hbGw6IDEuMjVyZW0sXG4gIHNwaW5uZXItaGVpZ2h0LW1lZGl1bTogMS41cmVtLFxuICBzcGlubmVyLWhlaWdodC1sYXJnZTogMS43NXJlbSxcbiAgc3Bpbm5lci1oZWlnaHQtZ2lhbnQ6IDJyZW0sXG5cbiAgc3RlcHBlci1zdGVwLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc3RlcHBlci1zdGVwLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzdGVwcGVyLXN0ZXAtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc3RlcHBlci1zdGVwLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzdGVwcGVyLXN0ZXAtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHN0ZXBwZXItc3RlcC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWFjdGl2ZS1jb2xvcixcbiAgc3RlcHBlci1zdGVwLWNvbXBsZXRlZC10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG5cbiAgc3RlcHBlci1zdGVwLWluZGV4LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1ib3JkZXItcmFkaXVzOiA1MCUsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC13aWR0aDogMnJlbSxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtY29tcGxldGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc3RlcHBlci1jb25uZWN0b3ItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzdGVwcGVyLWNvbm5lY3Rvci1jb21wbGV0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzdGVwcGVyLWhvcml6b250YWwtY29ubmVjdG9yLW1hcmdpbjogMXJlbSxcbiAgc3RlcHBlci12ZXJ0aWNhbC1jb25uZWN0b3ItbWFyZ2luOiAxcmVtLFxuXG4gIHN0ZXBwZXItc3RlcC1jb250ZW50LXBhZGRpbmc6IDEuMjVyZW0sXG5cbiAgYWNjb3JkaW9uLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGFjY29yZGlvbi1wYWRkaW5nOiAxLjI1cmVtLFxuICBhY2NvcmRpb24tc2hhZG93OiBzaGFkb3csXG4gIGFjY29yZGlvbi1oZWFkZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBhY2NvcmRpb24taGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBhY2NvcmRpb24taGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIGFjY29yZGlvbi1oZWFkZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGFjY29yZGlvbi1pdGVtLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgYWNjb3JkaW9uLWl0ZW0tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWNjb3JkaW9uLWl0ZW0tdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBhY2NvcmRpb24taXRlbS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBsaXN0LWl0ZW0tZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgbGlzdC1pdGVtLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGxpc3QtaXRlbS1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBsaXN0LWl0ZW0tcGFkZGluZzogMXJlbSxcbiAgbGlzdC1pdGVtLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGxpc3QtaXRlbS1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGxpc3QtaXRlbS1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgbGlzdC1pdGVtLWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgbGlzdC1pdGVtLWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBjYWxlbmRhci13aWR0aDogMjAuNjI1cmVtLFxuICBjYWxlbmRhci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGNhbGVuZGFyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGNhbGVuZGFyLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGNhbGVuZGFyLWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBjYWxlbmRhci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjYWxlbmRhci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYWxlbmRhci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNhbGVuZGFyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItcGlja2VyLXBhZGRpbmctdG9wOiAwLjI1cmVtLFxuICBjYWxlbmRhci1waWNrZXItcGFkZGluZy1ib3R0b206IDAuNjI1cmVtLFxuICBjYWxlbmRhci1waWNrZXItcGFkZGluZy1zdGFydDogMC42MjVyZW0sXG4gIGNhbGVuZGFyLXBpY2tlci1wYWRkaW5nLWVuZDogMC42MjVyZW0sXG5cbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi1wYWRkaW5nOiAwLjYyNXJlbSAwLjI1cmVtLFxuXG4gIGNhbGVuZGFyLWNlbGwtaW5hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuXG4gIGNhbGVuZGFyLWNlbGwtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBjYWxlbmRhci1jZWxsLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci1ib3JkZXItY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLWhvdmVyLXRleHQtZm9udC1zaXplOiBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWZvbnQtd2VpZ2h0OiBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci1jZWxsLWhvdmVyLXRleHQtbGluZS1oZWlnaHQ6IGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLXRleHQtZm9udC1zaXplOiBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1mb250LXdlaWdodDogY2FsZW5kYXItdGV4dC1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1saW5lLWhlaWdodDogY2FsZW5kYXItdGV4dC1saW5lLWhlaWdodCxcblxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWZvbnQtc2l6ZTogY2FsZW5kYXItdGV4dC1mb250LXNpemUsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1mb250LXdlaWdodDogY2FsZW5kYXItdGV4dC1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWxpbmUtaGVpZ2h0OiBjYWxlbmRhci10ZXh0LWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG5cbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1mb250LXNpemU6IGNhbGVuZGFyLXRleHQtZm9udC1zaXplLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLXRleHQtZm9udC13ZWlnaHQ6IGNhbGVuZGFyLXRleHQtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1saW5lLWhlaWdodDogY2FsZW5kYXItdGV4dC1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcblxuICBjYWxlbmRhci1kYXktY2VsbC13aWR0aDogMi43NXJlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtaGVpZ2h0OiAyLjc1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoOiA0LjgxMjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0OiBjYWxlbmRhci1kYXktY2VsbC1oZWlnaHQsXG4gIGNhbGVuZGFyLXllYXItY2VsbC13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQsXG5cbiAgY2FsZW5kYXItd2Vla2RheS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCxcbiAgY2FsZW5kYXItd2Vla2RheS1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBjYWxlbmRhci13ZWVrZGF5LWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIGNhbGVuZGFyLXdlZWtkYXktdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBjYWxlbmRhci13ZWVrZGF5LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItd2Vla2RheS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci13ZWVrZGF5LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtkYXktaG9saWRheS10ZXh0LWNvbG9yOiBjYWxlbmRhci13ZWVrZGF5LXRleHQtY29sb3IsXG4gIGNhbGVuZGFyLXdlZWtkYXktaGVpZ2h0OiBjYWxlbmRhci1kYXktY2VsbC1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtkYXktd2lkdGg6IGNhbGVuZGFyLWRheS1jZWxsLXdpZHRoLFxuXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgY2FsZW5kYXItd2Vla251bWJlci1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLWhlaWdodDogY2FsZW5kYXItd2Vla2RheS1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItd2lkdGg6IGNhbGVuZGFyLXdlZWtkYXktd2lkdGgsXG5cbiAgY2FsZW5kYXItbGFyZ2Utd2lkdGg6IDIyLjM3NXJlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2Utd2lkdGg6IDNyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodDogM3JlbSxcbiAgY2FsZW5kYXItd2Vla2RheS1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrZGF5LWxhcmdlLXdpZHRoOiBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci13ZWVrZGF5LWxhcmdlLWhlaWdodCxcbiAgY2FsZW5kYXItd2Vla251bWJlci1sYXJnZS13aWR0aDogY2FsZW5kYXItd2Vla2RheS1sYXJnZS13aWR0aCxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS13aWR0aDogNS4yNXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLXdpZHRoOiBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLXdpZHRoLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLWhlaWdodCxcblxuICBvdmVybGF5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNSksXG5cbiAgdG9vbHRpcC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTMsXG4gIHRvb2x0aXAtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC1ib3JkZXItc3R5bGU6IGRhc2hlZCxcbiAgdG9vbHRpcC1ib3JkZXItd2lkdGg6IDAsXG4gIHRvb2x0aXAtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgdG9vbHRpcC1wYWRkaW5nOiAwLjVyZW0gMXJlbSxcbiAgdG9vbHRpcC10ZXh0LWNvbG9yOiB0ZXh0LWFsdGVybmF0ZS1jb2xvcixcbiAgdG9vbHRpcC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWNhcHRpb24tZm9udC1mYW1pbHksXG4gIHRvb2x0aXAtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHRvb2x0aXAtdGV4dC1mb250LXdlaWdodDogdGV4dC1jYXB0aW9uLWZvbnQtd2VpZ2h0LFxuICB0b29sdGlwLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcbiAgdG9vbHRpcC1pY29uLWhlaWdodDogMXJlbSxcbiAgdG9vbHRpcC1pY29uLXdpZHRoOiAxcmVtLFxuICB0b29sdGlwLW1heC13aWR0aDogMTZyZW0sXG5cbiAgdG9vbHRpcC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHRvb2x0aXAtYmFzaWMtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b29sdGlwLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b29sdGlwLXByaW1hcnktYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9vbHRpcC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9vbHRpcC1pbmZvLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvb2x0aXAtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b29sdGlwLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b29sdGlwLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9vbHRpcC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvb2x0aXAtZGFuZ2VyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9vbHRpcC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdG9vbHRpcC1jb250cm9sLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHRvb2x0aXAtc2hhZG93OiBzaGFkb3csXG5cbiAgb3B0aW9uLWxpc3QtbWF4LWhlaWdodDogMjByZW0sXG4gIG9wdGlvbi1saXN0LXNoYWRvdzogbm9uZSxcbiAgb3B0aW9uLWxpc3QtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBvcHRpb24tbGlzdC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBvcHRpb24tbGlzdC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgb3B0aW9uLWxpc3QtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgb3B0aW9uLWxpc3QtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgb3B0aW9uLWxpc3QtYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBvcHRpb24tbGlzdC1ib3JkZXItY29sb3IsXG4gIG9wdGlvbi1saXN0LWFkamFjZW50LWJvcmRlci1zdHlsZTogb3B0aW9uLWxpc3QtYm9yZGVyLXN0eWxlLFxuICBvcHRpb24tbGlzdC1hZGphY2VudC1ib3JkZXItd2lkdGg6IG9wdGlvbi1saXN0LWJvcmRlci13aWR0aCxcblxuICBvcHRpb24tZ3JvdXAtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBvcHRpb24tZ3JvdXAtdGlueS1zdGFydC1wYWRkaW5nOiAxLjI1cmVtLFxuICBvcHRpb24tZ3JvdXAtc21hbGwtc3RhcnQtcGFkZGluZzogMS43NXJlbSxcbiAgb3B0aW9uLWdyb3VwLW1lZGl1bS1zdGFydC1wYWRkaW5nOiAyLjI1cmVtLFxuICBvcHRpb24tZ3JvdXAtbGFyZ2Utc3RhcnQtcGFkZGluZzogMi4yNXJlbSxcbiAgb3B0aW9uLWdyb3VwLWdpYW50LXN0YXJ0LXBhZGRpbmc6IDIuNzVyZW0sXG5cbiAgb3B0aW9uLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgb3B0aW9uLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIG9wdGlvbi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBvcHRpb24taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIG9wdGlvbi1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBvcHRpb24tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgb3B0aW9uLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBvcHRpb24tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIG9wdGlvbi1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBvcHRpb24tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBvcHRpb24tc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBvcHRpb24tc2VsZWN0ZWQtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgb3B0aW9uLXNlbGVjdGVkLWhvdmVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgb3B0aW9uLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgb3B0aW9uLXNlbGVjdGVkLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIG9wdGlvbi1zZWxlY3RlZC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBvcHRpb24tc2VsZWN0ZWQtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBvcHRpb24tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBvcHRpb24tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBvcHRpb24tdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLTItZm9udC1zaXplLFxuICBvcHRpb24tdGlueS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWNhcHRpb24tMi1mb250LXdlaWdodCxcbiAgb3B0aW9uLXRpbnktdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLTItbGluZS1oZWlnaHQsXG4gIG9wdGlvbi10aW55LXBhZGRpbmc6IHNlbGVjdC1vdXRsaW5lLXRpbnktcGFkZGluZyxcblxuICBvcHRpb24tc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIG9wdGlvbi1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIG9wdGlvbi1zbWFsbC1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS1zbWFsbC1wYWRkaW5nLFxuXG4gIG9wdGlvbi1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBvcHRpb24tbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgb3B0aW9uLW1lZGl1bS1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS1tZWRpdW0tcGFkZGluZyxcblxuICBvcHRpb24tbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBvcHRpb24tbGFyZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgb3B0aW9uLWxhcmdlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIG9wdGlvbi1sYXJnZS1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS1sYXJnZS1wYWRkaW5nLFxuXG4gIG9wdGlvbi1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTYtZm9udC1zaXplLFxuICBvcHRpb24tZ2lhbnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1oZWFkaW5nLTYtZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWhlYWRpbmctNi1saW5lLWhlaWdodCxcbiAgb3B0aW9uLWdpYW50LXBhZGRpbmc6IHNlbGVjdC1vdXRsaW5lLWdpYW50LXBhZGRpbmcsXG5cbiAgc2VsZWN0LWN1cnNvcjogcG9pbnRlcixcbiAgc2VsZWN0LWRpc2FibGVkLWN1cnNvcjogZGVmYXVsdCxcbiAgc2VsZWN0LW1pbi13aWR0aDogMTNyZW0sXG4gIHNlbGVjdC1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICBzZWxlY3Qtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgc2VsZWN0LWljb24tb2Zmc2V0OiAycmVtLFxuXG4gIHNlbGVjdC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBzZWxlY3QtcGxhY2Vob2xkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG5cbiAgc2VsZWN0LXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LXRpbnktdGV4dC1mb250LXdlaWdodDogdGV4dC1jYXB0aW9uLTItZm9udC13ZWlnaHQsXG4gIHNlbGVjdC10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0LFxuICBzZWxlY3QtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzZWxlY3QtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc2VsZWN0LXRpbnktbWF4LXdpZHRoOiAyMHJlbSxcblxuICBzZWxlY3Qtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIHNlbGVjdC1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHNlbGVjdC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzZWxlY3Qtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1zbWFsbC1tYXgtd2lkdGg6IDIwcmVtLFxuXG4gIHNlbGVjdC1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBzZWxlY3QtbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgc2VsZWN0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzZWxlY3QtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtbWVkaXVtLW1heC13aWR0aDogMjByZW0sXG5cbiAgc2VsZWN0LWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBzZWxlY3QtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LWxhcmdlLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtbGFyZ2UtbWF4LXdpZHRoOiAzMHJlbSxcblxuICBzZWxlY3QtZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtaGVhZGluZy02LWZvbnQtc2l6ZSxcbiAgc2VsZWN0LWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtaGVhZGluZy02LWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQsXG4gIHNlbGVjdC1naWFudC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzZWxlY3QtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1naWFudC1tYXgtd2lkdGg6IDMwcmVtLFxuXG4gIHNlbGVjdC1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgc2VsZWN0LXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgc2VsZWN0LXJvdW5kLWJvcmRlci1yYWRpdXM6IDEuNXJlbSxcblxuICBzZWxlY3Qtb3V0bGluZS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBzZWxlY3Qtb3V0bGluZS1ib3JkZXItd2lkdGg6IDFweCxcblxuICBzZWxlY3Qtb3V0bGluZS10aW55LXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBzZWxlY3Qtb3V0bGluZS1zbWFsbC1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LW91dGxpbmUtbWVkaXVtLXBhZGRpbmc6IDAuNDM3NXJlbSAxcmVtLFxuICBzZWxlY3Qtb3V0bGluZS1sYXJnZS1wYWRkaW5nOiAwLjY4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LW91dGxpbmUtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDFyZW0sXG5cbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtaWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtaW5mby1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWljb24tY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTQwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWFkamFjZW50LWJvcmRlci1zdHlsZTogc2VsZWN0LW91dGxpbmUtYm9yZGVyLXN0eWxlLFxuICBzZWxlY3Qtb3V0bGluZS1hZGphY2VudC1ib3JkZXItd2lkdGg6IHNlbGVjdC1vdXRsaW5lLWJvcmRlci13aWR0aCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3Mtb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWluZm8tYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtaW5mby1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtd2FybmluZy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1vcGVuLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1vcGVuLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtY29udHJvbC1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWJvcmRlci1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHNlbGVjdC1maWxsZWQtYm9yZGVyLXdpZHRoOiAxcHgsXG5cbiAgc2VsZWN0LWZpbGxlZC10aW55LXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBzZWxlY3QtZmlsbGVkLXNtYWxsLXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBzZWxlY3QtZmlsbGVkLW1lZGl1bS1wYWRkaW5nOiAwLjQzNzVyZW0gMXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1sYXJnZS1wYWRkaW5nOiAwLjY4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1naWFudC1wYWRkaW5nOiAwLjkzNzVyZW0gMXJlbSxcblxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtaWNvbi1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXRpbnktcGFkZGluZzogMC4yNXJlbSAxcmVtLFxuICBzZWxlY3QtaGVyby1zbWFsbC1wYWRkaW5nOiAwLjI1cmVtIDFyZW0sXG4gIHNlbGVjdC1oZXJvLW1lZGl1bS1wYWRkaW5nOiAwLjVyZW0gMXJlbSxcbiAgc2VsZWN0LWhlcm8tbGFyZ2UtcGFkZGluZzogMC43NXJlbSAxcmVtLFxuICBzZWxlY3QtaGVyby1naWFudC1wYWRkaW5nOiAxcmVtIDFyZW0sXG5cbiAgc2VsZWN0LWhlcm8tYmFzaWMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0yMDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWljb24tY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWhlcm8tYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtaGVyby1iYXNpYy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tYmFzaWMtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0zMDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTQwMCxcbiAgc2VsZWN0LWhlcm8tYmFzaWMtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLFxuICBzZWxlY3QtaGVyby1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktNDAwLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktMzAwLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy00MDAsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy0zMDAsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWluZm8tbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTQwMCxcbiAgc2VsZWN0LWhlcm8taW5mby1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLWluZm8taWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8taW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8taW5mby1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNTAwLFxuICBzZWxlY3QtaGVyby1pbmZvLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHNlbGVjdC1oZXJvLWluZm8taG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTMwMCxcbiAgc2VsZWN0LWhlcm8taW5mby1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBzZWxlY3QtaGVyby1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8taW5mby1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8td2FybmluZy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctNDAwLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8td2FybmluZy1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtaGVyby13YXJuaW5nLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy01MDAsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgc2VsZWN0LWhlcm8td2FybmluZy1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctMzAwLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1kYW5nZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItNDAwLFxuICBzZWxlY3QtaGVyby1kYW5nZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTMwMCxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1jb250cm9sLWljb24tY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWhlcm8tY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0yMDAsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cyxcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBzZWxlY3QtaGVyby1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgZGF0ZXBpY2tlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGRhdGVwaWNrZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgZGF0ZXBpY2tlci1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBkYXRlcGlja2VyLWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBkYXRlcGlja2VyLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGRhdGVwaWNrZXItc2hhZG93OiBub25lLFxuXG4gIHJhZGlvLXdpZHRoOiAxLjI1cmVtLFxuICByYWRpby1oZWlnaHQ6IDEuMjVyZW0sXG4gIHJhZGlvLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHJhZGlvLWJvcmRlci13aWR0aDogMXB4LFxuICByYWRpby10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIHJhZGlvLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICByYWRpby10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIHJhZGlvLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgcmFkaW8tb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgcmFkaW8tb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcblxuICByYWRpby1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICByYWRpby1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1iYXNpYy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1iYXNpYy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICByYWRpby1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1iYXNpYy1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHJhZGlvLWJhc2ljLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWJhc2ljLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICByYWRpby1iYXNpYy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tYmFzaWMtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8tcHJpbWFyeS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICByYWRpby1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8tcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHJhZGlvLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8tc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICByYWRpby1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHJhZGlvLXN1Y2Nlc3MtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgcmFkaW8tc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICByYWRpby1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICByYWRpby1zdWNjZXNzLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHJhZGlvLWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcmFkaW8taW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1pbmZvLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWluZm8taW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHJhZGlvLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8taW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1pbmZvLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8tZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICByYWRpby1pbmZvLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgcmFkaW8taW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWluZm8taG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICByYWRpby1pbmZvLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8taG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXItYm9yZGVyLFxuICByYWRpby1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgcmFkaW8taW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8taW5mby1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1pbmZvLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8td2FybmluZy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICByYWRpby13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHJhZGlvLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8td2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgcmFkaW8td2FybmluZy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8td2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8tZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1kYW5nZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGFuZ2VyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICByYWRpby1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLFxuICByYWRpby1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1kYW5nZXItZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICByYWRpby1kYW5nZXItZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgcmFkaW8tZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICByYWRpby1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8tY29udHJvbC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHJhZGlvLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICByYWRpby1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsXG4gIHJhZGlvLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8tY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1jb250cm9sLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgcmFkaW8tY29udHJvbC1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICByYWRpby1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby1jb250cm9sLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgdHJlZS1ncmlkLWNlbGwtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHRyZWUtZ3JpZC1jZWxsLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHRyZWUtZ3JpZC1jZWxsLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHRyZWUtZ3JpZC1yb3ctbWluLWhlaWdodDogMnJlbSxcbiAgdHJlZS1ncmlkLWNlbGwtcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbSxcblxuICB0cmVlLWdyaWQtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLWhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICB0cmVlLWdyaWQtZm9vdGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtZm9vdGVyLXRleHQtZm9udC1mYW1pbHk6IHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LWZhbWlseSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWZvbnQtc2l6ZTogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtc2l6ZSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWZvbnQtd2VpZ2h0OiB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1saW5lLWhlaWdodDogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0LFxuXG4gIHRyZWUtZ3JpZC1yb3ctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtcm93LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLXJvdy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtcm93LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICB0cmVlLWdyaWQtcm93LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1ib3JkZXI6IG5vbmUsXG4gIHRyZWUtZ3JpZC1zb3J0LWhlYWRlci1idXR0b24tcGFkZGluZzogMCxcblxuICBpY29uLWZvbnQtc2l6ZTogMS4yNXJlbSxcbiAgaWNvbi1saW5lLWhlaWdodDogMSxcbiAgaWNvbi13aWR0aDogMWVtLFxuICBpY29uLWhlaWdodDogMWVtLFxuICBpY29uLXN2Zy12ZXJ0aWNhbC1hbGlnbjogdG9wLFxuICBpY29uLWJhc2ljLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGljb24tcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBpY29uLWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgaWNvbi1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGljb24td2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBpY29uLWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGljb24tY29udHJvbC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuXG4gIHRvZ2dsZS1oZWlnaHQ6IDEuODc1cmVtLFxuICB0b2dnbGUtd2lkdGg6IDMuMTI1cmVtLFxuICB0b2dnbGUtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHRvZ2dsZS1ib3JkZXItcmFkaXVzOiAxMDBweCxcbiAgdG9nZ2xlLW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG4gIHRvZ2dsZS1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICB0b2dnbGUtc3dpdGNoZXItc2l6ZTogMS43NXJlbSxcbiAgdG9nZ2xlLXN3aXRjaGVyLWljb24tc2l6ZTogMC43NXJlbSxcbiAgdG9nZ2xlLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtMi1mb250LWZhbWlseSxcbiAgdG9nZ2xlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICB0b2dnbGUtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICB0b2dnbGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICB0b2dnbGUtY3Vyc29yOiBwb2ludGVyLFxuICB0b2dnbGUtZGlzYWJsZWQtY3Vyc29yOiBkZWZhdWx0LFxuXG4gIHRvZ2dsZS1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2dnbGUtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9nZ2xlLWJhc2ljLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvZ2dsZS1iYXNpYy1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2dnbGUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgdG9nZ2xlLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHRvZ2dsZS1iYXNpYy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgdG9nZ2xlLWJhc2ljLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICB0b2dnbGUtYmFzaWMtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgdG9nZ2xlLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIHRvZ2dsZS1iYXNpYy1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2dnbGUtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9nZ2xlLXByaW1hcnktY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9nZ2xlLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgdG9nZ2xlLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICB0b2dnbGUtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgdG9nZ2xlLXByaW1hcnktaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIHRvZ2dsZS1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2dnbGUtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHRvZ2dsZS1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvZ2dsZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtc3VjY2Vzcy1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0b2dnbGUtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHRvZ2dsZS1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICB0b2dnbGUtc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgdG9nZ2xlLXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIHRvZ2dsZS1zdWNjZXNzLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvZ2dsZS1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgdG9nZ2xlLWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0b2dnbGUtaW5mby1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLWluZm8tY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvZ2dsZS1pbmZvLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRvZ2dsZS1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgdG9nZ2xlLWluZm8tZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtaW5mby1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHRvZ2dsZS1pbmZvLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxuICB0b2dnbGUtaW5mby1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgdG9nZ2xlLWluZm8tZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2dnbGUtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9nZ2xlLXdhcm5pbmctY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9nZ2xlLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cyxcbiAgdG9nZ2xlLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICB0b2dnbGUtd2FybmluZy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgdG9nZ2xlLXdhcm5pbmctaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIHRvZ2dsZS13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtd2FybmluZy1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2dnbGUtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHRvZ2dsZS1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLWRhbmdlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvZ2dsZS1kYW5nZXItY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cyxcbiAgdG9nZ2xlLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHRvZ2dsZS1kYW5nZXItZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWRhbmdlci1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgdG9nZ2xlLWRhbmdlci1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLWRhbmdlci1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICB0b2dnbGUtZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIHRvZ2dsZS1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHRvZ2dsZS1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgdG9nZ2xlLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtY29udHJvbC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHRvZ2dsZS1jb250cm9sLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHRvZ2dsZS1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cyxcbiAgdG9nZ2xlLWNvbnRyb2wtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRvZ2dsZS1jb250cm9sLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtY29udHJvbC1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICB0b2dnbGUtY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0b2dnbGUtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgZm9ybS1maWVsZC10aW55LW1heC13aWR0aDogaW5wdXQtdGlueS1tYXgtd2lkdGgsXG4gIGZvcm0tZmllbGQtc21hbGwtbWF4LXdpZHRoOiBpbnB1dC1zbWFsbC1tYXgtd2lkdGgsXG4gIGZvcm0tZmllbGQtbWVkaXVtLW1heC13aWR0aDogaW5wdXQtbWVkaXVtLW1heC13aWR0aCxcbiAgZm9ybS1maWVsZC1sYXJnZS1tYXgtd2lkdGg6IGlucHV0LWxhcmdlLW1heC13aWR0aCxcbiAgZm9ybS1maWVsZC1naWFudC1tYXgtd2lkdGg6IGlucHV0LWdpYW50LW1heC13aWR0aCxcblxuICBmb3JtLWZpZWxkLWFkZG9uLWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1iYXNpYy1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tcHJpbWFyeS10ZXh0LWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1wcmltYXJ5LWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1wcmltYXJ5LTYwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1zdWNjZXNzLXRleHQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLXN1Y2Nlc3MtaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLWluZm8tdGV4dC1jb2xvcjogY29sb3ItaW5mby01MDAsXG4gIGZvcm0tZmllbGQtYWRkb24taW5mby1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3ItaW5mby02MDAsXG4gIGZvcm0tZmllbGQtYWRkb24td2FybmluZy10ZXh0LWNvbG9yOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi13YXJuaW5nLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci13YXJuaW5nLTYwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1kYW5nZXItdGV4dC1jb2xvcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1kYW5nZXItaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLWRhbmdlci02MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGZvcm0tZmllbGQtYWRkb24tY29udHJvbC1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgZm9ybS1maWVsZC1hZGRvbi10aW55LWhlaWdodDogMS41cmVtLFxuICBmb3JtLWZpZWxkLWFkZG9uLXRpbnktd2lkdGg6IGZvcm0tZmllbGQtYWRkb24tdGlueS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tdGlueS1pY29uLXNpemU6IGJ1dHRvbi10aW55LWljb24tc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi10aW55LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tdGlueS1mb250LXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tdGlueS1saW5lLWhlaWdodDogdGV4dC1idXR0b24tdGlueS1saW5lLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi10aW55LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1oZWlnaHQ6IDJyZW0sXG4gIGZvcm0tZmllbGQtYWRkb24tc21hbGwtd2lkdGg6IGZvcm0tZmllbGQtYWRkb24tc21hbGwtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWljb24tc2l6ZTogYnV0dG9uLXNtYWxsLWljb24tc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tc21hbGwtbGluZS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tc21hbGwtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1oZWlnaHQ6IDIuNXJlbSxcbiAgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0td2lkdGg6IGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0taWNvbi1zaXplOiBidXR0b24tbWVkaXVtLWljb24tc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0tZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtaGVpZ2h0OiAzcmVtLFxuICBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLXdpZHRoOiBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1pY29uLXNpemU6IGJ1dHRvbi1sYXJnZS1pY29uLXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1sYXJnZS1mb250LXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLWxhcmdlLWxpbmUtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1naWFudC1oZWlnaHQ6IDMuNXJlbSxcbiAgZm9ybS1maWVsZC1hZGRvbi1naWFudC13aWR0aDogZm9ybS1maWVsZC1hZGRvbi1naWFudC1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtaWNvbi1zaXplOiBidXR0b24tZ2lhbnQtaWNvbi1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1naWFudC1saW5lLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1naWFudC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4pO1xuIiwiQGltcG9ydCAnLi4vLi4vdGhlbWVzL21hcHBpbmcnO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBmdW5jdGlvbiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKSB7XG5cbiAgQGlmIChsZW5ndGgoJG5iLWVuYWJsZWQtdGhlbWVzKSA9PSAwKSB7XG4gICAgQGVhY2ggJHRoZW1lLW5hbWUsICR0aGVtZSBpbiAkbmItdGhlbWVzIHtcbiAgICAgICRuYi1lbmFibGVkLXRoZW1lczogYXBwZW5kKCRuYi1lbmFibGVkLXRoZW1lcywgJHRoZW1lLW5hbWUpICFnbG9iYWw7XG4gICAgfVxuICB9XG4gIEByZXR1cm4gJG5iLWVuYWJsZWQtdGhlbWVzO1xufVxuXG5AZnVuY3Rpb24gZ2V0LWxhc3QtZW5hYmxlZC10aGVtZSgpIHtcbiAgJHRoZW1lczogbmItZ2V0LWVuYWJsZWQtdGhlbWVzKCk7XG4gIEByZXR1cm4gbnRoKCR0aGVtZXMsIGxlbmd0aCgkdGhlbWVzKSk7XG59XG5cbkBmdW5jdGlvbiBuYi1zZXQtZm9yLWV4cG9ydCgkdGhlbWUsICRuYW1lLCAkcGFyZW50LW5hbWU6IG51bGwpIHtcblxuICAkcGFyZW50LXRoZW1lOiBtYXAtZ2V0KCRuYi10aGVtZXMtZXhwb3J0LCAkcGFyZW50LW5hbWUpO1xuICBAaWYgKCRwYXJlbnQtdGhlbWUgIT0gbnVsbCkge1xuICAgICR0aGVtZTogbWFwLW1lcmdlKG1hcC1nZXQoJHBhcmVudC10aGVtZSwgZGF0YSksICR0aGVtZSk7XG4gIH1cblxuICAkdGhlbWUtZGF0YTogKFxuICAgIGRhdGE6ICR0aGVtZSxcbiAgICBwYXJlbnQ6ICRwYXJlbnQtbmFtZSxcbiAgKTtcbiAgQHJldHVybiBtYXAtc2V0KCRuYi10aGVtZXMtZXhwb3J0LCAkbmFtZSwgJHRoZW1lLWRhdGEpO1xufVxuXG5AZnVuY3Rpb24gbmItZ2V0LXJlZ2lzdGVyZWQtdGhlbWUoJG5hbWUpIHtcbiAgJHRoZW1lOiBtYXAtZ2V0KCRuYi10aGVtZXMsICRuYW1lKTtcblxuICAvLyBUT0RPOiBjaGVjayBpZiBvcHRpbWFsIHBsYWNlXG4gIEBpZiAoJHRoZW1lID09IG51bGwpIHtcbiAgICBAZXJyb3IgJ05lYnVsYXIgVGhlbWU6IHRoZW1lIGAnICsgJG5hbWUgKyAnYCBpcyBub3QgcmVnaXN0ZXJlZCB3aXRoIGBuYi1yZWdpc3Rlci10aGVtZWAgZnVuY3Rpb24uJztcbiAgfVxuXG4gIEByZXR1cm4gJHRoZW1lO1xufVxuXG4vLyBFbnRyeSBwb2ludFxuLy8gUmVnaXN0ZXJzIGEgbmV3IHRoZW1lXG5AZnVuY3Rpb24gbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCAkbmFtZSwgJHBhcmVudC1uYW1lOiBudWxsKSB7XG5cbiAgQGlmICgkbmItdGhlbWUtZXhwb3J0LW1vZGUgPT0gdHJ1ZSkge1xuICAgICRuYi10aGVtZXMtZXhwb3J0OiBuYi1zZXQtZm9yLWV4cG9ydCgkdGhlbWUsICRuYW1lLCAkcGFyZW50LW5hbWUpICFnbG9iYWw7XG4gIH1cblxuICAkdGhlbWUtZGF0YTogKCk7XG5cbiAgQGlmICgkcGFyZW50LW5hbWUgIT0gbnVsbCkge1xuICAgICRwYXJlbnQtdGhlbWU6IG1hcC1nZXQoJG5iLXRoZW1lcywgJHBhcmVudC1uYW1lKTtcbiAgICBAaWYgKCRwYXJlbnQtdGhlbWUgPT0gbnVsbCkge1xuICAgICAgQGVycm9yICdOZWJ1bGFyIFRoZW1lOiBwYXJlbnQgdGhlbWUgYCcgKyAkcGFyZW50LW5hbWUgKyAnYCBpcyBub3QgcmVnaXN0ZXJlZCBvciBpbXBvcnRlZC4nO1xuICAgIH1cbiAgICAkdGhlbWU6IG1hcC1tZXJnZSgkcGFyZW50LXRoZW1lLCAkdGhlbWUpO1xuICB9XG4gICR0aGVtZTogbWFwLW1lcmdlKCRldmEtbWFwcGluZywgJHRoZW1lKTtcbiAgJG5iLXRoZW1lczogbWFwLXNldCgkbmItdGhlbWVzLCAkbmFtZSwgJHRoZW1lKSAhZ2xvYmFsO1xuXG4gIEByZXR1cm4gJG5iLXRoZW1lcztcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLWZvci10aGVtZSgkbmFtZSkge1xuICBAaWYgKCRuYi10aGVtZS1uYW1lID09ICRuYW1lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWZvci10aGVtZXMoJG5hbWVzLi4uKSB7XG4gIEBlYWNoICRuYW1lIGluICRuYW1lcyB7XG4gICAgQGluY2x1ZGUgbmItZm9yLXRoZW1lKCRuYW1lKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG5iLWV4Y2VwdC10aGVtZSgkbmFtZSkge1xuICBAaWYgKCRuYi10aGVtZS1uYW1lICE9ICRuYW1lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWV4Y2VwdC1mb3ItdGhlbWVzKCRuYW1lcy4uLikge1xuICBAZWFjaCAkbmFtZSBpbiAkbmFtZXMge1xuICAgIEBpbmNsdWRlIG5iLWV4Y2VwdC10aGVtZSgkbmFtZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWNzcy1wcm9wZXJ0aWVzKCR0aGVtZS1uYW1lLCAkdGhlbWUpIHtcbiAgLm5iLXRoZW1lLSN7JHRoZW1lLW5hbWV9IHtcblxuICAgIEBlYWNoICR2YXIsICR2YWx1ZSBpbiAkdGhlbWUge1xuICAgICAgQGlmICh0eXBlLW9mKCR2YWx1ZSkgPT0gJ3N0cmluZycgYW5kIG1hcC1nZXQoJHRoZW1lLCAkdmFsdWUpKSB7XG4gICAgICAgIC0tI3skdmFyfTogdmFyKC0tI3skdmFsdWV9KTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAtLSN7JHZhcn06ICN7JHZhbHVlfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG5iLXByZS1wcm9jZXNzLWNvbnRleHQoJHRoZW1lLW5hbWUpIHtcbiAgJG5iLXRoZW1lLXByb2Nlc3MtbW9kZTogJ3ByZS1wcm9jZXNzJyAhZ2xvYmFsO1xuXG4gICRuYi10aGVtZS1uYW1lOiAkdGhlbWUtbmFtZSAhZ2xvYmFsO1xuICAkbmItcHJvY2Vzc2VkLXRoZW1lOiBuYi1wcm9jZXNzLXRoZW1lKG5iLWdldC1yZWdpc3RlcmVkLXRoZW1lKCR0aGVtZS1uYW1lKSkgIWdsb2JhbDtcbn1cblxuQG1peGluIG5iLWxhenktcHJvY2Vzcy1jb250ZXh0KCR0aGVtZS1uYW1lKSB7XG4gICRuYi10aGVtZS1wcm9jZXNzLW1vZGU6ICdsYXp5LXByb2Nlc3MnICFnbG9iYWw7XG5cbiAgJG5iLXRoZW1lLW5hbWU6ICR0aGVtZS1uYW1lICFnbG9iYWw7XG4gICRuYi1wcm9jZXNzZWQtdGhlbWU6ICgpICFnbG9iYWw7XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWNvbXBvbmVudC13aXRoLWNzcy1wcm9wcygpIHtcbiAgLy8gQGJyZWFraW5nLWNoYW5nZSA1LjAuMFxuICA6aG9zdCB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWluc3RhbGwtY29tcG9uZW50LXdpdGgtc2Nzcy12YXJzKCkge1xuICAkZW5hYmxlZC10aGVtZXM6IG5iLWdldC1lbmFibGVkLXRoZW1lcygpO1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lIGluICRlbmFibGVkLXRoZW1lcyB7XG5cbiAgICBAaW5jbHVkZSBuYi1sYXp5LXByb2Nlc3MtY29udGV4dCgkdGhlbWUtbmFtZSk7XG5cbiAgICAvKlxuICAgICAgOmhvc3QgY2FuIGJlIHByZWZpeGVkXG4gICAgICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvOGQwZWUzNDkzOWYxNGMwNzg3NmQyMjJjMjViNDA1ZWQ0NThhMzRkMy9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxXG5cbiAgICAgIFdlIGhhdmUgdG8gdXNlIDpob3N0IGluc3RlYWQgb2YgOmhvc3QtY29udGV4dCgkdGhlbWUpLCB0byBiZSBhYmxlIHRvIHByZWZpeCB0aGVtZSBjbGFzc1xuICAgICAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICAgICAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgICAgIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgICAgIC5zb21lLXNlbGVjdG9yIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuLi5cbiAgICAgICAgfVxuXG4gICAgICBJdCBkb2Vzbid0IHdvcmsgd2l0aCA6aG9zdC1jb250ZXh0IGJlY2F1c2UgYW5ndWxhciBzcGxpdHRpbmcgaXQgaW4gdHdvIHNlbGVjdG9ycyBhbmQgcmVtb3Zlc1xuICAgICAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuICAgICovXG4gICAgLm5iLXRoZW1lLSN7JHRoZW1lLW5hbWV9IDpob3N0IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBFbnRyeSBwb2ludFxuLy8gSW5zdGFsbHMgY29tcG9uZW50IHN0eWxlcyBiYXNlZCBvbiByZWdpc3RlcmVkIHRoZW1lc1xuLy8gVE9ETzogd2UgaGlkZSA6aG9zdCBpbnNpZGUgb2YgaXQgd2hpY2ggaXMgbm90IG9idmlvdXNcbkBtaXhpbiBuYi1pbnN0YWxsLWNvbXBvbmVudCgpIHtcblxuICBAaWYgKCRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzKSB7XG5cbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudC13aXRoLWNzcy1wcm9wcygpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cblxuICB9IEBlbHNlIHtcblxuICAgIEBpbmNsdWRlIG5iLWluc3RhbGwtY29tcG9uZW50LXdpdGgtc2Nzcy12YXJzKCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWdsb2JhbC13aXRoLWNzcy1wcm9wcygpIHtcbiAgQGNvbnRlbnQ7XG5cbiAgQGVhY2ggJHRoZW1lLW5hbWUgaW4gbmItZ2V0LWVuYWJsZWQtdGhlbWVzKCkge1xuICAgIEBpbmNsdWRlIG5iLWluc3RhbGwtY3NzLXByb3BlcnRpZXMoJHRoZW1lLW5hbWUsIG5iLWdldC1yZWdpc3RlcmVkLXRoZW1lKCR0aGVtZS1uYW1lKSk7XG4gIH1cbn1cblxuQG1peGluIG5iLWluc3RhbGwtZ2xvYmFsLXdpdGgtc2Nzcy12YXJzKCkge1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lIGluIG5iLWdldC1lbmFibGVkLXRoZW1lcygpIHtcbiAgICBAaW5jbHVkZSBuYi1wcmUtcHJvY2Vzcy1jb250ZXh0KCR0aGVtZS1uYW1lKTtcblxuICAgIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gRW50cnkgcG9pbnRcbi8vIEluc3RhbGxzIGdsb2JhbCBzdHlsZXMgYmFzZWQgb24gcmVnaXN0ZXJlZCB0aGVtZXNcbkBtaXhpbiBuYi1pbnN0YWxsKCkge1xuICBAaWYgKCRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzKSB7XG4gICAgQGluY2x1ZGUgbmItaW5zdGFsbC1nbG9iYWwtd2l0aC1jc3MtcHJvcHMoKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG5iLWluc3RhbGwtZ2xvYmFsLXdpdGgtc2Nzcy12YXJzKCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBmdW5jdGlvbiBuYi1kZWVwLWZpbmQtdmFsdWUoJHRoZW1lLCAka2V5LCAkdmFsdWUpIHtcbiAgJHBhcmVudC12YWx1ZTogbWFwLWdldCgkdGhlbWUsICR2YWx1ZSk7XG5cbiAgQGlmICgkcGFyZW50LXZhbHVlICE9IG51bGwpIHtcbiAgICBAcmV0dXJuIG5iLWRlZXAtZmluZC12YWx1ZSgkdGhlbWUsICR2YWx1ZSwgJHBhcmVudC12YWx1ZSk7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZTtcbn1cblxuQGZ1bmN0aW9uIG5iLXByb2Nlc3MtdGhlbWUoJHRoZW1lKSB7XG4gICRwcm9jZXNzZWQtdGhlbWU6ICgpO1xuICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJHRoZW1lIHtcbiAgICAkcHJvY2Vzc2VkLXRoZW1lOiBtYXAtc2V0KCRwcm9jZXNzZWQtdGhlbWUsICRrZXksIG5iLWRlZXAtZmluZC12YWx1ZSgkdGhlbWUsICRrZXksICR2YWx1ZSkpO1xuICB9XG4gIEByZXR1cm4gJHByb2Nlc3NlZC10aGVtZTtcbn1cblxuQGZ1bmN0aW9uIGdldC1jdXJyZW50LXRoZW1lLW5hbWUoKSB7XG4gIEBpZiAoJG5iLXRoZW1lLW5hbWUgIT0gbnVsbCkge1xuICAgIEByZXR1cm4gJG5iLXRoZW1lLW5hbWU7XG4gIH1cblxuICBAcmV0dXJuIGdldC1sYXN0LWVuYWJsZWQtdGhlbWUoKTtcbn1cblxuQGZ1bmN0aW9uIG5iLXRoZW1lKCRrZXkpIHtcblxuICAkdmFsdWU6ICgpO1xuXG4gIC8vIGluIGNhc2Ugb2YgY3NzIGN1c3RvbSBwcm9wZXJ0aWVzIC0ganVzdCByZXR1cm5zIHZhcigtLXZhci1uYW1lKSAtIHRoZSByZXN0IGlzIGEgYnJvd3NlciBqb2JcbiAgQGlmICgkbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllcyA9PSB0cnVlKSB7XG4gICAgLy8gdGhlcmUgaXMgbm8gd2F5IHRvIGNoZWNrIGlmIHZhcmlhYmxlIGV4aXN0cyBhcyBjdXJyZW50IGV4ZWN1dGlvbiBjb250ZXh0IGlzIG91dHNpZGUgb2YgcGFydGljdWxhciB0aGVtZVxuICAgIC8vIGJlY2F1c2Ugd2UgcHJvY2VzcyBjc3MgaW4gdGhpcyBtb2RlIG9ubHkgb25jZSEgKGFuZCBub3QgZm9yIGVhY2ggdGhlbWUpXG4gICAgJHZhbHVlOiB2YXIoLS0jeyRrZXl9KTtcbiAgfSBAZWxzZSB7XG4gICAgLy8gaW4gYSBwcmVwcm9jZXNzIG1vZGUgKG5iLWluc3RhbGwtZ2xvYmFsIGNhbGwpIGdldCByZWFkeSB2YWx1ZSBmcm9tICRuYi1wcm9jZXNzZWQtdGhlbWUgdmFyaWFibGVcbiAgICBAaWYgKCRuYi10aGVtZS1wcm9jZXNzLW1vZGUgPT0gJ3ByZS1wcm9jZXNzJykge1xuICAgICAgJHZhbHVlOiBtYXAtZ2V0KCRuYi1wcm9jZXNzZWQtdGhlbWUsICRrZXkpO1xuICAgIH1cblxuICAgIC8vIG90aGVyd2lzZSBsYXppbHkgc2VhcmNoIGZvciB2YXJpYWJsZSB2YWx1ZVxuICAgIEBpZiAoJG5iLXRoZW1lLXByb2Nlc3MtbW9kZSA9PSAnbGF6eS1wcm9jZXNzJykge1xuXG4gICAgICAkbmItdGhlbWUtbmFtZTogZ2V0LWN1cnJlbnQtdGhlbWUtbmFtZSgpO1xuXG4gICAgICAkdGhlbWU6IG5iLWdldC1yZWdpc3RlcmVkLXRoZW1lKCRuYi10aGVtZS1uYW1lKTtcbiAgICAgICR2YWx1ZTogbmItZGVlcC1maW5kLXZhbHVlKCR0aGVtZSwgJGtleSwgbWFwLWdldCgkdGhlbWUsICRrZXkpKTtcbiAgICB9XG4gIH1cblxuICBAaWYgKCR2YWx1ZSA9PSBudWxsKSB7XG4gICAgQHdhcm4gJ05lYnVsYXIgVGhlbWU6IGBuYi10aGVtZSgpYCBjYW5ub3QgZmluZCB2YWx1ZSBmb3Iga2V5IGAnICsgJGtleSArICdgIGZvciB0aGVtZSBgJysgJG5iLXRoZW1lLW5hbWUgKydgJztcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5cbiR0aGVtZTogKFxuXG4gIC8qKlxuICAgKiBTYXNzIG1hcCBjb250YWlucyBhIGxpc3Qgb2YgYWxsIFRoZW1lIHZhcmlhYmxlcyBhbmQgYWxzbyB0aGVpciBtYXBwaW5ncyBpbnRvIENvbXBvbmVudCB2YXJpYWJsZXNcbiAgICogQSB0aGVtZSBjb25zaXN0cyBvZiBhIGxpc3Qgb2YgY29sb3JzLCBiYWNrZ3JvdW5kcywgYm9yZGVycywgdGV4dCBzdHlsZXMgYW5kIHN1cHBvcnRpbmcgdmFyaWFibGVzLlxuICAgKi9cblxuXG4gIC8qIFN0YXR1cyBjb2xvcnM6IHByaW1hcnksIHN1Y2Nlc3MsIGluZm8sIHdhcm5pbmcsIGRhbmdlciAtIGZvciBjb2xvcmVkIGVsZW1lbnRzIChidXR0b25zLCBldGMpICovXG5cbiAgY29sb3ItcHJpbWFyeS0xMDA6ICNmMmY2ZmYsXG4gIGNvbG9yLXByaW1hcnktMjAwOiAjZDllNGZmLFxuICBjb2xvci1wcmltYXJ5LTMwMDogI2E2YzFmZixcbiAgY29sb3ItcHJpbWFyeS00MDA6ICM1OThiZmYsXG4gIGNvbG9yLXByaW1hcnktNTAwOiAjMzM2NmZmLFxuICBjb2xvci1wcmltYXJ5LTYwMDogIzI3NGJkYixcbiAgY29sb3ItcHJpbWFyeS03MDA6ICMxYTM0YjgsXG4gIGNvbG9yLXByaW1hcnktODAwOiAjMTAyNjk0LFxuICBjb2xvci1wcmltYXJ5LTkwMDogIzA5MWM3YSxcblxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTEwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuMDgpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuMTYpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTMwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuMjQpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTQwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuMzIpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTUwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuNCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDUxLCAxMDIsIDI1NSwgMC40OCksXG5cbiAgY29sb3Itc3VjY2Vzcy0xMDA6ICNmMGZmZjUsXG4gIGNvbG9yLXN1Y2Nlc3MtMjAwOiAjY2NmY2UzLFxuICBjb2xvci1zdWNjZXNzLTMwMDogIzhjZmFjNyxcbiAgY29sb3Itc3VjY2Vzcy00MDA6ICMyY2U2OWIsXG4gIGNvbG9yLXN1Y2Nlc3MtNTAwOiAjMDBkNjhmLFxuICBjb2xvci1zdWNjZXNzLTYwMDogIzAwYjg4NyxcbiAgY29sb3Itc3VjY2Vzcy03MDA6ICMwMDk5N2EsXG4gIGNvbG9yLXN1Y2Nlc3MtODAwOiAjMDA3ZDZjLFxuICBjb2xvci1zdWNjZXNzLTkwMDogIzAwNGE0NSxcblxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTEwMDogcmdiYSgwLCAyMTQsIDE0MywgMC4wOCksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjE2KSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuMjQpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTQwMDogcmdiYSgwLCAyMTQsIDE0MywgMC4zMiksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjQpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTYwMDogcmdiYSgwLCAyMTQsIDE0MywgMC40OCksXG5cbiAgY29sb3ItaW5mby0xMDA6ICNmMmY4ZmYsXG4gIGNvbG9yLWluZm8tMjAwOiAjYzdlMmZmLFxuICBjb2xvci1pbmZvLTMwMDogIzk0Y2JmZixcbiAgY29sb3ItaW5mby00MDA6ICM0MmFhZmYsXG4gIGNvbG9yLWluZm8tNTAwOiAjMDA5NWZmLFxuICBjb2xvci1pbmZvLTYwMDogIzAwNmZkNixcbiAgY29sb3ItaW5mby03MDA6ICMwMDU3YzIsXG4gIGNvbG9yLWluZm8tODAwOiAjMDA0MWE4LFxuICBjb2xvci1pbmZvLTkwMDogIzAwMjg4NSxcblxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTEwMDogcmdiYSgwLCAxNDksIDI1NSwgMC4wOCksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjE2KSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC0zMDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuMjQpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTQwMDogcmdiYSgwLCAxNDksIDI1NSwgMC4zMiksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjQpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTYwMDogcmdiYSgwLCAxNDksIDI1NSwgMC40OCksXG5cbiAgY29sb3Itd2FybmluZy0xMDA6ICNmZmZkZjIsXG4gIGNvbG9yLXdhcm5pbmctMjAwOiAjZmZmMWMyLFxuICBjb2xvci13YXJuaW5nLTMwMDogI2ZmZTU5ZSxcbiAgY29sb3Itd2FybmluZy00MDA6ICNmZmM5NGQsXG4gIGNvbG9yLXdhcm5pbmctNTAwOiAjZmZhYTAwLFxuICBjb2xvci13YXJuaW5nLTYwMDogI2RiOGIwMCxcbiAgY29sb3Itd2FybmluZy03MDA6ICNiODZlMDAsXG4gIGNvbG9yLXdhcm5pbmctODAwOiAjOTQ1NDAwLFxuICBjb2xvci13YXJuaW5nLTkwMDogIzcwM2MwMCxcblxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTEwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC4wOCksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjE2KSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuMjQpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTQwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC4zMiksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjQpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTYwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC40OCksXG5cbiAgY29sb3ItZGFuZ2VyLTEwMDogI2ZmZjJmMixcbiAgY29sb3ItZGFuZ2VyLTIwMDogI2ZmZDZkOSxcbiAgY29sb3ItZGFuZ2VyLTMwMDogI2ZmYThiNCxcbiAgY29sb3ItZGFuZ2VyLTQwMDogI2ZmNzA4ZCxcbiAgY29sb3ItZGFuZ2VyLTUwMDogI2ZmM2Q3MSxcbiAgY29sb3ItZGFuZ2VyLTYwMDogI2RiMmM2NixcbiAgY29sb3ItZGFuZ2VyLTcwMDogI2I4MWQ1YixcbiAgY29sb3ItZGFuZ2VyLTgwMDogIzk0MTI0ZSxcbiAgY29sb3ItZGFuZ2VyLTkwMDogIzcwMDk0MCxcblxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC4wOCksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjE2KSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTMwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuMjQpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC4zMiksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC01MDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjQpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC40OCksXG5cbiAgLyogQmFzaWMgY29sb3JzIC0gZm9yIGJhY2tncm91bmRzIGFuZCBib3JkZXJzIGFuZCB0ZXh0cyAqL1xuXG4gIGNvbG9yLWJhc2ljLTEwMDogI2ZmZmZmZixcbiAgY29sb3ItYmFzaWMtMjAwOiAjZjdmOWZjLFxuICBjb2xvci1iYXNpYy0zMDA6ICNlZGYxZjcsXG4gIGNvbG9yLWJhc2ljLTQwMDogI2U0ZTlmMixcbiAgY29sb3ItYmFzaWMtNTAwOiAjYzVjZWUwLFxuICBjb2xvci1iYXNpYy02MDA6ICM4ZjliYjMsXG4gIGNvbG9yLWJhc2ljLTcwMDogIzJlM2E1OSxcbiAgY29sb3ItYmFzaWMtODAwOiAjMjIyYjQ1LFxuICBjb2xvci1iYXNpYy05MDA6ICMxOTIwMzgsXG4gIGNvbG9yLWJhc2ljLTEwMDA6ICMxNTFhMzAsXG4gIGNvbG9yLWJhc2ljLTExMDA6ICMxMDE0MjYsXG5cbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuMDgpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC4xNiksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjI0KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuMzIpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC40KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuNDgpLFxuXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpLFxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTIwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzIpLFxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTYwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ4KSxcblxuICAvKiBTdGF0dXMgY29sb3JzIHN0YXRlcyAtIGZvY3VzLCBob3ZlciwgZGVmYXVsdCwgYWN0aXZlLCBkaXNhYmxlZCAgKi9cblxuICBjb2xvci1iYXNpYy1mb2N1czogY29sb3ItYmFzaWMtNDAwLFxuICBjb2xvci1iYXNpYy1ob3ZlcjogY29sb3ItYmFzaWMtMjAwLFxuICBjb2xvci1iYXNpYy1kZWZhdWx0OiBjb2xvci1iYXNpYy0zMDAsXG4gIGNvbG9yLWJhc2ljLWFjdGl2ZTogY29sb3ItYmFzaWMtNDAwLFxuICBjb2xvci1iYXNpYy1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXI6IGNvbG9yLWJhc2ljLTUwMCxcbiAgY29sb3ItYmFzaWMtaG92ZXItYm9yZGVyOiBjb2xvci1iYXNpYy1ob3ZlcixcbiAgY29sb3ItYmFzaWMtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWJhc2ljLWRlZmF1bHQsXG4gIGNvbG9yLWJhc2ljLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWJhc2ljLWFjdGl2ZSxcbiAgY29sb3ItYmFzaWMtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcblxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1czogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLWJhc2ljLTYwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1iYXNpYy02MDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1iYXNpYy02MDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWJhc2ljLTYwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgY29sb3ItcHJpbWFyeS1mb2N1czogY29sb3ItcHJpbWFyeS02MDAsXG4gIGNvbG9yLXByaW1hcnktaG92ZXI6IGNvbG9yLXByaW1hcnktNDAwLFxuICBjb2xvci1wcmltYXJ5LWRlZmF1bHQ6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LWFjdGl2ZTogY29sb3ItcHJpbWFyeS02MDAsXG4gIGNvbG9yLXByaW1hcnktZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXI6IGNvbG9yLXByaW1hcnktNzAwLFxuICBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBjb2xvci1wcmltYXJ5LWRpc2FibGVkLWJvcmRlcjogY29sb3ItcHJpbWFyeS1kaXNhYmxlZCxcblxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgY29sb3Itc3VjY2Vzcy1mb2N1czogY29sb3Itc3VjY2Vzcy02MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtaG92ZXI6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxuICBjb2xvci1zdWNjZXNzLWRlZmF1bHQ6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBjb2xvci1zdWNjZXNzLWFjdGl2ZTogY29sb3Itc3VjY2Vzcy02MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNzAwLFxuICBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjb2xvci1zdWNjZXNzLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICBjb2xvci1zdWNjZXNzLWRpc2FibGVkLWJvcmRlcjogY29sb3Itc3VjY2Vzcy1kaXNhYmxlZCxcblxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgY29sb3ItaW5mby1mb2N1czogY29sb3ItaW5mby02MDAsXG4gIGNvbG9yLWluZm8taG92ZXI6IGNvbG9yLWluZm8tNDAwLFxuICBjb2xvci1pbmZvLWRlZmF1bHQ6IGNvbG9yLWluZm8tNTAwLFxuICBjb2xvci1pbmZvLWFjdGl2ZTogY29sb3ItaW5mby02MDAsXG4gIGNvbG9yLWluZm8tZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItaW5mby1mb2N1cy1ib3JkZXI6IGNvbG9yLWluZm8tNzAwLFxuICBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcjogY29sb3ItaW5mby1ob3ZlcixcbiAgY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWluZm8tYWN0aXZlLFxuICBjb2xvci1pbmZvLWRpc2FibGVkLWJvcmRlcjogY29sb3ItaW5mby1kaXNhYmxlZCxcblxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItaW5mby10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItaW5mby10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItaW5mby01MDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1pbmZvLTUwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItaW5mby01MDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItaW5mby01MDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgY29sb3Itd2FybmluZy1mb2N1czogY29sb3Itd2FybmluZy02MDAsXG4gIGNvbG9yLXdhcm5pbmctaG92ZXI6IGNvbG9yLXdhcm5pbmctNDAwLFxuICBjb2xvci13YXJuaW5nLWRlZmF1bHQ6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLWFjdGl2ZTogY29sb3Itd2FybmluZy02MDAsXG4gIGNvbG9yLXdhcm5pbmctZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNzAwLFxuICBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjb2xvci13YXJuaW5nLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICBjb2xvci13YXJuaW5nLWRpc2FibGVkLWJvcmRlcjogY29sb3Itd2FybmluZy1kaXNhYmxlZCxcblxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3ZlcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgY29sb3ItZGFuZ2VyLWZvY3VzOiBjb2xvci1kYW5nZXItNjAwLFxuICBjb2xvci1kYW5nZXItaG92ZXI6IGNvbG9yLWRhbmdlci00MDAsXG4gIGNvbG9yLWRhbmdlci1kZWZhdWx0OiBjb2xvci1kYW5nZXItNTAwLFxuICBjb2xvci1kYW5nZXItYWN0aXZlOiBjb2xvci1kYW5nZXItNjAwLFxuICBjb2xvci1kYW5nZXItZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcjogY29sb3ItZGFuZ2VyLTcwMCxcbiAgY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBjb2xvci1kYW5nZXItYWN0aXZlLWJvcmRlcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgY29sb3ItZGFuZ2VyLWRpc2FibGVkLWJvcmRlcjogY29sb3ItZGFuZ2VyLWRpc2FibGVkLFxuXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1czogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci1jb250cm9sLWZvY3VzOiBjb2xvci1iYXNpYy0zMDAsXG4gIGNvbG9yLWNvbnRyb2wtaG92ZXI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgY29sb3ItY29udHJvbC1kZWZhdWx0OiBjb2xvci1iYXNpYy0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtYWN0aXZlOiBjb2xvci1iYXNpYy0zMDAsXG4gIGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXI6IGNvbG9yLWJhc2ljLTUwMCxcbiAgY29sb3ItY29udHJvbC1ob3Zlci1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgY29sb3ItY29udHJvbC1hY3RpdmUtYm9yZGVyOiBjb2xvci1jb250cm9sLWFjdGl2ZSxcbiAgY29sb3ItY29udHJvbC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQsXG5cbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1czogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLWJhc2ljLTEwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWJhc2ljLTEwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWJhc2ljLTEwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICAvKiBCYWNrZ3JvdW5kcyBhbmQgYm9yZGVycyAtIGJhc2ljLCBhbHRlcm5hdGl2ZSBhbmQgcHJpbWFyeSAgKi9cblxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy0yMDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMzogY29sb3ItYmFzaWMtMzAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCxcblxuICBib3JkZXItYmFzaWMtY29sb3ItMTogY29sb3ItYmFzaWMtMTAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItMzogY29sb3ItYmFzaWMtMzAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItNDogY29sb3ItYmFzaWMtNDAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItNTogY29sb3ItYmFzaWMtNTAwLFxuXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMTogY29sb3ItYmFzaWMtODAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTkwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTExMDAsXG5cbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTkwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTEwMDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItNTogY29sb3ItYmFzaWMtMTEwMCxcblxuICBiYWNrZ3JvdW5kLXByaW1hcnktY29sb3ItMTogY29sb3ItcHJpbWFyeS01MDAsXG4gIGJhY2tncm91bmQtcHJpbWFyeS1jb2xvci0yOiBjb2xvci1wcmltYXJ5LTYwMCxcbiAgYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yLTM6IGNvbG9yLXByaW1hcnktNzAwLFxuICBiYWNrZ3JvdW5kLXByaW1hcnktY29sb3ItNDogY29sb3ItcHJpbWFyeS04MDAsXG5cbiAgYm9yZGVyLXByaW1hcnktY29sb3ItMTogY29sb3ItYmFzaWMtNTAwLFxuICBib3JkZXItcHJpbWFyeS1jb2xvci0yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTM6IGNvbG9yLWJhc2ljLTcwMCxcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItNDogY29sb3ItYmFzaWMtODAwLFxuICBib3JkZXItcHJpbWFyeS1jb2xvci01OiBjb2xvci1iYXNpYy05MDAsXG5cbiAgLyogVGV4dCBjb2xvcnMgLSBnZW5lcmFsIGFuZCBzdGF0dXMgKi9cblxuICB0ZXh0LWJhc2ljLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHRleHQtYWx0ZXJuYXRlLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHRleHQtY29udHJvbC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0ZXh0LWRpc2FibGVkLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHRleHQtaGludC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuXG4gIHRleHQtcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0ZXh0LXByaW1hcnktZm9jdXMtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgdGV4dC1wcmltYXJ5LWFjdGl2ZS1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIHRleHQtcHJpbWFyeS1kaXNhYmxlZC1jb2xvcjogY29sb3ItcHJpbWFyeS00MDAsXG5cbiAgdGV4dC1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRleHQtc3VjY2Vzcy1mb2N1cy1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgdGV4dC1zdWNjZXNzLWhvdmVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICB0ZXh0LXN1Y2Nlc3MtYWN0aXZlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgdGV4dC1zdWNjZXNzLWRpc2FibGVkLWNvbG9yOiBjb2xvci1zdWNjZXNzLTQwMCxcblxuICB0ZXh0LWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdGV4dC1pbmZvLWZvY3VzLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICB0ZXh0LWluZm8taG92ZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHRleHQtaW5mby1hY3RpdmUtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxuICB0ZXh0LWluZm8tZGlzYWJsZWQtY29sb3I6IGNvbG9yLWluZm8tNDAwLFxuXG4gIHRleHQtd2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0ZXh0LXdhcm5pbmctZm9jdXMtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHRleHQtd2FybmluZy1ob3Zlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgdGV4dC13YXJuaW5nLWFjdGl2ZS1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIHRleHQtd2FybmluZy1kaXNhYmxlZC1jb2xvcjogY29sb3Itd2FybmluZy00MDAsXG5cbiAgdGV4dC1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0ZXh0LWRhbmdlci1mb2N1cy1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICB0ZXh0LWRhbmdlci1ob3Zlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICB0ZXh0LWRhbmdlci1hY3RpdmUtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIHRleHQtZGFuZ2VyLWRpc2FibGVkLWNvbG9yOiBjb2xvci1kYW5nZXItNDAwLFxuXG4gIC8qIEZvbnRzIGFuZCB0ZXh0IHN0eWxlcyAtIGhlYWRpbmdzLCBzdWJ0aXRsZXMsIHBhcmFncmFwaHMsIGNhcHRpb25zLCBidXR0b24gKi9cblxuICBmb250LWZhbWlseS1wcmltYXJ5OiB1bnF1b3RlKCdPcGVuIFNhbnMsIHNhbnMtc2VyaWYnKSxcbiAgZm9udC1mYW1pbHktc2Vjb25kYXJ5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuXG4gIHRleHQtaGVhZGluZy0xLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy0xLWZvbnQtc2l6ZTogMi4yNXJlbSxcbiAgdGV4dC1oZWFkaW5nLTEtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTEtbGluZS1oZWlnaHQ6IDNyZW0sXG5cbiAgdGV4dC1oZWFkaW5nLTItZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXNlY29uZGFyeSxcbiAgdGV4dC1oZWFkaW5nLTItZm9udC1zaXplOiAycmVtLFxuICB0ZXh0LWhlYWRpbmctMi1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctMi1saW5lLWhlaWdodDogMi41cmVtLFxuXG4gIHRleHQtaGVhZGluZy0zLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy0zLWZvbnQtc2l6ZTogMS44NzVyZW0sXG4gIHRleHQtaGVhZGluZy0zLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy0zLWxpbmUtaGVpZ2h0OiAyLjVyZW0sXG5cbiAgdGV4dC1oZWFkaW5nLTQtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXNlY29uZGFyeSxcbiAgdGV4dC1oZWFkaW5nLTQtZm9udC1zaXplOiAxLjYyNXJlbSxcbiAgdGV4dC1oZWFkaW5nLTQtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTQtbGluZS1oZWlnaHQ6IDJyZW0sXG5cbiAgdGV4dC1oZWFkaW5nLTUtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXNlY29uZGFyeSxcbiAgdGV4dC1oZWFkaW5nLTUtZm9udC1zaXplOiAxLjM3NXJlbSxcbiAgdGV4dC1oZWFkaW5nLTUtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTUtbGluZS1oZWlnaHQ6IDJyZW0sXG5cbiAgdGV4dC1oZWFkaW5nLTYtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXNlY29uZGFyeSxcbiAgdGV4dC1oZWFkaW5nLTYtZm9udC1zaXplOiAxLjEyNXJlbSxcbiAgdGV4dC1oZWFkaW5nLTYtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQ6IDEuNXJlbSxcblxuICB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZTogMC45Mzc1cmVtLFxuICB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0OiA2MDAsXG4gIHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQ6IDEuNXJlbSxcblxuICB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtc3VidGl0bGUtMi1mb250LXNpemU6IDAuODEyNXJlbSxcbiAgdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0OiA2MDAsXG4gIHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodDogMS41cmVtLFxuXG4gIHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LXBhcmFncmFwaC1mb250LXNpemU6IDAuOTM3NXJlbSxcbiAgdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQ6IDQwMCxcbiAgdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQ6IDEuMjVyZW0sXG5cbiAgdGV4dC1wYXJhZ3JhcGgtMi1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1wYXJhZ3JhcGgtMi1mb250LXNpemU6IDAuODEyNXJlbSxcbiAgdGV4dC1wYXJhZ3JhcGgtMi1mb250LXdlaWdodDogNDAwLFxuICB0ZXh0LXBhcmFncmFwaC0yLWxpbmUtaGVpZ2h0OiAxLjEyNXJlbSxcblxuICB0ZXh0LWxhYmVsLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LWxhYmVsLWZvbnQtc2l6ZTogMC43NXJlbSxcbiAgdGV4dC1sYWJlbC1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWxhYmVsLWxpbmUtaGVpZ2h0OiAxcmVtLFxuXG4gIHRleHQtY2FwdGlvbi1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZTogMC43NXJlbSxcbiAgdGV4dC1jYXB0aW9uLWZvbnQtd2VpZ2h0OiA0MDAsXG4gIHRleHQtY2FwdGlvbi1saW5lLWhlaWdodDogMXJlbSxcblxuICB0ZXh0LWNhcHRpb24tMi1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1jYXB0aW9uLTItZm9udC1zaXplOiAwLjc1cmVtLFxuICB0ZXh0LWNhcHRpb24tMi1mb250LXdlaWdodDogNjAwLFxuICB0ZXh0LWNhcHRpb24tMi1saW5lLWhlaWdodDogMXJlbSxcblxuICB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1idXR0b24tZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1idXR0b24tdGlueS1mb250LXNpemU6IDAuNjI1cmVtLFxuICB0ZXh0LWJ1dHRvbi10aW55LWxpbmUtaGVpZ2h0OiAwLjc1cmVtLFxuICB0ZXh0LWJ1dHRvbi1zbWFsbC1mb250LXNpemU6IDAuNzVyZW0sXG4gIHRleHQtYnV0dG9uLXNtYWxsLWxpbmUtaGVpZ2h0OiAxcmVtLFxuICB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplOiAwLjg3NXJlbSxcbiAgdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0OiAxcmVtLFxuICB0ZXh0LWJ1dHRvbi1sYXJnZS1mb250LXNpemU6IDFyZW0sXG4gIHRleHQtYnV0dG9uLWxhcmdlLWxpbmUtaGVpZ2h0OiAxLjI1cmVtLFxuICB0ZXh0LWJ1dHRvbi1naWFudC1mb250LXNpemU6IDEuMTI1cmVtLFxuICB0ZXh0LWJ1dHRvbi1naWFudC1saW5lLWhlaWdodDogMS41cmVtLFxuXG4gIC8qIFN1cHBvcnRpbmcgdmFyaWFibGVzIC0gYm9yZGVyIHJhZGl1cywgb3V0bGluZSwgc2hhZG93LCBkaXZpZGVyICovXG5cbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSxcblxuICBvdXRsaW5lLXdpZHRoOiAwLjM3NXJlbSxcbiAgb3V0bGluZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuXG4gIHNjcm9sbGJhci1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci00LFxuICBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzY3JvbGxiYXItd2lkdGg6IDAuMzEyNXJlbSxcblxuICBzaGFkb3c6IDAgMC41cmVtIDFyZW0gMCByZ2JhKDQ0LCA1MSwgNzMsIDAuMSksXG5cbiAgZGl2aWRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIGRpdmlkZXItc3R5bGU6IHNvbGlkLFxuICBkaXZpZGVyLXdpZHRoOiAxcHgsXG4pO1xuXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGRlZmF1bHQpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5AaW1wb3J0ICdkZWZhdWx0JztcblxuJHRoZW1lOiAoXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMTogY29sb3ItYmFzaWMtODAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTkwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTExMDAsXG5cbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTkwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTEwMDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItNTogY29sb3ItYmFzaWMtMTEwMCxcblxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy0yMDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMzAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCxcblxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMTogY29sb3ItYmFzaWMtMTAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMzAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItNDogY29sb3ItYmFzaWMtNDAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItNTogY29sb3ItYmFzaWMtNTAwLFxuXG4gIHRleHQtYmFzaWMtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgdGV4dC1hbHRlcm5hdGUtY29sb3I6IGNvbG9yLWJhc2ljLTkwMCxcbiAgdGV4dC1kaXNhYmxlZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHNoYWRvdzogMCAwLjVyZW0gMXJlbSAwICMxYTFmMzMsXG4gIG91dGxpbmUtY29sb3I6IGNvbG9yLWJhc2ljLTcwMCxcbik7XG5cbi8vIHJlZ2lzdGVyIHRoZSB0aGVtZVxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBkYXJrLCBkZWZhdWx0KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGFyayc7XG5cbiR0aGVtZTogKFxuXG4gIGNvbG9yLXByaW1hcnktMTAwOiAjZmFmN2ZmLFxuICBjb2xvci1wcmltYXJ5LTIwMDogI2VjZTNmZixcbiAgY29sb3ItcHJpbWFyeS0zMDA6ICNkNWJmZmYsXG4gIGNvbG9yLXByaW1hcnktNDAwOiAjYjE4YWZmLFxuICBjb2xvci1wcmltYXJ5LTUwMDogI2ExNmVmZixcbiAgY29sb3ItcHJpbWFyeS02MDA6ICM3YjUxZGIsXG4gIGNvbG9yLXByaW1hcnktNzAwOiAjNWEzN2I4LFxuICBjb2xvci1wcmltYXJ5LTgwMDogIzNlMjQ5NCxcbiAgY29sb3ItcHJpbWFyeS05MDA6ICMyOTE1N2EsXG5cbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC4wOCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuMTYpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTMwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjI0KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC00MDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC4zMiksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuNCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuNDgpLFxuXG4gIGNvbG9yLWJhc2ljLTEwMDogI2ZmZmZmZixcbiAgY29sb3ItYmFzaWMtMjAwOiAjZjdmN2ZjLFxuICBjb2xvci1iYXNpYy0zMDA6ICNmMGYwZmEsXG4gIGNvbG9yLWJhc2ljLTQwMDogI2UxZTFmMixcbiAgY29sb3ItYmFzaWMtNTAwOiAjY2VjZWViLFxuICBjb2xvci1iYXNpYy02MDA6ICNiNGI0ZGIsXG4gIGNvbG9yLWJhc2ljLTcwMDogIzZhNmE5NCxcbiAgY29sb3ItYmFzaWMtODAwOiAjMzIzMjU5LFxuICBjb2xvci1iYXNpYy05MDA6ICMyNTI1NDcsXG4gIGNvbG9yLWJhc2ljLTEwMDA6ICMxYjFiMzgsXG4gIGNvbG9yLWJhc2ljLTExMDA6ICMxMzEzMmIsXG5cbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuMDgpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC4xNiksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjI0KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuMzIpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC40KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuNDgpLFxuKTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBjb3NtaWMsIGRhcmspO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5AaW1wb3J0ICdkZWZhdWx0JztcblxuJHRoZW1lOiAoXG4gIGJvcmRlci1yYWRpdXM6IDAuMTdyZW0sXG4gIHNoYWRvdzogbm9uZSxcblxuICBidXR0b24taGVyby1nbG93LXNpemU6IDAgMCAyMHB4IDAsXG5cbiAgY2FyZC1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2FyZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuXG4gIGNvbnRleHQtbWVudS1ib3JkZXItd2lkdGg6IDFweCxcbiAgY29udGV4dC1tZW51LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG5cbiAgdGFicy1zZWxlY3RlZDogY29sb3ItcHJpbWFyeS01MDAsXG4gIHRhYnMtc2VsZWN0ZWQtc2Vjb25kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcblxuICBwb3BvdmVyLWJvcmRlci13aWR0aDogMXB4LFxuICBwb3BvdmVyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG5cbiAgdGFic2V0LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHJvdXRlLXRhYnNldC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICB1c2VyLXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjaGVja2JveC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBtb2RhbC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuXG4gIHRhYnNldC1zaGFkb3c6IG5vbmUsXG4gIHJvdXRlLXRhYnNldC1zaGFkb3c6IG5vbmUsXG4gIGJ1dHRvbi1oZXJvLXNoYWRvdzogbm9uZSxcbiAgYWxlcnQtc2hhZG93OiBub25lLFxuICBhY2NvcmRpb24tc2hhZG93OiBub25lLFxuKTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBjb3Jwb3JhdGUsIGRlZmF1bHQpO1xuIiwiLy8gQG5lYnVsYXIgdGhlbWluZyBmcmFtZXdvcmtcbkBpbXBvcnQgJ35AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWluZyc7XG4vLyBAbmVidWxhciBvdXQgb2YgdGhlIGJveCB0aGVtZXNcbkBpbXBvcnQgJ35AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzJztcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoKFxuICBsYXlvdXQtcGFkZGluZy10b3A6IDIuMjVyZW0sXG5cbiAgbWVudS1pdGVtLWljb24tbWFyZ2luOiAwIDAuNXJlbSAwIDAsXG5cbiAgY2FyZC1oZWlnaHQtdGlueTogMTMuNXJlbSxcbiAgY2FyZC1oZWlnaHQtc21hbGw6IDIxLjE4NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LW1lZGl1bTogMjguODc1cmVtLFxuICBjYXJkLWhlaWdodC1sYXJnZTogMzYuNTYyNXJlbSxcbiAgY2FyZC1oZWlnaHQtZ2lhbnQ6IDQ0LjI1cmVtLFxuICBjYXJkLW1hcmdpbi1ib3R0b206IDEuODc1cmVtLFxuICBjYXJkLWhlYWRlci13aXRoLXNlbGVjdC1wYWRkaW5nLXRvcDogMC41cmVtLFxuICBjYXJkLWhlYWRlci13aXRoLXNlbGVjdC1wYWRkaW5nLWJvdHRvbTogMC41cmVtLFxuXG4gIHNlbGVjdC1taW4td2lkdGg6IDZyZW0sXG5cbiAgc2xpZGUtb3V0LWJhY2tncm91bmQ6ICNmN2Y5ZmMsXG4gIHNsaWRlLW91dC1zaGFkb3ctY29sb3I6IDAgNHB4IDE0cHggMCAjOGY5YmIzLFxuICBzbGlkZS1vdXQtc2hhZG93LWNvbG9yLXJ0bDogMCA0cHggMTRweCAwICM4ZjliYjMsXG4pLCBkZWZhdWx0LCBkZWZhdWx0KTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoKFxuICBsYXlvdXQtcGFkZGluZy10b3A6IDIuMjVyZW0sXG5cbiAgbWVudS1pdGVtLWljb24tbWFyZ2luOiAwIDAuNXJlbSAwIDAsXG5cbiAgY2FyZC1oZWlnaHQtdGlueTogMTMuNXJlbSxcbiAgY2FyZC1oZWlnaHQtc21hbGw6IDIxLjE4NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LW1lZGl1bTogMjguODc1cmVtLFxuICBjYXJkLWhlaWdodC1sYXJnZTogMzYuNTYyNXJlbSxcbiAgY2FyZC1oZWlnaHQtZ2lhbnQ6IDQ0LjI1cmVtLFxuICBjYXJkLW1hcmdpbi1ib3R0b206IDEuODc1cmVtLFxuICBjYXJkLWhlYWRlci13aXRoLXNlbGVjdC1wYWRkaW5nLXRvcDogMC41cmVtLFxuICBjYXJkLWhlYWRlci13aXRoLXNlbGVjdC1wYWRkaW5nLWJvdHRvbTogMC41cmVtLFxuXG4gIHNlbGVjdC1taW4td2lkdGg6IDZyZW0sXG5cbiAgc2xpZGUtb3V0LWJhY2tncm91bmQ6ICMyNTI1NDcsXG4gIHNsaWRlLW91dC1zaGFkb3ctY29sb3I6IDJweCAwIDNweCAjMjkxNTdhLFxuICBzbGlkZS1vdXQtc2hhZG93LWNvbG9yLXJ0bDogLTJweCAwIDNweCAjMjkxNTdhLFxuKSwgY29zbWljLCBjb3NtaWMpO1xuXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgoXG4gIGxheW91dC1wYWRkaW5nLXRvcDogMi4yNXJlbSxcblxuICBtZW51LWl0ZW0taWNvbi1tYXJnaW46IDAgMC41cmVtIDAgMCxcblxuICBjYXJkLWhlaWdodC10aW55OiAxMy41cmVtLFxuICBjYXJkLWhlaWdodC1zbWFsbDogMjEuMTg3NXJlbSxcbiAgY2FyZC1oZWlnaHQtbWVkaXVtOiAyOC44NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LWxhcmdlOiAzNi41NjI1cmVtLFxuICBjYXJkLWhlaWdodC1naWFudDogNDQuMjVyZW0sXG4gIGNhcmQtbWFyZ2luLWJvdHRvbTogMS44NzVyZW0sXG4gIGNhcmQtaGVhZGVyLXdpdGgtc2VsZWN0LXBhZGRpbmctdG9wOiAwLjVyZW0sXG4gIGNhcmQtaGVhZGVyLXdpdGgtc2VsZWN0LXBhZGRpbmctYm90dG9tOiAwLjVyZW0sXG5cbiAgc2VsZWN0LW1pbi13aWR0aDogNnJlbSxcblxuICBzbGlkZS1vdXQtYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2VkZjFmNyAwJSwgI2U0ZTlmMiAxMDAlKSxcbiAgc2xpZGUtb3V0LXNoYWRvdy1jb2xvcjogMCA0cHggMTRweCAwICM4ZjliYjMsXG4gIHNsaWRlLW91dC1zaGFkb3ctY29sb3ItcnRsOiAwIDRweCAxNHB4IDAgIzhmOWJiMyxcbiksIGNvcnBvcmF0ZSwgY29ycG9yYXRlKTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoKFxuICBsYXlvdXQtcGFkZGluZy10b3A6IDIuMjVyZW0sXG5cbiAgbWVudS1pdGVtLWljb24tbWFyZ2luOiAwIDAuNXJlbSAwIDAsXG5cbiAgY2FyZC1oZWlnaHQtdGlueTogMTMuNXJlbSxcbiAgY2FyZC1oZWlnaHQtc21hbGw6IDIxLjE4NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LW1lZGl1bTogMjguODc1cmVtLFxuICBjYXJkLWhlaWdodC1sYXJnZTogMzYuNTYyNXJlbSxcbiAgY2FyZC1oZWlnaHQtZ2lhbnQ6IDQ0LjI1cmVtLFxuICBjYXJkLW1hcmdpbi1ib3R0b206IDEuODc1cmVtLFxuICBjYXJkLWhlYWRlci13aXRoLXNlbGVjdC1wYWRkaW5nLXRvcDogMC41cmVtLFxuICBjYXJkLWhlYWRlci13aXRoLXNlbGVjdC1wYWRkaW5nLWJvdHRvbTogMC41cmVtLFxuXG4gIHNlbGVjdC1taW4td2lkdGg6IDZyZW0sXG5cbiAgc2xpZGUtb3V0LWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMyMjJiNDUgMCUsICMxNTFhMzAgMTAwJSksXG4gIHNsaWRlLW91dC1zaGFkb3ctY29sb3I6IDAgNHB4IDE0cHggMCAjOGY5YmIzLFxuICBzbGlkZS1vdXQtc2hhZG93LWNvbG9yLXJ0bDogMCA0cHggMTRweCAwICM4ZjliYjMsXG4pLCBkYXJrLCBkYXJrKTtcbiJdfQ== */"]
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartjsComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-chartjs',
                                styleUrls: ['./chartjs.component.scss'],
                                templateUrl: './chartjs.component.html'
                            }]
                        }], null, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/charts-routing.module.ts":
                /*!*******************************************************!*\
                  !*** ./src/app/pages/charts/charts-routing.module.ts ***!
                  \*******************************************************/

                /*! exports provided: ChartsRoutingModule, routedComponents */

                /***/
                function srcAppPagesChartsChartsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "ChartsRoutingModule", function() {
                        return ChartsRoutingModule;
                    });
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "routedComponents", function() {
                        return routedComponents;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @angular/router */
                        "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
                    /* harmony import */


                    var _charts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! ./charts.component */
                        "./src/app/pages/charts/charts.component.ts");
                    /* harmony import */


                    var _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                        /*! ./echarts/echarts.component */
                        "./src/app/pages/charts/echarts/echarts.component.ts");
                    /* harmony import */


                    var _d3_d3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                        /*! ./d3/d3.component */
                        "./src/app/pages/charts/d3/d3.component.ts");
                    /* harmony import */


                    var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                        /*! ./chartjs/chartjs.component */
                        "./src/app/pages/charts/chartjs/chartjs.component.ts");

                    var routes = [{
                        path: '',
                        component: _charts_component__WEBPACK_IMPORTED_MODULE_2__["ChartsComponent"],
                        children: [{
                            path: 'echarts',
                            component: _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_3__["EchartsComponent"]
                        }, {
                            path: 'd3',
                            component: _d3_d3_component__WEBPACK_IMPORTED_MODULE_4__["D3Component"]
                        }, {
                            path: 'chartjs',
                            component: _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_5__["ChartjsComponent"]
                        }]
                    }];

                    var ChartsRoutingModule = function ChartsRoutingModule() {
                        _classCallCheck(this, ChartsRoutingModule);
                    };

                    ChartsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
                        type: ChartsRoutingModule
                    });
                    ChartsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
                        factory: function ChartsRoutingModule_Factory(t) {
                            return new(t || ChartsRoutingModule)();
                        },
                        imports: [
                            [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                        ]
                    });

                    (function() {
                        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChartsRoutingModule, {
                            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                        });
                    })();
                    /*@__PURE__*/


                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartsRoutingModule, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                            args: [{
                                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                            }]
                        }], null, null);
                    })();

                    var routedComponents = [_charts_component__WEBPACK_IMPORTED_MODULE_2__["ChartsComponent"], _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_3__["EchartsComponent"], _d3_d3_component__WEBPACK_IMPORTED_MODULE_4__["D3Component"], _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_5__["ChartjsComponent"]];
                    /***/
                },

            /***/
            "./src/app/pages/charts/charts.component.ts":
                /*!**************************************************!*\
                  !*** ./src/app/pages/charts/charts.component.ts ***!
                  \**************************************************/

                /*! exports provided: ChartsComponent */

                /***/
                function srcAppPagesChartsChartsComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() {
                        return ChartsComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @angular/router */
                        "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

                    var ChartsComponent = function ChartsComponent() {
                        _classCallCheck(this, ChartsComponent);
                    };

                    ChartsComponent.ɵfac = function ChartsComponent_Factory(t) {
                        return new(t || ChartsComponent)();
                    };

                    ChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: ChartsComponent,
                        selectors: [
                            ["ngx-charts"]
                        ],
                        decls: 1,
                        vars: 0,
                        template: function ChartsComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
                            }
                        },
                        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartsComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-charts',
                                template: "\n    <router-outlet></router-outlet>\n  "
                            }]
                        }], null, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/charts.module.ts":
                /*!***********************************************!*\
                  !*** ./src/app/pages/charts/charts.module.ts ***!
                  \***********************************************/

                /*! exports provided: ChartsModule */

                /***/
                function srcAppPagesChartsChartsModuleTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "ChartsModule", function() {
                        return ChartsModule;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var ngx_echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! ngx-echarts */
                        "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
                    /* harmony import */


                    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! @swimlane/ngx-charts */
                        "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
                    /* harmony import */


                    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                        /*! angular2-chartjs */
                        "./node_modules/angular2-chartjs/__ivy_ngcc__/dist/index.js");
                    /* harmony import */


                    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_3__);
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                        /*! ../../@theme/theme.module */
                        "./src/app/@theme/theme.module.ts");
                    /* harmony import */


                    var _charts_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                        /*! ./charts-routing.module */
                        "./src/app/pages/charts/charts-routing.module.ts");
                    /* harmony import */


                    var _chartjs_chartjs_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                        /*! ./chartjs/chartjs-bar.component */
                        "./src/app/pages/charts/chartjs/chartjs-bar.component.ts");
                    /* harmony import */


                    var _chartjs_chartjs_line_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                        /*! ./chartjs/chartjs-line.component */
                        "./src/app/pages/charts/chartjs/chartjs-line.component.ts");
                    /* harmony import */


                    var _chartjs_chartjs_pie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
                        /*! ./chartjs/chartjs-pie.component */
                        "./src/app/pages/charts/chartjs/chartjs-pie.component.ts");
                    /* harmony import */


                    var _chartjs_chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
                        /*! ./chartjs/chartjs-multiple-xaxis.component */
                        "./src/app/pages/charts/chartjs/chartjs-multiple-xaxis.component.ts");
                    /* harmony import */


                    var _chartjs_chartjs_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
                        /*! ./chartjs/chartjs-bar-horizontal.component */
                        "./src/app/pages/charts/chartjs/chartjs-bar-horizontal.component.ts");
                    /* harmony import */


                    var _chartjs_chartjs_radar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
                        /*! ./chartjs/chartjs-radar.component */
                        "./src/app/pages/charts/chartjs/chartjs-radar.component.ts");
                    /* harmony import */


                    var _d3_d3_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
                        /*! ./d3/d3-bar.component */
                        "./src/app/pages/charts/d3/d3-bar.component.ts");
                    /* harmony import */


                    var _d3_d3_line_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
                        /*! ./d3/d3-line.component */
                        "./src/app/pages/charts/d3/d3-line.component.ts");
                    /* harmony import */


                    var _d3_d3_pie_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
                        /*! ./d3/d3-pie.component */
                        "./src/app/pages/charts/d3/d3-pie.component.ts");
                    /* harmony import */


                    var _d3_d3_area_stack_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
                        /*! ./d3/d3-area-stack.component */
                        "./src/app/pages/charts/d3/d3-area-stack.component.ts");
                    /* harmony import */


                    var _d3_d3_polar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
                        /*! ./d3/d3-polar.component */
                        "./src/app/pages/charts/d3/d3-polar.component.ts");
                    /* harmony import */


                    var _d3_d3_advanced_pie_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
                        /*! ./d3/d3-advanced-pie.component */
                        "./src/app/pages/charts/d3/d3-advanced-pie.component.ts");
                    /* harmony import */


                    var _echarts_echarts_line_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
                        /*! ./echarts/echarts-line.component */
                        "./src/app/pages/charts/echarts/echarts-line.component.ts");
                    /* harmony import */


                    var _echarts_echarts_pie_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
                        /*! ./echarts/echarts-pie.component */
                        "./src/app/pages/charts/echarts/echarts-pie.component.ts");
                    /* harmony import */


                    var _echarts_echarts_bar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
                        /*! ./echarts/echarts-bar.component */
                        "./src/app/pages/charts/echarts/echarts-bar.component.ts");
                    /* harmony import */


                    var _echarts_echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
                        /*! ./echarts/echarts-multiple-xaxis.component */
                        "./src/app/pages/charts/echarts/echarts-multiple-xaxis.component.ts");
                    /* harmony import */


                    var _echarts_echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
                        /*! ./echarts/echarts-area-stack.component */
                        "./src/app/pages/charts/echarts/echarts-area-stack.component.ts");
                    /* harmony import */


                    var _echarts_echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
                        /*! ./echarts/echarts-bar-animation.component */
                        "./src/app/pages/charts/echarts/echarts-bar-animation.component.ts");
                    /* harmony import */


                    var _echarts_echarts_radar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
                        /*! ./echarts/echarts-radar.component */
                        "./src/app/pages/charts/echarts/echarts-radar.component.ts");
                    /* harmony import */


                    var _charts_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
                        /*! ./charts.component */
                        "./src/app/pages/charts/charts.component.ts");
                    /* harmony import */


                    var _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
                        /*! ./echarts/echarts.component */
                        "./src/app/pages/charts/echarts/echarts.component.ts");
                    /* harmony import */


                    var _d3_d3_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
                        /*! ./d3/d3.component */
                        "./src/app/pages/charts/d3/d3.component.ts");
                    /* harmony import */


                    var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
                        /*! ./chartjs/chartjs.component */
                        "./src/app/pages/charts/chartjs/chartjs.component.ts");

                    var components = [_chartjs_chartjs_bar_component__WEBPACK_IMPORTED_MODULE_7__["ChartjsBarComponent"], _chartjs_chartjs_line_component__WEBPACK_IMPORTED_MODULE_8__["ChartjsLineComponent"], _chartjs_chartjs_pie_component__WEBPACK_IMPORTED_MODULE_9__["ChartjsPieComponent"], _chartjs_chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_10__["ChartjsMultipleXaxisComponent"], _chartjs_chartjs_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_11__["ChartjsBarHorizontalComponent"], _chartjs_chartjs_radar_component__WEBPACK_IMPORTED_MODULE_12__["ChartjsRadarComponent"], _d3_d3_bar_component__WEBPACK_IMPORTED_MODULE_13__["D3BarComponent"], _d3_d3_line_component__WEBPACK_IMPORTED_MODULE_14__["D3LineComponent"], _d3_d3_pie_component__WEBPACK_IMPORTED_MODULE_15__["D3PieComponent"], _d3_d3_area_stack_component__WEBPACK_IMPORTED_MODULE_16__["D3AreaStackComponent"], _d3_d3_polar_component__WEBPACK_IMPORTED_MODULE_17__["D3PolarComponent"], _d3_d3_advanced_pie_component__WEBPACK_IMPORTED_MODULE_18__["D3AdvancedPieComponent"], _echarts_echarts_line_component__WEBPACK_IMPORTED_MODULE_19__["EchartsLineComponent"], _echarts_echarts_pie_component__WEBPACK_IMPORTED_MODULE_20__["EchartsPieComponent"], _echarts_echarts_bar_component__WEBPACK_IMPORTED_MODULE_21__["EchartsBarComponent"], _echarts_echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_22__["EchartsMultipleXaxisComponent"], _echarts_echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_23__["EchartsAreaStackComponent"], _echarts_echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_24__["EchartsBarAnimationComponent"], _echarts_echarts_radar_component__WEBPACK_IMPORTED_MODULE_25__["EchartsRadarComponent"]];

                    var ChartsModule = function ChartsModule() {
                        _classCallCheck(this, ChartsModule);
                    };

                    ChartsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
                        type: ChartsModule
                    });
                    ChartsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
                        factory: function ChartsModule_Factory(t) {
                            return new(t || ChartsModule)();
                        },
                        imports: [
                            [_theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"], _charts_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChartsRoutingModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_1__["NgxEchartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["NgxChartsModule"], angular2_chartjs__WEBPACK_IMPORTED_MODULE_3__["ChartModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"]]
                        ]
                    });

                    (function() {
                        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChartsModule, {
                            declarations: [_charts_component__WEBPACK_IMPORTED_MODULE_26__["ChartsComponent"], _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_27__["EchartsComponent"], _d3_d3_component__WEBPACK_IMPORTED_MODULE_28__["D3Component"], _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_29__["ChartjsComponent"], _chartjs_chartjs_bar_component__WEBPACK_IMPORTED_MODULE_7__["ChartjsBarComponent"], _chartjs_chartjs_line_component__WEBPACK_IMPORTED_MODULE_8__["ChartjsLineComponent"], _chartjs_chartjs_pie_component__WEBPACK_IMPORTED_MODULE_9__["ChartjsPieComponent"], _chartjs_chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_10__["ChartjsMultipleXaxisComponent"], _chartjs_chartjs_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_11__["ChartjsBarHorizontalComponent"], _chartjs_chartjs_radar_component__WEBPACK_IMPORTED_MODULE_12__["ChartjsRadarComponent"], _d3_d3_bar_component__WEBPACK_IMPORTED_MODULE_13__["D3BarComponent"], _d3_d3_line_component__WEBPACK_IMPORTED_MODULE_14__["D3LineComponent"], _d3_d3_pie_component__WEBPACK_IMPORTED_MODULE_15__["D3PieComponent"], _d3_d3_area_stack_component__WEBPACK_IMPORTED_MODULE_16__["D3AreaStackComponent"], _d3_d3_polar_component__WEBPACK_IMPORTED_MODULE_17__["D3PolarComponent"], _d3_d3_advanced_pie_component__WEBPACK_IMPORTED_MODULE_18__["D3AdvancedPieComponent"], _echarts_echarts_line_component__WEBPACK_IMPORTED_MODULE_19__["EchartsLineComponent"], _echarts_echarts_pie_component__WEBPACK_IMPORTED_MODULE_20__["EchartsPieComponent"], _echarts_echarts_bar_component__WEBPACK_IMPORTED_MODULE_21__["EchartsBarComponent"], _echarts_echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_22__["EchartsMultipleXaxisComponent"], _echarts_echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_23__["EchartsAreaStackComponent"], _echarts_echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_24__["EchartsBarAnimationComponent"], _echarts_echarts_radar_component__WEBPACK_IMPORTED_MODULE_25__["EchartsRadarComponent"]],
                            imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"], _charts_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChartsRoutingModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_1__["NgxEchartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["NgxChartsModule"], angular2_chartjs__WEBPACK_IMPORTED_MODULE_3__["ChartModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"]]
                        });
                    })();
                    /*@__PURE__*/


                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartsModule, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                            args: [{
                                imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"], _charts_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChartsRoutingModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_1__["NgxEchartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["NgxChartsModule"], angular2_chartjs__WEBPACK_IMPORTED_MODULE_3__["ChartModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"]],
                                declarations: [].concat(_toConsumableArray(_charts_routing_module__WEBPACK_IMPORTED_MODULE_6__["routedComponents"]), components)
                            }]
                        }], null, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/d3/d3-advanced-pie.component.ts":
                /*!**************************************************************!*\
                  !*** ./src/app/pages/charts/d3/d3-advanced-pie.component.ts ***!
                  \**************************************************************/

                /*! exports provided: D3AdvancedPieComponent */

                /***/
                function srcAppPagesChartsD3D3AdvancedPieComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "D3AdvancedPieComponent", function() {
                        return D3AdvancedPieComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! @swimlane/ngx-charts */
                        "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");

                    var D3AdvancedPieComponent = /*#__PURE__*/ function() {
                        function D3AdvancedPieComponent(theme) {
                            var _this7 = this;

                            _classCallCheck(this, D3AdvancedPieComponent);

                            this.theme = theme;
                            this.single = [{
                                name: 'Germany',
                                value: 8940000
                            }, {
                                name: 'USA',
                                value: 5000000
                            }, {
                                name: 'France',
                                value: 7200000
                            }];
                            this.themeSubscription = this.theme.getJsTheme().subscribe(function(config) {
                                var colors = config.variables;
                                _this7.colorScheme = {
                                    domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight]
                                };
                            });
                        }

                        _createClass(D3AdvancedPieComponent, [{
                            key: "ngOnDestroy",
                            value: function ngOnDestroy() {
                                this.themeSubscription.unsubscribe();
                            }
                        }]);

                        return D3AdvancedPieComponent;
                    }();

                    D3AdvancedPieComponent.ɵfac = function D3AdvancedPieComponent_Factory(t) {
                        return new(t || D3AdvancedPieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]));
                    };

                    D3AdvancedPieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: D3AdvancedPieComponent,
                        selectors: [
                            ["ngx-d3-advanced-pie"]
                        ],
                        decls: 1,
                        vars: 2,
                        consts: [
                            [3, "scheme", "results"]
                        ],
                        template: function D3AdvancedPieComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-charts-advanced-pie-chart", 0);
                            }

                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.single);
                            }
                        },
                        directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["AdvancedPieChartComponent"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](D3AdvancedPieComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-d3-advanced-pie',
                                template: "\n    <ngx-charts-advanced-pie-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"single\">\n    </ngx-charts-advanced-pie-chart>\n  "
                            }]
                        }], function() {
                            return [{
                                type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]
                            }];
                        }, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/d3/d3-area-stack.component.ts":
                /*!************************************************************!*\
                  !*** ./src/app/pages/charts/d3/d3-area-stack.component.ts ***!
                  \************************************************************/

                /*! exports provided: D3AreaStackComponent */

                /***/
                function srcAppPagesChartsD3D3AreaStackComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "D3AreaStackComponent", function() {
                        return D3AreaStackComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! @swimlane/ngx-charts */
                        "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");

                    var D3AreaStackComponent = /*#__PURE__*/ function() {
                        function D3AreaStackComponent(theme) {
                            var _this8 = this;

                            _classCallCheck(this, D3AreaStackComponent);

                            this.theme = theme;
                            this.multi = [{
                                name: 'Germany',
                                series: [{
                                    name: '2010',
                                    value: 7300000
                                }, {
                                    name: '2011',
                                    value: 8940000
                                }]
                            }, {
                                name: 'USA',
                                series: [{
                                    name: '2010',
                                    value: 7870000
                                }, {
                                    name: '2011',
                                    value: 8270000
                                }]
                            }, {
                                name: 'France',
                                series: [{
                                    name: '2010',
                                    value: 5000002
                                }, {
                                    name: '2011',
                                    value: 5800000
                                }]
                            }];
                            this.showLegend = true;
                            this.autoScale = true;
                            this.showXAxis = true;
                            this.showYAxis = true;
                            this.showXAxisLabel = true;
                            this.showYAxisLabel = true;
                            this.xAxisLabel = 'Country';
                            this.yAxisLabel = 'Population';
                            this.themeSubscription = this.theme.getJsTheme().subscribe(function(config) {
                                var colors = config.variables;
                                _this8.colorScheme = {
                                    domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight]
                                };
                            });
                        }

                        _createClass(D3AreaStackComponent, [{
                            key: "ngOnDestroy",
                            value: function ngOnDestroy() {
                                this.themeSubscription.unsubscribe();
                            }
                        }]);

                        return D3AreaStackComponent;
                    }();

                    D3AreaStackComponent.ɵfac = function D3AreaStackComponent_Factory(t) {
                        return new(t || D3AreaStackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]));
                    };

                    D3AreaStackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: D3AreaStackComponent,
                        selectors: [
                            ["ngx-d3-area-stack"]
                        ],
                        decls: 1,
                        vars: 10,
                        consts: [
                            [3, "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "autoScale"]
                        ],
                        template: function D3AreaStackComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-charts-area-chart", 0);
                            }

                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("autoScale", ctx.autoScale);
                            }
                        },
                        directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["AreaChartComponent"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](D3AreaStackComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-d3-area-stack',
                                template: "\n    <ngx-charts-area-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"multi\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\"\n      [autoScale]=\"autoScale\">\n    </ngx-charts-area-chart>\n  "
                            }]
                        }], function() {
                            return [{
                                type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]
                            }];
                        }, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/d3/d3-bar.component.ts":
                /*!*****************************************************!*\
                  !*** ./src/app/pages/charts/d3/d3-bar.component.ts ***!
                  \*****************************************************/

                /*! exports provided: D3BarComponent */

                /***/
                function srcAppPagesChartsD3D3BarComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "D3BarComponent", function() {
                        return D3BarComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! @swimlane/ngx-charts */
                        "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");

                    var D3BarComponent = /*#__PURE__*/ function() {
                        function D3BarComponent(theme) {
                            var _this9 = this;

                            _classCallCheck(this, D3BarComponent);

                            this.theme = theme;
                            this.results = [{
                                name: 'Germany',
                                value: 8940
                            }, {
                                name: 'USA',
                                value: 5000
                            }, {
                                name: 'France',
                                value: 7200
                            }];
                            this.showLegend = true;
                            this.showXAxis = true;
                            this.showYAxis = true;
                            this.xAxisLabel = 'Country';
                            this.yAxisLabel = 'Population';
                            this.themeSubscription = this.theme.getJsTheme().subscribe(function(config) {
                                var colors = config.variables;
                                _this9.colorScheme = {
                                    domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight]
                                };
                            });
                        }

                        _createClass(D3BarComponent, [{
                            key: "ngOnDestroy",
                            value: function ngOnDestroy() {
                                this.themeSubscription.unsubscribe();
                            }
                        }]);

                        return D3BarComponent;
                    }();

                    D3BarComponent.ɵfac = function D3BarComponent_Factory(t) {
                        return new(t || D3BarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]));
                    };

                    D3BarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: D3BarComponent,
                        selectors: [
                            ["ngx-d3-bar"]
                        ],
                        decls: 1,
                        vars: 7,
                        consts: [
                            [3, "scheme", "results", "xAxis", "yAxis", "legend", "xAxisLabel", "yAxisLabel"]
                        ],
                        template: function D3BarComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-charts-bar-vertical", 0);
                            }

                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.results)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel);
                            }
                        },
                        directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["BarVerticalComponent"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](D3BarComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-d3-bar',
                                template: "\n    <ngx-charts-bar-vertical\n      [scheme]=\"colorScheme\"\n      [results]=\"results\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\">\n    </ngx-charts-bar-vertical>\n  "
                            }]
                        }], function() {
                            return [{
                                type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]
                            }];
                        }, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/d3/d3-line.component.ts":
                /*!******************************************************!*\
                  !*** ./src/app/pages/charts/d3/d3-line.component.ts ***!
                  \******************************************************/

                /*! exports provided: D3LineComponent */

                /***/
                function srcAppPagesChartsD3D3LineComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "D3LineComponent", function() {
                        return D3LineComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! @swimlane/ngx-charts */
                        "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");

                    var D3LineComponent = /*#__PURE__*/ function() {
                        function D3LineComponent(theme) {
                            var _this10 = this;

                            _classCallCheck(this, D3LineComponent);

                            this.theme = theme;
                            this.multi = [{
                                name: 'Germany',
                                series: [{
                                    name: '2010',
                                    value: 7300
                                }, {
                                    name: '2011',
                                    value: 8940
                                }]
                            }, {
                                name: 'USA',
                                series: [{
                                    name: '2010',
                                    value: 7870
                                }, {
                                    name: '2011',
                                    value: 8270
                                }]
                            }, {
                                name: 'France',
                                series: [{
                                    name: '2010',
                                    value: 5002
                                }, {
                                    name: '2011',
                                    value: 5800
                                }]
                            }];
                            this.showLegend = true;
                            this.showXAxis = true;
                            this.showYAxis = true;
                            this.showXAxisLabel = true;
                            this.xAxisLabel = 'Country';
                            this.showYAxisLabel = true;
                            this.yAxisLabel = 'Population';
                            this.themeSubscription = this.theme.getJsTheme().subscribe(function(config) {
                                var colors = config.variables;
                                _this10.colorScheme = {
                                    domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight]
                                };
                            });
                        }

                        _createClass(D3LineComponent, [{
                            key: "ngOnDestroy",
                            value: function ngOnDestroy() {
                                this.themeSubscription.unsubscribe();
                            }
                        }]);

                        return D3LineComponent;
                    }();

                    D3LineComponent.ɵfac = function D3LineComponent_Factory(t) {
                        return new(t || D3LineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]));
                    };

                    D3LineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: D3LineComponent,
                        selectors: [
                            ["ngx-d3-line"]
                        ],
                        decls: 1,
                        vars: 9,
                        consts: [
                            [3, "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel"]
                        ],
                        template: function D3LineComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-charts-line-chart", 0);
                            }

                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel);
                            }
                        },
                        directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["LineChartComponent"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](D3LineComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-d3-line',
                                template: "\n    <ngx-charts-line-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"multi\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\">\n    </ngx-charts-line-chart>\n  "
                            }]
                        }], function() {
                            return [{
                                type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]
                            }];
                        }, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/d3/d3-pie.component.ts":
                /*!*****************************************************!*\
                  !*** ./src/app/pages/charts/d3/d3-pie.component.ts ***!
                  \*****************************************************/

                /*! exports provided: D3PieComponent */

                /***/
                function srcAppPagesChartsD3D3PieComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "D3PieComponent", function() {
                        return D3PieComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! @swimlane/ngx-charts */
                        "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");

                    var D3PieComponent = /*#__PURE__*/ function() {
                        function D3PieComponent(theme) {
                            var _this11 = this;

                            _classCallCheck(this, D3PieComponent);

                            this.theme = theme;
                            this.results = [{
                                name: 'Germany',
                                value: 8940
                            }, {
                                name: 'USA',
                                value: 5000
                            }, {
                                name: 'France',
                                value: 7200
                            }];
                            this.showLegend = true;
                            this.showLabels = true;
                            this.themeSubscription = this.theme.getJsTheme().subscribe(function(config) {
                                var colors = config.variables;
                                _this11.colorScheme = {
                                    domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight]
                                };
                            });
                        }

                        _createClass(D3PieComponent, [{
                            key: "ngOnDestroy",
                            value: function ngOnDestroy() {
                                this.themeSubscription.unsubscribe();
                            }
                        }]);

                        return D3PieComponent;
                    }();

                    D3PieComponent.ɵfac = function D3PieComponent_Factory(t) {
                        return new(t || D3PieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]));
                    };

                    D3PieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: D3PieComponent,
                        selectors: [
                            ["ngx-d3-pie"]
                        ],
                        decls: 1,
                        vars: 4,
                        consts: [
                            [3, "scheme", "results", "legend", "labels"]
                        ],
                        template: function D3PieComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-charts-pie-chart", 0);
                            }

                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.results)("legend", ctx.showLegend)("labels", ctx.showLabels);
                            }
                        },
                        directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["PieChartComponent"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](D3PieComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-d3-pie',
                                template: "\n    <ngx-charts-pie-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"results\"\n      [legend]=\"showLegend\"\n      [labels]=\"showLabels\">\n    </ngx-charts-pie-chart>\n  "
                            }]
                        }], function() {
                            return [{
                                type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]
                            }];
                        }, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/d3/d3-polar.component.ts":
                /*!*******************************************************!*\
                  !*** ./src/app/pages/charts/d3/d3-polar.component.ts ***!
                  \*******************************************************/

                /*! exports provided: D3PolarComponent */

                /***/
                function srcAppPagesChartsD3D3PolarComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "D3PolarComponent", function() {
                        return D3PolarComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! @swimlane/ngx-charts */
                        "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");

                    var D3PolarComponent = /*#__PURE__*/ function() {
                        function D3PolarComponent(theme) {
                            var _this12 = this;

                            _classCallCheck(this, D3PolarComponent);

                            this.theme = theme;
                            this.multi = [{
                                name: 'Germany',
                                series: [{
                                    name: '1990',
                                    value: 31476
                                }, {
                                    name: '2000',
                                    value: 36953
                                }, {
                                    name: '2010',
                                    value: 40632
                                }]
                            }, {
                                name: 'USA',
                                series: [{
                                    name: '1990',
                                    value: 37060
                                }, {
                                    name: '2000',
                                    value: 45986
                                }, {
                                    name: '2010',
                                    value: 49737
                                }]
                            }, {
                                name: 'France',
                                series: [{
                                    name: '1990',
                                    value: 29476
                                }, {
                                    name: '2000',
                                    value: 34774
                                }, {
                                    name: '2010',
                                    value: 36240
                                }]
                            }];
                            this.showLegend = true;
                            this.autoScale = true;
                            this.showXAxis = true;
                            this.showYAxis = true;
                            this.showXAxisLabel = true;
                            this.showYAxisLabel = true;
                            this.xAxisLabel = 'Country';
                            this.yAxisLabel = 'Population';
                            this.themeSubscription = this.theme.getJsTheme().subscribe(function(config) {
                                var colors = config.variables;
                                _this12.colorScheme = {
                                    domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight]
                                };
                            });
                        }

                        _createClass(D3PolarComponent, [{
                            key: "ngOnDestroy",
                            value: function ngOnDestroy() {
                                this.themeSubscription.unsubscribe();
                            }
                        }]);

                        return D3PolarComponent;
                    }();

                    D3PolarComponent.ɵfac = function D3PolarComponent_Factory(t) {
                        return new(t || D3PolarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]));
                    };

                    D3PolarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: D3PolarComponent,
                        selectors: [
                            ["ngx-d3-polar"]
                        ],
                        decls: 1,
                        vars: 10,
                        consts: [
                            [3, "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "autoScale"]
                        ],
                        template: function D3PolarComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-charts-polar-chart", 0);
                            }

                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("autoScale", ctx.autoScale);
                            }
                        },
                        directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["PolarChartComponent"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](D3PolarComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-d3-polar',
                                template: "\n    <ngx-charts-polar-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"multi\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\"\n      [autoScale]=\"autoScale\">\n    </ngx-charts-polar-chart>\n  "
                            }]
                        }], function() {
                            return [{
                                type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]
                            }];
                        }, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/d3/d3.component.ts":
                /*!*************************************************!*\
                  !*** ./src/app/pages/charts/d3/d3.component.ts ***!
                  \*************************************************/

                /*! exports provided: D3Component */

                /***/
                function srcAppPagesChartsD3D3ComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "D3Component", function() {
                        return D3Component;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var _d3_pie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! ./d3-pie.component */
                        "./src/app/pages/charts/d3/d3-pie.component.ts");
                    /* harmony import */


                    var _d3_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                        /*! ./d3-bar.component */
                        "./src/app/pages/charts/d3/d3-bar.component.ts");
                    /* harmony import */


                    var _d3_line_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                        /*! ./d3-line.component */
                        "./src/app/pages/charts/d3/d3-line.component.ts");
                    /* harmony import */


                    var _d3_advanced_pie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                        /*! ./d3-advanced-pie.component */
                        "./src/app/pages/charts/d3/d3-advanced-pie.component.ts");
                    /* harmony import */


                    var _d3_area_stack_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                        /*! ./d3-area-stack.component */
                        "./src/app/pages/charts/d3/d3-area-stack.component.ts");

                    var D3Component = function D3Component() {
                        _classCallCheck(this, D3Component);
                    };

                    D3Component.ɵfac = function D3Component_Factory(t) {
                        return new(t || D3Component)();
                    };

                    D3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: D3Component,
                        selectors: [
                            ["ngx-d3"]
                        ],
                        decls: 31,
                        vars: 0,
                        consts: [
                            [1, "row"],
                            [1, "col-lg-6"]
                        ],
                        template: function D3Component_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pie");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ngx-d3-pie");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-header");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bar");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card-body");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ngx-d3-bar");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-card");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-card-header");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Line");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nb-card-body");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ngx-d3-line");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nb-card");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nb-card-header");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Advanced Pie");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nb-card-body");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "ngx-d3-advanced-pie");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nb-card");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nb-card-header");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Area Chart");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nb-card-body");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "ngx-d3-area-stack");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                            }
                        },
                        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _d3_pie_component__WEBPACK_IMPORTED_MODULE_2__["D3PieComponent"], _d3_bar_component__WEBPACK_IMPORTED_MODULE_3__["D3BarComponent"], _d3_line_component__WEBPACK_IMPORTED_MODULE_4__["D3LineComponent"], _d3_advanced_pie_component__WEBPACK_IMPORTED_MODULE_5__["D3AdvancedPieComponent"], _d3_area_stack_component__WEBPACK_IMPORTED_MODULE_6__["D3AreaStackComponent"]],
                        styles: [".nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 28.875rem;\n}\n.nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .pie-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .pie-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .pie-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .pie-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .pie-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .pie-label {\n  fill: #222b45;\n}\n.nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     text {\n  fill: #8f9bb3;\n}\n.nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-labels {\n  background: #f7f9fc;\n}\n.nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label {\n  color: #8f9bb3;\n}\n.nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text {\n  color: #222b45;\n}\n.nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .total-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-percent, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .total-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-percent, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .total-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-percent, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .total-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-percent, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .total-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-percent, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .total-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-percent {\n  line-height: 1.25;\n}\n.nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .legend-items, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .legend-items, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .legend-items, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .legend-items, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .legend-items, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .legend-items {\n  overflow-y: hidden;\n}\n\n.nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 28.875rem;\n}\n.nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .pie-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .pie-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .pie-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .pie-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .pie-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .pie-label {\n  fill: #ffffff;\n}\n.nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     text {\n  fill: #8f9bb3;\n}\n.nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-labels {\n  background: #192038;\n}\n.nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label {\n  color: #8f9bb3;\n}\n.nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text {\n  color: #ffffff;\n}\n.nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .total-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-percent, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .total-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-percent, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .total-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-percent, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .total-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-percent, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .total-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-percent, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .total-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-percent {\n  line-height: 1.25;\n}\n.nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .legend-items, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .legend-items, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .legend-items, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .legend-items, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .legend-items, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .legend-items {\n  overflow-y: hidden;\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 28.875rem;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .pie-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .pie-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .pie-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .pie-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .pie-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .pie-label {\n  fill: #ffffff;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     text {\n  fill: #b4b4db;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-labels {\n  background: #252547;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label {\n  color: #b4b4db;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text {\n  color: #ffffff;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .total-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-percent, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .total-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-percent, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .total-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-percent, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .total-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-percent, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .total-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-percent, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .total-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-percent {\n  line-height: 1.25;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .legend-items, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .legend-items, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .legend-items, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .legend-items, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .legend-items, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .legend-items {\n  overflow-y: hidden;\n}\n\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 28.875rem;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .pie-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .pie-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .pie-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .pie-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .pie-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .pie-label {\n  fill: #222b45;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     text {\n  fill: #8f9bb3;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-labels {\n  background: #f7f9fc;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label {\n  color: #8f9bb3;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text {\n  color: #222b45;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .total-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-percent, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .total-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-percent, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .total-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-percent, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .total-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-percent, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .total-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-percent, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .total-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-percent {\n  line-height: 1.25;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .legend-items, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .legend-items, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .legend-items, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .legend-items, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .legend-items, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .legend-items {\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvX3RoZW1pbmcuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhcnRzL2QzL2QzLmNvbXBvbmVudC5zY3NzIiwibm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9jb3JlL19taXhpbnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS9fZnVuY3Rpb25zLnNjc3MiLCJub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvX3ZhcmlhbnRzLnNjc3MiLCJub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lcy9fbWFwcGluZy5zY3NzIiwibm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9jb3JlL3RoZW1pbmcvX3JlZ2lzdGVyLnNjc3MiLCJub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvdGhlbWluZy9faW5zdGFsbC5zY3NzIiwibm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9jb3JlL3RoZW1pbmcvX2dldC12YWx1ZS5zY3NzIiwibm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy90aGVtZXMvX2RlZmF1bHQuc2NzcyIsIm5vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzL19kYXJrLnNjc3MiLCJub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lcy9fY29zbWljLnNjc3MiLCJub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lcy9fY29ycG9yYXRlLnNjc3MiLCJzcmMvYXBwL0B0aGVtZS9zdHlsZXMvdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUNJRTtBREVGOzs7RUNFRTtBQ1JGOzs7O0VEYUU7QUMySkY7Ozs7RUR0SkU7QUNnTEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0Q1REM7QUV0SUQ7Ozs7RUYySUU7QUczSUY7Ozs7RUhnSkU7QUloSkY7Ozs7RUpxSkU7QUtuSkY7Ozs7RUx3SkU7QU0xSkY7Ozs7RU4rSkU7QU8vSkY7Ozs7RVBvS0U7QVFwS0Y7Ozs7RVJ5S0U7QUV6S0Y7Ozs7RUY4S0U7QUM5S0Y7Ozs7RURtTEU7QUNYRjs7OztFRGdCRTtBQ1VGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NEMEdDO0FTNVNEOzs7O0VUaVRFO0FFalRGOzs7O0VGc1RFO0FDdFRGOzs7O0VEMlRFO0FDbkpGOzs7O0VEd0pFO0FDOUhGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NEa1BDO0FRcGJEOzs7O0VSeWJFO0FFemJGOzs7O0VGOGJFO0FDOWJGOzs7O0VEbWNFO0FDM1JGOzs7O0VEZ1NFO0FDdFFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NEMFhDO0FVNWpCRDs7OztFVmlrQkU7QUVqa0JGOzs7O0VGc2tCRTtBQ3RrQkY7Ozs7RUQya0JFO0FDbmFGOzs7O0VEd2FFO0FDOVlGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NEa2dCQztBU3BzQkQ7Ozs7RVR5c0JFO0FFenNCRjs7OztFRjhzQkU7QUM5c0JGOzs7O0VEbXRCRTtBQzNpQkY7Ozs7RURnakJFO0FDdGhCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRDBvQkM7QVE1MEJEOzs7O0VSaTFCRTtBRWoxQkY7Ozs7RUZzMUJFO0FDdDFCRjs7OztFRDIxQkU7QUNuckJGOzs7O0VEd3JCRTtBQzlwQkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0RreEJDO0FXcDlCRDs7OztFWHk5QkU7QUV6OUJGOzs7O0VGODlCRTtBQzk5QkY7Ozs7RURtK0JFO0FDM3pCRjs7OztFRGcwQkU7QUN0eUJGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NEMDVCQztBUTVsQ0Q7Ozs7RVJpbUNFO0FFam1DRjs7OztFRnNtQ0U7QUN0bUNGOzs7O0VEMm1DRTtBQ244QkY7Ozs7RUR3OEJFO0FDOTZCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRGtpQ0M7QU16cENHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tONnFDQztBQXJ2Q0g7Ozs7OztFQU1FLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJZQzJCO0Fac3ZDL0I7QUFwdkNNOzs7Ozs7RUFDRSxhUWtHa0I7QVIwcEMxQjtBQXp2Q007Ozs7OztFQUNFLGFRNEZrQjtBUnFxQzFCO0FBN3ZDUTs7Ozs7O0VBQ0UsbUJRbUZnQjtBUmtyQzFCO0FBbndDUTs7Ozs7O0VBQ0UsY1FvRmdCO0FSdXJDMUI7QUExd0NVOzs7Ozs7RUFDRSxjUW9GYztBUjhyQzFCO0FBN3dDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBR0UsaUJBQWlCO0FBK3hDekI7QUE1eENNOzs7Ozs7RUFDRSxrQkFBa0I7QUFveUMxQjtBTWx3Q0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S051eENDO0FBLzFDSDs7Ozs7O0VBTUUsY0FBYztFQUNkLFdBQVc7RUFDWCxpQllnRTJCO0FaaXlDL0I7QUE5MUNNOzs7Ozs7RUFDRSxhUTJGa0I7QVIyd0MxQjtBQW4yQ007Ozs7OztFQUNFLGFRNEZrQjtBUit3QzFCO0FBdjJDUTs7Ozs7O0VBQ0UsbUJRMEZnQjtBUnF4QzFCO0FBNzJDUTs7Ozs7O0VBQ0UsY1FvRmdCO0FSaXlDMUI7QUFwM0NVOzs7Ozs7RUFDRSxjUTZFYztBUit5QzFCO0FBdjNDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBR0UsaUJBQWlCO0FBeTRDekI7QUF0NENNOzs7Ozs7RUFDRSxrQkFBa0I7QUE4NEMxQjtBTTUyQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S05pNENDO0FBejhDSDs7Ozs7O0VBTUUsY0FBYztFQUNkLFdBQVc7RUFDWCxpQllzQjJCO0FacTdDL0I7QUF4OENNOzs7Ozs7RUFDRSxhVWNrQjtBVms4QzFCO0FBNzhDTTs7Ozs7O0VBQ0UsYVVla0I7QVZzOEMxQjtBQWo5Q1E7Ozs7OztFQUNFLG1CVWFnQjtBVjQ4QzFCO0FBdjlDUTs7Ozs7O0VBQ0UsY1VPZ0I7QVZ3OUMxQjtBQTk5Q1U7Ozs7OztFQUNFLGNVQWM7QVZzK0MxQjtBQWorQ007Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUdFLGlCQUFpQjtBQW0vQ3pCO0FBaC9DTTs7Ozs7O0VBQ0Usa0JBQWtCO0FBdy9DMUI7QU10OUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tOMitDQztBQW5qREg7Ozs7OztFQU1FLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJZMkMyQjtBWjBnRC9CO0FBbGpETTs7Ozs7O0VBQ0UsYVFrR2tCO0FSdzlDMUI7QUF2akRNOzs7Ozs7RUFDRSxhUTRGa0I7QVJtK0MxQjtBQTNqRFE7Ozs7OztFQUNFLG1CUW1GZ0I7QVJnL0MxQjtBQWprRFE7Ozs7OztFQUNFLGNRb0ZnQjtBUnEvQzFCO0FBeGtEVTs7Ozs7O0VBQ0UsY1FvRmM7QVI0L0MxQjtBQTNrRE07Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUdFLGlCQUFpQjtBQTZsRHpCO0FBMWxETTs7Ozs7O0VBQ0Usa0JBQWtCO0FBa21EMUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGFydHMvZDMvZDMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbi8qXG4gIERlY2xhcmUgdmFyaWFibGVzIGJlZm9yZSBtYWtpbmcgdGhlbSBnbG9iYWwuXG4gIGRhcnQtc2FzcyBkb2Vzbid0IGFsbG93IHRvIGRlY2xhcmUgdmFyaWFibGUgd2l0aCAhZ2xvYmFsLlxuICovXG4kbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllczogZmFsc2UgIWRlZmF1bHQ7XG4kbmItZW5hYmxlZC10aGVtZXM6ICgpO1xuJG5iLXRoZW1lczogKCk7XG4kbmItdGhlbWUtcHJvY2Vzcy1tb2RlOiBudWxsO1xuJG5iLXRoZW1lLW5hbWU6ICdkZWZhdWx0JztcbiRuYi10aGVtZTogKCk7XG4kbmItcHJvY2Vzc2VkLXRoZW1lOiAoKTtcbiRuYi10aGVtZS1leHBvcnQtbW9kZTogZmFsc2UgIWRlZmF1bHQ7XG4kbmItdGhlbWVzLWV4cG9ydDogKCk7XG5cbi8vIHB1YmxpYyB2YXJpYWJsZXNcbiRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzOiBmYWxzZSAhZ2xvYmFsICFkZWZhdWx0O1xuJG5iLWVuYWJsZWQtdGhlbWVzOiAoKSAhZ2xvYmFsO1xuJG5iLXRoZW1lczogKCkgIWdsb2JhbDtcblxuLy8gcHJpdmF0ZSB2YXJpYWJsZXNcbiRuYi10aGVtZS1wcm9jZXNzLW1vZGU6ICdsYXp5LXByb2Nlc3MnICFnbG9iYWw7XG4kbmItdGhlbWUtbmFtZTogbnVsbCAhZ2xvYmFsO1xuJG5iLXRoZW1lOiAoKSAhZ2xvYmFsO1xuJG5iLXByb2Nlc3NlZC10aGVtZTogKCkgIWdsb2JhbDtcbiRuYi10aGVtZS1leHBvcnQtbW9kZTogZmFsc2UgIWdsb2JhbCAhZGVmYXVsdDtcbiRuYi10aGVtZXMtZXhwb3J0OiAoKSAhZ2xvYmFsO1xuXG5AaW1wb3J0ICdjb3JlL21peGlucyc7XG5AaW1wb3J0ICdjb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICdjb3JlL3ZhcmlhbnRzJztcbkBpbXBvcnQgJ2NvcmUvdGhlbWluZy9yZWdpc3Rlcic7XG5AaW1wb3J0ICdjb3JlL3RoZW1pbmcvaW5zdGFsbCc7XG5AaW1wb3J0ICdjb3JlL3RoZW1pbmcvZ2V0LXZhbHVlJztcbiIsIkBpbXBvcnQgJy4uLy4uLy4uL0B0aGVtZS9zdHlsZXMvdGhlbWVzJztcblxuQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG4gIG5neC1kMy1iYXIsXG4gIG5neC1kMy1waWUsXG4gIG5neC1kMy1hZHZhbmNlZC1waWUsXG4gIG5neC1kMy1hcmVhLXN0YWNrLFxuICBuZ3gtZDMtbGluZSxcbiAgbmd4LWQzLXBvbGFyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IG5iLXRoZW1lKGNhcmQtaGVpZ2h0LW1lZGl1bSk7XG5cbiAgICA6Om5nLWRlZXAge1xuICAgICAgLnBpZS1sYWJlbCB7XG4gICAgICAgIGZpbGw6IG5iLXRoZW1lKHRleHQtYmFzaWMtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICB0ZXh0IHtcbiAgICAgICAgZmlsbDogbmItdGhlbWUodGV4dC1oaW50LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLmNoYXJ0LWxlZ2VuZCB7XG4gICAgICAgIC5sZWdlbmQtbGFiZWxzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBuYi10aGVtZShiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIpO1xuICAgICAgICB9XG4gICAgICAgIC5sZWdlbmQtbGFiZWwge1xuICAgICAgICAgIGNvbG9yOiBuYi10aGVtZSh0ZXh0LWhpbnQtY29sb3IpO1xuICAgICAgICAgIC5hY3RpdmUgLmxlZ2VuZC1sYWJlbC10ZXh0IHtcbiAgICAgICAgICAgIGNvbG9yOiBuYi10aGVtZSh0ZXh0LWJhc2ljLWNvbG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRvdGFsLXZhbHVlLFxuICAgICAgLml0ZW0tdmFsdWUsXG4gICAgICAuaXRlbS1wZXJjZW50IHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgICB9XG5cbiAgICAgIC5sZWdlbmQtaXRlbXMge1xuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1zY3JvbGxiYXJzKCRmZywgJGJnLCAkc2l6ZSwgJGJvcmRlci1yYWRpdXM6ICRzaXplIC8gMikge1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJGZnO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gIH1cblxuICAvLyBUT0RPOiByZW1vdmVcbiAgLy8gRm9yIEludGVybmV0IEV4cGxvcmVyXG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkZmc7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJGJnO1xufVxuXG5AbWl4aW4gbmItaGVhZGluZ3MoJGZyb206IDEsICR0bzogNikge1xuICBAZm9yICRpIGZyb20gJGZyb20gdGhyb3VnaCAkdG8ge1xuICAgIGgjeyRpfSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1vdXRsaW5lKCRvdXRsaW5lLXdpZHRoLCAkb3V0bGluZS1jb2xvciwgJGluc2V0LXNoYWRvdy1sZW5ndGg6IDApIHtcbiAgJG91dHNldC1zaGFkb3c6IDAgMCAwICRvdXRsaW5lLXdpZHRoICRvdXRsaW5lLWNvbG9yO1xuICBib3gtc2hhZG93OiAkb3V0c2V0LXNoYWRvdztcblxuICBAaWYgKCRpbnNldC1zaGFkb3ctbGVuZ3RoICE9IDApIHtcbiAgICAmOm5vdCg6aG92ZXIpOm5vdCg6YWN0aXZlKSB7XG4gICAgICAkaW5zZXQtc2hhZG93OiBpbnNldCAkaW5zZXQtc2hhZG93LWxlbmd0aCAkb3V0bGluZS1jb2xvcjtcbiAgICAgIGJveC1zaGFkb3c6ICRvdXRzZXQtc2hhZG93LCAkaW5zZXQtc2hhZG93O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMtYWN0aXZlIHtcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUsXG4gICY6aG92ZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXItaG9yaXpvbnRhbC1hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIGxlZnQ6IDUwJTtcbn1cblxuQG1peGluIGluc3RhbGwtdGh1bWIoKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci10aHVtYidcbiAgICAnOjotbW96LXJhbmdlLXRodW1iJ1xuICAgICc6Oi1tcy10aHVtYidcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtdHJhY2soKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjaydcbiAgICAnOjotbW96LXJhbmdlLXRyYWNrJ1xuICAgICc6Oi1tcy10cmFjaydcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eTogMSkge1xuICAkcGxhY2Vob2xkZXItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcidcbiAgICAnOjotbW96LXBsYWNlaG9sZGVyJ1xuICAgICc6LW1vei1wbGFjZWhvbGRlcidcbiAgICAnOi1tcy1pbnB1dC1wbGFjZWhvbGRlcidcbiAgKTtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eSk7XG4gIH1cblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHBsYWNlaG9sZGVyLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KTtcbiAgICB9XG5cbiAgICAmOmZvY3VzI3skc2VsZWN0b3J9IHtcbiAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyLWZvY3VzKCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KSB7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyLWZvY3VzKCkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuQG1peGluIG5iLWNvbXBvbmVudC1hbmltYXRpb24oJHByb3BlcnRpZXMuLi4pIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6ICRwcm9wZXJ0aWVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbn1cblxuQG1peGluIGFuaW1hdGlvbigkYW5pbWF0ZS4uLikge1xuICAkbWF4OiBsZW5ndGgoJGFuaW1hdGUpO1xuICAkYW5pbWF0aW9uczogJyc7XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4IHtcbiAgICAkYW5pbWF0aW9uczogI3skYW5pbWF0aW9ucyArIG50aCgkYW5pbWF0ZSwgJGkpfTtcblxuICAgIEBpZiAkaSA8ICRtYXgge1xuICAgICAgJGFuaW1hdGlvbnM6ICN7JGFuaW1hdGlvbnMgKyAnLCAnfTtcbiAgICB9XG4gIH1cbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb25zO1xuICAtbW96LWFuaW1hdGlvbjogICAgJGFuaW1hdGlvbnM7XG4gIC1vLWFuaW1hdGlvbjogICAgICAkYW5pbWF0aW9ucztcbiAgYW5pbWF0aW9uOiAgICAgICAgICRhbmltYXRpb25zO1xufVxuXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb25OYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG5AbWl4aW4gYnRuLXB1bHNlKCRuYW1lLCAkY29sb3IpIHtcbiAgJi5idG4tcHVsc2Uge1xuICAgIEBpbmNsdWRlIGFuaW1hdGlvbihidG4tI3skbmFtZX0tcHVsc2UgMS41cyBpbmZpbml0ZSk7XG4gIH1cblxuICBAaW5jbHVkZSBrZXlmcmFtZXMoYnRuLSN7JG5hbWV9LXB1bHNlKSB7XG4gICAgMCUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG9wYWNpdHk6IG5iLXRoZW1lKGJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgJGNvbG9yO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBvcGFjaXR5OiBuYi10aGVtZShidG4tZGlzYWJsZWQtb3BhY2l0eSk7XG4gICAgfVxuICB9XG59XG5cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cblxuQG1peGluIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJHNlbGVjdG9yLCAkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gICN7JHNlbGVjdG9yfSAmIHtcbiAgICBAaWYgJHByb3AgIT0gbnVsbCB7XG4gICAgICAjeyRwcm9wfTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1sdHIoJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICBAaW5jbHVkZSBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCdbZGlyPWx0cl0nLCAkcHJvcCwgJHZhbHVlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLXJ0bCgkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gIEBpbmNsdWRlIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJ1tkaXI9cnRsXScsICRwcm9wLCAkdmFsdWUpIHtcbiAgICBAY29udGVudDtcbiAgfTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuLy8vIFNsaWdodGx5IGxpZ2h0ZW4gYSBjb2xvclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIC0gY29sb3IgdG8gdGludFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3Jcbi8vLyBAcmV0dXJuIHtDb2xvcn1cbkBmdW5jdGlvbiB0aW50KCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgod2hpdGUsICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG4vLy8gU2xpZ2h0bHkgZGFya2VuIGEgY29sb3Jcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciAtIGNvbG9yIHRvIHNoYWRlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRwZXJjZW50YWdlIC0gcGVyY2VudGFnZSBvZiBgJGNvbG9yYCBpbiByZXR1cm5lZCBjb2xvclxuLy8vIEByZXR1cm4ge0NvbG9yfVxuQGZ1bmN0aW9uIHNoYWRlKCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgoYmxhY2ssICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG5AZnVuY3Rpb24gbWFwLXNldCgkbWFwLCAka2V5LCAkdmFsdWU6IG51bGwpIHtcbiAgJG5ldzogKCRrZXk6ICR2YWx1ZSk7XG4gIEByZXR1cm4gbWFwLW1lcmdlKCRtYXAsICRuZXcpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AZnVuY3Rpb24gbmItZ2V0LXN0YXR1c2VzKCkge1xuICBAcmV0dXJuICdiYXNpYycsICdwcmltYXJ5JywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInLCAnaW5mbycsICdjb250cm9sJztcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC1zaXplcygpIHtcbiAgQHJldHVybiAndGlueScsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLCAnZ2lhbnQnO1xufVxuXG5AZnVuY3Rpb24gbmItZ2V0LXNoYXBlcygpIHtcbiAgQHJldHVybiAncmVjdGFuZ2xlJywgJ3NlbWktcm91bmQnLCAncm91bmQnO1xufVxuXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbiRldmEtbWFwcGluZzogKFxuXG4gIC8qIENvbXBvbmVudHMgbWFwcGluZ3MgLSBtYXBzIHRoZW1lIHZhcmlhYmxlcyBvbnRvIGNvbXBvbmVudCB2YXJpYWJsZXMgKi9cblxuICBsaW5rLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgbGluay10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSxcbiAgbGluay10ZXh0LWZvY3VzLWNvbG9yOiB0ZXh0LXByaW1hcnktZm9jdXMtY29sb3IsXG4gIGxpbmstdGV4dC1ob3Zlci1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuXG4gIGNhcmQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjYXJkLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhcmQtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGNhcmQtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgY2FyZC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgY2FyZC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgY2FyZC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgY2FyZC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjYXJkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGNhcmQtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY2FyZC1wYWRkaW5nOiAxcmVtIDEuNXJlbSxcbiAgY2FyZC1zaGFkb3c6IG5vbmUsXG4gIGNhcmQtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgY2FyZC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBjYXJkLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG5cbiAgY2FyZC1oZWFkZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FyZC1oZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgY2FyZC1oZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjYXJkLWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjYXJkLWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIGNhcmQtaGVhZGVyLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgY2FyZC1oZWFkZXItYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FyZC1oZWFkZXItcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY2FyZC1oZWFkZXItaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhcmQtaGVhZGVyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FyZC1oZWFkZXItd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhcmQtaGVhZGVyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcblxuICBjYXJkLWhlaWdodC10aW55OiAxMy41cmVtLFxuICBjYXJkLWhlaWdodC1zbWFsbDogMjEuMTg3NXJlbSxcbiAgY2FyZC1oZWlnaHQtbWVkaXVtOiAyOC44NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LWxhcmdlOiAzNi41NjI1cmVtLFxuICBjYXJkLWhlaWdodC1naWFudDogNDQuMjVyZW0sXG4gIGNhcmQtbWFyZ2luLWJvdHRvbTogMS44NzVyZW0sXG5cbiAgY2FyZC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgY2FyZC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIGNhcmQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG5cbiAgaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgaGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBoZWFkZXItaGVpZ2h0OiA0Ljc1cmVtLFxuICBoZWFkZXItcGFkZGluZzogMS4yNXJlbSxcbiAgaGVhZGVyLXNoYWRvdzogc2hhZG93LFxuXG4gIGZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGZvb3Rlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBmb290ZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGZvb3Rlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBmb290ZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGZvb3Rlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgZm9vdGVyLXRleHQtaGlnaGxpZ2h0LWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBmb290ZXItaGVpZ2h0OiA0LjcyNXJlbSxcbiAgZm9vdGVyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIGZvb3Rlci1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBmb290ZXItZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgZm9vdGVyLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIGZvb3Rlci1zaGFkb3c6IHNoYWRvdyxcblxuICBsYXlvdXQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBsYXlvdXQtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgbGF5b3V0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBsYXlvdXQtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgbGF5b3V0LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBsYXlvdXQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGxheW91dC1taW4taGVpZ2h0OiAxMDB2aCxcbiAgbGF5b3V0LWNvbnRlbnQtd2lkdGg6IDkwMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtbWluLXdpZHRoOiAzMDBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLW1heC13aWR0aDogMTkyMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBsYXlvdXQtd2luZG93LW1vZGUtcGFkZGluZy10b3A6IDQuNzVyZW0sXG4gIGxheW91dC13aW5kb3ctc2hhZG93OiBzaGFkb3csXG4gIGxheW91dC1wYWRkaW5nOiAyLjI1cmVtIDIuMjVyZW0gMC43NXJlbSxcbiAgbGF5b3V0LW1lZGl1bS1wYWRkaW5nOiAxLjVyZW0gMS41cmVtIDAuNXJlbSxcbiAgbGF5b3V0LXNtYWxsLXBhZGRpbmc6IDFyZW0gMXJlbSAwLFxuICBsYXlvdXQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBsYXlvdXQtc2Nyb2xsYmFyLWNvbG9yOiBzY3JvbGxiYXItY29sb3IsXG4gIGxheW91dC1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcblxuICBzaWRlYmFyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2lkZWJhci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzaWRlYmFyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzaWRlYmFyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNpZGViYXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNpZGViYXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHNpZGViYXItaGVpZ2h0OiAxMDB2aCxcbiAgc2lkZWJhci13aWR0aDogMTZyZW0sXG4gIHNpZGViYXItd2lkdGgtY29tcGFjdDogMy41cmVtLFxuICBzaWRlYmFyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIHNpZGViYXItaGVhZGVyLWhlaWdodDogMy41cmVtLFxuICBzaWRlYmFyLWZvb3Rlci1oZWlnaHQ6IDMuNXJlbSxcbiAgc2lkZWJhci1zaGFkb3c6IHNoYWRvdyxcbiAgc2lkZWJhci1tZW51LWl0ZW0taGlnaGxpZ2h0LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNpZGViYXItc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzaWRlYmFyLXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBzaWRlYmFyLXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuXG4gIG1lbnUtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIG1lbnUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgbWVudS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIG1lbnUtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIG1lbnUtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBtZW51LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcblxuICBtZW51LWdyb3VwLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBtZW51LWl0ZW0tYm9yZGVyLXJhZGl1czogMCxcbiAgbWVudS1pdGVtLXBhZGRpbmc6IDAuNzVyZW0gMXJlbSxcblxuICBtZW51LWl0ZW0taG92ZXItYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LWl0ZW0taG92ZXItY3Vyc29yOiBwb2ludGVyLFxuICBtZW51LWl0ZW0taG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuICBtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcjogbWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3IsXG5cbiAgbWVudS1pdGVtLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBtZW51LWJhY2tncm91bmQtY29sb3IsXG4gIG1lbnUtaXRlbS1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBtZW51LWl0ZW0taWNvbi1hY3RpdmUtY29sb3I6IG1lbnUtaXRlbS1hY3RpdmUtdGV4dC1jb2xvcixcblxuICBtZW51LWl0ZW0taWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBtZW51LWl0ZW0taWNvbi1tYXJnaW46IDAgMC41cmVtIDAgMCxcbiAgbWVudS1pdGVtLWljb24td2lkdGg6IDEuMjVyZW0sXG5cbiAgbWVudS1pdGVtLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIG1lbnUtaXRlbS1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBtZW51LWl0ZW0tZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICBtZW51LXN1Ym1lbnUtYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgbWVudS1zdWJtZW51LW1hcmdpbjogMCxcbiAgbWVudS1zdWJtZW51LXBhZGRpbmc6IDAgMS4yNXJlbSxcblxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItY29sb3I6IG1lbnUtc3VibWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItd2lkdGg6IDAsXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IDAsXG4gIG1lbnUtc3VibWVudS1pdGVtLXBhZGRpbmc6IG1lbnUtaXRlbS1wYWRkaW5nLFxuXG4gIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0taG92ZXItYm9yZGVyLWNvbG9yOiBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3I6IG1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWhvdmVyLWNvbG9yOiBtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcixcblxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS10ZXh0LWNvbG9yOiBtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWljb24tYWN0aXZlLWNvbG9yOiBtZW51LWl0ZW0taWNvbi1hY3RpdmUtY29sb3IsXG5cbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci10ZXh0LWNvbG9yOiBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWFjdGl2ZS1ob3Zlci1jb2xvcjogbWVudS1zdWJtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcixcblxuICB0YWJzZXQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC1ib3JkZXItcmFkaXVzOiAwLFxuICB0YWJzZXQtc2hhZG93OiBub25lLFxuXG4gIHRhYnNldC10YWItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItcGFkZGluZzogMXJlbSAycmVtLFxuICB0YWJzZXQtdGFiLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgdGFic2V0LXRhYi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgdGFic2V0LXRhYi10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgdGFic2V0LXRhYi10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgdGFic2V0LXRhYi10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIHRhYnNldC10YWItdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgdGFic2V0LXRhYi11bmRlcmxpbmUtd2lkdGg6IDAuMjVyZW0sXG4gIHRhYnNldC10YWItdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LXRhYi1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgdGFic2V0LXRhYi1hY3RpdmUtdW5kZXJsaW5lLWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIHRhYnNldC10YWItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICB0YWJzZXQtdGFiLWZvY3VzLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICB0YWJzZXQtdGFiLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgdGFic2V0LXRhYi1ob3Zlci11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgdGFic2V0LXRhYi1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LXRhYi1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICB0YWJzZXQtdGFiLWRpc2FibGVkLXVuZGVybGluZS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgdGFic2V0LWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIHRhYnNldC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICB0YWJzZXQtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICB0YWJzZXQtY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LWNvbnRlbnQtcGFkZGluZzogMXJlbSAycmVtLFxuICB0YWJzZXQtY29udGVudC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0YWJzZXQtY29udGVudC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdGFic2V0LWNvbnRlbnQtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdGFic2V0LWNvbnRlbnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHRhYnNldC1jb250ZW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuXG4gIHRhYnNldC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgdGFic2V0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgdGFic2V0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuICB0YWJzZXQtdGFiLXRleHQtaGlkZS1icmVha3BvaW50OiAzNnJlbSxcblxuICByb3V0ZS10YWJzZXQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC1ib3JkZXItcmFkaXVzOiAwLFxuICByb3V0ZS10YWJzZXQtc2hhZG93OiBub25lLFxuXG4gIHJvdXRlLXRhYnNldC10YWItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC10YWItcGFkZGluZzogMXJlbSAycmVtLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIHJvdXRlLXRhYnNldC10YWItdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgcm91dGUtdGFic2V0LXRhYi11bmRlcmxpbmUtd2lkdGg6IDAuMjVyZW0sXG4gIHJvdXRlLXRhYnNldC10YWItdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICByb3V0ZS10YWJzZXQtdGFiLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFic2V0LXRhYi1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICByb3V0ZS10YWJzZXQtdGFiLWFjdGl2ZS11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcblxuICByb3V0ZS10YWJzZXQtdGFiLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi1mb2N1cy11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcblxuICByb3V0ZS10YWJzZXQtdGFiLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi1ob3Zlci11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcblxuICByb3V0ZS10YWJzZXQtdGFiLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJvdXRlLXRhYnNldC10YWItZGlzYWJsZWQtdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICByb3V0ZS10YWJzZXQtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgcm91dGUtdGFic2V0LWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIHJvdXRlLXRhYnNldC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuXG4gIHJvdXRlLXRhYnNldC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgcm91dGUtdGFic2V0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgcm91dGUtdGFic2V0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtaGlkZS1icmVha3BvaW50OiAzNnJlbSxcblxuICB1c2VyLXBpY3R1cmUtYm94LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB1c2VyLXBpY3R1cmUtYm94LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIHVzZXItcGljdHVyZS1ib3gtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHVzZXItaW5pdGlhbHMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdXNlci1pbml0aWFscy10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdXNlci1pbml0aWFscy10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgdXNlci1uYW1lLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHVzZXItbmFtZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdXNlci1uYW1lLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICB1c2VyLXRpdGxlLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHVzZXItdGl0bGUtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtMi1mb250LWZhbWlseSxcbiAgdXNlci10aXRsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtd2VpZ2h0LFxuXG4gIHVzZXItcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IDAuNXJlbSxcbiAgdXNlci1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIHVzZXItcm91bmQtYm9yZGVyLXJhZGl1czogNTAlLFxuXG4gIHVzZXItdGlueS1oZWlnaHQ6IDEuMjVyZW0sXG4gIHVzZXItdGlueS13aWR0aDogMS4yNXJlbSxcbiAgdXNlci10aW55LWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXRpbnktaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXRpbnktbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSxcbiAgdXNlci10aW55LW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXRpbnktdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItdGlueS10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG5cbiAgdXNlci1zbWFsbC1oZWlnaHQ6IDEuNXJlbSxcbiAgdXNlci1zbWFsbC13aWR0aDogMS41cmVtLFxuICB1c2VyLXNtYWxsLWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXNtYWxsLWluaXRpYWxzLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcbiAgdXNlci1zbWFsbC1uYW1lLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXNtYWxsLW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXNtYWxsLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXNtYWxsLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcblxuICB1c2VyLW1lZGl1bS1oZWlnaHQ6IDIuNXJlbSxcbiAgdXNlci1tZWRpdW0td2lkdGg6IDIuNXJlbSxcbiAgdXNlci1tZWRpdW0taW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1tZWRpdW0taW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItbWVkaXVtLW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1tZWRpdW0tbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1tZWRpdW0tdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItbWVkaXVtLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcblxuICB1c2VyLWxhcmdlLWhlaWdodDogMy4yNXJlbSxcbiAgdXNlci1sYXJnZS13aWR0aDogMy4yNXJlbSxcbiAgdXNlci1sYXJnZS1pbml0aWFscy10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWxhcmdlLWluaXRpYWxzLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICB1c2VyLWxhcmdlLW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1sYXJnZS1uYW1lLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICB1c2VyLWxhcmdlLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtc2l6ZSxcbiAgdXNlci1sYXJnZS10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWxpbmUtaGVpZ2h0LFxuXG4gIHVzZXItZ2lhbnQtaGVpZ2h0OiA0cmVtLFxuICB1c2VyLWdpYW50LXdpZHRoOiA0cmVtLFxuICB1c2VyLWdpYW50LWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHVzZXItZ2lhbnQtaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItZ2lhbnQtbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWdpYW50LW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItZ2lhbnQtdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1naWFudC10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBwb3BvdmVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHBvcG92ZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIHBvcG92ZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgcG9wb3Zlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgcG9wb3Zlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgcG9wb3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHBvcG92ZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHBvcG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcG9wb3Zlci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBwb3BvdmVyLXNoYWRvdzogc2hhZG93LFxuICBwb3BvdmVyLWFycm93LXNpemU6IDAuNjg3NXJlbSxcbiAgcG9wb3Zlci1wYWRkaW5nOiAwLjc1cmVtIDFyZW0sXG5cbiAgY29udGV4dC1tZW51LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgY29udGV4dC1tZW51LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXdpZHRoOiAwLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY29udGV4dC1tZW51LXRleHQtYWxpZ246IGNlbnRlcixcbiAgY29udGV4dC1tZW51LW1pbi13aWR0aDogMTByZW0sXG4gIGNvbnRleHQtbWVudS1tYXgtd2lkdGg6IDE1cmVtLFxuICBjb250ZXh0LW1lbnUtc2hhZG93OiBzaGFkb3csXG5cbiAgYWN0aW9ucy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYWN0aW9ucy1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBhY3Rpb25zLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGFjdGlvbnMtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgYWN0aW9ucy1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGFjdGlvbnMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWN0aW9ucy10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgYWN0aW9ucy10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgYWN0aW9ucy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG5cbiAgYWN0aW9ucy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBhY3Rpb25zLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYWN0aW9ucy10aW55LWhlaWdodDogMXJlbSxcbiAgYWN0aW9ucy10aW55LWljb24taGVpZ2h0OiBhY3Rpb25zLXRpbnktaGVpZ2h0LFxuICBhY3Rpb25zLXRpbnktcGFkZGluZzogMCAxLjI1cmVtLFxuICBhY3Rpb25zLXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLFxuICBhY3Rpb25zLXNtYWxsLWhlaWdodDogMS41cmVtLFxuICBhY3Rpb25zLXNtYWxsLWljb24taGVpZ2h0OiBhY3Rpb25zLXNtYWxsLWhlaWdodCxcbiAgYWN0aW9ucy1zbWFsbC1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSxcbiAgYWN0aW9ucy1tZWRpdW0taGVpZ2h0OiAyLjI1cmVtLFxuICBhY3Rpb25zLW1lZGl1bS1pY29uLWhlaWdodDogYWN0aW9ucy1tZWRpdW0taGVpZ2h0LFxuICBhY3Rpb25zLW1lZGl1bS1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBhY3Rpb25zLWxhcmdlLWhlaWdodDogMy41cmVtLFxuICBhY3Rpb25zLWxhcmdlLWljb24taGVpZ2h0OiBhY3Rpb25zLWxhcmdlLWhlaWdodCxcbiAgYWN0aW9ucy1sYXJnZS1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLWxhcmdlLWZvbnQtc2l6ZSxcbiAgYWN0aW9ucy1naWFudC1oZWlnaHQ6IDRyZW0sXG4gIGFjdGlvbnMtZ2lhbnQtaWNvbi1oZWlnaHQ6IGFjdGlvbnMtZ2lhbnQtaGVpZ2h0LFxuICBhY3Rpb25zLWdpYW50LXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgYWN0aW9ucy1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplLFxuXG4gIHNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlYXJjaC1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBzZWFyY2gtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgc2VhcmNoLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIHNlYXJjaC1leHRyYS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlYXJjaC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWFyY2gtdGV4dC1mb250LWZhbWlseTogdGV4dC1oZWFkaW5nLTEtZm9udC1mYW1pbHksXG4gIHNlYXJjaC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTEtZm9udC1zaXplLFxuICBzZWFyY2gtdGV4dC1mb250LXdlaWdodDogdGV4dC1oZWFkaW5nLTEtZm9udC13ZWlnaHQsXG4gIHNlYXJjaC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWhlYWRpbmctMS1saW5lLWhlaWdodCxcbiAgc2VhcmNoLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VhcmNoLWluZm8tdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWFyY2gtaW5mby10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBzZWFyY2gtaW5mby10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHNlYXJjaC1pbmZvLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHNlYXJjaC1pbmZvLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzbWFydC10YWJsZS1oZWFkZXItbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzbWFydC10YWJsZS1oZWFkZXItZmc6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1iZzogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuXG4gIHNtYXJ0LXRhYmxlLWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc21hcnQtdGFibGUtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNtYXJ0LXRhYmxlLWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc21hcnQtdGFibGUtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzbWFydC10YWJsZS1mZzogdGV4dC1iYXNpYy1jb2xvcixcbiAgc21hcnQtdGFibGUtYmc6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcblxuICBzbWFydC10YWJsZS1iZy1ldmVuOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNtYXJ0LXRhYmxlLWZnLXNlY29uZGFyeTogdGV4dC1iYXNpYy1jb2xvcixcbiAgc21hcnQtdGFibGUtYmctYWN0aXZlOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHNtYXJ0LXRhYmxlLXBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW0sXG4gIHNtYXJ0LXRhYmxlLWZpbHRlci1wYWRkaW5nOiAwLjM3NXJlbSAwLjVyZW0sXG4gIHNtYXJ0LXRhYmxlLXNlcGFyYXRvcjogZGl2aWRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcblxuICBzbWFydC10YWJsZS1hY3Rpb24tYWRkLWVkaXQtaG92ZXItdGV4dC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzbWFydC10YWJsZS1hY3Rpb24tY2FuY2VsLWRlbGV0ZS1ob3Zlci10ZXh0LWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcblxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWJvcmRlci1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWJvcmRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi10ZXh0LWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1mb2N1cy1ib3JkZXItY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tYWN0aXZlLWJvcmRlci1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3IsXG5cbiAgc21hcnQtdGFibGUtcGFnaW5nLWZvbnQtZmFtaWx5OiBidXR0b24tdGV4dC1mb250LWZhbWlseSxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWZvbnQtc2l6ZTogYnV0dG9uLW1lZGl1bS10ZXh0LWZvbnQtc2l6ZSxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWxpbmUtaGVpZ2h0OiBidXR0b24tbWVkaXVtLXRleHQtbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1mZy1hY3RpdmU6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJnLWFjdGl2ZTogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXI6IHRyYW5zcGFyZW50LFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXItYm9yZGVyLWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWhvdmVyLXRleHQtY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItdGV4dC1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLXBhZ2UtdGV4dC1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS10ZXh0LWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctcGFnZS1mb2N1cy1ib3JkZXItY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctcGFnZS1mb2N1cy10ZXh0LWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLXRleHQtY29sb3IsXG5cbiAgdG9hc3RyLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHRvYXN0ci1ib3JkZXItd2lkdGg6IDFweCxcbiAgdG9hc3RyLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHRvYXN0ci1wYWRkaW5nOiAxcmVtLFxuICB0b2FzdHItc2hhZG93OiBzaGFkb3csXG5cbiAgdG9hc3RyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLTItZm9udC1mYW1pbHksXG4gIHRvYXN0ci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtMi1mb250LXNpemUsXG4gIHRvYXN0ci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtd2VpZ2h0LFxuICB0b2FzdHItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtMi1saW5lLWhlaWdodCxcbiAgdG9hc3RyLXRpdGxlLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHRvYXN0ci10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHRvYXN0ci10aXRsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICB0b2FzdHItdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICB0b2FzdHItYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2FzdHItYmFzaWMtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgdG9hc3RyLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvYXN0ci1pY29uLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24tYmFzaWMtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuXG4gIHRvYXN0ci1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9hc3RyLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvYXN0ci1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuXG4gIHRvYXN0ci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9hc3RyLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvYXN0ci1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24tc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuXG4gIHRvYXN0ci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9hc3RyLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRvYXN0ci1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24taW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuXG4gIHRvYXN0ci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9hc3RyLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvYXN0ci13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24td2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuXG4gIHRvYXN0ci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvYXN0ci1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9hc3RyLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvYXN0ci1pY29uLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuXG4gIHRvYXN0ci1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdG9hc3RyLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHRvYXN0ci1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgdG9hc3RyLWljb24tY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHRvYXN0ci1pY29uLWNvbnRyb2wtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuXG4gIGJ1dHRvbi1jdXJzb3I6IHBvaW50ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICBidXR0b24tb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgYnV0dG9uLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBidXR0b24tdGV4dC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGJ1dHRvbi1kaXNhYmxlZC1jdXJzb3I6IGRlZmF1bHQsXG5cbiAgYnV0dG9uLXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLFxuICBidXR0b24tdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi10aW55LWxpbmUtaGVpZ2h0LFxuICBidXR0b24tdGlueS1pY29uLXNpemU6IDAuNzVyZW0sXG4gIGJ1dHRvbi10aW55LWljb24tdmVydGljYWwtbWFyZ2luOiAtMC4xMjVyZW0sXG4gIGJ1dHRvbi10aW55LWljb24tb2Zmc2V0OiAwLjM3NXJlbSxcblxuICBidXR0b24tc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSxcbiAgYnV0dG9uLXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLXNtYWxsLWxpbmUtaGVpZ2h0LFxuICBidXR0b24tc21hbGwtaWNvbi1zaXplOiAxcmVtLFxuICBidXR0b24tc21hbGwtaWNvbi12ZXJ0aWNhbC1tYXJnaW46IC0wLjEyNXJlbSxcbiAgYnV0dG9uLXNtYWxsLWljb24tb2Zmc2V0OiAwLjM3NXJlbSxcblxuICBidXR0b24tbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBidXR0b24tbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcbiAgYnV0dG9uLW1lZGl1bS1pY29uLXNpemU6IDEuMjVyZW0sXG4gIGJ1dHRvbi1tZWRpdW0taWNvbi12ZXJ0aWNhbC1tYXJnaW46IC0wLjEyNXJlbSxcbiAgYnV0dG9uLW1lZGl1bS1pY29uLW9mZnNldDogMC41cmVtLFxuXG4gIGJ1dHRvbi1sYXJnZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbGFyZ2UtZm9udC1zaXplLFxuICBidXR0b24tbGFyZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbGFyZ2UtbGluZS1oZWlnaHQsXG4gIGJ1dHRvbi1sYXJnZS1pY29uLXNpemU6IDEuNXJlbSxcbiAgYnV0dG9uLWxhcmdlLWljb24tdmVydGljYWwtbWFyZ2luOiAtMC4xMjVyZW0sXG4gIGJ1dHRvbi1sYXJnZS1pY29uLW9mZnNldDogMC43NXJlbSxcblxuICBidXR0b24tZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLWdpYW50LWZvbnQtc2l6ZSxcbiAgYnV0dG9uLWdpYW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLWdpYW50LWxpbmUtaGVpZ2h0LFxuICBidXR0b24tZ2lhbnQtaWNvbi1zaXplOiAxLjVyZW0sXG4gIGJ1dHRvbi1naWFudC1pY29uLXZlcnRpY2FsLW1hcmdpbjogLTAuMTI1cmVtLFxuICBidXR0b24tZ2lhbnQtaWNvbi1vZmZzZXQ6IDAuNzVyZW0sXG5cbiAgYnV0dG9uLXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBidXR0b24tc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBidXR0b24tcm91bmQtYm9yZGVyLXJhZGl1czogMS41cmVtLFxuXG4gIGJ1dHRvbi1maWxsZWQtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgYnV0dG9uLWZpbGxlZC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgYnV0dG9uLWZpbGxlZC10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuXG4gIGJ1dHRvbi1maWxsZWQtdGlueS1wYWRkaW5nOiAwLjMxMjVyZW0gMC42MjVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtc21hbGwtcGFkZGluZzogMC40Mzc1cmVtIDAuODc1cmVtLFxuICBidXR0b24tZmlsbGVkLW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDEuMTI1cmVtLFxuICBidXR0b24tZmlsbGVkLWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxLjM3NXJlbSxcblxuICBidXR0b24tZmlsbGVkLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24tb3V0bGluZS1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgYnV0dG9uLW91dGxpbmUtdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgYnV0dG9uLW91dGxpbmUtZm9jdXMtaW5zZXQtc2hhZG93LWxlbmd0aDogMCAwIDAgMTAwdm1heCxcblxuICBidXR0b24tb3V0bGluZS10aW55LXBhZGRpbmc6IDAuMzEyNXJlbSAwLjYyNXJlbSxcbiAgYnV0dG9uLW91dGxpbmUtc21hbGwtcGFkZGluZzogMC40Mzc1cmVtIDAuODc1cmVtLFxuICBidXR0b24tb3V0bGluZS1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDEuMTI1cmVtLFxuICBidXR0b24tb3V0bGluZS1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxLjM3NXJlbSxcblxuICBidXR0b24tb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWhvdmVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWhvdmVyLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1pbmZvLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWZvY3VzLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctaG92ZXItdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYWN0aXZlLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWZvY3VzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3QtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgYnV0dG9uLWdob3N0LWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBidXR0b24tZ2hvc3QtdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgYnV0dG9uLWdob3N0LWZvY3VzLWluc2V0LXNoYWRvdy1sZW5ndGg6IDAgMCAwIDEwMHZtYXgsXG5cbiAgYnV0dG9uLWdob3N0LXRpbnktcGFkZGluZzogMC4zMTI1cmVtIDAuNjI1cmVtLFxuICBidXR0b24tZ2hvc3Qtc21hbGwtcGFkZGluZzogMC40Mzc1cmVtIDAuODc1cmVtLFxuICBidXR0b24tZ2hvc3QtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLWdob3N0LWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLWdob3N0LWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxLjM3NXJlbSxcblxuICBidXR0b24tZ2hvc3QtYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1mb2N1cy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtYmFzaWMtaG92ZXItdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtYmFzaWMtYWN0aXZlLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWZvY3VzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LWluZm8tdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3QtaW5mby1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWluZm8taG92ZXItdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWluZm8tYWN0aXZlLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZm9jdXMtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWhvdmVyLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZm9jdXMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWhvdmVyLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWFjdGl2ZS10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24taGVyby1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24taGVyby1ib3JkZXItd2lkdGg6IDAsXG4gIGJ1dHRvbi1oZXJvLXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsXG5cbiAgYnV0dG9uLWhlcm8tdGlueS1wYWRkaW5nOiAwLjM3NXJlbSAwLjY4NzVyZW0sXG4gIGJ1dHRvbi1oZXJvLXNtYWxsLXBhZGRpbmc6IDAuNXJlbSAwLjkzNzVyZW0sXG4gIGJ1dHRvbi1oZXJvLW1lZGl1bS1wYWRkaW5nOiAwLjc1cmVtIDEuMTg3NXJlbSxcbiAgYnV0dG9uLWhlcm8tbGFyZ2UtcGFkZGluZzogMC44NzVyZW0gMS4xODc1cmVtLFxuICBidXR0b24taGVyby1naWFudC1wYWRkaW5nOiAxcmVtIDEuNDM3NXJlbSxcblxuICBidXR0b24taGVyby1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWhlcm8tdGV4dC1zaGFkb3c6IHNoYWRvdyxcbiAgYnV0dG9uLWhlcm8tYmV2ZWwtc2l6ZTogMCAwIDAgMCxcbiAgYnV0dG9uLWhlcm8tZ2xvdy1zaXplOiAwIDAgMCAwLFxuICBidXR0b24taGVyby1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICBidXR0b24taGVyby1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtYmV2ZWwtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZ2xvdy1jb2xvcjogY29sb3ItYmFzaWMtNzAwLFxuICBidXR0b24taGVyby1iYXNpYy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0zMDAsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLFxuICBidXR0b24taGVyby1iYXNpYy1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktYmV2ZWwtY29sb3I6IGNvbG9yLXByaW1hcnktNjAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWdsb3ctY29sb3I6IGNvbG9yLXByaW1hcnktNzAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS00MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBidXR0b24taGVyby1wcmltYXJ5LWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktMzAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBidXR0b24taGVyby1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1iZXZlbC1jb2xvcjogY29sb3Itc3VjY2Vzcy02MDAsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZ2xvdy1jb2xvcjogY29sb3Itc3VjY2Vzcy03MDAsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTQwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBidXR0b24taGVyby1zdWNjZXNzLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy0zMDAsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24taGVyby1pbmZvLWJldmVsLWNvbG9yOiBjb2xvci1pbmZvLTYwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1nbG93LWNvbG9yOiBjb2xvci1pbmZvLTcwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNDAwLFxuICBidXR0b24taGVyby1pbmZvLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8taW5mby1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNTAwLFxuICBidXR0b24taGVyby1pbmZvLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLWluZm8taG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTMwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBidXR0b24taGVyby1pbmZvLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNTAwLFxuICBidXR0b24taGVyby1pbmZvLWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8taW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRpc2FibGVkLFxuICBidXR0b24taGVyby1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8td2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctYmV2ZWwtY29sb3I6IGNvbG9yLXdhcm5pbmctNjAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWdsb3ctY29sb3I6IGNvbG9yLXdhcm5pbmctNzAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy00MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBidXR0b24taGVyby13YXJuaW5nLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy01MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctMzAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy01MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICBidXR0b24taGVyby13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24taGVyby1kYW5nZXItYmV2ZWwtY29sb3I6IGNvbG9yLWRhbmdlci02MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1nbG93LWNvbG9yOiBjb2xvci1kYW5nZXItNzAwLFxuICBidXR0b24taGVyby1kYW5nZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItNDAwLFxuICBidXR0b24taGVyby1kYW5nZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci01MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci0zMDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItNTAwLFxuICBidXR0b24taGVyby1kYW5nZXItYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBidXR0b24taGVyby1jb250cm9sLWJldmVsLWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtZ2xvdy1jb2xvcjogY29sb3ItYmFzaWMtNzAwLFxuICBidXR0b24taGVyby1jb250cm9sLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBidXR0b24taGVyby1jb250cm9sLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICBidXR0b24taGVyby1jb250cm9sLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24taGVyby1jb250cm9sLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBidXR0b24taGVyby1jb250cm9sLWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpY29uLWJ1dHRvbi1maWxsZWQtdGlueS1wYWRkaW5nOiAwLjQzNzVyZW0gMC4zMTI1cmVtLFxuICBpY29uLWJ1dHRvbi1maWxsZWQtc21hbGwtcGFkZGluZzogMC41NjI1cmVtIDAuNDM3NXJlbSxcbiAgaWNvbi1idXR0b24tZmlsbGVkLW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMC41NjI1cmVtLFxuICBpY29uLWJ1dHRvbi1maWxsZWQtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDAuNjg3NXJlbSxcbiAgaWNvbi1idXR0b24tZmlsbGVkLWdpYW50LXBhZGRpbmc6IDEuMDYyNXJlbSAwLjkzNzVyZW0sXG5cbiAgaWNvbi1idXR0b24tb3V0bGluZS10aW55LXBhZGRpbmc6IDAuNDM3NXJlbSAwLjMxMjVyZW0sXG4gIGljb24tYnV0dG9uLW91dGxpbmUtc21hbGwtcGFkZGluZzogMC41NjI1cmVtIDAuNDM3NXJlbSxcbiAgaWNvbi1idXR0b24tb3V0bGluZS1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDAuNTYyNXJlbSxcbiAgaWNvbi1idXR0b24tb3V0bGluZS1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMC42ODc1cmVtLFxuICBpY29uLWJ1dHRvbi1vdXRsaW5lLWdpYW50LXBhZGRpbmc6IDEuMDYyNXJlbSAwLjkzNzVyZW0sXG5cbiAgaWNvbi1idXR0b24tZ2hvc3QtdGlueS1wYWRkaW5nOiAwLjQzNzVyZW0gMC4zMTI1cmVtLFxuICBpY29uLWJ1dHRvbi1naG9zdC1zbWFsbC1wYWRkaW5nOiAwLjU2MjVyZW0gMC40Mzc1cmVtLFxuICBpY29uLWJ1dHRvbi1naG9zdC1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDAuNTYyNXJlbSxcbiAgaWNvbi1idXR0b24tZ2hvc3QtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDAuNjg3NXJlbSxcbiAgaWNvbi1idXR0b24tZ2hvc3QtZ2lhbnQtcGFkZGluZzogMS4wNjI1cmVtIDAuOTM3NXJlbSxcblxuICBpY29uLWJ1dHRvbi1oZXJvLXRpbnktcGFkZGluZzogMC41cmVtIDAuMzc1cmVtLFxuICBpY29uLWJ1dHRvbi1oZXJvLXNtYWxsLXBhZGRpbmc6IDAuNTYyNXJlbSAwLjVyZW0sXG4gIGljb24tYnV0dG9uLWhlcm8tbWVkaXVtLXBhZGRpbmc6IDAuNzVyZW0gMC41NjI1cmVtLFxuICBpY29uLWJ1dHRvbi1oZXJvLWxhcmdlLXBhZGRpbmc6IDAuODc1cmVtIDAuNjg3NXJlbSxcbiAgaWNvbi1idXR0b24taGVyby1naWFudC1wYWRkaW5nOiAxLjA2MjVyZW0gMXJlbSxcblxuICBpbnB1dC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBpbnB1dC1ib3JkZXItd2lkdGg6IDFweCxcbiAgaW5wdXQtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgaW5wdXQtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcbiAgaW5wdXQtcGxhY2Vob2xkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGlucHV0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG5cbiAgaW5wdXQtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgaW5wdXQtYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWJhc2ljLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaW5wdXQtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGlucHV0LWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgaW5wdXQtYmFzaWMtZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpbnB1dC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LXByaW1hcnktcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgaW5wdXQtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGlucHV0LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgaW5wdXQtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGlucHV0LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBpbnB1dC1zdWNjZXNzLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaW5wdXQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGlucHV0LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBpbnB1dC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIGlucHV0LXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgaW5wdXQtc3VjY2Vzcy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGlucHV0LWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgaW5wdXQtaW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGlucHV0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBpbnB1dC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaW5wdXQtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICBpbnB1dC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgaW5wdXQtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXItYm9yZGVyLFxuICBpbnB1dC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LWluZm8tZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpbnB1dC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LXdhcm5pbmctcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgaW5wdXQtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGlucHV0LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgaW5wdXQtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGlucHV0LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBpbnB1dC13YXJuaW5nLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGlucHV0LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBpbnB1dC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBpbnB1dC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICBpbnB1dC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICBpbnB1dC1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LWRhbmdlci1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGlucHV0LWNvbnRyb2wtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBpbnB1dC1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgaW5wdXQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCxcbiAgaW5wdXQtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwLFxuICBpbnB1dC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwLFxuICBpbnB1dC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGlucHV0LWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC00MDAsXG4gIGlucHV0LWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBpbnB1dC1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGlucHV0LWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBpbnB1dC1jb250cm9sLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBpbnB1dC1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgaW5wdXQtc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBpbnB1dC1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgaW5wdXQtdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLTItZm9udC1zaXplLFxuICBpbnB1dC10aW55LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC10aW55LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LXRpbnktcGFkZGluZzogMC4xODc1cmVtIDFyZW0sXG4gIGlucHV0LXRpbnktbWF4LXdpZHRoOiAyMHJlbSxcblxuICBpbnB1dC1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgaW5wdXQtc21hbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIGlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaW5wdXQtc21hbGwtcGFkZGluZzogMC4xODc1cmVtIDFyZW0sXG4gIGlucHV0LXNtYWxsLW1heC13aWR0aDogMjByZW0sXG5cbiAgaW5wdXQtbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgaW5wdXQtbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGlucHV0LW1lZGl1bS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1tZWRpdW0tcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1tZWRpdW0tcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LW1lZGl1bS1wYWRkaW5nOiAwLjQzNzVyZW0gMXJlbSxcbiAgaW5wdXQtbWVkaXVtLW1heC13aWR0aDogMjByZW0sXG5cbiAgaW5wdXQtbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBpbnB1dC1sYXJnZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LWxhcmdlLXBhZGRpbmc6IDAuNjg3NXJlbSAxcmVtLFxuICBpbnB1dC1sYXJnZS1tYXgtd2lkdGg6IDMwcmVtLFxuXG4gIGlucHV0LWdpYW50LXRleHQtZm9udC1zaXplOiB0ZXh0LWhlYWRpbmctNi1mb250LXNpemUsXG4gIGlucHV0LWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtaGVhZGluZy02LWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWhlYWRpbmctNi1saW5lLWhlaWdodCxcbiAgaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1naWFudC1wYWRkaW5nOiAwLjkzNzVyZW0gMXJlbSxcbiAgaW5wdXQtZ2lhbnQtbWF4LXdpZHRoOiAzMHJlbSxcblxuICBjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW0sXG4gIGNoZWNrYm94LXdpZHRoOiAxLjI1cmVtLFxuICBjaGVja2JveC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjaGVja2JveC1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2hlY2tib3gtYm9yZGVyLXJhZGl1czogM3B4LFxuICBjaGVja2JveC1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICBjaGVja2JveC1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICBjaGVja2JveC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIGNoZWNrYm94LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBjaGVja2JveC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIGNoZWNrYm94LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgY2hlY2tib3gtdGV4dC1zcGFjZTogMC42ODc1cmVtLFxuICBjaGVja2JveC1wYWRkaW5nOiAwLFxuICBjaGVja2JveC1mb2N1cy1pbnNldC1zaGFkb3ctbGVuZ3RoOiAwIDAgMCAxMDB2bWF4LFxuXG4gIGNoZWNrYm94LWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGVja2JveC1iYXNpYy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtYmFzaWMtaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoZWNrYm94LWJhc2ljLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgY2hlY2tib3gtYmFzaWMtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICBjaGVja2JveC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIGNoZWNrYm94LWJhc2ljLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGNoZWNrYm94LWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjaGVja2JveC1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hlY2tib3gtcHJpbWFyeS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1wcmltYXJ5LWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGVja2JveC1wcmltYXJ5LWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgY2hlY2tib3gtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjaGVja2JveC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgY2hlY2tib3gtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICBjaGVja2JveC1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgY2hlY2tib3gtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGNoZWNrYm94LWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hlY2tib3gtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjaGVja2JveC1pbmZvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWluZm8taW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNoZWNrYm94LWluZm8taW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8taW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLFxuICBjaGVja2JveC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8tZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICBjaGVja2JveC1pbmZvLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLFxuICBjaGVja2JveC1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8taG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBjaGVja2JveC1pbmZvLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxuICBjaGVja2JveC1pbmZvLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGNoZWNrYm94LWluZm8tZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LWluZm8tZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjaGVja2JveC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY2hlY2tib3gtd2FybmluZy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC13YXJuaW5nLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjaGVja2JveC13YXJuaW5nLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgY2hlY2tib3gtd2FybmluZy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgY2hlY2tib3gtd2FybmluZy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjaGVja2JveC13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgY2hlY2tib3gtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICBjaGVja2JveC13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgY2hlY2tib3gtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgY2hlY2tib3gtZGFuZ2VyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgY2hlY2tib3gtZGFuZ2VyLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLFxuICBjaGVja2JveC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIGNoZWNrYm94LWRhbmdlci1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBjaGVja2JveC1kYW5nZXItaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgY2hlY2tib3gtZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGNoZWNrYm94LWNvbnRyb2wtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGNoZWNrYm94LWNvbnRyb2wtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtY2hlY2tlZC1jaGVja21hcmstY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgY2hlY2tib3gtY29udHJvbC1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgY2hlY2tib3gtY29udHJvbC1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBjaGVja2JveC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsXG4gIGNoZWNrYm94LWNvbnRyb2wtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUsXG4gIGNoZWNrYm94LWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGJhZGdlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGJhZGdlLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBiYWRnZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tdGlueS1mb250LXNpemUsXG4gIGJhZGdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBiYWRnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi10aW55LWxpbmUtaGVpZ2h0LFxuICBiYWRnZS1wYWRkaW5nOiAwLjI1cmVtIDAuNHJlbSxcblxuICBiYWRnZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGJhZGdlLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGJhZGdlLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBiYWRnZS1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBiYWRnZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgYmFkZ2UtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXMsXG4gIHByb2dyZXNzLWJhci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBwcm9ncmVzcy1iYXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcblxuICBwcm9ncmVzcy1iYXItdGlueS1oZWlnaHQ6IDFyZW0sXG4gIHByb2dyZXNzLWJhci10aW55LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIHByb2dyZXNzLWJhci10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLWhlaWdodDogMS4yNXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItc21hbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLWhlaWdodDogMS4zNzVyZW0sXG4gIHByb2dyZXNzLWJhci1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHByb2dyZXNzLWJhci1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLWhlaWdodDogMS41cmVtLFxuICBwcm9ncmVzcy1iYXItbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItbGFyZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIHByb2dyZXNzLWJhci1naWFudC1oZWlnaHQ6IDEuNzVyZW0sXG4gIHByb2dyZXNzLWJhci1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHByb2dyZXNzLWJhci1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICBwcm9ncmVzcy1iYXItYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBwcm9ncmVzcy1iYXItYmFzaWMtZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItNCxcbiAgcHJvZ3Jlc3MtYmFyLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItcHJpbWFyeS1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItc3VjY2Vzcy1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLWluZm8tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItaW5mby1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItd2FybmluZy1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHByb2dyZXNzLWJhci1kYW5nZXItZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBwcm9ncmVzcy1iYXItY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHByb2dyZXNzLWJhci1jb250cm9sLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHByb2dyZXNzLWJhci1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcblxuICBhbGVydC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBhbGVydC1ib3R0b20tbWFyZ2luOiAxLjVyZW0sXG4gIGFsZXJ0LXBhZGRpbmc6IDFyZW0gMS4xMjVyZW0sXG4gIGFsZXJ0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBhbGVydC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIGFsZXJ0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuICBhbGVydC1zaGFkb3c6IG5vbmUsXG4gIGFsZXJ0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBhbGVydC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGFsZXJ0LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGFsZXJ0LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgYWxlcnQtY2xvc2FibGUtc3RhcnQtcGFkZGluZzogM3JlbSxcblxuICBhbGVydC10aW55LWhlaWdodDogNC41cmVtLFxuICBhbGVydC1zbWFsbC1oZWlnaHQ6IDUuNzVyZW0sXG4gIGFsZXJ0LW1lZGl1bS1oZWlnaHQ6IDdyZW0sXG4gIGFsZXJ0LW1lZGl1bS1wYWRkaW5nOiAxcmVtIDEuMTI1cmVtLFxuICBhbGVydC1sYXJnZS1oZWlnaHQ6IDguMjVyZW0sXG4gIGFsZXJ0LWdpYW50LWhlaWdodDogOS41cmVtLFxuXG4gIGFsZXJ0LWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgYWxlcnQtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWxlcnQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGFsZXJ0LXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBhbGVydC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYWxlcnQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGFsZXJ0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBhbGVydC1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYWxlcnQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGFsZXJ0LXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBhbGVydC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGFsZXJ0LWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGFsZXJ0LWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBhbGVydC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcblxuICBhbGVydC1hY2NlbnQtYmFzaWMtY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBhbGVydC1hY2NlbnQtcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBhbGVydC1hY2NlbnQtaW5mby1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBhbGVydC1hY2NlbnQtc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBhbGVydC1hY2NlbnQtd2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBhbGVydC1hY2NlbnQtZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LWNvbnRyb2wtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcblxuICBhbGVydC1vdXRsaW5lLXdpZHRoOiAxcHgsXG4gIGFsZXJ0LW91dGxpbmUtYmFzaWMtY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS1wcmltYXJ5LWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS13YXJuaW5nLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtY29udHJvbC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXIsXG5cbiAgY2hhdC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGNoYXQtYm9yZGVyOiBub25lLFxuICBjaGF0LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGNoYXQtc2hhZG93OiBzaGFkb3csXG4gIGNoYXQtcGFkZGluZzogMXJlbSAxLjI1cmVtLFxuICBjaGF0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBjaGF0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgY2hhdC1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcblxuICBjaGF0LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoYXQtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGNoYXQtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgY2hhdC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgY2hhdC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBjaGF0LWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBjaGF0LWhlYWRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNoYXQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGNoYXQtaGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgY2hhdC10aW55LWhlaWdodDogMTMuNXJlbSxcbiAgY2hhdC1zbWFsbC1oZWlnaHQ6IDIxcmVtLFxuICBjaGF0LW1lZGl1bS1oZWlnaHQ6IDI4LjVyZW0sXG4gIGNoYXQtbGFyZ2UtaGVpZ2h0OiAzNnJlbSxcbiAgY2hhdC1naWFudC1oZWlnaHQ6IDQzLjVyZW0sXG5cbiAgY2hhdC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGNoYXQtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hhdC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hhdC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY2hhdC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY2hhdC1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY2hhdC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoYXQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgY2hhdC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcblxuICBjaGF0LWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGNoYXQtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgY2hhdC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuXG4gIGNoYXQtbWVzc2FnZS1iYWNrZ3JvdW5kOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoYXQtbWVzc2FnZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtbWVzc2FnZS1yZXBseS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNoYXQtbWVzc2FnZS1yZXBseS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGF0LW1lc3NhZ2UtYXZhdGFyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTUwMCxcbiAgY2hhdC1tZXNzYWdlLXNlbmRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGNoYXQtbWVzc2FnZS1xdW90ZS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNoYXQtbWVzc2FnZS1xdW90ZS10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGNoYXQtbWVzc2FnZS1maWxlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgY2hhdC1tZXNzYWdlLWZpbGUtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzcGlubmVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBzcGlubmVyLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBzcGlubmVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBzcGlubmVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcblxuICBzcGlubmVyLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1iYXNpYy1jaXJjbGUtZmlsbGVkLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNwaW5uZXItYmFzaWMtY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLXByaW1hcnktY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzcGlubmVyLXByaW1hcnktY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLWluZm8tY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBzcGlubmVyLWluZm8tY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLXN1Y2Nlc3MtY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzcGlubmVyLXN1Y2Nlc3MtY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLXdhcm5pbmctY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBzcGlubmVyLXdhcm5pbmctY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIHNwaW5uZXItZGFuZ2VyLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzcGlubmVyLWRhbmdlci1jaXJjbGUtZW1wdHktY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHNwaW5uZXItY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1jb250cm9sLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgc3Bpbm5lci1jb250cm9sLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1oZWlnaHQtdGlueTogMXJlbSxcbiAgc3Bpbm5lci1oZWlnaHQtc21hbGw6IDEuMjVyZW0sXG4gIHNwaW5uZXItaGVpZ2h0LW1lZGl1bTogMS41cmVtLFxuICBzcGlubmVyLWhlaWdodC1sYXJnZTogMS43NXJlbSxcbiAgc3Bpbm5lci1oZWlnaHQtZ2lhbnQ6IDJyZW0sXG5cbiAgc3RlcHBlci1zdGVwLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc3RlcHBlci1zdGVwLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzdGVwcGVyLXN0ZXAtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc3RlcHBlci1zdGVwLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzdGVwcGVyLXN0ZXAtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHN0ZXBwZXItc3RlcC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWFjdGl2ZS1jb2xvcixcbiAgc3RlcHBlci1zdGVwLWNvbXBsZXRlZC10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG5cbiAgc3RlcHBlci1zdGVwLWluZGV4LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1ib3JkZXItcmFkaXVzOiA1MCUsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC13aWR0aDogMnJlbSxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtY29tcGxldGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc3RlcHBlci1jb25uZWN0b3ItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzdGVwcGVyLWNvbm5lY3Rvci1jb21wbGV0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzdGVwcGVyLWhvcml6b250YWwtY29ubmVjdG9yLW1hcmdpbjogMXJlbSxcbiAgc3RlcHBlci12ZXJ0aWNhbC1jb25uZWN0b3ItbWFyZ2luOiAxcmVtLFxuXG4gIHN0ZXBwZXItc3RlcC1jb250ZW50LXBhZGRpbmc6IDEuMjVyZW0sXG5cbiAgYWNjb3JkaW9uLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGFjY29yZGlvbi1wYWRkaW5nOiAxLjI1cmVtLFxuICBhY2NvcmRpb24tc2hhZG93OiBzaGFkb3csXG4gIGFjY29yZGlvbi1oZWFkZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBhY2NvcmRpb24taGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBhY2NvcmRpb24taGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIGFjY29yZGlvbi1oZWFkZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGFjY29yZGlvbi1pdGVtLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgYWNjb3JkaW9uLWl0ZW0tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWNjb3JkaW9uLWl0ZW0tdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBhY2NvcmRpb24taXRlbS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBsaXN0LWl0ZW0tZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgbGlzdC1pdGVtLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGxpc3QtaXRlbS1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBsaXN0LWl0ZW0tcGFkZGluZzogMXJlbSxcbiAgbGlzdC1pdGVtLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGxpc3QtaXRlbS1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGxpc3QtaXRlbS1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgbGlzdC1pdGVtLWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgbGlzdC1pdGVtLWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBjYWxlbmRhci13aWR0aDogMjAuNjI1cmVtLFxuICBjYWxlbmRhci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGNhbGVuZGFyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGNhbGVuZGFyLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGNhbGVuZGFyLWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBjYWxlbmRhci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjYWxlbmRhci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYWxlbmRhci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNhbGVuZGFyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItcGlja2VyLXBhZGRpbmctdG9wOiAwLjI1cmVtLFxuICBjYWxlbmRhci1waWNrZXItcGFkZGluZy1ib3R0b206IDAuNjI1cmVtLFxuICBjYWxlbmRhci1waWNrZXItcGFkZGluZy1zdGFydDogMC42MjVyZW0sXG4gIGNhbGVuZGFyLXBpY2tlci1wYWRkaW5nLWVuZDogMC42MjVyZW0sXG5cbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi1wYWRkaW5nOiAwLjYyNXJlbSAwLjI1cmVtLFxuXG4gIGNhbGVuZGFyLWNlbGwtaW5hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuXG4gIGNhbGVuZGFyLWNlbGwtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBjYWxlbmRhci1jZWxsLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci1ib3JkZXItY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLWhvdmVyLXRleHQtZm9udC1zaXplOiBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWZvbnQtd2VpZ2h0OiBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci1jZWxsLWhvdmVyLXRleHQtbGluZS1oZWlnaHQ6IGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLXRleHQtZm9udC1zaXplOiBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1mb250LXdlaWdodDogY2FsZW5kYXItdGV4dC1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1saW5lLWhlaWdodDogY2FsZW5kYXItdGV4dC1saW5lLWhlaWdodCxcblxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWZvbnQtc2l6ZTogY2FsZW5kYXItdGV4dC1mb250LXNpemUsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1mb250LXdlaWdodDogY2FsZW5kYXItdGV4dC1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWxpbmUtaGVpZ2h0OiBjYWxlbmRhci10ZXh0LWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG5cbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1mb250LXNpemU6IGNhbGVuZGFyLXRleHQtZm9udC1zaXplLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLXRleHQtZm9udC13ZWlnaHQ6IGNhbGVuZGFyLXRleHQtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1saW5lLWhlaWdodDogY2FsZW5kYXItdGV4dC1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcblxuICBjYWxlbmRhci1kYXktY2VsbC13aWR0aDogMi43NXJlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtaGVpZ2h0OiAyLjc1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoOiA0LjgxMjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0OiBjYWxlbmRhci1kYXktY2VsbC1oZWlnaHQsXG4gIGNhbGVuZGFyLXllYXItY2VsbC13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQsXG5cbiAgY2FsZW5kYXItd2Vla2RheS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCxcbiAgY2FsZW5kYXItd2Vla2RheS1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBjYWxlbmRhci13ZWVrZGF5LWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIGNhbGVuZGFyLXdlZWtkYXktdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBjYWxlbmRhci13ZWVrZGF5LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItd2Vla2RheS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci13ZWVrZGF5LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtkYXktaG9saWRheS10ZXh0LWNvbG9yOiBjYWxlbmRhci13ZWVrZGF5LXRleHQtY29sb3IsXG4gIGNhbGVuZGFyLXdlZWtkYXktaGVpZ2h0OiBjYWxlbmRhci1kYXktY2VsbC1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtkYXktd2lkdGg6IGNhbGVuZGFyLWRheS1jZWxsLXdpZHRoLFxuXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgY2FsZW5kYXItd2Vla251bWJlci1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLWhlaWdodDogY2FsZW5kYXItd2Vla2RheS1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItd2lkdGg6IGNhbGVuZGFyLXdlZWtkYXktd2lkdGgsXG5cbiAgY2FsZW5kYXItbGFyZ2Utd2lkdGg6IDIyLjM3NXJlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2Utd2lkdGg6IDNyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodDogM3JlbSxcbiAgY2FsZW5kYXItd2Vla2RheS1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrZGF5LWxhcmdlLXdpZHRoOiBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci13ZWVrZGF5LWxhcmdlLWhlaWdodCxcbiAgY2FsZW5kYXItd2Vla251bWJlci1sYXJnZS13aWR0aDogY2FsZW5kYXItd2Vla2RheS1sYXJnZS13aWR0aCxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS13aWR0aDogNS4yNXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLXdpZHRoOiBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLXdpZHRoLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLWhlaWdodCxcblxuICBvdmVybGF5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNSksXG5cbiAgdG9vbHRpcC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTMsXG4gIHRvb2x0aXAtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC1ib3JkZXItc3R5bGU6IGRhc2hlZCxcbiAgdG9vbHRpcC1ib3JkZXItd2lkdGg6IDAsXG4gIHRvb2x0aXAtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgdG9vbHRpcC1wYWRkaW5nOiAwLjVyZW0gMXJlbSxcbiAgdG9vbHRpcC10ZXh0LWNvbG9yOiB0ZXh0LWFsdGVybmF0ZS1jb2xvcixcbiAgdG9vbHRpcC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWNhcHRpb24tZm9udC1mYW1pbHksXG4gIHRvb2x0aXAtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHRvb2x0aXAtdGV4dC1mb250LXdlaWdodDogdGV4dC1jYXB0aW9uLWZvbnQtd2VpZ2h0LFxuICB0b29sdGlwLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcbiAgdG9vbHRpcC1pY29uLWhlaWdodDogMXJlbSxcbiAgdG9vbHRpcC1pY29uLXdpZHRoOiAxcmVtLFxuICB0b29sdGlwLW1heC13aWR0aDogMTZyZW0sXG5cbiAgdG9vbHRpcC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHRvb2x0aXAtYmFzaWMtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b29sdGlwLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b29sdGlwLXByaW1hcnktYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9vbHRpcC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9vbHRpcC1pbmZvLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvb2x0aXAtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b29sdGlwLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b29sdGlwLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9vbHRpcC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvb2x0aXAtZGFuZ2VyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9vbHRpcC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdG9vbHRpcC1jb250cm9sLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHRvb2x0aXAtc2hhZG93OiBzaGFkb3csXG5cbiAgb3B0aW9uLWxpc3QtbWF4LWhlaWdodDogMjByZW0sXG4gIG9wdGlvbi1saXN0LXNoYWRvdzogbm9uZSxcbiAgb3B0aW9uLWxpc3QtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBvcHRpb24tbGlzdC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBvcHRpb24tbGlzdC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgb3B0aW9uLWxpc3QtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgb3B0aW9uLWxpc3QtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgb3B0aW9uLWxpc3QtYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBvcHRpb24tbGlzdC1ib3JkZXItY29sb3IsXG4gIG9wdGlvbi1saXN0LWFkamFjZW50LWJvcmRlci1zdHlsZTogb3B0aW9uLWxpc3QtYm9yZGVyLXN0eWxlLFxuICBvcHRpb24tbGlzdC1hZGphY2VudC1ib3JkZXItd2lkdGg6IG9wdGlvbi1saXN0LWJvcmRlci13aWR0aCxcblxuICBvcHRpb24tZ3JvdXAtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBvcHRpb24tZ3JvdXAtdGlueS1zdGFydC1wYWRkaW5nOiAxLjI1cmVtLFxuICBvcHRpb24tZ3JvdXAtc21hbGwtc3RhcnQtcGFkZGluZzogMS43NXJlbSxcbiAgb3B0aW9uLWdyb3VwLW1lZGl1bS1zdGFydC1wYWRkaW5nOiAyLjI1cmVtLFxuICBvcHRpb24tZ3JvdXAtbGFyZ2Utc3RhcnQtcGFkZGluZzogMi4yNXJlbSxcbiAgb3B0aW9uLWdyb3VwLWdpYW50LXN0YXJ0LXBhZGRpbmc6IDIuNzVyZW0sXG5cbiAgb3B0aW9uLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgb3B0aW9uLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIG9wdGlvbi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBvcHRpb24taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIG9wdGlvbi1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBvcHRpb24tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgb3B0aW9uLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBvcHRpb24tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIG9wdGlvbi1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBvcHRpb24tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBvcHRpb24tc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBvcHRpb24tc2VsZWN0ZWQtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgb3B0aW9uLXNlbGVjdGVkLWhvdmVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgb3B0aW9uLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgb3B0aW9uLXNlbGVjdGVkLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIG9wdGlvbi1zZWxlY3RlZC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBvcHRpb24tc2VsZWN0ZWQtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBvcHRpb24tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBvcHRpb24tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBvcHRpb24tdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLTItZm9udC1zaXplLFxuICBvcHRpb24tdGlueS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWNhcHRpb24tMi1mb250LXdlaWdodCxcbiAgb3B0aW9uLXRpbnktdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLTItbGluZS1oZWlnaHQsXG4gIG9wdGlvbi10aW55LXBhZGRpbmc6IHNlbGVjdC1vdXRsaW5lLXRpbnktcGFkZGluZyxcblxuICBvcHRpb24tc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIG9wdGlvbi1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIG9wdGlvbi1zbWFsbC1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS1zbWFsbC1wYWRkaW5nLFxuXG4gIG9wdGlvbi1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBvcHRpb24tbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgb3B0aW9uLW1lZGl1bS1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS1tZWRpdW0tcGFkZGluZyxcblxuICBvcHRpb24tbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBvcHRpb24tbGFyZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgb3B0aW9uLWxhcmdlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIG9wdGlvbi1sYXJnZS1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS1sYXJnZS1wYWRkaW5nLFxuXG4gIG9wdGlvbi1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTYtZm9udC1zaXplLFxuICBvcHRpb24tZ2lhbnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1oZWFkaW5nLTYtZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWhlYWRpbmctNi1saW5lLWhlaWdodCxcbiAgb3B0aW9uLWdpYW50LXBhZGRpbmc6IHNlbGVjdC1vdXRsaW5lLWdpYW50LXBhZGRpbmcsXG5cbiAgc2VsZWN0LWN1cnNvcjogcG9pbnRlcixcbiAgc2VsZWN0LWRpc2FibGVkLWN1cnNvcjogZGVmYXVsdCxcbiAgc2VsZWN0LW1pbi13aWR0aDogMTNyZW0sXG4gIHNlbGVjdC1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICBzZWxlY3Qtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgc2VsZWN0LWljb24tb2Zmc2V0OiAycmVtLFxuXG4gIHNlbGVjdC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBzZWxlY3QtcGxhY2Vob2xkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG5cbiAgc2VsZWN0LXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LXRpbnktdGV4dC1mb250LXdlaWdodDogdGV4dC1jYXB0aW9uLTItZm9udC13ZWlnaHQsXG4gIHNlbGVjdC10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0LFxuICBzZWxlY3QtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzZWxlY3QtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc2VsZWN0LXRpbnktbWF4LXdpZHRoOiAyMHJlbSxcblxuICBzZWxlY3Qtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIHNlbGVjdC1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHNlbGVjdC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzZWxlY3Qtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1zbWFsbC1tYXgtd2lkdGg6IDIwcmVtLFxuXG4gIHNlbGVjdC1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBzZWxlY3QtbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgc2VsZWN0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzZWxlY3QtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtbWVkaXVtLW1heC13aWR0aDogMjByZW0sXG5cbiAgc2VsZWN0LWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBzZWxlY3QtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LWxhcmdlLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtbGFyZ2UtbWF4LXdpZHRoOiAzMHJlbSxcblxuICBzZWxlY3QtZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtaGVhZGluZy02LWZvbnQtc2l6ZSxcbiAgc2VsZWN0LWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtaGVhZGluZy02LWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQsXG4gIHNlbGVjdC1naWFudC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzZWxlY3QtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1naWFudC1tYXgtd2lkdGg6IDMwcmVtLFxuXG4gIHNlbGVjdC1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgc2VsZWN0LXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgc2VsZWN0LXJvdW5kLWJvcmRlci1yYWRpdXM6IDEuNXJlbSxcblxuICBzZWxlY3Qtb3V0bGluZS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBzZWxlY3Qtb3V0bGluZS1ib3JkZXItd2lkdGg6IDFweCxcblxuICBzZWxlY3Qtb3V0bGluZS10aW55LXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBzZWxlY3Qtb3V0bGluZS1zbWFsbC1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LW91dGxpbmUtbWVkaXVtLXBhZGRpbmc6IDAuNDM3NXJlbSAxcmVtLFxuICBzZWxlY3Qtb3V0bGluZS1sYXJnZS1wYWRkaW5nOiAwLjY4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LW91dGxpbmUtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDFyZW0sXG5cbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtaWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtaW5mby1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWljb24tY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTQwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWFkamFjZW50LWJvcmRlci1zdHlsZTogc2VsZWN0LW91dGxpbmUtYm9yZGVyLXN0eWxlLFxuICBzZWxlY3Qtb3V0bGluZS1hZGphY2VudC1ib3JkZXItd2lkdGg6IHNlbGVjdC1vdXRsaW5lLWJvcmRlci13aWR0aCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3Mtb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWluZm8tYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtaW5mby1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtd2FybmluZy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1vcGVuLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1vcGVuLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtY29udHJvbC1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWJvcmRlci1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHNlbGVjdC1maWxsZWQtYm9yZGVyLXdpZHRoOiAxcHgsXG5cbiAgc2VsZWN0LWZpbGxlZC10aW55LXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBzZWxlY3QtZmlsbGVkLXNtYWxsLXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBzZWxlY3QtZmlsbGVkLW1lZGl1bS1wYWRkaW5nOiAwLjQzNzVyZW0gMXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1sYXJnZS1wYWRkaW5nOiAwLjY4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1naWFudC1wYWRkaW5nOiAwLjkzNzVyZW0gMXJlbSxcblxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtaWNvbi1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXRpbnktcGFkZGluZzogMC4yNXJlbSAxcmVtLFxuICBzZWxlY3QtaGVyby1zbWFsbC1wYWRkaW5nOiAwLjI1cmVtIDFyZW0sXG4gIHNlbGVjdC1oZXJvLW1lZGl1bS1wYWRkaW5nOiAwLjVyZW0gMXJlbSxcbiAgc2VsZWN0LWhlcm8tbGFyZ2UtcGFkZGluZzogMC43NXJlbSAxcmVtLFxuICBzZWxlY3QtaGVyby1naWFudC1wYWRkaW5nOiAxcmVtIDFyZW0sXG5cbiAgc2VsZWN0LWhlcm8tYmFzaWMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0yMDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWljb24tY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWhlcm8tYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtaGVyby1iYXNpYy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tYmFzaWMtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0zMDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTQwMCxcbiAgc2VsZWN0LWhlcm8tYmFzaWMtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLFxuICBzZWxlY3QtaGVyby1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktNDAwLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktMzAwLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy00MDAsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy0zMDAsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWluZm8tbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTQwMCxcbiAgc2VsZWN0LWhlcm8taW5mby1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLWluZm8taWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8taW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8taW5mby1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNTAwLFxuICBzZWxlY3QtaGVyby1pbmZvLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHNlbGVjdC1oZXJvLWluZm8taG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTMwMCxcbiAgc2VsZWN0LWhlcm8taW5mby1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBzZWxlY3QtaGVyby1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8taW5mby1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8td2FybmluZy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctNDAwLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8td2FybmluZy1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtaGVyby13YXJuaW5nLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy01MDAsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgc2VsZWN0LWhlcm8td2FybmluZy1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctMzAwLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1kYW5nZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItNDAwLFxuICBzZWxlY3QtaGVyby1kYW5nZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTMwMCxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1jb250cm9sLWljb24tY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWhlcm8tY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0yMDAsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cyxcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBzZWxlY3QtaGVyby1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgZGF0ZXBpY2tlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGRhdGVwaWNrZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgZGF0ZXBpY2tlci1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBkYXRlcGlja2VyLWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBkYXRlcGlja2VyLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGRhdGVwaWNrZXItc2hhZG93OiBub25lLFxuXG4gIHJhZGlvLXdpZHRoOiAxLjI1cmVtLFxuICByYWRpby1oZWlnaHQ6IDEuMjVyZW0sXG4gIHJhZGlvLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHJhZGlvLWJvcmRlci13aWR0aDogMXB4LFxuICByYWRpby10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIHJhZGlvLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICByYWRpby10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIHJhZGlvLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgcmFkaW8tb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgcmFkaW8tb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcblxuICByYWRpby1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICByYWRpby1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1iYXNpYy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1iYXNpYy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICByYWRpby1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1iYXNpYy1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHJhZGlvLWJhc2ljLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWJhc2ljLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICByYWRpby1iYXNpYy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tYmFzaWMtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8tcHJpbWFyeS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICByYWRpby1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8tcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHJhZGlvLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8tc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICByYWRpby1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHJhZGlvLXN1Y2Nlc3MtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgcmFkaW8tc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICByYWRpby1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICByYWRpby1zdWNjZXNzLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHJhZGlvLWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcmFkaW8taW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1pbmZvLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWluZm8taW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHJhZGlvLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8taW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1pbmZvLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8tZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICByYWRpby1pbmZvLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgcmFkaW8taW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWluZm8taG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICByYWRpby1pbmZvLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8taG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXItYm9yZGVyLFxuICByYWRpby1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgcmFkaW8taW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8taW5mby1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1pbmZvLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8td2FybmluZy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICByYWRpby13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHJhZGlvLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8td2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgcmFkaW8td2FybmluZy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8td2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8tZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1kYW5nZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGFuZ2VyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICByYWRpby1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLFxuICByYWRpby1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1kYW5nZXItZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICByYWRpby1kYW5nZXItZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgcmFkaW8tZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICByYWRpby1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8tY29udHJvbC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHJhZGlvLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICByYWRpby1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsXG4gIHJhZGlvLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8tY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1jb250cm9sLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgcmFkaW8tY29udHJvbC1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICByYWRpby1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby1jb250cm9sLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgdHJlZS1ncmlkLWNlbGwtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHRyZWUtZ3JpZC1jZWxsLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHRyZWUtZ3JpZC1jZWxsLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHRyZWUtZ3JpZC1yb3ctbWluLWhlaWdodDogMnJlbSxcbiAgdHJlZS1ncmlkLWNlbGwtcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbSxcblxuICB0cmVlLWdyaWQtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLWhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICB0cmVlLWdyaWQtZm9vdGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtZm9vdGVyLXRleHQtZm9udC1mYW1pbHk6IHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LWZhbWlseSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWZvbnQtc2l6ZTogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtc2l6ZSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWZvbnQtd2VpZ2h0OiB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1saW5lLWhlaWdodDogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0LFxuXG4gIHRyZWUtZ3JpZC1yb3ctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtcm93LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLXJvdy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtcm93LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICB0cmVlLWdyaWQtcm93LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1ib3JkZXI6IG5vbmUsXG4gIHRyZWUtZ3JpZC1zb3J0LWhlYWRlci1idXR0b24tcGFkZGluZzogMCxcblxuICBpY29uLWZvbnQtc2l6ZTogMS4yNXJlbSxcbiAgaWNvbi1saW5lLWhlaWdodDogMSxcbiAgaWNvbi13aWR0aDogMWVtLFxuICBpY29uLWhlaWdodDogMWVtLFxuICBpY29uLXN2Zy12ZXJ0aWNhbC1hbGlnbjogdG9wLFxuICBpY29uLWJhc2ljLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGljb24tcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBpY29uLWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgaWNvbi1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGljb24td2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBpY29uLWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGljb24tY29udHJvbC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuXG4gIHRvZ2dsZS1oZWlnaHQ6IDEuODc1cmVtLFxuICB0b2dnbGUtd2lkdGg6IDMuMTI1cmVtLFxuICB0b2dnbGUtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHRvZ2dsZS1ib3JkZXItcmFkaXVzOiAxMDBweCxcbiAgdG9nZ2xlLW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG4gIHRvZ2dsZS1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICB0b2dnbGUtc3dpdGNoZXItc2l6ZTogMS43NXJlbSxcbiAgdG9nZ2xlLXN3aXRjaGVyLWljb24tc2l6ZTogMC43NXJlbSxcbiAgdG9nZ2xlLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtMi1mb250LWZhbWlseSxcbiAgdG9nZ2xlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICB0b2dnbGUtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICB0b2dnbGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICB0b2dnbGUtY3Vyc29yOiBwb2ludGVyLFxuICB0b2dnbGUtZGlzYWJsZWQtY3Vyc29yOiBkZWZhdWx0LFxuXG4gIHRvZ2dsZS1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2dnbGUtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9nZ2xlLWJhc2ljLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvZ2dsZS1iYXNpYy1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2dnbGUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgdG9nZ2xlLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHRvZ2dsZS1iYXNpYy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgdG9nZ2xlLWJhc2ljLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICB0b2dnbGUtYmFzaWMtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgdG9nZ2xlLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIHRvZ2dsZS1iYXNpYy1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2dnbGUtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9nZ2xlLXByaW1hcnktY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9nZ2xlLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgdG9nZ2xlLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICB0b2dnbGUtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgdG9nZ2xlLXByaW1hcnktaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIHRvZ2dsZS1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2dnbGUtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHRvZ2dsZS1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvZ2dsZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtc3VjY2Vzcy1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0b2dnbGUtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHRvZ2dsZS1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICB0b2dnbGUtc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgdG9nZ2xlLXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIHRvZ2dsZS1zdWNjZXNzLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvZ2dsZS1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgdG9nZ2xlLWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0b2dnbGUtaW5mby1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLWluZm8tY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvZ2dsZS1pbmZvLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRvZ2dsZS1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgdG9nZ2xlLWluZm8tZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtaW5mby1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHRvZ2dsZS1pbmZvLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxuICB0b2dnbGUtaW5mby1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgdG9nZ2xlLWluZm8tZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2dnbGUtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9nZ2xlLXdhcm5pbmctY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9nZ2xlLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cyxcbiAgdG9nZ2xlLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICB0b2dnbGUtd2FybmluZy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgdG9nZ2xlLXdhcm5pbmctaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIHRvZ2dsZS13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtd2FybmluZy1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2dnbGUtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHRvZ2dsZS1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLWRhbmdlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvZ2dsZS1kYW5nZXItY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cyxcbiAgdG9nZ2xlLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHRvZ2dsZS1kYW5nZXItZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWRhbmdlci1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgdG9nZ2xlLWRhbmdlci1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLWRhbmdlci1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICB0b2dnbGUtZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIHRvZ2dsZS1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHRvZ2dsZS1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgdG9nZ2xlLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtY29udHJvbC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHRvZ2dsZS1jb250cm9sLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHRvZ2dsZS1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cyxcbiAgdG9nZ2xlLWNvbnRyb2wtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRvZ2dsZS1jb250cm9sLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtY29udHJvbC1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICB0b2dnbGUtY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0b2dnbGUtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgZm9ybS1maWVsZC10aW55LW1heC13aWR0aDogaW5wdXQtdGlueS1tYXgtd2lkdGgsXG4gIGZvcm0tZmllbGQtc21hbGwtbWF4LXdpZHRoOiBpbnB1dC1zbWFsbC1tYXgtd2lkdGgsXG4gIGZvcm0tZmllbGQtbWVkaXVtLW1heC13aWR0aDogaW5wdXQtbWVkaXVtLW1heC13aWR0aCxcbiAgZm9ybS1maWVsZC1sYXJnZS1tYXgtd2lkdGg6IGlucHV0LWxhcmdlLW1heC13aWR0aCxcbiAgZm9ybS1maWVsZC1naWFudC1tYXgtd2lkdGg6IGlucHV0LWdpYW50LW1heC13aWR0aCxcblxuICBmb3JtLWZpZWxkLWFkZG9uLWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1iYXNpYy1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tcHJpbWFyeS10ZXh0LWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1wcmltYXJ5LWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1wcmltYXJ5LTYwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1zdWNjZXNzLXRleHQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLXN1Y2Nlc3MtaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLWluZm8tdGV4dC1jb2xvcjogY29sb3ItaW5mby01MDAsXG4gIGZvcm0tZmllbGQtYWRkb24taW5mby1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3ItaW5mby02MDAsXG4gIGZvcm0tZmllbGQtYWRkb24td2FybmluZy10ZXh0LWNvbG9yOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi13YXJuaW5nLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci13YXJuaW5nLTYwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1kYW5nZXItdGV4dC1jb2xvcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1kYW5nZXItaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLWRhbmdlci02MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGZvcm0tZmllbGQtYWRkb24tY29udHJvbC1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgZm9ybS1maWVsZC1hZGRvbi10aW55LWhlaWdodDogMS41cmVtLFxuICBmb3JtLWZpZWxkLWFkZG9uLXRpbnktd2lkdGg6IGZvcm0tZmllbGQtYWRkb24tdGlueS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tdGlueS1pY29uLXNpemU6IGJ1dHRvbi10aW55LWljb24tc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi10aW55LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tdGlueS1mb250LXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tdGlueS1saW5lLWhlaWdodDogdGV4dC1idXR0b24tdGlueS1saW5lLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi10aW55LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1oZWlnaHQ6IDJyZW0sXG4gIGZvcm0tZmllbGQtYWRkb24tc21hbGwtd2lkdGg6IGZvcm0tZmllbGQtYWRkb24tc21hbGwtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWljb24tc2l6ZTogYnV0dG9uLXNtYWxsLWljb24tc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tc21hbGwtbGluZS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tc21hbGwtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1oZWlnaHQ6IDIuNXJlbSxcbiAgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0td2lkdGg6IGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0taWNvbi1zaXplOiBidXR0b24tbWVkaXVtLWljb24tc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0tZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtaGVpZ2h0OiAzcmVtLFxuICBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLXdpZHRoOiBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1pY29uLXNpemU6IGJ1dHRvbi1sYXJnZS1pY29uLXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1sYXJnZS1mb250LXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLWxhcmdlLWxpbmUtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1naWFudC1oZWlnaHQ6IDMuNXJlbSxcbiAgZm9ybS1maWVsZC1hZGRvbi1naWFudC13aWR0aDogZm9ybS1maWVsZC1hZGRvbi1naWFudC1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtaWNvbi1zaXplOiBidXR0b24tZ2lhbnQtaWNvbi1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1naWFudC1saW5lLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1naWFudC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4pO1xuIiwiQGltcG9ydCAnLi4vLi4vdGhlbWVzL21hcHBpbmcnO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBmdW5jdGlvbiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKSB7XG5cbiAgQGlmIChsZW5ndGgoJG5iLWVuYWJsZWQtdGhlbWVzKSA9PSAwKSB7XG4gICAgQGVhY2ggJHRoZW1lLW5hbWUsICR0aGVtZSBpbiAkbmItdGhlbWVzIHtcbiAgICAgICRuYi1lbmFibGVkLXRoZW1lczogYXBwZW5kKCRuYi1lbmFibGVkLXRoZW1lcywgJHRoZW1lLW5hbWUpICFnbG9iYWw7XG4gICAgfVxuICB9XG4gIEByZXR1cm4gJG5iLWVuYWJsZWQtdGhlbWVzO1xufVxuXG5AZnVuY3Rpb24gZ2V0LWxhc3QtZW5hYmxlZC10aGVtZSgpIHtcbiAgJHRoZW1lczogbmItZ2V0LWVuYWJsZWQtdGhlbWVzKCk7XG4gIEByZXR1cm4gbnRoKCR0aGVtZXMsIGxlbmd0aCgkdGhlbWVzKSk7XG59XG5cbkBmdW5jdGlvbiBuYi1zZXQtZm9yLWV4cG9ydCgkdGhlbWUsICRuYW1lLCAkcGFyZW50LW5hbWU6IG51bGwpIHtcblxuICAkcGFyZW50LXRoZW1lOiBtYXAtZ2V0KCRuYi10aGVtZXMtZXhwb3J0LCAkcGFyZW50LW5hbWUpO1xuICBAaWYgKCRwYXJlbnQtdGhlbWUgIT0gbnVsbCkge1xuICAgICR0aGVtZTogbWFwLW1lcmdlKG1hcC1nZXQoJHBhcmVudC10aGVtZSwgZGF0YSksICR0aGVtZSk7XG4gIH1cblxuICAkdGhlbWUtZGF0YTogKFxuICAgIGRhdGE6ICR0aGVtZSxcbiAgICBwYXJlbnQ6ICRwYXJlbnQtbmFtZSxcbiAgKTtcbiAgQHJldHVybiBtYXAtc2V0KCRuYi10aGVtZXMtZXhwb3J0LCAkbmFtZSwgJHRoZW1lLWRhdGEpO1xufVxuXG5AZnVuY3Rpb24gbmItZ2V0LXJlZ2lzdGVyZWQtdGhlbWUoJG5hbWUpIHtcbiAgJHRoZW1lOiBtYXAtZ2V0KCRuYi10aGVtZXMsICRuYW1lKTtcblxuICAvLyBUT0RPOiBjaGVjayBpZiBvcHRpbWFsIHBsYWNlXG4gIEBpZiAoJHRoZW1lID09IG51bGwpIHtcbiAgICBAZXJyb3IgJ05lYnVsYXIgVGhlbWU6IHRoZW1lIGAnICsgJG5hbWUgKyAnYCBpcyBub3QgcmVnaXN0ZXJlZCB3aXRoIGBuYi1yZWdpc3Rlci10aGVtZWAgZnVuY3Rpb24uJztcbiAgfVxuXG4gIEByZXR1cm4gJHRoZW1lO1xufVxuXG4vLyBFbnRyeSBwb2ludFxuLy8gUmVnaXN0ZXJzIGEgbmV3IHRoZW1lXG5AZnVuY3Rpb24gbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCAkbmFtZSwgJHBhcmVudC1uYW1lOiBudWxsKSB7XG5cbiAgQGlmICgkbmItdGhlbWUtZXhwb3J0LW1vZGUgPT0gdHJ1ZSkge1xuICAgICRuYi10aGVtZXMtZXhwb3J0OiBuYi1zZXQtZm9yLWV4cG9ydCgkdGhlbWUsICRuYW1lLCAkcGFyZW50LW5hbWUpICFnbG9iYWw7XG4gIH1cblxuICAkdGhlbWUtZGF0YTogKCk7XG5cbiAgQGlmICgkcGFyZW50LW5hbWUgIT0gbnVsbCkge1xuICAgICRwYXJlbnQtdGhlbWU6IG1hcC1nZXQoJG5iLXRoZW1lcywgJHBhcmVudC1uYW1lKTtcbiAgICBAaWYgKCRwYXJlbnQtdGhlbWUgPT0gbnVsbCkge1xuICAgICAgQGVycm9yICdOZWJ1bGFyIFRoZW1lOiBwYXJlbnQgdGhlbWUgYCcgKyAkcGFyZW50LW5hbWUgKyAnYCBpcyBub3QgcmVnaXN0ZXJlZCBvciBpbXBvcnRlZC4nO1xuICAgIH1cbiAgICAkdGhlbWU6IG1hcC1tZXJnZSgkcGFyZW50LXRoZW1lLCAkdGhlbWUpO1xuICB9XG4gICR0aGVtZTogbWFwLW1lcmdlKCRldmEtbWFwcGluZywgJHRoZW1lKTtcbiAgJG5iLXRoZW1lczogbWFwLXNldCgkbmItdGhlbWVzLCAkbmFtZSwgJHRoZW1lKSAhZ2xvYmFsO1xuXG4gIEByZXR1cm4gJG5iLXRoZW1lcztcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLWZvci10aGVtZSgkbmFtZSkge1xuICBAaWYgKCRuYi10aGVtZS1uYW1lID09ICRuYW1lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWZvci10aGVtZXMoJG5hbWVzLi4uKSB7XG4gIEBlYWNoICRuYW1lIGluICRuYW1lcyB7XG4gICAgQGluY2x1ZGUgbmItZm9yLXRoZW1lKCRuYW1lKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG5iLWV4Y2VwdC10aGVtZSgkbmFtZSkge1xuICBAaWYgKCRuYi10aGVtZS1uYW1lICE9ICRuYW1lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWV4Y2VwdC1mb3ItdGhlbWVzKCRuYW1lcy4uLikge1xuICBAZWFjaCAkbmFtZSBpbiAkbmFtZXMge1xuICAgIEBpbmNsdWRlIG5iLWV4Y2VwdC10aGVtZSgkbmFtZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWNzcy1wcm9wZXJ0aWVzKCR0aGVtZS1uYW1lLCAkdGhlbWUpIHtcbiAgLm5iLXRoZW1lLSN7JHRoZW1lLW5hbWV9IHtcblxuICAgIEBlYWNoICR2YXIsICR2YWx1ZSBpbiAkdGhlbWUge1xuICAgICAgQGlmICh0eXBlLW9mKCR2YWx1ZSkgPT0gJ3N0cmluZycgYW5kIG1hcC1nZXQoJHRoZW1lLCAkdmFsdWUpKSB7XG4gICAgICAgIC0tI3skdmFyfTogdmFyKC0tI3skdmFsdWV9KTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAtLSN7JHZhcn06ICN7JHZhbHVlfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG5iLXByZS1wcm9jZXNzLWNvbnRleHQoJHRoZW1lLW5hbWUpIHtcbiAgJG5iLXRoZW1lLXByb2Nlc3MtbW9kZTogJ3ByZS1wcm9jZXNzJyAhZ2xvYmFsO1xuXG4gICRuYi10aGVtZS1uYW1lOiAkdGhlbWUtbmFtZSAhZ2xvYmFsO1xuICAkbmItcHJvY2Vzc2VkLXRoZW1lOiBuYi1wcm9jZXNzLXRoZW1lKG5iLWdldC1yZWdpc3RlcmVkLXRoZW1lKCR0aGVtZS1uYW1lKSkgIWdsb2JhbDtcbn1cblxuQG1peGluIG5iLWxhenktcHJvY2Vzcy1jb250ZXh0KCR0aGVtZS1uYW1lKSB7XG4gICRuYi10aGVtZS1wcm9jZXNzLW1vZGU6ICdsYXp5LXByb2Nlc3MnICFnbG9iYWw7XG5cbiAgJG5iLXRoZW1lLW5hbWU6ICR0aGVtZS1uYW1lICFnbG9iYWw7XG4gICRuYi1wcm9jZXNzZWQtdGhlbWU6ICgpICFnbG9iYWw7XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWNvbXBvbmVudC13aXRoLWNzcy1wcm9wcygpIHtcbiAgLy8gQGJyZWFraW5nLWNoYW5nZSA1LjAuMFxuICA6aG9zdCB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWluc3RhbGwtY29tcG9uZW50LXdpdGgtc2Nzcy12YXJzKCkge1xuICAkZW5hYmxlZC10aGVtZXM6IG5iLWdldC1lbmFibGVkLXRoZW1lcygpO1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lIGluICRlbmFibGVkLXRoZW1lcyB7XG5cbiAgICBAaW5jbHVkZSBuYi1sYXp5LXByb2Nlc3MtY29udGV4dCgkdGhlbWUtbmFtZSk7XG5cbiAgICAvKlxuICAgICAgOmhvc3QgY2FuIGJlIHByZWZpeGVkXG4gICAgICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvOGQwZWUzNDkzOWYxNGMwNzg3NmQyMjJjMjViNDA1ZWQ0NThhMzRkMy9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxXG5cbiAgICAgIFdlIGhhdmUgdG8gdXNlIDpob3N0IGluc3RlYWQgb2YgOmhvc3QtY29udGV4dCgkdGhlbWUpLCB0byBiZSBhYmxlIHRvIHByZWZpeCB0aGVtZSBjbGFzc1xuICAgICAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICAgICAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgICAgIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgICAgIC5zb21lLXNlbGVjdG9yIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuLi5cbiAgICAgICAgfVxuXG4gICAgICBJdCBkb2Vzbid0IHdvcmsgd2l0aCA6aG9zdC1jb250ZXh0IGJlY2F1c2UgYW5ndWxhciBzcGxpdHRpbmcgaXQgaW4gdHdvIHNlbGVjdG9ycyBhbmQgcmVtb3Zlc1xuICAgICAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuICAgICovXG4gICAgLm5iLXRoZW1lLSN7JHRoZW1lLW5hbWV9IDpob3N0IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBFbnRyeSBwb2ludFxuLy8gSW5zdGFsbHMgY29tcG9uZW50IHN0eWxlcyBiYXNlZCBvbiByZWdpc3RlcmVkIHRoZW1lc1xuLy8gVE9ETzogd2UgaGlkZSA6aG9zdCBpbnNpZGUgb2YgaXQgd2hpY2ggaXMgbm90IG9idmlvdXNcbkBtaXhpbiBuYi1pbnN0YWxsLWNvbXBvbmVudCgpIHtcblxuICBAaWYgKCRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzKSB7XG5cbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudC13aXRoLWNzcy1wcm9wcygpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cblxuICB9IEBlbHNlIHtcblxuICAgIEBpbmNsdWRlIG5iLWluc3RhbGwtY29tcG9uZW50LXdpdGgtc2Nzcy12YXJzKCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWdsb2JhbC13aXRoLWNzcy1wcm9wcygpIHtcbiAgQGNvbnRlbnQ7XG5cbiAgQGVhY2ggJHRoZW1lLW5hbWUgaW4gbmItZ2V0LWVuYWJsZWQtdGhlbWVzKCkge1xuICAgIEBpbmNsdWRlIG5iLWluc3RhbGwtY3NzLXByb3BlcnRpZXMoJHRoZW1lLW5hbWUsIG5iLWdldC1yZWdpc3RlcmVkLXRoZW1lKCR0aGVtZS1uYW1lKSk7XG4gIH1cbn1cblxuQG1peGluIG5iLWluc3RhbGwtZ2xvYmFsLXdpdGgtc2Nzcy12YXJzKCkge1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lIGluIG5iLWdldC1lbmFibGVkLXRoZW1lcygpIHtcbiAgICBAaW5jbHVkZSBuYi1wcmUtcHJvY2Vzcy1jb250ZXh0KCR0aGVtZS1uYW1lKTtcblxuICAgIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gRW50cnkgcG9pbnRcbi8vIEluc3RhbGxzIGdsb2JhbCBzdHlsZXMgYmFzZWQgb24gcmVnaXN0ZXJlZCB0aGVtZXNcbkBtaXhpbiBuYi1pbnN0YWxsKCkge1xuICBAaWYgKCRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzKSB7XG4gICAgQGluY2x1ZGUgbmItaW5zdGFsbC1nbG9iYWwtd2l0aC1jc3MtcHJvcHMoKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG5iLWluc3RhbGwtZ2xvYmFsLXdpdGgtc2Nzcy12YXJzKCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBmdW5jdGlvbiBuYi1kZWVwLWZpbmQtdmFsdWUoJHRoZW1lLCAka2V5LCAkdmFsdWUpIHtcbiAgJHBhcmVudC12YWx1ZTogbWFwLWdldCgkdGhlbWUsICR2YWx1ZSk7XG5cbiAgQGlmICgkcGFyZW50LXZhbHVlICE9IG51bGwpIHtcbiAgICBAcmV0dXJuIG5iLWRlZXAtZmluZC12YWx1ZSgkdGhlbWUsICR2YWx1ZSwgJHBhcmVudC12YWx1ZSk7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZTtcbn1cblxuQGZ1bmN0aW9uIG5iLXByb2Nlc3MtdGhlbWUoJHRoZW1lKSB7XG4gICRwcm9jZXNzZWQtdGhlbWU6ICgpO1xuICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJHRoZW1lIHtcbiAgICAkcHJvY2Vzc2VkLXRoZW1lOiBtYXAtc2V0KCRwcm9jZXNzZWQtdGhlbWUsICRrZXksIG5iLWRlZXAtZmluZC12YWx1ZSgkdGhlbWUsICRrZXksICR2YWx1ZSkpO1xuICB9XG4gIEByZXR1cm4gJHByb2Nlc3NlZC10aGVtZTtcbn1cblxuQGZ1bmN0aW9uIGdldC1jdXJyZW50LXRoZW1lLW5hbWUoKSB7XG4gIEBpZiAoJG5iLXRoZW1lLW5hbWUgIT0gbnVsbCkge1xuICAgIEByZXR1cm4gJG5iLXRoZW1lLW5hbWU7XG4gIH1cblxuICBAcmV0dXJuIGdldC1sYXN0LWVuYWJsZWQtdGhlbWUoKTtcbn1cblxuQGZ1bmN0aW9uIG5iLXRoZW1lKCRrZXkpIHtcblxuICAkdmFsdWU6ICgpO1xuXG4gIC8vIGluIGNhc2Ugb2YgY3NzIGN1c3RvbSBwcm9wZXJ0aWVzIC0ganVzdCByZXR1cm5zIHZhcigtLXZhci1uYW1lKSAtIHRoZSByZXN0IGlzIGEgYnJvd3NlciBqb2JcbiAgQGlmICgkbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllcyA9PSB0cnVlKSB7XG4gICAgLy8gdGhlcmUgaXMgbm8gd2F5IHRvIGNoZWNrIGlmIHZhcmlhYmxlIGV4aXN0cyBhcyBjdXJyZW50IGV4ZWN1dGlvbiBjb250ZXh0IGlzIG91dHNpZGUgb2YgcGFydGljdWxhciB0aGVtZVxuICAgIC8vIGJlY2F1c2Ugd2UgcHJvY2VzcyBjc3MgaW4gdGhpcyBtb2RlIG9ubHkgb25jZSEgKGFuZCBub3QgZm9yIGVhY2ggdGhlbWUpXG4gICAgJHZhbHVlOiB2YXIoLS0jeyRrZXl9KTtcbiAgfSBAZWxzZSB7XG4gICAgLy8gaW4gYSBwcmVwcm9jZXNzIG1vZGUgKG5iLWluc3RhbGwtZ2xvYmFsIGNhbGwpIGdldCByZWFkeSB2YWx1ZSBmcm9tICRuYi1wcm9jZXNzZWQtdGhlbWUgdmFyaWFibGVcbiAgICBAaWYgKCRuYi10aGVtZS1wcm9jZXNzLW1vZGUgPT0gJ3ByZS1wcm9jZXNzJykge1xuICAgICAgJHZhbHVlOiBtYXAtZ2V0KCRuYi1wcm9jZXNzZWQtdGhlbWUsICRrZXkpO1xuICAgIH1cblxuICAgIC8vIG90aGVyd2lzZSBsYXppbHkgc2VhcmNoIGZvciB2YXJpYWJsZSB2YWx1ZVxuICAgIEBpZiAoJG5iLXRoZW1lLXByb2Nlc3MtbW9kZSA9PSAnbGF6eS1wcm9jZXNzJykge1xuXG4gICAgICAkbmItdGhlbWUtbmFtZTogZ2V0LWN1cnJlbnQtdGhlbWUtbmFtZSgpO1xuXG4gICAgICAkdGhlbWU6IG5iLWdldC1yZWdpc3RlcmVkLXRoZW1lKCRuYi10aGVtZS1uYW1lKTtcbiAgICAgICR2YWx1ZTogbmItZGVlcC1maW5kLXZhbHVlKCR0aGVtZSwgJGtleSwgbWFwLWdldCgkdGhlbWUsICRrZXkpKTtcbiAgICB9XG4gIH1cblxuICBAaWYgKCR2YWx1ZSA9PSBudWxsKSB7XG4gICAgQHdhcm4gJ05lYnVsYXIgVGhlbWU6IGBuYi10aGVtZSgpYCBjYW5ub3QgZmluZCB2YWx1ZSBmb3Iga2V5IGAnICsgJGtleSArICdgIGZvciB0aGVtZSBgJysgJG5iLXRoZW1lLW5hbWUgKydgJztcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5cbiR0aGVtZTogKFxuXG4gIC8qKlxuICAgKiBTYXNzIG1hcCBjb250YWlucyBhIGxpc3Qgb2YgYWxsIFRoZW1lIHZhcmlhYmxlcyBhbmQgYWxzbyB0aGVpciBtYXBwaW5ncyBpbnRvIENvbXBvbmVudCB2YXJpYWJsZXNcbiAgICogQSB0aGVtZSBjb25zaXN0cyBvZiBhIGxpc3Qgb2YgY29sb3JzLCBiYWNrZ3JvdW5kcywgYm9yZGVycywgdGV4dCBzdHlsZXMgYW5kIHN1cHBvcnRpbmcgdmFyaWFibGVzLlxuICAgKi9cblxuXG4gIC8qIFN0YXR1cyBjb2xvcnM6IHByaW1hcnksIHN1Y2Nlc3MsIGluZm8sIHdhcm5pbmcsIGRhbmdlciAtIGZvciBjb2xvcmVkIGVsZW1lbnRzIChidXR0b25zLCBldGMpICovXG5cbiAgY29sb3ItcHJpbWFyeS0xMDA6ICNmMmY2ZmYsXG4gIGNvbG9yLXByaW1hcnktMjAwOiAjZDllNGZmLFxuICBjb2xvci1wcmltYXJ5LTMwMDogI2E2YzFmZixcbiAgY29sb3ItcHJpbWFyeS00MDA6ICM1OThiZmYsXG4gIGNvbG9yLXByaW1hcnktNTAwOiAjMzM2NmZmLFxuICBjb2xvci1wcmltYXJ5LTYwMDogIzI3NGJkYixcbiAgY29sb3ItcHJpbWFyeS03MDA6ICMxYTM0YjgsXG4gIGNvbG9yLXByaW1hcnktODAwOiAjMTAyNjk0LFxuICBjb2xvci1wcmltYXJ5LTkwMDogIzA5MWM3YSxcblxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTEwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuMDgpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuMTYpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTMwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuMjQpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTQwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuMzIpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTUwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuNCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDUxLCAxMDIsIDI1NSwgMC40OCksXG5cbiAgY29sb3Itc3VjY2Vzcy0xMDA6ICNmMGZmZjUsXG4gIGNvbG9yLXN1Y2Nlc3MtMjAwOiAjY2NmY2UzLFxuICBjb2xvci1zdWNjZXNzLTMwMDogIzhjZmFjNyxcbiAgY29sb3Itc3VjY2Vzcy00MDA6ICMyY2U2OWIsXG4gIGNvbG9yLXN1Y2Nlc3MtNTAwOiAjMDBkNjhmLFxuICBjb2xvci1zdWNjZXNzLTYwMDogIzAwYjg4NyxcbiAgY29sb3Itc3VjY2Vzcy03MDA6ICMwMDk5N2EsXG4gIGNvbG9yLXN1Y2Nlc3MtODAwOiAjMDA3ZDZjLFxuICBjb2xvci1zdWNjZXNzLTkwMDogIzAwNGE0NSxcblxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTEwMDogcmdiYSgwLCAyMTQsIDE0MywgMC4wOCksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjE2KSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuMjQpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTQwMDogcmdiYSgwLCAyMTQsIDE0MywgMC4zMiksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjQpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTYwMDogcmdiYSgwLCAyMTQsIDE0MywgMC40OCksXG5cbiAgY29sb3ItaW5mby0xMDA6ICNmMmY4ZmYsXG4gIGNvbG9yLWluZm8tMjAwOiAjYzdlMmZmLFxuICBjb2xvci1pbmZvLTMwMDogIzk0Y2JmZixcbiAgY29sb3ItaW5mby00MDA6ICM0MmFhZmYsXG4gIGNvbG9yLWluZm8tNTAwOiAjMDA5NWZmLFxuICBjb2xvci1pbmZvLTYwMDogIzAwNmZkNixcbiAgY29sb3ItaW5mby03MDA6ICMwMDU3YzIsXG4gIGNvbG9yLWluZm8tODAwOiAjMDA0MWE4LFxuICBjb2xvci1pbmZvLTkwMDogIzAwMjg4NSxcblxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTEwMDogcmdiYSgwLCAxNDksIDI1NSwgMC4wOCksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjE2KSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC0zMDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuMjQpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTQwMDogcmdiYSgwLCAxNDksIDI1NSwgMC4zMiksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjQpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTYwMDogcmdiYSgwLCAxNDksIDI1NSwgMC40OCksXG5cbiAgY29sb3Itd2FybmluZy0xMDA6ICNmZmZkZjIsXG4gIGNvbG9yLXdhcm5pbmctMjAwOiAjZmZmMWMyLFxuICBjb2xvci13YXJuaW5nLTMwMDogI2ZmZTU5ZSxcbiAgY29sb3Itd2FybmluZy00MDA6ICNmZmM5NGQsXG4gIGNvbG9yLXdhcm5pbmctNTAwOiAjZmZhYTAwLFxuICBjb2xvci13YXJuaW5nLTYwMDogI2RiOGIwMCxcbiAgY29sb3Itd2FybmluZy03MDA6ICNiODZlMDAsXG4gIGNvbG9yLXdhcm5pbmctODAwOiAjOTQ1NDAwLFxuICBjb2xvci13YXJuaW5nLTkwMDogIzcwM2MwMCxcblxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTEwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC4wOCksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjE2KSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuMjQpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTQwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC4zMiksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjQpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTYwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC40OCksXG5cbiAgY29sb3ItZGFuZ2VyLTEwMDogI2ZmZjJmMixcbiAgY29sb3ItZGFuZ2VyLTIwMDogI2ZmZDZkOSxcbiAgY29sb3ItZGFuZ2VyLTMwMDogI2ZmYThiNCxcbiAgY29sb3ItZGFuZ2VyLTQwMDogI2ZmNzA4ZCxcbiAgY29sb3ItZGFuZ2VyLTUwMDogI2ZmM2Q3MSxcbiAgY29sb3ItZGFuZ2VyLTYwMDogI2RiMmM2NixcbiAgY29sb3ItZGFuZ2VyLTcwMDogI2I4MWQ1YixcbiAgY29sb3ItZGFuZ2VyLTgwMDogIzk0MTI0ZSxcbiAgY29sb3ItZGFuZ2VyLTkwMDogIzcwMDk0MCxcblxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC4wOCksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjE2KSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTMwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuMjQpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC4zMiksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC01MDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjQpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC40OCksXG5cbiAgLyogQmFzaWMgY29sb3JzIC0gZm9yIGJhY2tncm91bmRzIGFuZCBib3JkZXJzIGFuZCB0ZXh0cyAqL1xuXG4gIGNvbG9yLWJhc2ljLTEwMDogI2ZmZmZmZixcbiAgY29sb3ItYmFzaWMtMjAwOiAjZjdmOWZjLFxuICBjb2xvci1iYXNpYy0zMDA6ICNlZGYxZjcsXG4gIGNvbG9yLWJhc2ljLTQwMDogI2U0ZTlmMixcbiAgY29sb3ItYmFzaWMtNTAwOiAjYzVjZWUwLFxuICBjb2xvci1iYXNpYy02MDA6ICM4ZjliYjMsXG4gIGNvbG9yLWJhc2ljLTcwMDogIzJlM2E1OSxcbiAgY29sb3ItYmFzaWMtODAwOiAjMjIyYjQ1LFxuICBjb2xvci1iYXNpYy05MDA6ICMxOTIwMzgsXG4gIGNvbG9yLWJhc2ljLTEwMDA6ICMxNTFhMzAsXG4gIGNvbG9yLWJhc2ljLTExMDA6ICMxMDE0MjYsXG5cbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuMDgpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC4xNiksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjI0KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuMzIpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC40KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuNDgpLFxuXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpLFxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTIwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzIpLFxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTYwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ4KSxcblxuICAvKiBTdGF0dXMgY29sb3JzIHN0YXRlcyAtIGZvY3VzLCBob3ZlciwgZGVmYXVsdCwgYWN0aXZlLCBkaXNhYmxlZCAgKi9cblxuICBjb2xvci1iYXNpYy1mb2N1czogY29sb3ItYmFzaWMtNDAwLFxuICBjb2xvci1iYXNpYy1ob3ZlcjogY29sb3ItYmFzaWMtMjAwLFxuICBjb2xvci1iYXNpYy1kZWZhdWx0OiBjb2xvci1iYXNpYy0zMDAsXG4gIGNvbG9yLWJhc2ljLWFjdGl2ZTogY29sb3ItYmFzaWMtNDAwLFxuICBjb2xvci1iYXNpYy1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXI6IGNvbG9yLWJhc2ljLTUwMCxcbiAgY29sb3ItYmFzaWMtaG92ZXItYm9yZGVyOiBjb2xvci1iYXNpYy1ob3ZlcixcbiAgY29sb3ItYmFzaWMtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWJhc2ljLWRlZmF1bHQsXG4gIGNvbG9yLWJhc2ljLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWJhc2ljLWFjdGl2ZSxcbiAgY29sb3ItYmFzaWMtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcblxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1czogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLWJhc2ljLTYwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1iYXNpYy02MDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1iYXNpYy02MDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWJhc2ljLTYwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgY29sb3ItcHJpbWFyeS1mb2N1czogY29sb3ItcHJpbWFyeS02MDAsXG4gIGNvbG9yLXByaW1hcnktaG92ZXI6IGNvbG9yLXByaW1hcnktNDAwLFxuICBjb2xvci1wcmltYXJ5LWRlZmF1bHQ6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LWFjdGl2ZTogY29sb3ItcHJpbWFyeS02MDAsXG4gIGNvbG9yLXByaW1hcnktZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXI6IGNvbG9yLXByaW1hcnktNzAwLFxuICBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBjb2xvci1wcmltYXJ5LWRpc2FibGVkLWJvcmRlcjogY29sb3ItcHJpbWFyeS1kaXNhYmxlZCxcblxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgY29sb3Itc3VjY2Vzcy1mb2N1czogY29sb3Itc3VjY2Vzcy02MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtaG92ZXI6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxuICBjb2xvci1zdWNjZXNzLWRlZmF1bHQ6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBjb2xvci1zdWNjZXNzLWFjdGl2ZTogY29sb3Itc3VjY2Vzcy02MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNzAwLFxuICBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjb2xvci1zdWNjZXNzLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICBjb2xvci1zdWNjZXNzLWRpc2FibGVkLWJvcmRlcjogY29sb3Itc3VjY2Vzcy1kaXNhYmxlZCxcblxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgY29sb3ItaW5mby1mb2N1czogY29sb3ItaW5mby02MDAsXG4gIGNvbG9yLWluZm8taG92ZXI6IGNvbG9yLWluZm8tNDAwLFxuICBjb2xvci1pbmZvLWRlZmF1bHQ6IGNvbG9yLWluZm8tNTAwLFxuICBjb2xvci1pbmZvLWFjdGl2ZTogY29sb3ItaW5mby02MDAsXG4gIGNvbG9yLWluZm8tZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItaW5mby1mb2N1cy1ib3JkZXI6IGNvbG9yLWluZm8tNzAwLFxuICBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcjogY29sb3ItaW5mby1ob3ZlcixcbiAgY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWluZm8tYWN0aXZlLFxuICBjb2xvci1pbmZvLWRpc2FibGVkLWJvcmRlcjogY29sb3ItaW5mby1kaXNhYmxlZCxcblxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItaW5mby10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItaW5mby10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItaW5mby01MDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1pbmZvLTUwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItaW5mby01MDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItaW5mby01MDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgY29sb3Itd2FybmluZy1mb2N1czogY29sb3Itd2FybmluZy02MDAsXG4gIGNvbG9yLXdhcm5pbmctaG92ZXI6IGNvbG9yLXdhcm5pbmctNDAwLFxuICBjb2xvci13YXJuaW5nLWRlZmF1bHQ6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLWFjdGl2ZTogY29sb3Itd2FybmluZy02MDAsXG4gIGNvbG9yLXdhcm5pbmctZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNzAwLFxuICBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjb2xvci13YXJuaW5nLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICBjb2xvci13YXJuaW5nLWRpc2FibGVkLWJvcmRlcjogY29sb3Itd2FybmluZy1kaXNhYmxlZCxcblxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3ZlcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgY29sb3ItZGFuZ2VyLWZvY3VzOiBjb2xvci1kYW5nZXItNjAwLFxuICBjb2xvci1kYW5nZXItaG92ZXI6IGNvbG9yLWRhbmdlci00MDAsXG4gIGNvbG9yLWRhbmdlci1kZWZhdWx0OiBjb2xvci1kYW5nZXItNTAwLFxuICBjb2xvci1kYW5nZXItYWN0aXZlOiBjb2xvci1kYW5nZXItNjAwLFxuICBjb2xvci1kYW5nZXItZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcjogY29sb3ItZGFuZ2VyLTcwMCxcbiAgY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBjb2xvci1kYW5nZXItYWN0aXZlLWJvcmRlcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgY29sb3ItZGFuZ2VyLWRpc2FibGVkLWJvcmRlcjogY29sb3ItZGFuZ2VyLWRpc2FibGVkLFxuXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1czogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci1jb250cm9sLWZvY3VzOiBjb2xvci1iYXNpYy0zMDAsXG4gIGNvbG9yLWNvbnRyb2wtaG92ZXI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgY29sb3ItY29udHJvbC1kZWZhdWx0OiBjb2xvci1iYXNpYy0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtYWN0aXZlOiBjb2xvci1iYXNpYy0zMDAsXG4gIGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXI6IGNvbG9yLWJhc2ljLTUwMCxcbiAgY29sb3ItY29udHJvbC1ob3Zlci1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgY29sb3ItY29udHJvbC1hY3RpdmUtYm9yZGVyOiBjb2xvci1jb250cm9sLWFjdGl2ZSxcbiAgY29sb3ItY29udHJvbC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQsXG5cbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1czogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLWJhc2ljLTEwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWJhc2ljLTEwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWJhc2ljLTEwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICAvKiBCYWNrZ3JvdW5kcyBhbmQgYm9yZGVycyAtIGJhc2ljLCBhbHRlcm5hdGl2ZSBhbmQgcHJpbWFyeSAgKi9cblxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy0yMDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMzogY29sb3ItYmFzaWMtMzAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCxcblxuICBib3JkZXItYmFzaWMtY29sb3ItMTogY29sb3ItYmFzaWMtMTAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItMzogY29sb3ItYmFzaWMtMzAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItNDogY29sb3ItYmFzaWMtNDAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItNTogY29sb3ItYmFzaWMtNTAwLFxuXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMTogY29sb3ItYmFzaWMtODAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTkwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTExMDAsXG5cbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTkwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTEwMDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItNTogY29sb3ItYmFzaWMtMTEwMCxcblxuICBiYWNrZ3JvdW5kLXByaW1hcnktY29sb3ItMTogY29sb3ItcHJpbWFyeS01MDAsXG4gIGJhY2tncm91bmQtcHJpbWFyeS1jb2xvci0yOiBjb2xvci1wcmltYXJ5LTYwMCxcbiAgYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yLTM6IGNvbG9yLXByaW1hcnktNzAwLFxuICBiYWNrZ3JvdW5kLXByaW1hcnktY29sb3ItNDogY29sb3ItcHJpbWFyeS04MDAsXG5cbiAgYm9yZGVyLXByaW1hcnktY29sb3ItMTogY29sb3ItYmFzaWMtNTAwLFxuICBib3JkZXItcHJpbWFyeS1jb2xvci0yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTM6IGNvbG9yLWJhc2ljLTcwMCxcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItNDogY29sb3ItYmFzaWMtODAwLFxuICBib3JkZXItcHJpbWFyeS1jb2xvci01OiBjb2xvci1iYXNpYy05MDAsXG5cbiAgLyogVGV4dCBjb2xvcnMgLSBnZW5lcmFsIGFuZCBzdGF0dXMgKi9cblxuICB0ZXh0LWJhc2ljLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHRleHQtYWx0ZXJuYXRlLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHRleHQtY29udHJvbC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0ZXh0LWRpc2FibGVkLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHRleHQtaGludC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuXG4gIHRleHQtcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0ZXh0LXByaW1hcnktZm9jdXMtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgdGV4dC1wcmltYXJ5LWFjdGl2ZS1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIHRleHQtcHJpbWFyeS1kaXNhYmxlZC1jb2xvcjogY29sb3ItcHJpbWFyeS00MDAsXG5cbiAgdGV4dC1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRleHQtc3VjY2Vzcy1mb2N1cy1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgdGV4dC1zdWNjZXNzLWhvdmVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICB0ZXh0LXN1Y2Nlc3MtYWN0aXZlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgdGV4dC1zdWNjZXNzLWRpc2FibGVkLWNvbG9yOiBjb2xvci1zdWNjZXNzLTQwMCxcblxuICB0ZXh0LWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdGV4dC1pbmZvLWZvY3VzLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICB0ZXh0LWluZm8taG92ZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHRleHQtaW5mby1hY3RpdmUtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxuICB0ZXh0LWluZm8tZGlzYWJsZWQtY29sb3I6IGNvbG9yLWluZm8tNDAwLFxuXG4gIHRleHQtd2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0ZXh0LXdhcm5pbmctZm9jdXMtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHRleHQtd2FybmluZy1ob3Zlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgdGV4dC13YXJuaW5nLWFjdGl2ZS1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIHRleHQtd2FybmluZy1kaXNhYmxlZC1jb2xvcjogY29sb3Itd2FybmluZy00MDAsXG5cbiAgdGV4dC1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0ZXh0LWRhbmdlci1mb2N1cy1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICB0ZXh0LWRhbmdlci1ob3Zlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICB0ZXh0LWRhbmdlci1hY3RpdmUtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIHRleHQtZGFuZ2VyLWRpc2FibGVkLWNvbG9yOiBjb2xvci1kYW5nZXItNDAwLFxuXG4gIC8qIEZvbnRzIGFuZCB0ZXh0IHN0eWxlcyAtIGhlYWRpbmdzLCBzdWJ0aXRsZXMsIHBhcmFncmFwaHMsIGNhcHRpb25zLCBidXR0b24gKi9cblxuICBmb250LWZhbWlseS1wcmltYXJ5OiB1bnF1b3RlKCdPcGVuIFNhbnMsIHNhbnMtc2VyaWYnKSxcbiAgZm9udC1mYW1pbHktc2Vjb25kYXJ5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuXG4gIHRleHQtaGVhZGluZy0xLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy0xLWZvbnQtc2l6ZTogMi4yNXJlbSxcbiAgdGV4dC1oZWFkaW5nLTEtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTEtbGluZS1oZWlnaHQ6IDNyZW0sXG5cbiAgdGV4dC1oZWFkaW5nLTItZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXNlY29uZGFyeSxcbiAgdGV4dC1oZWFkaW5nLTItZm9udC1zaXplOiAycmVtLFxuICB0ZXh0LWhlYWRpbmctMi1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctMi1saW5lLWhlaWdodDogMi41cmVtLFxuXG4gIHRleHQtaGVhZGluZy0zLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy0zLWZvbnQtc2l6ZTogMS44NzVyZW0sXG4gIHRleHQtaGVhZGluZy0zLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy0zLWxpbmUtaGVpZ2h0OiAyLjVyZW0sXG5cbiAgdGV4dC1oZWFkaW5nLTQtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXNlY29uZGFyeSxcbiAgdGV4dC1oZWFkaW5nLTQtZm9udC1zaXplOiAxLjYyNXJlbSxcbiAgdGV4dC1oZWFkaW5nLTQtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTQtbGluZS1oZWlnaHQ6IDJyZW0sXG5cbiAgdGV4dC1oZWFkaW5nLTUtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXNlY29uZGFyeSxcbiAgdGV4dC1oZWFkaW5nLTUtZm9udC1zaXplOiAxLjM3NXJlbSxcbiAgdGV4dC1oZWFkaW5nLTUtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTUtbGluZS1oZWlnaHQ6IDJyZW0sXG5cbiAgdGV4dC1oZWFkaW5nLTYtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXNlY29uZGFyeSxcbiAgdGV4dC1oZWFkaW5nLTYtZm9udC1zaXplOiAxLjEyNXJlbSxcbiAgdGV4dC1oZWFkaW5nLTYtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQ6IDEuNXJlbSxcblxuICB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZTogMC45Mzc1cmVtLFxuICB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0OiA2MDAsXG4gIHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQ6IDEuNXJlbSxcblxuICB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtc3VidGl0bGUtMi1mb250LXNpemU6IDAuODEyNXJlbSxcbiAgdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0OiA2MDAsXG4gIHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodDogMS41cmVtLFxuXG4gIHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LXBhcmFncmFwaC1mb250LXNpemU6IDAuOTM3NXJlbSxcbiAgdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQ6IDQwMCxcbiAgdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQ6IDEuMjVyZW0sXG5cbiAgdGV4dC1wYXJhZ3JhcGgtMi1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1wYXJhZ3JhcGgtMi1mb250LXNpemU6IDAuODEyNXJlbSxcbiAgdGV4dC1wYXJhZ3JhcGgtMi1mb250LXdlaWdodDogNDAwLFxuICB0ZXh0LXBhcmFncmFwaC0yLWxpbmUtaGVpZ2h0OiAxLjEyNXJlbSxcblxuICB0ZXh0LWxhYmVsLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LWxhYmVsLWZvbnQtc2l6ZTogMC43NXJlbSxcbiAgdGV4dC1sYWJlbC1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWxhYmVsLWxpbmUtaGVpZ2h0OiAxcmVtLFxuXG4gIHRleHQtY2FwdGlvbi1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZTogMC43NXJlbSxcbiAgdGV4dC1jYXB0aW9uLWZvbnQtd2VpZ2h0OiA0MDAsXG4gIHRleHQtY2FwdGlvbi1saW5lLWhlaWdodDogMXJlbSxcblxuICB0ZXh0LWNhcHRpb24tMi1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1jYXB0aW9uLTItZm9udC1zaXplOiAwLjc1cmVtLFxuICB0ZXh0LWNhcHRpb24tMi1mb250LXdlaWdodDogNjAwLFxuICB0ZXh0LWNhcHRpb24tMi1saW5lLWhlaWdodDogMXJlbSxcblxuICB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1idXR0b24tZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1idXR0b24tdGlueS1mb250LXNpemU6IDAuNjI1cmVtLFxuICB0ZXh0LWJ1dHRvbi10aW55LWxpbmUtaGVpZ2h0OiAwLjc1cmVtLFxuICB0ZXh0LWJ1dHRvbi1zbWFsbC1mb250LXNpemU6IDAuNzVyZW0sXG4gIHRleHQtYnV0dG9uLXNtYWxsLWxpbmUtaGVpZ2h0OiAxcmVtLFxuICB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplOiAwLjg3NXJlbSxcbiAgdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0OiAxcmVtLFxuICB0ZXh0LWJ1dHRvbi1sYXJnZS1mb250LXNpemU6IDFyZW0sXG4gIHRleHQtYnV0dG9uLWxhcmdlLWxpbmUtaGVpZ2h0OiAxLjI1cmVtLFxuICB0ZXh0LWJ1dHRvbi1naWFudC1mb250LXNpemU6IDEuMTI1cmVtLFxuICB0ZXh0LWJ1dHRvbi1naWFudC1saW5lLWhlaWdodDogMS41cmVtLFxuXG4gIC8qIFN1cHBvcnRpbmcgdmFyaWFibGVzIC0gYm9yZGVyIHJhZGl1cywgb3V0bGluZSwgc2hhZG93LCBkaXZpZGVyICovXG5cbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSxcblxuICBvdXRsaW5lLXdpZHRoOiAwLjM3NXJlbSxcbiAgb3V0bGluZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuXG4gIHNjcm9sbGJhci1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci00LFxuICBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzY3JvbGxiYXItd2lkdGg6IDAuMzEyNXJlbSxcblxuICBzaGFkb3c6IDAgMC41cmVtIDFyZW0gMCByZ2JhKDQ0LCA1MSwgNzMsIDAuMSksXG5cbiAgZGl2aWRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIGRpdmlkZXItc3R5bGU6IHNvbGlkLFxuICBkaXZpZGVyLXdpZHRoOiAxcHgsXG4pO1xuXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGRlZmF1bHQpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5AaW1wb3J0ICdkZWZhdWx0JztcblxuJHRoZW1lOiAoXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMTogY29sb3ItYmFzaWMtODAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTkwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTExMDAsXG5cbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTkwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTEwMDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItNTogY29sb3ItYmFzaWMtMTEwMCxcblxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy0yMDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMzAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCxcblxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMTogY29sb3ItYmFzaWMtMTAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMzAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItNDogY29sb3ItYmFzaWMtNDAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItNTogY29sb3ItYmFzaWMtNTAwLFxuXG4gIHRleHQtYmFzaWMtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgdGV4dC1hbHRlcm5hdGUtY29sb3I6IGNvbG9yLWJhc2ljLTkwMCxcbiAgdGV4dC1kaXNhYmxlZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHNoYWRvdzogMCAwLjVyZW0gMXJlbSAwICMxYTFmMzMsXG4gIG91dGxpbmUtY29sb3I6IGNvbG9yLWJhc2ljLTcwMCxcbik7XG5cbi8vIHJlZ2lzdGVyIHRoZSB0aGVtZVxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBkYXJrLCBkZWZhdWx0KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGFyayc7XG5cbiR0aGVtZTogKFxuXG4gIGNvbG9yLXByaW1hcnktMTAwOiAjZmFmN2ZmLFxuICBjb2xvci1wcmltYXJ5LTIwMDogI2VjZTNmZixcbiAgY29sb3ItcHJpbWFyeS0zMDA6ICNkNWJmZmYsXG4gIGNvbG9yLXByaW1hcnktNDAwOiAjYjE4YWZmLFxuICBjb2xvci1wcmltYXJ5LTUwMDogI2ExNmVmZixcbiAgY29sb3ItcHJpbWFyeS02MDA6ICM3YjUxZGIsXG4gIGNvbG9yLXByaW1hcnktNzAwOiAjNWEzN2I4LFxuICBjb2xvci1wcmltYXJ5LTgwMDogIzNlMjQ5NCxcbiAgY29sb3ItcHJpbWFyeS05MDA6ICMyOTE1N2EsXG5cbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC4wOCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuMTYpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTMwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjI0KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC00MDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC4zMiksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuNCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuNDgpLFxuXG4gIGNvbG9yLWJhc2ljLTEwMDogI2ZmZmZmZixcbiAgY29sb3ItYmFzaWMtMjAwOiAjZjdmN2ZjLFxuICBjb2xvci1iYXNpYy0zMDA6ICNmMGYwZmEsXG4gIGNvbG9yLWJhc2ljLTQwMDogI2UxZTFmMixcbiAgY29sb3ItYmFzaWMtNTAwOiAjY2VjZWViLFxuICBjb2xvci1iYXNpYy02MDA6ICNiNGI0ZGIsXG4gIGNvbG9yLWJhc2ljLTcwMDogIzZhNmE5NCxcbiAgY29sb3ItYmFzaWMtODAwOiAjMzIzMjU5LFxuICBjb2xvci1iYXNpYy05MDA6ICMyNTI1NDcsXG4gIGNvbG9yLWJhc2ljLTEwMDA6ICMxYjFiMzgsXG4gIGNvbG9yLWJhc2ljLTExMDA6ICMxMzEzMmIsXG5cbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuMDgpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC4xNiksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjI0KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuMzIpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC40KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuNDgpLFxuKTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBjb3NtaWMsIGRhcmspO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5AaW1wb3J0ICdkZWZhdWx0JztcblxuJHRoZW1lOiAoXG4gIGJvcmRlci1yYWRpdXM6IDAuMTdyZW0sXG4gIHNoYWRvdzogbm9uZSxcblxuICBidXR0b24taGVyby1nbG93LXNpemU6IDAgMCAyMHB4IDAsXG5cbiAgY2FyZC1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2FyZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuXG4gIGNvbnRleHQtbWVudS1ib3JkZXItd2lkdGg6IDFweCxcbiAgY29udGV4dC1tZW51LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG5cbiAgdGFicy1zZWxlY3RlZDogY29sb3ItcHJpbWFyeS01MDAsXG4gIHRhYnMtc2VsZWN0ZWQtc2Vjb25kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcblxuICBwb3BvdmVyLWJvcmRlci13aWR0aDogMXB4LFxuICBwb3BvdmVyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG5cbiAgdGFic2V0LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHJvdXRlLXRhYnNldC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICB1c2VyLXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjaGVja2JveC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBtb2RhbC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuXG4gIHRhYnNldC1zaGFkb3c6IG5vbmUsXG4gIHJvdXRlLXRhYnNldC1zaGFkb3c6IG5vbmUsXG4gIGJ1dHRvbi1oZXJvLXNoYWRvdzogbm9uZSxcbiAgYWxlcnQtc2hhZG93OiBub25lLFxuICBhY2NvcmRpb24tc2hhZG93OiBub25lLFxuKTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBjb3Jwb3JhdGUsIGRlZmF1bHQpO1xuIiwiLy8gQG5lYnVsYXIgdGhlbWluZyBmcmFtZXdvcmtcbkBpbXBvcnQgJ35AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWluZyc7XG4vLyBAbmVidWxhciBvdXQgb2YgdGhlIGJveCB0aGVtZXNcbkBpbXBvcnQgJ35AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzJztcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoKFxuICBsYXlvdXQtcGFkZGluZy10b3A6IDIuMjVyZW0sXG5cbiAgbWVudS1pdGVtLWljb24tbWFyZ2luOiAwIDAuNXJlbSAwIDAsXG5cbiAgY2FyZC1oZWlnaHQtdGlueTogMTMuNXJlbSxcbiAgY2FyZC1oZWlnaHQtc21hbGw6IDIxLjE4NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LW1lZGl1bTogMjguODc1cmVtLFxuICBjYXJkLWhlaWdodC1sYXJnZTogMzYuNTYyNXJlbSxcbiAgY2FyZC1oZWlnaHQtZ2lhbnQ6IDQ0LjI1cmVtLFxuICBjYXJkLW1hcmdpbi1ib3R0b206IDEuODc1cmVtLFxuICBjYXJkLWhlYWRlci13aXRoLXNlbGVjdC1wYWRkaW5nLXRvcDogMC41cmVtLFxuICBjYXJkLWhlYWRlci13aXRoLXNlbGVjdC1wYWRkaW5nLWJvdHRvbTogMC41cmVtLFxuXG4gIHNlbGVjdC1taW4td2lkdGg6IDZyZW0sXG5cbiAgc2xpZGUtb3V0LWJhY2tncm91bmQ6ICNmN2Y5ZmMsXG4gIHNsaWRlLW91dC1zaGFkb3ctY29sb3I6IDAgNHB4IDE0cHggMCAjOGY5YmIzLFxuICBzbGlkZS1vdXQtc2hhZG93LWNvbG9yLXJ0bDogMCA0cHggMTRweCAwICM4ZjliYjMsXG4pLCBkZWZhdWx0LCBkZWZhdWx0KTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoKFxuICBsYXlvdXQtcGFkZGluZy10b3A6IDIuMjVyZW0sXG5cbiAgbWVudS1pdGVtLWljb24tbWFyZ2luOiAwIDAuNXJlbSAwIDAsXG5cbiAgY2FyZC1oZWlnaHQtdGlueTogMTMuNXJlbSxcbiAgY2FyZC1oZWlnaHQtc21hbGw6IDIxLjE4NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LW1lZGl1bTogMjguODc1cmVtLFxuICBjYXJkLWhlaWdodC1sYXJnZTogMzYuNTYyNXJlbSxcbiAgY2FyZC1oZWlnaHQtZ2lhbnQ6IDQ0LjI1cmVtLFxuICBjYXJkLW1hcmdpbi1ib3R0b206IDEuODc1cmVtLFxuICBjYXJkLWhlYWRlci13aXRoLXNlbGVjdC1wYWRkaW5nLXRvcDogMC41cmVtLFxuICBjYXJkLWhlYWRlci13aXRoLXNlbGVjdC1wYWRkaW5nLWJvdHRvbTogMC41cmVtLFxuXG4gIHNlbGVjdC1taW4td2lkdGg6IDZyZW0sXG5cbiAgc2xpZGUtb3V0LWJhY2tncm91bmQ6ICMyNTI1NDcsXG4gIHNsaWRlLW91dC1zaGFkb3ctY29sb3I6IDJweCAwIDNweCAjMjkxNTdhLFxuICBzbGlkZS1vdXQtc2hhZG93LWNvbG9yLXJ0bDogLTJweCAwIDNweCAjMjkxNTdhLFxuKSwgY29zbWljLCBjb3NtaWMpO1xuXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgoXG4gIGxheW91dC1wYWRkaW5nLXRvcDogMi4yNXJlbSxcblxuICBtZW51LWl0ZW0taWNvbi1tYXJnaW46IDAgMC41cmVtIDAgMCxcblxuICBjYXJkLWhlaWdodC10aW55OiAxMy41cmVtLFxuICBjYXJkLWhlaWdodC1zbWFsbDogMjEuMTg3NXJlbSxcbiAgY2FyZC1oZWlnaHQtbWVkaXVtOiAyOC44NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LWxhcmdlOiAzNi41NjI1cmVtLFxuICBjYXJkLWhlaWdodC1naWFudDogNDQuMjVyZW0sXG4gIGNhcmQtbWFyZ2luLWJvdHRvbTogMS44NzVyZW0sXG4gIGNhcmQtaGVhZGVyLXdpdGgtc2VsZWN0LXBhZGRpbmctdG9wOiAwLjVyZW0sXG4gIGNhcmQtaGVhZGVyLXdpdGgtc2VsZWN0LXBhZGRpbmctYm90dG9tOiAwLjVyZW0sXG5cbiAgc2VsZWN0LW1pbi13aWR0aDogNnJlbSxcblxuICBzbGlkZS1vdXQtYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2VkZjFmNyAwJSwgI2U0ZTlmMiAxMDAlKSxcbiAgc2xpZGUtb3V0LXNoYWRvdy1jb2xvcjogMCA0cHggMTRweCAwICM4ZjliYjMsXG4gIHNsaWRlLW91dC1zaGFkb3ctY29sb3ItcnRsOiAwIDRweCAxNHB4IDAgIzhmOWJiMyxcbiksIGNvcnBvcmF0ZSwgY29ycG9yYXRlKTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoKFxuICBsYXlvdXQtcGFkZGluZy10b3A6IDIuMjVyZW0sXG5cbiAgbWVudS1pdGVtLWljb24tbWFyZ2luOiAwIDAuNXJlbSAwIDAsXG5cbiAgY2FyZC1oZWlnaHQtdGlueTogMTMuNXJlbSxcbiAgY2FyZC1oZWlnaHQtc21hbGw6IDIxLjE4NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LW1lZGl1bTogMjguODc1cmVtLFxuICBjYXJkLWhlaWdodC1sYXJnZTogMzYuNTYyNXJlbSxcbiAgY2FyZC1oZWlnaHQtZ2lhbnQ6IDQ0LjI1cmVtLFxuICBjYXJkLW1hcmdpbi1ib3R0b206IDEuODc1cmVtLFxuICBjYXJkLWhlYWRlci13aXRoLXNlbGVjdC1wYWRkaW5nLXRvcDogMC41cmVtLFxuICBjYXJkLWhlYWRlci13aXRoLXNlbGVjdC1wYWRkaW5nLWJvdHRvbTogMC41cmVtLFxuXG4gIHNlbGVjdC1taW4td2lkdGg6IDZyZW0sXG5cbiAgc2xpZGUtb3V0LWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMyMjJiNDUgMCUsICMxNTFhMzAgMTAwJSksXG4gIHNsaWRlLW91dC1zaGFkb3ctY29sb3I6IDAgNHB4IDE0cHggMCAjOGY5YmIzLFxuICBzbGlkZS1vdXQtc2hhZG93LWNvbG9yLXJ0bDogMCA0cHggMTRweCAwICM4ZjliYjMsXG4pLCBkYXJrLCBkYXJrKTtcbiJdfQ== */"]
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](D3Component, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-d3',
                                styleUrls: ['./d3.component.scss'],
                                templateUrl: './d3.component.html'
                            }]
                        }], null, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/echarts/echarts-area-stack.component.ts":
                /*!**********************************************************************!*\
                  !*** ./src/app/pages/charts/echarts/echarts-area-stack.component.ts ***!
                  \**********************************************************************/

                /*! exports provided: EchartsAreaStackComponent */

                /***/
                function srcAppPagesChartsEchartsEchartsAreaStackComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "EchartsAreaStackComponent", function() {
                        return EchartsAreaStackComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! ngx-echarts */
                        "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");

                    var EchartsAreaStackComponent = /*#__PURE__*/ function() {
                        function EchartsAreaStackComponent(theme) {
                            _classCallCheck(this, EchartsAreaStackComponent);

                            this.theme = theme;
                            this.options = {};
                        }

                        _createClass(EchartsAreaStackComponent, [{
                            key: "ngAfterViewInit",
                            value: function ngAfterViewInit() {
                                var _this13 = this;

                                this.themeSubscription = this.theme.getJsTheme().subscribe(function(config) {
                                    var colors = config.variables;
                                    var echarts = config.variables.echarts;
                                    _this13.options = {
                                        backgroundColor: echarts.bg,
                                        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
                                        tooltip: {
                                            trigger: 'axis',
                                            axisPointer: {
                                                type: 'cross',
                                                label: {
                                                    backgroundColor: echarts.tooltipBackgroundColor
                                                }
                                            }
                                        },
                                        legend: {
                                            data: ['Mail marketing', 'Affiliate advertising', 'Video ad', 'Direct interview', 'Search engine'],
                                            textStyle: {
                                                color: echarts.textColor
                                            }
                                        },
                                        grid: {
                                            left: '3%',
                                            right: '4%',
                                            bottom: '3%',
                                            containLabel: true
                                        },
                                        xAxis: [{
                                            type: 'category',
                                            boundaryGap: false,
                                            data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                                            axisTick: {
                                                alignWithLabel: true
                                            },
                                            axisLine: {
                                                lineStyle: {
                                                    color: echarts.axisLineColor
                                                }
                                            },
                                            axisLabel: {
                                                textStyle: {
                                                    color: echarts.textColor
                                                }
                                            }
                                        }],
                                        yAxis: [{
                                            type: 'value',
                                            axisLine: {
                                                lineStyle: {
                                                    color: echarts.axisLineColor
                                                }
                                            },
                                            splitLine: {
                                                lineStyle: {
                                                    color: echarts.splitLineColor
                                                }
                                            },
                                            axisLabel: {
                                                textStyle: {
                                                    color: echarts.textColor
                                                }
                                            }
                                        }],
                                        series: [{
                                            name: 'Mail marketing',
                                            type: 'line',
                                            stack: 'Total amount',
                                            areaStyle: {
                                                normal: {
                                                    opacity: echarts.areaOpacity
                                                }
                                            },
                                            data: [120, 132, 101, 134, 90, 230, 210]
                                        }, {
                                            name: 'Affiliate advertising',
                                            type: 'line',
                                            stack: 'Total amount',
                                            areaStyle: {
                                                normal: {
                                                    opacity: echarts.areaOpacity
                                                }
                                            },
                                            data: [220, 182, 191, 234, 290, 330, 310]
                                        }, {
                                            name: 'Video ad',
                                            type: 'line',
                                            stack: 'Total amount',
                                            areaStyle: {
                                                normal: {
                                                    opacity: echarts.areaOpacity
                                                }
                                            },
                                            data: [150, 232, 201, 154, 190, 330, 410]
                                        }, {
                                            name: 'Direct interview',
                                            type: 'line',
                                            stack: 'Total amount',
                                            areaStyle: {
                                                normal: {
                                                    opacity: echarts.areaOpacity
                                                }
                                            },
                                            data: [320, 332, 301, 334, 390, 330, 320]
                                        }, {
                                            name: 'Search engine',
                                            type: 'line',
                                            stack: 'Total amount',
                                            label: {
                                                normal: {
                                                    show: true,
                                                    position: 'top',
                                                    textStyle: {
                                                        color: echarts.textColor
                                                    }
                                                }
                                            },
                                            areaStyle: {
                                                normal: {
                                                    opacity: echarts.areaOpacity
                                                }
                                            },
                                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                                        }]
                                    };
                                });
                            }
                        }, {
                            key: "ngOnDestroy",
                            value: function ngOnDestroy() {
                                this.themeSubscription.unsubscribe();
                            }
                        }]);

                        return EchartsAreaStackComponent;
                    }();

                    EchartsAreaStackComponent.ɵfac = function EchartsAreaStackComponent_Factory(t) {
                        return new(t || EchartsAreaStackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]));
                    };

                    EchartsAreaStackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: EchartsAreaStackComponent,
                        selectors: [
                            ["ngx-echarts-area-stack"]
                        ],
                        decls: 1,
                        vars: 1,
                        consts: [
                            ["echarts", "", 1, "echart", 3, "options"]
                        ],
                        template: function EchartsAreaStackComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
                            }

                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
                            }
                        },
                        directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["ɵa"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EchartsAreaStackComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-echarts-area-stack',
                                template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  "
                            }]
                        }], function() {
                            return [{
                                type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]
                            }];
                        }, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/echarts/echarts-bar-animation.component.ts":
                /*!*************************************************************************!*\
                  !*** ./src/app/pages/charts/echarts/echarts-bar-animation.component.ts ***!
                  \*************************************************************************/

                /*! exports provided: EchartsBarAnimationComponent */

                /***/
                function srcAppPagesChartsEchartsEchartsBarAnimationComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "EchartsBarAnimationComponent", function() {
                        return EchartsBarAnimationComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! ngx-echarts */
                        "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");

                    var EchartsBarAnimationComponent = /*#__PURE__*/ function() {
                        function EchartsBarAnimationComponent(theme) {
                            _classCallCheck(this, EchartsBarAnimationComponent);

                            this.theme = theme;
                            this.options = {};
                        }

                        _createClass(EchartsBarAnimationComponent, [{
                            key: "ngAfterViewInit",
                            value: function ngAfterViewInit() {
                                var _this14 = this;

                                this.themeSubscription = this.theme.getJsTheme().subscribe(function(config) {
                                    var xAxisData = [];
                                    var data1 = [];
                                    var data2 = [];
                                    var colors = config.variables;
                                    var echarts = config.variables.echarts;
                                    _this14.options = {
                                        backgroundColor: echarts.bg,
                                        color: [colors.primaryLight, colors.infoLight],
                                        legend: {
                                            data: ['bar', 'bar2'],
                                            align: 'left',
                                            textStyle: {
                                                color: echarts.textColor
                                            }
                                        },
                                        xAxis: [{
                                            data: xAxisData,
                                            silent: false,
                                            axisTick: {
                                                alignWithLabel: true
                                            },
                                            axisLine: {
                                                lineStyle: {
                                                    color: echarts.axisLineColor
                                                }
                                            },
                                            axisLabel: {
                                                textStyle: {
                                                    color: echarts.textColor
                                                }
                                            }
                                        }],
                                        yAxis: [{
                                            axisLine: {
                                                lineStyle: {
                                                    color: echarts.axisLineColor
                                                }
                                            },
                                            splitLine: {
                                                lineStyle: {
                                                    color: echarts.splitLineColor
                                                }
                                            },
                                            axisLabel: {
                                                textStyle: {
                                                    color: echarts.textColor
                                                }
                                            }
                                        }],
                                        series: [{
                                            name: 'bar',
                                            type: 'bar',
                                            data: data1,
                                            animationDelay: function animationDelay(idx) {
                                                return idx * 10;
                                            }
                                        }, {
                                            name: 'bar2',
                                            type: 'bar',
                                            data: data2,
                                            animationDelay: function animationDelay(idx) {
                                                return idx * 10 + 100;
                                            }
                                        }],
                                        animationEasing: 'elasticOut',
                                        animationDelayUpdate: function animationDelayUpdate(idx) {
                                            return idx * 5;
                                        }
                                    };

                                    for (var i = 0; i < 100; i++) {
                                        xAxisData.push('Category ' + i);
                                        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
                                        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
                                    }
                                });
                            }
                        }, {
                            key: "ngOnDestroy",
                            value: function ngOnDestroy() {
                                this.themeSubscription.unsubscribe();
                            }
                        }]);

                        return EchartsBarAnimationComponent;
                    }();

                    EchartsBarAnimationComponent.ɵfac = function EchartsBarAnimationComponent_Factory(t) {
                        return new(t || EchartsBarAnimationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]));
                    };

                    EchartsBarAnimationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: EchartsBarAnimationComponent,
                        selectors: [
                            ["ngx-echarts-bar-animation"]
                        ],
                        decls: 1,
                        vars: 1,
                        consts: [
                            ["echarts", "", 1, "echart", 3, "options"]
                        ],
                        template: function EchartsBarAnimationComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
                            }

                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
                            }
                        },
                        directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["ɵa"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EchartsBarAnimationComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-echarts-bar-animation',
                                template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  "
                            }]
                        }], function() {
                            return [{
                                type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]
                            }];
                        }, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/echarts/echarts-bar.component.ts":
                /*!***************************************************************!*\
                  !*** ./src/app/pages/charts/echarts/echarts-bar.component.ts ***!
                  \***************************************************************/

                /*! exports provided: EchartsBarComponent */

                /***/
                function srcAppPagesChartsEchartsEchartsBarComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "EchartsBarComponent", function() {
                        return EchartsBarComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! ngx-echarts */
                        "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");

                    var EchartsBarComponent = /*#__PURE__*/ function() {
                        function EchartsBarComponent(theme) {
                            _classCallCheck(this, EchartsBarComponent);

                            this.theme = theme;
                            this.options = {};
                        }

                        _createClass(EchartsBarComponent, [{
                            key: "ngAfterViewInit",
                            value: function ngAfterViewInit() {
                                var _this15 = this;

                                this.themeSubscription = this.theme.getJsTheme().subscribe(function(config) {
                                    var colors = config.variables;
                                    var echarts = config.variables.echarts;
                                    _this15.options = {
                                        backgroundColor: echarts.bg,
                                        color: [colors.primaryLight],
                                        tooltip: {
                                            trigger: 'axis',
                                            axisPointer: {
                                                type: 'shadow'
                                            }
                                        },
                                        grid: {
                                            left: '3%',
                                            right: '4%',
                                            bottom: '3%',
                                            containLabel: true
                                        },
                                        xAxis: [{
                                            type: 'category',
                                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                            axisTick: {
                                                alignWithLabel: true
                                            },
                                            axisLine: {
                                                lineStyle: {
                                                    color: echarts.axisLineColor
                                                }
                                            },
                                            axisLabel: {
                                                textStyle: {
                                                    color: echarts.textColor
                                                }
                                            }
                                        }],
                                        yAxis: [{
                                            type: 'value',
                                            axisLine: {
                                                lineStyle: {
                                                    color: echarts.axisLineColor
                                                }
                                            },
                                            splitLine: {
                                                lineStyle: {
                                                    color: echarts.splitLineColor
                                                }
                                            },
                                            axisLabel: {
                                                textStyle: {
                                                    color: echarts.textColor
                                                }
                                            }
                                        }],
                                        series: [{
                                            name: 'Score',
                                            type: 'bar',
                                            barWidth: '60%',
                                            data: [10, 52, 200, 334, 390, 330, 220]
                                        }]
                                    };
                                });
                            }
                        }, {
                            key: "ngOnDestroy",
                            value: function ngOnDestroy() {
                                this.themeSubscription.unsubscribe();
                            }
                        }]);

                        return EchartsBarComponent;
                    }();

                    EchartsBarComponent.ɵfac = function EchartsBarComponent_Factory(t) {
                        return new(t || EchartsBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]));
                    };

                    EchartsBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: EchartsBarComponent,
                        selectors: [
                            ["ngx-echarts-bar"]
                        ],
                        decls: 1,
                        vars: 1,
                        consts: [
                            ["echarts", "", 1, "echart", 3, "options"]
                        ],
                        template: function EchartsBarComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
                            }

                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
                            }
                        },
                        directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["ɵa"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EchartsBarComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-echarts-bar',
                                template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  "
                            }]
                        }], function() {
                            return [{
                                type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]
                            }];
                        }, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/echarts/echarts-line.component.ts":
                /*!****************************************************************!*\
                  !*** ./src/app/pages/charts/echarts/echarts-line.component.ts ***!
                  \****************************************************************/

                /*! exports provided: EchartsLineComponent */

                /***/
                function srcAppPagesChartsEchartsEchartsLineComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "EchartsLineComponent", function() {
                        return EchartsLineComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! ngx-echarts */
                        "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");

                    var EchartsLineComponent = /*#__PURE__*/ function() {
                        function EchartsLineComponent(theme) {
                            _classCallCheck(this, EchartsLineComponent);

                            this.theme = theme;
                            this.options = {};
                        }

                        _createClass(EchartsLineComponent, [{
                            key: "ngAfterViewInit",
                            value: function ngAfterViewInit() {
                                var _this16 = this;

                                this.themeSubscription = this.theme.getJsTheme().subscribe(function(config) {
                                    var colors = config.variables;
                                    var echarts = config.variables.echarts;
                                    _this16.options = {
                                        backgroundColor: echarts.bg,
                                        color: [colors.danger, colors.primary, colors.info],
                                        tooltip: {
                                            trigger: 'item',
                                            formatter: '{a} <br/>{b} : {c}'
                                        },
                                        legend: {
                                            left: 'left',
                                            data: ['Line 1', 'Line 2', 'Line 3'],
                                            textStyle: {
                                                color: echarts.textColor
                                            }
                                        },
                                        xAxis: [{
                                            type: 'category',
                                            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                                            axisTick: {
                                                alignWithLabel: true
                                            },
                                            axisLine: {
                                                lineStyle: {
                                                    color: echarts.axisLineColor
                                                }
                                            },
                                            axisLabel: {
                                                textStyle: {
                                                    color: echarts.textColor
                                                }
                                            }
                                        }],
                                        yAxis: [{
                                            type: 'log',
                                            axisLine: {
                                                lineStyle: {
                                                    color: echarts.axisLineColor
                                                }
                                            },
                                            splitLine: {
                                                lineStyle: {
                                                    color: echarts.splitLineColor
                                                }
                                            },
                                            axisLabel: {
                                                textStyle: {
                                                    color: echarts.textColor
                                                }
                                            }
                                        }],
                                        grid: {
                                            left: '3%',
                                            right: '4%',
                                            bottom: '3%',
                                            containLabel: true
                                        },
                                        series: [{
                                            name: 'Line 1',
                                            type: 'line',
                                            data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
                                        }, {
                                            name: 'Line 2',
                                            type: 'line',
                                            data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
                                        }, {
                                            name: 'Line 3',
                                            type: 'line',
                                            data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512]
                                        }]
                                    };
                                });
                            }
                        }, {
                            key: "ngOnDestroy",
                            value: function ngOnDestroy() {
                                this.themeSubscription.unsubscribe();
                            }
                        }]);

                        return EchartsLineComponent;
                    }();

                    EchartsLineComponent.ɵfac = function EchartsLineComponent_Factory(t) {
                        return new(t || EchartsLineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]));
                    };

                    EchartsLineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: EchartsLineComponent,
                        selectors: [
                            ["ngx-echarts-line"]
                        ],
                        decls: 1,
                        vars: 1,
                        consts: [
                            ["echarts", "", 1, "echart", 3, "options"]
                        ],
                        template: function EchartsLineComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
                            }

                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
                            }
                        },
                        directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["ɵa"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EchartsLineComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-echarts-line',
                                template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  "
                            }]
                        }], function() {
                            return [{
                                type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]
                            }];
                        }, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/echarts/echarts-multiple-xaxis.component.ts":
                /*!**************************************************************************!*\
                  !*** ./src/app/pages/charts/echarts/echarts-multiple-xaxis.component.ts ***!
                  \**************************************************************************/

                /*! exports provided: EchartsMultipleXaxisComponent */

                /***/
                function srcAppPagesChartsEchartsEchartsMultipleXaxisComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "EchartsMultipleXaxisComponent", function() {
                        return EchartsMultipleXaxisComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! ngx-echarts */
                        "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");

                    var EchartsMultipleXaxisComponent = /*#__PURE__*/ function() {
                        function EchartsMultipleXaxisComponent(theme) {
                            _classCallCheck(this, EchartsMultipleXaxisComponent);

                            this.theme = theme;
                            this.options = {};
                        }

                        _createClass(EchartsMultipleXaxisComponent, [{
                            key: "ngAfterViewInit",
                            value: function ngAfterViewInit() {
                                var _this17 = this;

                                this.themeSubscription = this.theme.getJsTheme().subscribe(function(config) {
                                    var colors = config.variables;
                                    var echarts = config.variables.echarts;
                                    _this17.options = {
                                        backgroundColor: echarts.bg,
                                        color: [colors.success, colors.info],
                                        tooltip: {
                                            trigger: 'none',
                                            axisPointer: {
                                                type: 'cross'
                                            }
                                        },
                                        legend: {
                                            data: ['2015 Precipitation', '2016 Precipitation'],
                                            textStyle: {
                                                color: echarts.textColor
                                            }
                                        },
                                        grid: {
                                            top: 70,
                                            bottom: 50
                                        },
                                        xAxis: [{
                                            type: 'category',
                                            axisTick: {
                                                alignWithLabel: true
                                            },
                                            axisLine: {
                                                onZero: false,
                                                lineStyle: {
                                                    color: colors.info
                                                }
                                            },
                                            axisLabel: {
                                                textStyle: {
                                                    color: echarts.textColor
                                                }
                                            },
                                            axisPointer: {
                                                label: {
                                                    formatter: function formatter(params) {
                                                        return 'Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                                    }
                                                }
                                            },
                                            data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
                                        }, {
                                            type: 'category',
                                            axisTick: {
                                                alignWithLabel: true
                                            },
                                            axisLine: {
                                                onZero: false,
                                                lineStyle: {
                                                    color: colors.success
                                                }
                                            },
                                            axisLabel: {
                                                textStyle: {
                                                    color: echarts.textColor
                                                }
                                            },
                                            axisPointer: {
                                                label: {
                                                    formatter: function formatter(params) {
                                                        return 'Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                                    }
                                                }
                                            },
                                            data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
                                        }],
                                        yAxis: [{
                                            type: 'value',
                                            axisLine: {
                                                lineStyle: {
                                                    color: echarts.axisLineColor
                                                }
                                            },
                                            splitLine: {
                                                lineStyle: {
                                                    color: echarts.splitLineColor
                                                }
                                            },
                                            axisLabel: {
                                                textStyle: {
                                                    color: echarts.textColor
                                                }
                                            }
                                        }],
                                        series: [{
                                            name: '2015 Precipitation',
                                            type: 'line',
                                            xAxisIndex: 1,
                                            smooth: true,
                                            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                                        }, {
                                            name: '2016 Precipitation',
                                            type: 'line',
                                            smooth: true,
                                            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
                                        }]
                                    };
                                });
                            }
                        }, {
                            key: "ngOnDestroy",
                            value: function ngOnDestroy() {
                                this.themeSubscription.unsubscribe();
                            }
                        }]);

                        return EchartsMultipleXaxisComponent;
                    }();

                    EchartsMultipleXaxisComponent.ɵfac = function EchartsMultipleXaxisComponent_Factory(t) {
                        return new(t || EchartsMultipleXaxisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]));
                    };

                    EchartsMultipleXaxisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: EchartsMultipleXaxisComponent,
                        selectors: [
                            ["ngx-echarts-multiple-xaxis"]
                        ],
                        decls: 1,
                        vars: 1,
                        consts: [
                            ["echarts", "", 1, "echart", 3, "options"]
                        ],
                        template: function EchartsMultipleXaxisComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
                            }

                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
                            }
                        },
                        directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["ɵa"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EchartsMultipleXaxisComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-echarts-multiple-xaxis',
                                template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  "
                            }]
                        }], function() {
                            return [{
                                type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]
                            }];
                        }, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/echarts/echarts-pie.component.ts":
                /*!***************************************************************!*\
                  !*** ./src/app/pages/charts/echarts/echarts-pie.component.ts ***!
                  \***************************************************************/

                /*! exports provided: EchartsPieComponent */

                /***/
                function srcAppPagesChartsEchartsEchartsPieComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "EchartsPieComponent", function() {
                        return EchartsPieComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! ngx-echarts */
                        "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");

                    var EchartsPieComponent = /*#__PURE__*/ function() {
                        function EchartsPieComponent(theme) {
                            _classCallCheck(this, EchartsPieComponent);

                            this.theme = theme;
                            this.options = {};
                        }

                        _createClass(EchartsPieComponent, [{
                            key: "ngAfterViewInit",
                            value: function ngAfterViewInit() {
                                var _this18 = this;

                                this.themeSubscription = this.theme.getJsTheme().subscribe(function(config) {
                                    var colors = config.variables;
                                    var echarts = config.variables.echarts;
                                    _this18.options = {
                                        backgroundColor: echarts.bg,
                                        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
                                        tooltip: {
                                            trigger: 'item',
                                            formatter: '{a} <br/>{b} : {c} ({d}%)'
                                        },
                                        legend: {
                                            orient: 'vertical',
                                            left: 'left',
                                            data: ['USA', 'Germany', 'France', 'Canada', 'Russia'],
                                            textStyle: {
                                                color: echarts.textColor
                                            }
                                        },
                                        series: [{
                                            name: 'Countries',
                                            type: 'pie',
                                            radius: '80%',
                                            center: ['50%', '50%'],
                                            data: [{
                                                value: 335,
                                                name: 'Germany'
                                            }, {
                                                value: 310,
                                                name: 'France'
                                            }, {
                                                value: 234,
                                                name: 'Canada'
                                            }, {
                                                value: 135,
                                                name: 'Russia'
                                            }, {
                                                value: 1548,
                                                name: 'USA'
                                            }],
                                            itemStyle: {
                                                emphasis: {
                                                    shadowBlur: 10,
                                                    shadowOffsetX: 0,
                                                    shadowColor: echarts.itemHoverShadowColor
                                                }
                                            },
                                            label: {
                                                normal: {
                                                    textStyle: {
                                                        color: echarts.textColor
                                                    }
                                                }
                                            },
                                            labelLine: {
                                                normal: {
                                                    lineStyle: {
                                                        color: echarts.axisLineColor
                                                    }
                                                }
                                            }
                                        }]
                                    };
                                });
                            }
                        }, {
                            key: "ngOnDestroy",
                            value: function ngOnDestroy() {
                                this.themeSubscription.unsubscribe();
                            }
                        }]);

                        return EchartsPieComponent;
                    }();

                    EchartsPieComponent.ɵfac = function EchartsPieComponent_Factory(t) {
                        return new(t || EchartsPieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]));
                    };

                    EchartsPieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: EchartsPieComponent,
                        selectors: [
                            ["ngx-echarts-pie"]
                        ],
                        decls: 1,
                        vars: 1,
                        consts: [
                            ["echarts", "", 1, "echart", 3, "options"]
                        ],
                        template: function EchartsPieComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
                            }

                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
                            }
                        },
                        directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["ɵa"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EchartsPieComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-echarts-pie',
                                template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  "
                            }]
                        }], function() {
                            return [{
                                type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]
                            }];
                        }, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/echarts/echarts-radar.component.ts":
                /*!*****************************************************************!*\
                  !*** ./src/app/pages/charts/echarts/echarts-radar.component.ts ***!
                  \*****************************************************************/

                /*! exports provided: EchartsRadarComponent */

                /***/
                function srcAppPagesChartsEchartsEchartsRadarComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "EchartsRadarComponent", function() {
                        return EchartsRadarComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! ngx-echarts */
                        "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");

                    var EchartsRadarComponent = /*#__PURE__*/ function() {
                        function EchartsRadarComponent(theme) {
                            _classCallCheck(this, EchartsRadarComponent);

                            this.theme = theme;
                            this.options = {};
                        }

                        _createClass(EchartsRadarComponent, [{
                            key: "ngAfterViewInit",
                            value: function ngAfterViewInit() {
                                var _this19 = this;

                                this.themeSubscription = this.theme.getJsTheme().subscribe(function(config) {
                                    var colors = config.variables;
                                    var echarts = config.variables.echarts;
                                    _this19.options = {
                                        backgroundColor: echarts.bg,
                                        color: [colors.danger, colors.warning],
                                        tooltip: {},
                                        legend: {
                                            data: ['Allocated Budget', 'Actual Spending'],
                                            textStyle: {
                                                color: echarts.textColor
                                            }
                                        },
                                        radar: {
                                            name: {
                                                textStyle: {
                                                    color: echarts.textColor
                                                }
                                            },
                                            indicator: [{
                                                name: 'Sales',
                                                max: 6500
                                            }, {
                                                name: 'Administration',
                                                max: 16000
                                            }, {
                                                name: 'Information Techology',
                                                max: 30000
                                            }, {
                                                name: 'Customer Support',
                                                max: 38000
                                            }, {
                                                name: 'Development',
                                                max: 52000
                                            }, {
                                                name: 'Marketing',
                                                max: 25000
                                            }],
                                            splitArea: {
                                                areaStyle: {
                                                    color: 'transparent'
                                                }
                                            }
                                        },
                                        series: [{
                                            name: 'Budget vs Spending',
                                            type: 'radar',
                                            data: [{
                                                value: [4300, 10000, 28000, 35000, 50000, 19000],
                                                name: 'Allocated Budget'
                                            }, {
                                                value: [5000, 14000, 28000, 31000, 42000, 21000],
                                                name: 'Actual Spending'
                                            }]
                                        }]
                                    };
                                });
                            }
                        }, {
                            key: "ngOnDestroy",
                            value: function ngOnDestroy() {
                                this.themeSubscription.unsubscribe();
                            }
                        }]);

                        return EchartsRadarComponent;
                    }();

                    EchartsRadarComponent.ɵfac = function EchartsRadarComponent_Factory(t) {
                        return new(t || EchartsRadarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]));
                    };

                    EchartsRadarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: EchartsRadarComponent,
                        selectors: [
                            ["ngx-echarts-radar"]
                        ],
                        decls: 1,
                        vars: 1,
                        consts: [
                            ["echarts", "", 1, "echart", 3, "options"]
                        ],
                        template: function EchartsRadarComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
                            }

                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
                            }
                        },
                        directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["ɵa"]],
                        encapsulation: 2
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EchartsRadarComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-echarts-radar',
                                template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  "
                            }]
                        }], function() {
                            return [{
                                type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]
                            }];
                        }, null);
                    })();
                    /***/

                },

            /***/
            "./src/app/pages/charts/echarts/echarts.component.ts":
                /*!***********************************************************!*\
                  !*** ./src/app/pages/charts/echarts/echarts.component.ts ***!
                  \***********************************************************/

                /*! exports provided: EchartsComponent */

                /***/
                function srcAppPagesChartsEchartsEchartsComponentTs(module, __webpack_exports__, __webpack_require__) {
                    "use strict";

                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export (binding) */


                    __webpack_require__.d(__webpack_exports__, "EchartsComponent", function() {
                        return EchartsComponent;
                    });
                    /* harmony import */


                    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @angular/core */
                        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
                    /* harmony import */


                    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! @nebular/theme */
                        "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
                    /* harmony import */


                    var _echarts_pie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                        /*! ./echarts-pie.component */
                        "./src/app/pages/charts/echarts/echarts-pie.component.ts");
                    /* harmony import */


                    var _echarts_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                        /*! ./echarts-bar.component */
                        "./src/app/pages/charts/echarts/echarts-bar.component.ts");
                    /* harmony import */


                    var _echarts_line_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                        /*! ./echarts-line.component */
                        "./src/app/pages/charts/echarts/echarts-line.component.ts");
                    /* harmony import */


                    var _echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                        /*! ./echarts-multiple-xaxis.component */
                        "./src/app/pages/charts/echarts/echarts-multiple-xaxis.component.ts");
                    /* harmony import */


                    var _echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                        /*! ./echarts-area-stack.component */
                        "./src/app/pages/charts/echarts/echarts-area-stack.component.ts");
                    /* harmony import */


                    var _echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                        /*! ./echarts-bar-animation.component */
                        "./src/app/pages/charts/echarts/echarts-bar-animation.component.ts");
                    /* harmony import */


                    var _echarts_radar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                        /*! ./echarts-radar.component */
                        "./src/app/pages/charts/echarts/echarts-radar.component.ts");

                    var EchartsComponent = function EchartsComponent() {
                        _classCallCheck(this, EchartsComponent);
                    };

                    EchartsComponent.ɵfac = function EchartsComponent_Factory(t) {
                        return new(t || EchartsComponent)();
                    };

                    EchartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: EchartsComponent,
                        selectors: [
                            ["ngx-echarts"]
                        ],
                        decls: 43,
                        vars: 0,
                        consts: [
                            [1, "row"],
                            [1, "col-lg-6"]
                        ],
                        template: function EchartsComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pie");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ngx-echarts-pie");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-header");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bar");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card-body");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ngx-echarts-bar");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-card");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-card-header");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Line");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nb-card-body");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ngx-echarts-line");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nb-card");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nb-card-header");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Multiple x-axis");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nb-card-body");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "ngx-echarts-multiple-xaxis");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nb-card");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nb-card-header");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Area Stack");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nb-card-body");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "ngx-echarts-area-stack");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nb-card");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nb-card-header");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Bar Animation");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nb-card-body");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "ngx-echarts-bar-animation");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nb-card");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nb-card-header");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Radar");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nb-card-body");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "ngx-echarts-radar");

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                            }
                        },
                        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _echarts_pie_component__WEBPACK_IMPORTED_MODULE_2__["EchartsPieComponent"], _echarts_bar_component__WEBPACK_IMPORTED_MODULE_3__["EchartsBarComponent"], _echarts_line_component__WEBPACK_IMPORTED_MODULE_4__["EchartsLineComponent"], _echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_5__["EchartsMultipleXaxisComponent"], _echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_6__["EchartsAreaStackComponent"], _echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_7__["EchartsBarAnimationComponent"], _echarts_radar_component__WEBPACK_IMPORTED_MODULE_8__["EchartsRadarComponent"]],
                    });
                    /*@__PURE__*/

                    (function() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EchartsComponent, [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                            args: [{
                                selector: 'ngx-echarts',
                                styleUrls: ['./echarts.component.scss'],
                                templateUrl: './echarts.component.html'
                            }]
                        }], null, null);
                    })();
                    /***/

                }
        }
    ]);
})();