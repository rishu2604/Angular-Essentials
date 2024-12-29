import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import TaskService from '../tasks.service';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  // @Output() cancel = new EventEmitter<void>();
  // @Output() add = new EventEmitter<NewTaskData>();

  @Output() close = new EventEmitter<void>();

  // private taskService = inject(TaskService) you can use constructor or inject directly.
  constructor(private taskService: TaskService) {}

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // You can also use signals with two-way binding like this
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  onCancelAddTask() {
    // this.cancel.emit();
    this.close.emit();
  }

  onSubmit() {
    // this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDate,
    // });
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );

    this.close.emit();
  }
}
