import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { SmallXComponent } from './small-x/small-x.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { environment } from '../environments/environment';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { CreateGroupPageComponent } from './create-group-page/create-group-page.component';
import { GroupsListPageComponent } from './groups-list-page/groups-list-page.component';
import { GroupPageComponent } from './group-page/group-page.component';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { MyGroupsListComponent } from './my-groups-list/my-groups-list.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { RequestsListComponent } from './requests-list/requests-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BackButtonComponent,
    SmallXComponent,
    NavBarComponent,
    SignInPageComponent,
    CreateGroupPageComponent,
    GroupsListPageComponent,
    GroupPageComponent,
    GroupsListComponent,
    MyGroupsListComponent,
    MessagesListComponent,
    RequestsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
