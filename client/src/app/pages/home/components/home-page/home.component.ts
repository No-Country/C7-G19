import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { users } from 'src/app/db/users';
import { OffertsService } from '../../../../core/services/offerts/offerts.service';
import { offerts } from '../../../../db/offerts';
import { IOffert } from '../../../../models/offert.interface';
import { IUser } from '../../../../models/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // term = new FormControl('', [Validators.minLength(3)]);
  term: string = '';
  debouncer: Subject<string> = new Subject();
  offerts!: IOffert[];
  users: IUser[] = users;

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  constructor(private offertsService: OffertsService) {}

  ngOnInit(): void {
    this.offerts = offerts;
    this.debouncer.subscribe((value) => this.search(value));
  }

  search(term: string) {
    this.term = term;
    this.offertsService.searchOfferts(term);
    console.log(this.offertsService.searchOfferts(term));
  }

  // keyUp() {
  //   this.debouncer.next(this.term.value!);
  // }
}
