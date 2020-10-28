import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  panelOpenState = false;
  folders = [
    {
      name: 'Public',
      desc: 'Anyone can see this publication.',
      icon: 'public',
    },
    {
      name: 'Friends',
      desc: 'only friends can see this publication.',
      icon: 'people',
    },
    {
      name: 'Specific friends',
      desc: "Don't show it to some friends.",
      icon: 'perm_identity',
    },
  ];
  advancedpublish = false;
  userlist = false;
  constructor() {}

  ngOnInit(): void {}
  friends = [
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

  clickToggle() {
    this.advancedpublish = !this.advancedpublish;
  }
  isFocussed() {
    this.advancedpublish = true;
  }

  showUserList() {
    this.userlist = !this.userlist;
  }
}
