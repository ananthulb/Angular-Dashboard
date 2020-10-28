import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  value = 'Clear me';
  request = [
    {
      name: 'Bobby brown',
      desc: 'someone is a common friend.',
      icon: '/assets/avatars/james.jpg',
      type: 1,
    },
    {
      name: 'Dan walker',
      desc: 'someone is a common friend.',
      icon: '/assets/avatars/alice.jpg',
      type: 1,
    },
    {
      name: 'Millie Augustine',
      desc: 'someone is a common friend.',
      icon: '/assets/avatars/jane.jpg',
      type: 2,
    },
    {
      name: 'Bobby brown',
      desc: 'someone is a common friend.',
      icon: '/assets/avatars/james.jpg',
      type: 2,
    },
    {
      name: 'Dan walker',
      desc: 'someone is a common friend.',
      icon: '/assets/avatars/alice.jpg',
      type: 1,
    },
    {
      name: 'Millie Augustine',
      desc: 'someone is a common friend.',
      icon: '/assets/avatars/jane.jpg',
      type: 2,
    },
  ];

  notification = [
    {
      name: 'Bobby brown',
      desc: 'someone is a common friend.',
      image: '/assets/avatars/james.jpg',
      icon: 'message',
      type: 1,
    },
    {
      name: 'Dan walker',
      desc: 'someone is a common friend.',
      image: '/assets/avatars/alice.jpg',
      icon: 'ondemand_video',
      type: 1,
    },
    {
      name: 'Millie Augustine',
      desc: 'someone is a common friend.',
      image: '/assets/avatars/jane.jpg',
      icon: 'message',
      type: 2,
    },
    {
      name: 'Bobby brown',
      desc: 'someone is a common friend.',
      image: '/assets/avatars/james.jpg',
      icon: 'ondemand_video',
      type: 2,
    },
    {
      name: 'Dan walker',
      desc: 'someone is a common friend.',
      image: '/assets/avatars/alice.jpg',
      icon: 'ondemand_video',
      type: 1,
    },
    {
      name: 'Millie Augustine',
      desc: 'someone is a common friend.',
      image: '/assets/avatars/jane.jpg',
      icon: 'message',
      type: 2,
    },
  ];

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
    {
      name: 'Millie Augustine',
      desc: 'someone is a common friend.',
      image: '/assets/avatars/jane.jpg',
      icon: '/assets/avatars/jane.jpg',
      type: 2,
    },
  ];
}
