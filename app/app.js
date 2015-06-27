"use strict";

var $ = require("jquery");
var ui = require("jquery-ui");
var _ = require("lodash");

$(function() {

	$("#btn").click(function() {
		$.get("adj", function(res) {
			var adj = res.wrd;
			$("#adj").text(adj).fadeIn("fast");
		});

		$.get("vrb", function(res) {
			var vrb = res.wrd;
			$("#vrb").text(vrb).fadeIn("fast");
		});

		$.get("nn", function(res) {
			var nn = res.wrd;
			$("#nn").text(nn).fadeIn("fast");
		});
	});

	$(".npts").focus(function() {
		$(".bndNm").fadeOut("fast");
	});

	$("#adWrds").submit(function(e) {
		e.preventDefault();

		var adj = $("input[name=adj]").val();
		var vrb = $("input[name=vrb]").val();
		var nn = $("input[name=nn]").val();

		if(adj) {
			var adj = { wrd: adj };
			$.post("/adj", adj, function(res) {
				var rsp = res.msg;
				$("#adAdj").text(rsp).fadeIn("slow").delay(2500).fadeOut("slow");
			});
		}

		if(vrb) {
			var vrb = { wrd: vrb };
			$.post("/vrb", vrb, function(res) {
				var rsp = res.msg;
				$("#adVrb").text(rsp).fadeIn("slow").delay(2500).fadeOut("slow");
			});
		}

		if(nn) {
			var nn = { wrd: nn };
			$.post("/nn", nn, function(res) {
				var rsp = res.msg;
				console.log(rsp);
				$("#adNn").text(rsp).fadeIn("slow").delay(2500).fadeOut("slow");
			});
		}
	});

	$("#adjNpt").autocomplete({
	  source: "/adjAll",
	  position: {my: "center-10 top+10", at: "center bottom"},
	  minLength: 1,
	  search: function(e) {
	  var srch = $(e.target).val();
	  var arr = [];
	    $.get("/adjAll", function(res) {
	      _.each(res.wrdLst, function(rslt) {
	        if(_.contains((rslt), srch)) {
	        	arr.push(rslt);
	        	$("#adjNpt").autocomplete("option", "source", arr);
	        }
	      });
	    });
    }
	});

	$("#vrbNpt").autocomplete({
	  source: "/vrbAll",
	  position: {my: "center-10 top+10", at: "center bottom"},
	  minLength: 1,
	  search: function(e) {
	  var srch = $(e.target).val();
	  var arr = [];
	    $.get("/vrbAll", function(res) {
	      _.each(res.wrdLst, function(rslt) {
	        if(_.contains((rslt), srch)) {
	        	arr.push(rslt);
	        	$("#vrbNpt").autocomplete("option", "source", arr);
	        }
	      });
	    });
    }
	});

	$("#nnNpt").autocomplete({
	  source: "/nnAll",
	  position: {my: "center-10 top+10", at: "center bottom"},
	  minLength: 1,
	  search: function(e) {
	  var srch = $(e.target).val();
	  var arr = [];
	    $.get("/nnAll", function(res) {
	      _.each(res.wrdLst, function(rslt) {
	        if(_.contains((rslt), srch)) {
	        	arr.push(rslt);
	        	$("#nnNpt").autocomplete("option", "source", arr);
	        }
	      });
	    });
    }
	});

});


