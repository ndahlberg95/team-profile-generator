module.exports = templateData => {
    console.log(templateData);
  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="./dist/style.css">
      <title>Team Profile</title>
    </head>
  
    <body>

      <div id="header">
      <h1>'My Team'</h1>
      </div>
      
      <div class="employees"></div>

    </body>
    </html>
    `;
  };