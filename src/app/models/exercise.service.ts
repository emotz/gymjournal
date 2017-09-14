import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Exercise } from './exercise.model';
import { CONFIG } from '../core';

let exercisesUrl = CONFIG.baseUrls.exercises;

@Injectable()
export class ExerciseService {
  //onDbReset = this.messageService.state;

  constructor(private http: Http,
    //private exceptionService: ExceptionService
    /**private messageService: MessageService,
  private spinnerService: SpinnerService*/) {
    //this.messageService.state.subscribe(state => this.getCharacters());
  }

  addExercise(exercise: Exercise) {
    let body = JSON.stringify(exercise);
    //this.spinnerService.show();
    return <Observable<Exercise>>this.http
      .post(`${exercisesUrl}`, body)
      .map(res => res.json().data)
      .catch(this.handleError);
      //.finally(() => this.spinnerService.hide());
  }
  getExercises() {
    //this.spinnerService.show();
    return <Observable<Exercise[]>>this.http
      .get(exercisesUrl)
      .map(res => this.extractData<Exercise[]>(res))
      .catch(this.handleError);
      //.catch(this.exceptionService.catchBadResponse)
      //.finally(() => this.spinnerService.hide());
  }

  /*deleteCharacter(character: Character) {
    this.spinnerService.show();
    return <Observable<Character>>this.http
      .delete(`${charactersUrl}/${character.id}`)
      .map(res => this.extractData<Character>(res))
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());
  }

  getCharacter(id: number) {
    this.spinnerService.show();
    return <Observable<Character>>this.http
      .get(`${charactersUrl}/${id}`)
      .map(res => this.extractData<Character>(res))
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());
  }

  updateCharacter(character: Character) {
    let body = JSON.stringify(character);
    this.spinnerService.show();

    return <Observable<Character>>this.http
      .put(`${charactersUrl}/${character.id}`, body)
      .map(res => this.extractData<Character>(res))
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());
  }*/

  private handleError(error: Response) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }

  private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    return <T>(body && body.data || {});
  }
}