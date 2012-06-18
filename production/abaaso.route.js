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
 * @requires abaaso 2.2.4
 * @version 1.3.4
 */
(function(a){"use strict";var b,c;b=function(a){var b,c,d,e,f,g;return f={error:function(){a.error(a.label.error.invalidArguments),a.route.default!==null&&(document.location.hash="!/"+a.route.default)}},b=function(b){if(b!=="error"&&f.hasOwnProperty(b))return a.route.default===b&&(a.route.default=null),delete f[b];throw Error(a.label.error.invalidArguments)},c=function(){return/\w/.test(document.location.hash)?e(document.location.hash):document.location.hash="!/"+(a.route.default!==null?a.route.default:a.array.cast(f,!0).remove("error").first()),document.location.hash.replace(/\#|\!\//g,"")},d=function(){return a.array.cast(f,!0)},e=function(a){return a=a.replace(/\#|\!\//g,""),f.hasOwnProperty(a)||(a="error"),f[a](),!0},g=function(b,c){if(typeof b=="undefined"||String(b).isEmpty()||typeof c!="function")throw Error(a.label.error.invalidArguments);return f[b]=c,!0},{"default":null,del:b,init:c,list:d,load:e,set:g}},c=function(c){return c.module("route",b(a[c.aliased])),c.on("hash",function(a){this.load(a)},"route",c.route,"all"),c.route},typeof define=="function"?define(["abaaso"],function(a){return c(a)}):abaaso.on("init",c,"abaaso.route")})(this)