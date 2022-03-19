import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const actions = {
  async logIn(context: any, payload: { email: string; password: string }) {
    const auth = getAuth();
    let errorMessage = "Success";
    await signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        context.commit("setUser", user);
        // ...
      })
      .catch((error) => {
        errorMessage = error.message;
      });
    return errorMessage;
  },
  async register(context: any, payload: { email: string; password: string }) {
    const auth = getAuth();
    let errorMessage = "Success";
    createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        context.commit("setUser", user);
        // ...
      })
      .catch((error) => {
        errorMessage = error.message;
      });
    return errorMessage;
  },
};
