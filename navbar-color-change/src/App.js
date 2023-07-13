// App.js
import React, { Fragment } from 'react';
import Navbar from './Navbar';
function App() {
	return (
		<Fragment>
			<Navbar />
			<div style={{ overflowY: "scroll", height: "800px" }}>
        <h1> I make websites </h1>

      </div>
		</Fragment>
	);
}

export default App;
