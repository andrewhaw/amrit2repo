$(document).ready( function() { 

	
	// EMAIL PROTECTION
	$("a[data-e]").click(function(e) {
		e.preventDefault();
		var email = $(this).attr("data-e");
		var href = decrypt(email)+"?subject=SIAT Design Jam - Question";
		setTimeout(function() {window.location = href}, 500);
	});
	
	$("a[data-e]").hover(function() {
		var email = $(this).attr("data-e");
		$(this).attr("href", decrypt(email)+"?subject=SIAT Design Jam - Question" );
	}, function() {
		$(this).attr("href", "");
	});
	
	function decrypt (s) {
		s = s.encrypt();
		s = s.replace(/[\@\&]/g, "");
		s = s.replace(/[\-\;\,]/g, "@");
		s = s.replace(/[\(\^\+]/g, "-");
		s = s.replace(/[\(\_\)]/g, ":");
		s = s.replace(/[\%\?\|]/g, "_");
		s = s.replace(/[\]\=\#]/g, "?");
		s = s.replace(/[\$\[\{]/g, "=");
		s = s.replace(/[\>\.\}]/g, "+");
		s = s.replace(/[\<\*\!]/g, "."); 
		return s;
		
		var nothing = Array("@","&");
		var period = Array("<","*","!");
		var plus = Array(">", ".", "}");
		var equal = Array("$", "[", "{");
		var question = Array("]","=","#");
		var underscore = Array("%","?","|");
		var colon = Array("(","_",")");
		var dash = Array(":", "^", "+" );
		var at = Array("-", ";", "," );

	}
	
	
});


// CUSTOM FUNCTIONS
// ROT13 Protection
String.prototype.encrypt = function(){
    return this.replace(/[a-zA-Z]/g, function(c){
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
};
