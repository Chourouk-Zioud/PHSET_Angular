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
import { ChapterComponent } from './Front/chapter/chapter/chapter.component';
import { ChapterItemComponent } from './Front/chapter/chapter-item/chapter-item.component';
import { CertificateComponent } from './Front/certificate/certificate/certificate.component';
import { CertificateItemComponent } from './Front/certificate/certificate-item/certificate-item.component';
import { FaqComponent } from './Front/faq/faq/faq.component';
import { FaqItemComponent } from './Front/faq/faq-item/faq-item.component';
import { TopicComponent } from './Front/topic/topic/topic.component';
import { QuestionFAQComponent } from './Front/questionFAQ/question-faq/question-faq.component';
import { TrainingBackComponent } from './Back/training-back/training-back.component';
import { HomeBackComponent } from './Back/home-back/home-back.component';
import { ReponseFAQComponent } from './Front/reponseFAQ/reponse-faq/reponse-faq.component';
import { ReponseItemComponent } from './Front/reponseFAQ/reponse-item/reponse-item.component';
import { QuestionComponent } from './Back/FAQ/question/question.component';
import { QuestionItemComponent } from './Back/FAQ/question-item/question-item.component';
import { ReponseComponent } from './Back/FAQ/reponse/reponse.component';
import { ExamBackComponent } from './Back/FAQ/exam-back/exam-back.component';
import { AcceuilAdmissionComponent } from './Front/admission/acceuil-admission/acceuil-admission.component';
import { AddAdmissionComponent } from './Front/admission/add-admission/add-admission.component';
import { InterviewComponent } from './Front/interview/interview/interview.component';
import { InterviewItemComponent } from './Front/interview/interview-item/interview-item.component';
import { AcceuilRecrutementComponent } from './Front/recrutement/acceuil-recrutement/acceuil-recrutement.component';
import { OffreItemComponent } from './Front/recrutement/offre-item/offre-item.component';
import { PostulerOffreComponent } from './Front/recrutement/postuler-offre/postuler-offre.component';
import { UpdateInterviewBackComponent } from './Back/interview/update-interview-back/update-interview-back.component';
import { AddInterviewBackComponent } from './Back/interview/add-interview-back/add-interview-back.component';
import { InterviewBackComponent } from './Back/interview/interview-back/interview-back.component';
import { AddTunDayComponent } from './Front/admission/add-tun-day/add-tun-day.component';
import { AddTunNightComponent } from './Front/admission/add-tun-night/add-tun-night.component';
import { AddForeignComponent } from './Front/admission/add-foreign/add-foreign.component';
import { ShowInterviewComponent } from './Back/interview/show-interview/show-interview.component';
import { RecrutementBackComponent } from './Back/recrutement/recrutement-back/recrutement-back.component';
import { RecrutementItemBackComponent } from './Back/recrutement/recrutement-item-back/recrutement-item-back.component';
import { AddRecrutementBackComponent } from './Back/recrutement/add-recrutement-back/add-recrutement-back.component';
import { InscriptionBackComponent } from './Back/inscription/inscription-back/inscription-back.component';
import { UpdateInscriptionBackComponent } from './Back/inscription/update-inscription-back/update-inscription-back.component';
import { ClassroomComponent } from './Back/classroom/classroom/classroom.component';
import { ClassroomItemComponent } from './Back/classroom/classroom-item/classroom-item.component';
import { AddClassroomComponent } from './Back/classroom/add-classroom/add-classroom.component';
import { UpdateClassroomComponent } from './Back/classroom/update-classroom/update-classroom.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './Front/test/test.component';
import { AlternanceComponent } from './Front/admission/alternance/alternance.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
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
    AcceuilAdmissionComponent,
    AddAdmissionComponent,
    InterviewComponent,
    InterviewItemComponent,
    AcceuilRecrutementComponent,
    OffreItemComponent,
    PostulerOffreComponent,
    UpdateInterviewBackComponent,
    AddInterviewBackComponent,
    InterviewBackComponent,
    AddTunDayComponent,
    AddTunNightComponent,
    AddForeignComponent,
    ShowInterviewComponent,
    RecrutementBackComponent,
    RecrutementItemBackComponent,
    AddRecrutementBackComponent,
    HomeBackComponent,
    InscriptionBackComponent,
    UpdateInscriptionBackComponent,
    ClassroomComponent,
    ClassroomItemComponent,
    AddClassroomComponent,
    UpdateClassroomComponent,
    TestComponent,
    AlternanceComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    CommonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
