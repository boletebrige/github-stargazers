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
    webArr = [
      {user: 'meteor', repo: 'meteor'},
      {user: 'rails', repo: 'rails'},
      {user: 'laravel', repo: 'laravel'},
      {user: 'expressjs', repo: 'express'},
      {user: 'pallets', repo: 'flask'},
      {user: 'django', repo: 'django'}
    ];
    gameArr = [
      {user: 'photonstorm', repo: 'phaser'},
      {user: 'pixijs', repo: 'pixi.js'},
      {user: 'BabylonJS', repo: 'Babylon.js'},
      {user: 'WhitestormJS', repo: 'whs.js'},
      {user: 'wellcaffeinated', repo: 'PhysicsJS'},
      {user: 'playcanvas', repo: 'engine'}
    ];
    textArr = [
      {user: 'atom', repo: 'atom'},
      {user: 'Microsoft', repo: 'vscode'},
      {user: 'adobe', repo: 'brackets'},
      {user: 'neovim', repo: 'neovim'},
      {user: 'limetext', repo: 'lime'},
      {user: 'syl20bnr', repo: 'spacemacs'}
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
        this.getData(this.initialArr)
        console.log('dataArr', this.dataArr)
    }
    getData(inputArr){
      this.dataArr = [];
      for(let i = 0; i < inputArr.length; i++){
        this.http.get('https://api.github.com/repos/' + inputArr[i].user + '/'+ inputArr[i].repo)
        .subscribe(data => {
          this.dataArr.push(data.json());
          this.dataArr.sort(function(a, b){return b.stargazers_count- a.stargazers_count})
        });
      }
      this.dataLoaded = !this.dataLoaded;
      console.log(this.dataArr)
    }
    onSelectChange = ($event: any): void => {
      if($event.index == 1){
        this.getData(this.webArr)
      }else if($event.index == 2){
        this.getData(this.gameArr)
      }else if($event.index == 3){
        this.getData(this.textArr)
      }
      else if($event.index == 0){
        this.getData(this.initialArr)
      }
    }
  }