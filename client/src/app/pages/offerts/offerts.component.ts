import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Routes } from '@angular/router';

@Component({
  selector: 'app-offerts',
  templateUrl: './offerts.component.html',
  styleUrls: ['./offerts.component.scss'],
})
export class OffertsComponent implements OnInit {
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
    });
  }

  constructor(private route: ActivatedRoute) {}
}
