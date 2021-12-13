import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticateComponent } from './authenticate.component';

@NgModule({
    declarations: [AuthenticateComponent],
    imports: [CommonModule],
    exports: [AuthenticateComponent]
})
export class AuthenticateModule {}
