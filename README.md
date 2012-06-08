# abaaso.route
abaaso.route makes routing a URI hashtag to a method/function easy:

*$.route.set("hash", function () { alert("viewing #hash!"); });*

#### route.default
String property, referenced within route.init() to determine the default route to load

#### route.del(name)
Deletes a route listener

#### route.init()
Initializes the routing by setting the default route in the hash, or loads the first registered route

#### route.load(name)
Loads a route listener

#### route.set(name, listener)
Sets a route listener

#### License
abaaso.route is licensed under BSD-3 http://www.opensource.org/licenses/BSD-3-Clause

#### Copyright
Copyright (c) 2012, Jason Mulligan <jason.mulligan@avoidwork.com>