// App.js
import React, { Fragment } from 'react';
import Navbar from './Navbar';
function App() {
	return (
		<Fragment>
			<Navbar />
			<div style={{ overflowY: "scroll", height: "800px" }}>
         <br></br>
         <br></br>

         <p>Hi, my name is</p>
         <h1>Alfredo Faustino<br></br>
          I build things for the web.</h1>

      </div>
		</Fragment>
	);
}

export default App;
