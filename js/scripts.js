// backend logic
function Ticket(time, age, movie, price) {
  this.time = time,
  this.age = age,
  this.movie = movie,
  this.price = price
}

var purchase = new Ticket(0, 0, 0, 10);

Ticket.prototype.timeCheck = function (beepis) {
  this.time = beepis;
  if (this.time >= 17) {
    this.price += 2;
  }
}

Ticket.prototype.movieCheck = function (beepis) {
  this.movie = beepis;
  if (this.movie === "Star Wars" || this.movie === "Joker") {
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
  return this.time + ":00. the tickets for " + this.movie + " will be $" + this.price + " at the door."
}

// front end logic
var displaying = function () {
  $(".ticket-time").text(purchase.display());
  $(".results").show();
}

$(document).ready(function() {
  $("form").submit(function(event) {
    var movie = $("#movie").val();
    var time = parseInt($("#time").val());
    var type = parseInt($("#age").val());
    event.preventDefault();
    purchase.timeCheck(time);
    purchase.movieCheck(movie);
    purchase.ageCheck(type);
    purchase.display();
    displaying();
  });
});








