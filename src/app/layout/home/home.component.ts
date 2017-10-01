import { Component } from '@angular/core';
import { Http } from '@angular/http';

import {MdSnackBar} from '@angular/material';

import { Frontend } from '../../data/frontend';
import { Web } from '../../data/web';
import { Game } from '../../data/game';
import { Editor } from '../../data/editor';

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
    pagedData = [];
    constructor(private http: Http, public snackBar: MdSnackBar){
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
    onSubmit(event){
      this.http.get('https://api.github.com/repos/' + event.user + '/'+ event.repo)
      .subscribe(data => {
          var that = this
          // Checks if repository is on list
          let compare = that.tempData.find(function(el){
            if(el.name == data.json().name){
              return el;
            }
          })
          if(compare){
            let message = 'Repository already exists on list !'
            let snackBarRef = that.snackBar.open(message, 'Done',  { duration: 2000, });
          }else{
            that.tempData.push(data.json());
            that.tempData.sort(function(a, b){return b.stargazers_count- a.stargazers_count})
            let message = `Repository ${ event.user }/${ event.repo } added!`
            let snackBarRef = that.snackBar.open(message, 'Done',  { duration: 2000, });
          }
      });
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getData(this.frontendArr, this.frontendData)
        this.tempData = this.frontendData;
        console.log(this.tempData.length)
        // ############## SOLVE this MYSTERY ##############
        // this.pagedData = this.tempData.slice(0,2)
       
    }
    onSelectChange = ($event: any): void => {
      // load data if isn't laoded on tab select
      if($event.index == 0){
        this.tempData = [];
        if(!this.frontendData.length){
          this.getData(this.frontendArr,  this.frontendData)
          this.tempData = this.frontendData;
        }
        this.tempData = this.frontendData;
      }else if($event.index == 1){
        this.tempData = [];
        if(!this.webData.length){
          this.getData(this.webArr, this.webData)
          this.tempData = this.webData;
        }
        this.tempData = this.webData;
      }else if($event.index == 2){
        this.tempData = [];
        if(!this.gameData.length){
          this.getData(this.gameArr, this.gameData)
          this.tempData = this.gameData;
        }
        this.tempData = this.gameData;
      }else if($event.index == 3){
        this.tempData = [];
        if(!this.editorData.length){
          this.getData(this.editorArr, this.editorData)
          this.tempData = this.editorData;
        }
        this.tempData = this.editorData;
      }
    }
  }