async function readUserIdFromURL(url) {
	let params = (new URL(document.URL)).searchParams;
	
	const user = await fetch(url+'/'+params.get('id'))
		.then(resp => resp.json());

	document.getElementById('loading').style.display = 'none';
	if (user)
		show(user);
	else
		showError();
}

readUserIdFromURL('https://fakestoreapi.com/users');


function show(user) {
	const cards = `
		<div class="card">
			<div class="card-body">
				<span class="card-title">
					<p>Name: ${user.name.firstname} ${user.name.lastname}</p>
					<p>E-mail: ${user.email}</p>
					<p>Position: ${user.id} ${checkPodium(user.id)}</p>
					<p>Phone: ${user.phone}</p>
				</span>
			</div>
		</div>
	`;
	document.getElementById("content").innerHTML = cards;
}

function checkPodium(id) {
	if (id > 3) return
	else if (id == 1) return `<img src="../../assets/medals1.jpg" alt="medals" class="medals" />`
	else if (id == 2) return `<img src="../../assets/medals2.jpg" alt="medals" class="medals" />`
	else if (id == 3) return `<img src="../../assets/medals3.jpg" alt="medals" class="medals" />`
}