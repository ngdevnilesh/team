import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { HeaderComponent } from './core/header/header.component';
import { TeamComponent } from './features/team/team.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, TeamComponent, RouterModule, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title = 'task-one';
}
