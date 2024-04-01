import { Component } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss']
})
export class DarkModeToggleComponent {

  darkMode$: Observable<boolean>;

  constructor(private darkModeService: DarkModeService) {
    this.darkMode$ = this.darkModeService.darkMode$;
  }

  toggleTheme(): void {
    this.darkModeService.toggle();
  }
}
