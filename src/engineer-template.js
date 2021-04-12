module.exports = userInput => {
    
    return `
        <div class="employee">

            <div class="engineer">

                <div class="engineer-header">
                    <h2>${userInput.engineerName}</h2>
                    <h2>Engineer</h2>
                </div>

                <div class="engineer-info">
                    <h3>ID: ${userInput.engineerId}</h3>
                    <h3>Email: ${userInput.engineerEmail}</h3>
                    <h3>Office Number: ${userInput.gitHub}</h3>
                </div>
            </div>
        </div>
    `;
}
