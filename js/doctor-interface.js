var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var searchedDoctors = new Doctor();
  $('#userLocation').submit(function() {
    event.preventDefault();
    var illness = $('#illness').val();
    $('#illness').val("");
    $('#showDoctors').empty();
    searchedDoctors.getDoctor(illness);
  });
});
