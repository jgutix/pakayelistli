import { cities } from './cities';
import { DiacriticRegex } from './diacritic-regex';
import { map, startWith } from 'rxjs/operators';
export class CitiesHelper {
    constructor(cityCtrl) {
        this.cities = cities;
        this.cities = this.cities.sort((a, b) => {
            if (a[1] < b[1]) {
                return -1;
            }
            if (a[1] > b[1]) {
                return 1;
            }
            return 0;
        });
        this.cityCtrl = cityCtrl;
        this.regex = new DiacriticRegex();
    }
    static isValidCity(city) {
        return cities.map(item => item[1]).indexOf(city) !== -1;
    }
    getFilteredCitiesObservable() {
        // TODO: crear directiva
        return this.cityCtrl.valueChanges.pipe(startWith(null), map((name) => this.filterCities(name)));
    }
    filterCities(val) {
        return val ? this.cities.filter(c => this.regex.toRegex({ flags: 'gi' })(val).test(c[1]))
            : this.cities;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2l0aWVzLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Ftb3h0bGF0aWxveWFuLyIsInNvdXJjZXMiOlsibGliL2NpdGllcy1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUVoQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QyxNQUFNLE9BQU8sWUFBWTtJQUt2QixZQUFZLFFBQXFCO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDWDtZQUVELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDZixPQUFPLENBQUMsQ0FBQzthQUNWO1lBQ0QsT0FBTyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFZO1FBQzdCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsMkJBQTJCO1FBQ3pCLHdCQUF3QjtRQUN4QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDcEMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNmLEdBQUcsQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUMvQyxDQUFDO0lBRUosQ0FBQztJQUVPLFlBQVksQ0FBQyxHQUFXO1FBQzlCLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JGLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Y2l0aWVzfSBmcm9tICcuL2NpdGllcyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtEaWFjcml0aWNSZWdleH0gZnJvbSAnLi9kaWFjcml0aWMtcmVnZXgnO1xuaW1wb3J0IHttYXAsIHN0YXJ0V2l0aH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQ2l0aWVzSGVscGVyIHtcbiAgY2l0eUN0cmw6IGFueTtcbiAgcHJpdmF0ZSByZWdleDogRGlhY3JpdGljUmVnZXg7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2l0aWVzOiBzdHJpbmdbXVtdO1xuXG4gIGNvbnN0cnVjdG9yKGNpdHlDdHJsOiBGb3JtQ29udHJvbCkge1xuICAgIHRoaXMuY2l0aWVzID0gY2l0aWVzO1xuICAgIHRoaXMuY2l0aWVzID0gdGhpcy5jaXRpZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGFbMV0gPCBiWzFdKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFbMV0gPiBiWzFdKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gICAgdGhpcy5jaXR5Q3RybCA9IGNpdHlDdHJsO1xuICAgIHRoaXMucmVnZXggPSBuZXcgRGlhY3JpdGljUmVnZXgoKTtcbiAgfVxuXG4gIHN0YXRpYyBpc1ZhbGlkQ2l0eShjaXR5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY2l0aWVzLm1hcChpdGVtID0+IGl0ZW1bMV0pLmluZGV4T2YoY2l0eSkgIT09IC0xO1xuICB9XG5cbiAgZ2V0RmlsdGVyZWRDaXRpZXNPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgLy8gVE9ETzogY3JlYXIgZGlyZWN0aXZhXG4gICAgcmV0dXJuIHRoaXMuY2l0eUN0cmwudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICBzdGFydFdpdGgobnVsbCksXG4gICAgICBtYXAoKG5hbWU6IHN0cmluZykgPT4gdGhpcy5maWx0ZXJDaXRpZXMobmFtZSkpXG4gICAgKTtcblxuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJDaXRpZXModmFsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdmFsID8gdGhpcy5jaXRpZXMuZmlsdGVyKGMgPT4gdGhpcy5yZWdleC50b1JlZ2V4KHtmbGFnczogJ2dpJ30pKHZhbCkudGVzdChjWzFdKSlcbiAgICAgIDogdGhpcy5jaXRpZXM7XG4gIH1cbn1cbiJdfQ==