import {Injectable} from '@angular/core';

@Injectable()

export class PlaceService {
    places = [
        {id: 1, name: 'Zapatería Flores'},
        {id: 2, name: 'Hotel Paraíso'}
    ];
    getPlaces () {
        return this.places;
    }
}
