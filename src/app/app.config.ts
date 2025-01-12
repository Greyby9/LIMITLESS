import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"limitless-760a4","appId":"1:271081610858:web:77cda074632a33d498b413","storageBucket":"limitless-760a4.firebasestorage.app","apiKey":"AIzaSyAwLftNslvPuHAiBy1ew-H6ktLGmG13Obc","authDomain":"limitless-760a4.firebaseapp.com","messagingSenderId":"271081610858"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),]
};
