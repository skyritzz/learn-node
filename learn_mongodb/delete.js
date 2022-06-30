const dbConnect = require('./mongodb');

const deleteData = async ()=>{
    const db = await dbConnect();
    const result = await db.deleteMany({
        title: ' '
    })
    console.log(result);
    if(result.acknowledged)
    {
        console.log("record deleted");
    }
    
}
deleteData();