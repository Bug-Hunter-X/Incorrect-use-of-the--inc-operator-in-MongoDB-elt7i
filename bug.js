```javascript
// Incorrect use of $inc operator
db.collection('myCollection').updateOne( { "_id": ObjectId("someObjectId") }, { $inc: { "myField": "1" } } );
```