async function getapi(url) {
	const response = await fetch(url);
	const users = await response.json();

	document.getElementById('loading').style.display = 'none';
	if (users)
		show(users);
	else
		showError();
}

getapi('https://fakestoreapi.com/users');

function show(users) {
	let cards = ``;
	
	for (let u of users) {
		cards += `
			<div class="card">
				<div class="card-body">
				<span class="card-title">
					${u.name.firstname} ${u.name.lastname}
					<a href="../details/details.html?id=${u.id}" class="btn btn-primary">
						Details
					</a>
				</span>
				</div>
			</div>
		`;
	}
	document.getElementById("content").innerHTML = cards;
}

function showError() {
	const error = `<span>Error has occoured! Please try again</span>`;
	document.getElementById("content").innerHTML = error;
}
