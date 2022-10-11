import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { OffertsService } from '../../../../core/services/offerts/offerts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  term = new FormControl('', [Validators.minLength(3)]);
  debouncer: Subject<string> = new Subject();

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  constructor(private offertsService: OffertsService) {}

  ngOnInit(): void {}

  searchStickers(): void {
    this.offertsService.searchOfferts(this.term.value!);
  }

  keyUp() {
    this.debouncer.next(this.term.value!);
  }
}
