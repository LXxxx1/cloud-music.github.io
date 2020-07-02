import React from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config';
import { NavLink } from 'react-router-dom';// 利用 NavLink 组件进行路由跳转
import { Top, Tab, TabItem } from './style'



function Home(props: RouteConfig) {

  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to='/recommend' activeClassName='selected'><TabItem><span>推荐</span></TabItem></NavLink>
        <NavLink to='/singers' activeClassName='selected'><TabItem><span>歌手</span></TabItem></NavLink>
        <NavLink to='/rank' activeClassName='selected'><TabItem><span>排行榜</span></TabItem></NavLink>
      </Tab>
      {renderRoutes(props.route.routes)}
    </div>
  )
}

export default React.memo(Home)