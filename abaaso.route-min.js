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
 * @requires abaaso 1.8
 * @version 1.2
 */
(function(a){var b=a[abaaso.aliased],c;c=function(){var a,c,d,e;return d={error:function(){b.error(b.label.error.invalidArguments)}},a=function(a){try{if(a!=="error"&&d.hasOwnProperty(a))return delete d[a];throw Error(b.label.error.invalidArguments)}catch(c){return b.error(c,arguments,this),undefined}},c=function(a){return a=a.replace(/\#|\!\//g,""),d.hasOwnProperty(a)||(a="error"),d[a](),!0},e=function(a,c){try{if(typeof a=="undefined"||String(a).isEmpty()||typeof c!="function")throw Error(b.label.error.invalidArguments);return d[a]=c,!0}catch(e){return b.error(e,arguments,this),undefined}},b.on("hash",function(a){c(a)},"route"),{del:a,load:c,set:e}}();switch(!0){case typeof define=="function":define("abaasoroute",["abaaso"],function(){return b.module("route",c),c});break;default:b.on("init",function(){b.module("route",c)},"abaaso.route")}})(window)