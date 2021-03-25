import React, { useState } from "react";
import "./index.less";
import { Button, Card, CardActions, CardContent, CardHeader, TextField } from "@material-ui/core";
import AppBaseScreen from "../common/layout/user/AppBaseScreen";
const Home = (props) => {
  const [text,setText]=useState("");
  const [error,]=useState({
    status: false,
    message: ""
  })
  const onChange=(val)=>{
    setText(val)
  }
  return (
  <AppBaseScreen>
     <Card className="chat-card">
       <CardHeader>header</CardHeader>
       <CardContent>
         some content
       </CardContent>
       <CardActions>
         <TextField variant="outlined" helperText={error.message} error={error.status} onChange={e=> onChange(e.target.value)} value={text}/>
         <Button>send</Button>
       </CardActions>
     </Card>
   </AppBaseScreen>
  );
};
export default Home;
