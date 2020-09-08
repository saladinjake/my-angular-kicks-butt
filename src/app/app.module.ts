import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import modules

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//core component
import { HeaderComponent } from './core/header/header.component';
import { AdminheaderComponent } from './core/header/adminheader/adminheader.component';
import { UserheaderComponent } from './core/header/userheader/userheader.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { FooterComponent } from './core/footer/footer.component';
import { ForgetpasswordComponent } from './core/forgetpassword/forgetpassword.component';
import { ChangepasswordComponent } from './core/changepassword/changepassword.component';
import { IdlestateComponent } from './core/idlestate/idlestate.component';
import { UsersidebarComponent } from './core/sidebar/usersidebar/usersidebar.component';
import { AdminsidebarComponent } from './core/sidebar/adminsidebar/adminsidebar.component';

//user authorized components
import { LandingComponent } from './dashboard/components/landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//widgets component
import { WidgetsComponent } from './widgets/widgets.component';
import { VideoComponent } from './widgets/video/video.component';
import { ImagesComponent } from './widgets/images/images.component';
import { BannersComponent } from './widgets/banners/banners.component';
import { AdminComponent } from './admin/admin.component';
import { GalleryComponent } from './widgets/gallery/gallery.component';
import { CarouselComponent } from './widgets/carousel/carousel.component';
import { ModalComponent } from './widgets/modal/modal.component';
import { ProductComponent } from './widgets/product/product.component';
import { CardboxComponent } from './widgets/cardbox/cardbox.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    WidgetsComponent,
    VideoComponent,
    ImagesComponent,
    BannersComponent,
    LandingComponent,
    DashboardComponent,
    ForgetpasswordComponent,
    ChangepasswordComponent,
    IdlestateComponent,
    UsersidebarComponent,
    AdminsidebarComponent,
    AdminheaderComponent,
    UserheaderComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    GalleryComponent,
    CarouselComponent,
    ModalComponent,
    ProductComponent,
    CardboxComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
