import React from "react";

// PUBLIC_INTERFACE
function Sidebar({ categories, selectedCategory, onSelectCategory }) {
  /** Sidebar for categories of notes */
  return (
    <aside className="sidebar">
      <div className="sidebar-title">Categories</div>
      <ul>
        {categories.map((cat) => (
          <li
            key={cat}
            className={`sidebar-item${cat === selectedCategory ? " selected" : ""}`}
            onClick={() => onSelectCategory(cat)}
            tabIndex="0"
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
