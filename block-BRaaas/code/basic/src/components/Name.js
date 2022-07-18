function Name(props) {
  let arr = ['Arya', 'John', 'Bran'];
  
  function handleClick(name) {
    return alert(`Hello ${name}`);
  }
  return (
    <>
      <section className="section">
        <div>
          {arr.map((elm, name) => {
            return (
              <button
                className="btn"
                key={name} onClick={() => handleClick(elm)}>
                {elm}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Name;