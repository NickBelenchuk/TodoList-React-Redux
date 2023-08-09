export const Input = ({ inputValue, setInputValue, handleSubmitTask }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmitTask();
  };
  return (
    <form className="input__block" onSubmit={handleFormSubmit}>
      <div className="block">
        <input
          className="input"
          type="text"
          placeholder="Enter your tasks"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn" type="submit">
          Confrim
        </button>
      </div>
    </form>
  );
};
