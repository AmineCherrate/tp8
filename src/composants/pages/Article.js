import React, { Component } from 'react'
import axios from 'axios';
import Comment from 'comment';


export default class Article extends Component {

        constructor(props){
            super(props);

        }
        state={
                articleId:this.props.articleId,
                loading:true,
                loadingCon:true,
                Article:null,
                commentaires:[]
        }

        getArticles = () => {
            axios.get('https://jsonplaceholder.typicode.com/posts'+this.state.articleId)
            .then(response => {
                this.setState({Article:response.data,loading:false})
            } );

        }

        getCommentaires  = () => {
            axios.get('https://jsonplaceholder.typicode.com/comments?postId=1'+this.state.articleId)
            .then(response => {
                this.setState({Article:response.data,loadingCon:false})
            } );

        }

        componentDidMount(){
                this.getCommentaires();
                this.getArticles();

        }




  render() {
    return (
        <React.Fragment>
            <h1>Liste des Articles</h1>
            {this.state.loading && 
            <h2>Chargement en cours ...</h2>}

           {!this.state.loading && ( 

      <div className="Article">
      <h1>{this.state.Article.title}</h1>
      <p>{this.state.Article.body}</p>
      <hr/>
    <h2>Commentaires</h2>
    {
        this.state.commentaires.map(comment=>(
            <Comment comment={comment} key={comment.id}/>
    ))
    }

    })}        
      </div>
      )}
      </React.Fragment>
    )
  }
}



