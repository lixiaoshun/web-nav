import React,{useState, useEffect} from "react";
import home from "../../img/home.png";
import lean from "../../img/lean.png";
import life from "../../img/life.png";
import movies from "../../img/movies.png";
import tool from "../../img/tool.png";

import './index.css';

const MyMenu=({
  onClick,
})=>{
  const [activeLi,setActiveLi] = useState("home")
  const [subActive,setSubActive] = useState(0)
  const data = [
    {
      title: '首页',
      url: '#/',
      icon: home,
      key:"home",
      children: [],
    }, {
      title: '学习',
      url: '#/classity/lean',
      icon: lean,
      key:"lean",
      children: [{
        title: '社区',
        children: [],
      }, {
        title: '前端',
        children: [],
      }, {
        title: '设计',
        children: [],
      }, {
        title: '系统',
        children: [],
      }, {
        title: '其他',
        children: [],
      }],
    }, {
      title: '生活',
      url: '#/classity/life',
      key:"life",
      icon: life,
      children: [{
        title: '新闻资讯',
        children: [],
      }, {
        title: '财经',
        children: [],
      }, {
        title: '购物',
        children: [],
      }, {
        title: '生活工具',
        children: [],
      }, {
        title: '其他',
        children: [],
      }],
    }, {
      title: '影视',
      url: '#/classity/movies',
      icon: movies,
      key: "movies",
      children: [{
        title: '综合',
        children: [],
      }, {
        title: '动漫',
        children: [],
      }, {
        title: '国外',
        children: [],
      }, {
        title: '下载',
        children: [],
      }, {
        title: '其他',
        children: [],
      }],
    }, {
      title: '工具',
      url: '#/classity/tool',
      icon: tool,
      key: "tool",
      children: [{
        title: '网盘搜索',
        children: [],
      }, {
        title: 'BT搜索',
        children: [],
      }, {
        title: '软件/插件',
        children: [],
      }, {
        title: '导航',
        children: [],
      }, {
        title: '其他',
        children: [],
      }],
    }
  ]
  useEffect(()=>{
    const url = window.location.hash.split("/")
    if(url.length>1){
      setActiveLi(url[url.length-1])
      onClick(url[url.length - 1])
    }
  },[])
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[activeLi])

  function itemMenuClik(i,index) {
    let scrollTop = document.querySelector('[data-title="' + i + '"').offsetTop;
    window.scrollTo(0, scrollTop)
    console.log(index)
    setSubActive(index)
  }

  const getMenu = ()=>{
    return data.map(items=>{
      const isClick = activeLi == items.key;
      return <li 
      className={isClick?`active`:''} 
      key={items.title} 
        onClick={() => { onClick(items.key),setActiveLi(items.key)}}>
        <a href={items.url} >
          <span style={{display:'flex',alignItems:"center"}}><img src={items.icon} /></span>
          <span className="item">{items.title}</span>
        </a>
        {items.children && items.children.length > 0 && <div style={{ width: "100%", display: isClick?'flex':'none', }}>
          <div className="positioner">
            <div className="pos" style={{ top: `${subActive * 48}px` }}></div>
          </div>
          <ul className="menu menu-item">
            {items.children.map((e,index) => (
              <li 
                key={e.title + items.key} 
                onClick={() => itemMenuClik(e.title+items.key,index)}>
                  {e.title}
              </li>))}
          </ul>
        </div>
        }
      </li>
    })
  }
  
  return (
    <ul className="menu">
      {getMenu()}
    </ul>
  )
}

export default MyMenu;