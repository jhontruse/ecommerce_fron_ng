import { Routes } from '@angular/router';
import { certGuard } from '../guard/cert.guard';
import { Not403Component } from './not403/not403.component';
import { LayoutComponent } from './layout/layout.component';

export const pagesRoutes: Routes = [
  { path: 'inicio', component: LayoutComponent, canActivate: [certGuard] },
  /*{
    path: 'patient',
    component: PatientComponent,
    children: [
      { path: 'new', component: PatientEditComponent },
      { path: 'edit/:id', component: PatientEditComponent },
    ], canActivate: [certGuard]
  },*/
  /*{
    path: 'specialty',
    component: SpecialtyComponent,
    children: [
      { path: 'new', component: SpecialtyEditComponent },
      { path: 'edit/:id', component: SpecialtyEditComponent },
    ], canActivate: [certGuard]
  },*/
  //{ path: 'medic', component: MedicComponent, canActivate: [certGuard] },
  //{ path: 'exam', component: ExamComponent, canActivate: [certGuard] },
  //{ path: 'consult-wizard', component: ConsultWizardComponent, canActivate: [certGuard] },
  //{ path: 'search', component: SearchComponent, canActivate: [certGuard] },
  //{ path: 'report', component: ReportComponent, canActivate: [certGuard] },
  { path: 'not-403', component: Not403Component },
  //{ path: 'not-404', component: Not404Component}
];
