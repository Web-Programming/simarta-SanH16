import { Inject, Injectable } from '@angular/core';
import { Authresponse } from './authresponse';
import { SimartaDataService } from './simarta-data.service';
import { BROWSER_STORAGE } from './storage';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    constructor(@Inject(BROWSER_STORAGE) private storage: Storage,
    private simartaDataServices: SimartaDataService) { }

    //fungsi ini untuk mengambil token dari api ke local storage
    public getToken(): string | any {
      return this.storage.getItem('simarta-token');
    }

    //fungsi ini untuk menyimpan token dari api ke local storage
    public saveToken(token: string): void {
      this.storage.setItem('simarta-token', token);
    }

    //ini untuk kebutuhan login
    public login(user: User): Promise<any> {
      return this.simartaDataServices.login(user).then((authResp: Authresponse)=>this.saveToken(authResp.token));
    }

    //ini untuk kebutuhan register
    public register(user: User): Promise<any> {
      return this.simartaDataServices.register(user).then((authResp: Authresponse)=>this.saveToken(authResp.token));
    }

    //ini untuk kebutuhan logout
    public logout(): void {
      this.storage.removeItem('simarta-token');
    }

    //cek status login
    public isLoggedIn(): boolean {
      const token: string = this.getToken();
        if (token) {
          const payload = JSON.parse(atob(token.split('.')[1]));
          return payload.exp > (Date.now() / 1000);
        } else {
          return false;
      }
    }

    public getCurrentUser(): User | null {
      if (this.isLoggedIn()) {
        const token: string = this.getToken();
        const { email, name } = JSON.parse(atob(token.split('.')[1]));
        return { email, name } as User;
      }

      return null;
     }
}
