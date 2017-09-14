import { Component, Input, OnInit } from '@angular/core';

import { Exercise, ExerciseService } from '../../models';

@Component({
  moduleId: module.id,
  selector: 'gj-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
  title = 'Exercises';
  
  exercises: Exercise[];
  constructor(private exerciseService: ExerciseService) { }

  getExercises() {
    this.exercises = [];

    this.exerciseService.getExercises()
      .subscribe(exercises => {
        this.exercises = exercises;
      });
  }

  ngOnInit() {
    //componentHandler.upgradeDom();
    this.getExercises();
    /*this.dbResetSubscription = this.characterService.onDbReset
      .subscribe(() => this.getCharacters());*/
  }

}
