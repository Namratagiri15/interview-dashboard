import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from '../candidate';
import { CandidateDetailsService } from '../candidate-details.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  candidateId: number;
  candidate: Candidate;
  constructor(private route: ActivatedRoute, private _candidateDataService: CandidateDetailsService, private router: Router) { }

  ngOnInit(): void {
    this.candidateId = this.route.snapshot.params['id'];
    this.candidate = this._candidateDataService.getCandidateById(this.candidateId);
    console.log(this.candidate)
  }

  onSave(comment: string) {
    console.log(comment);
    this._candidateDataService.updateComment(comment, this.candidateId);
    this.router.navigate(['/'])
  }

}
