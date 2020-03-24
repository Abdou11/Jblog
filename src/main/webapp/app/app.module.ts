import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JBlogSharedModule } from 'app/shared/shared.module';
import { JBlogCoreModule } from 'app/core/core.module';
import { JBlogAppRoutingModule } from './app-routing.module';
import { JBlogHomeModule } from './home/home.module';
import { JBlogEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JBlogSharedModule,
    JBlogCoreModule,
    JBlogHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JBlogEntityModule,
    JBlogAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class JBlogAppModule {}
