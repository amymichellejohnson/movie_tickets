var Ticket ={
  price: 15,
  age: function(ageCheck) {
    if (ageCheck === "child") {
      this.price -= 7;
    } else if (ageCheck === "senior") {
      this.price -= 8;
    }
  },
  time: function(timeCheck) {
    if (timeCheck === "matinee") {
      this.price -= 5;
    }
  },
  release: function(releaseCheck) {
    if (releaseCheck < 2013 ) {
      this.price -= 8;
    }
  },
  priceValidate: function() {
    if (this.price < 4) {
      this.price = 4;
    }
  }
};

$(function() {
  $("form#age-time-release").submit(function(event) {
    event.preventDefault();
    var release = parseInt($("#release").val());
    var time = $("#time").val();
    var age = $("#age").val();

    var newTicket = Object.create(Ticket);
    newTicket.release(release);
    newTicket.time(time);
    newTicket.age(age);
    newTicket.priceValidate();

    $("#new-price").show()
    $("#price").text("$ " + newTicket.price);
    if (release === 1994) {
      $("#img").html("<img class='img' src='css/img/pulp.jpg'>")
    } else if (release === 1984) {
      $("#img").html("<img class='img' src='css/img/gremlins.jpg'>")
    } else if (release === 2014) {
      $("#img").html("<img class='img' src='css/img/inherent-vice.jpg'>")
    } else {
      $("#img").html("<img class='img' src='css/img/shogun-assassin.jpg'>")
    };

    $("#release").val("")
    $("#time").val("")
    $("#age").val("")

  });
});
