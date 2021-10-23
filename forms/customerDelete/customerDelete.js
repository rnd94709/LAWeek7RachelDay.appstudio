/*
let query = ""
let req = {}
let results = []
let netID = "rnd94709"
let pw = "Marley0427"

customerDelete.onshow = function() {

  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  if (req.status == 200) {
    table = JSON.parse(req.responseText)
    if (table.length == 0)
      lblErrors.value = "There are no customers in the database to display."
    else {
      let output = ""
      for (i = 0; i < table.length; i++)
        output = output + table[i][1] + '\n'
      txtaCustomerList.value = output
    }
  } else
    lblError.value = "Error code: " + req.status
}

btnDelete.onclick = function() {
  let customerDelete = inptCustomerDelete.value
  let logic = false
  for (i = 0; i < table.length; i++) {
    if (customerDelete == table[i][1]) {
      logic = true
      break
    }
  }
  if (logic == false)
    lblMessages.value = "This customer does not exist"
  else if (logic == true) {
    query = "DELETE FROM customer WHERE name = '" + customerDelete + "'"


    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200)
      if (req.responseText == 500)
        lblMessages.value = "Success in deleting customer: " + customerDelete
    else
      lblMessages.value = "Error while deleting " + customerDelete
    else
      lblMessages.value = "Error code: " + req.status
  }
}
*/