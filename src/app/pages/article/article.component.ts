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
    // Change filePath to load HTML files
    const filePath = `assets/articles/${title.toLowerCase()}.html`;
    this.http.get(filePath, { responseType: 'text' }).subscribe({
      next: (data) => {
        this.articleContent = data; // Directly assign HTML content
      },
      error: (err) => {
        console.error('Error loading article:', err);
        this.articleContent = 'Content not available.';
      }
    });
  }
}
