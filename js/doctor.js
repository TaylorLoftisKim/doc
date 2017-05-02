var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctor = function(userIllness){
$.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ userIllness+'&location=45.5231%2C-122.6765%2C%205&user_location=37.773%2C-122.413%2C100&=0&limit=10&user_key=' + apiKey).then(function(response) {
  console.log(userIllness);
  }).fail(function(error) {
    $('#showDoctors').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
