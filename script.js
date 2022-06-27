button.onclick = () =>  {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var delivery = document.getElementById("delivery").value;

    var url = "https://wa.me/923438981286?text=" 
    + "Name: " + name + "%0a"
    + "E-mail: " + email + "%0a"
    + "Phone: " + phone + "%0a"
    + "City: " + city + "%0a"
    + "Address: " + address + "%0a"
    + "Delivery: " + delivery;

    window.open(url, '_blank').focus();
}
