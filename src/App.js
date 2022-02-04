import logo from './logo.svg';
import './App.css';

 
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






function App() {
  return (
    <div className="App">
      <AllInvoices></AllInvoices>
      </header>
    </div>
  );
}

export default App;
