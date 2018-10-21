import React from 'react'
import Navbar from "./components/Navbar";
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ImagesList from './components/ImagesList';

const App = (props) => {
    console.log(props)
    return ( <div>
        <AppBar position="absolute" >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Clipped drawer
            </Typography>
          </Toolbar>
        </AppBar>
       <Navbar/>
        <main >
            <ImagesList/>
        </main>
      </div>
    )
}
export default App
