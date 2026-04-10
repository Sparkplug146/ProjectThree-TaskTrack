function FilterButtons({ filter, setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("incomplete")}>Incomplete</button>

      <p>Current Filter: {filter}</p>
    </div>
  );
}

export default FilterButtons;