import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare const google: any; // Damit TypeScript nicht meckert


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor() {}

  initializeGoogleSignIn(clientId: string) {
    google.accounts.id.initialize({
      client_id: clientId,
      callback: (response: any) => this.handleCredentialResponse(response),
      auto_select: true,
      cancel_on_tap_outside: false
    });

    google.accounts.id.prompt();
  }

  handleCredentialResponse(response: any) {
    const credential = response.credential;
    if (credential) {
      const user = this.decodeJwt(credential);
      this.userSubject.next(user);
      console.log('User Logged In:', user);
    }
  }

  decodeJwt(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
  }

  logout() {
    google.accounts.id.disableAutoSelect();
    this.userSubject.next(null);
  }
}