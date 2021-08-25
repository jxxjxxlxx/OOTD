import React from 'react';  
import './popup.css';  
class Popup extends React.Component {  

render() {  
return (  

<div className='popup'>  
<div className='popup_open'>  
<h1>{this.props.text}</h1>  
<button onClick={() => {window.location.href="/useprofile"}}>go back to main page!</button>  
</div>  
</div>  

  );  
 }  
}  

export default Popup;