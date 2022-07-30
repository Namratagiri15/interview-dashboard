import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { CandidateDetailsService } from '../candidate-details.service';

@Component({
  selector: 'app-dropped',
  templateUrl: './dropped.component.html',
  styleUrls: ['./dropped.component.css']
})
export class DroppedComponent implements OnInit {
  Rejected: Candidate[];
  constructor(private _candidateDetailsService: CandidateDetailsService) { }

  ngOnInit(): void {
    this.Rejected = this._candidateDetailsService.droppedCandidates;
  }
  
  onReschedule(id: number) {
    this._candidateDetailsService.onReschedule(id);
  }
}
