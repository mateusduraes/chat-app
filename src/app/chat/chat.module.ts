import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { CommandComponent } from './components/command/command.component';
import { CompleteComponent } from './components/complete/complete.component';
import { DateComponent } from './components/date/date.component';
import { MapComponent } from './components/map/map.component';
import { MessageComponent } from './components/message/message.component';
import { RateComponent } from './components/rate/rate.component';
import { HighlightStarPipe } from './pipes/highlight-star.pipe';
import { IsCommandPipe } from './pipes/is-command.pipe';
import { IsMessagePipe } from './pipes/is-message.pipe';

@NgModule({
  declarations: [
    ChatComponent,
    MessageComponent,
    CommandComponent,
    CompleteComponent,
    MapComponent,
    DateComponent,
    RateComponent,
    IsCommandPipe,
    IsMessagePipe,
    HighlightStarPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChatRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonToggleModule,
    MatSnackBarModule,
  ],
  providers: [DatePipe],
})
export class ChatModule {}
