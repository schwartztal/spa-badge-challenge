// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require handlebars.runtime
//= require handlebars
//= require_tree ./templates
//= require_tree .

$(document).ready(function(){
  bindLoadTeacherButton();
  var source  = $("#some-template").html();
  var template = Handlebars.compile(source);
  var data = { users: [
    {username: "alan", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
    {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
    {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
  ]};
  $("#content-placeholder").html(template(data));
})

var bindLoadTeacherButton = function(){
  var source  = $("#some-template2").html();
  var template = Handlebars.compile(source);

  $('#load-teachers').click(function(e){
    e.preventDefault();
    $.ajax({
      url: "/userlist"
    }).done(function(response){
      alert("Hey Tal I fixed it!")
      //if we're going to name the object in the template, we have to name it in the file thus: var data = { users: response }
      //otherwise we just take out the name and ask it directly for the thing.
      $("#content-placeholder2").html(template(response));
    }).fail(function(response){
      console.log("sorry that didn't work");
    })
  })
}
