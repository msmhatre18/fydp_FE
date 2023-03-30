import React, { useState } from "react";
import { Text, Img, Input } from "components";
import { useNavigate } from "react-router-dom";


import './../../styles/table.css';

function BehaviorsTable({ behaviors, handleIncrement, handleDecrement, handleDelete, setNewBehavior, handleAddBehavior }) {
  // added handleAddBehavior as a prop to the component
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th className="header">Behavior</th>
          <th className="header">Count</th>
          <th className="header">Actions</th>
        </tr>
      </thead>
      <tbody>
        {behaviors.map((behavior, index) => (
          <tr key={index}>
            <td className="behavior-name">{behavior.name}</td>
            <td className="behavior-count">{behavior.count}</td>
            <td>
              <button className="btn" style={{ marginRight: '50px', padding: '20px' }} onClick={() => handleIncrement(index)}>+</button>
              <button className="btn" style={{ marginRight: '50px', padding: '20px', backgroundColor: 'red' }} onClick={() => handleDecrement(index)}>-</button>
              <button className="btn" style={{ marginRight: '50px', padding: '20px' }} onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
        <tr>
          <td className="td">
            <input
              className="input"
              type="text"
              name="newBehavior"
              placeholder="Add Behavior"
              onChange={setNewBehavior}
            />
          </td>
          <td>0</td>
          <td>
            <button className="btn" onClick={handleAddBehavior}>Add</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

const SessionBehaviouralDataPage = () => {
  const [behaviors, setBehaviors] = useState([
    { name: 'Behavior 1', count: 0 },
    { name: 'Behavior 2', count: 0 },
    { name: 'Behavior 3', count: 0 },
  ]);

  const handleIncrement = (index) => {
    const newBehaviors = [...behaviors];
    newBehaviors[index].count++;
    setBehaviors(newBehaviors);
  };

  const handleDecrement = (index) => {
    const newBehaviors = [...behaviors];
    newBehaviors[index].count--;
    setBehaviors(newBehaviors);
  };

  const handleDelete = (index) => {
    const newBehaviors = [...behaviors];
    newBehaviors.splice(index, 1);
    setBehaviors(newBehaviors);
  };

  const setNewBehavior = (event) => {
    setNewBehaviorName(event.target.value);
  };

  const [newBehaviorName, setNewBehaviorName] = useState('');

  const handleAddBehavior = () => {
    if (newBehaviorName !== '') {
      const newBehaviors = [...behaviors];
      newBehaviors.push({ name: newBehaviorName, count: 0 });
      setBehaviors(newBehaviors);
      setNewBehaviorName('');
    }
  };

  const navigate = useNavigate();

  const handleSave = () => {
    // Save behaviors data
    navigate('/session-summary');
  };

  return (
    <div>
      <div className="header-container">
        <Img
          src="images/img_arrowup.svg"
          className=""
          onClick={() => navigate(-1)}
          alt="arrowup"
        />
        <Text className="title">Session Behavioural Data</Text>
        <Text
          className="common-pointer bg-white_A700 flex h-[40px] items-center justify-center mb-[9px] md:ml-[0] ml-[7px] not-italic outline outline-[1px] outline-black_900 rounded-[50%] text-black_900 text-center w-[40px]"
          variant="body2"
          onClick={() => navigate("/")}
        >
          Logout
        </Text>
        
      </div>
      <div className="table-container">
        
        <BehaviorsTable
          behaviors={behaviors}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleDelete={handleDelete}
          setNewBehavior={setNewBehavior}
          handleAddBehavior={handleAddBehavior}
        />
        <button className="btn" style={{ marginTop: '20px', padding: '20px', gap: '20px' }} onClick={handleSave}>Save</button>
      </div>
    </div>

  );
};

export default SessionBehaviouralDataPage;
