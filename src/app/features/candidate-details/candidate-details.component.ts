import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Candidate } from '../candidate/models/candidate';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CandidateDetailsComponent implements OnInit {
onEdit() {
throw new Error('Method not implemented.');
}
onDelete() {
throw new Error('Method not implemented.');
}
onBack() {
throw new Error('Method not implemented.');
}
candidate: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
}