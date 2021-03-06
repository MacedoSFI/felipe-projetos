import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	constructor(private http: HttpClient, private router: Router) { }


login(usuario: { email: string; password: string; }) {
	return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {
		var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
		localStorage.setItem("token", token);
		console.info("token: " + localStorage.getItem("token"));
		this.router.navigate(['home']);
	},
		error => {
			console.error("erro ao fazer login");
		}
	);
}
}
