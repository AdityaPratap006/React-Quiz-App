import React from 'react';

import './App.css';

import Quiz from './pages/quiz/quiz.page';
import StartPage from './pages/start/start.page';
import EndPage from './pages/end/end.page';
import Loader from './components/loader/loader.component';
 

class  App extends React.Component {
  
  constructor(){
    super();

    this.state={
      currentPage:'start',
      score:0,
      totalScore:0,
      isLoading:true,
      questionSet:null,
    }
  }


  changeRoute = (route ) => {
    this.setState({currentPage: route})


    //when the app resets to start get new set of questions
    if(route === 'start'){
      fetch('https://opentdb.com/api.php?amount=10')
      .then(res => res.json())
      .then(data =>  this.setState({ questionSet:  data.results, isLoading: false }))
      .catch(err => console.log(err))
    }
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

  componentDidMount(){
        
    
      fetch('https://opentdb.com/api.php?amount=10')
      .then(res => res.json())
      .then(data =>  this.setState({ questionSet:  data.results, isLoading: false }))
      .catch(err => console.log(err))
     

}
  
  render(){


    const { score, currentPage, questionSet , isLoading } = this.state;

   

    let content = null;

    if(currentPage === 'quiz'){
      content = <Quiz questionSet={questionSet}  changeRoute={this.changeRoute}  increaseScore={this.increaseScore} decreaseScore={this.decreaseScore}/>
    }
    else if(currentPage === 'end'){
      content = <EndPage resetScore={this.resetScore} changeRoute={this.changeRoute} score={score} totalScore={questionSet.length} />;
    }
    else if( currentPage === 'start'){
      content =  <StartPage changeRoute={this.changeRoute}/>
    }

    return (
      <div className="my-gradient-bg 
          h-screen  
           
          flex 
          flex-row 
          justify-center 
          items-center">
           
            {(!isLoading)?content:   <Loader basicLoader/>  }
           
      </div>
    );
  }
 
}

export default App;
