import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group'
import { Container } from './style'
import Header from '../../baseUI/Header'
function Album(props){

  const [showStatus, setShowStatus] = useState (true);

  const currentAlbum = {

  creator: {
    avatarUrl: "http://p1.music.126.net/O9zV6jeawR43pfiK2JaVSw==/109951164232128905.jpg",
    nickname: "浪里推舟"
  },
  coverImgUrl: "http://p2.music.126.net/ecpXnH13-0QWpWQmqlR0gw==/109951164354856816.jpg",
  subscribedCount: 2010711,
  name: "听完就睡，耳机是天黑以后柔软的梦境",
  tracks:[
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
  ]
}
const handleBack = () => {
  setShowStatus (false);
};

  return(

    <CSSTransition
      in={showStatus}  
      timeout={300} 
      classNames="fly" 
      appear={true} 
      unmountOnExit
      onExited={props.history.goBack}
    >
      <Container>
        sss
      </Container>
    </CSSTransition>
  )
}

export default React.memo(Album)