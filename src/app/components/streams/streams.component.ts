import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss'],
})
export class StreamsComponent implements OnInit {
  loading = true;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  streams = [
    {
      user: {
        name: 'Millie Augustine',
        image: '/assets/avatars/alice.jpg',
      },
      post: {
        is_liked: true,
        is_shared: true,
        title:
          "Yesterday with @Karen Miller and @Marvin Stemperd at the #Rock'n'Rolla concert in LA. Was totally fantastic! People were really excited about this one!",
        date: new Date(),
        is_image: true,
        images: [
          {
            image_url: 'https://source.unsplash.com/random',
          },
        ],
        like_count: 5,
        comment_count: 5,
        share_count: 5,
      },
      likes: [
        {
          name: 'Millie',
          image: '/assets/avatars/james.jpg',
        },
        {
          name: 'Bobby',
          image: '/assets/avatars/jane.jpg',
        },
        {
          name: 'Millie',
          image: '/assets/avatars/alice.jpg',
        },
      ],
    },
    {
      user: {
        name: 'Millie Augustine',
        image: '/assets/avatars/alice.jpg',
      },
      post: {
        is_liked: true,
        is_shared: true,
        title:
          "Yesterday with @Karen Miller and @Marvin Stemperd at the #Rock'n'Rolla concert in LA. Was totally fantastic! People were really excited about this one!",
        date: new Date(),
        is_image: true,
        images: [
          {
            image_url: 'https://source.unsplash.com/random',
          },
          {
            image_url: 'https://source.unsplash.com/random',
          },
        ],
        like_count: 5,
        comment_count: 5,
        share_count: 5,
      },
      likes: [
        {
          name: 'Millie',
          image: '/assets/avatars/james.jpg',
        },
        {
          name: 'Bobby',
          image: '/assets/avatars/jane.jpg',
        },
        {
          name: 'Millie',
          image: '/assets/avatars/alice.jpg',
        },
      ],
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
  ];
}
