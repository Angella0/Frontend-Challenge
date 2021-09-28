
import React ,{useState, useEffect} from 'react';
import  {Card, CardHeader, Grid} from '@material-ui/core';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Earlier from './Card'






  const Projects= () =>{
    const [datas,setData]=useState([]);
    const getData=()=>{
      fetch('db.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
        
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson.projects.data);
          setData(myJson.projects.data)
        });
    }
    useEffect(()=>{
      getData()
    })
      
    return(
      <div className="card">  
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {datas.map(item =>(
      <Grid items xs={4} sm={5} md={4} key={item.id}   
      
      >
  <Card>
    <CardHeader title={item.projectName}/>
  <CardContent>      
        <Typography variant="body2" color="textSecondary" component="p">
       {item.creationDate}
        </Typography>
       {item.status}

      </CardContent>
    <p> <button onClick= { Earlier}>Earlier</button></p>
    <p> <button onClick= { item.status}>Latest</button></p>
  </Card>
  </Grid>
    ))}
    </Grid>
 </div>  



);

  }
  
  export default Projects;
