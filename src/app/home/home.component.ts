import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { Frontend } from '../data/frontend';
import { Web } from '../data/web';
import { Game } from '../data/game';
import { Editor } from '../data/editor';

@Component({
    selector: 'home-component',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

export class HomeComponent {
    title = 'app';
    dataLoaded = false;
    frontendArr = Frontend;
    frontendData = [];
    webArr = Web;
    webData = [];
    gameArr = Game;
    gameData = [];
    editorArr = Editor;
    editorData = [];
    tempData = [];
    input = {
      user: null,
      repo: null
    }
    constructor(private http: Http){
    }
    onSubmit(){
      this.http.get('https://api.github.com/repos/' + this.input.user + '/'+ this.input.repo)
      .subscribe(data => {
          this.tempData.push(data.json());
          this.tempData.sort(function(a, b){return b.stargazers_count- a.stargazers_count})
      });
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getData(this.frontendArr, this.frontendData)
        this.tempData = this.frontendData;
    }
    getData(inputArr, outputArr){

      for(let i = 0; i < inputArr.length; i++){
        this.http.get('https://api.github.com/repos/' + inputArr[i].user + '/'+ inputArr[i].repo)
        .subscribe(data => {
          outputArr.push(data.json());
          outputArr.sort(function(a, b){return b.stargazers_count- a.stargazers_count})
        });
      }
      this.dataLoaded = !this.dataLoaded;
    }
    onSelectChange = ($event: any): void => {
      // load data if isn't laoded on tab select
      if($event.index == 0){
        if(!this.frontendData.length){
          this.getData(this.frontendArr,  this.frontendData)
          this.tempData = this.frontendData;
        }
        this.tempData = this.frontendData;
      }else if($event.index == 1){
        if(!this.webData.length){
          this.getData(this.webArr, this.webData)
          this.tempData = this.webData;
        }
        this.tempData = this.webData;
      }else if($event.index == 2){
        if(!this.gameData.length){
          this.getData(this.gameArr, this.gameData)
          this.tempData = this.gameData;
        }
        this.tempData = this.gameData;
      }else if($event.index == 3){
        if(!this.editorData.length){
          this.getData(this.editorArr, this.editorData)
          this.tempData = this.editorData;
        }
        this.tempData = this.editorData;
      }
    }
  }