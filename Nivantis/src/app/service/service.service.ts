import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ServiceService {
    public resourceUrlAPI = 'http://localhost:3060/api';

    constructor(protected http: HttpClient) {
    }

    getAllInformations(): Observable<any> {
        return this.http.get(`${this.resourceUrlAPI}/informations`, {observe: 'response'});
    }

    getAllPharmacies(): Observable<any> {
        return this.http.get(`${this.resourceUrlAPI}/pharmacies`, {observe: 'response'});
    }

    getAllMedicaments(): Observable<any> {
        return this.http.get(`${this.resourceUrlAPI}/medicaments`, {observe: 'response'});
    }

    getInformationsFromPharmacie(id: number): Observable<any> {
        return this.http.get(`${this.resourceUrlAPI}/informations/pharmacie/${id}`, {observe: 'response'});
    }
}
