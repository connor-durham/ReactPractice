import React from 'react';
import { Grid } from "@material-ui/core"
import Header from "./Header"
import Content from "./Content"

function App() {

  return (
      <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
            <Grid item container>
              <Grid item xs={0} sm={2}/>
                <Grid item xs={8} s={8}>
                  <Content />
              </Grid>
            </Grid>
          <Grid item xs={0} sm={2}/>
      </Grid>
  );
}

export default App;
