'use strict';

function words() {

	this.adj = function() {
		this.confused = true;
		this.curious = true;
		this.fancy = true;
		this.dull = true;
		this.fluttering = true;
	};

	this.vrb = function() {
		this.infect = true;
		this.chop = true;
		this.run = true;
		this.stitch = true;
		this.nod = true;
	};

	this.nn = function() {
		this.kidney = true;
		this.bottle = true;
		this.donkey = true;
		this.monkey = true;
		this.pedal = true;
	};

	this.rando = function(obj) {
		var arr = Object.keys(obj);
		var rnd = arr[Math.floor(Math.random() * arr.length)]
		return { wrd: rnd };
	};

	this.all = function(obj) {
		return { wrdLst: Object.keys(obj) };
	};

	this.chkWrd = function(wrd, obj) {
		if(obj.hasOwnProperty(wrd)) {
			return { msg: wrd + " - sorry, already exist" }
		} else {
			obj[wrd] = true;
			return { msg: wrd + " - has been added"}
		};
  }
}

module.exports = words;