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
  }
};
