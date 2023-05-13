import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarFrontComponent } from './Front/nav-bar-front/nav-bar-front.component';
import { NotFoundComponent } from './Front/not-found/not-found.component';
import { TrainingComponent } from './Front/training/training/training.component';
import { NavBarBackComponent } from './Back/nav-bar-back/nav-bar-back.component';
import { AddTrainingComponent } from './Front/training/add-training/add-training.component';
import { TrainingItemComponent } from './Front/training/training-item/training-item.component';
import { PageAcceuilKaisComponent } from './Front/page-acceuil-kais/page-acceuil-kais.component';
import { CourseComponent } from './Front/course/course/course.component';
import { CentreExamenComponent } from './Front/exam/centre-examen/centre-examen.component';
import { TestComponent } from './Front/test/test.component';
import { ChapterComponent } from './Front/chapter/chapter/chapter.component';
import { ChapterItemComponent } from './Front/chapter/chapter-item/chapter-item.component';
import { CertificateComponent } from './Front/certificate/certificate/certificate.component';
import { FaqComponent } from './Front/faq/faq/faq.component';
import { TrainingBackComponent } from './Back/training-back/training-back.component';
import { ReponseFAQComponent } from './Front/reponseFAQ/reponse-faq/reponse-faq.component';
import { QuestionComponent } from './Back/FAQ/question/question.component';
import { ExamBackComponent } from './Back/FAQ/exam-back/exam-back.component';
import { ReponseComponent } from './Back/FAQ/reponse/reponse.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // FRONT
  { path: 'navFront', component: NavBarFrontComponent },
  { path: 'home', component: PageAcceuilKaisComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'addTraining', component: AddTrainingComponent },
  { path: 'training/:id', component: TrainingItemComponent },
  { path: 'course', component: CourseComponent },
  { path: 'chapter/:id', component: ChapterComponent },
  { path: 'chapterItem/:id', component: ChapterItemComponent },
  { path: 'centreExamen', component: CentreExamenComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'reponseFAQ', component: ReponseFAQComponent },
  { path: 'certif', component: CertificateComponent },
  // FRONT
  { path: 'navBack', component: NavBarBackComponent },
  { path: 'Trainingback', component: TrainingBackComponent },
  { path: 'faqBack', component: QuestionComponent },
  { path: 'ExamBack', component: ExamBackComponent },
  { path: 'responeQuestion/:id', component: ReponseComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
