// src/utils/sendContactForm.js
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebaseConfig.js";

export const sendContactForm = async (formData) => {
  try {
    await addDoc(collection(db, "contactMessages"), {
      ...formData,
      createdAt: Timestamp.now(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form: ", error);
    return { success: false, error };
  }
};
