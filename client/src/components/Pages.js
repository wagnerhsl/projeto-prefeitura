import {useCookies} from 'react-cookie';
import {color} from '../styles/styles';
import ContainerPages, {PageSt, PageSt1, PageSt2, PagesStyle, PageViewerStyle, SectionTitle, SectionPages} from '../styles/Pages.styles';
import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {HiViewGrid} from 'react-icons/hi';
import {BsFillCollectionFill} from 'react-icons/bs';
import {AiFillEye} from 'react-icons/ai';

let IconGrade = HiViewGrid;
let PageStyle = PageSt;


const Page  = ({id, name, link, state, bg, onclick, viewerImg}) => {
  const [cookies, setCookie] = useCookies(['page']);
  const [imgUrl, setImgUrl] = useState('');
  const pageId = "page"+id; 

  useEffect(async () => {
    const url_req = 'http://localhost:8080/screenshot';
    let req_config = new Object();
    req_config.method = 'POST';
    req_config.body = JSON.stringify({link, pageId});
    req_config.headers = {'Content-Type': 'application/json', 'Accept': 'application/json'};
    const res = await fetch(url_req, req_config);
    const url_tmp = URL.createObjectURL(await res.blob()); 
    setImgUrl(url_tmp);
    // console.clear();
  }, []);

  PageStyle = (state ? PageSt1 : PageSt2);
  const stateCondition = (viewerImg == imgUrl);

  return (
    <PageStyle 
      id = {pageId} initial = {{opacity: 0}}
      whileInView = {{opacity: 1}}
      transition = {{delay:0.1}} 
      bg = {bg}>
      <div>
        <a href = {link} target='_blank'>
          <motion.div className='image' 
            style = {{backgroundImage: `url(${imgUrl})`}} 
            animate = {{backgroundColor: imgUrl == '' ? [color.tres, bg, color.tres] : 'transparent'}} 
            transition = {{delay: 1.5, repeat: Infinity}}>
          </motion.div>
        </a>
        <p className='name'> 
          <a href = {link} target='_blank' style={{color: (stateCondition ? color.dois : "white")}}>{name}</a>
          <button style={{
            color: (stateCondition ? color.dois : "white"),
            fontSize: (stateCondition ? 15 : 12)+"px",
          }}>
            <AiFillEye onClick={() => onclick(imgUrl)}/>
          </button>
        </p>
      </div>
    </PageStyle>
  );
};

const Pages = ({pages}) => {
  const [itemPage, setStateItemPage] = useState(0);
  const [viewerImg, setViewerImg] = useState("");
  let listPagesContainers = [];
  for(let [title, propriedades] of Object.entries(pages)) {
    let list = [];
    for(let [name, id] of Object.entries(propriedades[1])) {
      list.push(<Page {...{name, id: id[0], bg: propriedades[0], link: id[1], state: itemPage,
        onclick: imgUrl => {
          setViewerImg((viewerImg==imgUrl ? "" : imgUrl));
        }, viewerImg
      }}/>);
    }
    listPagesContainers.push(<PagesStyle {...{title, list,         
      style: {columnGap: (itemPage ? "20" : "30" )+"px"}, bgmq: (itemPage != 0 ? color.tres : "transparent")
    }}/>);
  }
  IconGrade = !itemPage ? BsFillCollectionFill : HiViewGrid;
  return[
    <ContainerPages id = "paginas" style = {{maxWidth: `1250px`, margin: "0px auto"}}>
      <SectionTitle>
        <h2> Acessos úteis </h2>      
        <button onClick = {() => setStateItemPage(itemPage != 0 ? 0 : 1)}><IconGrade size = {22}/></button>
      </SectionTitle>
      <SectionPages>{listPagesContainers}</SectionPages>
    </ContainerPages>,
    <PageViewerStyle {...{img: viewerImg, onclick: () => setViewerImg("")}} />
  ];
};

export default Pages;