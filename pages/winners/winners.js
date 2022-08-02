async function getapi(url) {
	const user1 = await fetch(url+`/1`)
		.then(resp => resp.json());
	const user2 = await fetch(url+`/2`)
		.then(resp => resp.json());
	const user3 = await fetch(url+`/3`)
		.then(resp => resp.json());

	document.getElementById('loading').style.display = 'none';
	if (user1 && user2 && user3)
		show(user1, user2, user3);
	else
		showError();
}

getapi('https://fakestoreapi.com/users');

function show(u1, u2, u3) {
	const cards = `
		<div class="card">
			<div class="card-body">
				<span class="card-title">
					${u1.name.firstname} ${u1.name.lastname}
					<img src="../../assets/medals1.jpg" alt="medals" class="medals" />
				</span>
			</div>
		</div>

		<div class="card">
			<div class="card-body">
				<span class="card-title">
					${u2.name.firstname} ${u2.name.lastname}
					<img src="../../assets/medals2.jpg" alt="medals" class="medals" />
				</span>
			</div>
		</div>

		<div class="card">
			<div class="card-body">
				<span class="card-title">
					${u3.name.firstname} ${u3.name.lastname}
					<img src="../../assets/medals3.jpg" alt="medals" class="medals" />
				</span>
			</div>
		</div>
	`;
	document.getElementById("content").innerHTML = cards;
}

function showError() {
	const error = `<span>Error has occoured! Please try again</span>`;
	document.getElementById("content").innerHTML = error;
}
