import { Component } from '@angular/core';
import { GithubService } from '../../services/github';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GithubService]
})

export class HomePage {
  public foundRepos;
  public username;

  constructor(public github: GithubService) {
  }

  getRepos() {
    () => console.log('getRepos called');
    this.github.getRepos(this.username).subscribe(
        data => {
            this.foundRepos = data.json();
        },
        err => console.error(err),
        () => console.log('getRepos completed')
    );
  }
  // constructor(public navCtrl: NavController) {
  // }
}
