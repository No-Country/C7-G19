import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';
import { IOffert } from '../../models/offert.interface';
import { OffertsService } from '../../core/services/offerts/offerts.service';
import { switchMap, tap } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-offerts',
  templateUrl: './offerts.component.html',
  styleUrls: ['./offerts.component.scss'],
})
export class OffertsComponent implements OnInit, DoCheck {
  items: IOffert[] = [];
  offert!: IOffert;
  form!: FormGroup;
  token!: boolean;
  elementRef!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private offertsService: OffertsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.offert = this.offertsService.getOffertById(id);
      console.log(this.offert);
    });

    this.items = this.offertsService.getOfferts();
  }

  ngDoCheck() {
    this.token = localStorage.getItem('token') ? true : false;
  }

  sendComment() {
    console.log(this.form.value);
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      comment: [''],
    });
  }

  volver() {
    this.router.navigate(['home']);
  }

  gotocard(id: string) {
    this.router.navigate(['offerts', id]).then(() => {
      window.location.reload();
    });
  }
}
