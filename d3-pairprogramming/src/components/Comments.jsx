import React from "react";
import SingleComment from "./SingleCommnet";
import FormControl from 'react-bootstrap/FormControl'



let obj = {
    comment: "trying to post",
    rate: "3",
    elementId: "0316438960"
}




class Comments extends React.Component{
    state={
        comments: [],
        addedComment : {},

    }

    fetchComments = async (query) =>{
        try{
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/'+query, {
                method: 'GET',
                headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWM5NDRiYjUzZDAwMTViMTllY2MiLCJpYXQiOjE2MzMwMDE1NzksImV4cCI6MTYzNDIxMTE3OX0.WGqdgb0uXW7-MCUC94FOKrTEainfaSnnNBv6Le-F7uA",
            'Content-Type': 'application/json',
        }
            }
            )
            if(response.ok){
                let data = await response.json()
                this.setState({
                    comments: data
                })
                
               
            }else{
                console.log('no')
            }

        }
        catch{
            console.log('error')

        }

    }


    
    sendComment = async ( comment)=>{
        try{
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                method: 'POST',
                body:JSON.stringify(comment),
                headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWM5NDRiYjUzZDAwMTViMTllY2MiLCJpYXQiOjE2MzMwMDE1NzksImV4cCI6MTYzNDIxMTE3OX0.WGqdgb0uXW7-MCUC94FOKrTEainfaSnnNBv6Le-F7uA",
            'Content-Type': 'application/json',
        }
            }
            )
            if(response.ok){
                console.log('odadas')
                
               
            }else{
                console.log('nope')
            }

        }
        catch{
            console.log('error')

        }
        

    }

    componentDidMount = () => {

        this.sendComment(obj)
        this.fetchComments(this.props.query)
        
    }

    render() {
        return(
            <>
              
                {
                    this.state.comments.length > 0 &&
                    this.state.comments.map(e=>{
                      return <SingleComment key={e._id} comment={e.comment}/>
                    })
                }
                {
                    this.state.comments.length >0 &&
                    console.log(this.state.comments[1])
                }
                
                

                <FormControl
      placeholder="comment"
      
     
    />
           

            </>
            
        )
    }

}






export default Comments
