import { Component } from "react";


class CommentList extends Component {
    render() {
        return(
            <>
                {<h1>ciao</h1> && console.log(this.props.comments)}
                
                   
                    {this.props.comments.map(comment => 
                            <li key={comment._id}>{comment.comment}</li>
                            
                        )}
            
            </>
            
        )
    }
}

export default CommentList