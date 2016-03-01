var invoices = {};
invoices["unpaid"] = [];

invoices.add = function(name, amount_owed) {
  this.unpaid.push({name: name, amount_owed: amount_owed});
};

invoices.totalDue = function() {
  total = 0;
  for(var i = 0; i < this.unpaid.length; i++) {
    total += this.unpaid[i].amount_owed;
  }
  return total;
};

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);
console.log(invoices.totalDue());

invoices.paid = [];
invoices.payInvoice = function(client) {
  var unpaid_temp = [];
  for(var i = 0; i < this.unpaid.length; i++) {
    if(this.unpaid[i].name !== client) {
      unpaid_temp.push(this.unpaid[i]);
    } else {
      invoices.paid.push(this.unpaid[i]);
    }
  }
  this.unpaid = unpaid_temp;
};

invoices.totalPaid = function() {
  total = 0;
  for(var i = 0; i < this.paid.length; i++) {
    total += this.paid[i].amount_owed;
  }
  return total;
};

invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");
console.log(invoices.totalPaid());
console.log(invoices.totalDue());
