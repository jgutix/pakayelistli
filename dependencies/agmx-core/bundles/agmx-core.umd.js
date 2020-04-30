(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('agmx-core', ['exports', '@angular/core', 'rxjs'], factory) :
    (global = global || self, factory(global['agmx-core'] = {}, global.ng.core, global.rxjs));
}(this, (function (exports, core, rxjs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var MapsAPILoader = /** @class */ (function () {
        function MapsAPILoader() {
        }
        MapsAPILoader.ɵprov = core["ɵɵdefineInjectable"]({ factory: function MapsAPILoader_Factory() { return new MapsAPILoader(); }, token: MapsAPILoader, providedIn: "root" });
        MapsAPILoader = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], MapsAPILoader);
        return MapsAPILoader;
    }());

    /**
     * Wrapper class that handles the communication with the Google Maps Javascript
     * API v3
     */
    var GoogleMapsAPIWrapper = /** @class */ (function () {
        function GoogleMapsAPIWrapper(_loader, _zone) {
            var _this = this;
            this._loader = _loader;
            this._zone = _zone;
            this._map =
                new Promise(function (resolve) { _this._mapResolver = resolve; });
        }
        GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this._loader.load().then(function () {
                    var map = new google.maps.Map(el, mapOptions);
                    _this._mapResolver(map);
                    return;
                });
            });
        };
        GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                _this._map.then(function (m) { m.setOptions(options); });
            });
        };
        /**
         * Creates a google map marker with the map context
         */
        GoogleMapsAPIWrapper.prototype.createMarker = function (options, addToMap) {
            var _this = this;
            if (options === void 0) { options = {}; }
            if (addToMap === void 0) { addToMap = true; }
            return this._zone.runOutsideAngular(function () {
                return _this._map.then(function (map) {
                    if (addToMap) {
                        options.map = map;
                    }
                    return new google.maps.Marker(options);
                });
            });
        };
        GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this._map.then(function () { return new google.maps.InfoWindow(options); });
            });
        };
        /**
         * Creates a google.map.Circle for the current map.
         */
        GoogleMapsAPIWrapper.prototype.createCircle = function (options) {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this._map.then(function (map) {
                    if (typeof options.strokePosition === 'string') {
                        options.strokePosition = google.maps.StrokePosition[options.strokePosition];
                    }
                    options.map = map;
                    return new google.maps.Circle(options);
                });
            });
        };
        /**
         * Creates a google.map.Rectangle for the current map.
         */
        GoogleMapsAPIWrapper.prototype.createRectangle = function (options) {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this._map.then(function (map) {
                    options.map = map;
                    return new google.maps.Rectangle(options);
                });
            });
        };
        GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this.getNativeMap().then(function (map) {
                    var line = new google.maps.Polyline(options);
                    line.setMap(map);
                    return line;
                });
            });
        };
        GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this.getNativeMap().then(function (map) {
                    var polygon = new google.maps.Polygon(options);
                    polygon.setMap(map);
                    return polygon;
                });
            });
        };
        /**
         * Creates a new google.map.Data layer for the current map
         */
        GoogleMapsAPIWrapper.prototype.createDataLayer = function (options) {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this._map.then(function (m) {
                    var data = new google.maps.Data(options);
                    data.setMap(m);
                    return data;
                });
            });
        };
        /**
         * Creates a TransitLayer instance for a map
         * @param options
         */
        /* @param {TransitLayerOptions} options - used for setting layer options
         * @returns {Promise<TransitLayer>} a new transit layer object
         */
        GoogleMapsAPIWrapper.prototype.createTransitLayer = function (options) {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this._map.then(function (map) {
                    var newLayer = new google.maps.TransitLayer();
                    newLayer.setMap(options.visible ? map : null);
                    return newLayer;
                });
            });
        };
        /**
         * Creates a BicyclingLayer instance for a map
         * @param options
         */
        /* @param {BicyclingLayerOptions} options - used for setting layer options
        * @returns {Promise<BicyclingLayer>} a new bicycling layer object
        */
        GoogleMapsAPIWrapper.prototype.createBicyclingLayer = function (options) {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this._map.then(function (map) {
                    var newLayer = new google.maps.BicyclingLayer();
                    newLayer.setMap(options.visible ? map : null);
                    return newLayer;
                });
            });
        };
        /**
         * Determines if given coordinates are insite a Polygon path.
         */
        GoogleMapsAPIWrapper.prototype.containsLocation = function (latLng, polygon) {
            return google.maps.geometry.poly.containsLocation(latLng, polygon);
        };
        GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
            var _this = this;
            return new rxjs.Observable(function (observer) {
                _this._map.then(function (m) {
                    m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
                });
            });
        };
        GoogleMapsAPIWrapper.prototype.clearInstanceListeners = function () {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                _this._map.then(function (map) {
                    google.maps.event.clearInstanceListeners(map);
                });
            });
        };
        GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this._map.then(function (map) { return map.setCenter(latLng); });
            });
        };
        GoogleMapsAPIWrapper.prototype.getZoom = function () {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this._map.then(function (map) { return map.getZoom(); });
            });
        };
        GoogleMapsAPIWrapper.prototype.getBounds = function () {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this._map.then(function (map) { return map.getBounds(); });
            });
        };
        GoogleMapsAPIWrapper.prototype.getMapTypeId = function () {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this._map.then(function (map) { return map.getMapTypeId(); });
            });
        };
        GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this._map.then(function (map) { return map.setZoom(zoom); });
            });
        };
        GoogleMapsAPIWrapper.prototype.getCenter = function () {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this._map.then(function (map) { return map.getCenter(); });
            });
        };
        GoogleMapsAPIWrapper.prototype.getControls = function () {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this._map.then(function (map) { return map.controls; });
            });
        };
        GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this._map.then(function (map) { return map.panTo(latLng); });
            });
        };
        GoogleMapsAPIWrapper.prototype.panBy = function (x, y) {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this._map.then(function (map) { return map.panBy(x, y); });
            });
        };
        GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng, padding) {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this._map.then(function (map) { return map.fitBounds(latLng, padding); });
            });
        };
        GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng, padding) {
            var _this = this;
            return this._zone.runOutsideAngular(function () {
                return _this._map.then(function (map) { return map.panToBounds(latLng, padding); });
            });
        };
        /**
         * Returns the native Google Maps Map instance. Be careful when using this instance directly.
         */
        GoogleMapsAPIWrapper.prototype.getNativeMap = function () { return this._map; };
        /**
         * Returns the native Google Maps Map instance. Be careful when using this instance directly.
         */
        GoogleMapsAPIWrapper.prototype.getTrueNativeMap = function () { return this._map; };
        /**
         * Triggers the given event name on the map instance.
         */
        GoogleMapsAPIWrapper.prototype.triggerMapEvent = function (eventName) {
            return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
        };
        GoogleMapsAPIWrapper.ctorParameters = function () { return [
            { type: MapsAPILoader },
            { type: core.NgZone }
        ]; };
        GoogleMapsAPIWrapper.ɵprov = core["ɵɵdefineInjectable"]({ factory: function GoogleMapsAPIWrapper_Factory() { return new GoogleMapsAPIWrapper(core["ɵɵinject"](MapsAPILoader), core["ɵɵinject"](core.NgZone)); }, token: GoogleMapsAPIWrapper, providedIn: "root" });
        GoogleMapsAPIWrapper = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], GoogleMapsAPIWrapper);
        return GoogleMapsAPIWrapper;
    }());

    var CircleManager = /** @class */ (function () {
        function CircleManager(_apiWrapper, _zone) {
            this._apiWrapper = _apiWrapper;
            this._zone = _zone;
            this._circles = new Map();
        }
        CircleManager.prototype.addCircle = function (circle) {
            this._circles.set(circle, this._apiWrapper.createCircle({
                center: { lat: circle.latitude, lng: circle.longitude },
                clickable: circle.clickable,
                draggable: circle.draggable,
                editable: circle.editable,
                fillColor: circle.fillColor,
                fillOpacity: circle.fillOpacity,
                radius: circle.radius,
                strokeColor: circle.strokeColor,
                strokeOpacity: circle.strokeOpacity,
                strokePosition: circle.strokePosition,
                strokeWeight: circle.strokeWeight,
                visible: circle.visible,
                zIndex: circle.zIndex
            }));
        };
        /**
         * Removes the given circle from the map.
         */
        CircleManager.prototype.removeCircle = function (circle) {
            var _this = this;
            return this._circles.get(circle).then(function (c) {
                c.setMap(null);
                _this._circles.delete(circle);
            });
        };
        CircleManager.prototype.setOptions = function (circle, options) {
            return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
        };
        CircleManager.prototype.getBounds = function (circle) {
            return this._circles.get(circle).then(function (c) { return c.getBounds(); });
        };
        CircleManager.prototype.getCenter = function (circle) {
            return this._circles.get(circle).then(function (c) { return c.getCenter(); });
        };
        CircleManager.prototype.getRadius = function (circle) {
            return this._circles.get(circle).then(function (c) { return c.getRadius(); });
        };
        CircleManager.prototype.setCenter = function (circle) {
            return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
        };
        CircleManager.prototype.setEditable = function (circle) {
            return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
        };
        CircleManager.prototype.setDraggable = function (circle) {
            return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
        };
        CircleManager.prototype.setVisible = function (circle) {
            return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
        };
        CircleManager.prototype.setRadius = function (circle) {
            return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
        };
        CircleManager.prototype.createEventObservable = function (eventName, circle) {
            var _this = this;
            return rxjs.Observable.create(function (observer) {
                var listener = null;
                _this._circles.get(circle).then(function (c) {
                    listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
                });
                return function () {
                    if (listener !== null) {
                        listener.remove();
                    }
                };
            });
        };
        CircleManager.ctorParameters = function () { return [
            { type: GoogleMapsAPIWrapper },
            { type: core.NgZone }
        ]; };
        CircleManager.ɵprov = core["ɵɵdefineInjectable"]({ factory: function CircleManager_Factory() { return new CircleManager(core["ɵɵinject"](GoogleMapsAPIWrapper), core["ɵɵinject"](core.NgZone)); }, token: CircleManager, providedIn: "root" });
        CircleManager = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], CircleManager);
        return CircleManager;
    }());

    var MarkerManager = /** @class */ (function () {
        function MarkerManager(_mapsWrapper, _zone) {
            this._mapsWrapper = _mapsWrapper;
            this._zone = _zone;
            this._markers = new Map();
        }
        MarkerManager.prototype.deleteMarker = function (marker) {
            var _this = this;
            var m = this._markers.get(marker);
            if (m == null) {
                // marker already deleted
                return Promise.resolve();
            }
            return m.then(function (m) {
                return _this._zone.run(function () {
                    m.setMap(null);
                    _this._markers.delete(marker);
                });
            });
        };
        MarkerManager.prototype.updateMarkerPosition = function (marker) {
            return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
        };
        MarkerManager.prototype.updateTitle = function (marker) {
            return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
        };
        MarkerManager.prototype.updateLabel = function (marker) {
            return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
        };
        MarkerManager.prototype.updateDraggable = function (marker) {
            return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
        };
        MarkerManager.prototype.updateIcon = function (marker) {
            return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
        };
        MarkerManager.prototype.updateOpacity = function (marker) {
            return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
        };
        MarkerManager.prototype.updateVisible = function (marker) {
            return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
        };
        MarkerManager.prototype.updateZIndex = function (marker) {
            return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
        };
        MarkerManager.prototype.updateClickable = function (marker) {
            return this._markers.get(marker).then(function (m) { return m.setClickable(marker.clickable); });
        };
        MarkerManager.prototype.updateAnimation = function (marker) {
            return this._markers.get(marker).then(function (m) {
                if (typeof marker.animation === 'string') {
                    m.setAnimation(google.maps.Animation[marker.animation]);
                }
                else {
                    m.setAnimation(marker.animation);
                }
            });
        };
        MarkerManager.prototype.addMarker = function (marker) {
            var markerPromise = this._mapsWrapper.createMarker({
                position: { lat: marker.latitude, lng: marker.longitude },
                label: marker.label,
                draggable: marker.draggable,
                icon: marker.iconUrl,
                opacity: marker.opacity,
                visible: marker.visible,
                zIndex: marker.zIndex,
                title: marker.title,
                clickable: marker.clickable,
                animation: (typeof marker.animation === 'string') ? google.maps.Animation[marker.animation] : marker.animation
            });
            this._markers.set(marker, markerPromise);
        };
        MarkerManager.prototype.getNativeMarker = function (marker) {
            return this._markers.get(marker);
        };
        MarkerManager.prototype.createEventObservable = function (eventName, marker) {
            var _this = this;
            return rxjs.Observable.create(function (observer) {
                _this._markers.get(marker).then(function (m) {
                    m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
                });
            });
        };
        MarkerManager.ctorParameters = function () { return [
            { type: GoogleMapsAPIWrapper },
            { type: core.NgZone }
        ]; };
        MarkerManager.ɵprov = core["ɵɵdefineInjectable"]({ factory: function MarkerManager_Factory() { return new MarkerManager(core["ɵɵinject"](GoogleMapsAPIWrapper), core["ɵɵinject"](core.NgZone)); }, token: MarkerManager, providedIn: "root" });
        MarkerManager = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], MarkerManager);
        return MarkerManager;
    }());

    var InfoWindowManager = /** @class */ (function () {
        function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
            this._mapsWrapper = _mapsWrapper;
            this._zone = _zone;
            this._markerManager = _markerManager;
            this._infoWindows = new Map();
        }
        InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
            var _this = this;
            var iWindow = this._infoWindows.get(infoWindow);
            if (iWindow == null) {
                // info window already deleted
                return Promise.resolve();
            }
            return iWindow.then(function (i) {
                return _this._zone.run(function () {
                    i.close();
                    _this._infoWindows.delete(infoWindow);
                });
            });
        };
        InfoWindowManager.prototype.setPosition = function (infoWindow) {
            return this._infoWindows.get(infoWindow).then(function (i) { return i.setPosition({
                lat: infoWindow.latitude,
                lng: infoWindow.longitude
            }); });
        };
        InfoWindowManager.prototype.setZIndex = function (infoWindow) {
            return this._infoWindows.get(infoWindow)
                .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
        };
        InfoWindowManager.prototype.open = function (infoWindow) {
            var _this = this;
            return this._infoWindows.get(infoWindow).then(function (w) {
                if (infoWindow.hostMarker != null) {
                    return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                        return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                    });
                }
                return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
            });
        };
        InfoWindowManager.prototype.close = function (infoWindow) {
            return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
        };
        InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
            return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
        };
        InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
            var options = {
                content: infoWindow.content,
                maxWidth: infoWindow.maxWidth,
                zIndex: infoWindow.zIndex,
                disableAutoPan: infoWindow.disableAutoPan
            };
            if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
                options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
            }
            var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
            this._infoWindows.set(infoWindow, infoWindowPromise);
        };
        /**
         * Creates a Google Maps event listener for the given InfoWindow as an Observable
         */
        InfoWindowManager.prototype.createEventObservable = function (eventName, infoWindow) {
            var _this = this;
            return rxjs.Observable.create(function (observer) {
                _this._infoWindows.get(infoWindow).then(function (i) {
                    i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
                });
            });
        };
        InfoWindowManager.ctorParameters = function () { return [
            { type: GoogleMapsAPIWrapper },
            { type: core.NgZone },
            { type: MarkerManager }
        ]; };
        InfoWindowManager.ɵprov = core["ɵɵdefineInjectable"]({ factory: function InfoWindowManager_Factory() { return new InfoWindowManager(core["ɵɵinject"](GoogleMapsAPIWrapper), core["ɵɵinject"](core.NgZone), core["ɵɵinject"](MarkerManager)); }, token: InfoWindowManager, providedIn: "root" });
        InfoWindowManager = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], InfoWindowManager);
        return InfoWindowManager;
    }());

    var PolygonManager = /** @class */ (function () {
        function PolygonManager(_mapsWrapper, _zone) {
            this._mapsWrapper = _mapsWrapper;
            this._zone = _zone;
            this._polygons = new Map();
        }
        PolygonManager.prototype.addPolygon = function (path) {
            var polygonPromise = this._mapsWrapper.createPolygon({
                clickable: path.clickable,
                draggable: path.draggable,
                editable: path.editable,
                fillColor: path.fillColor,
                fillOpacity: path.fillOpacity,
                geodesic: path.geodesic,
                paths: path.paths,
                strokeColor: path.strokeColor,
                strokeOpacity: path.strokeOpacity,
                strokeWeight: path.strokeWeight,
                visible: path.visible,
                zIndex: path.zIndex,
            });
            this._polygons.set(path, polygonPromise);
        };
        PolygonManager.prototype.updatePolygon = function (polygon) {
            var _this = this;
            var m = this._polygons.get(polygon);
            if (m == null) {
                return Promise.resolve();
            }
            return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
        };
        PolygonManager.prototype.setPolygonOptions = function (path, options) {
            return this._polygons.get(path).then(function (l) { l.setOptions(options); });
        };
        PolygonManager.prototype.deletePolygon = function (paths) {
            var _this = this;
            var m = this._polygons.get(paths);
            if (m == null) {
                return Promise.resolve();
            }
            return m.then(function (l) {
                return _this._zone.run(function () {
                    l.setMap(null);
                    _this._polygons.delete(paths);
                });
            });
        };
        PolygonManager.prototype.createEventObservable = function (eventName, path) {
            var _this = this;
            return rxjs.Observable.create(function (observer) {
                _this._polygons.get(path).then(function (l) {
                    l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
                });
            });
        };
        PolygonManager.ctorParameters = function () { return [
            { type: GoogleMapsAPIWrapper },
            { type: core.NgZone }
        ]; };
        PolygonManager.ɵprov = core["ɵɵdefineInjectable"]({ factory: function PolygonManager_Factory() { return new PolygonManager(core["ɵɵinject"](GoogleMapsAPIWrapper), core["ɵɵinject"](core.NgZone)); }, token: PolygonManager, providedIn: "root" });
        PolygonManager = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], PolygonManager);
        return PolygonManager;
    }());

    var PolylineManager = /** @class */ (function () {
        function PolylineManager(_mapsWrapper, _zone) {
            this._mapsWrapper = _mapsWrapper;
            this._zone = _zone;
            this._polylines = new Map();
        }
        PolylineManager_1 = PolylineManager;
        PolylineManager._convertPoints = function (line) {
            var path = line._getPoints().map(function (point) {
                return { lat: point.latitude, lng: point.longitude };
            });
            return path;
        };
        PolylineManager.prototype.addPolyline = function (line) {
            var path = PolylineManager_1._convertPoints(line);
            var polylinePromise = this._mapsWrapper.createPolyline({
                clickable: line.clickable,
                draggable: line.draggable,
                editable: line.editable,
                geodesic: line.geodesic,
                strokeColor: line.strokeColor,
                strokeOpacity: line.strokeOpacity,
                strokeWeight: line.strokeWeight,
                visible: line.visible,
                zIndex: line.zIndex,
                path: path
            });
            this._polylines.set(line, polylinePromise);
        };
        PolylineManager.prototype.updatePolylinePoints = function (line) {
            var _this = this;
            var path = PolylineManager_1._convertPoints(line);
            var m = this._polylines.get(line);
            if (m == null) {
                return Promise.resolve();
            }
            return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
        };
        PolylineManager.prototype.setPolylineOptions = function (line, options) {
            return this._polylines.get(line).then(function (l) { l.setOptions(options); });
        };
        PolylineManager.prototype.deletePolyline = function (line) {
            var _this = this;
            var m = this._polylines.get(line);
            if (m == null) {
                return Promise.resolve();
            }
            return m.then(function (l) {
                return _this._zone.run(function () {
                    l.setMap(null);
                    _this._polylines.delete(line);
                });
            });
        };
        PolylineManager.prototype.createEventObservable = function (eventName, line) {
            var _this = this;
            return rxjs.Observable.create(function (observer) {
                _this._polylines.get(line).then(function (l) {
                    l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
                });
            });
        };
        PolylineManager.prototype.createEventObservableOnPath = function (eventName, line) {
            var _this = this;
            return rxjs.Observable.create(function (observer) {
                _this._polylines.get(line).then(function (l) {
                    _this._mapsWrapper.getNativeMap().then(function (map) {
                        google.maps.event.addListener(l.getPath(), 'set_at', function (e) {
                            return _this._zone.run(function () { return observer.next({ index: e, value: l.getPath().getAt(e) }); });
                        });
                    });
                });
            });
        };
        var PolylineManager_1;
        PolylineManager.ctorParameters = function () { return [
            { type: GoogleMapsAPIWrapper },
            { type: core.NgZone }
        ]; };
        PolylineManager.ɵprov = core["ɵɵdefineInjectable"]({ factory: function PolylineManager_Factory() { return new PolylineManager(core["ɵɵinject"](GoogleMapsAPIWrapper), core["ɵɵinject"](core.NgZone)); }, token: PolylineManager, providedIn: "root" });
        PolylineManager = PolylineManager_1 = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], PolylineManager);
        return PolylineManager;
    }());

    /**
     * Manages all KML Layers for a Google Map instance.
     */
    var KmlLayerManager = /** @class */ (function () {
        function KmlLayerManager(_wrapper, _zone) {
            this._wrapper = _wrapper;
            this._zone = _zone;
            this._layers = new Map();
        }
        /**
         * Adds a new KML Layer to the map.
         */
        KmlLayerManager.prototype.addKmlLayer = function (layer) {
            var newLayer = this._wrapper.getNativeMap().then(function (m) {
                return new google.maps.KmlLayer({
                    clickable: layer.clickable,
                    map: m,
                    preserveViewport: layer.preserveViewport,
                    screenOverlays: layer.screenOverlays,
                    suppressInfoWindows: layer.suppressInfoWindows,
                    url: layer.url,
                    zIndex: layer.zIndex
                });
            });
            this._layers.set(layer, newLayer);
        };
        KmlLayerManager.prototype.setOptions = function (layer, options) {
            this._layers.get(layer).then(function (l) { return l.setOptions(options); });
        };
        KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
            var _this = this;
            this._layers.get(layer).then(function (l) {
                l.setMap(null);
                _this._layers.delete(layer);
            });
        };
        /**
         * Creates a Google Maps event listener for the given KmlLayer as an Observable
         */
        KmlLayerManager.prototype.createEventObservable = function (eventName, layer) {
            var _this = this;
            return rxjs.Observable.create(function (observer) {
                _this._layers.get(layer).then(function (m) {
                    m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
                });
            });
        };
        KmlLayerManager.ctorParameters = function () { return [
            { type: GoogleMapsAPIWrapper },
            { type: core.NgZone }
        ]; };
        KmlLayerManager.ɵprov = core["ɵɵdefineInjectable"]({ factory: function KmlLayerManager_Factory() { return new KmlLayerManager(core["ɵɵinject"](GoogleMapsAPIWrapper), core["ɵɵinject"](core.NgZone)); }, token: KmlLayerManager, providedIn: "root" });
        KmlLayerManager = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], KmlLayerManager);
        return KmlLayerManager;
    }());

    /**
     * Manages all Data Layers for a Google Map instance.
     */
    var DataLayerManager = /** @class */ (function () {
        function DataLayerManager(_wrapper, _zone) {
            this._wrapper = _wrapper;
            this._zone = _zone;
            this._layers = new Map();
        }
        /**
         * Adds a new Data Layer to the map.
         */
        DataLayerManager.prototype.addDataLayer = function (layer) {
            var _this = this;
            var newLayer = this._wrapper.createDataLayer({
                style: layer.style
            })
                .then(function (d) {
                if (layer.geoJson) {
                    _this.getDataFeatures(d, layer.geoJson).then(function (features) { return d.features = features; });
                }
                return d;
            });
            this._layers.set(layer, newLayer);
        };
        DataLayerManager.prototype.deleteDataLayer = function (layer) {
            var _this = this;
            this._layers.get(layer).then(function (l) {
                l.setMap(null);
                _this._layers.delete(layer);
            });
        };
        DataLayerManager.prototype.updateGeoJson = function (layer, geoJson) {
            var _this = this;
            this._layers.get(layer).then(function (l) {
                l.forEach(function (feature) {
                    l.remove(feature);
                    var index = l.features.indexOf(feature, 0);
                    if (index > -1) {
                        l.features.splice(index, 1);
                    }
                });
                _this.getDataFeatures(l, geoJson).then(function (features) { return l.features = features; });
            });
        };
        DataLayerManager.prototype.setDataOptions = function (layer, options) {
            this._layers.get(layer).then(function (l) {
                l.setControlPosition(options.controlPosition);
                l.setControls(options.controls);
                l.setDrawingMode(options.drawingMode);
                l.setStyle(options.style);
            });
        };
        /**
         * Creates a Google Maps event listener for the given DataLayer as an Observable
         */
        DataLayerManager.prototype.createEventObservable = function (eventName, layer) {
            var _this = this;
            return rxjs.Observable.create(function (observer) {
                _this._layers.get(layer).then(function (d) {
                    d.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
                });
            });
        };
        /**
         * Extract features from a geoJson using google.maps Data Class
         * @param d : google.maps.Data class instance
         * @param geoJson : url or geojson object
         */
        DataLayerManager.prototype.getDataFeatures = function (d, geoJson) {
            return new Promise(function (resolve, reject) {
                if (typeof geoJson === 'object') {
                    try {
                        var features = d.addGeoJson(geoJson);
                        resolve(features);
                    }
                    catch (e) {
                        reject(e);
                    }
                }
                else if (typeof geoJson === 'string') {
                    d.loadGeoJson(geoJson, null, resolve);
                }
                else {
                    reject("Impossible to extract features from geoJson: wrong argument type");
                }
            });
        };
        DataLayerManager.ctorParameters = function () { return [
            { type: GoogleMapsAPIWrapper },
            { type: core.NgZone }
        ]; };
        DataLayerManager.ɵprov = core["ɵɵdefineInjectable"]({ factory: function DataLayerManager_Factory() { return new DataLayerManager(core["ɵɵinject"](GoogleMapsAPIWrapper), core["ɵɵinject"](core.NgZone)); }, token: DataLayerManager, providedIn: "root" });
        DataLayerManager = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], DataLayerManager);
        return DataLayerManager;
    }());

    var SearchBoxManager = /** @class */ (function () {
        function SearchBoxManager(_apiWrapper, _zone) {
            this._apiWrapper = _apiWrapper;
            this._zone = _zone;
        }
        /** @internal */
        SearchBoxManager.prototype.createEventObservable = function (searchBox) {
            var _this = this;
            return rxjs.Observable.create(function (observer) {
                searchBox.getSearchBoxEl().addListener('places_changed', function (e) {
                    _this._zone.run(function () { return observer.next(e); });
                });
            });
        };
        SearchBoxManager.ctorParameters = function () { return [
            { type: GoogleMapsAPIWrapper },
            { type: core.NgZone }
        ]; };
        SearchBoxManager.ɵprov = core["ɵɵdefineInjectable"]({ factory: function SearchBoxManager_Factory() { return new SearchBoxManager(core["ɵɵinject"](GoogleMapsAPIWrapper), core["ɵɵinject"](core.NgZone)); }, token: SearchBoxManager, providedIn: "root" });
        SearchBoxManager = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], SearchBoxManager);
        return SearchBoxManager;
    }());

    /**
     * AgmMap renders a Google Map.
     * **Important note**: To be able see a map in the browser, you have to define a height for the
     * element `agm-map`.
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    agm-map {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *    </agm-map>
     *  `
     * })
     * ```
     */
    var AgmMap = /** @class */ (function () {
        function AgmMap(_elem, _mapsWrapper) {
            this._elem = _elem;
            this._mapsWrapper = _mapsWrapper;
            /**
             * The longitude that defines the center of the map.
             */
            this.longitude = 0;
            /**
             * The latitude that defines the center of the map.
             */
            this.latitude = 0;
            /**
             * The zoom level of the map. The default zoom level is 8.
             */
            this.zoom = 8;
            /**
             * Enables/disables if map is draggable.
             */
            // tslint:disable-next-line:no-input-rename
            this.draggable = true;
            /**
             * Enables/disables zoom and center on double click. Enabled by default.
             */
            this.disableDoubleClickZoom = false;
            /**
             * Enables/disables all default UI of the Google map. Please note: When the map is created, this
             * value cannot get updated.
             */
            this.disableDefaultUI = false;
            /**
             * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
             */
            this.scrollwheel = true;
            /**
             * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
             * enabled by default.
             */
            this.keyboardShortcuts = true;
            /**
             * The enabled/disabled state of the Zoom control.
             */
            this.zoomControl = true;
            /**
             * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
             * modes, these styles will only apply to labels and geometry.
             */
            this.styles = [];
            /**
             * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
             * used to
             * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
             */
            this.usePanning = false;
            /**
             * The initial enabled/disabled state of the Street View Pegman control.
             * This control is part of the default UI, and should be set to false when displaying a map type
             * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
             */
            this.streetViewControl = true;
            /**
             * Sets the viewport to contain the given bounds.
             */
            this.fitBounds = null;
            /**
             * The initial enabled/disabled state of the Scale control. This is disabled by default.
             */
            this.scaleControl = false;
            /**
             * The initial enabled/disabled state of the Map type control.
             */
            this.mapTypeControl = false;
            /**
             * The initial enabled/disabled state of the Pan control.
             */
            this.panControl = false;
            /**
             * The initial enabled/disabled state of the Rotate control.
             */
            this.rotateControl = false;
            /**
             * The initial enabled/disabled state of the Fullscreen control.
             */
            this.fullscreenControl = false;
            /**
             * The map mapTypeId. Defaults to 'roadmap'.
             */
            this.mapTypeId = 'roadmap';
            /**
             * When false, map icons are not clickable. A map icon represents a point of interest,
             * also known as a POI. By default map icons are clickable.
             */
            this.clickableIcons = true;
            /**
             * This setting controls how gestures on the map are handled.
             * Allowed values:
             * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
             * - 'greedy'      (All touch gestures pan or zoom the map.)
             * - 'none'        (The map cannot be panned or zoomed by user gestures.)
             * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
             */
            this.gestureHandling = 'auto';
            /**
             * This event emitter gets emitted when the user clicks on the map (but not when they click on a
             * marker or infoWindow).
             */
            this.mapClick = new core.EventEmitter();
            /**
             * This event emitter gets emitted when the user right-clicks on the map (but not when they click
             * on a marker or infoWindow).
             */
            this.mapRightClick = new core.EventEmitter();
            /**
             * This event emitter gets emitted when the user double-clicks on the map (but not when they click
             * on a marker or infoWindow).
             */
            this.mapDblClick = new core.EventEmitter();
            /**
             * This event emitter is fired when the map center changes.
             */
            this.centerChange = new core.EventEmitter();
            /**
             * This event is fired when the viewport bounds have changed.
             */
            this.boundsChange = new core.EventEmitter();
            /**
             * This event is fired when the mapTypeId property changes.
             */
            this.mapTypeIdChange = new core.EventEmitter();
            /**
             * This event is fired when the map becomes idle after panning or zooming.
             */
            this.idle = new core.EventEmitter();
            /**
             * This event is fired when the zoom level has changed.
             */
            this.zoomChange = new core.EventEmitter();
            /**
             * This event is fired when the google map is fully initialized.
             * You get the google.maps.Map instance as a result of this EventEmitter.
             */
            this.mapReady = new core.EventEmitter();
            this._observableSubscriptions = [];
        }
        AgmMap_1 = AgmMap;
        /** @internal */
        AgmMap.prototype.ngOnInit = function () {
            // todo: this should be solved with a new component and a viewChild decorator
            var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
            this._initMapInstance(container);
        };
        /** @internal */
        AgmMap.prototype.ngOnDestroy = function () {
            // unsubscribe all registered observable subscriptions
            this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        };
        /* @internal */
        AgmMap.prototype.ngOnChanges = function (changes) {
            this._updateMapOptionsChanges(changes);
            this._updatePosition(changes);
        };
        /**
         * Triggers a resize event on the google map instance.
         * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
         * Returns a promise that gets resolved after the event was triggered.
         */
        AgmMap.prototype.triggerResize = function (recenter) {
            var _this = this;
            if (recenter === void 0) { recenter = true; }
            // Note: When we would trigger the resize event and show the map in the same turn (which is a
            // common case for triggering a resize event), then the resize event would not
            // work (to show the map), so we trigger the event in a timeout.
            return new Promise(function (resolve) {
                setTimeout(function () {
                    return _this._mapsWrapper.triggerMapEvent('resize').then(function () {
                        if (recenter) {
                            _this.fitBounds != null ? _this._fitBounds() : _this._setCenter();
                        }
                        resolve();
                    });
                });
            });
        };
        AgmMap.prototype._initMapInstance = function (el) {
            var _this = this;
            this._mapsWrapper.createMap(el, {
                center: { lat: this.latitude || 0, lng: this.longitude || 0 },
                zoom: this.zoom,
                minZoom: this.minZoom,
                maxZoom: this.maxZoom,
                disableDefaultUI: this.disableDefaultUI,
                disableDoubleClickZoom: this.disableDoubleClickZoom,
                scrollwheel: this.scrollwheel,
                backgroundColor: this.backgroundColor,
                draggable: this.draggable,
                draggableCursor: this.draggableCursor,
                draggingCursor: this.draggingCursor,
                keyboardShortcuts: this.keyboardShortcuts,
                styles: this.styles,
                zoomControl: this.zoomControl,
                zoomControlOptions: this.zoomControlOptions,
                streetViewControl: this.streetViewControl,
                streetViewControlOptions: this.streetViewControlOptions,
                scaleControl: this.scaleControl,
                scaleControlOptions: this.scaleControlOptions,
                mapTypeControl: this.mapTypeControl,
                mapTypeControlOptions: this.mapTypeControlOptions,
                panControl: this.panControl,
                panControlOptions: this.panControlOptions,
                rotateControl: this.rotateControl,
                rotateControlOptions: this.rotateControlOptions,
                fullscreenControl: this.fullscreenControl,
                fullscreenControlOptions: this.fullscreenControlOptions,
                mapTypeId: this.mapTypeId,
                clickableIcons: this.clickableIcons,
                gestureHandling: this.gestureHandling
            })
                // .then(() => this._mapsWrapper.getNativeMap())
                .then(function () { return _this._mapsWrapper.getTrueNativeMap(); })
                .then(function (map) { return _this.mapReady.emit(map); });
            // register event listeners
            this._handleMapCenterChange();
            this._handleMapZoomChange();
            this._handleMapMouseEvents();
            this._handleBoundsChange();
            this._handleMapTypeIdChange();
            this._handleIdleEvent();
        };
        AgmMap.prototype._updateMapOptionsChanges = function (changes) {
            var options = {};
            var optionKeys = Object.keys(changes).filter(function (k) { return AgmMap_1._mapOptionsAttributes.indexOf(k) !== -1; });
            optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
            this._mapsWrapper.setMapOptions(options);
        };
        AgmMap.prototype._updatePosition = function (changes) {
            if (changes['latitude'] == null && changes['longitude'] == null &&
                changes['fitBounds'] == null) {
                // no position update needed
                return;
            }
            // we prefer fitBounds in changes
            if (changes['fitBounds'] && this.fitBounds != null) {
                this._fitBounds();
                return;
            }
            if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
                return;
            }
            this._setCenter();
        };
        AgmMap.prototype._setCenter = function () {
            var newCenter = {
                lat: this.latitude,
                lng: this.longitude,
            };
            if (this.usePanning) {
                this._mapsWrapper.panTo(newCenter);
            }
            else {
                this._mapsWrapper.setCenter(newCenter);
            }
        };
        AgmMap.prototype._fitBounds = function () {
            if (this.usePanning) {
                this._mapsWrapper.panToBounds(this.fitBounds);
                return;
            }
            this._mapsWrapper.fitBounds(this.fitBounds);
        };
        AgmMap.prototype._handleMapCenterChange = function () {
            var _this = this;
            var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
                _this._mapsWrapper.getCenter().then(function (center) {
                    _this.latitude = center.lat();
                    _this.longitude = center.lng();
                    _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
                });
            });
            this._observableSubscriptions.push(s);
        };
        AgmMap.prototype._handleBoundsChange = function () {
            var _this = this;
            var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
                _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
            });
            this._observableSubscriptions.push(s);
        };
        AgmMap.prototype._handleMapTypeIdChange = function () {
            var _this = this;
            var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
                _this._mapsWrapper.getMapTypeId().then(function (mapTypeId) { _this.mapTypeIdChange.emit(mapTypeId); });
            });
            this._observableSubscriptions.push(s);
        };
        AgmMap.prototype._handleMapZoomChange = function () {
            var _this = this;
            var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
                _this._mapsWrapper.getZoom().then(function (z) {
                    _this.zoom = z;
                    _this.zoomChange.emit(z);
                });
            });
            this._observableSubscriptions.push(s);
        };
        AgmMap.prototype._handleIdleEvent = function () {
            var _this = this;
            var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
            this._observableSubscriptions.push(s);
        };
        AgmMap.prototype._handleMapMouseEvents = function () {
            var _this = this;
            var events = [
                { name: 'click', emitter: this.mapClick },
                { name: 'rightclick', emitter: this.mapRightClick },
                { name: 'dblclick', emitter: this.mapDblClick },
            ];
            events.forEach(function (e) {
                var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                    var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                    e.emitter.emit(value);
                });
                _this._observableSubscriptions.push(s);
            });
        };
        var AgmMap_1;
        /**
         * Map option attributes that can change over time
         */
        AgmMap._mapOptionsAttributes = [
            'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
            'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
            'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
            'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
            'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
            'mapTypeId', 'clickableIcons', 'gestureHandling'
        ];
        AgmMap.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: GoogleMapsAPIWrapper }
        ]; };
        __decorate([
            core.Input()
        ], AgmMap.prototype, "longitude", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "latitude", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "zoom", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "minZoom", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "maxZoom", void 0);
        __decorate([
            core.Input('mapDraggable')
        ], AgmMap.prototype, "draggable", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "disableDoubleClickZoom", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "disableDefaultUI", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "scrollwheel", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "backgroundColor", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "draggableCursor", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "draggingCursor", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "keyboardShortcuts", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "zoomControl", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "zoomControlOptions", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "styles", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "usePanning", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "streetViewControl", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "streetViewControlOptions", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "fitBounds", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "scaleControl", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "scaleControlOptions", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "mapTypeControl", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "mapTypeControlOptions", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "panControl", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "panControlOptions", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "rotateControl", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "rotateControlOptions", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "fullscreenControl", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "fullscreenControlOptions", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "mapTypeId", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "clickableIcons", void 0);
        __decorate([
            core.Input()
        ], AgmMap.prototype, "gestureHandling", void 0);
        __decorate([
            core.Output()
        ], AgmMap.prototype, "mapClick", void 0);
        __decorate([
            core.Output()
        ], AgmMap.prototype, "mapRightClick", void 0);
        __decorate([
            core.Output()
        ], AgmMap.prototype, "mapDblClick", void 0);
        __decorate([
            core.Output()
        ], AgmMap.prototype, "centerChange", void 0);
        __decorate([
            core.Output()
        ], AgmMap.prototype, "boundsChange", void 0);
        __decorate([
            core.Output()
        ], AgmMap.prototype, "mapTypeIdChange", void 0);
        __decorate([
            core.Output()
        ], AgmMap.prototype, "idle", void 0);
        __decorate([
            core.Output()
        ], AgmMap.prototype, "zoomChange", void 0);
        __decorate([
            core.Output()
        ], AgmMap.prototype, "mapReady", void 0);
        AgmMap = AgmMap_1 = __decorate([
            core.Component({
                selector: 'agm-map',
                providers: [
                    GoogleMapsAPIWrapper, MarkerManager, InfoWindowManager, CircleManager, PolylineManager,
                    PolygonManager, KmlLayerManager, DataLayerManager, SearchBoxManager
                ],
                template: "\n    <div class='agm-map-container-inner'></div>\n    <div class='agm-map-content'>\n      <ng-content></ng-content>\n    </div>\n  ",
                styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "]
            })
        ], AgmMap);
        return AgmMap;
    }());

    var AgmCircle = /** @class */ (function () {
        function AgmCircle(_manager) {
            this._manager = _manager;
            /**
             * Indicates whether this Circle handles mouse events. Defaults to true.
             */
            this.clickable = true;
            /**
             * If set to true, the user can drag this circle over the map. Defaults to false.
             */
            // tslint:disable-next-line:no-input-rename
            this.draggable = false;
            /**
             * If set to true, the user can edit this circle by dragging the control points shown at
             * the center and around the circumference of the circle. Defaults to false.
             */
            this.editable = false;
            /**
             * The radius in meters on the Earth's surface.
             */
            this.radius = 0;
            /**
             * The stroke position. Defaults to CENTER.
             * This property is not supported on Internet Explorer 8 and earlier.
             */
            this.strokePosition = 'CENTER';
            /**
             * The stroke width in pixels.
             */
            this.strokeWeight = 0;
            /**
             * Whether this circle is visible on the map. Defaults to true.
             */
            this.visible = true;
            /**
             * This event is fired when the circle's center is changed.
             */
            this.centerChange = new core.EventEmitter();
            /**
             * This event emitter gets emitted when the user clicks on the circle.
             */
            this.circleClick = new core.EventEmitter();
            /**
             * This event emitter gets emitted when the user clicks on the circle.
             */
            this.circleDblClick = new core.EventEmitter();
            /**
             * This event is repeatedly fired while the user drags the circle.
             */
            this.drag = new core.EventEmitter();
            /**
             * This event is fired when the user stops dragging the circle.
             */
            this.dragEnd = new core.EventEmitter();
            /**
             * This event is fired when the user starts dragging the circle.
             */
            this.dragStart = new core.EventEmitter();
            /**
             * This event is fired when the DOM mousedown event is fired on the circle.
             */
            this.mouseDown = new core.EventEmitter();
            /**
             * This event is fired when the DOM mousemove event is fired on the circle.
             */
            this.mouseMove = new core.EventEmitter();
            /**
             * This event is fired on circle mouseout.
             */
            this.mouseOut = new core.EventEmitter();
            /**
             * This event is fired on circle mouseover.
             */
            this.mouseOver = new core.EventEmitter();
            /**
             * This event is fired when the DOM mouseup event is fired on the circle.
             */
            this.mouseUp = new core.EventEmitter();
            /**
             * This event is fired when the circle's radius is changed.
             */
            this.radiusChange = new core.EventEmitter();
            /**
             * This event is fired when the circle is right-clicked on.
             */
            this.rightClick = new core.EventEmitter();
            this._circleAddedToManager = false;
            this._eventSubscriptions = [];
        }
        AgmCircle_1 = AgmCircle;
        /** @internal */
        AgmCircle.prototype.ngOnInit = function () {
            this._manager.addCircle(this);
            this._circleAddedToManager = true;
            this._registerEventListeners();
        };
        /** @internal */
        AgmCircle.prototype.ngOnChanges = function (changes) {
            if (!this._circleAddedToManager) {
                return;
            }
            if (changes['latitude'] || changes['longitude']) {
                this._manager.setCenter(this);
            }
            if (changes['editable']) {
                this._manager.setEditable(this);
            }
            if (changes['draggable']) {
                this._manager.setDraggable(this);
            }
            if (changes['visible']) {
                this._manager.setVisible(this);
            }
            if (changes['radius']) {
                this._manager.setRadius(this);
            }
            this._updateCircleOptionsChanges(changes);
        };
        /** @internal */
        AgmCircle.prototype.ngOnDestroy = function () {
            this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
            this._eventSubscriptions = null;
            this._manager.removeCircle(this);
        };
        /**
         * Gets the LatLngBounds of this Circle.
         */
        AgmCircle.prototype.getBounds = function () { return this._manager.getBounds(this); };
        AgmCircle.prototype.getCenter = function () { return this._manager.getCenter(this); };
        AgmCircle.prototype._updateCircleOptionsChanges = function (changes) {
            var options = {};
            var optionKeys = Object.keys(changes).filter(function (k) { return AgmCircle_1._mapOptions.indexOf(k) !== -1; });
            optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
            if (optionKeys.length > 0) {
                this._manager.setOptions(this, options);
            }
        };
        AgmCircle.prototype._registerEventListeners = function () {
            var _this = this;
            var events = new Map();
            events.set('center_changed', this.centerChange);
            events.set('click', this.circleClick);
            events.set('dblclick', this.circleDblClick);
            events.set('drag', this.drag);
            events.set('dragend', this.dragEnd);
            events.set('dragStart', this.dragStart);
            events.set('mousedown', this.mouseDown);
            events.set('mousemove', this.mouseMove);
            events.set('mouseout', this.mouseOut);
            events.set('mouseover', this.mouseOver);
            events.set('mouseup', this.mouseUp);
            events.set('radius_changed', this.radiusChange);
            events.set('rightclick', this.rightClick);
            events.forEach(function (eventEmitter, eventName) {
                _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
                    switch (eventName) {
                        case 'radius_changed':
                            _this._manager.getRadius(_this).then(function (radius) { return eventEmitter.emit(radius); });
                            break;
                        case 'center_changed':
                            _this._manager.getCenter(_this).then(function (center) {
                                return eventEmitter.emit({ lat: center.lat(), lng: center.lng() });
                            });
                            break;
                        default:
                            eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
                    }
                }));
            });
        };
        var AgmCircle_1;
        AgmCircle._mapOptions = [
            'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
            'visible', 'zIndex', 'clickable'
        ];
        AgmCircle.ctorParameters = function () { return [
            { type: CircleManager }
        ]; };
        __decorate([
            core.Input()
        ], AgmCircle.prototype, "latitude", void 0);
        __decorate([
            core.Input()
        ], AgmCircle.prototype, "longitude", void 0);
        __decorate([
            core.Input()
        ], AgmCircle.prototype, "clickable", void 0);
        __decorate([
            core.Input('circleDraggable')
        ], AgmCircle.prototype, "draggable", void 0);
        __decorate([
            core.Input()
        ], AgmCircle.prototype, "editable", void 0);
        __decorate([
            core.Input()
        ], AgmCircle.prototype, "fillColor", void 0);
        __decorate([
            core.Input()
        ], AgmCircle.prototype, "fillOpacity", void 0);
        __decorate([
            core.Input()
        ], AgmCircle.prototype, "radius", void 0);
        __decorate([
            core.Input()
        ], AgmCircle.prototype, "strokeColor", void 0);
        __decorate([
            core.Input()
        ], AgmCircle.prototype, "strokeOpacity", void 0);
        __decorate([
            core.Input()
        ], AgmCircle.prototype, "strokePosition", void 0);
        __decorate([
            core.Input()
        ], AgmCircle.prototype, "strokeWeight", void 0);
        __decorate([
            core.Input()
        ], AgmCircle.prototype, "visible", void 0);
        __decorate([
            core.Input()
        ], AgmCircle.prototype, "zIndex", void 0);
        __decorate([
            core.Output()
        ], AgmCircle.prototype, "centerChange", void 0);
        __decorate([
            core.Output()
        ], AgmCircle.prototype, "circleClick", void 0);
        __decorate([
            core.Output()
        ], AgmCircle.prototype, "circleDblClick", void 0);
        __decorate([
            core.Output()
        ], AgmCircle.prototype, "drag", void 0);
        __decorate([
            core.Output()
        ], AgmCircle.prototype, "dragEnd", void 0);
        __decorate([
            core.Output()
        ], AgmCircle.prototype, "dragStart", void 0);
        __decorate([
            core.Output()
        ], AgmCircle.prototype, "mouseDown", void 0);
        __decorate([
            core.Output()
        ], AgmCircle.prototype, "mouseMove", void 0);
        __decorate([
            core.Output()
        ], AgmCircle.prototype, "mouseOut", void 0);
        __decorate([
            core.Output()
        ], AgmCircle.prototype, "mouseOver", void 0);
        __decorate([
            core.Output()
        ], AgmCircle.prototype, "mouseUp", void 0);
        __decorate([
            core.Output()
        ], AgmCircle.prototype, "radiusChange", void 0);
        __decorate([
            core.Output()
        ], AgmCircle.prototype, "rightClick", void 0);
        AgmCircle = AgmCircle_1 = __decorate([
            core.Directive({
                selector: 'agm-circle'
            })
        ], AgmCircle);
        return AgmCircle;
    }());

    var infoWindowId = 0;
    /**
     * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    .agm-map-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
     *        <agm-info-window [disableAutoPan]="true">
     *          Hi, this is the content of the <strong>info window</strong>
     *        </agm-info-window>
     *      </agm-marker>
     *    </agm-map>
     *  `
     * })
     * ```
     */
    var AgmInfoWindow = /** @class */ (function () {
        function AgmInfoWindow(_infoWindowManager, _el) {
            this._infoWindowManager = _infoWindowManager;
            this._el = _el;
            /**
             * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
             */
            this.isOpen = false;
            /**
             * Emits an event when the info window is closed.
             */
            this.infoWindowClose = new core.EventEmitter();
            this._infoWindowAddedToManager = false;
            this._id = (infoWindowId++).toString();
        }
        AgmInfoWindow_1 = AgmInfoWindow;
        AgmInfoWindow.prototype.ngOnInit = function () {
            this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
            this._infoWindowManager.addInfoWindow(this);
            this._infoWindowAddedToManager = true;
            this._updateOpenState();
            this._registerEventListeners();
        };
        /** @internal */
        AgmInfoWindow.prototype.ngOnChanges = function (changes) {
            if (!this._infoWindowAddedToManager) {
                return;
            }
            if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
                typeof this.longitude === 'number') {
                this._infoWindowManager.setPosition(this);
            }
            if (changes['zIndex']) {
                this._infoWindowManager.setZIndex(this);
            }
            if (changes['isOpen']) {
                this._updateOpenState();
            }
            this._setInfoWindowOptions(changes);
        };
        /**
         * Opens the info window.
         */
        AgmInfoWindow.prototype.open = function () { return this._infoWindowManager.open(this); };
        /**
         * Closes the info window.
         */
        AgmInfoWindow.prototype.close = function () {
            var _this = this;
            return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(); });
        };
        /** @internal */
        AgmInfoWindow.prototype.id = function () { return this._id; };
        /** @internal */
        AgmInfoWindow.prototype.toString = function () { return 'AgmInfoWindow-' + this._id.toString(); };
        /** @internal */
        AgmInfoWindow.prototype.ngOnDestroy = function () { this._infoWindowManager.deleteInfoWindow(this); };
        AgmInfoWindow.prototype._registerEventListeners = function () {
            var _this = this;
            this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
                _this.isOpen = false;
                _this.infoWindowClose.emit();
            });
        };
        AgmInfoWindow.prototype._updateOpenState = function () {
            this.isOpen ? this.open() : this.close();
        };
        AgmInfoWindow.prototype._setInfoWindowOptions = function (changes) {
            var options = {};
            var optionKeys = Object.keys(changes).filter(function (k) { return AgmInfoWindow_1._infoWindowOptionsInputs.indexOf(k) !== -1; });
            optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
            this._infoWindowManager.setOptions(this, options);
        };
        var AgmInfoWindow_1;
        AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
        AgmInfoWindow.ctorParameters = function () { return [
            { type: InfoWindowManager },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], AgmInfoWindow.prototype, "latitude", void 0);
        __decorate([
            core.Input()
        ], AgmInfoWindow.prototype, "longitude", void 0);
        __decorate([
            core.Input()
        ], AgmInfoWindow.prototype, "disableAutoPan", void 0);
        __decorate([
            core.Input()
        ], AgmInfoWindow.prototype, "zIndex", void 0);
        __decorate([
            core.Input()
        ], AgmInfoWindow.prototype, "maxWidth", void 0);
        __decorate([
            core.Input()
        ], AgmInfoWindow.prototype, "isOpen", void 0);
        __decorate([
            core.Output()
        ], AgmInfoWindow.prototype, "infoWindowClose", void 0);
        AgmInfoWindow = AgmInfoWindow_1 = __decorate([
            core.Component({
                selector: 'agm-info-window',
                template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
            })
        ], AgmInfoWindow);
        return AgmInfoWindow;
    }());

    var layerId = 0;
    var AgmKmlLayer = /** @class */ (function () {
        function AgmKmlLayer(_manager) {
            this._manager = _manager;
            /**
             * If true, the layer receives mouse events. Default value is true.
             */
            this.clickable = true;
            /**
             * By default, the input map is centered and zoomed to the bounding box of the contents of the
             * layer.
             * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
             * were never set.
             */
            this.preserveViewport = false;
            /**
             * Whether to render the screen overlays. Default true.
             */
            this.screenOverlays = true;
            /**
             * Suppress the rendering of info windows when layer features are clicked.
             */
            this.suppressInfoWindows = false;
            /**
             * The URL of the KML document to display.
             */
            this.url = null;
            /**
             * The z-index of the layer.
             */
            this.zIndex = null;
            /**
             * This event is fired when a feature in the layer is clicked.
             */
            this.layerClick = new core.EventEmitter();
            /**
             * This event is fired when the KML layers default viewport has changed.
             */
            this.defaultViewportChange = new core.EventEmitter();
            /**
             * This event is fired when the KML layer has finished loading.
             * At this point it is safe to read the status property to determine if the layer loaded
             * successfully.
             */
            this.statusChange = new core.EventEmitter();
            this._addedToManager = false;
            this._id = (layerId++).toString();
            this._subscriptions = [];
        }
        AgmKmlLayer_1 = AgmKmlLayer;
        AgmKmlLayer.prototype.ngOnInit = function () {
            if (this._addedToManager) {
                return;
            }
            this._manager.addKmlLayer(this);
            this._addedToManager = true;
            this._addEventListeners();
        };
        AgmKmlLayer.prototype.ngOnChanges = function (changes) {
            if (!this._addedToManager) {
                return;
            }
            this._updatePolygonOptions(changes);
        };
        /** @internal */
        AgmKmlLayer.prototype.id = function () { return this._id; };
        /** @internal */
        AgmKmlLayer.prototype.toString = function () { return "AgmKmlLayer-" + this._id.toString(); };
        /** @internal */
        AgmKmlLayer.prototype.ngOnDestroy = function () {
            this._manager.deleteKmlLayer(this);
            // unsubscribe all registered observable subscriptions
            this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
        };
        AgmKmlLayer.prototype._updatePolygonOptions = function (changes) {
            var options = Object.keys(changes)
                .filter(function (k) { return AgmKmlLayer_1._kmlLayerOptions.indexOf(k) !== -1; })
                .reduce(function (obj, k) {
                obj[k] = changes[k].currentValue;
                return obj;
            }, {});
            if (Object.keys(options).length > 0) {
                this._manager.setOptions(this, options);
            }
        };
        AgmKmlLayer.prototype._addEventListeners = function () {
            var _this = this;
            var listeners = [
                { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
                { name: 'defaultviewport_changed', handler: function () { return _this.defaultViewportChange.emit(); } },
                { name: 'status_changed', handler: function () { return _this.statusChange.emit(); } },
            ];
            listeners.forEach(function (obj) {
                var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
                _this._subscriptions.push(os);
            });
        };
        var AgmKmlLayer_1;
        AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
        AgmKmlLayer.ctorParameters = function () { return [
            { type: KmlLayerManager }
        ]; };
        __decorate([
            core.Input()
        ], AgmKmlLayer.prototype, "clickable", void 0);
        __decorate([
            core.Input()
        ], AgmKmlLayer.prototype, "preserveViewport", void 0);
        __decorate([
            core.Input()
        ], AgmKmlLayer.prototype, "screenOverlays", void 0);
        __decorate([
            core.Input()
        ], AgmKmlLayer.prototype, "suppressInfoWindows", void 0);
        __decorate([
            core.Input()
        ], AgmKmlLayer.prototype, "url", void 0);
        __decorate([
            core.Input()
        ], AgmKmlLayer.prototype, "zIndex", void 0);
        __decorate([
            core.Output()
        ], AgmKmlLayer.prototype, "layerClick", void 0);
        __decorate([
            core.Output()
        ], AgmKmlLayer.prototype, "defaultViewportChange", void 0);
        __decorate([
            core.Output()
        ], AgmKmlLayer.prototype, "statusChange", void 0);
        AgmKmlLayer = AgmKmlLayer_1 = __decorate([
            core.Directive({
                selector: 'agm-kml-layer'
            })
        ], AgmKmlLayer);
        return AgmKmlLayer;
    }());

    var layerId$1 = 0;
    /**
     * AgmDataLayer enables the user to add data layers to the map.
     *
     * ### Example
     * ```typescript
     * import { Component } from 'angular2/core';
     * import { AgmMap, AgmDataLayer } from
     * 'angular-google-maps/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  directives: [AgmMap, AgmDataLayer],
     *  styles: [`
     *    .agm-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
     * 	  </agm-data-layer>
     * </agm-map>
     *  `
     * })
     * export class MyMapCmp {
     *   lat: number = -25.274449;
     *   lng: number = 133.775060;
     *   zoom: number = 5;
     *
     * clicked(clickEvent) {
     *    console.log(clickEvent);
     *  }
     *
     *  styleFunc(feature) {
     *    return ({
     *      clickable: false,
     *      fillColor: feature.getProperty('color'),
     *      strokeWeight: 1
     *    });
     *  }
     *
     *  geoJsonObject: Object = {
     *    "type": "FeatureCollection",
     *    "features": [
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "G",
     *          "color": "blue",
     *          "rank": "7",
     *          "ascii": "71"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
     *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
     *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
     *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
     *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
     *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
     *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
     *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "o",
     *          "color": "red",
     *          "rank": "15",
     *          "ascii": "111"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
     *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
     *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
     *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
     *            ],
     *            [
     *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
     *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "o",
     *          "color": "yellow",
     *          "rank": "15",
     *          "ascii": "111"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
     *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
     *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
     *              [132.71, -25.64], [131.87, -25.76]
     *            ],
     *            [
     *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
     *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "g",
     *          "color": "blue",
     *          "rank": "7",
     *          "ascii": "103"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
     *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
     *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
     *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
     *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
     *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
     *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
     *            ],
     *            [
     *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
     *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "l",
     *          "color": "green",
     *          "rank": "12",
     *          "ascii": "108"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "e",
     *          "color": "red",
     *          "rank": "5",
     *          "ascii": "101"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
     *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
     *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
     *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
     *              [144.31, -28.26], [144.14, -27.41]
     *            ],
     *            [
     *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
     *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
     *            ]
     *          ]
     *        }
     *      }
     *    ]
     *  };
     * }
     * ```
     */
    var AgmDataLayer = /** @class */ (function () {
        function AgmDataLayer(_manager) {
            this._manager = _manager;
            /**
             * This event is fired when a feature in the layer is clicked.
             */
            this.layerClick = new core.EventEmitter();
            /**
             * The geoJson to be displayed
             */
            this.geoJson = null;
            this._addedToManager = false;
            this._id = (layerId$1++).toString();
            this._subscriptions = [];
        }
        AgmDataLayer_1 = AgmDataLayer;
        AgmDataLayer.prototype.ngOnInit = function () {
            if (this._addedToManager) {
                return;
            }
            this._manager.addDataLayer(this);
            this._addedToManager = true;
            this._addEventListeners();
        };
        /** @internal */
        AgmDataLayer.prototype.id = function () { return this._id; };
        /** @internal */
        AgmDataLayer.prototype.toString = function () { return "AgmDataLayer-" + this._id.toString(); };
        /** @internal */
        AgmDataLayer.prototype.ngOnDestroy = function () {
            this._manager.deleteDataLayer(this);
            // unsubscribe all registered observable subscriptions
            this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
        };
        /** @internal */
        AgmDataLayer.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (!this._addedToManager) {
                return;
            }
            var geoJsonChange = changes['geoJson'];
            if (geoJsonChange) {
                this._manager.updateGeoJson(this, geoJsonChange.currentValue);
            }
            var dataOptions = {};
            AgmDataLayer_1._dataOptionsAttributes.forEach(function (k) { return dataOptions[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : _this[k]; });
            this._manager.setDataOptions(this, dataOptions);
        };
        AgmDataLayer.prototype._addEventListeners = function () {
            var _this = this;
            var listeners = [
                { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
            ];
            listeners.forEach(function (obj) {
                var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
                _this._subscriptions.push(os);
            });
        };
        var AgmDataLayer_1;
        AgmDataLayer._dataOptionsAttributes = ['style'];
        AgmDataLayer.ctorParameters = function () { return [
            { type: DataLayerManager }
        ]; };
        __decorate([
            core.Output()
        ], AgmDataLayer.prototype, "layerClick", void 0);
        __decorate([
            core.Input()
        ], AgmDataLayer.prototype, "geoJson", void 0);
        __decorate([
            core.Input()
        ], AgmDataLayer.prototype, "style", void 0);
        AgmDataLayer = AgmDataLayer_1 = __decorate([
            core.Directive({
                selector: 'agm-data-layer'
            })
        ], AgmDataLayer);
        return AgmDataLayer;
    }());

    var markerId = 0;
    /**
     * AgmMarker renders a map marker inside a {@link AgmMap}.
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    .agm-map-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
     *      </agm-marker>
     *    </agm-map>
     *  `
     * })
     * ```
     */
    var AgmMarker = /** @class */ (function () {
        function AgmMarker(_markerManager) {
            this._markerManager = _markerManager;
            /**
             * If true, the marker can be dragged. Default value is false.
             */
            // tslint:disable-next-line:no-input-rename
            this.draggable = false;
            /**
             * If true, the marker is visible
             */
            this.visible = true;
            /**
             * Whether to automatically open the child info window when the marker is clicked.
             */
            this.openInfoWindow = true;
            /**
             * The marker's opacity between 0.0 and 1.0.
             */
            this.opacity = 1;
            /**
             * All markers are displayed on the map in order of their zIndex, with higher values displaying in
             * front of markers with lower values. By default, markers are displayed according to their
             * vertical position on screen, with lower markers appearing in front of markers further up the
             * screen.
             */
            this.zIndex = 1;
            /**
             * If true, the marker can be clicked. Default value is true.
             */
            // tslint:disable-next-line:no-input-rename
            this.clickable = true;
            /**
             * This event emitter gets emitted when the user clicks on the marker.
             */
            this.markerClick = new core.EventEmitter();
            /**
             * This event is fired when the user stops dragging the marker.
             */
            this.dragEnd = new core.EventEmitter();
            /**
             * This event is fired when the user mouses over the marker.
             */
            this.mouseOver = new core.EventEmitter();
            /**
             * This event is fired when the user mouses outside the marker.
             */
            this.mouseOut = new core.EventEmitter();
            /**
             * @internal
             */
            this.infoWindow = new core.QueryList();
            this._markerAddedToManger = false;
            this._observableSubscriptions = [];
            this._id = (markerId++).toString();
        }
        /* @internal */
        AgmMarker.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.handleInfoWindowUpdate();
            this.infoWindow.changes.subscribe(function () { return _this.handleInfoWindowUpdate(); });
        };
        /** @internal */
        AgmMarker.prototype.ngOnChanges = function (changes) {
            if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
                return;
            }
            if (!this._markerAddedToManger) {
                this._markerManager.addMarker(this);
                this._markerAddedToManger = true;
                this._addEventListeners();
                return;
            }
            if (changes['latitude'] || changes['longitude']) {
                this._markerManager.updateMarkerPosition(this);
            }
            if (changes['title']) {
                this._markerManager.updateTitle(this);
            }
            if (changes['label']) {
                this._markerManager.updateLabel(this);
            }
            if (changes['draggable']) {
                this._markerManager.updateDraggable(this);
            }
            if (changes['iconUrl']) {
                this._markerManager.updateIcon(this);
            }
            if (changes['opacity']) {
                this._markerManager.updateOpacity(this);
            }
            if (changes['visible']) {
                this._markerManager.updateVisible(this);
            }
            if (changes['zIndex']) {
                this._markerManager.updateZIndex(this);
            }
            if (changes['clickable']) {
                this._markerManager.updateClickable(this);
            }
            if (changes['animation']) {
                this._markerManager.updateAnimation(this);
            }
        };
        /** @internal */
        AgmMarker.prototype.id = function () { return this._id; };
        /** @internal */
        AgmMarker.prototype.toString = function () { return 'AgmMarker-' + this._id.toString(); };
        /** @internal */
        AgmMarker.prototype.ngOnDestroy = function () {
            this._markerManager.deleteMarker(this);
            // unsubscribe all registered observable subscriptions
            this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        };
        AgmMarker.prototype.handleInfoWindowUpdate = function () {
            var _this = this;
            if (this.infoWindow.length > 1) {
                throw new Error('Expected no more than one info window.');
            }
            this.infoWindow.forEach(function (marker) {
                marker.hostMarker = _this;
            });
        };
        AgmMarker.prototype._addEventListeners = function () {
            var _this = this;
            var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
                if (_this.openInfoWindow) {
                    _this.infoWindow.forEach(function (infoWindow) { return infoWindow.open(); });
                }
                _this.markerClick.emit(null);
            });
            this._observableSubscriptions.push(cs);
            var ds = this._markerManager.createEventObservable('dragend', this)
                .subscribe(function (e) {
                _this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
            });
            this._observableSubscriptions.push(ds);
            var mover = this._markerManager.createEventObservable('mouseover', this)
                .subscribe(function (e) {
                _this.mouseOver.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
            });
            this._observableSubscriptions.push(mover);
            var mout = this._markerManager.createEventObservable('mouseout', this)
                .subscribe(function (e) {
                _this.mouseOut.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
            });
            this._observableSubscriptions.push(mout);
        };
        AgmMarker.ctorParameters = function () { return [
            { type: MarkerManager }
        ]; };
        __decorate([
            core.Input()
        ], AgmMarker.prototype, "latitude", void 0);
        __decorate([
            core.Input()
        ], AgmMarker.prototype, "longitude", void 0);
        __decorate([
            core.Input()
        ], AgmMarker.prototype, "title", void 0);
        __decorate([
            core.Input()
        ], AgmMarker.prototype, "label", void 0);
        __decorate([
            core.Input('markerDraggable')
        ], AgmMarker.prototype, "draggable", void 0);
        __decorate([
            core.Input()
        ], AgmMarker.prototype, "iconUrl", void 0);
        __decorate([
            core.Input()
        ], AgmMarker.prototype, "visible", void 0);
        __decorate([
            core.Input()
        ], AgmMarker.prototype, "openInfoWindow", void 0);
        __decorate([
            core.Input()
        ], AgmMarker.prototype, "opacity", void 0);
        __decorate([
            core.Input()
        ], AgmMarker.prototype, "zIndex", void 0);
        __decorate([
            core.Input('markerClickable')
        ], AgmMarker.prototype, "clickable", void 0);
        __decorate([
            core.Output()
        ], AgmMarker.prototype, "markerClick", void 0);
        __decorate([
            core.Output()
        ], AgmMarker.prototype, "dragEnd", void 0);
        __decorate([
            core.Output()
        ], AgmMarker.prototype, "mouseOver", void 0);
        __decorate([
            core.Output()
        ], AgmMarker.prototype, "mouseOut", void 0);
        __decorate([
            core.ContentChildren(AgmInfoWindow)
        ], AgmMarker.prototype, "infoWindow", void 0);
        AgmMarker = __decorate([
            core.Directive({
                selector: 'agm-marker',
                inputs: [
                    'latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl',
                    'openInfoWindow', 'opacity', 'visible', 'zIndex', 'animation'
                ],
                outputs: ['markerClick', 'dragEnd', 'mouseOver', 'mouseOut']
            })
        ], AgmMarker);
        return AgmMarker;
    }());

    /**
     * AgmPolygon renders a polygon on a {@link AgmMap}
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    agm-map {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-polygon [paths]="paths">
     *      </agm-polygon>
     *    </agm-map>
     *  `
     * })
     * export class MyMapCmp {
     *   lat: number = 0;
     *   lng: number = 0;
     *   zoom: number = 10;
     *   paths: Array<LatLngLiteral> = [
     *     { lat: 0,  lng: 10 },
     *     { lat: 0,  lng: 20 },
     *     { lat: 10, lng: 20 },
     *     { lat: 10, lng: 10 },
     *     { lat: 0,  lng: 10 }
     *   ]
     *   // Nesting paths will create a hole where they overlap;
     *   nestedPaths: Array<Array<LatLngLiteral>> = [[
     *     { lat: 0,  lng: 10 },
     *     { lat: 0,  lng: 20 },
     *     { lat: 10, lng: 20 },
     *     { lat: 10, lng: 10 },
     *     { lat: 0,  lng: 10 }
     *   ], [
     *     { lat: 0, lng: 15 },
     *     { lat: 0, lng: 20 },
     *     { lat: 5, lng: 20 },
     *     { lat: 5, lng: 15 },
     *     { lat: 0, lng: 15 }
     *   ]]
     * }
     * ```
     */
    var AgmPolygon = /** @class */ (function () {
        function AgmPolygon(_polygonManager) {
            this._polygonManager = _polygonManager;
            /**
             * Indicates whether this Polygon handles mouse events. Defaults to true.
             */
            this.clickable = true;
            /**
             * If set to true, the user can drag this shape over the map. The geodesic
             * property defines the mode of dragging. Defaults to false.
             */
            // tslint:disable-next-line:no-input-rename
            this.draggable = false;
            /**
             * If set to true, the user can edit this shape by dragging the control
             * points shown at the vertices and on each segment. Defaults to false.
             */
            this.editable = false;
            /**
             * When true, edges of the polygon are interpreted as geodesic and will
             * follow the curvature of the Earth. When false, edges of the polygon are
             * rendered as straight lines in screen space. Note that the shape of a
             * geodesic polygon may appear to change when dragged, as the dimensions
             * are maintained relative to the surface of the earth. Defaults to false.
             */
            this.geodesic = false;
            /**
             * The ordered sequence of coordinates that designates a closed loop.
             * Unlike polylines, a polygon may consist of one or more paths.
             *  As a result, the paths property may specify one or more arrays of
             * LatLng coordinates. Paths are closed automatically; do not repeat the
             * first vertex of the path as the last vertex. Simple polygons may be
             * defined using a single array of LatLngs. More complex polygons may
             * specify an array of arrays. Any simple arrays are converted into Arrays.
             * Inserting or removing LatLngs from the Array will automatically update
             * the polygon on the map.
             */
            this.paths = [];
            /**
             * This event is fired when the DOM click event is fired on the Polygon.
             */
            this.polyClick = new core.EventEmitter();
            /**
             * This event is fired when the DOM dblclick event is fired on the Polygon.
             */
            this.polyDblClick = new core.EventEmitter();
            /**
             * This event is repeatedly fired while the user drags the polygon.
             */
            this.polyDrag = new core.EventEmitter();
            /**
             * This event is fired when the user stops dragging the polygon.
             */
            this.polyDragEnd = new core.EventEmitter();
            /**
             * This event is fired when the user starts dragging the polygon.
             */
            this.polyDragStart = new core.EventEmitter();
            /**
             * This event is fired when the DOM mousedown event is fired on the Polygon.
             */
            this.polyMouseDown = new core.EventEmitter();
            /**
             * This event is fired when the DOM mousemove event is fired on the Polygon.
             */
            this.polyMouseMove = new core.EventEmitter();
            /**
             * This event is fired on Polygon mouseout.
             */
            this.polyMouseOut = new core.EventEmitter();
            /**
             * This event is fired on Polygon mouseover.
             */
            this.polyMouseOver = new core.EventEmitter();
            /**
             * This event is fired whe the DOM mouseup event is fired on the Polygon
             */
            this.polyMouseUp = new core.EventEmitter();
            /**
             * This even is fired when the Polygon is right-clicked on.
             */
            this.polyRightClick = new core.EventEmitter();
            this._polygonAddedToManager = false;
            this._subscriptions = [];
        }
        AgmPolygon_1 = AgmPolygon;
        /** @internal */
        AgmPolygon.prototype.ngAfterContentInit = function () {
            if (!this._polygonAddedToManager) {
                this._init();
            }
        };
        AgmPolygon.prototype.ngOnChanges = function (changes) {
            if (!this._polygonAddedToManager) {
                this._init();
                return;
            }
            this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
        };
        /** @internal */
        AgmPolygon.prototype.id = function () { return this._id; };
        /** @internal */
        AgmPolygon.prototype.ngOnDestroy = function () {
            this._polygonManager.deletePolygon(this);
            // unsubscribe all registered observable subscriptions
            this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
        };
        AgmPolygon.prototype._init = function () {
            this._polygonManager.addPolygon(this);
            this._polygonAddedToManager = true;
            this._addEventListeners();
        };
        AgmPolygon.prototype._addEventListeners = function () {
            var _this = this;
            var handlers = [
                { name: 'click', handler: function (ev) { return _this.polyClick.emit(ev); } },
                { name: 'dbclick', handler: function (ev) { return _this.polyDblClick.emit(ev); } },
                { name: 'drag', handler: function (ev) { return _this.polyDrag.emit(ev); } },
                { name: 'dragend', handler: function (ev) { return _this.polyDragEnd.emit(ev); } },
                { name: 'dragstart', handler: function (ev) { return _this.polyDragStart.emit(ev); } },
                { name: 'mousedown', handler: function (ev) { return _this.polyMouseDown.emit(ev); } },
                { name: 'mousemove', handler: function (ev) { return _this.polyMouseMove.emit(ev); } },
                { name: 'mouseout', handler: function (ev) { return _this.polyMouseOut.emit(ev); } },
                { name: 'mouseover', handler: function (ev) { return _this.polyMouseOver.emit(ev); } },
                { name: 'mouseup', handler: function (ev) { return _this.polyMouseUp.emit(ev); } },
                { name: 'rightclick', handler: function (ev) { return _this.polyRightClick.emit(ev); } },
            ];
            handlers.forEach(function (obj) {
                var os = _this._polygonManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
                _this._subscriptions.push(os);
            });
        };
        AgmPolygon.prototype._updatePolygonOptions = function (changes) {
            return Object.keys(changes)
                .filter(function (k) { return AgmPolygon_1._polygonOptionsAttributes.indexOf(k) !== -1; })
                .reduce(function (obj, k) {
                obj[k] = changes[k].currentValue;
                return obj;
            }, {});
        };
        var AgmPolygon_1;
        AgmPolygon._polygonOptionsAttributes = [
            'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
            'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
            'editable', 'visible'
        ];
        AgmPolygon.ctorParameters = function () { return [
            { type: PolygonManager }
        ]; };
        __decorate([
            core.Input()
        ], AgmPolygon.prototype, "clickable", void 0);
        __decorate([
            core.Input('polyDraggable')
        ], AgmPolygon.prototype, "draggable", void 0);
        __decorate([
            core.Input()
        ], AgmPolygon.prototype, "editable", void 0);
        __decorate([
            core.Input()
        ], AgmPolygon.prototype, "fillColor", void 0);
        __decorate([
            core.Input()
        ], AgmPolygon.prototype, "fillOpacity", void 0);
        __decorate([
            core.Input()
        ], AgmPolygon.prototype, "geodesic", void 0);
        __decorate([
            core.Input()
        ], AgmPolygon.prototype, "paths", void 0);
        __decorate([
            core.Input()
        ], AgmPolygon.prototype, "strokeColor", void 0);
        __decorate([
            core.Input()
        ], AgmPolygon.prototype, "strokeOpacity", void 0);
        __decorate([
            core.Input()
        ], AgmPolygon.prototype, "strokeWeight", void 0);
        __decorate([
            core.Input()
        ], AgmPolygon.prototype, "visible", void 0);
        __decorate([
            core.Input()
        ], AgmPolygon.prototype, "zIndex", void 0);
        __decorate([
            core.Output()
        ], AgmPolygon.prototype, "polyClick", void 0);
        __decorate([
            core.Output()
        ], AgmPolygon.prototype, "polyDblClick", void 0);
        __decorate([
            core.Output()
        ], AgmPolygon.prototype, "polyDrag", void 0);
        __decorate([
            core.Output()
        ], AgmPolygon.prototype, "polyDragEnd", void 0);
        __decorate([
            core.Output()
        ], AgmPolygon.prototype, "polyDragStart", void 0);
        __decorate([
            core.Output()
        ], AgmPolygon.prototype, "polyMouseDown", void 0);
        __decorate([
            core.Output()
        ], AgmPolygon.prototype, "polyMouseMove", void 0);
        __decorate([
            core.Output()
        ], AgmPolygon.prototype, "polyMouseOut", void 0);
        __decorate([
            core.Output()
        ], AgmPolygon.prototype, "polyMouseOver", void 0);
        __decorate([
            core.Output()
        ], AgmPolygon.prototype, "polyMouseUp", void 0);
        __decorate([
            core.Output()
        ], AgmPolygon.prototype, "polyRightClick", void 0);
        AgmPolygon = AgmPolygon_1 = __decorate([
            core.Directive({
                selector: 'agm-polygon'
            })
        ], AgmPolygon);
        return AgmPolygon;
    }());

    /**
     * AgmPolylinePoint represents one element of a polyline within a  {@link
     * SembGoogleMapPolyline}
     */
    var AgmPolylinePoint = /** @class */ (function () {
        function AgmPolylinePoint() {
            /**
             * This event emitter gets emitted when the position of the point changed.
             */
            this.positionChanged = new core.EventEmitter();
        }
        AgmPolylinePoint.prototype.ngOnChanges = function (changes) {
            if (changes['latitude'] || changes['longitude']) {
                var position = {
                    lat: changes['latitude'].currentValue,
                    lng: changes['longitude'].currentValue
                };
                this.positionChanged.emit(position);
            }
        };
        __decorate([
            core.Input()
        ], AgmPolylinePoint.prototype, "latitude", void 0);
        __decorate([
            core.Input()
        ], AgmPolylinePoint.prototype, "longitude", void 0);
        __decorate([
            core.Output()
        ], AgmPolylinePoint.prototype, "positionChanged", void 0);
        AgmPolylinePoint = __decorate([
            core.Directive({ selector: 'agm-polyline-point' })
        ], AgmPolylinePoint);
        return AgmPolylinePoint;
    }());

    var polylineId = 0;
    /**
     * AgmPolyline renders a polyline on a {@link AgmMap}
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    .agm-map-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-polyline>
     *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
     *          </agm-polyline-point>
     *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
     *          </agm-polyline-point>
     *      </agm-polyline>
     *    </agm-map>
     *  `
     * })
     * ```
     */
    var AgmPolyline = /** @class */ (function () {
        function AgmPolyline(_polylineManager) {
            this._polylineManager = _polylineManager;
            /**
             * Indicates whether this Polyline handles mouse events. Defaults to true.
             */
            this.clickable = true;
            /**
             * If set to true, the user can drag this shape over the map. The geodesic property defines the
             * mode of dragging. Defaults to false.
             */
            // tslint:disable-next-line:no-input-rename
            this.draggable = false;
            /**
             * If set to true, the user can edit this shape by dragging the control points shown at the
             * vertices and on each segment. Defaults to false.
             */
            this.editable = false;
            /**
             * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
             * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
             * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
             * are maintained relative to the surface of the earth. Defaults to false.
             */
            this.geodesic = false;
            /**
             * Whether this polyline is visible on the map. Defaults to true.
             */
            this.visible = true;
            /**
             * This event is fired when the DOM click event is fired on the Polyline.
             */
            this.lineClick = new core.EventEmitter();
            /**
             * This event is fired when the DOM dblclick event is fired on the Polyline.
             */
            this.lineDblClick = new core.EventEmitter();
            /**
             * This event is repeatedly fired while the user drags the polyline.
             */
            this.lineDrag = new core.EventEmitter();
            /**
             * This event is fired when the user stops dragging the polyline.
             */
            this.lineDragEnd = new core.EventEmitter();
            /**
             * This event is fired when the user starts dragging the polyline.
             */
            this.lineDragStart = new core.EventEmitter();
            /**
             * This event is fired when the DOM mousedown event is fired on the Polyline.
             */
            this.lineMouseDown = new core.EventEmitter();
            /**
             * This event is fired when the DOM mousemove event is fired on the Polyline.
             */
            this.lineMouseMove = new core.EventEmitter();
            /**
             * This event is fired on Polyline mouseout.
             */
            this.lineMouseOut = new core.EventEmitter();
            /**
             * This event is fired on Polyline mouseover.
             */
            this.lineMouseOver = new core.EventEmitter();
            /**
             * This event is fired whe the DOM mouseup event is fired on the Polyline
             */
            this.lineMouseUp = new core.EventEmitter();
            /**
             * This even is fired when the Polyline is right-clicked on.
             */
            this.lineRightClick = new core.EventEmitter();
            /**
             * This even is fired when a point in the path is updated
             */
            this.pointUpdated = new core.EventEmitter();
            this._polylineAddedToManager = false;
            this._subscriptions = [];
            this._id = (polylineId++).toString();
        }
        AgmPolyline_1 = AgmPolyline;
        /** @internal */
        AgmPolyline.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (this.points.length) {
                this.points.forEach(function (point) {
                    var s = point.positionChanged.subscribe(function () { _this._polylineManager.updatePolylinePoints(_this).then(function () { return _this.attachObservables(); }); });
                    _this._subscriptions.push(s);
                });
            }
            if (!this._polylineAddedToManager) {
                this._init();
            }
            var s = this.points.changes.subscribe(function () {
                _this._polylineManager.updatePolylinePoints(_this).then(function () { return _this.attachObservables(); });
            });
            this._subscriptions.push(s);
            this._polylineManager.updatePolylinePoints(this).then(function () { return _this.attachObservables(); });
        };
        /** @internal */
        AgmPolyline.prototype.ngOnChanges = function (changes) {
            if (!this._polylineAddedToManager) {
                this._init();
                return;
            }
            var options = {};
            var optionKeys = Object.keys(changes).filter(function (k) { return AgmPolyline_1._polylineOptionsAttributes.indexOf(k) !== -1; });
            optionKeys.forEach(function (k) { return options[k] = changes[k].currentValue; });
            this._polylineManager.setPolylineOptions(this, options);
        };
        /** @internal */
        AgmPolyline.prototype.attachObservables = function () {
            var _this = this;
            this._polylineManager.createEventObservableOnPath('set_at', this).subscribe(function (result) {
                _this.pointUpdated.emit(result);
            });
        };
        /** @internal */
        AgmPolyline.prototype._getPoints = function () {
            if (this.points) {
                return this.points.toArray();
            }
            return [];
        };
        /** @internal */
        AgmPolyline.prototype.id = function () { return this._id; };
        /** @internal */
        AgmPolyline.prototype.ngOnDestroy = function () {
            this._polylineManager.deletePolyline(this);
            // unsubscribe all registered observable subscriptions
            this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
        };
        AgmPolyline.prototype._init = function () {
            this._polylineManager.addPolyline(this);
            this._polylineAddedToManager = true;
            this._addEventListeners();
        };
        AgmPolyline.prototype._addEventListeners = function () {
            var _this = this;
            var handlers = [
                { name: 'click', handler: function (ev) { return _this.lineClick.emit(ev); } },
                { name: 'dblclick', handler: function (ev) { return _this.lineDblClick.emit(ev); } },
                { name: 'drag', handler: function (ev) { return _this.lineDrag.emit(ev); } },
                { name: 'dragend', handler: function (ev) { return _this.lineDragEnd.emit(ev); } },
                { name: 'dragstart', handler: function (ev) { return _this.lineDragStart.emit(ev); } },
                { name: 'mousedown', handler: function (ev) { return _this.lineMouseDown.emit(ev); } },
                { name: 'mousemove', handler: function (ev) { return _this.lineMouseMove.emit(ev); } },
                { name: 'mouseout', handler: function (ev) { return _this.lineMouseOut.emit(ev); } },
                { name: 'mouseover', handler: function (ev) { return _this.lineMouseOver.emit(ev); } },
                { name: 'mouseup', handler: function (ev) { return _this.lineMouseUp.emit(ev); } },
                { name: 'rightclick', handler: function (ev) { return _this.lineRightClick.emit(ev); } },
            ];
            handlers.forEach(function (obj) {
                var os = _this._polylineManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
                _this._subscriptions.push(os);
            });
        };
        var AgmPolyline_1;
        AgmPolyline._polylineOptionsAttributes = [
            'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
            'zIndex'
        ];
        AgmPolyline.ctorParameters = function () { return [
            { type: PolylineManager }
        ]; };
        __decorate([
            core.Input()
        ], AgmPolyline.prototype, "clickable", void 0);
        __decorate([
            core.Input('polylineDraggable')
        ], AgmPolyline.prototype, "draggable", void 0);
        __decorate([
            core.Input()
        ], AgmPolyline.prototype, "editable", void 0);
        __decorate([
            core.Input()
        ], AgmPolyline.prototype, "geodesic", void 0);
        __decorate([
            core.Input()
        ], AgmPolyline.prototype, "strokeColor", void 0);
        __decorate([
            core.Input()
        ], AgmPolyline.prototype, "strokeOpacity", void 0);
        __decorate([
            core.Input()
        ], AgmPolyline.prototype, "strokeWeight", void 0);
        __decorate([
            core.Input()
        ], AgmPolyline.prototype, "visible", void 0);
        __decorate([
            core.Input()
        ], AgmPolyline.prototype, "zIndex", void 0);
        __decorate([
            core.Output()
        ], AgmPolyline.prototype, "lineClick", void 0);
        __decorate([
            core.Output()
        ], AgmPolyline.prototype, "lineDblClick", void 0);
        __decorate([
            core.Output()
        ], AgmPolyline.prototype, "lineDrag", void 0);
        __decorate([
            core.Output()
        ], AgmPolyline.prototype, "lineDragEnd", void 0);
        __decorate([
            core.Output()
        ], AgmPolyline.prototype, "lineDragStart", void 0);
        __decorate([
            core.Output()
        ], AgmPolyline.prototype, "lineMouseDown", void 0);
        __decorate([
            core.Output()
        ], AgmPolyline.prototype, "lineMouseMove", void 0);
        __decorate([
            core.Output()
        ], AgmPolyline.prototype, "lineMouseOut", void 0);
        __decorate([
            core.Output()
        ], AgmPolyline.prototype, "lineMouseOver", void 0);
        __decorate([
            core.Output()
        ], AgmPolyline.prototype, "lineMouseUp", void 0);
        __decorate([
            core.Output()
        ], AgmPolyline.prototype, "lineRightClick", void 0);
        __decorate([
            core.Output()
        ], AgmPolyline.prototype, "pointUpdated", void 0);
        __decorate([
            core.ContentChildren(AgmPolylinePoint)
        ], AgmPolyline.prototype, "points", void 0);
        AgmPolyline = AgmPolyline_1 = __decorate([
            core.Directive({
                selector: 'agm-polyline'
            })
        ], AgmPolyline);
        return AgmPolyline;
    }());

    /**
     * AgmSearchBox allows to add a search box to the map
     *
     * ### Example
     *
     * ```
     * <agm-search-box [placeholder]="'Search'" [position]="ControlPosition.TOP_LEFT"
     *   (placesChange)="updateRef($event)"></agm-search-box>
     * ```
     *
     */
    var AgmSearchBox = /** @class */ (function () {
        function AgmSearchBox(gmapsApi, _manager) {
            this.gmapsApi = gmapsApi;
            this._manager = _manager;
            /**
             * Will automatically center the map to the clicked result
             */
            this.autoBoundResults = true;
            /**
             * This event is fired when the user selects a query, will return the places matching that query.
             */
            this.placesChange = new core.EventEmitter();
        }
        /** @internal */
        AgmSearchBox.prototype.ngOnInit = function () {
            var _this = this;
            this.gmapsApi.getNativeMap().then(function (map) {
                _this._manager.createEventObservable(_this).subscribe(function () {
                    _this.placesChange.emit(_this.getSearchBoxEl().getPlaces());
                    if (_this.autoBoundResults) {
                        _this.autoBound();
                    }
                });
            });
        };
        /** @internal */
        AgmSearchBox.prototype.ngOnChanges = function (changes) {
            var _this = this;
            this.gmapsApi.getNativeMap().then(function (map) {
                if (changes['bounds']) {
                    _this.getSearchBoxEl().setBounds(_this.bounds);
                }
                if (changes['position']) {
                    _this.updatePosition(_this.position);
                }
            });
        };
        /** @internal */
        AgmSearchBox.prototype.getSearchBoxEl = function () {
            if (this.searchBox === undefined) {
                this.searchBox = new google.maps.places.SearchBox(this.panel.nativeElement, {
                    bounds: this.bounds
                });
            }
            return this.searchBox;
        };
        /** @internal */
        AgmSearchBox.prototype.updatePosition = function (position) {
            var _this = this;
            if (position) {
                this.gmapsApi.getControls().then(function (controls) {
                    controls[position].push(_this.panel.nativeElement);
                });
            }
        };
        /** @internal */
        AgmSearchBox.prototype.autoBound = function () {
            var places = this.getSearchBoxEl().getPlaces();
            if (places.length === 0) {
                return;
            }
            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function (place) {
                if (!place.geometry) {
                    console.log('Place does not contain a geometry');
                    return;
                }
                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                }
                else {
                    bounds.extend(place.geometry.location);
                }
            });
            this.gmapsApi.fitBounds(bounds);
        };
        AgmSearchBox.ctorParameters = function () { return [
            { type: GoogleMapsAPIWrapper },
            { type: SearchBoxManager }
        ]; };
        __decorate([
            core.ViewChild('panel')
        ], AgmSearchBox.prototype, "panel", void 0);
        __decorate([
            core.Input()
        ], AgmSearchBox.prototype, "placeholder", void 0);
        __decorate([
            core.Input()
        ], AgmSearchBox.prototype, "position", void 0);
        __decorate([
            core.Input()
        ], AgmSearchBox.prototype, "autoBoundResults", void 0);
        __decorate([
            core.Input()
        ], AgmSearchBox.prototype, "bounds", void 0);
        __decorate([
            core.Output()
        ], AgmSearchBox.prototype, "placesChange", void 0);
        AgmSearchBox = __decorate([
            core.Component({
                selector: 'agm-search-box',
                template: '<input type="text" class="search-box" #panel placeholder="{{placeholder}}">',
                styles: [".search-box {\n        background-color: #fff;\n        font-family: Roboto;\n        font-size: 15px;\n        font-weight: 300;\n        margin-left: 12px;\n        padding: 0 11px 0 13px;\n        text-overflow: ellipsis;\n        width: 300px;\n        margin-top: 10px;\n        height: 26px;\n      }\n\n      .search-box:focus {\n        border-color: #4d90fe;\n      }"]
            })
        ], AgmSearchBox);
        return AgmSearchBox;
    }());

    /**
     * AgmMapControl allows to add a custom control to the map
     *
     * See [Positioning Custom Controls]{@link https://developers.google.com/maps/documentation/javascript/controls?hl=en#CustomPositioning}
     *
     * ### Example
     *
     * ```
     * <agm-control [position]="position">
     *   <div content>
     *       <!-- my markup -->
     *   </div>
     * </agm-control>
     * ```
     *
     */
    var AgmControl = /** @class */ (function () {
        function AgmControl(elm, _mapsWrapper) {
            this.elm = elm;
            this._mapsWrapper = _mapsWrapper;
        }
        /* @internal */
        AgmControl.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes['position'] && this.position) {
                this._mapsWrapper.getControls().then(function (controls) {
                    var index = _this.getElementIndex(controls, changes);
                    if (index !== null) {
                        controls[changes['position'].previousValue].removeAt(index);
                    }
                    controls[_this.position].push(_this.elm.nativeElement);
                });
            }
            else if (changes['position'] && changes['position'].currentValue === null && changes['position'].previousValue !== null) {
                this._mapsWrapper.getControls().then(function (controls) {
                    var index = _this.getElementIndex(controls, changes);
                    if (index !== null) {
                        controls[changes['position'].previousValue].removeAt(index);
                    }
                });
            }
        };
        AgmControl.prototype.getElementIndex = function (controls, changes) {
            var _this = this;
            if (!controls[changes['position'].previousValue]) {
                return null;
            }
            var index = null;
            controls[changes['position'].previousValue].forEach(function (elem, i) {
                if (elem === _this.elm.nativeElement) {
                    index = i;
                    return null;
                }
            });
            return index;
        };
        AgmControl.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: GoogleMapsAPIWrapper }
        ]; };
        __decorate([
            core.Input()
        ], AgmControl.prototype, "position", void 0);
        AgmControl = __decorate([
            core.Component({
                selector: 'agm-control',
                template: '<ng-content select="[content]"></ng-content>'
            })
        ], AgmControl);
        return AgmControl;
    }());

    var AgmRoute = /** @class */ (function () {
        function AgmRoute(gmapsApi) {
            this.gmapsApi = gmapsApi;
            this.optimized = false;
            this.displayed = new core.EventEmitter();
        }
        AgmRoute.prototype.ngOnInit = function () {
        };
        AgmRoute.prototype.ngOnChanges = function () {
            var _this = this;
            if (this.nodes && this.nodes.length > 25) {
                alert('No es posible mostrar mas de 25 puntos por ruta.');
                alert('Google does not allow more than 25 points bt route.');
                return;
            }
            if (!!this.directionsDisplay) {
                this.directionsDisplay.setMap(null); // reset route
            }
            this.gmapsApi.getNativeMap().then(function (map) {
                var directionsService = new google.maps.DirectionsService;
                _this.directionsDisplay = new google.maps.DirectionsRenderer({
                    // draggable: true,
                    map: map,
                });
                if (!!_this.nodes) {
                    var _a = __read(_this.nodes), first = _a[0], others = _a.slice(1);
                    // ;
                    var options = {
                        origin: first,
                        destination: _this.nodes[_this.nodes.length - 1],
                        optimizeWaypoints: _this.optimized,
                        // strokeColor: this.strokeColor,
                        travelMode: google.maps.TravelMode.DRIVING
                    };
                    if (_this.nodes.length > 2) {
                        var _b = __read(others.reverse()), last = _b[0], middle = _b.slice(1);
                        options.waypoints = middle.reverse() // reverse back because it needs to keep the positions
                            .map(function (item) { return ({
                            location: item,
                            stopover: true,
                        }); });
                    }
                    if (!!options.origin) {
                        directionsService.route(options, function (response, status) {
                            if (status === google.maps.DirectionsStatus.OK) {
                                _this.directionsDisplay.setDirections(response);
                                _this.displayed.emit(response);
                                // this.computeTotalDistance(response);
                                if (!!_this.model) {
                                    _this.model.directionResult = response;
                                }
                            }
                            else {
                                window.alert('Directions request failed due to ' + status);
                            }
                        });
                    }
                }
                else if (!!_this.display) {
                    _this.directionsDisplay.setDirections(_this.display);
                    // this.computeTotalDistance(this.display);
                }
            });
        };
        // computeTotalDistance(result: any): void {
        //     if (this.info) {
        //         moment.locale('es');
        //
        //         let totalKm = 0;
        //         let totalTime = 0;
        //         const myRoute = result.routes[0];
        //         for (let i = 0; i < myRoute.legs.length; i++) {
        //             totalKm += myRoute.legs[i].distance.value;
        //             totalTime += myRoute.legs[i].duration.value;
        //         }
        //         const duration = moment.duration(totalTime, 'seconds');
        //         totalKm = totalKm / 1000;
        //         this.info.innerHTML = `Distancia: ${totalKm}km. Tiempo: ${duration.humanize()}`;
        //     }
        //
        // }
        AgmRoute.prototype.ngOnDestroy = function () {
            this.directionsDisplay.setMap(null);
            // unsubscribe all registered observable subscriptions
            // this._subscriptions.forEach((s) => s.unsubscribe());
        };
        AgmRoute.ctorParameters = function () { return [
            { type: GoogleMapsAPIWrapper }
        ]; };
        __decorate([
            core.Input()
        ], AgmRoute.prototype, "nodes", void 0);
        __decorate([
            core.Input()
        ], AgmRoute.prototype, "optimized", void 0);
        __decorate([
            core.Input()
        ], AgmRoute.prototype, "info", void 0);
        __decorate([
            core.Input()
        ], AgmRoute.prototype, "model", void 0);
        __decorate([
            core.Input()
        ], AgmRoute.prototype, "display", void 0);
        __decorate([
            core.Input()
        ], AgmRoute.prototype, "strokeColor", void 0);
        __decorate([
            core.Output()
        ], AgmRoute.prototype, "displayed", void 0);
        AgmRoute = __decorate([
            core.Directive({
                selector: 'agm-route'
            })
        ], AgmRoute);
        return AgmRoute;
    }());

    var WindowRef = /** @class */ (function () {
        function WindowRef() {
        }
        WindowRef.prototype.getNativeWindow = function () { return window; };
        return WindowRef;
    }());
    var DocumentRef = /** @class */ (function () {
        function DocumentRef() {
        }
        DocumentRef.prototype.getNativeDocument = function () { return document; };
        return DocumentRef;
    }());
    var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];


    (function (GoogleMapsScriptProtocol) {
        GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
        GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
        GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
    })(exports.GoogleMapsScriptProtocol || (exports.GoogleMapsScriptProtocol = {}));
    /**
     * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
     * LazyMapsAPILoaderConfig}.
     */
    var LAZY_MAPS_API_CONFIG = new core.InjectionToken('angular-google-maps LAZY_MAPS_API_CONFIG');
    var LazyMapsAPILoader = /** @class */ (function (_super) {
        __extends(LazyMapsAPILoader, _super);
        function LazyMapsAPILoader(config, w, d, localeId) {
            if (config === void 0) { config = null; }
            var _this = _super.call(this) || this;
            _this.localeId = localeId;
            _this._SCRIPT_ID = 'agmGoogleMapsApiScript';
            _this.callbackName = "agmLazyMapsAPILoader";
            _this._config = config || {};
            _this._windowRef = w;
            _this._documentRef = d;
            return _this;
        }
        LazyMapsAPILoader.prototype.load = function () {
            var window = this._windowRef.getNativeWindow();
            if (window.google && window.google.maps) {
                // Google maps already loaded on the page.
                return Promise.resolve();
            }
            /*if (this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID)) {
              // this can happen in HMR situations or Stackblitz.io editors.
              return Promise.resolve();
            }*/
            if (this._scriptLoadingPromise) {
                return this._scriptLoadingPromise;
            }
            // this can happen in HMR situations or Stackblitz.io editors.
            var scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);
            if (scriptOnPage) {
                this._assignScriptLoadingPromise(scriptOnPage);
                return this._scriptLoadingPromise;
            }
            var script = this._documentRef.getNativeDocument().createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.id = this._SCRIPT_ID;
            script.src = this._getScriptSrc(this.callbackName);
            this._assignScriptLoadingPromise(script);
            this._documentRef.getNativeDocument().body.appendChild(script);
            return this._scriptLoadingPromise;
        };
        LazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
            var protocolType = (this._config && this._config.protocol) || exports.GoogleMapsScriptProtocol.HTTPS;
            var protocol;
            switch (protocolType) {
                case exports.GoogleMapsScriptProtocol.AUTO:
                    protocol = '';
                    break;
                case exports.GoogleMapsScriptProtocol.HTTP:
                    protocol = 'http:';
                    break;
                case exports.GoogleMapsScriptProtocol.HTTPS:
                    protocol = 'https:';
                    break;
            }
            var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
            var queryParams = {
                v: this._config.apiVersion || 'quarterly',
                callback: callbackName,
                key: this._config.apiKey,
                client: this._config.clientId,
                channel: this._config.channel,
                libraries: this._config.libraries,
                region: this._config.region,
                language: this._config.language || (this.localeId !== 'en-US' ? this.localeId : null),
            };
            var params = Object.keys(queryParams)
                .filter(function (k) { return queryParams[k] != null; })
                .filter(function (k) {
                // remove empty arrays
                return !Array.isArray(queryParams[k]) ||
                    (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
            })
                .map(function (k) {
                // join arrays as comma seperated strings
                var i = queryParams[k];
                if (Array.isArray(i)) {
                    return { key: k, value: i.join(',') };
                }
                return { key: k, value: queryParams[k] };
            })
                .map(function (entry) {
                return entry.key + "=" + entry.value;
            })
                .join('&');
            return protocol + "//" + hostAndPath + "?" + params;
        };
        LazyMapsAPILoader.prototype._assignScriptLoadingPromise = function (scriptElem) {
            var _this = this;
            this._scriptLoadingPromise = new Promise(function (resolve, reject) {
                _this._windowRef.getNativeWindow()[_this.callbackName] = function () {
                    resolve();
                };
                scriptElem.onerror = function (error) {
                    reject(error);
                };
            });
        };
        LazyMapsAPILoader.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [LAZY_MAPS_API_CONFIG,] }] },
            { type: WindowRef },
            { type: DocumentRef },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        LazyMapsAPILoader.ɵprov = core["ɵɵdefineInjectable"]({ factory: function LazyMapsAPILoader_Factory() { return new LazyMapsAPILoader(core["ɵɵinject"](LAZY_MAPS_API_CONFIG, 8), core["ɵɵinject"](WindowRef), core["ɵɵinject"](DocumentRef), core["ɵɵinject"](core.LOCALE_ID)); }, token: LazyMapsAPILoader, providedIn: "root" });
        LazyMapsAPILoader = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __param(0, core.Optional()), __param(0, core.Inject(LAZY_MAPS_API_CONFIG)),
            __param(3, core.Inject(core.LOCALE_ID))
        ], LazyMapsAPILoader);
        return LazyMapsAPILoader;
    }(MapsAPILoader));

    /**
     * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
     * Tag.
     * It's important that the Google Maps API script gets loaded first on the page.
     */
    var NoOpMapsAPILoader = /** @class */ (function () {
        function NoOpMapsAPILoader() {
        }
        NoOpMapsAPILoader.prototype.load = function () {
            if (!window.google || !window.google.maps) {
                throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
            }
            return Promise.resolve();
        };
        return NoOpMapsAPILoader;
    }());

    var google$1;

    (function (SymbolPath) {
        SymbolPath[SymbolPath["BACKWARD_CLOSED_ARROW"] = 3] = "BACKWARD_CLOSED_ARROW";
        SymbolPath[SymbolPath["BACKWARD_OPEN_ARROW"] = 4] = "BACKWARD_OPEN_ARROW";
        SymbolPath[SymbolPath["CIRCLE"] = 0] = "CIRCLE";
        SymbolPath[SymbolPath["FORWARD_CLOSED_ARROW"] = 1] = "FORWARD_CLOSED_ARROW";
        SymbolPath[SymbolPath["FORWARD_OPEN_ARROW"] = 2] = "FORWARD_OPEN_ARROW";
    })(exports.SymbolPath || (exports.SymbolPath = {}));

    (function (MapTypeId) {
        /** This map type displays a transparent layer of major streets on satellite images. */
        MapTypeId[MapTypeId["HYBRID"] = 0] = "HYBRID";
        /** This map type displays a normal street map. */
        MapTypeId[MapTypeId["ROADMAP"] = 1] = "ROADMAP";
        /** This map type displays satellite images. */
        MapTypeId[MapTypeId["SATELLITE"] = 2] = "SATELLITE";
        /** This map type displays maps with physical features such as terrain and vegetation. */
        MapTypeId[MapTypeId["TERRAIN"] = 3] = "TERRAIN";
    })(exports.MapTypeId || (exports.MapTypeId = {}));

    (function (MapTypeControlStyle) {
        MapTypeControlStyle[MapTypeControlStyle["DEFAULT"] = 0] = "DEFAULT";
        MapTypeControlStyle[MapTypeControlStyle["DROPDOWN_MENU"] = 2] = "DROPDOWN_MENU";
        MapTypeControlStyle[MapTypeControlStyle["HORIZONTAL_BAR"] = 1] = "HORIZONTAL_BAR";
    })(exports.MapTypeControlStyle || (exports.MapTypeControlStyle = {}));

    (function (ScaleControlStyle) {
        ScaleControlStyle[ScaleControlStyle["DEFAULT"] = 0] = "DEFAULT";
    })(exports.ScaleControlStyle || (exports.ScaleControlStyle = {}));

    (function (ZoomControlStyle) {
        ZoomControlStyle[ZoomControlStyle["DEFAULT"] = 0] = "DEFAULT";
        ZoomControlStyle[ZoomControlStyle["LARGE"] = 1] = "LARGE";
        ZoomControlStyle[ZoomControlStyle["SMALL"] = 2] = "SMALL";
    })(exports.ZoomControlStyle || (exports.ZoomControlStyle = {}));

    (function (GeocoderLocationType) {
        GeocoderLocationType["APPROXIMATE"] = "APPROXIMATE";
        GeocoderLocationType["GEOMETRIC_CENTER"] = "GEOMETRIC_CENTER";
        GeocoderLocationType["RANGE_INTERPOLATED"] = "RANGE_INTERPOLATED";
        GeocoderLocationType["ROOFTOP"] = "ROOFTOP";
    })(exports.GeocoderLocationType || (exports.GeocoderLocationType = {}));

    (function (GeocoderStatus) {
        GeocoderStatus["ERROR"] = "ERROR";
        GeocoderStatus["INVALID_REQUEST"] = "INVALID_REQUEST";
        GeocoderStatus["OK"] = "OK";
        GeocoderStatus["OVER_QUERY_LIMIT"] = "OVER_QUERY_LIMIT";
        GeocoderStatus["REQUEST_DENIED"] = "REQUEST_DENIED";
        GeocoderStatus["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
        GeocoderStatus["ZERO_RESULTS"] = "ZERO_RESULTS";
    })(exports.GeocoderStatus || (exports.GeocoderStatus = {}));

    /**
     * The angular-google-maps core module. Contains all Directives/Services/Pipes
     * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
     */
    var AgmxCoreModule = /** @class */ (function () {
        function AgmxCoreModule() {
        }
        AgmxCoreModule_1 = AgmxCoreModule;
        /**
         * Please use this method when you register the module at the root level.
         */
        AgmxCoreModule.forRoot = function (lazyMapsAPILoaderConfig) {
            return {
                ngModule: AgmxCoreModule_1,
                providers: __spread(BROWSER_GLOBALS_PROVIDERS, [
                    { provide: MapsAPILoader, useClass: LazyMapsAPILoader },
                    { provide: LAZY_MAPS_API_CONFIG, useValue: lazyMapsAPILoaderConfig }
                ]),
            };
        };
        var AgmxCoreModule_1;
        AgmxCoreModule = AgmxCoreModule_1 = __decorate([
            core.NgModule({ declarations: [
                    AgmMap, AgmMarker, AgmInfoWindow, AgmCircle,
                    AgmPolygon, AgmPolyline, AgmPolylinePoint, AgmKmlLayer,
                    AgmDataLayer,
                    AgmSearchBox, AgmControl, AgmRoute
                ],
                exports: [
                    AgmMap, AgmMarker, AgmInfoWindow, AgmCircle,
                    AgmPolygon, AgmPolyline, AgmPolylinePoint, AgmKmlLayer,
                    AgmDataLayer,
                    AgmSearchBox, AgmControl, AgmRoute
                ],
            })
        ], AgmxCoreModule);
        return AgmxCoreModule;
    }());

    exports.AgmCircle = AgmCircle;
    exports.AgmControl = AgmControl;
    exports.AgmDataLayer = AgmDataLayer;
    exports.AgmInfoWindow = AgmInfoWindow;
    exports.AgmKmlLayer = AgmKmlLayer;
    exports.AgmMap = AgmMap;
    exports.AgmMarker = AgmMarker;
    exports.AgmPolygon = AgmPolygon;
    exports.AgmPolyline = AgmPolyline;
    exports.AgmPolylinePoint = AgmPolylinePoint;
    exports.AgmRoute = AgmRoute;
    exports.AgmSearchBox = AgmSearchBox;
    exports.AgmxCoreModule = AgmxCoreModule;
    exports.CircleManager = CircleManager;
    exports.DataLayerManager = DataLayerManager;
    exports.GoogleMapsAPIWrapper = GoogleMapsAPIWrapper;
    exports.InfoWindowManager = InfoWindowManager;
    exports.KmlLayerManager = KmlLayerManager;
    exports.LAZY_MAPS_API_CONFIG = LAZY_MAPS_API_CONFIG;
    exports.LazyMapsAPILoader = LazyMapsAPILoader;
    exports.MapsAPILoader = MapsAPILoader;
    exports.MarkerManager = MarkerManager;
    exports.NoOpMapsAPILoader = NoOpMapsAPILoader;
    exports.PolygonManager = PolygonManager;
    exports.PolylineManager = PolylineManager;
    exports.SearchBoxManager = SearchBoxManager;
    exports.google = google$1;
    exports.ɵa = WindowRef;
    exports.ɵb = DocumentRef;
    exports.ɵc = BROWSER_GLOBALS_PROVIDERS;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=agmx-core.umd.js.map
