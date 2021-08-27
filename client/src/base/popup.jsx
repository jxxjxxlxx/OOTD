import React from 'react';  
import './popup.css';  
class Popup extends React.Component {  

render() {  
return (  

<div className='popup'>  
<div className='popup_open'>  
<p className="updated">Updated!</p>
<button className="getBackToUser" onClick={() => {window.location.href="/userprofile"}}>go back to main page!</button>  
</div>  
</div>  

  );  
 }  
}  

export default Popup;