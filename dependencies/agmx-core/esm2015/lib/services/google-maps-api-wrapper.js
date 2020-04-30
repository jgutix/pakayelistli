import { __decorate } from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { MapsAPILoader } from './maps-api-loader/maps-api-loader';
import * as i0 from "@angular/core";
import * as i1 from "./maps-api-loader/maps-api-loader";
/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
let GoogleMapsAPIWrapper = class GoogleMapsAPIWrapper {
    constructor(_loader, _zone) {
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise((resolve) => { this._mapResolver = resolve; });
    }
    createMap(el, mapOptions) {
        return this._zone.runOutsideAngular(() => {
            return this._loader.load().then(() => {
                const map = new google.maps.Map(el, mapOptions);
                this._mapResolver(map);
                return;
            });
        });
    }
    setMapOptions(options) {
        return this._zone.runOutsideAngular(() => {
            this._map.then((m) => { m.setOptions(options); });
        });
    }
    /**
     * Creates a google map marker with the map context
     */
    createMarker(options = {}, addToMap = true) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                if (addToMap) {
                    options.map = map;
                }
                return new google.maps.Marker(options);
            });
        });
    }
    createInfoWindow(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then(() => { return new google.maps.InfoWindow(options); });
        });
    }
    /**
     * Creates a google.map.Circle for the current map.
     */
    createCircle(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                if (typeof options.strokePosition === 'string') {
                    options.strokePosition = google.maps.StrokePosition[options.strokePosition];
                }
                options.map = map;
                return new google.maps.Circle(options);
            });
        });
    }
    /**
     * Creates a google.map.Rectangle for the current map.
     */
    createRectangle(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                options.map = map;
                return new google.maps.Rectangle(options);
            });
        });
    }
    createPolyline(options) {
        return this._zone.runOutsideAngular(() => {
            return this.getNativeMap().then((map) => {
                let line = new google.maps.Polyline(options);
                line.setMap(map);
                return line;
            });
        });
    }
    createPolygon(options) {
        return this._zone.runOutsideAngular(() => {
            return this.getNativeMap().then((map) => {
                let polygon = new google.maps.Polygon(options);
                polygon.setMap(map);
                return polygon;
            });
        });
    }
    /**
     * Creates a new google.map.Data layer for the current map
     */
    createDataLayer(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then(m => {
                let data = new google.maps.Data(options);
                data.setMap(m);
                return data;
            });
        });
    }
    /**
     * Creates a TransitLayer instance for a map
     * @param options
     */
    /* @param {TransitLayerOptions} options - used for setting layer options
     * @returns {Promise<TransitLayer>} a new transit layer object
     */
    createTransitLayer(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                let newLayer = new google.maps.TransitLayer();
                newLayer.setMap(options.visible ? map : null);
                return newLayer;
            });
        });
    }
    /**
     * Creates a BicyclingLayer instance for a map
     * @param options
     */
    /* @param {BicyclingLayerOptions} options - used for setting layer options
    * @returns {Promise<BicyclingLayer>} a new bicycling layer object
    */
    createBicyclingLayer(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                let newLayer = new google.maps.BicyclingLayer();
                newLayer.setMap(options.visible ? map : null);
                return newLayer;
            });
        });
    }
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    containsLocation(latLng, polygon) {
        return google.maps.geometry.poly.containsLocation(latLng, polygon);
    }
    subscribeToMapEvent(eventName) {
        return new Observable((observer) => {
            this._map.then((m) => {
                m.addListener(eventName, (arg) => { this._zone.run(() => observer.next(arg)); });
            });
        });
    }
    clearInstanceListeners() {
        return this._zone.runOutsideAngular(() => {
            this._map.then((map) => {
                google.maps.event.clearInstanceListeners(map);
            });
        });
    }
    setCenter(latLng) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.setCenter(latLng));
        });
    }
    getZoom() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.getZoom());
        });
    }
    getBounds() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.getBounds());
        });
    }
    getMapTypeId() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.getMapTypeId());
        });
    }
    setZoom(zoom) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.setZoom(zoom));
        });
    }
    getCenter() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.getCenter());
        });
    }
    getControls() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.controls);
        });
    }
    panTo(latLng) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.panTo(latLng));
        });
    }
    panBy(x, y) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.panBy(x, y));
        });
    }
    fitBounds(latLng, padding) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.fitBounds(latLng, padding));
        });
    }
    panToBounds(latLng, padding) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.panToBounds(latLng, padding));
        });
    }
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    getNativeMap() { return this._map; }
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    getTrueNativeMap() { return this._map; }
    /**
     * Triggers the given event name on the map instance.
     */
    triggerMapEvent(eventName) {
        return this._map.then((m) => google.maps.event.trigger(m, eventName));
    }
};
GoogleMapsAPIWrapper.ctorParameters = () => [
    { type: MapsAPILoader },
    { type: NgZone }
];
GoogleMapsAPIWrapper.ɵprov = i0.ɵɵdefineInjectable({ factory: function GoogleMapsAPIWrapper_Factory() { return new GoogleMapsAPIWrapper(i0.ɵɵinject(i1.MapsAPILoader), i0.ɵɵinject(i0.NgZone)); }, token: GoogleMapsAPIWrapper, providedIn: "root" });
GoogleMapsAPIWrapper = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GoogleMapsAPIWrapper);
export { GoogleMapsAPIWrapper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ214LWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFLMUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1DQUFtQyxDQUFDOzs7QUFLaEU7OztHQUdHO0FBSUgsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFJL0IsWUFBb0IsT0FBc0IsRUFBVSxLQUFhO1FBQTdDLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQy9ELElBQUksQ0FBQyxJQUFJO1lBQ0wsSUFBSSxPQUFPLENBQXFCLENBQUMsT0FBbUIsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRUQsU0FBUyxDQUFDLEVBQWUsRUFBRSxVQUErQjtRQUN4RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUUsR0FBRyxFQUFFO1lBQ3hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNuQyxNQUFNLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFlBQVksQ0FBcUIsR0FBRyxDQUFDLENBQUM7Z0JBQzNDLE9BQU87WUFDVCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGFBQWEsQ0FB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QVksS0FBa0MsT0FBTyxJQUFJLENBQUMsSUFBbUMsQ0FBQyxDQUFDLENBQUM7SUFFaEc7O09BRUc7SUFDSCxnQkFBZ0IsS0FBK0IsT0FBTyxJQUFJLENBQUMsSUFBZ0MsQ0FBQyxDQUFDLENBQUM7SUFFOUY7O09BRUc7SUFDSCxlQUFlLENBQUMsU0FBaUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Q0FDRixDQUFBOztZQWpQOEIsYUFBYTtZQUFpQixNQUFNOzs7QUFKdEQsb0JBQW9CO0lBSGhDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxvQkFBb0IsQ0FxUGhDO1NBclBZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2ZXJ9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgKiBhcyBtYXBUeXBlcyBmcm9tICcuL2dvb2dsZS1tYXBzLXR5cGVzJztcbmltcG9ydCB7UG9seWxpbmV9IGZyb20gJy4vZ29vZ2xlLW1hcHMtdHlwZXMnO1xuaW1wb3J0IHtQb2x5bGluZU9wdGlvbnN9IGZyb20gJy4vZ29vZ2xlLW1hcHMtdHlwZXMnO1xuaW1wb3J0IHtNYXBzQVBJTG9hZGVyfSBmcm9tICcuL21hcHMtYXBpLWxvYWRlci9tYXBzLWFwaS1sb2FkZXInO1xuXG4vLyB0b2RvOiBhZGQgdHlwZXMgZm9yIHRoaXNcbmRlY2xhcmUgdmFyIGdvb2dsZTogYW55O1xuXG4vKipcbiAqIFdyYXBwZXIgY2xhc3MgdGhhdCBoYW5kbGVzIHRoZSBjb21tdW5pY2F0aW9uIHdpdGggdGhlIEdvb2dsZSBNYXBzIEphdmFzY3JpcHRcbiAqIEFQSSB2M1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBzQVBJV3JhcHBlciB7XG4gIHByaXZhdGUgX21hcDogUHJvbWlzZTxtYXBUeXBlcy5Hb29nbGVNYXAgfCBnb29nbGUubWFwcy5NYXA+O1xuICBwcml2YXRlIF9tYXBSZXNvbHZlcjogKHZhbHVlPzogbWFwVHlwZXMuR29vZ2xlTWFwKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvYWRlcjogTWFwc0FQSUxvYWRlciwgcHJpdmF0ZSBfem9uZTogTmdab25lKSB7XG4gICAgdGhpcy5fbWFwID1cbiAgICAgICAgbmV3IFByb21pc2U8bWFwVHlwZXMuR29vZ2xlTWFwPigocmVzb2x2ZTogKCkgPT4gdm9pZCkgPT4geyB0aGlzLl9tYXBSZXNvbHZlciA9IHJlc29sdmU7IH0pO1xuICB9XG5cbiAgY3JlYXRlTWFwKGVsOiBIVE1MRWxlbWVudCwgbWFwT3B0aW9uczogbWFwVHlwZXMuTWFwT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCAoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLmxvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChlbCwgbWFwT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX21hcFJlc29sdmVyKDxtYXBUeXBlcy5Hb29nbGVNYXA+bWFwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRNYXBPcHRpb25zKG9wdGlvbnM6IG1hcFR5cGVzLk1hcE9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLl9tYXAudGhlbigobTogbWFwVHlwZXMuR29vZ2xlTWFwKSA9PiB7IG0uc2V0T3B0aW9ucyhvcHRpb25zKTsgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGdvb2dsZSBtYXAgbWFya2VyIHdpdGggdGhlIG1hcCBjb250ZXh0XG4gICAqL1xuICBjcmVhdGVNYXJrZXIob3B0aW9uczogbWFwVHlwZXMuTWFya2VyT3B0aW9ucyA9IDxtYXBUeXBlcy5NYXJrZXJPcHRpb25zPnt9LCBhZGRUb01hcDogYm9vbGVhbiA9IHRydWUpOlxuICAgICAgUHJvbWlzZTxtYXBUeXBlcy5NYXJrZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oKG1hcDogbWFwVHlwZXMuR29vZ2xlTWFwKSA9PiB7XG4gICAgICAgIGlmIChhZGRUb01hcCkge1xuICAgICAgICAgIG9wdGlvbnMubWFwID0gbWFwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKG9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVJbmZvV2luZG93KG9wdGlvbnM/OiBtYXBUeXBlcy5JbmZvV2luZG93T3B0aW9ucyk6IFByb21pc2U8bWFwVHlwZXMuSW5mb1dpbmRvdz4ge1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbigoKSA9PiB7IHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyhvcHRpb25zKTsgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGdvb2dsZS5tYXAuQ2lyY2xlIGZvciB0aGUgY3VycmVudCBtYXAuXG4gICAqL1xuICBjcmVhdGVDaXJjbGUob3B0aW9uczogbWFwVHlwZXMuQ2lyY2xlT3B0aW9ucyk6IFByb21pc2U8bWFwVHlwZXMuQ2lyY2xlPiB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKChtYXA6IG1hcFR5cGVzLkdvb2dsZU1hcCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc3Ryb2tlUG9zaXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgb3B0aW9ucy5zdHJva2VQb3NpdGlvbiA9IGdvb2dsZS5tYXBzLlN0cm9rZVBvc2l0aW9uW29wdGlvbnMuc3Ryb2tlUG9zaXRpb25dO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMubWFwID0gbWFwO1xuICAgICAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkNpcmNsZShvcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBnb29nbGUubWFwLlJlY3RhbmdsZSBmb3IgdGhlIGN1cnJlbnQgbWFwLlxuICAgKi9cbiAgY3JlYXRlUmVjdGFuZ2xlKG9wdGlvbnM6IG1hcFR5cGVzLlJlY3RhbmdsZU9wdGlvbnMpOiBQcm9taXNlPG1hcFR5cGVzLlJlY3RhbmdsZT4ge1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbigobWFwOiBtYXBUeXBlcy5Hb29nbGVNYXApID0+IHtcbiAgICAgICAgb3B0aW9ucy5tYXAgPSBtYXA7XG4gICAgICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuUmVjdGFuZ2xlKG9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVQb2x5bGluZShvcHRpb25zOiBQb2x5bGluZU9wdGlvbnMpOiBQcm9taXNlPFBvbHlsaW5lPiB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlTWFwKCkudGhlbigobWFwOiBtYXBUeXBlcy5Hb29nbGVNYXApID0+IHtcbiAgICAgICAgbGV0IGxpbmUgPSBuZXcgZ29vZ2xlLm1hcHMuUG9seWxpbmUob3B0aW9ucyk7XG4gICAgICAgIGxpbmUuc2V0TWFwKG1hcCk7XG4gICAgICAgIHJldHVybiBsaW5lO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVQb2x5Z29uKG9wdGlvbnM6IG1hcFR5cGVzLlBvbHlnb25PcHRpb25zKTogUHJvbWlzZTxtYXBUeXBlcy5Qb2x5Z29uPiB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlTWFwKCkudGhlbigobWFwOiBtYXBUeXBlcy5Hb29nbGVNYXApID0+IHtcbiAgICAgICAgbGV0IHBvbHlnb24gPSBuZXcgZ29vZ2xlLm1hcHMuUG9seWdvbihvcHRpb25zKTtcbiAgICAgICAgcG9seWdvbi5zZXRNYXAobWFwKTtcbiAgICAgICAgcmV0dXJuIHBvbHlnb247XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGdvb2dsZS5tYXAuRGF0YSBsYXllciBmb3IgdGhlIGN1cnJlbnQgbWFwXG4gICAqL1xuICBjcmVhdGVEYXRhTGF5ZXIob3B0aW9ucz86IG1hcFR5cGVzLkRhdGFPcHRpb25zKTogUHJvbWlzZTxtYXBUeXBlcy5EYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKG0gPT4ge1xuICAgICAgICBsZXQgZGF0YSA9IG5ldyBnb29nbGUubWFwcy5EYXRhKG9wdGlvbnMpO1xuICAgICAgICBkYXRhLnNldE1hcChtKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgVHJhbnNpdExheWVyIGluc3RhbmNlIGZvciBhIG1hcFxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgLyogQHBhcmFtIHtUcmFuc2l0TGF5ZXJPcHRpb25zfSBvcHRpb25zIC0gdXNlZCBmb3Igc2V0dGluZyBsYXllciBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFRyYW5zaXRMYXllcj59IGEgbmV3IHRyYW5zaXQgbGF5ZXIgb2JqZWN0XG4gICAqL1xuICBjcmVhdGVUcmFuc2l0TGF5ZXIob3B0aW9uczogbWFwVHlwZXMuVHJhbnNpdExheWVyT3B0aW9ucyk6IFByb21pc2U8bWFwVHlwZXMuVHJhbnNpdExheWVyPntcbiAgICByZXR1cm4gdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oKG1hcDogbWFwVHlwZXMuR29vZ2xlTWFwKSA9PiB7XG4gICAgICAgIGxldCBuZXdMYXllcjogbWFwVHlwZXMuVHJhbnNpdExheWVyID0gbmV3IGdvb2dsZS5tYXBzLlRyYW5zaXRMYXllcigpO1xuICAgICAgICBuZXdMYXllci5zZXRNYXAob3B0aW9ucy52aXNpYmxlID8gbWFwIDogbnVsbCk7XG4gICAgICAgIHJldHVybiBuZXdMYXllcjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBCaWN5Y2xpbmdMYXllciBpbnN0YW5jZSBmb3IgYSBtYXBcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIC8qIEBwYXJhbSB7QmljeWNsaW5nTGF5ZXJPcHRpb25zfSBvcHRpb25zIC0gdXNlZCBmb3Igc2V0dGluZyBsYXllciBvcHRpb25zXG4gICogQHJldHVybnMge1Byb21pc2U8QmljeWNsaW5nTGF5ZXI+fSBhIG5ldyBiaWN5Y2xpbmcgbGF5ZXIgb2JqZWN0XG4gICovXG4gIGNyZWF0ZUJpY3ljbGluZ0xheWVyKG9wdGlvbnM6IG1hcFR5cGVzLkJpY3ljbGluZ0xheWVyT3B0aW9ucyk6IFByb21pc2U8bWFwVHlwZXMuQmljeWNsaW5nTGF5ZXI+e1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbigobWFwOiBtYXBUeXBlcy5Hb29nbGVNYXApID0+IHtcbiAgICAgICAgbGV0IG5ld0xheWVyOiBtYXBUeXBlcy5CaWN5Y2xpbmdMYXllciA9IG5ldyBnb29nbGUubWFwcy5CaWN5Y2xpbmdMYXllcigpO1xuICAgICAgICBuZXdMYXllci5zZXRNYXAob3B0aW9ucy52aXNpYmxlID8gbWFwIDogbnVsbCk7XG4gICAgICAgIHJldHVybiBuZXdMYXllcjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgZ2l2ZW4gY29vcmRpbmF0ZXMgYXJlIGluc2l0ZSBhIFBvbHlnb24gcGF0aC5cbiAgICovXG4gIGNvbnRhaW5zTG9jYXRpb24obGF0TG5nOiBtYXBUeXBlcy5MYXRMbmdMaXRlcmFsLCBwb2x5Z29uOiBtYXBUeXBlcy5Qb2x5Z29uKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIGdvb2dsZS5tYXBzLmdlb21ldHJ5LnBvbHkuY29udGFpbnNMb2NhdGlvbihsYXRMbmcsIHBvbHlnb24pO1xuICB9XG5cbiAgc3Vic2NyaWJlVG9NYXBFdmVudDxFPihldmVudE5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8RT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEU+KSA9PiB7XG4gICAgICB0aGlzLl9tYXAudGhlbigobTogbWFwVHlwZXMuR29vZ2xlTWFwKSA9PiB7XG4gICAgICAgIG0uYWRkTGlzdGVuZXIoZXZlbnROYW1lLCAoYXJnOiBFKSA9PiB7IHRoaXMuX3pvbmUucnVuKCgpID0+IG9ic2VydmVyLm5leHQoYXJnKSk7IH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhckluc3RhbmNlTGlzdGVuZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX21hcC50aGVuKChtYXA6IG1hcFR5cGVzLkdvb2dsZU1hcCkgPT4ge1xuICAgICAgICBnb29nbGUubWFwcy5ldmVudC5jbGVhckluc3RhbmNlTGlzdGVuZXJzKG1hcCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldENlbnRlcihsYXRMbmc6IG1hcFR5cGVzLkxhdExuZ0xpdGVyYWwpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oKG1hcDogbWFwVHlwZXMuR29vZ2xlTWFwKSA9PiBtYXAuc2V0Q2VudGVyKGxhdExuZykpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Wm9vbSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbigobWFwOiBtYXBUeXBlcy5Hb29nbGVNYXApID0+IG1hcC5nZXRab29tKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCk6IFByb21pc2U8bWFwVHlwZXMuTGF0TG5nQm91bmRzPiB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKChtYXA6IG1hcFR5cGVzLkdvb2dsZU1hcCkgPT4gbWFwLmdldEJvdW5kcygpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldE1hcFR5cGVJZCgpOiBQcm9taXNlPG1hcFR5cGVzLk1hcFR5cGVJZD4ge1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbigobWFwOiBtYXBUeXBlcy5Hb29nbGVNYXApID0+IG1hcC5nZXRNYXBUeXBlSWQoKSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRab29tKHpvb206IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbigobWFwOiBtYXBUeXBlcy5Hb29nbGVNYXApID0+IG1hcC5zZXRab29tKHpvb20pKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENlbnRlcigpOiBQcm9taXNlPG1hcFR5cGVzLkxhdExuZz4ge1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbigobWFwOiBtYXBUeXBlcy5Hb29nbGVNYXApID0+IG1hcC5nZXRDZW50ZXIoKSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb250cm9scygpOiBQcm9taXNlPG1hcFR5cGVzLk1WQ0FycmF5PE5vZGU+W10+IHtcbiAgICByZXR1cm4gdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oKG1hcDogbWFwVHlwZXMuR29vZ2xlTWFwKSA9PiBtYXAuY29udHJvbHMpO1xuICAgIH0pO1xuICB9XG5cbiAgcGFuVG8obGF0TG5nOiBtYXBUeXBlcy5MYXRMbmd8bWFwVHlwZXMuTGF0TG5nTGl0ZXJhbCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbigobWFwOiBtYXBUeXBlcy5Hb29nbGVNYXApID0+IG1hcC5wYW5UbyhsYXRMbmcpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHBhbkJ5KHg6IG51bWJlciwgeTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKChtYXApID0+IG1hcC5wYW5CeSh4LCB5KSk7XG4gICAgfSk7XG4gIH1cblxuICBmaXRCb3VuZHMobGF0TG5nOiBtYXBUeXBlcy5MYXRMbmdCb3VuZHN8bWFwVHlwZXMuTGF0TG5nQm91bmRzTGl0ZXJhbCwgcGFkZGluZz86IG51bWJlciB8IG1hcFR5cGVzLlBhZGRpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oKG1hcDogbWFwVHlwZXMuR29vZ2xlTWFwKSA9PiBtYXAuZml0Qm91bmRzKGxhdExuZywgcGFkZGluZykpO1xuICAgIH0pO1xuICB9XG5cbiAgcGFuVG9Cb3VuZHMobGF0TG5nOiBtYXBUeXBlcy5MYXRMbmdCb3VuZHN8bWFwVHlwZXMuTGF0TG5nQm91bmRzTGl0ZXJhbCwgcGFkZGluZz86IG51bWJlciB8IG1hcFR5cGVzLlBhZGRpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oKG1hcDogbWFwVHlwZXMuR29vZ2xlTWFwKSA9PiBtYXAucGFuVG9Cb3VuZHMobGF0TG5nLCBwYWRkaW5nKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmF0aXZlIEdvb2dsZSBNYXBzIE1hcCBpbnN0YW5jZS4gQmUgY2FyZWZ1bCB3aGVuIHVzaW5nIHRoaXMgaW5zdGFuY2UgZGlyZWN0bHkuXG4gICAqL1xuICBnZXROYXRpdmVNYXAoKTogUHJvbWlzZTxtYXBUeXBlcy5Hb29nbGVNYXA+IHsgcmV0dXJuIHRoaXMuX21hcCBhcyBQcm9taXNlPG1hcFR5cGVzLkdvb2dsZU1hcD47IH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmF0aXZlIEdvb2dsZSBNYXBzIE1hcCBpbnN0YW5jZS4gQmUgY2FyZWZ1bCB3aGVuIHVzaW5nIHRoaXMgaW5zdGFuY2UgZGlyZWN0bHkuXG4gICAqL1xuICBnZXRUcnVlTmF0aXZlTWFwKCk6IFByb21pc2U8Z29vZ2xlLm1hcHMuTWFwPiB7IHJldHVybiB0aGlzLl9tYXAgYXMgUHJvbWlzZTxnb29nbGUubWFwcy5NYXA+OyB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIHRoZSBnaXZlbiBldmVudCBuYW1lIG9uIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqL1xuICB0cmlnZ2VyTWFwRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oKG0pID0+IGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIobSwgZXZlbnROYW1lKSk7XG4gIH1cbn1cbiJdfQ==