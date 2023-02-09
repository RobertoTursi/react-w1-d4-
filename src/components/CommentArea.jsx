import { Component } from "react";
import CommentList from "./CommentList";


class CommentArea extends Component{

    state = {
        arrayOfComments: []
    }

    commentFetch = async () => {
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
                headers: {
                  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZjkxY2EyNDc4ZDAwMTNhMDU4MDAiLCJpYXQiOjE2NzU5NTAzNjQsImV4cCI6MTY3NzE1OTk2NH0.MFtcnNDd_rNb8Zo4pQ2HnIAONSoP6FBAUMzTxZ8n_e4"
                  }
                  })

                  if(response.ok) {
                    const data = await response.json()
                    console.log(data)
                    console.log(this.props.asin)


                    // data.forEach(element => {
                    //     this.state.arrayOfComments.push(element.comment)
                    // });
                    this.setState(
                        {
                            arrayOfComments: data
                        }    
                    )
                        
                  } else {
                    alert("Il response non è ok")
                  }
        } catch (error) {
            alert("V'è un errore di tipo ", error)
        }
    }

    componentDidMount() {
        this.commentFetch()
    }

    render() {
        return(
            <>
                <h1>coa</h1>
                <div><CommentList comments= {this.state.arrayOfComments} /></div> 
            </>
                
            
        )
    }
}

export default CommentArea