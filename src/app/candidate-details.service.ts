import { Injectable } from '@angular/core';
import { Candidate } from './candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateDetailsService {
  private candidates: Candidate[];
  private WaitingCandidates: Candidate[];
  HiredCandidates: Candidate[];
  droppedCandidates: Candidate[];
  selected: Candidate;
  constructor() {

    this.candidates = [
      { id: 0,
        name: 'Namrata Giri', role: 'Sr. Software Developer', location: 'Mumbai',
        profile_photo: 'assets/img/Bitmap.jpg', status: 0, comment: 'Candidate is Awesome, has good knowledge',
        reference: { leads: 3, captured: 7}
      },
      { id: 1,
        name: 'Anil Kapoor', role: 'Software Developer', location: 'Delhi',
        profile_photo: 'assets/img/Bitmap.jpg', status: 0, comment: 'Candidate is Awesome, has good knowledge',
        reference: { leads: 3, captured: 7}
      },
      { id: 2,
        name: 'Kartik Aryan', role: 'Manager', location: 'Pune',
        profile_photo: 'assets/img/Bitmap.jpg', status: 0, comment: 'Candidate is Awesome, has good knowledge',
        reference: { leads: 3, captured: 7}
      },
      { id: 3,
        name: 'Sonam Kapoor', role: 'Sr. QA', location: 'Mumbai',
        profile_photo: 'assets/img/Bitmap.jpg', status: 0, comment: 'Candidate is Awesome, has good knowledge',
        reference: { leads: 3, captured: 7}
      }
    ];
    
    this.droppedCandidates = [];
    this.WaitingCandidates = [...this.candidates];
    this.HiredCandidates = [];
  }

  getAllCandidates() {
    return this.WaitingCandidates;
  }

  getCandidateById(id: number): Candidate {
    return this.candidates.filter(can => can.id == id)[0];
  }

  onDropped(id: number) {
    let dropC = this.WaitingCandidates[id];
    this.droppedCandidates.push(dropC);
    this.WaitingCandidates.splice(id, 1);
  }

  onReschedule(id: number) {
    let addC = this.droppedCandidates[id];
    this.WaitingCandidates.push(addC);
    this.droppedCandidates.splice(id, 1);
  }

  onHire(id:number) {
    let hireC = this.WaitingCandidates[id];
    this.HiredCandidates.push(hireC);
    this.WaitingCandidates.splice(id,1)
  }

  onDeleteCandidate(id: number) {
    this.WaitingCandidates.splice(id,1);
  }

  updateComment(comment: string, id: number) {
    this.candidates[id].comment = comment;
  }
}
