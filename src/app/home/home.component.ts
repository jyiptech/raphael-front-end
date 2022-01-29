import { Component, OnInit } from '@angular/core';
import {  Route, Router, Routes } from '@angular/router';
import { appRoutes } from 'src/app/shared/components/rf-table-n-form/rf-table-n-form-routing.module';
import { PageInfo, PageInfoType } from 'src/app/shared/constants/page-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageInfo: { [key: string]: PageInfoType } = PageInfo;
  menuList: Routes;
  constructor(private router: Router) {

    this.menuList = appRoutes;
   }

  ngOnInit(): void {
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
}
