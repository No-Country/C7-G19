import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-msg',
  templateUrl: './dash-msg.component.html',
  styleUrls: ['./dash-msg.component.scss'],
})
export class DashMsgComponent implements OnInit {
  msgs: any = [
    {
      _id: 1,
      name: 'John Doe',
      email: 'asd@asd.com',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onEdit(x: number) {
    console.log(this.msgs[1]._id);
  }

  onDelete(x: number) {
    console.log(this.msgs[1]._id);
  }
}
