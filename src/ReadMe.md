Download Flurree
Open Mac os
 
open terminal and insert brew tap fluree/flureedb
 
brew install fluree/flureedb/flureedb
click enter
after download check default ui it should be port 8090
 
restart your machine
NOTE: Ecounter error message when trying to start fluree
reasson: fluree requires  minimum java 11 to run
ope safari and go to oracle java sdk
install java (type)dmg
go to download to install on you mac
inser you touch id or sign in you password to download
NOTE: I am installing 17.0.2 package
close install browser
open terminal
write echo $SHELL
click enter
NOTE: you will see bin/zsh
this means you have to handle instructions for zsh
 
write
vim ~/ .zshrc or vi ~/ .zshrc
click enter
NOTE am going to use VI enditor for this
hit i for insert
write
export JAVA_HOME=$(/usr/libexec/java_home)
hit ecs
and exit
open terminal echo $Java_HOME
NOTE: this will point to where the java was installed
NOW continue with Fluree
CREATING SCHEMA
npx create-react-app invoce-example:cd incoice-example cp ../flureeworker.js; public npm link fluree-react;code .
 
NOTE this is going to set up vanilla react-app for me to add some code inti.
click ycearting a shema
 
now we have a basic react application
npm run build
open another window a start fluree
open transaction copy in schemas example
 
 
// - [items] ->   tag
// - cost ->   integer
 
// - organization org
// - name         - unique string
// - [employees]   (_user) reference to user
 
[{
    "_id": "_collection",
    "name":  "invoice",
},
{
    "_id": "_predicate",
    "name": "invoice/id",
    "type": "string",
    "unique": true,
},
{
    "_id": "_predicate",
    "ne": "invoice/buyer",
    "type": "ref",
    "restrictCollection": "org",
},
{
    "_id": "_predicate",
    "ne": "invoice/seller",
    "type": "ref",
    "restrictCollection": "org",
},
{
    "_id": "_predicate",
    "name": "invoice/items",
    "multi": true,
},
in the result check for the hash
 
 
create basic transaction
example
 
//ass some org and employee
[{
    "_id": "org",
    "name": "Deloitte",
    "employees": ["_user$chrizteroo"]
},
{
    "_id": "org",
    "name": "Fluree",
    "employee": ["_user$chris" , "_user$scott"]
 
},
{
    "_id": "org",
    "name": "NewCo",
    "employees": ["_user$scott" , "_user$"]
},
{
    "_id": "_user$brian",
    "username": "brian",
    "auth":["_auth$brian"]
}
{
    "_id": "_user$scott",
    "username": "scott",
    "auth":["_auth$scott"]
},
{
    "_id": "_user$chrizteroo",
    "username": "chrizteroo",
    "auth":["_auth$chrizteroo"]
},
"_id": "_user$chris",
    "username": "chris",
    "auth":["_auth$chris"]
 
 
 
Create basic queries
 
example
{
 
"select": [
   "*
    {"invoice/buyer" ["*"]} ,
    {"invoice/seller" ["*"]}
   ],
"from": "invoice"
}
 
NOTE: list of buyer and seller will show
Next I am going to render fluree theough the react fluree app.js and add the followings to the existing code
example:
 
import{
  ReactConnect,
  flureeProvider,
  flureeQl,    
  TimeTravel,
} from'fluree-react';
 
const myconn = ReactConnect({
  servers: "http://localhost:8080",
  ledger: "example/invoice"
});
 
function Invoice({invoice}){
const invoiceId = "1234";
const invoiceBuyer = "Test Buyer";
const invoiceSeller = "Test Seller";
const invoiceItems = "widget";
 
return {
<tr>
<td>{InvoiceId}</td>
<td>{InvoiceBuyer}</td>
<td>{InvoiceSeller}</td>
<td>{InvoiceItems}</td>
</tr>
};
 
}
 
function AllInvoices({ data }) {
const invoiceData = data && data.results || [[]];
const invoiceItems = invoiceData.map(invoice => <Invoice invoice={invoice}></Invoice)
returns {
<table>
<tr>
 
<tr>Invoice ID</tr>
<tr>Invoice Buyer</tr>
<tr>Invoice Seller</tr>
<tr>Invoice Items</tr>
</tr>
(invoiceItems)
</table>
};
}
 
 
 
NOTE: Remove React js function
and replace with
<Allinvoices></AllInvoices>
 
refresh the rect page
all stattic page should show.
 
It did not show
NOTE:
I am suppose to wrap the Fluree Localhost 8080
 
 Fluree can inject query result into data variables This can be done by creating a ne component
 example All invoices
 teh we can inject the select * query into it
 that will let us have a new component that raps query results around the existing components and eject the result directly from fluree

 
 
 