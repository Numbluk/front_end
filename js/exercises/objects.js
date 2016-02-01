var invoices = {
	unpaid: [],

	add: function (clientName, amountOwed) {
		this.unpaid.push({
			clientName: clientName,
			amountOwed: amountOwed
		})
	},

	totalDue: function () {
		var total = 0;
		for (var i = 0; i < this.unpaid.length; i++) {
			total += this.unpaid[i].amountOwed;
		}
		return total;
	}
};

invoices.paid = [];
invoices.payInvoice = function(name) {
	var unpaid = [];
	for(var i= 0; i < this.unpaid.length; i++) {
		if(this.unpaid[i].clientName != name) {
			unpaid.push(this.unpaid[i]);
		}
		else {
			this.paid.push(this.unpaid[i]);
		}
	}
	this.unpaid = unpaid;
}

invoices.totalPaid = function() {
	var total = 0;
	for(var i = 0; i < this.paid.length; i++) {
		total += this.paid[i].amountOwed;
	}
	return total;
}

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);

invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");

console.log("Total paid: " + invoices.totalPaid());
console.log("Total due: " + invoices.totalDue());