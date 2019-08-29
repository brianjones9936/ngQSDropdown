import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgQSDropdownService } from './ng-qsdropdown.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'lib-ngQSDropdown',
  templateUrl: 'ng-qsdropdown.component.html',
  styleUrls: ['ng-qsdropdown.component.scss']
})
export class NgQSDropdownComponent implements OnInit {

  @Input() showDropdown: boolean;
  @Input() items: any[];
  @Input() itemDisplayPropertyName: string;
  @Input() itemIdProperyName: string;
  @Output() itemSelect = new EventEmitter();

  itemFoundId: any;
  itemSearchValue: any;
  itemSize = 35;
  selectedItem: any;

  constructor(private sqService: NgQSDropdownService) { }

  ngOnInit() {
  }

  selectItem(item: any) {
    this.itemSelect.emit(item);
  }

  selectItemClick(item: any) {
    if (item) {
      this.itemSearchValue = item[this.itemDisplayPropertyName];
      this.selectItem(item);
      this.showDropdown = false;
    }
  }

  dropDownClick() {
    const el = document.getElementById('itemSearchInput') as HTMLInputElement;
    el.focus();
    el.select();
    this.showDropdown = true;

  }

  selectOnEnterFoundItem() {
    if (this.itemFoundId >= 0) {
      const item = this.items.find(c => c[this.itemIdProperyName] === this.itemFoundId);
      if (item) {
        this.itemSearchValue = item[this.itemDisplayPropertyName];
        this.selectItem(item);
        this.showDropdown = false;
      }
    }
  }

  scrollToNearestItem() {

    // if (!this.showDropdown) {
    //   this.showDropdown = true;
    // }

    const el = document.getElementById('dropDownScroll');
    if (el) {
      if (this.itemSearchValue) {
        setTimeout(() => {
          // tslint:disable-next-line: max-line-length
          const idxMatchName = this.items.findIndex(item => item[this.itemIdProperyName].toString().toLowerCase() === this.itemSearchValue.toLowerCase());
          // tslint:disable-next-line: max-line-length
          const idxMatchId = this.items.findIndex(item => item[this.itemDisplayPropertyName].toString().toLowerCase() === this.itemSearchValue.toLowerCase());
          // tslint:disable-next-line: max-line-length
          const idxNearName = this.items.findIndex(item => item[this.itemIdProperyName].toString().toLowerCase().includes(this.itemSearchValue.toLowerCase()));
          // tslint:disable-next-line: max-line-length
          const idxNearId = this.items.findIndex(item => item[this.itemDisplayPropertyName].toString().toLowerCase().includes(this.itemSearchValue.toLowerCase()));

          if (idxMatchName >= 0) {
            this.itemFoundId = this.items[idxMatchName][this.itemIdProperyName];
            el.scrollTop = idxMatchName * this.itemSize;
          } else if (idxMatchId >= 0) {
            this.itemFoundId = this.items[idxMatchId][this.itemIdProperyName];
            el.scrollTop = idxMatchId * this.itemSize;
          } else if (idxNearName >= 0) {
            this.itemFoundId = this.items[idxNearName][this.itemIdProperyName];
            el.scrollTop = idxNearName * this.itemSize;
          } else if (idxNearId >= 0) {
            this.itemFoundId = this.items[idxNearId][this.itemIdProperyName];
            el.scrollTop = idxNearId * this.itemSize;
          }
        }, 1);

      } else {
        this.itemFoundId = -1;
        el.scrollTop = 0;
      }
    }


  }
}
