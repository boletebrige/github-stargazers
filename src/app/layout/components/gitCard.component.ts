import { Component, Input } from '@angular/core';

@Component({
    selector: 'git-card',
    templateUrl: 'gitCard.component.html',
    styleUrls: ['gitCard.component.scss']
})

export class GitCard {
    @Input() repo: any;
}