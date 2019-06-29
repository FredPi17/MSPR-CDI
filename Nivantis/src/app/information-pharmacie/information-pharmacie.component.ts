import {Component, OnInit} from '@angular/core';
import {Pharmacie} from './pharmacie';
import {Informations} from './informations';
import {ServiceService} from '../service/service.service';

@Component({
    selector: 'app-information-pharmacie',
    templateUrl: './information-pharmacie.component.html',
    styleUrls: ['./information-pharmacie.component.scss'],
})
export class InformationPharmacieComponent implements OnInit {


    constructor(protected appService: ServiceService) {
    }

    selected: Informations[];
    pharmacies: Pharmacie[] = [];
    informations: Informations[] = [];
    pharmacie: Pharmacie[];
    currentLat: string;
    currentLong: string;

    ngOnInit() {
        this.findMe();
    }

    setInformation() {
        this.appService.getAllPharmacies().toPromise()
            .then(pharmacies => {
                if (pharmacies !== []) {
                    for (let i = 0; i < pharmacies.body.pharmaData.length; i++) {
                        this.pharmacies.push(pharmacies.body.pharmaData[i]);
                    }
                    this.onSelect(this.pharmacies[0].id);
                    console.log(this.pharmacies);
                }
            });
    }

    findMe() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.currentLat = position.coords.latitude.toString();
                this.currentLong = position.coords.longitude.toString();
                if (this.currentLong != null && this.currentLat != null) {
                    this.setInformation();
                }
            });
        } else {
            alert('Geolocation is not supported by this browser.');
            this.setInformation();
        }
    }

    getInformationPharmacie(id: number): Informations[] {
        this.pharmacie = this.pharmacies.filter(x => x.id === id);
        this.appService.getInformationsFromPharmacie(id).toPromise()
            .then(information => {
                if (information !== []) {
                    for (let i = 0; i < information.body.informations.length; i++) {
                        this.informations.push(information.body.informations[i]);
                    }
                }
            });
        return this.informations;
    }

    onSelect(id: number) {
        this.selected = this.getInformationPharmacie(Number(id));
    }

    sortPharmaciesByDistance(lat: string, lon: string): Pharmacie {
        let listPharmacie: any[];
        listPharmacie = this.pharmacies.sort((a, b) => {
            return a.getDistance(Number(lat), Number(lon)) - b.getDistance(Number(lat), Number(lon));
        });
        return listPharmacie[0];
    }
}
