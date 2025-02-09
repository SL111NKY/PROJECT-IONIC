import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

interface CANNA {
  id: string;
  category: string;
  country: string;
  description:string;
  firma:string;
  genetik:string;
  kultivar:string;
  sorte:string;
  thc:number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://europe-west3-au-digital.cloudfunctions.net/dransay/api/webshop/products?sandbox=0'; // Dein Ziel-API-URL

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    // Definiere die Header für die Anfrage
    const headers = new HttpHeaders({
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'de-DE,de;q=0.9,nl-NL;q=0.8,nl;q=0.7,en-US;q=0.6,en;q=0.5',
      'priority': 'u=1, i',
      'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
      'x-api-key': '3e36683d451d9bbb1168ce65dcd17c775a701346788f3d4b76eb4e9de05463c1',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    });

    // Führe den GET-Request mit den Headern aus und gebe das Observable zurück
    return this.http.get<CANNA>(this.apiUrl, { headers });
  }
}