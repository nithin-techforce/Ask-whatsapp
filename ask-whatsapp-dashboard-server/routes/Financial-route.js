const express = require("express");
const router = express.Router();

const { Client } = require("pg");
const connectionString =
  "postgressql://postgres:techforce@localhost:5432/postgres";
const client = new Client({
  connectionString: connectionString,
});
client.connect();
router.get("/finance/amount/:from&:to", function (req, res) {
  const pgquery = `select b.* from (select a.THEMONTH,SUM(a.AMOUNT),a.is_liquid_flow,a.FINANCIAL_STRATEGY FROM (SELECT AMOUNT,is_liquid_flow,financial_strategy,to_char(TRANSACT_TIME,'YYYY-MM')as THEMONTH FROM finmonth) a GROUP BY THEMONTH,is_liquid_flow,financial_strategy order by THEMONTH,financial_strategy,is_liquid_flow) b where THEMONTH between '${req.params.from}' and '${req.params.to}'`;
  client.query(pgquery, function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }

    var temp = 0;
    var data = [];
    for (var i = 4; i <= result.rows.length; i = i + 4) {
      var tempdata = {
        month: result.rows[temp].themonth,
        "Additional Strategy": parseInt(result.rows[temp].sum),
        "Additional Strategy with STP": parseInt(
          result.rows[(temp = temp + 1)].sum
        ),
        "Top Up": parseInt(result.rows[(temp = temp + 1)].sum),
        "Top Up with STP": parseInt(result.rows[(temp = temp + 1)].sum),
      };
      data.push(tempdata);
      temp = temp + 1;
    }
    // console.log(data);
    if (result.rows.length === 0) {
      res.json({ status: "Invalid Input" });
    } else {
      res.json(data);
    }
  });
});

router.get("/finance/count/:from&:to", function (req, res) {
  const pgquery2 = `select b.* from (select a.THEMONTH,COUNT(a.AMOUNT),a.is_liquid_flow,a.FINANCIAL_STRATEGY FROM (SELECT AMOUNT,is_liquid_flow,financial_strategy,to_char(TRANSACT_TIME,'YYYY-MM')as THEMONTH FROM finmonth) a GROUP BY THEMONTH,is_liquid_flow,financial_strategy order by THEMONTH,financial_strategy,is_liquid_flow) b where THEMONTH between '${req.params.from}' and '${req.params.to}'`;
  client.query(pgquery2, function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    var temp = 0;
    var data = [];
    for (var i = 4; i <= result.rows.length; i = i + 4) {
      var tempdata = {
        month: result.rows[temp].themonth,
        "Additional Strategy": parseInt(result.rows[temp].count),
        "Additional Strategy with STP": parseInt(
          result.rows[(temp = temp + 1)].count
        ),
        "Top Up": parseInt(result.rows[(temp = temp + 1)].count),
        "Top Up with STP": parseInt(result.rows[(temp = temp + 1)].count),
      };
      data.push(tempdata);
      temp = temp + 1;
    }
    // console.log(data);
    if (result.rows.length === 0) {
      res.json({ status: "Invalid Input" });
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
