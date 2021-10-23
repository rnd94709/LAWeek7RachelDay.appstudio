/*
let query = ""
let req = {}
let results = []
let netID = "rnd94709"
let pw = "Marley0427"

btnviewCustomers.onclick=function(){

query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) { 
        table = JSON.parse(req.responseText)
        console.log(`The current customers are: \n ${table}`)
        if (table.length == 0)    
           lblError.value = "There are no customers in the database to display."
        else {        
           let output = ""
           for (i = 0; i < table.length; i++)
               output = output + table[i][1] + '\n'
           txtaCustomers.value = output
        } 
    } else  
        lblError.value = "Error code: " + req.status

  
}
*/