import React from "react";
// ============================================================
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// ============================================================

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD9X1ei4gZ5YDBy-0kDTPp1ZIko1F89ovg",
  authDomain: "it-admin-support.firebaseapp.com",
  projectId: "it-admin-support",
  storageBucket: "it-admin-support.appspot.com",
  messagingSenderId: "216350126",
  appId: "1:216350126:web:7070df146b30b64c155c3f",
  measurementId: "G-ZJ4RJHSV0W",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
