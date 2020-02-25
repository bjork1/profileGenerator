/*module.exports = function ProfileGen(userInfo) {

    this.name = userInfo.name;

    this.html = `<!DOCTYPE html>
    <html>
        <head>
            <mate charest="utf-8" />
            <title>Hello world!</title>
        </head>
        <body>
            <h1>User List</h1>
            <ul>
                {{#each users}}
                <li>Name: {{this.name}}</li>
                <li>Age: {{this.age}}</li>
                <br>
            {{/each}}
            </ul>
        </body>
    </html>`

}
*/

var pdf = require('pdf-creator-node');
var fs = require('fs');

var html = fs.readFileSync('index.html', 'utf8');

var inquirer = require("inquirer");

var axios = require('axios');








//console.log(userDetails);





//Prompted for username and favorite color
this.userDetails = {};

//this.getUserDetails = async function() {


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
    ])




    .then(answers => {




        axios.get(`https://api.github.com/users/${answers.username}`)
            .then(function (response) {
                
                let avatar_url = response.data.avatar_url;
                
                let url = response.data.url
                let html_url = response.html_url;
                
                let blog = response.data.blog;
                let location = response.data.location;
                let email = response.data.email;
                
                let bio = response.data.bio;
                let public_repos = response.data.public_repos;
                let public_gists = response.data.public_gists;
                let followers = response.data.followers;
                let following = response.data.following;
                
                console.log(response)
                html = `<!DOCTYPE html>
                <html>
                    <head>
                        <mate charest="utf-8" />
                        <title>Hello world!</title>
                    </head>
                    <body>
                        <h1>User List</h1>
                        <ul>
                            
                            <li>Name: ${answers.username}</li>
                            <li>Avatar_url :<img src = ${avatar_url} ></li>
                            <li>Avatar_url : ${url}</li>
                            <li>Avatar_url : ${html_url}</li>
                            <li>Avatar_url : ${blog}</li>
                            <li>Avatar_url : ${location}</li>
                            <li>Avatar_url : ${email}</li>
                            <li>Avatar_url : ${bio}</li>
                            <li>Avatar_url : ${public_repos}</li>
                            <li>Avatar_url : ${public_gists}</li>
                            <li>Avatar_url : ${followers}</li>
                            <li>Avatar_url : ${following}</li>
                            <li>Age: 0</li>
                            
                      
                        </ul>
                    </body>
                </html>`


                var document = {
                    html: html,
                    data: {
                        answers: answers
                    },


                    path: "./output.pdf"
                };

                var options = {
                    format: "A3",
                    orientation: "portrait",
                    border: "10mm",
                    header: {
                        height: "45mm",
                        contents: '<div style="text-align: center; background-color:' + answers.color + '">Author: Andrew Bjork</div>'
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

                pdf.create(document, options)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(error => {
                        console.error(error)
                    });
            })
            .catch(function (error) {
                console.log(error);
            });


        



        /*
                var document = {
                    html: html,
        
        
                    data: {
                        users: users,
                    },
                    path: "./output.pdf"
                };
                */



        // Know this works






    });



    //PDF profile is generated







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