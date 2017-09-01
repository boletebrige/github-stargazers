import { Component, OnInit } from '@angular/core';
// Import HttpModule from @angular/common/http
import { Http } from '@angular/http';

@Component({
    selector: 'home-page',
    templateUrl: './app/home/home.component.html',
    styleUrls: ['./app/home/home.component.css', '../node_modules/bootstrap/dist/css/bootstrap.min.css']
})

export class HomeComponent implements OnInit {
    responsedata = { 
        name: '',
        owner: {
            avatar_url: '',
        }
    };
    constructor(private http: Http){

    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.http.get('https://api.github.com/repos/angular/angular')
            .subscribe(data => {
                console.log(data.json());
                this.responsedata = data.json();
            });
    }
}
