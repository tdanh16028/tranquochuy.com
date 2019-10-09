import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input()
  totalPage: number;

  @Input()
  currentPage = 1;

  @Output()
  pageChange = new EventEmitter<{oldPage: number, currentPage: number}>();

  maxPageDisplay = 7; // Must always be odd number. Also include first & last page

  constructor() { }

  ngOnInit() {
  }

  get isShowDotBefore(): boolean {
    if (this.currentPage === 1) {
      // If this is first page, no need to display dots
      // [1], 2, 3, 4, 5, 6, ..., 20
      return false;
    }
    if (this.totalPage < this.maxPageDisplay) {
      return false;
    }

    // View example to understand this case
    // [1], 2, 3, 4, 5, 6, ..., 20
    // 1, [2], 3, 4, 5, 6, ..., 20
    // 1, 2, 3, 4, 5, 6, ..., 20
    // 1, 2, [3], 4, 5, 6, ..., 20
    // 1, 2, 3, 4, 5, 6, ..., 20
    // 1, 2, 3, [4], 5, 6, ..., 20
    // 1, ..., 3, 4, [5], 6, 7, ..., 20
    // 1, ..., 4, 5, [6], 7, 8, ..., 20
    const halfOfMiddlePage = (this.maxPageDisplay - 3) / 2; // Not included first, last, and middle page
    return this.currentPage > 1 + halfOfMiddlePage;
  }

  get isShowDotAfter(): boolean {
    if (this.currentPage === this.totalPage) {
      // If this is last page, no need to display dots
      // 1, ..., 15, 16, 17, 18, 19, [20]
      return false;
    }
    if (this.totalPage < this.maxPageDisplay) {
      return false;
    }

    // View example to understand this case
    // 1, ..., 15, 16, 17, 18, 19, [20]
    // 1, ..., 15, 16, 17, 18, [19], 20
    // 1, ..., 15, 16, 17, [18], 19, 20
    // 1, ..., 15, 16, [17], 18, 19, 20
    // 1, ..., 14, 15, [16], 17, 18, ..., 20
    // 1, ..., 13, 14, [15], 16, 17, ..., 20
    const halfOfMiddlePage = (this.maxPageDisplay - 3) / 2; // Not included first, last, and middle page
    return this.currentPage < this.totalPage - halfOfMiddlePage;
  }

  get listMiddlePage(): number[] {
    if (this.totalPage <= 2) {
      // If total page is 2, just show first & last page
      return [];
    }
    if (this.totalPage <= this.maxPageDisplay) {
      // Start from page 2 (1 is the first page, that is not included in middle)
      return (new Array(this.totalPage - 2)).fill(0).map((v, i) => i + 2);
    }
    const countOfMiddlePage = this.maxPageDisplay - 2; // First & Last page are not in the middle
    const halfOfMiddlePage = (this.maxPageDisplay - 3) / 2; // Not included first, last, and middle page
    const minPageOfMiddle = this.currentPage - halfOfMiddlePage <= 2 ? 2 : this.currentPage - halfOfMiddlePage;
    return (new Array(countOfMiddlePage)).fill(0).map((v, i) => i + minPageOfMiddle);
  }

  onPageClick(page: number): void {
    if (page === this.currentPage || page < 1 || page > this.totalPage) {
      return;
    }
    this.pageChange.emit({oldPage: this.currentPage, currentPage: page});
    this.currentPage = page;
  }

}
