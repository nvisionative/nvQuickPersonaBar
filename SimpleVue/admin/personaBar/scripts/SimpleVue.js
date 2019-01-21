'use strict';
define(['jquery'],  
    function ($) {

        return {
            init: function (wrapper, util, params, callback) {
                $.ajax({
                    dataType: "script",
                    cache: true,
                    url: "modules/nvQuickPersonaBar.SimpleVue/scripts/SimpleVue-bundle.min.js",
                    success: function () {
                        console.log('SimpleVue-bundle.min.js loaded');
                        $.ajax({
                            dataType: "script",
                            cache: true,
                            url: "modules/nvQuickPersonaBar.SimpleVue/css/SimpleVue-bundle.min.css",
                            success: function (data) {
                                console.log('SimpleVue-bundle.min.css loaded');
                                $("head").append("<style>" + data + "</style>");
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
                window.nvQuickPersonaBar.SimpleVue.load(params);
                if (typeof callback === 'function') {
                    callback();
                }
            },

            loadMobile: function (params, callback) {
            }
        };
    });