xxx = document.querySelector("#forming");

xxx.addEventListener('submit', async function(event) {
    event.preventDefault();
    const x2 = document.getElementById("query").value;

    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${x2}`)
    const data = await response.json();
    console.log(data);
});