import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../model/post.interface';

@Component({
  selector: 'app-product-related-card',
  templateUrl: './product-related-card.component.html',
  styleUrls: ['./product-related-card.component.scss']
})
export class ProductRelatedCardComponent implements OnInit {

  @Input()
  post: Partial<Post>;

  constructor() {
  }

  ngOnInit() {
  }

}
