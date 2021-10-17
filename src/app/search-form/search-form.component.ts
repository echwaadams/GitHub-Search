import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  username!: string;
  userService!: ProfileService;

  constructor(private router:Router, private GitUserService:ProfileService) {
    this.userService=GitUserService
   }

  ngOnInit(): void {
  }
  getUsername(){
    console.log("====",this.username);
    this.userService.getProfileInfo();
    this.userService.getProfileRepos();

    this.router.navigate(['display']);
  }

}
