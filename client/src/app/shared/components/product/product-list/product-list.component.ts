import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../../model/post.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  listPost: Partial<Post>[];

  @Input()
  buttonViewMoreLink: string;

  constructor() { }

  ngOnInit() {
  }

}
