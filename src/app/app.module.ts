import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { MessageBubbleComponent } from './message-bubble/message-bubble.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ButtonComponent } from './button/button.component';
import { InputTextComponent } from './input-text/input-text.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomBarComponent,
    MessageBubbleComponent,
    TopbarComponent,
    ButtonComponent,
    InputTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
