module.exports = templateData => {
    console.log(templateData);
  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
    </head>
  
    <body>
      <h1>'Team Profile'</h1>
      
      <div class="team-leader"> 
        <h2>${tlNameInput}</h2>
        <h3>${tlIdInput}</h3>
        <h3>${tlEmailInput}</h3>
      </div>

      <div class="engineer"> 
        <h2>${engineerNameInput}</h2>
        <h3>${engineerIdInput}</h3>
        <h3>${engineerEmailInput}</h3>
        <h3>${engineerGithubInput}</h3>
      </div>

      <div class="intern"> 
        <h2>${internNameInput}</h2>
        <h3>${internIdInput}</h3>
        <h3>${engineerEmailInput}</h3>
        <h3>${schoolInput}</h3>
      </div>

    </body>
    </html>
    `;
  };