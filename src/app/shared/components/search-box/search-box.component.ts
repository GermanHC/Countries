import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input()
  public placeholder = '';

  @Output()
  public onValue = new EventEmitter<string>();

  public emitValue(value: string): void {
    if (!value || value.trim().length === 0) return;

    this.onValue.emit(value);
  }
}
