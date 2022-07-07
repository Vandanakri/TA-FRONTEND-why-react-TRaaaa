function Fruit(props) {
  let fruits = [
    { id: 'apple', value: '🍎 apple' },
    { id: 'orange', value: '🍊 orange' },
    { id: 'grape', value: '🍇 grape' },
    { id: 'pear', value: '🍐 pear' },
  ];
  function handleClick(name) {
    return alert(`Hello ${name.value}`)
  }
  return (
    <>
    <section className="section">
      <h2>Greet</h2>
      <div>
        {fruits.map((element,i)=>{
          return (
            <button className="btn" key={element.id}
            onClick={()=> handleClick(element)}>{element.value}</button>
          );
        })}
      </div>
    </section>
    </>
  )
}
export default Fruit;