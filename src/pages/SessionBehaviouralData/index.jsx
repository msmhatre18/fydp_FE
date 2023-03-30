import React, { useState } from "react";
import { Text, Img, Input } from "components";
import { useNavigate } from "react-router-dom";

function BehaviorsTable({ behaviors, handleIncrement, handleDecrement, setNewBehavior, handleAddBehavior }) {
  // added handleAddBehavior as a prop to the component
  return (
    <table>
      <thead>
        <tr>
          <th>Behavior</th>
          <th>Count</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {behaviors.map((behavior, index) => (
          <tr key={index}>
            <td>{behavior.name}</td>
            <td>{behavior.count}</td>
            <td>
              <button onClick={() => handleIncrement(index)}>+</button>
              <button onClick={() => handleDecrement(index)}>-</button>
            </td>
          </tr>
        ))}
        <tr>
          <td>
            <input
              type="text"
              name="newBehavior"
              placeholder="Add Behavior"
              onChange={setNewBehavior}
            />
          </td>
          <td>0</td>
          <td>
            <button onClick={handleAddBehavior}>Add</button>
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
      <Text as="h1">Session Behavioural Data</Text>
      <BehaviorsTable
        behaviors={behaviors}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        setNewBehavior={setNewBehavior}
        handleAddBehavior={handleAddBehavior}
      />
      <Input
        type="text"
        name="sessionNotes"
        placeholder="Add Session Notes"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default SessionBehaviouralDataPage;
