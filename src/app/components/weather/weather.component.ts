import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  loading = true;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
  weather = [
    {
      day: 'MON',
      desc: '70',
      icon: 'wb_sunny',
    },
    {
      day: 'TUE',
      desc: '59',
      icon: 'wb_cloudy',
    },
    {
      day: 'WED',
      desc: '32',
      icon: 'ac_unit',
    },
    {
      day: 'THU',
      desc: '86',
      icon: 'wb_sunny',
    },
    {
      day: 'FRI',
      desc: '30',
      icon: 'invert_colors',
    },
    {
      day: 'SAT',
      desc: '69',
      icon: 'wb_sunny',
    },
    {
      day: 'SUN',
      desc: '33',
      icon: 'ac_unit',
    },
  ];

  options = [
    {
      name: 'Change city',
      desc: 'Change the displayed city.',
      image: '/assets/avatars/james.jpg',
      icon: 'location_on',
      type: 1,
    },
    {
      name: 'Synchronise',
      desc: 'Synchronise with a weather source.',
      image: '/assets/avatars/alice.jpg',
      icon: 'refresh',
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
