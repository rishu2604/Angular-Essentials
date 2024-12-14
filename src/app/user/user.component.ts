import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex];
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  // getter function, It is usable like a property so that does not need to be called and executed explicitly.
  // get ImagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  ImagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // computed is meant to be used with signals
  // It's a very efficient way of setting up a computed value because it will not be recomputed every time anything changes in this component or the overall application, but instead, it will only be recomputed if one of the Signals used inside of it.

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
