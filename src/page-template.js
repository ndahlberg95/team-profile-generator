module.exports = templateData => {
  console.log(templateData);

  return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="style.css">
      <title>Team Profile</title>
    </head>
  
    <body>

      <div class="header">
      <h1>My Team</h1>
      </div>
      
      <div class="employees">
        
        <div id="manager">
          <div>
            <h2></h2>
            <h2>Manager</h2>
          </div>

          <div>
            <h3>ID:</h3>
            <h3>Email:</h3>
            <h3>Office Number:<h3>
          </div>

        </div>
      
      </div>

    </body>
    </html>
    `;
};