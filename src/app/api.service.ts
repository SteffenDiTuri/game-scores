import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.kanka.io/1.0/campaigns/272128';  // Kanka API base URL
  private campaignDetailsSubject = new BehaviorSubject<any>(null);
  campaignDetails$: Observable<any> = this.campaignDetailsSubject.asObservable();

  private showNavBarSubject = new BehaviorSubject<boolean>(false);
  showNavBar$: Observable<boolean> = this.showNavBarSubject.asObservable();


  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODgxZWIxMmVlMjQ5ZjdmMWMzMWRlNDI2M2IyODIyYzBhOTdmMjk4OTBjZjE3NDAzOGQzNmZiOWNjMDg2ZTk1YjI0Nzk1ZWRmYmQyZjk4M2UiLCJpYXQiOjE3MDcyMzQ2NjkuOTg3ODA0LCJuYmYiOjE3MDcyMzQ2NjkuOTg3ODA4LCJleHAiOjE3Mzg4NTcwNjkuOTc5NDIyLCJzdWIiOiIxNTk4MTYiLCJzY29wZXMiOltdfQ.R_F9ArBC0cvs3yqdK4UWU2zPgIvQwfLenNCYfN1R9Ge9yijv-xDjjMtXRGlbKPNE3mlC0vdTH4ppL6VFx02MZq-kkxEWYpmWWox8pljT4G7gMbISOPWFuqfEIu643YSxWeB0r0-kKc_lzkqNxiYFiokoO0pwuq9NaQ4GlCn0BWO8NPI7tjufY0pAIJjSoj2BfSCrr0SzgXI7MhplcBYSfA2C40cEhTh080iW4zTrGeex3LtN7QivAG2mECdQ7x0FvbDVfD3DDXNMBM1y-19cJ6eJ41tmvySxklhR4NZ_4zYC3O1yvttxoF1TX-5YTr5G7Np4m_F1TTprth10fQLIm4b773yjoxmftjF8nvXK84wdSZUDdjDMeVVi9ST6NCLqEQu7rt-84cuiwoSZZdfhM_ztdo7Lbodry2zzsEE9s8Rz9i_8b3AMPF22C3hWIgEo9NfY-stPbf7RGxYqr6L3PNZpU7-otqV1QvGcxnzAvUFclitDqRFSMqb4daHzkEeN-MSPESxL6SHvCIGRfAo5wShmwcGmHnxOnuCWyX-3ni4e93llHQkjspVhJlU4yzjuqLsrpIJtbSJ5KrojBT-ZoqLeZYak9bT_BRnHuKR10JN27CNlbdpVHYyIVLja1jqCKfVa3vE6VsK-4l7YeobyQpG4JuKWKqTmPn4PiZ05hs0',
  });

  constructor(private http: HttpClient) {}

  getTeams(): Observable<any> {
    const url = this.apiUrl + `/locations`;
    return this.http.get<any>(url, { headers: this.headers });
  }

  getGames(): Observable<any> {
    const url = this.apiUrl + '/quests'; // Correct URL
    return this.http.get<any>(url, { headers: this.headers });
  }
  
  getPlayers(): Observable<any> {
    const url = this.apiUrl + '/characters'; // Correct URL
    return this.http.get<any>(url, { headers: this.headers });
  }
}