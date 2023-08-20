import {useLocation} from 'react-router-dom';
const ShowMessage =  ()=>{
    const location = useLocation(); 
    const propsData = location.state;
    const data = propsData.title || 789;  
    return(
        <div><h1>{data}</h1></div>
    )
}
export default ShowMessage;