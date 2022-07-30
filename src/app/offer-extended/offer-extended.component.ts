import { Component, OnInit } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Candidate } from '../candidate';
import { CandidateDetailsService } from '../candidate-details.service';

@Component({
  selector: 'app-offer-extended',
  templateUrl: './offer-extended.component.html',
  styleUrls: ['./offer-extended.component.css']
})
export class OfferExtendedComponent implements OnInit {
  hiredCandidates: Candidate[];
  isEmpty = true;
  constructor(private _candidateDetailsService: CandidateDetailsService) {
  }

  ngOnInit(): void {
    this.hiredCandidates = this._candidateDetailsService.HiredCandidates;
  }

}
