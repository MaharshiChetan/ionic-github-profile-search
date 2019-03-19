import { Http, Response } from '@angular/http';
import { REPOSITORY_LIST } from './../../mocks/repository.mocks';
import { Repository } from './../../models/repository.interface';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { User } from '../../models/user.interface';
import { USER_LIST } from './../../mocks/user.mocks';

@Injectable()
export class GithubServiceProvider {
  
  private baseUrl: string = "https://api.github.com/users";
  private reposUrl: string = 'repos';
  
  constructor(private http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }
  getRespositoryInformation(username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.handleError)
  }

  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.handleError)
  }

  private handleError(error: Response | any){
    return Observable.throw(error.json().error || "Server Error.");
  }

  private logData(response: Response){
    console.log(response);
  }

  private extractData(response: Response){
    return response.json();
  }

  mockGetRepositoryInformation(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name == username))
  }

  mockgetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name == username)[0]);
  }
}
