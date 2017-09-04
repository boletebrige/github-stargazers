import { Component } from '@angular/core';
// Import HttpModule from @angular/common/http
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  test = {
    user: null,
    repo: null
  }
  constructor(private http: Http){
  
  }

  onSubmit(){
    console.log(this.test.user);
    console.log(this.test.repo);
    this.http.get('https://api.github.com/repos/' + this.test.user + '/'+ this.test.repo)
    .subscribe(data => {
        this.dataArr.push(data.json());
        this.dataArr.sort(function(a, b){return b.stargazers_count- a.stargazers_count})
    });
  }
  
  ngOnInit() {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      // let test = 'angular';
      // this.http.get('https://api.github.com/repos/angular/'+ test)
      //     .subscribe(data => {
      //         console.log(data.json());
      //         this.responsedata = data.json();
      //     });
      for(let i = 0; i < this.initialArr.length; i++){
        this.http.get('https://api.github.com/repos/' + this.initialArr[i].user + '/'+ this.initialArr[i].repo)
        .subscribe(data => {
            this.dataArr.push(data.json())
        });
      }
      console.log(this.dataArr);
      this.dataLoaded = !this.dataLoaded;
  }
  


}
