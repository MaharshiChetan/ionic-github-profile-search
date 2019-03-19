import { Repository } from './../../models/repository.interface';
import { User } from './../../models/user.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github.service';

@IonicPage({
  segment: 'profile/results/:username'
})
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {

  username: string;
  user: User;
  repositories: Repository[];

  constructor(private githubService: GithubServiceProvider, 
    private navCtrl: NavController, private navParams: NavParams) {
  }


  getUserInformation(): void {
    this.githubService.getUserInformation(this.username).subscribe(
      (data: User) => this.user = data);
    this.githubService.getRespositoryInformation(this.username).subscribe(
      (data: Repository[]) => this.repositories = data);
    /* this.githubService.mockgetUserInformation(this.username).subscribe(
      (data: User) => this.user = data);
      this.githubService.mockGetRepositoryInformation(this.username).subscribe(
        (data: Repository[]) => this.repositories = data); */
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if(this.username)
      this.getUserInformation();
  }

}
