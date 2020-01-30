function Ticket(time, age, movie, price) {
  this.time = time,
  this.age = age,
  this.movie = movie,
  this.price = price
}

function Movie(name,restriction) {
  this.name = name,
  this.restriction = restriction
}

var purchase = new Ticket(0, 0, 0, 10);




Ticket.prototype.timeCheck = function (beepis) {
  this.time = beepis;
  if (this.time === 0) {
    this.price += 2;
  }
}

Ticket.prototype.movieCheck = function (beepis) {
  this.movie = beepis;
  if (this.movie === 1) {
    this.price += 5;
  }
}

Ticket.prototype.ageCheck = function (beepis) {
  this.age = beepis
  if (this.age < 10) {
    this.price -= 4;
  }
  else if (this.age >= 60) {
    this.price -= 2;
  }
}

Ticket.prototype.display = function () {
  $(".ticket-time").text(this.time + " the tickets for " + this.movie + " will be " + this.price + "$ at the door.");
  $(".results").show();
}

// front end logic
$(document).ready(function() {
  $("form").submit(function(event) {
    var movie = parseInt($("#movie").val());
    var time = parseInt($("#time").val());
    var type = parseInt($("#age").val());
    event.preventDefault();
    purchase.timeCheck(time);
    purchase.movieCheck(movie);
    purchase.ageCheck(type);
    purchase.display();
  });
});








