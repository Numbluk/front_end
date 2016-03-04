var invoices = {};
invoices.foo = 130;
invoices.bar = 250;

var payments = {
  foo: 80,
  bar: 55
};

var payments_received = 0;
invoices.foo -= payments.foo;
invoices.bar -= payments.bar;

payments_received = payments.foo + payments.bar;
console.log(payments_received);

var remaining_due = 0;
for (var prop in invoices) {
  remaining_due += invoices[prop];
}

var second_invoices = Object.create(invoices);
console.log(second_invoices.foo);
second_invoices.foo = 0;
console.log(second_invoices.foo);

var Invoices = {
  foo: 130,
  bar: 250
};

var outstanding_invoices = [];
outstanding_invoices.push(Object.create(Invoices));
outstanding_invoices.push(Object.create(Invoices));

Object.freeze(Invoices);
console.log(Invoices.foo);
Invoices.foo = 0;
console.log(Invoices.foo);

outstanding_invoices[0].foo = 0;
console.log(outstanding_invoices[0].foo);
console.log(Object.isFrozen(outstanding_invoices[0]));

function newInvoices(clients) {
  clients = clients || {};
  var invoices = {
    foo: clents.foo || 130,
    bar: clents.bar || 250
  };
  invoices.getTotal = function() {
    return invoices.foo + invoices.bar;
  };
  return invoices;
}
outstanding_invoices.push(newInvoices());
outstanding_invoices.push(newInvoices());

outstanding_invoices[0].foo = 0;
console.log(outstanding_invoices[1].foo);

outstanding_invoices.push(newInvoices(undefined, 400));
