import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './Front/nav-bar/nav-bar.component';
import { ListEventComponent } from './Front/list-event/list-event.component';
import { DetailEventComponent } from './Front/detail-event/detail-event.component';
import { PaiementComponent } from './Front/paiement/paiement.component';
import { UploadVideoComponent } from './Front/upload-video/upload-video.component';
import { ListPostComponent } from './Front/list-post/list-post.component';
import { SubjectApp0Component } from './Front/subject-app0/subject-app0.component';
import { APP0Component } from './Back/app0/app0.component';
import { EducationalEventComponent } from './Front/educational-event/educational-event.component';
import { AddEventComponent } from './Back/add-event/add-event.component';
import { ViewEventComponent } from './Back/view-event/view-event.component';
import { EditEventComponent } from './Back/edit-event/edit-event.component';
import { App0FrontComponent } from './Front/app0-front/app0-front.component';
import { LeisureEventComponent } from './Front/leisure-event/leisure-event.component';
import { EdiThematicComponent } from './Back/edi-thematic/edi-thematic.component';
import { SubjectListComponent } from './Back/subject-list/subject-list.component';
import { PlannigComponent } from './Back/plannig/plannig.component';
import { CertifComponent } from './Back/certif/certif.component';
import { ListSpeakerConfComponent } from './Back/list-speaker-conf/list-speaker-conf.component';
import { EditSpeakerComponent } from './Back/edit-speaker/edit-speaker.component';
import { FillSubjectComponent } from './Front/fill-subject/fill-subject.component';
import { CalenderComponent } from './Front/calender/calender.component';
import { StatComponent } from './Back/stat/stat.component';
import { ListReservComponent } from './Front/list-reserv/list-reserv.component';
import { DetailSubjectsComponent } from './Front/detail-subjects/detail-subjects.component';
import { EditSubjectComponent } from './Front/edit-subject/edit-subject.component';
import { ViewPostsComponent } from './Back/view-posts/view-posts.component';
import { ResvComponent } from './Back/resv/resv.component';
import { StatReservComponent } from './Back/stat-reserv/stat-reserv.component';
import { CalenderssComponent } from './Back/calenderss/calenderss.component';
import { AddClaimComponent } from './Front/add-claim/add-claim.component';
import { ViewClaimsComponent } from './Front/view-claims/view-claims.component';
import { ViewOneClaimComponent } from './Front/view-one-claim/view-one-claim.component';
import { PassMcqComponent } from './Front/pass-mcq/pass-mcq.component';
import { ViewInterviewJuryComponent } from './Front/view-interview-jury/view-interview-jury.component';
import { ViewGridEvaluationComponent } from './Front/view-grid-evaluation/view-grid-evaluation.component';
import { NavBarBackComponent } from './Back/nav-bar-back/nav-bar-back.component';
import { MCQQuestionsComponent } from './Back/mcq-questions/mcq-questions.component';
import { ListQuestionsComponent } from './Back/list-questions/list-questions.component';
import { UpdateQuestionComponent } from './Back/update-question/update-question.component';
import { ClaimStaticsComponent } from './Back/claim-statics/claim-statics.component';
import { ListClaimsComponent } from './Back/list-claims/list-claims.component';
import { DecissionClaimComponent } from './Back/decission-claim/decission-claim.component';
import { ChatBotComponent } from './Front/chat-bot/chat-bot.component';
import { ClaimYearReportComponent } from './Back/claim-year-report/claim-year-report.component';
import { EvaluateurInterviewComponent } from './Back/evaluateur-interview/evaluateur-interview.component';
import { ClaimsExcelComponent } from './Back/claims-excel/claims-excel.component';
import { EvaluatorsCalanderComponent } from './Back/evaluators-calander/evaluators-calander.component';
import { DelibNoteComponent } from './Back/delib-note/delib-note.component';
import { AddTasksAndEvaluationComponent } from './Back/add-tasks-and-evaluation/add-tasks-and-evaluation.component';
import { ViewTasksAndEvaluationsComponent } from './Back/view-tasks-and-evaluations/view-tasks-and-evaluations.component';
import { ConsultIntCondidatComponent } from './Front/consult-int-condidat/consult-int-condidat.component';


const routes: Routes = [
  { path: 'nav', component: NavBarComponent },
  { path: 'events', component: ListEventComponent },
  { path: 'event/:id', component: DetailEventComponent },
  { path: 'paiement/:id', component: PaiementComponent },
  { path: 'upload', component: UploadVideoComponent },
  { path: 'listpost', component: ListPostComponent },
  { path: 'subject', component: SubjectApp0Component },
  { path: 'app', component: App0FrontComponent },
  { path: 'leiseur', component: LeisureEventComponent },
  { path: 'educ', component: EducationalEventComponent },
  { path: 'addev', component: AddEventComponent },
  { path: 'Viewev', component: ViewEventComponent },
  { path: 'Editev/:id', component: EditEventComponent },
  { path: 'app0det', component: APP0Component },
  { path: 'editThem/:id', component: EdiThematicComponent },
  { path: 'listSubj', component: SubjectListComponent },
  { path: 'pdf/:id', component: PlannigComponent },
  { path: 'Certif', component: CertifComponent },
  { path: 'speaker', component: ListSpeakerConfComponent },
  { path: 'editSp/:id', component: EditSpeakerComponent },
  { path: 'fill', component: FillSubjectComponent },
  { path: 'calen', component: CalenderComponent },
  { path: 'stat', component: StatComponent },
  { path: 'listResrv', component: ListReservComponent },
  { path: 'Subj', component: DetailSubjectsComponent },
  { path: 'editSubj/:id', component: EditSubjectComponent },
  { path: 'viewPost', component: ViewPostsComponent },
  { path: 'res', component: ResvComponent },
  { path: 'statRes', component: StatReservComponent },
  { path: 'Cal', component: CalenderssComponent },
  { path: 'newclaims', component: AddClaimComponent },
  { path: 'grid', component: ViewGridEvaluationComponent },
  { path: 'claims', component: ViewClaimsComponent },
  { path: 'claim/view', component: ViewOneClaimComponent },
  { path: 'mcq', component: PassMcqComponent },
  { path: 'InterviewList', component: ViewInterviewJuryComponent },
  { path: 'navback', component: NavBarBackComponent },
  { path: 'questions', component: MCQQuestionsComponent },
  { path: 'listquestions', component: ListQuestionsComponent },
  { path: 'updateQuest', component: UpdateQuestionComponent },
  { path: 'claimstatics', component: ClaimStaticsComponent },
  { path: 'claimlist', component: ListClaimsComponent },
  { path: 'decission', component: DecissionClaimComponent },
  { path: 'chaimreport', component: ClaimYearReportComponent },
  { path: 'listevalint', component: EvaluateurInterviewComponent },
  { path: 'Excel', component: ClaimsExcelComponent },
  { path: 'evalcalander', component: EvaluatorsCalanderComponent },
  { path: 'delib', component: DelibNoteComponent },
  { path: 'neweval', component: AddTasksAndEvaluationComponent },
  { path: 'viewevaluations', component: ViewTasksAndEvaluationsComponent },
  { path: 'intcondidat', component: ConsultIntCondidatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
