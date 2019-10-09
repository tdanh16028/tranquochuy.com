import {Component, OnInit} from '@angular/core';
import {EstateProperties, Post} from '../../../../model/post.interface';
import {Direction} from '../../../../model/post.enums';
import {PostsService} from '../../../shared/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listProductLand: Partial<Post>[] = [];
  listProductHouse: Partial<Post>[] = [];
  listProductSold: Partial<Post>[] = [];

  constructor(private postService: PostsService) {
  }

  ngOnInit() {
    this.generateDemoData();
  }

  private generateDemoData(): void {
    this.listProductLand = this.postService.listProductLand;
    this.listProductHouse = this.postService.listProductHouse;
    this.listProductSold = this.postService.listProductSold;
  }

}
