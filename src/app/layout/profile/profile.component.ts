import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {PageEvent} from '@angular/material';

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss']
})

export class ProfileComponent {
    pageEvent: PageEvent;
    pageSize = 10;
    pageSizeOptions: Array<number> = [5, 10, 25, 100];
    initialProfile = 'boletebrige';
    profileData = null;
    profileRepos = null;
    dataLoaded = false;
    reposLoaded = false;
    constructor(private http: Http){
    }

    ngOnInit() {
        this.getData()

    }
    getData() {
        // load profile data
        this.http.get('https://api.github.com/users/' + this.initialProfile)
        .subscribe(data => {
            this.profileData = data.json();
            this.dataLoaded = true;
        });
        // load profile repos
        this.http.get('https://api.github.com/users/' + this.initialProfile +'/repos')
        .subscribe(data => {
            this.profileRepos = data.json();
            this.profileRepos.sort(function(a, b){return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()})
            this.reposLoaded = true;
            console.log(this.reposLoaded)
        });
    }

}