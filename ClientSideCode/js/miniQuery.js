"use strict";

var miniQuery = (function () {
    // private stuff
      // example private variable
         // var something = " " ;
      // example private function
     function elementSelector(typeIndicator) {
       if (typeIndicator === "#"){
         return function(selector){
           var elementName = selector.slice(1);
           return document.getElementById(elementName);};
       } else if (typeIndicator === "."){
         return function(selector){
           var elementName = selector.slice(1);
           return document.getElementsByClassName(elementName);};
       } else {
         return function(selector){ return document.getElementsByTagName(selector); };
       }
     }

     var classFirstOrAdd = function(element, newClass){
       element.className += element.className ? " " + newClass  : newClass;
     }

    // public stuff
    return {
      // the SweetSelector namespace functions go here:
      select: function( selector ){
        // figure out if selector is a class, id or tag
       // look at the first value of the selector variable
           // if "." it's a class, else if "#" its an id, else its a tag
       var typeIndicator = selector.slice(0,1);
       // invoke the correct getElementBy as appropriate
         // tag: getElementsByTagName("tag");
         // id: getElementByID("id");
         // class: getElementsByClassName("class");
         return (elementSelector(typeIndicator)(selector));
       // return that element
     },
     addClass: function( selector, newClass){
       var elements = this.select(selector);
       if (elements.length) {
         for (var i = 0; i < elements.length; i++) {
           classFirstOrAdd(elements[i], newClass);
         }
       } else{
         classFirstOrAdd(elements, newClass);
       }
    },
    removeClass: function( selector, oldClass){
      var elements = this.select(selector);
      if (elements.length) {
       for (var i = 0; i < elements.length; i++) {
         elements[i].classList.remove(oldClass);
       }} else{
         elements.classList.remove(oldClass); }
    },
    show: function(selector){
      var elements = this.select(selector);
      if (elements.length) {
       for (var i = 0; i < elements.length; i++) {
         elements[i].style.visibility = "visible";
       }} else{
         elements.style.visibility = "visible"; }

    },
    hide: function(selector){
      var elements = this.select(selector);
      if (elements.length) {
       for (var i = 0; i < elements.length; i++) {
         elements[i].style.visibility = "hidden";
       }} else{
         elements.style.visibility = "hidden"; }
    },

    html: function(selector, newHtml, thingToDo){
      var elements = this.select(selector);
      if (newHtml){
      elements.innerHTML = newHtml
      }else {
      return elements.innerHTML
      }
    },

    on: function(selector, action, result){
      var elements = this.select(selector);
      if (elements.length) {
       for (var i = 0; i < elements.length; i++) {
         elements[i].addEventListener(action, result);
       }} else {
         elements.addEventListener(action, result);
         }
    },
    trigger: function(selector, action){
      var elements = this.select(selector);
      if (elements.length) {
       for (var i = 0; i < elements.length; i++) {
         elements[i].dispatchEvent(new Event(action));
       }} else  {
         elements.dispatchEvent(new Event(action));
         }
       },
    ajax: function(request){
      var promise = new Promise(function(resolve, reject){
        var oReq = new XMLHttpRequest();
        oReq.open(request.type, request.url);
        if (request.data){
          oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          oReq.send(request.data);
        }else{
          oReq.send();
        }


        oReq.onload = function() {
          if (this.status >= 200 && this.status < 300){
            resolve(this.response);
          } else {
            reject(this.statusText);
          }
        }
        oReq.onerror = function() {
          reject(this.statusText);
        }
      });
      return promise;
    },
    ready: function(event){
      if (document.readyState === "complete"){
        event();
      } else {
      document.addEventListener("DOMContentLoaded", function(){
        event();
      })
    }
  }
};
})();

var $ = miniQuery;
