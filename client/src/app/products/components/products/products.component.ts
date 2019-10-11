import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../../../model/post.interface';
import {PostsService} from '../../../shared/services/posts.service';
import {BreadcrumbItem} from '../../../shared/components/breadcrumb/breadcrumb.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  breadcrumbItems: BreadcrumbItem[] = [
    { title: 'Trang Chủ', routerLink: '/' },
    { title: '', routerLink: '' }
  ];

  title: string;
  listProduct: Partial<Post>[];

  private metadata: { slug: string, title: string, listProduct: Partial<Post>[] }[] = [];

  private subscriptions: Subscription = new Subscription();

  constructor(private activatedRoute: ActivatedRoute, private postService: PostsService) { }

  ngOnInit() {
    this.metadata = [
      {
        slug: 'san-pham-dat-nen',
        title: 'Sản Phẩm Đất Nền',
        listProduct: this.postService.listProductLand
      },
      {
        slug: 'san-pham-nha-o',
        title: 'Sản Phẩm Nhà Ở',
        listProduct: this.postService.listProductHouse
      },
      {
        slug: 'san-pham-da-ban',
        title: 'Sản Phẩm Đã Bán',
        listProduct: this.postService.listProductSold
      },
    ];

    this.subscriptions.add(this.activatedRoute.paramMap.subscribe(paramMap => {
      const categorySlug = paramMap.get('categorySlug');
      const data = this.metadata.find(md => md.slug === categorySlug);
      this.title = data.title;
      this.listProduct = data.listProduct;
      this.breadcrumbItems[1] = { title: data.title, routerLink: ''};
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
