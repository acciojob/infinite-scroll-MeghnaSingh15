//your code here!
let list = document.getElementById("infi-list");
list.addEventListener("scroll", function() {
	if(list.scrollTop + list.clientHeight >= list.scrollHeight){
		let li1 = document.createElement("li");
		li1.innerText = "Item 11";
		list.appendChild(li1);

		let li2 = document.createElement("li");
		li2.innerText = "Item 12";
		list.appendChild(li2);
	}
})
