import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from './core/services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent implements OnInit {
  title = 'front-processo-seletivo';
  data: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getData().subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }
}