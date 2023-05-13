import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Front/nav-bar/nav-bar.component';
import { AddClaimComponent } from './Front/add-claim/add-claim.component';
import { NavBarBackComponent } from './Back/nav-bar-back/nav-bar-back.component';
import { FooterBackComponent } from './Back/footer-back/footer-back.component';
import { FooterComponent } from './Front/footer/footer.component';
import { AddEventComponent } from './Back/add-event/add-event.component';
import { APP0Component } from './Back/app0/app0.component';
import { CertifComponent } from './Back/certif/certif.component';
import { EdiThematicComponent } from './Back/edi-thematic/edi-thematic.component';
import { EditEventComponent } from './Back/edit-event/edit-event.component';
import { EditSpeakerComponent } from './Back/edit-speaker/edit-speaker.component';
import { ListSpeakerConfComponent } from './Back/list-speaker-conf/list-speaker-conf.component';
import { NavVerticalComponent } from './Back/nav-vertical/nav-vertical.component';
import { PlannigComponent } from './Back/plannig/plannig.component';
import { SubjectListComponent } from './Back/subject-list/subject-list.component';
import { ViewEventComponent } from './Back/view-event/view-event.component';
import { App0FrontComponent } from './Front/app0-front/app0-front.component';
import { DetailEventComponent } from './Front/detail-event/detail-event.component';
import { EducationalEventComponent } from './Front/educational-event/educational-event.component';
import { FillSubjectComponent } from './Front/fill-subject/fill-subject.component';
import { LeisureEventComponent } from './Front/leisure-event/leisure-event.component';
import { ListEventComponent } from './Front/list-event/list-event.component';
import { ListPostComponent } from './Front/list-post/list-post.component';
import { PaiementComponent } from './Front/paiement/paiement.component';
import { SocktComponent } from './Front/sockt/sockt.component';
import { SubjectApp0Component } from './Front/subject-app0/subject-app0.component';
import { UploadVideoComponent } from './Front/upload-video/upload-video.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CalenderComponent } from './Front/calender/calender.component';
import { StatComponent } from './Back/stat/stat.component';
import { ListReservComponent } from './Front/list-reserv/list-reserv.component';
import { DetailSubjectsComponent } from './Front/detail-subjects/detail-subjects.component';
import { EditSubjectComponent } from './Front/edit-subject/edit-subject.component';
import { ViewPostsComponent } from './Back/view-posts/view-posts.component';
import { ResvComponent } from './Back/resv/resv.component';
import { StatReservComponent } from './Back/stat-reserv/stat-reserv.component';
import { CommonModule } from '@angular/common';
import { CalenderssComponent } from './Back/calenderss/calenderss.component';
import { ViewClaimsComponent } from './Front/view-claims/view-claims.component';
import { ViewOneClaimComponent } from './Front/view-one-claim/view-one-claim.component';
import { PassMcqComponent } from './Front/pass-mcq/pass-mcq.component';
import { ViewInterviewJuryComponent } from './Front/view-interview-jury/view-interview-jury.component';
import { ViewGridEvaluationComponent } from './Front/view-grid-evaluation/view-grid-evaluation.component';
import { MCQQuestionsComponent } from './Back/mcq-questions/mcq-questions.component';
import { ListQuestionsComponent } from './Back/list-questions/list-questions.component';
import { UpdateQuestionComponent } from './Back/update-question/update-question.component';
import { ClaimStaticsComponent } from './Back/claim-statics/claim-statics.component';
import { ListClaimsComponent } from './Back/list-claims/list-claims.component';
import { DecissionClaimComponent } from './Back/decission-claim/decission-claim.component';
import { ChatBotComponent } from './Front/chat-bot/chat-bot.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ClaimYearReportComponent } from './Back/claim-year-report/claim-year-report.component';
import { EvaluateurInterviewComponent } from './Back/evaluateur-interview/evaluateur-interview.component';
import { ClaimsExcelComponent } from './Back/claims-excel/claims-excel.component';
import { EvaluatorsCalanderComponent } from './Back/evaluators-calander/evaluators-calander.component';
import { DelibNoteComponent } from './Back/delib-note/delib-note.component';
import { AddTasksAndEvaluationComponent } from './Back/add-tasks-and-evaluation/add-tasks-and-evaluation.component';
import { ViewTasksAndEvaluationsComponent } from './Back/view-tasks-and-evaluations/view-tasks-and-evaluations.component';
import { ConsultIntCondidatComponent } from './Front/consult-int-condidat/consult-int-condidat.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddClaimComponent,
    NavBarBackComponent,
    FooterBackComponent,
    FooterComponent,
    AddEventComponent,
    APP0Component,
    CertifComponent,
    EdiThematicComponent,
    EditEventComponent,
    EditSpeakerComponent,
    ListSpeakerConfComponent,
    NavVerticalComponent,
    PlannigComponent,
    SubjectListComponent,
    ViewEventComponent,
    App0FrontComponent,
    DetailEventComponent,
    EducationalEventComponent,
    FillSubjectComponent,
    LeisureEventComponent,
    ListEventComponent,
    ListPostComponent,
    PaiementComponent,
    SocktComponent,
    SubjectApp0Component,
    UploadVideoComponent,
    CalenderComponent,
    StatComponent,
    ListReservComponent,
    DetailSubjectsComponent,
    EditSubjectComponent,
    ViewPostsComponent,
    ResvComponent,
    StatReservComponent,
    CalenderssComponent,
    ViewClaimsComponent,
    ViewOneClaimComponent,
    PassMcqComponent,
    ViewInterviewJuryComponent,
    ViewGridEvaluationComponent,
    MCQQuestionsComponent,
    ListQuestionsComponent,
    UpdateQuestionComponent,
    ClaimStaticsComponent,
    ListClaimsComponent,
    DecissionClaimComponent,
    ChatBotComponent,
    ClaimYearReportComponent,
    EvaluateurInterviewComponent,
    ClaimsExcelComponent,
    EvaluatorsCalanderComponent,
    DelibNoteComponent,
    AddTasksAndEvaluationComponent,
    ViewTasksAndEvaluationsComponent,
    ConsultIntCondidatComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
