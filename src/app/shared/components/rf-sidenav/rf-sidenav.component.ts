import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { PageInfo, PageInfoType } from '../../constants/page-info';

@Component({
  selector: 'app-rf-sidenav',
  templateUrl: './rf-sidenav.component.html',
  styleUrls: ['./rf-sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RfSidenavComponent implements OnInit {
  pageInfo: { [key: string]: PageInfoType } = PageInfo;
  menuList: Array<string> = [''];

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.menuList = Object.keys(this.pageInfo);
  }

  isOpen: boolean = false;

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  navToPage(pageName: string) {
    this.router.navigate(['/main', pageName]);
  }

  getCapsMenuName(menu: string) {
    return menu.charAt(0).toUpperCase() + menu.slice(1);
  }

  signOut() {
    this.authService.signOut();
  }

  deleteAccount() {
    this.authService.deleteAccount()?.subscribe((resp) => console.log(resp));
  }
}
