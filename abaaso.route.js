/**
 * Copyright (c) 2011, Jason Mulligan <jason.mulligan@avoidwork.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of abaaso.flickr nor the
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
 * @requires abaaso 1.8
 * @version alpha
 */
abaaso.on("init", function () {
	var $ = window[abaaso.aliased],
	    route;

	route = (function () {
		var del, load, routes, set;

		// Routing listeners
		routes = {
			error : function () {
				$.error($.label.error.invalidArguments);
			}
		}

		/**
		 * Deletes a route
		 * 
		 * @param  {String} name Route name
		 * @return {Undefined} undefined
		 */
		del = function (name) {
			delete routes[name];
		};

		/**
		 * Loads the hash into the view
		 * 
		 * @method load
		 * @module dashboard
		 * @param  {String} name Route to load
		 * @return {Undefined} undefined
		 */
		load = function (name) {
			name = name.replace(/\#\!\//, "");
			if (!routes.hasOwnProperty(name)) name = "error";
			routes[name]();
		};

		/**
		 * Sets a route for a URI
		 * @param  {[type]} name    [description]
		 * @param  {[type]} handler [description]
		 * @return {[type]}
		 */
		set = function (name, handler) {
			routes[name] = handler;
		};

		// Setting listener
		$.on("hash", function (arg) { load(arg); }, "route");

		// @constructor
		return {
			del : del,
			set : set
		}
	})();

	$.module("route", route);
}, "abaaso.route");
