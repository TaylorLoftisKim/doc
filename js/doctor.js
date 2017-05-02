var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctor = function(location, eachDoctor){
$.get("https://api.betterdoctor.com/2016-03-01/doctors?skip=0&limit=10&user_key=" + apiKey).then(function(response) {
  eachDoctor(response.data);
  console.log(location);
  }).fail(function(error) {
    $('#showDoctors').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
