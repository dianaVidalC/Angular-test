import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { PlaceComponent } from './place.component';

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
});
