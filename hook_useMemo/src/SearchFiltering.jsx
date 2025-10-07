import { useState, useMemo } from "react";

function SearchFiltering() {
  const [input, setInput] = useState("");

  const user = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: `User ${i}`,
  }));

  const filteredUsers = useMemo(() => {
    console.log("Searching...");
    return user.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
  }, [input, user]);

  return (
    <>
      <div>
        <span>
          <input
            type="search"
            placeholder="Search here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </span>
        {filteredUsers.map((item) => {
          return (
            <p key={item.id}>
              {item.id}: {item.name}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default SearchFiltering;
