import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sector1 } from './sector1/sector1';
import { AboutMe } from './about-me/about-me';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Footer } from './footer/footer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Sector1,AboutMe,Skills,Projects,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task1_portflio');
}
