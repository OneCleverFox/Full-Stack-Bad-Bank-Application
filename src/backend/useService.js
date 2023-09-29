import {firestore} from './firestore'

const saveUserToFirestore = (user) => {
    // Hier erstellen Sie eine Referenz auf die Sammlung "users" und fügen den Benutzer hinzu
    firestore
      .collection('users')
      .add(user)
      .then((docRef) => {
        console.log('User saved with ID:', docRef.id);
      })
      .catch((error) => {
        console.error('Error by saving the User in Firestore:', error);
      });
  };
  