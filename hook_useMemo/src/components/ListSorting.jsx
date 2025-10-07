import { useMemo, useState, useRef } from "react";

function ListSorting() {
  const [toggle, setToggle] = useState(false);
  const isFirstRender = useRef(true);

  const users = useMemo(
    () => [
      { id: 1, name: "Zara" },
      { id: 2, name: "Alex" },
      { id: 3, name: "John" },
    ],
    []
  );

  const sortedUsers = useMemo(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return users;
    }

    if (toggle) {
      console.log("Sorting...");
      return [...users].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      console.log("Unsorting...");
      return users;
    }
  }, [toggle, users]);

  const handleSorting = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <ol>
        {sortedUsers.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ol>

      <button onClick={handleSorting}>
        {toggle ? "Unsort" : "Sort by Name"}
      </button>
    </div>
  );
}

export default ListSorting;
