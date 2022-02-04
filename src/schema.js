//invoice (invoice)
// - id  -  unique string 
// - buyer ->   (org) reference to buyer
// - seller ->   (org) reference to seller
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
}],
