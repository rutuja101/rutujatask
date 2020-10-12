<script> 
	let fetchBtn = document.getElementById("fetchBtn"); 


	fetchBtn.addEventListener("click", buttonclickhandler); 

	function buttonclickhandler() { 

		// Instantiate an new XHR Object 
		const xhr = new XMLHttpRequest(); 

		// Open an obejct (GET/POST, PATH, 
		// ASYN-TRUE/FALSE) 
		xhr.open("GET", 
"https://ltv-data-api.herokuapp.com/api/v1/records.json?email=doesmith@example.com", true); 

		// When response is ready 
		xhr.onload = function () { 
			if (this.status === 200) { 

				// Changing string data into JSON Object 
				obj = JSON.parse(this.responseText); 

				// Getting the ul element 
				let list = document.getElementById("list"); 
				str = ""
				for (key in obj.data) { 
					str += `<li>${obj.data[key].employee_name}</li>`; 
				} 
				list.innerHTML = str; 
			} 
			else { 
				console.log("File not found"); 
			} 
		} 

		// At last send the request 
		xhr.send(); 
	} 
</script> 
