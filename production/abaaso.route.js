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
 * @requires abaaso 2.2.8
 * @version 1.3.6
 */
(function(a){"use strict";var b,c;b=function(){var b=a[abaaso.aliased],c=/\#|\!\//g,d,e,f,g,h,i,j;return i={error:function(){b.error(b.label.error.invalidArguments),b.route.initial!==null&&e(b.route.initial)}},d=function(a){if(a!=="error"&&i.hasOwnProperty(a))return b.route.initial===a&&(b.route.initial=null),delete i[a];throw Error(b.label.error.invalidArguments)},e=function(a){var b=!0;return typeof a=="undefined"?b=document.location.hash.replace(c,""):document.location.hash="!/"+a,b},f=function(){var a=document.location.hash;return/\w/.test(a)?h(a):e(b.route.initial!==null?b.route.initial:b.array.cast(i,!0).remove("error").first()),a.replace(c,"")},g=function(){return b.array.cast(i,!0)},h=function(a){return a=a.replace(c,""),i.hasOwnProperty(a)||(a="error"),i[a](),!0},j=function(a,c){if(typeof a=="undefined"||String(a).isEmpty()||typeof c!="function")throw Error(b.label.error.invalidArguments);return i[a]=c,!0},{initial:null,del:d,hash:e,init:f,list:g,load:h,set:j}},c=function(a){return a.module("route",b()),a.on("hash",function(a){this.load(a)},"route",a.route,"all"),a.route},typeof define=="function"?define(["abaaso"],function(a){return c(a)}):abaaso.on("init",c,"abaaso.route")})(this)