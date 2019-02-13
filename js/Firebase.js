<!--Inclui a funçao firebase-->
<script src="https://www.gstatic.com/firebasejs/5.8.2/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDa1HqxGVPpA9edWSpoCfPhMqIj3cmeGK8",
    authDomain: "blog-eg-admin.firebaseapp.com",
    databaseURL: "https://blog-eg-admin.firebaseio.com",
    projectId: "blog-eg-admin",
    storageBucket: "blog-eg-admin.appspot.com",
    messagingSenderId: "34753559356"
  };
  firebase.initializeApp(config);
  service cloud.firestore {
match /databases/{database}/documents {
  match /{document=**} {
    allow read, write;
  }
}
}
</script>
