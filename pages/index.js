import { useState } from "react";

export default function Home() {
  const [skinType, setSkinType] = useState("");
  const [skinConcerns, setSkinConcerns] = useState([]);
  const [allergies, setAllergies] = useState(false);
  const [age, setAge] = useState("");
  const [budget, setBudget] = useState("");

  const handleSkinConcerns = (event) => {
    const value = event.target.value;
    setSkinConcerns([...skinConcerns, value]);
  };

  const handleSubmit = () => {
    // Send user responses to the backend for API integration
    const userResponses = {
      skinType,
      skinConcerns,
      allergies,
      age,
      budget,
    };
    // Make an API request to ChatGPT with these responses
  };

  return (
    <div>
      <h1>Skincare Questionnaire</h1>
      <form>
        <label>
          Skin Type:
          <select value={skinType} onChange={(e) => setSkinType(e.target.value)}>
            <option value="">Select...</option>
            <option value="dry">Dry</option>
            <option value="oily">Oily</option>
            <option value="combination">Combination</option>
            <option value="sensitive">Sensitive</option>
          </select>
        </label>
        <br />

        <label>
          Skin Concerns (Select up to 3):
          <select
            multiple
            onChange={handleSkinConcerns}
          >
            <option value="acne">Acne</option>
            <option value="wrinkles">Wrinkles</option>
            <option value="dryness">Dryness</option>
            <option value="hyperpigmentation">Hyperpigmentation</option>
          </select>
        </label>
        <br />

        <label>
          Do you have any allergies?
          <select
            value={allergies}
            onChange={(e) => setAllergies(e.target.value === "true")}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </label>
        <br />

        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />

        <label>
          Budget:
          <select value={budget} onChange={(e) => setBudget(e.target.value)}>
            <option value="">Select...</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <br />

        <button type="button" onClick={handleSubmit}>
          Generate Skincare Routine
        </button>
      </form>
    </div>
  );
}
