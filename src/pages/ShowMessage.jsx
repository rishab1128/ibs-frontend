import {useLocation} from 'react-router-dom';
const ShowMessage =  ()=>{
    const location = useLocation(); 
    // console.log(location); 
    const propsData = location.state;
    console.log(propsData);
    const data = location.state.title || 789;  
    return(
        <div><h1>{data}</h1></div>
    )
}
export default ShowMessage;