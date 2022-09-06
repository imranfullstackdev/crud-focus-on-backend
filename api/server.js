const express = require("express");
const pool = require("./Model/db");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/api/v1/get", async (req, res) => {
  const getData = await pool.query(`select * from mycrudtable`);
  res.json(getData.rows);
  console.log(getData.rows);
});
app.post("/api/v1/post", async (req, res) => {
  const postdata = await pool.query(
    `insert into mycrudtable(name,email,password)  values($1,$2,$3) returning *`,
    [req.body.name, req.body.email, req.body.password]
  );
  res.json(postdata.rows);
  console.log(postdata.rows);
});

app.put("/api/v1/put/:id", async (req, res) => {
  const { id } = req.params;
  const editdata = await pool.query(
    `update mycrudtable set name=$1,email=$2,password=$3 where id=$4`,
    [req.body.name, req.body.email, req.body.password, id]
  );
  res.json({ message: "User Edited Succussfully" });
  console.log("edited");
});
app.delete("/api/v1/delete/:id", async (req, res) => {
  const { id } = req.params;
  const deletedata = await pool.query("delete from mycrudtable where id=$1", [
    id,
  ]);
  res.json("deleted");
  console.log("deleted");
});

app.listen(8000, () => {
  console.log("listening on the port 8000");
});
