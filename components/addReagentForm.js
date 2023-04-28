import React, {useState, useEffect} from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';


const AddReagentForm = () => {

    //State to keep track of the form
    const [reagent, setReagent] = useState({
        user: "",
        name: "",
        qualityControlInterval: ""
    });

    const qualityControlIntervalOptions = ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"]

    //Get user ids
    // useEffect(() => {
    //     const userInfo = Auth.currentUserInfo();
    //     const userID = userInfo.id;
    //     setReagent({...reagent, user: uerserID})
    // }, []);

    function handleSubmit(){
        const reagentParams = {
            input: reagent,
        };
        
        // const result = await API.graphql(graphqlOperation(createReagent, reagentParams));
        
    }

    return(
        <div>
            <form className="" onsSubmit={handleSubmit}>
                <div className="reagentName-form">
                    <p><label htmlFor="reagentName">Reagent Name</label></p>
                    <p><input
                        name="reagentName"
                        type="text"
                        value={reagent.name}
                        placeholder="Reagent Name"
                        onChange={(e) => setReagent({ ...reagent, name: e.target.value })}
                        required
                    /></p>
                </div>
                <div>
                    <select onChange={(e) => setReagent({ ...reagent, qualityControlInterval: e.target.value })}>
                        {qualityControlIntervalOptions.map((option, index) =>{
                            return <option key={index}>{option}</option>
                        })}
                    </select>
                </div>
            </form>
        </div>
    )

}

export default AddReagentForm;