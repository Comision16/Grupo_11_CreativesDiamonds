import Header from './Home/Header';
import Footer from './Home/Footer';
import Menu from './Home/Menu';
import {Outlet} from 'react-router-dom';


export const Root = () => {
  return (
<div id='wrapper'>
    <Menu/>
    <div id='content-wrapper' className='d-flex flex-column'>
        <div id="content">
            <Header/>
            <Outlet/>
        </div>
        <Footer/>
    </div>
</div>  )
}