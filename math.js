function solveMathProblem() {
    const mathProblem = document.getElementById('mathProblem').value;
    const solutionDiv = document.getElementById('solution');

    try {
        // Using math.js library for solving the problem
        const math = window.math;
        const steps = math.simplify(mathProblem).toString();

        solutionDiv.innerHTML = `<p>${steps}</p>`;
    } catch (error) {
        solutionDiv.innerHTML = `<p>There was an error solving the problem: ${error.message}</p>`;
    }
}
