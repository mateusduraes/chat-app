import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { CommandComponent } from './components/command/command.component';
import { CompleteComponent } from './components/complete/complete.component';
import { DateComponent } from './components/date/date.component';
import { MapComponent } from './components/map/map.component';
import { MessageComponent } from './components/message/message.component';
import { RateComponent } from './components/rate/rate.component';

@NgModule({
  declarations: [
    ChatComponent,
    MessageComponent,
    CommandComponent,
    CompleteComponent,
    MapComponent,
    DateComponent,
    RateComponent,
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
  ],
})
export class ChatModule {}
