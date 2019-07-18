const user = require("./user");


const sql = {
    // 插入数据
    insert(col, insertArr) {
        return new Promise((resolve, reject) => {
            col.insertMany(insertArr);
            console.log("数据插入成功")
            resolve();
        })
    },

    // 修改数据
    update(col, whereObj, updateObj, updateType){
        updateType = updateType || "updateOne";
        return new Promise((resolve , reject) => {
            col[updateType]( whereObj, {$set: updateObj},(data)=>{
                resolve(data);
            });
            
            
        })
    },

    // 删除数据
    delete(col, whereObj, deleteType){
        deleteType = deleteType || "deleteOne";
        return new Promise((resolve, reject) => {
            col[deleteType]( whereObj);
            console.log("数据删除成功");
            resolve();
        })
    },

    // 查询数据
    find(col, whereObj, showObj){
        return new Promise ((resolve, reject) => {
            col.find(whereObj, showObj).exec((error, data) => {
                if(error) throw error;
                resolve(data);
                // console.log(data);    
            });
            
        })
    },

    // 查询并排序数据
    sort(col, whereObj, showObj, sortObj){
        return new Promise ((resolve, reject) => {
            col.find(whereObj,  showObj).sort(sortObj).exec((err, data) => {
                if(err) throw err;
                // console.log(data);
                resolve(data);
            });
           
        })
    }
}

module.exports = sql;