 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Training } from '../Models/Training';
import { Course } from '../Models/Course';
import { Chapter } from '../Models/Chapter';
import { Certificate } from '../Models/Certificate';
import { Topic } from '../Models/Topic';
import { QuestionFAQ } from '../Models/QuestionFAQ';
import { Exam } from '../Models/Exam';
import { RequestTraining } from '../Models/RequestTraining';
import { ReponseFAQ } from '../Models/ReponseFAQ';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  URL = 'http://localhost:8081/Rev';

  constructor(private http: HttpClient) {}

  retrieveAllTraining(): Observable<Training[]> {
    return this.http.get<Training[]>(this.URL + '/retrieveAllTraining');
  }

  addTraining(training: Training) {
    return this.http.post<Training>(this.URL + '/addTraining', training);
  }

  getTrainingById(id: number): Observable<Training> {
    return this.http.get<Training>(this.URL + '/retrieveTraining/' + id);
  }

  retrieveAllCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(this.URL + '/retrieveAllCourses');
  }

  retrieveChaptersByIdCourse(id: number): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(
      this.URL + '/retrieveChaptersByIdCourse/' + id
    );
  }

  getChapterById(id: number): Observable<Chapter> {
    return this.http.get<Chapter>(this.URL + '/retrieveChapter/' + id);
  }

  retrieveAllCertificates(): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(this.URL + '/retrieveAllCertificates');
  }

  retrieveAllTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.URL + '/retrieveAllTopics');
  }

  retrieveAllQuestionsFAQ(): Observable<QuestionFAQ[]> {
    return this.http.get<QuestionFAQ[]>(this.URL + '/retrieveAllQuestionFAQS');
  }

  retrieveAllExam(): Observable<Exam[]> {
    return this.http.get<Exam[]>(this.URL + '/retrieveAllExams');
  }

  retrieveAllCertificatesByAccount(id: number): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(
      this.URL + '/retrieveAllCertificatesByAccount/' + id
    );
  }

  addRequest(request: RequestTraining) {
    return this.http.post<RequestTraining>(this.URL + '/addRequest', request);
  }

  retrieveAllQuestionFAQ(): Observable<QuestionFAQ[]> {
    return this.http.get<QuestionFAQ[]>(this.URL + '/retrieveAllQuestionFAQS');
  }

  Sort() {
    return this.http.get<QuestionFAQ[]>(this.URL + '/getNewQuestionFAQ');
  }

  addResponse(i: number, r: ReponseFAQ) {
    return this.http.post<ReponseFAQ>(this.URL + '/addResponse/' + i , r);
  }
}