import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    // order of routes in router is important beacause it search for first route that match
    { path: '', component: HomeComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);