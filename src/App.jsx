import React,{useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import MyMenu from "./components/MyMenu/index.jsx";
import Route from "./router/index.jsx";
import logo from "./img/logo.png";
import search from "./img/search.png";
import './App.css';

const App = () => {
  const [headTitle,setHeadTitle] = useState("首页");
  function getHeadTitle(page) {
    switch (page) {
      case "lean":
        setHeadTitle("学习")
        break;
      case "life":
        setHeadTitle("生活")
        break;
      case "movies":
        setHeadTitle("影视")
        break;
      case "tool":
        setHeadTitle("工具")
        break;
      default:
        setHeadTitle("首页")
        break;
    }
  }
  
  return <div className="body-content">
    <div className="sider">
      <div className="head-logo">
        <img src={search} style={{ height: '48px', width: '90px', marginLeft: '20px' }} />
        <img src={logo} style={{ height: '48px', width: '90px', }} />
      </div>
      <MyMenu onClick={(e) => getHeadTitle(e)} />
    </div>
    <div className="content">
      <div className="head">
        <div className="head-left">
          <div ></div>
          <h1 className="head-title-text">{headTitle}</h1>
        </div>
        <div className="head-right"></div>
      </div>
      <Route />
    </div>
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
// export default App;