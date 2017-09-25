import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'home-component',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

export class HomeComponent {
    title = 'app';
    dataLoaded = false;
    initialArr = [
      {user: 'angular', repo: 'angular'},
      {user: 'vuejs', repo: 'vue'},
      {user: 'facebook', repo: 'react'},
      {user: 'jashkenas', repo: 'backbone'},
      {user: 'tastejs', repo: 'todomvc'},
      {user: 'Polymer', repo: 'polymer'}
    ];
    dataArr = [];
    input = {
      user: null,
      repo: null
    }
    constructor(private http: Http){
    }
    onSubmit(){
      this.http.get('https://api.github.com/repos/' + this.input.user + '/'+ this.input.repo)
      .subscribe(data => {
          this.dataArr.push(data.json());
          this.dataArr.sort(function(a, b){return b.stargazers_count- a.stargazers_count})
      });
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        for(let i = 0; i < this.initialArr.length; i++){
          this.http.get('https://api.github.com/repos/' + this.initialArr[i].user + '/'+ this.initialArr[i].repo)
          .subscribe(data => {
            this.dataArr.push(data.json());
            this.dataArr.sort(function(a, b){return b.stargazers_count- a.stargazers_count})
          });
        }
        this.dataLoaded = !this.dataLoaded;
    }
  }