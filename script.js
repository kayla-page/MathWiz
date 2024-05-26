function solveMathProblem() {
    const mathProblem = document.getElementById('mathProblem').value;
    const solutionDiv = document.getElementById('solution');

    try {
        // Using math.js to parse and simplify the expression
        const simplified = math.simplify(mathProblem);
        const steps = `Simplified form: ${simplified.toString()}`;

        // Display the result
        solutionDiv.innerHTML = `<p>${steps}</p>`;
    } catch (error) {
        solutionDiv.innerHTML = `<p>There was an error solving the problem: ${error.message}</p>`;
    }
}

