import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Interview } from '../Models/Interview';
import { Inscription } from '../Models/Inscription';
import { Offer } from '../Models/Offer';
import { Classroom } from '../Models/Classroom';
import { TypeGrid } from '../Models/TypeGrid';

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

  newAdmissionTN(inscription: Inscription, idOffer: number, idAccount: number) {
    return this.http.post(
      this.URL +
        '/addInscriptionTNWithUserAndAssignOffer/' +
        idOffer +
        '/' +
        idAccount,
      inscription
    );
  }

  newAdmissionALT(
    inscription: Inscription,
    idOffer: number,
    idAccount: number
  ) {
    return this.http.post(
      this.URL +
        '/addInscriptionALTWithUserAndAssignOffer/' +
        idOffer +
        '/' +
        idAccount,
      inscription
    );
  }

  newAdmissionINT(
    inscription: Inscription,
    idOffer: number,
    idAccount: number
  ) {
    return this.http.post(
      this.URL +
        '/addInscriptionINTWithUserAndAssignOffer/' +
        idOffer +
        '/' +
        idAccount,
      inscription
    );
  }

  newAdmissionNIGHT(
    inscription: Inscription,
    idOffer: number,
    idAccount: number
  ) {
    return this.http.post(
      this.URL +
        '/addInscriptionNIGHTWithUserAndAssignOffer/' +
        idOffer +
        '/' +
        idAccount,
      inscription
    );
  }

  newApply(inscription: Inscription, idOffer: number, idAccount: number) {
    return this.http.post(
      this.URL +
        '/addInscriptionJOBWithUserAndAssignOffer/' +
        idOffer +
        '/' +
        idAccount,
      inscription
    );
  }

  newApplyFile(
    inscription: Inscription,
    idOffer: number,
    idAccount: number,
    cv: File,
    lm: File
  ) {
    const cvformData = new FormData();
    const lmformData = new FormData();
    cvformData.append('cv', cv);
    lmformData.append('lm', lm);
    return this.http.post(
      this.URL + '/addInscriptionWithCVAndLM/' + idOffer + '/' + idAccount,
      inscription
    );
  }

  setCV(file: File) {
    const formData = new FormData();
    formData.append('cv', file);
    return this.http.put(this.URL + '/setCVUser', formData);
  }

  setLM(file: File) {
    const formData = new FormData();
    formData.append('lm', file);
    return this.http.put(this.URL + '/setLMUser', formData);
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

  Sort() {
    return this.http.get<Inscription[]>(this.URL + '/getAllInscriptionAsc');
  }

  searchByType(type: String) {
    return this.http.get<Inscription[]>(
      this.URL + '/getInscriptionByOffer_OfferType/' + type
    );
  }

  searchByDate(date: Date) {
    return this.http.get<Inscription[]>(
      this.URL + '/getInscriptionByDateInscription/' + date
    );
  }
}
