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
abaaso.on("init",function(){var a=window[abaaso.aliased],b;b=function(){var b,c,d,e;return d={error:function(){a.error(a.label.error.invalidArguments)}},b=function(a){delete d[a]},c=function(a){a=a.replace(/\#\!\//,""),d.hasOwnProperty(a)||(a="error"),d[a]()},e=function(a,b){d[a]=b},a.on("hash",function(a){c(a)},"route"),{del:b,set:e}}(),a.module("route",b)},"abaaso.route")