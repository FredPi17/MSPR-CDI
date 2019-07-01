import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    showErrorMessage: any;

    ngOnInit(): void {
    }

    constructor(public httpClient: HttpClient, private  router: Router) {
    }

    login(form) {
        this.showErrorMessage = false;
        this.httpClient.post('http://fredericpinaud.ddns.net:3060/api/utilisateurs/auth', {
                email: form.value.email,
                motdepasse: form.value.password
            }
        )
            .subscribe((val) => {
                if (val.response.length === 1) {
                    if (val.response[0].statut === 'ADMIN') {
                        this.router.navigateByUrl('home');
                    }
                } else {
                    this.showErrorMessage = true;
                }
            }, error => {
                console.log(error);
            });

    }


}
