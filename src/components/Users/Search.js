
import React,{useState,useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search =() =>{
 const githubContext = useContext(GithubContext);
 const alertContext = useContext(AlertContext);

 const [text,setText] = useState();

 const onSubmit=(e)=>{
   
    if(text === ''){
      alertContext.setAlert('Please enter something','light');
    }else{
      githubContext.searchUsers(text);
      setText('');
    } 
    e.preventDefault();
  }

 const onChange = (e)=>{
    setText(e.target.value);
  };

  return(
    <div>
      <form onSubmit={onSubmit}>
        <input type='text'
         name='text'
         placeholder='Search Users...' 
         value={text} 
         onChange={onChange}/>
        <input type='submit' value='Search' class='btn btn-dark btn-block'></input>
      </form>
      {githubContext.users.length > 0 && (
        <button className='btn btn-light btn-block'onClick={githubContext.clearUsers}>Clear</button>
      )}
    </div>
  )
}

export default Search;