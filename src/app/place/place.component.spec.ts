import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { PlaceComponent } from './place.component';
import {PlaceService} from './place.service';

describe('PlaceComponent', () => {
 beforeEach(() => {
   TestBed.configureTestingModule({
       declarations: [PlaceComponent]
   });
 });
    it('should create the app', () => {
        const fixture = TestBed.createComponent(PlaceComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
    it('should have the same places as the services', () => {
        const fixture = TestBed.createComponent(PlaceComponent);
        const app = fixture.debugElement.componentInstance;
        const placesServices = fixture.debugElement.injector.get(PlaceService);
        expect(app.places).toEqual(placesServices.places);
    });
});
