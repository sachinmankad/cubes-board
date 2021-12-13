import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticateComponent } from './authenticate/authenticate.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
    { path: 'dashboard', component: AuthenticateComponent },
    { path: 'theme', component: DemoComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
