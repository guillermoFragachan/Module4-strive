import React from "react";









class Comments extends React.Component{
    state={
        comments: []

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

                data.forEach(e => { this.state.comments.push(e.comment)
                    
                })
                console.log(data)
                console.log(this.state.comments)
            }else{
                console.log('no')
            }

        }
        catch{
            console.log('error')

        }

    }

    componentDidMount = () => {


        this.fetchComments(this.props.query)
    }

    render() {
        return(
            <>
                <p>Comments:</p>
                {
                    
                }

            </>
            
        )
    }

}




export default Comments
