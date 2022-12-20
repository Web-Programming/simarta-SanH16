import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Surat } from './surat/surat.component';
import { Berkas } from './berkas/berkas.component';
import { Authresponse } from './authresponse';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SimartaDataService {

  constructor(private http: HttpClient) { }
  private apiBaseUrl = 'http://localhost:3000/api';

  //method untuk mengambil data surat dari api surat
  public getListSurat(): Promise<Surat[]> {
    const url: string = `${this.apiBaseUrl}/surat`; //apiurl/surat
    return this.http.get(url).toPromise().then(response => response as Surat[]).catch(this.handleError);
  }

  //method... 
  public getSuratById(suratId:any): Promise<Surat>{
    const url: string = `${this.apiBaseUrl}/surat/${suratId}`; //.../surat/
    return this.http.get(url).toPromise().then(response => response as Surat[]).catch(this.handleError);
  }

  //tampilkan data berkas yang diambil dari api/berkas
  public getListBerkas(): Promise<Berkas[]> {
    const url: string = `${this.apiBaseUrl}/berkas`; //apiurl/berkas
    return this.http.get(url).toPromise().then(response => response as Berkas[]).catch(this.handleError);
  }

  //method... 
  public getBerkasById(berkasId:string): Promise<Surat>{
    const url: string = `${this.apiBaseUrl}/berkas/${berkasId}`; //.../berkas/
    return this.http.get(url).toPromise().then(response => response as Berkas[]).catch(this.handleError);
  }

  public login(user: User): Promise<Authresponse> {
    return this.makeAuthApiCall('login', user);
  }
  
  public register(user: User): Promise<Authresponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User):Promise<Authresponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
    .post(url, user)
    .toPromise()
    .then(response => response as Authresponse)
    .catch(this.handleError);
 }

  private handleError(error:any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
    
  }
}
