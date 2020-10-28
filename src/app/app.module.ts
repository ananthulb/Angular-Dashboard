import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { StoriesComponent } from './components/stories/stories.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { StreamsComponent } from './components/streams/streams.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { AdsComponent } from './components/ads/ads.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { ActivityComponent } from './components/activity/activity.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { TimeagoModule } from 'ngx-timeago';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    WeatherComponent,
    CreatePostComponent,
    StoriesComponent,
    RecommendationComponent,
    StreamsComponent,
    BirthdayComponent,
    AdsComponent,
    SuggestionsComponent,
    ActivityComponent,
    JobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatChipsModule,
    MatMenuModule,
    MatDialogModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTabsModule,
    MatGridListModule,
    FlexLayoutModule,
    TimeagoModule.forRoot(),
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
