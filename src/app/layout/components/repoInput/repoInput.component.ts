import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
    selector: 'repo-input',
    templateUrl: 'repoInput.component.html'
})

export class RepoInput {
    @Output() onRepo = new EventEmitter();
    input = {
        user : null,
        repo : null
    }
    onSubmit(){
        this.onRepo.emit({user: this.input.user, repo: this.input.repo })
    }
}