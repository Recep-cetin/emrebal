import React from 'react';
import "./ss.css"
import headerimg from "./image/headernew.png"
import colorO from "./image/colorOne.png"
import eyes from "./image/eyes.png"
import mil from "./image/mil.png"
import olive from "./image/olivepa.png"
import palay from "./image/palay.png"
import pusula from "./image/pusula.png"
import wha from "./image/whatnew.png"
import bwb from "./image/beby.png"
import inst from "./image/social/ins.png"
import wp from "./image/social/wp.png"
import logo from "./image/social/logo.png"

function App() {
  return (
    // <img/> ,  

    <div className='body'>
      <div className='header'>
        <img className='headerimg' src={headerimg} />
      </div>

      <div className='center'>
        <div className='about'>
          <pre>
            <h2>HAKKIMDA </h2> <br />
            <h4> BY EMRE TATTOO STUDİOS</h4><br />
            <h5>

              Dövme ve Piercing Dükkanı<br />
              ▪️İstanbul/Sultanbeyli<br />
              ▫️Sadece Randevu ile çalışıyoruz<br />
              ▪️Randevu<br />
              Tel:0216 496 34 04<br />
              Gsm:0546 969 34 04<br /><br /><br />

            </h5>
          </pre>
        </div>
      </div>
      <div className='bottom'>
        <img className='coloro' src={colorO} />
      </div>
      <div className='bottom'>
        <img className='coloro' src={eyes} />
      </div>
      <div className='bottom'>
        <img className='coloro' src={mil} />
      </div>
      <div className='bottom'>
        <img className='coloro' src={olive} />
      </div>
      <div className='bottom'>
        <img className='coloro' src={palay} />
      </div>
      <div className='bottom'>
        <img className='coloro' src={pusula} />
      </div><br /><br />
      <div className='bottom'>
        <img className='coloro' src={wha} />
      </div><br /><br />
      <div className='bottom'>
        <img className='coloro' src={bwb} />
      </div><br />
      <div class="google">
        <iframe class="embed-responsive-item" src="//maps.google.com/maps?output=embed&amp;q=Abdurrahmangazi%2C%20Osman%20Bedrettin%20Sk.%20No%3A4%20D%3Aaire7%2C%2034000%20Sultanbeyli%2F%C4%B0stanbul&amp;z=15&amp;t=m" data-map="JTdCJTIycG9zaXRpb25UeXBlJTIyJTNBJTIybWFwLWFkZHJlc3MlMjIlMkMlMjJhZGRyZXNzJTIyJTNBJTIyQWJkdXJyYWhtYW5nYXppJTJDJTIwT3NtYW4lMjBCZWRyZXR0aW4lMjBTay4lMjBObyUzQTQlMjBEJTNBYWlyZTclMkMlMjAzNDAwMCUyMFN1bHRhbmJleWxpJTJGJUM0JUIwc3RhbmJ1bCUyMiUyQyUyMnpvb20lMjIlM0ExNSUyQyUyMnR5cGVJZCUyMiUzQSUyMnJvYWQlMjIlMkMlMjJsYW5nJTIyJTNBbnVsbCUyQyUyMmFwaUtleSUyMiUzQW51bGwlMkMlMjJtYXJrZXJzJTIyJTNBJTVCJTVEJTdE"></iframe>
      </div><br />

      <div className='social_up'>
      <div style={{marginRight:"20%",marginTop:"10px"}}> <img className='_log' src={logo} /> </div>
        <div> <a href='https://www.instagram.com/tattoooemre/'><img className='soc' src={inst} /></a></div>
        <div><a href='https://api.whatsapp.com/send?phone=905469693404'> <img className='soc' src={wp} /></a></div>
      </div>

    </div>

  );
}

export default App;
 