const dbUserConn = require("../config/dbConnection"); // load the database connection

/**************
 * The results function returns the poll results to the browser
 **************/
 const results = (req, res) => {

    const { SchoolID } = req.body

    if(SchoolID === null) {
        return new Promise((resolve, reject) => {
            dbUserConn.query(
              `
              Select B.SchoolName, count(*) as studentCount from Student_Job_Interest A 
              join NYC_High_Schools B on A.SchoolID = B.SchoolID 
              where A.SchoolID is not null
              group by B.SchoolName
              order by studentCount desc;
                `,
              (err, results) => {
                if (err) {
                  reject(err);
                }
                resolve(results);
              }
            );
          })    
          .then(results => {
            res.json(results)
          }) 
          .catch(err => {
            console.log(err)
            res.sendStatus(500)
          });
    }else{
        return new Promise((resolve, reject) => {
            dbUserConn.query(
              `
              Select JobTitle, count(*) as studentCount from Student_Job_Interest 
              where SchoolID = ?
              group by JobTitle
              order by studentCount desc;
                `,[SchoolID],
              (err, results) => {
                if (err) {
                  reject(err);
                }
                resolve(results);
              }
            );
          })    
          .then(results => {
            res.json(results)
          }) 
          .catch(err => {
            console.log(err)
            res.sendStatus(500)
          });
    }

  };
  
  module.exports = { results };