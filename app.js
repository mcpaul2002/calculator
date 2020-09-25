const express = require ('express');
const moragan = require ('morgan');

app.get('/accounts/:id', (req, res) => {
    var account = accounts.find(c => c.id === parseInt(req.params.id));
    if (!account) res.status(404).send('The account ID does not exist.');
    res.send(account);
});


app.listen(3000,  () =>{     
    console.log('Web server running at: http://localhost:3000');     
    console.log('Press Ctrl+C to shut down the web server'); 
});