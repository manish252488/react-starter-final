import React from "react";
import "./index.less";
import { AppBar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Toolbar } from "@material-ui/core";
const Home = (props) => {
  return (
   <React.Fragment>
     <AppBar static>
       <Toolbar>
       </Toolbar>
     </AppBar>
     <Card>
       <CardHeader>header</CardHeader>
       <CardContent>
         some content
       </CardContent>
       <CardActions>
         <Button>click</Button>
       </CardActions>
       <CardActionArea>
         <Button>click</Button>
       </CardActionArea>
     </Card>
   </React.Fragment>
  );
};
export default Home;
