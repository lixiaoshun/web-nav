import React, { useState, useEffect } from "react";
import WebCard from "../../components/WebCard/index.jsx";
import SearchTypeModal from "./components/SearchTypeModal/index.jsx";
import SuggestModal from "./components/SuggestModal/index.jsx";
import scgoogle from "../../img/scgoogle.png";
import scbaidu from "../../img/scbaidu.png";
import scbing from "../../img/scbing.png";
import server from "../../server.jsx";
import './index.css';

const searchEngine = {
  '百度': {
    name: '百度', icon: scbaidu,
    searchUrl: 'https://www.baidu.com/s?wd='
  },
  '必应': {
    name: '必应', icon: scbing,
    searchUrl: 'https://cn.bing.com/search?q='
  },
  'Google': {
    name: 'Google', icon: scgoogle,
    searchUrl: 'https://www.google.com/search?q='
  }
}
// 关键词联想地址
const suggestUrl = '//api.bing.com/qsonhs.aspx';

export default function () {
  const [searchType, setSearchType] = useState('百度');
  const [searchTypeModal,setSeatchTypeModal] = useState(false);
  const [searchDatas,setSearchDatas] = useState([{
    Txt: "搜索无结果"
  }])

  function changeSearchType(type) {
    setSearchType(type);
    setSeatchTypeModal(false);
  }

  function inputSearch(event) {
    let val = document.getElementById("seach").value;
    if (event.which == 13) {
      search()
    } else {
      server.jsonp(suggestUrl,val,(res)=>{
        setSearchDatas(res.Suggests)
      })
    }
    
    return 
  }

  function search() {
    let val = document.getElementById("seach").value;
    let url = searchEngine[searchType].searchUrl + val;
    window.open(url, '_blank')
  }

  return (
    <div className="row-g">
      <div className='seach'>
        <div style={{display:'flex'}}>
          <div className="seach-pre" >
            <div className="sChoiceBtn" 
              style={{ background: `url(${searchEngine[searchType].icon})` }}
              onClick={() => { setSeatchTypeModal(!searchTypeModal)}}
            ></div>
          </div>
          <div className="seach-input">
            <input 
              id="seach" 
              placeholder="搜索" 
              onKeyUp={inputSearch}
            />
          </div>
          <div className="search-but" onClick={() => search()}>
          </div>
        </div>
        <div>
          <SearchTypeModal
            data={searchEngine} 
            visible={searchTypeModal} 
            onClick={(type) => changeSearchType(type)}
          />
        </div>
        {/* <SuggestModal data={searchDatas} /> */}
      </div>
      <WebCard title="home" />
    </div>

  )
}