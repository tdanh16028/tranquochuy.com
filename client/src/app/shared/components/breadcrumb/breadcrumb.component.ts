import {Component, Input, OnInit} from '@angular/core';

export interface BreadcrumbItem {
  readonly title: string;
  readonly routerLink: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input()
  breadcrumbItems: BreadcrumbItem[];

  constructor() { }

  ngOnInit() {
  }

}
