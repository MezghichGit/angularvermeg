import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getAllUsers()
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users/");
  }

  getUserDetails(id:any)
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id);
  }
}
