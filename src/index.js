const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = event.target.children[1].value;

        fetch(`http://localhost:3000/movies/${input}`)
            .then(response => response.json())
            .then(data => {
                const title = document.querySelector("section#movieDetails h4");
                const summary = document.querySelector("section#movieDetails p");

                title.textContent = data.title;
                summary.textContent = data.summary;
            } )
    })
}

document.addEventListener('DOMContentLoaded', init);