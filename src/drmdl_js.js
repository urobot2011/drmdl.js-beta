//drmdl.js v1.0.0
var drmdl_js_v = '1.0.0';
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

drmdl_js.prototype.plugin_add = function(src) {
	/*_$('head').appendTo(`
    <script src="`+src+`"></script>
    `);
	_$('body').prepend(`
    <script src="`+src+`"></script>
    `);*/
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
};

function _$(name){
	return new drmdl_js(name);
}

function $$$(){
	function $(name){
		return new drmdl_js(name);
	}
}
// replace jquery
// no jquery crash