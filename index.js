var pdf = require('pdf-creator-node');
var fs = require('fs');

var html = fs.readFileSync('index.html','utf8');


var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    },
    "footer": {
        "height": "28mm",
        "contents": {
        first: 'Cover page',
        2: 'Second page', // Any page number is working. 1-based index
        default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
        last: 'Last Page'
    }
}
};

var users = [
    {
        name:"Shyam",
        age:"26"
    },
    {
        name:"Navjot",
        age:"26"
    },
    {
        name:"Vitthal",
        age:"26"
    }
]
var document = {
    html: html,
    data: {
        users: users
    },
    path: "./output.pdf"
};


pdf.create(document, options)
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.error(error)
    });


/*

var pdf = require('html-pdf');
var html = fs.readFileSync('./test/businesscard.html', 'utf8');
var options = { format: 'Letter' };
 
pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});



var pdf = require('html-pdf');
pdf.create(html).toFile([filepath, ]function(err, res){
  console.log(res.filename);
});
 
pdf.create(html).toStream(function(err, stream){
  stream.pipe(fs.createWriteStream('./foo.pdf'));
});
 
pdf.create(html).toBuffer(function(err, buffer){
  console.log('This is a buffer:', Buffer.isBuffer(buffer));
});

*/

//Given developer has a GitHub profile


/*
var doc = new jsPDF();          
var elementHandler = {
  '#ignorePDF': function (element, renderer) {
    return true;
  }
};
var source = window.document.getElementsByTagName("body")[0];
doc.fromHTML(
    source,
    15,
    15,
    {
      'width': 180,'elementHandlers': elementHandler
    });

doc.output("dataurlnewwindow");



var GitHubApi = require("github");

var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    debug: true,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    pathPrefix: "", // for some GHEs; none for GitHub
    timeout: 5000,
    headers: {
        "user-agent": "Some cool app" // GitHub is happy with a unique user agent
    }
});

github.authenticate({
    type: "basic",
    username: "username",
    password: "password"
});

*/
/* gets all repos as an array
 */

 /*

github.repos.getAll({}, function(err, list) {
    console.log( list );
});



var inquirer = require("inquirer");


//Prompted for username and favorite color

inquirer
  .prompt([

    {
        type: "input",
        message: "What is your username?",
        name: "username"
      },
    {
      type: "input",
      message: "What is your favorite color?",
      name: "color"
    }
    ]);

    //PDF profile is generated

*/