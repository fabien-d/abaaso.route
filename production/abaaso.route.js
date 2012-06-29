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
 * @version 1.3.7
 */
(function(e){"use strict";var t,n;t=function(){var t=e[abaaso.aliased],n=/\#|\!\//g,r,i,s,o,u,a,f;return a={error:function(){t.error(t.label.error.invalidArguments),t.route.initial!==null&&i(t.route.initial)}},r=function(e){if(e!=="error"&&a.hasOwnProperty(e))return t.route.initial===e&&(t.route.initial=null),delete a[e];throw Error(t.label.error.invalidArguments)},i=function(e){var t=!0;return typeof e=="undefined"?t=document.location.hash.replace(n,""):document.location.hash="!/"+e,t},s=function(){var e=document.location.hash;return/\w/.test(e)?u(e):i(t.route.initial!==null?t.route.initial:t.array.cast(a,!0).remove("error").first()),e.replace(n,"")},o=function(){return t.array.cast(a,!0)},u=function(e){var r="error",i=new RegExp,s=!1;return e=e.replace(n,""),t.iterate(a,function(n,s){if(t.compile(i,"^"+s+"$","i")&&i.test(e))return!(r=s)}),a[r](),!0},f=function(e,n){if(typeof e=="undefined"||String(e).isEmpty()||typeof n!="function")throw Error(t.label.error.invalidArguments);return a[e]=n,!0},{initial:null,del:r,hash:i,init:s,list:o,load:u,set:f}},n=function(e){return e.module("route",t()),e.on("hash",function(e){this.load(e)},"route",e.route,"all"),e.route},typeof define=="function"?define(["abaaso"],function(e){return n(e)}):abaaso.on("init",n,"abaaso.route")})(this)