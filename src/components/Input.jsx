export const Input = ({ inputValue, setInputValue, handleSubmitTask }) => {
  return (
    <form className="input__block">
      <div className="block">
        <input
          className="input"
          type="text"
          placeholder="Enter your tasks"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn" type="submit" onClick={handleSubmitTask}>
          Confrim
        </button>
      </div>
    </form>
  );
};
