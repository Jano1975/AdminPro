import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard', descripcion: 'Pagina principal'}},
            {path: 'progress', component: ProgressComponent, data: { titulo: 'Progress', descripcion: 'Uso de los inputs y outputs'}},
            {path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas', descripcion: 'Uso de ng2charts'}},
            {path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas', descripcion: 'Uso de promesas'}},
            {path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes tema', descripcion: 'localStorage'}},
            {path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs', descripcion: 'Uso de Observables'}},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]},
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
