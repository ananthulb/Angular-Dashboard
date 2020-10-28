import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss'],
})
export class BirthdayComponent implements OnInit {
  loading = true;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
  options = [
    {
      name: 'Remind me',
      desc: 'Remind me of this later.',
      image: '/assets/avatars/james.jpg',
      icon: 'access_time',
      type: 1,
    },
    {
      name: 'Send message',
      desc: 'send an automated congrats message.',
      image: '/assets/avatars/alice.jpg',
      icon: 'chat_bubble_outline',
      type: 1,
    },
  ];
}
