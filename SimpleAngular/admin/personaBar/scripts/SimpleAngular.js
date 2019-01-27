'use strict';
define(['jquery'],  
    function ($) {

        return {
            init: function (wrapper, util, params, callback) {
                $.ajax({
                    dataType: "script",
                    cache: true,
                    url: "modules/nvQuickPersonaBar.SimpleAngular/scripts/bundle/runtime.js",
                    success: function () {
                        console.log('runtime.js loaded');
                        $.ajax({
                            dataType: "script",
                            cache: true,
                            url: "modules/nvQuickPersonaBar.SimpleAngular/scripts/bundle/polyfills.js",
                            success: function (data) {
                                console.log('polyfills.js loaded');
                                $.ajax({
                                    dataType: "script",
                                    cache: true,
                                    url: "modules/nvQuickPersonaBar.SimpleAngular/scripts/bundle/main.js",
                                    success: function (data) {
                                        console.log('main.js loaded');
                                        $("head").append("<base href=\"/\">");
                                        //$.ajax({
                                        //    dataType: "script",
                                        //    cache: true,
                                        //    url: "modules/nvQuickPersonaBar.SimpleAngular/css/bundle/styles.css",
                                        //    success: function (data) {
                                        //        console.log('styles.css loaded');
                                        //        $("head").append("<style>" + data + "</style>");
                                        //    },
                                        //});
                                    },
                                });
                            },
                        });
                    },
                });
                if (typeof callback === 'function') {
                    callback();
                }
            },

            initMobile: function (wrapper, util, params, callback) {
            },

            load: function (params, callback) {
                window.nvQuickPersonaBar.SimpleAngular.load(params);
                if (typeof callback === 'function') {
                    callback();
                }
            },

            loadMobile: function (params, callback) {
            }
        };
    });