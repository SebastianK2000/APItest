

fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": 'USE YOUR KEY HERE'
	}
})
.then(response => response.json())
.then(response => {
    console.log(response);
	console.log(response.content);
})
.catch(err => {
	console.log(err);
});