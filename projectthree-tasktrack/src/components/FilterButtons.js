function FilterButtons({ filter, setFilter }) {
  return (
    <div>
      <button
        className={filter === "all" ? "active-filter" : ""}
        onClick={() => setFilter("all")}
      >
        All
      </button>

      <button
        className={filter === "completed" ? "active-filter" : ""}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>

      <button
        className={filter === "incomplete" ? "active-filter" : ""}
        onClick={() => setFilter("incomplete")}
      >
        Incomplete
      </button>
    </div>
  );
}

export default FilterButtons;