function _(x){
  return document.getElementById(x);
};


var total = _("total");
var total_text = _("total").innerHTML;
var products = document.getElementsByName("products");
var addons = document.getElementsByName("addons");



// Runs every time you check/uncheck a box
function updateTotal(){
  
	var selection = this.nextElementSibling.children[0].innerHTML;	

	_("submit1").removeAttribute("disabled");

		// Radio inputs
		if(box_1.style.display == "block"){

				if(this.checked){
				        total_text = parseFloat(this.value);
				        _("products_status").innerHTML = selection;
				}
		};

		// Checkbox inputs
		if(box_2.style.display == "block"){

				if(this.checked){
			        total_text += parseFloat(this.value);

			    }
			    else{
			        total_text -= parseFloat(this.value);
			    }
		};

	total.innerHTML = total_text.toFixed(2);
};





function checkProducts(){

	_("box_1").style.display = "block";
	_("box_2").style.display = "none";
	_("box_tax").style.display = "none";
	_("box_submitted").style.display = "none";

	_("status_1").style.display = "none";
	_("status_2").style.display = "none";

		for(var i=0;i<products.length;i++){
			products[i].onclick = updateTotal;
		};
};





function checkAddons(){

	_("box_1").style.display = "none";
	_("box_2").style.display = "block";
	_("box_tax").style.display = "none";
	_("box_submitted").style.display = "none";

	_("status_1").style.display = "block";
	_("status_2").style.display = "none";

	_("addons_status").innerHTML = "";

		for(var i=0;i<addons.length;i++){
			addons[i].onclick = updateTotal;
		};
};





function updateTax(){

	_("box_1").style.display = "none";
	_("box_2").style.display = "none";
	_("box_tax").style.display = "block";
	_("box_submitted").style.display = "none";

	_("status_1").style.display = "block";
	_("status_2").style.display = "block";

		// Loop that writes in the add-ons on the tax page
		for(var i=0;i<addons.length;i++){
			if(addons[i].checked){
		        addons_status.innerHTML += (addons[i].nextElementSibling.children[0].innerHTML + "<br />");
		    }
		};

	_("tax").innerHTML = ("&raquo; $" + (total_text * 1.12).toFixed(2));

};



function submitted(){

	_("box_1").style.display = "none";
	_("box_2").style.display = "none";
	_("box_tax").style.display = "none";
	_("box_submitted").style.display = "block";

	_("status_1").style.display = "none";
	_("status_2").style.display = "none";
	_("total_par").style.display = "none";	

};



window.addEventListener("load", checkProducts, false);