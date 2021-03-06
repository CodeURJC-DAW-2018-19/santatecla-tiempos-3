import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


import {ScrollDispatchModule} from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
//Our Components 
/* import { IndexComponent } from './pages/index/index.component';
import { AuthorNewComponent } from './pages/author/author-new.component';
import { AuthorComponent } from './pages/author/author.component';
import { ThemeComponent } from './pages/theme/theme.component';
import { ThemeNewComponent } from './pages/theme/theme-new.component';
import { WorkComponent } from './pages/literaryWork/work.component';
import { WorkShowComponent } from './pages/literaryWork/work-show.component'; */
//
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {
  MatBadgeModule,
  MatBottomSheetModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTreeModule,
} from '@angular/material';
import {
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatTooltipModule,
    MatRippleModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatAutocompleteModule,
} from '@angular/material';
import {
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentLoadingModule,
    CovalentDialogsModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDataTableModule,
    CovalentMessageModule,
} from '@covalent/core';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginService } from './auth/login.service';
import { routing } from './app.routing';
import { ErrorInterceptor } from './auth/error.interceptor';
import { BasicAuthInterceptor } from './auth/auth.interceptor';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';





import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentBarEchartsModule } from '@covalent/echarts/bar';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';

import { LoginComponent } from "./login.component";


import { CategoryComponent } from "./pages/category/category.component";
import { EventComponent } from "./pages/event/event.component";
import { IntervalComponent } from "./pages/interval/interval.component";

import { DialogAddCategory } from "./pages/category/category.component";
import { DialogShowCategory } from "./pages/category/category.component";
import { DialogAddEvent } from "./pages/event/event.component";
import { DialogShowEvent } from "./pages/event/event.component";
import { DialogAddInterval } from "./pages/interval/interval.component";
import { DialogShowInterval } from "./pages/interval/interval.component";
import { DialogLoginComponent } from "./login.component";

import { PagerService } from "./pages/pager.service";

import { CategoryService } from "./pages/category/category.service";
import { EventService } from "./pages/event/event.service";
import { IntervalService } from "./pages/interval/interval.service";
//
@NgModule({
    imports: [
        CovalentBaseEchartsModule,
        CovalentBarEchartsModule,
        CovalentTooltipEchartsModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot([]),
        HttpClientModule,
        JsonpModule,
        ScrollDispatchModule,
        /** Material Modules */
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatTabsModule,
        MatPaginatorModule,
        MatExpansionModule,
        MatSidenavModule,
        MatTooltipModule,
        MatRippleModule,
        MatRadioModule,
        MatGridListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSliderModule,
        MatAutocompleteModule,
        MatInputModule,
        /** Covalent Modules */
        CovalentCommonModule,
        CovalentLayoutModule,
        CovalentMediaModule,
        CovalentExpansionPanelModule,
        CovalentStepsModule,
        CovalentDialogsModule,
        CovalentLoadingModule,
        CovalentSearchModule,
        CovalentPagingModule,
        CovalentNotificationsModule,
        CovalentMenuModule,
        CovalentDataTableModule,
        CovalentMessageModule,
        /** Additional **/
        NgxChartsModule,
        routing,
    ],
    declarations: [AppComponent, CategoryComponent,EventComponent,IntervalComponent,
        DialogAddCategory,DialogAddEvent,DialogAddInterval, LoginComponent,DialogLoginComponent,DialogShowCategory,DialogShowEvent,DialogShowInterval],
      
                    /* WorkComponent,IndxComponent, AuthorNewComponent, AuthorComponent, ThemeComponent, ThemeNewComponent, WorkComponent, WorkShowComponent */

    //declarations: [AppComponent, BookDetailComponent, BookListComponent, BookFormComponent, LoginComponent],
    bootstrap: [AppComponent],
 

    providers: [ LoginService,CategoryService,EventService,IntervalService,PagerService,
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    entryComponents: [DialogAddCategory,DialogAddEvent,DialogAddInterval,DialogLoginComponent,DialogShowCategory,DialogShowEvent,DialogShowInterval],

    exports: [
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
  ]
})
export class AppModule {
constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('/assets/symbol-defs.svg'));
}
}
