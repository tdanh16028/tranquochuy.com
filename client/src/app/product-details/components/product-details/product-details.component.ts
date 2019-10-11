import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbItem} from '../../../shared/components/breadcrumb/breadcrumb.component';
import {Post} from '../../../../model/post.interface';
import {PostsService} from '../../../shared/services/posts.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  breadcrumbItems: BreadcrumbItem[] = [
    { title: 'Trang Chủ', routerLink: '/' },
    { title: '', routerLink: '' },
    { title: '', routerLink: '' }
  ];

  post: Partial<Post>;
  listPostRelated: Partial<Post>[];

  private breadcrumbCategories: BreadcrumbItem[] = [
    { title: 'Sản Phẩm Đất Nền', routerLink: '/danh-muc/san-pham-dat-nen' },
    { title: 'Sản Phẩm Nhà Ở', routerLink: '/danh-muc/san-pham-nha-o' },
    { title: 'Sản Phẩm Đã Bán', routerLink: '/danh-muc/san-pham-da-ban' },
  ];

  private subscriptions: Subscription = new Subscription();

  constructor(private activatedRoute: ActivatedRoute, private postService: PostsService) { }

  ngOnInit() {
    // this.generateDemoData();

    this.subscriptions.add(this.activatedRoute.paramMap.subscribe(paramMap => {
      const postId = paramMap.get('postId');
      this.getData(postId);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private getData(postId: string): void {
    const categoryId = postId.substring(0, postId.lastIndexOf('-'));
    this.post = this.postService.get(postId);
    this.listPostRelated = this.postService.getRelatedProducts(postId);
    this.breadcrumbItems[1] = this.breadcrumbCategories.find(md => md.routerLink.endsWith(categoryId));
    this.breadcrumbItems[2] = { title: this.post.title, routerLink: '' };
  }

  private generateDemoData(): void {
    this.post = this.getRandomItem(this.postService.listProductSold);
    this.listPostRelated = this.postService.listProductSold;
    this.breadcrumbItems[1] = this.getRandomItem(this.breadcrumbCategories);
    this.breadcrumbItems[2] = { title: this.post.title, routerLink: '' };
  }

  private getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

  private getRandomItem<T>(arr: Array<T>): T {
    return arr[this.getRandomNumber(arr.length)];
  }

}
