import { Component, OnInit } from '@angular/core';

interface Article {
  title: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss']
})
export class ArticlesPageComponent implements OnInit {
  articles: Article[] = [
    {
      title: 'Stoicism',
      description: '',
      image: '../../../assets/stoic.jpeg',
      link: '/article/stoicism'
    },
    {
      title: 'Variables',
      description: 'Understanding variable declarations.',
      image: '../../../assets/var.jpg',
      link: '/article/variables'
    },
    {
      title: 'Minimalism',
      description: 'Coming soon',
      image: '../../../assets/minimalism.jpeg',
      link: '/article/minimalism'
    }


  ];

  constructor() { }

  ngOnInit(): void { }
}
