import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor() {}

  @HostListener('window:scroll', ['$event']) onShowDialog(): void {
    // if (this.isEditable) {
    //   this.showDialog.emit();
    //   this.orderingFacade.openOrderEditDialog({ title: this.title });
    // }
  }
}
