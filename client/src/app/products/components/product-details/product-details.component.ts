import { Component, OnInit } from '@angular/core';
import {BreadcrumbItem} from '../../../shared/components/breadcrumb/breadcrumb.component';
import {Post} from '../../../../model/post.interface';
import {PostsService} from '../../../shared/services/posts.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  breadcrumbItems: BreadcrumbItem[] = [
    { title: 'Trang Chủ', routerLink: '/' },
    { title: '', routerLink: '' },
    { title: '', routerLink: '' }
  ];

  post: Partial<Post>;

  private metadata: BreadcrumbItem[] = [
    { title: 'Sản Phẩm Đất Nền', routerLink: '/san-pham/dat-nen' },
    { title: 'Sản Phẩm Nhà Ở', routerLink: '/san-pham/nha-o' },
    { title: 'Sản Phẩm Đã Bán', routerLink: '/san-pham/da-ban' },
  ];

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.generateDemoData();
  }

  private generateDemoData(): void {
    this.post = this.getRandomItem(this.postService.listProductSold);
    this.breadcrumbItems[1] = this.getRandomItem(this.metadata);
    this.breadcrumbItems[2] = { title: this.post.title, routerLink: '' };
  }

  private getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

  private getRandomItem<T>(arr: Array<T>): T {
    return arr[this.getRandomNumber(arr.length)];
  }

}
