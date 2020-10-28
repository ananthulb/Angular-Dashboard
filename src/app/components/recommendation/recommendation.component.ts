import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss'],
})
export class RecommendationComponent implements OnInit {
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
      desc: 'someone is a common friend.',
      image: '/assets/avatars/james.jpg',
      icon: '/assets/avatars/james.jpg',
      type: 1,
    },
    {
      name: 'Dan walker',
      desc: 'someone is a common friend.',
      image: '/assets/avatars/alice.jpg',
      icon: '/assets/avatars/alice.jpg',
      type: 1,
    },
    {
      name: 'Millie Augustine',
      desc: 'someone is a common friend.',
      image: '/assets/avatars/jane.jpg',
      icon: '/assets/avatars/jane.jpg',
      type: 2,
    },
    {
      name: 'Bobby brown',
      desc: 'someone is a common friend.',
      image: '/assets/avatars/james.jpg',
      icon: '/assets/avatars/james.jpg',
      type: 2,
    },
    {
      name: 'Dan walker',
      desc: 'someone is a common friend.',
      image: '/assets/avatars/alice.jpg',
      icon: '/assets/avatars/alice.jpg',
      type: 1,
    },
  ];

  options = [
    {
      name: 'All Recommandations',
      desc: 'View all recommandations.',
      image: '/assets/avatars/james.jpg',
      icon: 'insert_drive_file',
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
