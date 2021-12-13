import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from './components/navbar/navbar.module';
import { MenuExampleModule } from './components/menu-example/menu-example.module';
import { CardsExampleModule } from './components/cards-example/cards-example.module';

import { DemoComponent } from './demo.component';

@NgModule({
    declarations: [DemoComponent],
    exports: [DemoComponent],
    imports: [CommonModule, NavbarModule, MenuExampleModule, CardsExampleModule]
})
export class DemoModule {}
