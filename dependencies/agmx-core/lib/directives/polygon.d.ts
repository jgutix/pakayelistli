import { AfterContentInit, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { LatLng, LatLngLiteral, PolyMouseEvent } from '../services/google-maps-types';
import { PolygonManager } from '../services/managers/polygon-manager';
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
import * as ɵngcc0 from '@angular/core';
export declare class AgmPolygon implements OnDestroy, OnChanges, AfterContentInit {
    private _polygonManager;
    private static _polygonOptionsAttributes;
    /**
     * Indicates whether this Polygon handles mouse events. Defaults to true.
     */
    clickable: boolean;
    /**
     * If set to true, the user can drag this shape over the map. The geodesic
     * property defines the mode of dragging. Defaults to false.
     */
    draggable: boolean;
    /**
     * If set to true, the user can edit this shape by dragging the control
     * points shown at the vertices and on each segment. Defaults to false.
     */
    editable: boolean;
    /**
     * The fill color. All CSS3 colors are supported except for extended
     * named colors.
     */
    fillColor: string;
    /**
     * The fill opacity between 0.0 and 1.0
     */
    fillOpacity: number;
    /**
     * When true, edges of the polygon are interpreted as geodesic and will
     * follow the curvature of the Earth. When false, edges of the polygon are
     * rendered as straight lines in screen space. Note that the shape of a
     * geodesic polygon may appear to change when dragged, as the dimensions
     * are maintained relative to the surface of the earth. Defaults to false.
     */
    geodesic: boolean;
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
    paths: Array<LatLng | LatLngLiteral> | Array<Array<LatLng | LatLngLiteral>>;
    /**
     * The stroke color. All CSS3 colors are supported except for extended
     * named colors.
     */
    strokeColor: string;
    /**
     * The stroke opacity between 0.0 and 1.0
     */
    strokeOpacity: number;
    /**
     * The stroke width in pixels.
     */
    strokeWeight: number;
    /**
     * Whether this polygon is visible on the map. Defaults to true.
     */
    visible: boolean;
    /**
     * The zIndex compared to other polys.
     */
    zIndex: number;
    /**
     * This event is fired when the DOM click event is fired on the Polygon.
     */
    polyClick: EventEmitter<PolyMouseEvent>;
    /**
     * This event is fired when the DOM dblclick event is fired on the Polygon.
     */
    polyDblClick: EventEmitter<PolyMouseEvent>;
    /**
     * This event is repeatedly fired while the user drags the polygon.
     */
    polyDrag: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the user stops dragging the polygon.
     */
    polyDragEnd: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the user starts dragging the polygon.
     */
    polyDragStart: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the DOM mousedown event is fired on the Polygon.
     */
    polyMouseDown: EventEmitter<PolyMouseEvent>;
    /**
     * This event is fired when the DOM mousemove event is fired on the Polygon.
     */
    polyMouseMove: EventEmitter<PolyMouseEvent>;
    /**
     * This event is fired on Polygon mouseout.
     */
    polyMouseOut: EventEmitter<PolyMouseEvent>;
    /**
     * This event is fired on Polygon mouseover.
     */
    polyMouseOver: EventEmitter<PolyMouseEvent>;
    /**
     * This event is fired whe the DOM mouseup event is fired on the Polygon
     */
    polyMouseUp: EventEmitter<PolyMouseEvent>;
    /**
     * This even is fired when the Polygon is right-clicked on.
     */
    polyRightClick: EventEmitter<PolyMouseEvent>;
    private _id;
    private _polygonAddedToManager;
    private _subscriptions;
    constructor(_polygonManager: PolygonManager);
    /** @internal */
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): any;
    /** @internal */
    id(): string;
    /** @internal */
    ngOnDestroy(): void;
    private _init;
    private _addEventListeners;
    private _updatePolygonOptions;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmPolygon, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AgmPolygon, "agm-polygon", never, { "clickable": "clickable"; "draggable": "polyDraggable"; "editable": "editable"; "geodesic": "geodesic"; "paths": "paths"; "fillColor": "fillColor"; "fillOpacity": "fillOpacity"; "strokeColor": "strokeColor"; "strokeOpacity": "strokeOpacity"; "strokeWeight": "strokeWeight"; "visible": "visible"; "zIndex": "zIndex"; }, { "polyClick": "polyClick"; "polyDblClick": "polyDblClick"; "polyDrag": "polyDrag"; "polyDragEnd": "polyDragEnd"; "polyDragStart": "polyDragStart"; "polyMouseDown": "polyMouseDown"; "polyMouseMove": "polyMouseMove"; "polyMouseOut": "polyMouseOut"; "polyMouseOver": "polyMouseOver"; "polyMouseUp": "polyMouseUp"; "polyRightClick": "polyRightClick"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWdvbi5kLnRzIiwic291cmNlcyI6WyJwb2x5Z29uLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXRMbmcsIExhdExuZ0xpdGVyYWwsIFBvbHlNb3VzZUV2ZW50IH0gZnJvbSAnLi4vc2VydmljZXMvZ29vZ2xlLW1hcHMtdHlwZXMnO1xuaW1wb3J0IHsgUG9seWdvbk1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9wb2x5Z29uLW1hbmFnZXInO1xuLyoqXG4gKiBBZ21Qb2x5Z29uIHJlbmRlcnMgYSBwb2x5Z29uIG9uIGEge0BsaW5rIEFnbU1hcH1cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgc2VsZWN0b3I6ICdteS1tYXAtY21wJyxcbiAqICBzdHlsZXM6IFtgXG4gKiAgICBhZ20tbWFwIHtcbiAqICAgICAgaGVpZ2h0OiAzMDBweDtcbiAqICAgIH1cbiAqIGBdLFxuICogIHRlbXBsYXRlOiBgXG4gKiAgICA8YWdtLW1hcCBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbem9vbV09XCJ6b29tXCI+XG4gKiAgICAgIDxhZ20tcG9seWdvbiBbcGF0aHNdPVwicGF0aHNcIj5cbiAqICAgICAgPC9hZ20tcG9seWdvbj5cbiAqICAgIDwvYWdtLW1hcD5cbiAqICBgXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIE15TWFwQ21wIHtcbiAqICAgbGF0OiBudW1iZXIgPSAwO1xuICogICBsbmc6IG51bWJlciA9IDA7XG4gKiAgIHpvb206IG51bWJlciA9IDEwO1xuICogICBwYXRoczogQXJyYXk8TGF0TG5nTGl0ZXJhbD4gPSBbXG4gKiAgICAgeyBsYXQ6IDAsICBsbmc6IDEwIH0sXG4gKiAgICAgeyBsYXQ6IDAsICBsbmc6IDIwIH0sXG4gKiAgICAgeyBsYXQ6IDEwLCBsbmc6IDIwIH0sXG4gKiAgICAgeyBsYXQ6IDEwLCBsbmc6IDEwIH0sXG4gKiAgICAgeyBsYXQ6IDAsICBsbmc6IDEwIH1cbiAqICAgXVxuICogICAvLyBOZXN0aW5nIHBhdGhzIHdpbGwgY3JlYXRlIGEgaG9sZSB3aGVyZSB0aGV5IG92ZXJsYXA7XG4gKiAgIG5lc3RlZFBhdGhzOiBBcnJheTxBcnJheTxMYXRMbmdMaXRlcmFsPj4gPSBbW1xuICogICAgIHsgbGF0OiAwLCAgbG5nOiAxMCB9LFxuICogICAgIHsgbGF0OiAwLCAgbG5nOiAyMCB9LFxuICogICAgIHsgbGF0OiAxMCwgbG5nOiAyMCB9LFxuICogICAgIHsgbGF0OiAxMCwgbG5nOiAxMCB9LFxuICogICAgIHsgbGF0OiAwLCAgbG5nOiAxMCB9XG4gKiAgIF0sIFtcbiAqICAgICB7IGxhdDogMCwgbG5nOiAxNSB9LFxuICogICAgIHsgbGF0OiAwLCBsbmc6IDIwIH0sXG4gKiAgICAgeyBsYXQ6IDUsIGxuZzogMjAgfSxcbiAqICAgICB7IGxhdDogNSwgbG5nOiAxNSB9LFxuICogICAgIHsgbGF0OiAwLCBsbmc6IDE1IH1cbiAqICAgXV1cbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBZ21Qb2x5Z29uIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQge1xuICAgIHByaXZhdGUgX3BvbHlnb25NYW5hZ2VyO1xuICAgIHByaXZhdGUgc3RhdGljIF9wb2x5Z29uT3B0aW9uc0F0dHJpYnV0ZXM7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyBQb2x5Z29uIGhhbmRsZXMgbW91c2UgZXZlbnRzLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgICAqL1xuICAgIGNsaWNrYWJsZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGRyYWcgdGhpcyBzaGFwZSBvdmVyIHRoZSBtYXAuIFRoZSBnZW9kZXNpY1xuICAgICAqIHByb3BlcnR5IGRlZmluZXMgdGhlIG1vZGUgb2YgZHJhZ2dpbmcuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAqL1xuICAgIGRyYWdnYWJsZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGVkaXQgdGhpcyBzaGFwZSBieSBkcmFnZ2luZyB0aGUgY29udHJvbFxuICAgICAqIHBvaW50cyBzaG93biBhdCB0aGUgdmVydGljZXMgYW5kIG9uIGVhY2ggc2VnbWVudC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICovXG4gICAgZWRpdGFibGU6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIGZpbGwgY29sb3IuIEFsbCBDU1MzIGNvbG9ycyBhcmUgc3VwcG9ydGVkIGV4Y2VwdCBmb3IgZXh0ZW5kZWRcbiAgICAgKiBuYW1lZCBjb2xvcnMuXG4gICAgICovXG4gICAgZmlsbENvbG9yOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGZpbGwgb3BhY2l0eSBiZXR3ZWVuIDAuMCBhbmQgMS4wXG4gICAgICovXG4gICAgZmlsbE9wYWNpdHk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIGVkZ2VzIG9mIHRoZSBwb2x5Z29uIGFyZSBpbnRlcnByZXRlZCBhcyBnZW9kZXNpYyBhbmQgd2lsbFxuICAgICAqIGZvbGxvdyB0aGUgY3VydmF0dXJlIG9mIHRoZSBFYXJ0aC4gV2hlbiBmYWxzZSwgZWRnZXMgb2YgdGhlIHBvbHlnb24gYXJlXG4gICAgICogcmVuZGVyZWQgYXMgc3RyYWlnaHQgbGluZXMgaW4gc2NyZWVuIHNwYWNlLiBOb3RlIHRoYXQgdGhlIHNoYXBlIG9mIGFcbiAgICAgKiBnZW9kZXNpYyBwb2x5Z29uIG1heSBhcHBlYXIgdG8gY2hhbmdlIHdoZW4gZHJhZ2dlZCwgYXMgdGhlIGRpbWVuc2lvbnNcbiAgICAgKiBhcmUgbWFpbnRhaW5lZCByZWxhdGl2ZSB0byB0aGUgc3VyZmFjZSBvZiB0aGUgZWFydGguIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAqL1xuICAgIGdlb2Rlc2ljOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBvcmRlcmVkIHNlcXVlbmNlIG9mIGNvb3JkaW5hdGVzIHRoYXQgZGVzaWduYXRlcyBhIGNsb3NlZCBsb29wLlxuICAgICAqIFVubGlrZSBwb2x5bGluZXMsIGEgcG9seWdvbiBtYXkgY29uc2lzdCBvZiBvbmUgb3IgbW9yZSBwYXRocy5cbiAgICAgKiAgQXMgYSByZXN1bHQsIHRoZSBwYXRocyBwcm9wZXJ0eSBtYXkgc3BlY2lmeSBvbmUgb3IgbW9yZSBhcnJheXMgb2ZcbiAgICAgKiBMYXRMbmcgY29vcmRpbmF0ZXMuIFBhdGhzIGFyZSBjbG9zZWQgYXV0b21hdGljYWxseTsgZG8gbm90IHJlcGVhdCB0aGVcbiAgICAgKiBmaXJzdCB2ZXJ0ZXggb2YgdGhlIHBhdGggYXMgdGhlIGxhc3QgdmVydGV4LiBTaW1wbGUgcG9seWdvbnMgbWF5IGJlXG4gICAgICogZGVmaW5lZCB1c2luZyBhIHNpbmdsZSBhcnJheSBvZiBMYXRMbmdzLiBNb3JlIGNvbXBsZXggcG9seWdvbnMgbWF5XG4gICAgICogc3BlY2lmeSBhbiBhcnJheSBvZiBhcnJheXMuIEFueSBzaW1wbGUgYXJyYXlzIGFyZSBjb252ZXJ0ZWQgaW50byBBcnJheXMuXG4gICAgICogSW5zZXJ0aW5nIG9yIHJlbW92aW5nIExhdExuZ3MgZnJvbSB0aGUgQXJyYXkgd2lsbCBhdXRvbWF0aWNhbGx5IHVwZGF0ZVxuICAgICAqIHRoZSBwb2x5Z29uIG9uIHRoZSBtYXAuXG4gICAgICovXG4gICAgcGF0aHM6IEFycmF5PExhdExuZyB8IExhdExuZ0xpdGVyYWw+IHwgQXJyYXk8QXJyYXk8TGF0TG5nIHwgTGF0TG5nTGl0ZXJhbD4+O1xuICAgIC8qKlxuICAgICAqIFRoZSBzdHJva2UgY29sb3IuIEFsbCBDU1MzIGNvbG9ycyBhcmUgc3VwcG9ydGVkIGV4Y2VwdCBmb3IgZXh0ZW5kZWRcbiAgICAgKiBuYW1lZCBjb2xvcnMuXG4gICAgICovXG4gICAgc3Ryb2tlQ29sb3I6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgc3Ryb2tlIG9wYWNpdHkgYmV0d2VlbiAwLjAgYW5kIDEuMFxuICAgICAqL1xuICAgIHN0cm9rZU9wYWNpdHk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgc3Ryb2tlIHdpZHRoIGluIHBpeGVscy5cbiAgICAgKi9cbiAgICBzdHJva2VXZWlnaHQ6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoaXMgcG9seWdvbiBpcyB2aXNpYmxlIG9uIHRoZSBtYXAuIERlZmF1bHRzIHRvIHRydWUuXG4gICAgICovXG4gICAgdmlzaWJsZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgekluZGV4IGNvbXBhcmVkIHRvIG90aGVyIHBvbHlzLlxuICAgICAqL1xuICAgIHpJbmRleDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIGNsaWNrIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBQb2x5Z29uLlxuICAgICAqL1xuICAgIHBvbHlDbGljazogRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBkYmxjbGljayBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWdvbi5cbiAgICAgKi9cbiAgICBwb2x5RGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyByZXBlYXRlZGx5IGZpcmVkIHdoaWxlIHRoZSB1c2VyIGRyYWdzIHRoZSBwb2x5Z29uLlxuICAgICAqL1xuICAgIHBvbHlEcmFnOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIHN0b3BzIGRyYWdnaW5nIHRoZSBwb2x5Z29uLlxuICAgICAqL1xuICAgIHBvbHlEcmFnRW5kOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyBkcmFnZ2luZyB0aGUgcG9seWdvbi5cbiAgICAgKi9cbiAgICBwb2x5RHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gbW91c2Vkb3duIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBQb2x5Z29uLlxuICAgICAqL1xuICAgIHBvbHlNb3VzZURvd246IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gbW91c2Vtb3ZlIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBQb2x5Z29uLlxuICAgICAqL1xuICAgIHBvbHlNb3VzZU1vdmU6IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCBvbiBQb2x5Z29uIG1vdXNlb3V0LlxuICAgICAqL1xuICAgIHBvbHlNb3VzZU91dDogRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIG9uIFBvbHlnb24gbW91c2VvdmVyLlxuICAgICAqL1xuICAgIHBvbHlNb3VzZU92ZXI6IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGUgdGhlIERPTSBtb3VzZXVwIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBQb2x5Z29uXG4gICAgICovXG4gICAgcG9seU1vdXNlVXA6IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVuIGlzIGZpcmVkIHdoZW4gdGhlIFBvbHlnb24gaXMgcmlnaHQtY2xpY2tlZCBvbi5cbiAgICAgKi9cbiAgICBwb2x5UmlnaHRDbGljazogRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PjtcbiAgICBwcml2YXRlIF9pZDtcbiAgICBwcml2YXRlIF9wb2x5Z29uQWRkZWRUb01hbmFnZXI7XG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9ucztcbiAgICBjb25zdHJ1Y3RvcihfcG9seWdvbk1hbmFnZXI6IFBvbHlnb25NYW5hZ2VyKTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGFueTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgaWQoKTogc3RyaW5nO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIHByaXZhdGUgX2luaXQ7XG4gICAgcHJpdmF0ZSBfYWRkRXZlbnRMaXN0ZW5lcnM7XG4gICAgcHJpdmF0ZSBfdXBkYXRlUG9seWdvbk9wdGlvbnM7XG59XG4iXX0=