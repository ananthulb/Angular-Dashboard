import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  loading = true;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  messages = [
    {
      name: 'Bobby brown',
      date: new Date(),
      image: '/assets/avatars/james.jpg',
      icon: '/assets/avatars/james.jpg',
      type: 1,
    },
    {
      name: 'Dan walker',
      date: new Date(),
      image: '/assets/avatars/alice.jpg',
      icon: '/assets/avatars/alice.jpg',
      type: 1,
    },
    {
      name: 'Millie Augustine',
      date: new Date(),
      image: '/assets/avatars/jane.jpg',
      icon: '/assets/avatars/jane.jpg',
      type: 2,
    },
    {
      name: 'Bobby brown',
      date: new Date(),
      image: '/assets/avatars/james.jpg',
      icon: '/assets/avatars/james.jpg',
      type: 2,
    },
    {
      name: 'Dan walker',
      date: new Date(),
      image: '/assets/avatars/alice.jpg',
      icon: '/assets/avatars/alice.jpg',
      type: 1,
    },
  ];

  options = [
    {
      name: 'Browse stories',
      desc: 'See all recent stories.',
      image: '/assets/avatars/james.jpg',
      icon: 'tv',
      type: 1,
    },
    {
      name: 'Setting',
      desc: 'Access widget settings',
      image: '/assets/avatars/jane.jpg',
      icon: 'settings',
      type: 2,
    },
  ];
}
