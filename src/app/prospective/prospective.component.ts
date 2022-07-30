import { Component, OnInit } from '@angular/core';
import { CandidateDetailsService } from '../candidate-details.service';
import { CdkDragDrop, DragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prospective',
  templateUrl: './prospective.component.html',
  styleUrls: ['./prospective.component.css']
})
export class ProspectiveComponent implements OnInit {
  candidateDetails;
  isDropdownOpen = false;
  constructor(private _candidateDetailsService: CandidateDetailsService, private router: Router) { }

  ngOnInit(): void {
    this.candidateDetails = this._candidateDetailsService.getAllCandidates();
  }
  
  onHire(id: number) {
    this._candidateDetailsService.onHire(id);
  }

  onDropped(id: number) {
    this._candidateDetailsService.onDropped(id);
  }

  ToggleDropdown(el: HTMLElement) {
    if (! this.isDropdownOpen) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none'; 
    }
    this.isDropdownOpen = ! this.isDropdownOpen;
  }

  onDrop(event: CdkDragDrop<string []>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    )
  }

  hideCandidate(id: number, el: HTMLElement) {
    this._candidateDetailsService.onDeleteCandidate(id);
    this.isDropdownOpen = false;
    this.ToggleDropdown(el);
  }

  onEditComment() {
    this.router.navigate(['edit', 1])
  }
}
