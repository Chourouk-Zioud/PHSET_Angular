import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interview } from '../Models/Interview';
import { Inscription } from '../Models/Inscription';
import { Offer } from '../Models/Offer';
import { Classroom } from '../Models/Classroom';

@Injectable({
  providedIn: 'root',
})
export class AdmissionService {
  URL = 'http://localhost:8081/Rev';
  constructor(private http: HttpClient) {}

  findStatutInscriptionCurrentUser(): Observable<boolean> {
    return this.http.get<boolean>(this.URL + '/findInscriptionCurrentUser');
  }

  getAllInterviews(): Observable<Interview[]> {
    return this.http.get<Interview[]>(this.URL + '/retrieveAllInterviews');
  }

  addIsncription(inscription: Inscription): Observable<Inscription> {
    return this.http.post<Inscription>(
      this.URL + '/addInscription',
      inscription
    );
  }

  getAllOfferJob(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.URL + '/getAllOfferJob');
  }

  getAllOfferAdmission(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.URL + '/getAllOfferAdmission');
  }

  addInscription(inscription: Inscription): Observable<Inscription[]> {
    return this.http.post<Inscription[]>(
      this.URL + '/getAllOfferJob',
      inscription
    );
  }

  newAdmission(inscription: Inscription, id: number) {
    return this.http.post(
      this.URL + '/addInscriptionWithUserAndAssignOffer/' + id,
      inscription
    );
  }

  setFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.put(this.URL + '/setFileUser', formData);
  }

  getInterviewById(id: number): Observable<Interview> {
    return this.http.get<Interview>(this.URL + '/retrieveInterview/' + id);
  }

  getAllOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.URL + '/retrieveAllOffers');
  }

  getAllInscription(): Observable<Inscription[]> {
    return this.http.get<Inscription[]>(this.URL + '/retrieveAllInscriptions');
  }

  getAllClassrooms(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(this.URL + '/retrieveAllClassrooms');
  }

  addClassroom(classroom: Classroom): Observable<Classroom> {
    return this.http.post<Classroom>(this.URL + '/addClassroom', classroom);
  }

  getClassroomById(id: number): Observable<Classroom> {
    return this.http.get<Classroom>(this.URL + '/retrieveClassroom/' + id);
  }

  updateClassroom(classroom: Classroom): Observable<Classroom> {
    return this.http.get<Classroom>(this.URL + '/updateClassroom/');
  }

  retrieveInterviewByCurrentUser(id: number): Observable<Interview[]> {
    return this.http.get<Interview[]>(
      this.URL + '/retrieveInterviewByCurrentUser/' + id
    );
  }
}