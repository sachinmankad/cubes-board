import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu-example',
    templateUrl: './menu-example.component.html',
    styleUrls: ['./menu-example.component.scss']
})
export class MenuExampleComponent implements OnInit {
    title = '';
    constructor() {}

    ngOnInit(): void {
        this.title = 'menu-example';
    }
}
