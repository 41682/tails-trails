import './App.css';
//1．useStateとuseEffectをインポート
import { useState,useEffect } from 'react';

function App() {
  //useStateの初期値（空）を設定
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    //fetchでバックエンドExpressのサーバーを指定
    fetch('/api')
      //レスポンスをjsonとして受け取りjsオブジェクトを生成
      .then((res) => res.json())
      //生成したjsオブジェクトをdataに代入
      //data.messageで取り出したデータをuseStateに保存
      .then((data) => setMessage(data.message));
  },[])

  //useStateに保存した値を表示
  return (
    <div className="App">
      <h1>フロントエンド</h1>
      <p>{ message }</p>
    </div>
  );
}

export default App;
