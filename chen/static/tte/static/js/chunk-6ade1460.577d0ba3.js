(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-6ade1460"], {
        "477b": function(e, l, t) {
            "use strict";
            var a = t("4969"),
                d = t.n(a);
            d.a
        },
        4969: function(e, l, t) {},
        c974: function(e, l, t) {
            "use strict";
            t.r(l);
            var a = function() {
                    var e = this,
                        l = e.$createElement,
                        t = e._self._c || l;
                    return t("div", [t("sticky", {
                        attrs: {
                            "z-index": 10,
                            "class-name": "sub-navbar"
                        }
                    }, [t("el-dropdown", {
                        attrs: {
                            trigger: "click"
                        }
                    }, [t("el-button", {
                        attrs: {
                            plain: ""
                        }
                    }, [e._v(" Platform"), t("i", {
                        staticClass: "el-icon-caret-bottom el-icon--right"
                    })]), t("el-dropdown-menu", {
                        staticClass: "no-border",
                        attrs: {
                            slot: "dropdown"
                        },
                        slot: "dropdown"
                    }, [t("el-checkbox-group", {
                        staticStyle: {
                            padding: "5px 15px"
                        },
                        model: {
                            value: e.platforms,
                            callback: function(l) {
                                e.platforms = l
                            },
                            expression: "platforms"
                        }
                    }, e._l(e.platformsOptions, (function(l) {
                        return t("el-checkbox", {
                            key: l.key,
                            attrs: {
                                label: l.key
                            }
                        }, [e._v(" " + e._s(l.name) + " ")])
                    })), 1)], 1)], 1), t("el-dropdown", {
                        attrs: {
                            trigger: "click"
                        }
                    }, [t("el-button", {
                        attrs: {
                            plain: ""
                        }
                    }, [e._v(" Link"), t("i", {
                        staticClass: "el-icon-caret-bottom el-icon--right"
                    })]), t("el-dropdown-menu", {
                        staticClass: "no-padding no-border",
                        staticStyle: {
                            width: "300px"
                        },
                        attrs: {
                            slot: "dropdown"
                        },
                        slot: "dropdown"
                    }, [t("el-input", {
                        attrs: {
                            placeholder: "Please enter the content"
                        },
                        model: {
                            value: e.url,
                            callback: function(l) {
                                e.url = l
                            },
                            expression: "url"
                        }
                    }, [t("template", {
                        slot: "prepend"
                    }, [e._v(" Url ")])], 2)], 1)], 1), t("div", {
                        staticClass: "time-container"
                    }, [t("el-date-picker", {
                        attrs: {
                            type: "datetime",
                            format: "yyyy-MM-dd HH:mm:ss",
                            placeholder: "Release time"
                        },
                        model: {
                            value: e.time,
                            callback: function(l) {
                                e.time = l
                            },
                            expression: "time"
                        }
                    })], 1), t("el-button", {
                        staticStyle: {
                            "margin-left": "10px"
                        },
                        attrs: {
                            type: "success"
                        }
                    }, [e._v(" publish ")])], 1), t("div", {
                        staticClass: "components-container"
                    }, [t("aside", [e._v(" Sticky header, When the page is scrolled to the preset position will be sticky on the top. ")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("sticky", {
                        attrs: {
                            "sticky-top": 200
                        }
                    }, [t("el-button", {
                        attrs: {
                            type: "primary"
                        }
                    }, [e._v(" placeholder")])], 1), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")]), t("div", [e._v("placeholder")])], 1)], 1)
                },
                d = [],
                o = t("b804"),
                r = {
                    name: "StickyDemo",
                    components: {
                        Sticky: o["a"]
                    },
                    data: function() {
                        return {
                            time: "",
                            url: "",
                            platforms: ["a-platform"],
                            platformsOptions: [{
                                key: "a-platform",
                                name: "platformA"
                            }, {
                                key: "b-platform",
                                name: "platformB"
                            }, {
                                key: "c-platform",
                                name: "platformC"
                            }],
                            pickerOptions: {
                                disabledDate: function(e) {
                                    return e.getTime() > Date.now()
                                }
                            }
                        }
                    }
                },
                i = r,
                c = (t("477b"), t("2877")),
                v = Object(c["a"])(i, a, d, !1, null, "37d00a3b", null);
            l["default"] = v.exports
        }
    }
]);