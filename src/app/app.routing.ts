import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ProfileComponent } from './layout/profile/profile.component';

const appRoutes: Routes = [
    // order of routes in router is important beacause it search for first route that match
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);