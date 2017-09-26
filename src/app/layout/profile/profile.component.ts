import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss']
})

export class ProfileComponent {
    displayedColumns = ['name', 'html_url', 'description', 'fork'];
    dataSource = null;
    initialProfile = 'boletebrige';
    profileData = null;
    profileRepos = null;
    dataLoaded = false;
    reposLoaded = false;
    constructor(private http: Http){
    }

    ngOnInit() {
        this.getProfile()
     }
    getProfile() {
        // load profile data
        this.http.get('https://api.github.com/users/' + this.initialProfile)
        .subscribe(data => {
            this.profileData = data.json();
            this.dataLoaded = true;
        });
        // load profile repos
        this.http.get('https://api.github.com/users/' + this.initialProfile +"/repos")
        .subscribe(data => {
            this.profileRepos = data.json();
            this.reposLoaded = true;
            this.dataSource = data.json();
        });
    }
}