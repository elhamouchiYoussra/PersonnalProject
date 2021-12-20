import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../core/auth/account.service";
import {Router} from "@angular/router";
import {takeUntil} from "rxjs/operators";
import {Account} from "../../core/auth/account.model";
import {Subject} from "rxjs";

@Component({
  selector: 'jhi-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  account: Account | null = null;

  private readonly destroy$ = new Subject<void>();
  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.accountService
      .getAuthenticationState()
      .pipe(takeUntil(this.destroy$))
      .subscribe(account => (this.account = account));
  }

}
