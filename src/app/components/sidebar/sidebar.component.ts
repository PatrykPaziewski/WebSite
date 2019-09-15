import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/home/grammar",
    title: "Grammar",
    icon: "icon-align-center"
  },
  {
    path: "/home/vocabulary",
    title: "Vocabulary",
    icon: "icon-caps-small"
  },
  {
    path: "/home/learning",
    title: "Learn words",
    icon: "icon-map-big"
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html"
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
