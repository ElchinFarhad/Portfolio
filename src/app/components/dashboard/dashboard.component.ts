import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isAdmin: boolean = false;
  dashboardText: string = '';
  textInput: string = '';

  constructor() { }

  ngOnInit(): void {
    // Check if user is an admin (for demo purposes)
    // In real application, you'd use a proper authentication mechanism
    // and roles/permissions system
    this.isAdmin = false; // Set to true for demo
  }

  addText(): void {
    // Here you can send the text to your backend to store in the database
    // For demo purposes, we'll just update the dashboardText
    this.dashboardText = this.textInput;
  }
}