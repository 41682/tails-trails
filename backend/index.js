//requireでexpressモジュールを読み込む
const express = require('express');
//mysql2の読み込む
const mysql = require('mysql2');
//expressモジュールを実体化して、定数appに代入
const app = express();
//ポート番号を指定
const port = 3001;

//mysqlと接続するための設定
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tails_trails'
});

//'/'パスにGET要求があった際に実行する処理
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//'/api'パスにGET要求があった際に実行する処理
app.get('/api', (req, res) => {
  // '/api'にアクセスした際に、MySQLに対して行う処理
  connection.query(
    //usersテーブルからデータを取得する処理
    'SELECT * FROM users',
    function(err, results, fields){
      if(err){
        console.log('MySQL接続エラー');
        throw err;
      }
      res.json({message: results[0].name});
    }
  )
});

//指定したポートでサーバーを起動（listen）
app.listen(port, () => {
  console.log(`listening on *:${port}`);
})