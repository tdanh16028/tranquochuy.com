import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../model/post.interface';

@Component({
  selector: 'app-product-related',
  templateUrl: './product-related.component.html',
  styleUrls: ['./product-related.component.scss']
})
export class ProductRelatedComponent implements OnInit {

  @Input()
  listPost: Partial<Post>[];

  constructor() { }

  ngOnInit() {
  }

}
