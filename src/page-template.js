module.exports = userInput => {
  console.log(userInput);

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
        
        <div class="manager">

          <div class="manager-header">
            <h2>${userInput.managerName}</h2>
            <h2>Manager</h2>
          </div>

          <div class="manager-info">
            <h3>ID: ${userInput.managerId}</h3>
            <h3>Email: ${userInput.managerEmail}</h3>
            <h3>Office Number: ${userInput.managerOfficeNumber}</h3>
          </div>

        </div>
      
      </div>

    </body>
    </html>
    `;
};