import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private Baseurl = environment.BASE_URL;

  private username:string;
  private client_id = '87292ad08075f5f4f8af';
  private client_secret = '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';

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
  }

  updateProfile(username:string){
    this.username = username;
  }

  constructor(private http:HttpClient) {
    this.username = "echwaadams";
   }
}
