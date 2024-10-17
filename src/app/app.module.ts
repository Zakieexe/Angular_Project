// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// Import the Components
import { AppComponent } from './app.component';  // This must be a default export
import { DummyComponent } from './dummy/dummy.component';
import { MainComponent } from './main/main.component';
import { Child1Component } from './main/child1/child1.component';
import { Child2Component } from './main/child2/child2.component';

// Generated component

@NgModule({
  declarations: [
    AppComponent,  // Declaring AppComponent here
    DummyComponent,
    MainComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrapping with AppComponent
})
export class AppModule {}
