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
 * @requires abaaso 2.4.0
 * @version 1.3.9
 */
(function(e){"use strict";var t,n;t=function(){var t=e[abaaso.aliased],n=/\#|\!\//g,r=new RegExp,i=/\w/,s,o,u,a,f,l,c;return l={error:function(){t.error(t.label.error.invalidArguments),t.route.initial!==null&&o(t.route.initial)}},s=function(e){if(e!=="error"&&l.hasOwnProperty(e))return t.route.initial===e&&(t.route.initial=null),delete l[e];throw Error(t.label.error.invalidArguments)},o=function(e){var t="";return typeof e=="undefined"?t=document.location.hash.replace(n,""):(t=e.replace(n,""),document.location.hash="!/"+t),t},u=function(){var e=document.location.hash;return i.test(e)?f(e):o(t.route.initial!==null?t.route.initial:t.array.cast(l,!0).remove("error").first()),e.replace(n,"")},a=function(){return t.array.cast(l,!0)},f=function(e){var i="error";return e=e.replace(n,""),t.iterate(l,function(n,s){if(t.compile(r,"^"+s+"$","i")&&r.test(e))return!(i=s)}),l[i](e),!0},c=function(e,n){if(typeof e!="string"||e.isEmpty()||typeof n!="function")throw Error(t.label.error.invalidArguments);return l[e]=n,!0},{initial:null,del:s,hash:o,init:u,list:a,load:f,set:c}},n=function(e){return e.module("route",t()),e.on("hash",function(e){this.load(e)},"route",e.route,"all"),e.route},typeof define=="function"?define(["abaaso"],function(e){return n(e)}):abaaso.on("init",n,"abaaso.route")})(this)