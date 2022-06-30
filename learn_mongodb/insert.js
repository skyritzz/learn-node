const dbConnect = require('./mongodb');

const insert = async ()=>{

    // const db = dbConnect();//this returns a promise
    //console.log(db);
    const db = await dbConnect();
    const result = await db.insert({
        title:"top gunn",
        year: 2020,
        score:'10',
        rating: 9
    })
    console.log(result);
}
insert();
