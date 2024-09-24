// article.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articleTitle: string = '';
  articleContent: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.articleTitle = this.route.snapshot.paramMap.get('title') || '';
    this.loadArticleContent(this.articleTitle);
  }

  loadArticleContent(title: string) {
    const filePath = `assets/articles/${title.toLowerCase()}.json`;
    this.http.get<{ title: string; content: string }>(filePath).subscribe({
      next: (data) => {
        this.articleTitle = data.title;
        this.articleContent = data.content;
      },
      error: (err) => {
        console.error('Error loading article:', err);
        this.articleContent = 'Content not available.';
      }
    });
  }
}
