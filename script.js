function bookTicket() {

    let moviePrice =
        document.getElementById("movie").value;

    let tickets =
        document.getElementById("tickets").value;

    let totalAmount = moviePrice * tickets;

    document.getElementById("result").innerHTML =
        "<h3>Booking Successful!</h3>" +
        "Number of Tickets: " + tickets +
        "<br>Total Amount: ₹" + totalAmount;
}