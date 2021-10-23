let query = ""
let req = {}
let results = []
let netID = "rnd94709"
let pw = "Marley0427"

let customer = inptCustomer.value
let street = inptStreet.value
let city = inptCity.value
let state = inptState.value
let zipcode = inptZip.value

btnAddCustomer.onclick = function() {
  query = "INSERT INTO customer (name, street, city, state, zipcode) VALUES ('" + customer + "', '" + street + "', '" + city + "', '" + state + "', '" + zipcode + "')"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  
  if (req.status == 200) {
    if (req.responseText == 500)
      lblMessaging.value = "Success in adding the customer " + customer
    else
      lblMessaging.value = "Error: Customer was not able to be added"
  } 
  else
    lblMessaging.value = "Error: " + req.status


}