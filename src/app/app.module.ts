import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarFrontComponent } from './Front/nav-bar-front/nav-bar-front.component';
import { NotFoundComponent } from './Front/not-found/not-found.component';
import { TrainingComponent } from './Front/training/training/training.component';
import { AddTrainingComponent } from './Front/training/add-training/add-training.component';
import { TrainingItemComponent } from './Front/training/training-item/training-item.component';
import { PageAcceuilKaisComponent } from './Front/page-acceuil-kais/page-acceuil-kais.component';
import { CourseComponent } from './Front/course/course/course.component';
import { ExamComponent } from './Front/exam/exam/exam.component';
import { VideoTrainingComponent } from './Front/training/video-training/video-training.component';
import { OtherTrainingComponent } from './Front/training/other-training/other-training.component';
import { TopTrainingComponent } from './Front/training/top-training/top-training.component';
import { CourseItemComponent } from './Front/course/course-item/course-item.component';
import { CentreExamenComponent } from './Front/exam/centre-examen/centre-examen.component';
import { TestComponent } from './Front/test/test.component';
import { ChapterComponent } from './Front/chapter/chapter/chapter.component';
import { ChapterItemComponent } from './Front/chapter/chapter-item/chapter-item.component';
import { CertificateComponent } from './Front/certificate/certificate/certificate.component';
import { CertificateItemComponent } from './Front/certificate/certificate-item/certificate-item.component';
import { FaqComponent } from './Front/faq/faq/faq.component';
import { FaqItemComponent } from './Front/faq/faq-item/faq-item.component';
import { TopicComponent } from './Front/topic/topic/topic.component';
import { QuestionFAQComponent } from './Front/questionFAQ/question-faq/question-faq.component';
import { NavBarBackComponent } from './Back/nav-bar-back/nav-bar-back.component';
import { TrainingBackComponent } from './Back/training-back/training-back.component';
import { HomeBackComponent } from './Back/home-back/home-back.component';
import { ReponseFAQComponent } from './Front/reponseFAQ/reponse-faq/reponse-faq.component';
import { ReponseItemComponent } from './Front/reponseFAQ/reponse-item/reponse-item.component';
import { QuestionComponent } from './Back/FAQ/question/question.component';
import { QuestionItemComponent } from './Back/FAQ/question-item/question-item.component';
import { ReponseComponent } from './Back/FAQ/reponse/reponse.component';
import { ExamBackComponent } from './Back/FAQ/exam-back/exam-back.component';
import { FooterComponent } from './Front/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarFrontComponent,
    NotFoundComponent,
    TrainingComponent,
    AddTrainingComponent,
    TrainingItemComponent,
    PageAcceuilKaisComponent,
    CourseComponent,
    ExamComponent,
    VideoTrainingComponent,
    OtherTrainingComponent,
    TopTrainingComponent,
    CourseItemComponent,
    CentreExamenComponent,
    TestComponent,
    ChapterComponent,
    ChapterItemComponent,
    CertificateComponent,
    CertificateItemComponent,
    FaqComponent,
    FaqItemComponent,
    TopicComponent,
    QuestionFAQComponent,
    NavBarBackComponent,
    TrainingBackComponent,
    HomeBackComponent,
    ReponseFAQComponent,
    ReponseItemComponent,
    QuestionComponent,
    QuestionItemComponent,
    ReponseComponent,
    ExamBackComponent,
    FooterComponent
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
