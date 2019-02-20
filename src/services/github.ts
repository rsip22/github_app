import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class GithubService {
    constructor(private http: Http) {
        console.log('DataService GithubService constructor');
    }

    getRepos(username) {
        let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
        return repos;
    }
}