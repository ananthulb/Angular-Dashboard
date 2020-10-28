import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss'],
})
export class SuggestionsComponent implements OnInit {
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
      name: 'All Suggestions',
      desc: 'View all friend suggestions',
      image: '/assets/avatars/james.jpg',
      icon: 'people_outline',
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
