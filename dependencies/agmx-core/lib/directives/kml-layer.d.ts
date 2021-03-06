import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { KmlMouseEvent } from './../services/google-maps-types';
import { KmlLayerManager } from './../services/managers/kml-layer-manager';
import * as ɵngcc0 from '@angular/core';
export declare class AgmKmlLayer implements OnInit, OnDestroy, OnChanges {
    private _manager;
    private static _kmlLayerOptions;
    /**
     * If true, the layer receives mouse events. Default value is true.
     */
    clickable: boolean;
    /**
     * By default, the input map is centered and zoomed to the bounding box of the contents of the
     * layer.
     * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
     * were never set.
     */
    preserveViewport: boolean;
    /**
     * Whether to render the screen overlays. Default true.
     */
    screenOverlays: boolean;
    /**
     * Suppress the rendering of info windows when layer features are clicked.
     */
    suppressInfoWindows: boolean;
    /**
     * The URL of the KML document to display.
     */
    url: string;
    /**
     * The z-index of the layer.
     */
    zIndex: number | null;
    /**
     * This event is fired when a feature in the layer is clicked.
     */
    layerClick: EventEmitter<KmlMouseEvent>;
    /**
     * This event is fired when the KML layers default viewport has changed.
     */
    defaultViewportChange: EventEmitter<void>;
    /**
     * This event is fired when the KML layer has finished loading.
     * At this point it is safe to read the status property to determine if the layer loaded
     * successfully.
     */
    statusChange: EventEmitter<void>;
    private _addedToManager;
    private _id;
    private _subscriptions;
    constructor(_manager: KmlLayerManager);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /** @internal */
    id(): string;
    /** @internal */
    toString(): string;
    /** @internal */
    ngOnDestroy(): void;
    private _updatePolygonOptions;
    private _addEventListeners;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmKmlLayer, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AgmKmlLayer, "agm-kml-layer", never, { "clickable": "clickable"; "preserveViewport": "preserveViewport"; "screenOverlays": "screenOverlays"; "suppressInfoWindows": "suppressInfoWindows"; "url": "url"; "zIndex": "zIndex"; }, { "layerClick": "layerClick"; "defaultViewportChange": "defaultViewportChange"; "statusChange": "statusChange"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia21sLWxheWVyLmQudHMiLCJzb3VyY2VzIjpbImttbC1sYXllci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEttbE1vdXNlRXZlbnQgfSBmcm9tICcuLy4uL3NlcnZpY2VzL2dvb2dsZS1tYXBzLXR5cGVzJztcbmltcG9ydCB7IEttbExheWVyTWFuYWdlciB9IGZyb20gJy4vLi4vc2VydmljZXMvbWFuYWdlcnMva21sLWxheWVyLW1hbmFnZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWdtS21sTGF5ZXIgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgICBwcml2YXRlIF9tYW5hZ2VyO1xuICAgIHByaXZhdGUgc3RhdGljIF9rbWxMYXllck9wdGlvbnM7XG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIGxheWVyIHJlY2VpdmVzIG1vdXNlIGV2ZW50cy4gRGVmYXVsdCB2YWx1ZSBpcyB0cnVlLlxuICAgICAqL1xuICAgIGNsaWNrYWJsZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGUgaW5wdXQgbWFwIGlzIGNlbnRlcmVkIGFuZCB6b29tZWQgdG8gdGhlIGJvdW5kaW5nIGJveCBvZiB0aGUgY29udGVudHMgb2YgdGhlXG4gICAgICogbGF5ZXIuXG4gICAgICogSWYgdGhpcyBvcHRpb24gaXMgc2V0IHRvIHRydWUsIHRoZSB2aWV3cG9ydCBpcyBsZWZ0IHVuY2hhbmdlZCwgdW5sZXNzIHRoZSBtYXAncyBjZW50ZXIgYW5kIHpvb21cbiAgICAgKiB3ZXJlIG5ldmVyIHNldC5cbiAgICAgKi9cbiAgICBwcmVzZXJ2ZVZpZXdwb3J0OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gcmVuZGVyIHRoZSBzY3JlZW4gb3ZlcmxheXMuIERlZmF1bHQgdHJ1ZS5cbiAgICAgKi9cbiAgICBzY3JlZW5PdmVybGF5czogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBTdXBwcmVzcyB0aGUgcmVuZGVyaW5nIG9mIGluZm8gd2luZG93cyB3aGVuIGxheWVyIGZlYXR1cmVzIGFyZSBjbGlja2VkLlxuICAgICAqL1xuICAgIHN1cHByZXNzSW5mb1dpbmRvd3M6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIFVSTCBvZiB0aGUgS01MIGRvY3VtZW50IHRvIGRpc3BsYXkuXG4gICAgICovXG4gICAgdXJsOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHotaW5kZXggb2YgdGhlIGxheWVyLlxuICAgICAqL1xuICAgIHpJbmRleDogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gYSBmZWF0dXJlIGluIHRoZSBsYXllciBpcyBjbGlja2VkLlxuICAgICAqL1xuICAgIGxheWVyQ2xpY2s6IEV2ZW50RW1pdHRlcjxLbWxNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIEtNTCBsYXllcnMgZGVmYXVsdCB2aWV3cG9ydCBoYXMgY2hhbmdlZC5cbiAgICAgKi9cbiAgICBkZWZhdWx0Vmlld3BvcnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIEtNTCBsYXllciBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAgICAgKiBBdCB0aGlzIHBvaW50IGl0IGlzIHNhZmUgdG8gcmVhZCB0aGUgc3RhdHVzIHByb3BlcnR5IHRvIGRldGVybWluZSBpZiB0aGUgbGF5ZXIgbG9hZGVkXG4gICAgICogc3VjY2Vzc2Z1bGx5LlxuICAgICAqL1xuICAgIHN0YXR1c0NoYW5nZTogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuICAgIHByaXZhdGUgX2FkZGVkVG9NYW5hZ2VyO1xuICAgIHByaXZhdGUgX2lkO1xuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM7XG4gICAgY29uc3RydWN0b3IoX21hbmFnZXI6IEttbExheWVyTWFuYWdlcik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgaWQoKTogc3RyaW5nO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBfdXBkYXRlUG9seWdvbk9wdGlvbnM7XG4gICAgcHJpdmF0ZSBfYWRkRXZlbnRMaXN0ZW5lcnM7XG59XG4iXX0=