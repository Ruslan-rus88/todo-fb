import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';

import { environment } from '../environments/environment';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: environment.apiKey,
  authDomain: 'todo-list-5972a.firebaseapp.com',
  databaseURL:
    'https://todo-list-5972a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'todo-list-5972a',
  storageBucket: 'todo-list-5972a.appspot.com',
  messagingSenderId: '540088207525',
  appId: '1:540088207525:web:58330d654069c75fbfe54c',
  measurementId: 'G-475NRMGMV4',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
    ]),
  ],
};
