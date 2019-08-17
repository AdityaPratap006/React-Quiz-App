import React from 'react';

import './App.css';

import Quiz from './pages/quiz/quiz.page';
import StartPage from './pages/start/start.page';
import EndPage from './pages/end/end.page';
import QuestionsList from './data/questionSet';

class  App extends React.Component {
  
  constructor(){
    super();

    this.state={
      currentPage:'start',
      score:0,
    }
  }


  changeRoute = (route ) => {
    this.setState({currentPage: route})
  }

  resetScore =() => {
    this.setState({
      score:0
    })
    
  }

  increaseScore = () => {
    this.setState(prevState => {
      return {
        score: prevState.score + 1
      }
    })
  }

  decreaseScore = () => {
    this.setState(prevState => {
      return {
        score: prevState.score - 1
      }
    })
  }
  
  render(){


    const { score, currentPage } = this.state;

   

    let content = null;

    if(currentPage === 'quiz'){
      content = <Quiz changeRoute={this.changeRoute}  increaseScore={this.increaseScore} decreaseScore={this.decreaseScore}/>
    }
    else if(currentPage === 'end'){
      content = <EndPage resetScore={this.resetScore} changeRoute={this.changeRoute} score={score} totalScore={QuestionsList.length} />;
    }
    else if( currentPage === 'start'){
      content =  <StartPage changeRoute={this.changeRoute}/>
    }

    return (
      <div className="App">
         
          {content}
          
      </div>
    );
  }
 
}

export default App;
