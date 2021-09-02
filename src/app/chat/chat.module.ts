import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';

@NgModule({
  declarations: [ChatComponent],
  imports: [CommonModule, ChatRoutingModule],
})
export class ChatModule {}
