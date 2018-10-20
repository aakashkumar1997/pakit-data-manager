function change_tab(id){
	document.getElementById('users_tab_id').style.backgroundColor = "#F4F4F4";
	document.getElementById('users_tab_id').style.color = "#4D4D4D";
	document.getElementById('send_tab_id').style.backgroundColor = "#F4F4F4";
	document.getElementById('send_tab_id').style.color = "#4D4D4D";
	document.getElementById('travel_tab_id').style.backgroundColor = "#F4F4F4";
	document.getElementById('travel_tab_id').style.color = "#4D4D4D";
	document.getElementById('users_tab_id_display').style.display = "none";
	document.getElementById('send_tab_id_display').style.display = "none";
	document.getElementById('travel_tab_id_display').style.display = "none";

	var tab_ele = document.getElementById(id);
	tab_ele.style.backgroundColor = "#4D4D4D";
	tab_ele.style.color = "#F4F4F4";
	console.log(id + '_display');
	document.getElementById(id + '_display').style.display = "block";
}

function show_more_details(id){
	var ele_num = id.substring(17);
	var parent_ele = document.getElementById('user_' + ele_num);
	var show_ele = document.getElementById('more_details_' + ele_num);
	if(show_ele.style.display === "block"){
		show_ele.style.display = "none";
		parent_ele.style.backgroundColor = "#F4F4F4";
	}else{
		show_ele.style.display = "block";
		parent_ele.style.backgroundColor = "#DDDDDD";
	}
}