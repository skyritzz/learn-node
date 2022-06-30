const dbconnect = require('./mongodb');

const update = async() =>{
    let db = await dbconnect();
    const result = await db.update(
        {title:'top gunn'} , 
        {$set:  {year:2022}}
        );
        
        if(result.acknowledged)
        {
            console.log("record updated");
        }
        console.log(result);
}

//if we want to update only one entry we use updateOne
// if we want to update many entry and that too with same value i.e. repeated value 
// we use only update

update();