import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'rym-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  inputSearch: string = '';

  @Output() search = new EventEmitter<string>();

  sendSearch() {
    this.search.emit(this.inputSearch);
    this.inputSearch = '';
  }

}