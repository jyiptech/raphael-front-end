import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { PageInfo, PageInfoType } from '../../constants/page-info';
import { appRoutes } from '../rf-table-n-form/rf-table-n-form-routing.module';
@Component({
  selector: 'app-rf-sidenav',
  templateUrl: './rf-sidenav.component.html',
  styleUrls: ['./rf-sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RfSidenavComponent implements OnInit {
  pageInfo: { [key: string]: PageInfoType } = PageInfo;
  menuList: Routes;
  constructor(private router: Router, private authService: AuthService) {
    this.menuList = appRoutes;
  }

  ngOnInit(): void {
    // this.menuList = Object.keys(this.pageInfo);
  }

  isOpen: boolean = false;

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  navToPage(menu: Route) {
    if (!menu || !menu.path) return;
    this.router.navigate(['/main', menu.path]);
  }

  getCapsMenuName(menu: any) {
    if (!menu || !menu.path) return;
    return menu.path.charAt(0).toUpperCase() + menu.path.slice(1);
  }

  getClassName(menu: any) {
    if (this.pageInfo?.[menu?.path]?.logo) return this.pageInfo[menu.path].logo;
    return '';
  }
  signOut() {
    let _orgId = localStorage.getItem('orgId');
   _orgId = (_orgId)? _orgId : '';
    this.authService.signOut().subscribe((_) => {
    this.authService.user = null;
     this.router.navigate(['auth', { orgId: _orgId }]);
    },
    (err)=>{

    });
  }

  deleteAccount() {
    this.authService
      .deleteAccount()
      ?.subscribe((_) => (this.authService.user = null));
  }
}
