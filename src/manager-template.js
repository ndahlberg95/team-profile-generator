module.exports = userInput => {

  return `
    <div class="employee">

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
  `;
};