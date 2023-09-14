function generateHtml() {
	let input_value = document.getElementById("input_data").value;	
	input_value.replace(/\n/g, '');
	let data = JSON.parse(input_value);

	let output_cont = document.getElementById("output_data");

	for (var i = 0; i <= data.length - 1; i++) {		
		let container = document.createElement("div");
		container.classList.add("root")
		container.setAttribute("data-id", data[i].id);

		let username = document.createElement("span");
		username.classList.add("username")
		username.innerText = data[i].username;

		let videoName = document.createElement("span");
		videoName.classList.add("video_name")
		videoName.innerText = data[i].video_name;

		let additional_details = document.createElement("span");
		additional_details.classList.add("additional_details")

		let action = document.createElement("span");
		action.classList.add("type");
		action.innerText = data[i].action;

		additional_details.appendChild(action);

		container.appendChild(username);
		container.appendChild(videoName);	
		container.appendChild(additional_details);
		output_cont.append(container.outerHTML);

	}
}