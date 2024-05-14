import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private fs: Firestore) {}

  public getTodos(): Observable<unknown[]> {
    const todoCollection = collection(this.fs, 'todos');
    return collectionData(todoCollection, { idField: 'id' });
  }

  public addTodo(text: string): Promise<unknown> {
    let todo = { text };
    const todoCollection = collection(this.fs, 'todos');
    return addDoc(todoCollection, todo);
  }

  public deleteTodo(id: string): Promise<void> {
    const todoRef = doc(this.fs, 'todos/' + id);
    return deleteDoc(todoRef);
  }
}
