//drmdl.js v1.0.0
var drmdl_js_v = '1.0.0';
var drmdl_plugin_v = [];
function drmdl_js(ioc) {
    this.ioc = ioc;
	this.ioce = document.querySelectorAll(ioc);
}

drmdl_js.prototype.html = function(html = "jsnosj",for_html = "for continue!") {
	var d_f_for1_var = 0;
	if(for_html == "for continue!"){
		for (let elem of this.ioce) {
      	  if(html == "jsnosj"){
			  return elem.innerHTML;
		  }else{
			  elem.innerHTML = html;
		  }
		}
	}else{
		for (let elem of this.ioce) {
			if(for_html == d_f_for1_var){
				if(html == "jsnosj"){
			  		return elem.innerHTML;
		  	    }else{
			        elem.innerHTML = html;
		        }
			}
			d_f_for1_var++;
		}
	}
};

/*drmdl_js.prototype.attr = function(attr_name,attr_text = "just look!",attr_n = "for continue!") {
	var d_f_for1_var = 0;
	if(attr_n == "for continue!"){
		for (let elem of this.ioce) {
      	  if(attr_text == "just look!")return elem.getAttribute(attr_name);
		  if(attr_text != "just look!")elem.getAttribute(attr_name,attr_text);
		}
	}else{
		for (let elem of this.ioce) {
			if(attr_n == d_f_for1_var){
				if(attr_text == "just look!")return elem.getAttribute(attr_name);
		        if(attr_text != "just look!")elem.getAttribute(attr_name,attr_text);
			}
			d_f_for1_var++;
		}
	}
};*/

drmdl_js.prototype.attr = function(attr_name,attr_n = "for continue!") {
	var d_f_for1_var = 0;
	if(attr_n == "for continue!"){
		for (let elem of this.ioce) {
      	  return elem.getAttribute(attr_name);
		}
	}else{
		for (let elem of this.ioce) {
			if(attr_n == d_f_for1_var){
				return elem.getAttribute(attr_name);
			}
			d_f_for1_var++;
		}
	}
};

drmdl_js.prototype.attr_app = function(attr_name,attr_text,attr_n = "for continue!") {
	var d_f_for1_var = 0;
	if(attr_n == "for continue!"){
		for (let elem of this.ioce) {
		  return elem.getAttribute(attr_name,attr_text);
		}
	}else{
		for (let elem of this.ioce) {
			if(attr_n == d_f_for1_var){
				return elem.getAttribute(attr_name,attr_text);
			}
			d_f_for1_var++;
		}
	}
};

drmdl_js.prototype.prepend = function(html,for_html = "for continue!") {
	var d_f_for1_var = 0;
	if(for_html == "for continue!"){
		for (let elem of this.ioce) {
    		elem.innerHTML = html+elem.innerHTML;
		}
	}else{
		for (let elem of this.ioce) {
			if(for_html == d_f_for1_var){
    			elem.innerHTML = html+elem.innerHTML;
			}
		}
	}
};

drmdl_js.prototype.prepend = function(html,for_html = "for continue!") {
	var d_f_for1_var = 0;
	if(for_html == "for continue!"){
		for (let elem of this.ioce) {
    		elem.innerHTML = html+elem.innerHTML;
		}
	}else{
		for (let elem of this.ioce) {
			if(for_html == d_f_for1_var){
    			elem.innerHTML = html+elem.innerHTML;
			}
		}
	}
};

drmdl_js.prototype.appendTo = function(html,for_html = "for continue!") {
	var d_f_for1_var = 0;
	if(for_html == "for continue!"){
		for (let elem of this.ioce) {
    		elem.innerHTML = elem.innerHTML+html;
		}
	}else{
		for (let elem of this.ioce) {
			if(for_html == d_f_for1_var){
    			elem.innerHTML = elem.innerHTML+html;
			}
		}
	}
};

drmdl_js.prototype.ajax = function(src) {
	function loadDoc(src) {
		const xhttp = new XMLHttpRequest();
		xhttp.onload = function() {
			return this.responseText;
		}
		xhttp.open("GET", src);
		xhttp.send();
	}
	return loadDoc(src);
};

/*drmdl_js.prototype.plugin_add = function(src) {
	var error_Fff_a_s_d_1 = `\/*_$('head').appendTo(`
    <script src="`+src+`"></script>
    `);
	_$('body').prepend(`
    <script src="`+src+`"></script>
    `);*\/`;
	function loadDoc(src) {
		const xhttp = new XMLHttpRequest();
		xhttp.onload = function() {
			return this.responseText;
		}
		xhttp.open("GET", src);
		xhttp.send();
	}
	var script = `
	<script>
	`+loadDoc(src)+`
	</script>`;
	_$('body').appendTo(script);
};*/

drmdl_js.prototype.plugin_add = function(src) {
	_$('body').appendTo(`
	<script>`
		+script+`
	</script>`);
};

/*drmdl_js.prototype.addClass = function(...name) {
	if(name.length > 0){
		var aaaa = name[0];
		for (var i = 1; i < name.length; i++) {
    		aaaa += " "+name[i];
		}
		this.ioce.classList.add(aaaa);
	}else{
		this.ioce.classList.add(name);
	}
};*/

drmdl_js.prototype.addClass = function(...name) {
	if(name.length > 0){
		var aaaa = "";
		for (var i = 0; i < name.length; i++) {
    		aaaa += " "+name[i];
		}
		for (let elem of this.ioce) {
			elem.className += aaaa;
		}
	}else{
		for (let elem of this.ioce) {
			elem.className += name;
		}
	}
};

drmdl_js.prototype.removeClass = function(...name) {
	if(name.length > 0){
		for (let elem of this.ioce) {
			for (var i = 0; i < name.length; i++) {
    			elem.classList.remove(name[i]);
			}
		}
	}else{
		for (let elem of this.ioce) {
			elem.classList.remove(name);
		}
	}
};

drmdl_js.prototype.toggleClass = function(...name) {
	if(name.length > 0){
		for (let elem of this.ioce) {
			for (var i = 0; i < name.length; i++) {
				elem.classList.toggle(name[i]);
			}
		}
	}else{
		for (let elem of this.ioce) {
			elem.classList.toggle(name);
		}
	}
};

drmdl_js.prototype.AlternateToggleClass = function(...name) {
	if(name.length > 0){
		for (let elem of this.ioce) {
			for (var i = 0; i < name.length-1; i++) {
				elem.classList.toggle(name[i]);
				elem.classList.toggle(name[i]);
				elem.classList.toggle(name[i+1]);
			}
		}
	}else{
		for (let elem of this.ioce) {
			elem.classList.toggle(name);
		}
	}
};

function _$(name){
	return new drmdl_js(name);
}
// replace jquery
// no jquery crash