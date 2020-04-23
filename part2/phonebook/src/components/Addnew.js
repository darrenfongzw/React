import React from "react";

const AddNew = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Add a New </h2>
            <form onSubmit={props.onSubmit}>
                <div>
                    name: <input value={props.valueName}
                                 onChange={props.onChangeName}/>

                </div>
                <div>number: <input value={props.valueNo}
                                    onChange={props.onChangeNo}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
};

export default AddNew;