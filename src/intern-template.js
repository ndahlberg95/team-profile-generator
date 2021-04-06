module.exports = userInput => {
    
    return `

        <div class="intern">

            <div class="intern-header">
                <h2>${userInput.internName}</h2>
                <h2>intern</h2>
            </div>

            <div class="intern-info">
                <h3>ID: ${userInput.internId}</h3>
                <h3>Email: ${userInput.internEmail}</h3>
                <h3>Office Number: ${userInput.gitHub}</h3>
            </div>

        </div>

    `;
};