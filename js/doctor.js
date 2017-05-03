var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctor = function(illness) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ illness+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(output) {
     output.data.forEach(function(doctor){
       // Only pulling four parameters for Each Doctor
      $('#showDoctors').append("<br><li><strong> Name:</strong> " + doctor.profile.last_name + ", " + doctor.profile.first_name + " " + doctor.profile.title + "<br><strong> Bio:</strong> " + doctor.profile.bio + "</li><br>")
      });
    })
    .fail(function(error){
  });
};

exports.doctorModule = Doctor;
