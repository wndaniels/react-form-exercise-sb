const Box = ({ id, width, height, backgroundColor, handleRemove }) => {
  const remove = () => handleRemove(id);
  return (
    <div>
      <h3>{backgroundColor}</h3>
      <div
        style={{
          backgroundColor,
          width: `${width}em`,
          height: `${height}em`,
        }}
      >
        <button onClick={remove}>X</button>
      </div>
    </div>
  );
};

export default Box;
