import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Contact } from './contact';

@Injectable()
export class AuthService {

  // =========== Declared Variables: ===================================
  authToken: any; // token holder
  user: any;      // user object holder
  loggedIn:any;   // logged in True/False 

  // =========== Http base uri and headers =============================
  private baseUri:string="http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private http: HttpClient) { }


  // =========== Helper functions =====================================
  // Load the saved token from local storage into authToken val,
  // when a user logged in and came back to the website
  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  // Store the generated token and user object into the local storage
  storeUserToken(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  // Set the logged in to true
  setLoggedIn(){
    this.loggedIn = true;
  }

  // Check if the user has logged in before and has a save token
  isLoggedIn(){
    this.loadToken();
    (this.authToken) ? this.setLoggedIn() : this.loggedIn = false;
    return this.loggedIn;
  }

  logout(){
    this.loggedIn = false;
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
  // =========== HTTP request functions ===============================
  // POST: register
  registerUser(user){
    return this.http.post(this.baseUri+'/register', user, {headers:this.headers});
  }

  // POST: login
  loginUser(user){
    return this.http.post(this.baseUri+'/login', user, {headers:this.headers});
  }

  

}
