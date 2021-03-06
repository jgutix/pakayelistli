import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { MouseEvent } from '../map-types';
import { LatLng, LatLngBounds, LatLngLiteral } from '../services/google-maps-types';
import { CircleManager } from '../services/managers/circle-manager';
import * as ɵngcc0 from '@angular/core';
export declare class AgmCircle implements OnInit, OnChanges, OnDestroy {
    private _manager;
    private static _mapOptions;
    /**
     * The latitude position of the circle (required).
     */
    latitude: number;
    /**
     * The clickable position of the circle (required).
     */
    longitude: number;
    /**
     * Indicates whether this Circle handles mouse events. Defaults to true.
     */
    clickable: boolean;
    /**
     * If set to true, the user can drag this circle over the map. Defaults to false.
     */
    draggable: boolean;
    /**
     * If set to true, the user can edit this circle by dragging the control points shown at
     * the center and around the circumference of the circle. Defaults to false.
     */
    editable: boolean;
    /**
     * The fill color. All CSS3 colors are supported except for extended named colors.
     */
    fillColor: string;
    /**
     * The fill opacity between 0.0 and 1.0.
     */
    fillOpacity: number;
    /**
     * The radius in meters on the Earth's surface.
     */
    radius: number;
    /**
     * The stroke color. All CSS3 colors are supported except for extended named colors.
     */
    strokeColor: string;
    /**
     * The stroke opacity between 0.0 and 1.0
     */
    strokeOpacity: number;
    /**
     * The stroke position. Defaults to CENTER.
     * This property is not supported on Internet Explorer 8 and earlier.
     */
    strokePosition: 'CENTER' | 'INSIDE' | 'OUTSIDE';
    /**
     * The stroke width in pixels.
     */
    strokeWeight: number;
    /**
     * Whether this circle is visible on the map. Defaults to true.
     */
    visible: boolean;
    /**
     * The zIndex compared to other polys.
     */
    zIndex: number;
    /**
     * This event is fired when the circle's center is changed.
     */
    centerChange: EventEmitter<LatLngLiteral>;
    /**
     * This event emitter gets emitted when the user clicks on the circle.
     */
    circleClick: EventEmitter<MouseEvent>;
    /**
     * This event emitter gets emitted when the user clicks on the circle.
     */
    circleDblClick: EventEmitter<MouseEvent>;
    /**
     * This event is repeatedly fired while the user drags the circle.
     */
    drag: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the user stops dragging the circle.
     */
    dragEnd: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the user starts dragging the circle.
     */
    dragStart: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the DOM mousedown event is fired on the circle.
     */
    mouseDown: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the DOM mousemove event is fired on the circle.
     */
    mouseMove: EventEmitter<MouseEvent>;
    /**
     * This event is fired on circle mouseout.
     */
    mouseOut: EventEmitter<MouseEvent>;
    /**
     * This event is fired on circle mouseover.
     */
    mouseOver: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the DOM mouseup event is fired on the circle.
     */
    mouseUp: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the circle's radius is changed.
     */
    radiusChange: EventEmitter<number>;
    /**
     * This event is fired when the circle is right-clicked on.
     */
    rightClick: EventEmitter<MouseEvent>;
    private _circleAddedToManager;
    private _eventSubscriptions;
    constructor(_manager: CircleManager);
    /** @internal */
    ngOnInit(): void;
    /** @internal */
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    /** @internal */
    ngOnDestroy(): void;
    /**
     * Gets the LatLngBounds of this Circle.
     */
    getBounds(): Promise<LatLngBounds>;
    getCenter(): Promise<LatLng>;
    private _updateCircleOptionsChanges;
    private _registerEventListeners;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmCircle, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AgmCircle, "agm-circle", never, { "clickable": "clickable"; "draggable": "circleDraggable"; "editable": "editable"; "radius": "radius"; "strokePosition": "strokePosition"; "strokeWeight": "strokeWeight"; "visible": "visible"; "latitude": "latitude"; "longitude": "longitude"; "fillColor": "fillColor"; "fillOpacity": "fillOpacity"; "strokeColor": "strokeColor"; "strokeOpacity": "strokeOpacity"; "zIndex": "zIndex"; }, { "centerChange": "centerChange"; "circleClick": "circleClick"; "circleDblClick": "circleDblClick"; "drag": "drag"; "dragEnd": "dragEnd"; "dragStart": "dragStart"; "mouseDown": "mouseDown"; "mouseMove": "mouseMove"; "mouseOut": "mouseOut"; "mouseOver": "mouseOver"; "mouseUp": "mouseUp"; "radiusChange": "radiusChange"; "rightClick": "rightClick"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmQudHMiLCJzb3VyY2VzIjpbImNpcmNsZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vdXNlRXZlbnQgfSBmcm9tICcuLi9tYXAtdHlwZXMnO1xuaW1wb3J0IHsgTGF0TG5nLCBMYXRMbmdCb3VuZHMsIExhdExuZ0xpdGVyYWwgfSBmcm9tICcuLi9zZXJ2aWNlcy9nb29nbGUtbWFwcy10eXBlcyc7XG5pbXBvcnQgeyBDaXJjbGVNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvY2lyY2xlLW1hbmFnZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWdtQ2lyY2xlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfbWFuYWdlcjtcbiAgICBwcml2YXRlIHN0YXRpYyBfbWFwT3B0aW9ucztcbiAgICAvKipcbiAgICAgKiBUaGUgbGF0aXR1ZGUgcG9zaXRpb24gb2YgdGhlIGNpcmNsZSAocmVxdWlyZWQpLlxuICAgICAqL1xuICAgIGxhdGl0dWRlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGNsaWNrYWJsZSBwb3NpdGlvbiBvZiB0aGUgY2lyY2xlIChyZXF1aXJlZCkuXG4gICAgICovXG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyBDaXJjbGUgaGFuZGxlcyBtb3VzZSBldmVudHMuIERlZmF1bHRzIHRvIHRydWUuXG4gICAgICovXG4gICAgY2xpY2thYmxlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIElmIHNldCB0byB0cnVlLCB0aGUgdXNlciBjYW4gZHJhZyB0aGlzIGNpcmNsZSBvdmVyIHRoZSBtYXAuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAqL1xuICAgIGRyYWdnYWJsZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGVkaXQgdGhpcyBjaXJjbGUgYnkgZHJhZ2dpbmcgdGhlIGNvbnRyb2wgcG9pbnRzIHNob3duIGF0XG4gICAgICogdGhlIGNlbnRlciBhbmQgYXJvdW5kIHRoZSBjaXJjdW1mZXJlbmNlIG9mIHRoZSBjaXJjbGUuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAqL1xuICAgIGVkaXRhYmxlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBmaWxsIGNvbG9yLiBBbGwgQ1NTMyBjb2xvcnMgYXJlIHN1cHBvcnRlZCBleGNlcHQgZm9yIGV4dGVuZGVkIG5hbWVkIGNvbG9ycy5cbiAgICAgKi9cbiAgICBmaWxsQ29sb3I6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgZmlsbCBvcGFjaXR5IGJldHdlZW4gMC4wIGFuZCAxLjAuXG4gICAgICovXG4gICAgZmlsbE9wYWNpdHk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgcmFkaXVzIGluIG1ldGVycyBvbiB0aGUgRWFydGgncyBzdXJmYWNlLlxuICAgICAqL1xuICAgIHJhZGl1czogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBzdHJva2UgY29sb3IuIEFsbCBDU1MzIGNvbG9ycyBhcmUgc3VwcG9ydGVkIGV4Y2VwdCBmb3IgZXh0ZW5kZWQgbmFtZWQgY29sb3JzLlxuICAgICAqL1xuICAgIHN0cm9rZUNvbG9yOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHN0cm9rZSBvcGFjaXR5IGJldHdlZW4gMC4wIGFuZCAxLjBcbiAgICAgKi9cbiAgICBzdHJva2VPcGFjaXR5OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHN0cm9rZSBwb3NpdGlvbi4gRGVmYXVsdHMgdG8gQ0VOVEVSLlxuICAgICAqIFRoaXMgcHJvcGVydHkgaXMgbm90IHN1cHBvcnRlZCBvbiBJbnRlcm5ldCBFeHBsb3JlciA4IGFuZCBlYXJsaWVyLlxuICAgICAqL1xuICAgIHN0cm9rZVBvc2l0aW9uOiAnQ0VOVEVSJyB8ICdJTlNJREUnIHwgJ09VVFNJREUnO1xuICAgIC8qKlxuICAgICAqIFRoZSBzdHJva2Ugd2lkdGggaW4gcGl4ZWxzLlxuICAgICAqL1xuICAgIHN0cm9rZVdlaWdodDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhpcyBjaXJjbGUgaXMgdmlzaWJsZSBvbiB0aGUgbWFwLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgICAqL1xuICAgIHZpc2libGU6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIHpJbmRleCBjb21wYXJlZCB0byBvdGhlciBwb2x5cy5cbiAgICAgKi9cbiAgICB6SW5kZXg6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIGNpcmNsZSdzIGNlbnRlciBpcyBjaGFuZ2VkLlxuICAgICAqL1xuICAgIGNlbnRlckNoYW5nZTogRXZlbnRFbWl0dGVyPExhdExuZ0xpdGVyYWw+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGNpcmNsZS5cbiAgICAgKi9cbiAgICBjaXJjbGVDbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGNpcmNsZS5cbiAgICAgKi9cbiAgICBjaXJjbGVEYmxDbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgcmVwZWF0ZWRseSBmaXJlZCB3aGlsZSB0aGUgdXNlciBkcmFncyB0aGUgY2lyY2xlLlxuICAgICAqL1xuICAgIGRyYWc6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RvcHMgZHJhZ2dpbmcgdGhlIGNpcmNsZS5cbiAgICAgKi9cbiAgICBkcmFnRW5kOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyBkcmFnZ2luZyB0aGUgY2lyY2xlLlxuICAgICAqL1xuICAgIGRyYWdTdGFydDogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNlZG93biBldmVudCBpcyBmaXJlZCBvbiB0aGUgY2lyY2xlLlxuICAgICAqL1xuICAgIG1vdXNlRG93bjogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNlbW92ZSBldmVudCBpcyBmaXJlZCBvbiB0aGUgY2lyY2xlLlxuICAgICAqL1xuICAgIG1vdXNlTW92ZTogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgb24gY2lyY2xlIG1vdXNlb3V0LlxuICAgICAqL1xuICAgIG1vdXNlT3V0OiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCBvbiBjaXJjbGUgbW91c2VvdmVyLlxuICAgICAqL1xuICAgIG1vdXNlT3ZlcjogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNldXAgZXZlbnQgaXMgZmlyZWQgb24gdGhlIGNpcmNsZS5cbiAgICAgKi9cbiAgICBtb3VzZVVwOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBjaXJjbGUncyByYWRpdXMgaXMgY2hhbmdlZC5cbiAgICAgKi9cbiAgICByYWRpdXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgY2lyY2xlIGlzIHJpZ2h0LWNsaWNrZWQgb24uXG4gICAgICovXG4gICAgcmlnaHRDbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIHByaXZhdGUgX2NpcmNsZUFkZGVkVG9NYW5hZ2VyO1xuICAgIHByaXZhdGUgX2V2ZW50U3Vic2NyaXB0aW9ucztcbiAgICBjb25zdHJ1Y3RvcihfbWFuYWdlcjogQ2lyY2xlTWFuYWdlcik7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlO1xuICAgIH0pOiB2b2lkO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIExhdExuZ0JvdW5kcyBvZiB0aGlzIENpcmNsZS5cbiAgICAgKi9cbiAgICBnZXRCb3VuZHMoKTogUHJvbWlzZTxMYXRMbmdCb3VuZHM+O1xuICAgIGdldENlbnRlcigpOiBQcm9taXNlPExhdExuZz47XG4gICAgcHJpdmF0ZSBfdXBkYXRlQ2lyY2xlT3B0aW9uc0NoYW5nZXM7XG4gICAgcHJpdmF0ZSBfcmVnaXN0ZXJFdmVudExpc3RlbmVycztcbn1cbiJdfQ==