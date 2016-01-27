
initialized = false;

var renderHandlebars = function(){
    Handlebars.registerHelper('link', function(object) {
      var text = Handlebars.escapeExpression(object.name);

      return new Handlebars.SafeString(
        "<a class='teacher' href='#" + text + "'>" + text + "</a> <br>"
      );
    });
  LoadTeacherList();
  initialized = true;
};


var LoadTeacherList = function(){
  var source = $.html("#teacher-list-template");
  var template = Handlebars.compile(source);
    var getData = $.ajax({
      url: "http://spabadge.com:3000/users",
      type: "get"
    });
    getData.then(function(response){
      var data = JSON.parse(response)
      $.html("#content-placeholder", template(data) );
      addTeacherListener();
    })
    getData.catch(function(response){
    });
}

var addTeacherListener = function(){
  $.on(".teacher", "click", showTeacherPage);
}

var addVoteListeners = function(){
  $.on(".btn-success", "click", addUpVote);
  //$.on(".btn-failure", "click", addDownVote)
}

var showTeacherPage = function(){
  var source = $.html("#teacher-badge-template");
  var template = Handlebars.compile(source);
  var name = location.hash.slice(1);
  debugger
  var getData = $.ajax({
    url: "http://spabadge.com:3000/users/" + name + "",
    type: "get"
    });
    getData.then(function(response){
      var data = JSON.parse(response);
      $.html("#teacher-placeholder", template(data)); addVoteListeners();
    })
    getData.catch(function(response){
    });
  // a teacher page template first
  // some ajax to get a teacher page info back
  // on success, hide the teacher list & show the teacher page
}



var addUpVote = function(){
    var badge_id = event.target.parentNode.id;
    var stringToParse = "{ value: 1, id:" + badge_id + "}";
    var toSend = JSON.stringify(stringToParse);
    var getvote = $.ajax({
      url: "http://spabadge.com:3000/votes",
      type: "post",
      data: toSend
    });
      getvote.then(function(response){
        console.log(response)

      })
      getvote.catch(function(response){
        console.log("nope")
      })

  }

var loadTheTeachers = function(){
  if (initialized) {
  } else {
  renderHandlebars();
  }
}

$.ready(loadTheTeachers);
