import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmCircle } from '../../directives/circle';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import * as mapTypes from '../google-maps-types';
import * as ɵngcc0 from '@angular/core';
export declare class CircleManager {
    private _apiWrapper;
    private _zone;
    private _circles;
    constructor(_apiWrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    addCircle(circle: AgmCircle): void;
    /**
     * Removes the given circle from the map.
     */
    removeCircle(circle: AgmCircle): Promise<void>;
    setOptions(circle: AgmCircle, options: mapTypes.CircleOptions): Promise<void>;
    getBounds(circle: AgmCircle): Promise<mapTypes.LatLngBounds>;
    getCenter(circle: AgmCircle): Promise<mapTypes.LatLng>;
    getRadius(circle: AgmCircle): Promise<number>;
    setCenter(circle: AgmCircle): Promise<void>;
    setEditable(circle: AgmCircle): Promise<void>;
    setDraggable(circle: AgmCircle): Promise<void>;
    setVisible(circle: AgmCircle): Promise<void>;
    setRadius(circle: AgmCircle): Promise<void>;
    createEventObservable<T>(eventName: string, circle: AgmCircle): Observable<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CircleManager, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLW1hbmFnZXIuZC50cyIsInNvdXJjZXMiOlsiY2lyY2xlLW1hbmFnZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFnbUNpcmNsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY2lyY2xlJztcbmltcG9ydCB7IEdvb2dsZU1hcHNBUElXcmFwcGVyIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInO1xuaW1wb3J0ICogYXMgbWFwVHlwZXMgZnJvbSAnLi4vZ29vZ2xlLW1hcHMtdHlwZXMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2lyY2xlTWFuYWdlciB7XG4gICAgcHJpdmF0ZSBfYXBpV3JhcHBlcjtcbiAgICBwcml2YXRlIF96b25lO1xuICAgIHByaXZhdGUgX2NpcmNsZXM7XG4gICAgY29uc3RydWN0b3IoX2FwaVdyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyLCBfem9uZTogTmdab25lKTtcbiAgICBhZGRDaXJjbGUoY2lyY2xlOiBBZ21DaXJjbGUpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGdpdmVuIGNpcmNsZSBmcm9tIHRoZSBtYXAuXG4gICAgICovXG4gICAgcmVtb3ZlQ2lyY2xlKGNpcmNsZTogQWdtQ2lyY2xlKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRPcHRpb25zKGNpcmNsZTogQWdtQ2lyY2xlLCBvcHRpb25zOiBtYXBUeXBlcy5DaXJjbGVPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcbiAgICBnZXRCb3VuZHMoY2lyY2xlOiBBZ21DaXJjbGUpOiBQcm9taXNlPG1hcFR5cGVzLkxhdExuZ0JvdW5kcz47XG4gICAgZ2V0Q2VudGVyKGNpcmNsZTogQWdtQ2lyY2xlKTogUHJvbWlzZTxtYXBUeXBlcy5MYXRMbmc+O1xuICAgIGdldFJhZGl1cyhjaXJjbGU6IEFnbUNpcmNsZSk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBzZXRDZW50ZXIoY2lyY2xlOiBBZ21DaXJjbGUpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldEVkaXRhYmxlKGNpcmNsZTogQWdtQ2lyY2xlKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXREcmFnZ2FibGUoY2lyY2xlOiBBZ21DaXJjbGUpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFZpc2libGUoY2lyY2xlOiBBZ21DaXJjbGUpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFJhZGl1cyhjaXJjbGU6IEFnbUNpcmNsZSk6IFByb21pc2U8dm9pZD47XG4gICAgY3JlYXRlRXZlbnRPYnNlcnZhYmxlPFQ+KGV2ZW50TmFtZTogc3RyaW5nLCBjaXJjbGU6IEFnbUNpcmNsZSk6IE9ic2VydmFibGU8VD47XG59XG4iXX0=