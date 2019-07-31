import { Injectable } from '@angular/core';
import { Account } from '../../models';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
    private currentAccount: Account = new Account();
  
    constructor() { }
  
    public isAuthenticated(): boolean {
      if (this.currentAccount.id) {
        return true;
      } else {
        return false;
      }
    }
  
    public getCurrentId(): number {
      return this.currentAccount.id;
    }
  
    public getCurrentName(): string {
      return this.currentAccount.name;
    }
  
    public login(account: Account): ReplaySubject<Account> {
      // Simulate Jax-rs Api request
      if (account.email === 'admin' && account.password === 'admin') {
        account.id = 1;
        account.name = 'Ze Carlos';
        this.currentAccount = account;
      }
      const response: ReplaySubject<any> = new ReplaySubject(1);
      if (account.id) {
        response.next(account);
      } else {
        response.error({ msg: 'Deu erro' });
      }
      return response;
    }
  
    public logout() {
      this.currentAccount = null;
    }
}
