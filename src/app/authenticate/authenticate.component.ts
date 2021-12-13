import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-authenticate',
    templateUrl: './authenticate.component.html',
    styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {
    title: string = '';

    constructor() {}

    ngOnInit(): void {
        this.title = 'Authentication Component!!!';
    }
}
