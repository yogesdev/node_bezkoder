const connection = require('../config/db');

module.exports.UserData =    (req, res) => {
  console.log('I\'m here');
 
  var insert_stmt = 'insert into rv_users (contact_name,email_address,password) VALUES (?,?,?)';
        var insert_vals = ['Administrator2','admin3@example.com','21232f297a57a5a743894a0e4a801fc3'];	 
  const insertion = dbc.query(insert_stmt,insert_vals, (err,result)=>{
     
    
    if(err){        
        var resp= {data:{msg:'err categories ',status:'error', return_data:'false'}} ;
        return resp;
    }
    else{  
      console.log('ress');
      var resp=  {data:{msg:'Main categories ',status:'success', return_data:result}};    
      return resp;        
    }
});
connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err){
    conso
    throw err}

  console.log('The solution is: ', rows[0].solution);
  return { username: rows };
});
 
// connection.query('SELECT 1 + 1 AS solution', (err,row,fields) => {
//   console.log(row[0].solution)
// }) 

  
}