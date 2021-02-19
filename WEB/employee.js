
//write
var database = firebase.database();

function writeUserData(userId) {
    firebase.database().ref('users/' + userId).set({
      EmployeeName: EmployeeName,
      EmpoyeeId: EmployeeId,
      BodyTemparature: BodyTemparature,
      BloodPressure: BloodPressure,
      Respiration: Respiration,
      Glucose: Glucose,
      HeartRate: HeartRate,
      OxgenSaturation: OxgenSaturation,
      ElectroCardiogram: ElectroCardiogram,
      email: email,
      
    });
  }

//read

function writeNewPost(uid, username, picture, title, body) {
    // A post entry.
    var postData = {
        EmployeeName: EmployeeName,
        EmpoyeeId: EmployeeId,
        BodyTemparature: BodyTemparature,
        BloodPressure: BloodPressure,
        Respiration: Respiration,
        Glucose: Glucose,
        HeartRate: HeartRate,
        OxgenSaturation: OxgenSaturation,
        ElectroCardiogram: ElectroCardiogram,
        email: email, 
    };
  
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').push().key;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  
    return firebase.database().ref().update(updates);
  }

  firebase.database().ref('users/' + userId).set({
    EmployeeName: EmployeeName,
        EmpoyeeId: EmployeeId,
        BodyTemparature: BodyTemparature,
        BloodPressure: BloodPressure,
        Respiration: Respiration,
        Glucose: Glucose,
        HeartRate: HeartRate,
        OxgenSaturation: OxgenSaturation,
        ElectroCardiogram: ElectroCardiogram,
        email: email, 
    
  }, (error) => {
    if (error) {
      // The write failed...
    } else {
      // Data saved successfully!
    }
  });


//   var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
//   starCountRef.on('value', (snapshot) => {
//     const data = snapshot.val();
//     updateStarCount(postElement, data);
//   });
  
  