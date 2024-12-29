import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './tasks/task/task.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './shared/card/card.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

// With standalone components, you explicitly have to tell angular that which components are you using in a particular file by importing them in import array.
// But with modules you don't have to do that, you just have to make a parent module.
// Modules are used to group components together.
@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent], // for non-standalone components
  bootstrap: [AppComponent], // root component to start the application with
  imports: [BrowserModule, SharedModule, TasksModule], // All the in-built pipes are included by the BrowserModule
  // BrowserModule is only meant to be used for root module
  // imports: [BrowserModule, HeaderComponent, UserComponent, TaskComponent],
  // can be used for standalone components you want to register in this module
  // It can also be used for importing other modules
  // And you can not just add Standalone Components to modules, but also modules to Standalone Components.
})
export class AppModule {}
