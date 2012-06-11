/**
 * Copyright (c) 2012, Jason Mulligan <jason.mulligan@avoidwork.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of abaaso.route nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL JASON MULLIGAN BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * abaaso.route
 * 
 * URI routing via hashtag
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @link http://avoidwork.com
 * @requires abaaso 2.1.4
 * @version 1.3.2
 */
(function (global) {
	"use strict";

	var route = (function ($) {
		var del, init, load, routes, set;

		// Routing listeners
		routes = {
			error : function () {
				$.error($.label.error.invalidArguments);
				if ($.route.default !== null) document.location.hash = "!/" + $.route.default;
			}
		}

		/**
		 * Deletes a route
		 * 
		 * @param  {String} name Route name
		 * @return {Mixed} True or undefined
		 */
		del = function (name) {
			try {
				if (name !== "error" && routes.hasOwnProperty(name)) {
					if ($.route.default === name) $.route.default = null;
					return (delete routes[name]);
				}
				else throw Error($.label.error.invalidArguments);
			}
			catch (e) {
				$.error(e, arguments, this);
				return undefined;
			}
		};

		/**
		 * Initializes the routing by loading the default OR the first route registered
		 * 
		 * @return {Undefined} undefined
		 */
		init = function () {
			if (!/\w/.test(document.location.hash)) document.location.hash = "!/" + ($.route.default !== null ? $.route.default : $.array.cast(routes, true).remove("error").first());
			else load(document.location.hash);
		};

		/**
		 * Loads the hash into the view
		 * 
		 * @method load
		 * @module dashboard
		 * @param  {String} name Route to load
		 * @return {Mixed} True or undefined
		 */
		load = function (name) {
			name = name.replace(/\#|\!\//g, "");
			if (!routes.hasOwnProperty(name)) name = "error";
			routes[name]();
			return true;
		};

		/**
		 * Sets a route for a URI
		 * 
		 * @param  {String}   name Route name
		 * @param  {Function} fn   Route listener
		 * @return {Mixed} True or undefined
		 */
		set = function (name, fn) {
			try {
				if (typeof name === "undefined" || String(name).isEmpty() || typeof fn !== "function")
					throw Error($.label.error.invalidArguments);

				routes[name] = fn;
				return true;
			}
			catch (e) {
				$.error(e, arguments, this);
				return undefined;
			}
		};

		// Setting listener
		$.on("hash", function (arg) { load(arg); }, "route");

		// @constructor
		return {
			default : null,
			del     : del,
			init    : init,
			load    : load,
			set     : set
		};
	}),
	fn = function (abaaso) {
		abaaso.module("route", route(global[abaaso.aliased]));
		return abaaso.route;
	};

	// AMD support
	typeof define === "function" ? define(["abaaso"], function (abaaso) { return fn(abaaso); }) : abaaso.on("init", fn, "abaaso.route");
})(this);