import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NotesList from "./components/NotesList";
import NoteEditorModal from "./components/NoteEditorModal";
import DiscussionPanel from "./components/DiscussionPanel";
import LoginPage from "./pages/LoginPage";
import ReadMePage from "./pages/ReadMePage";

// PUBLIC_INTERFACE
function App() {
  // Simple demo state, swap with real state management in production
  const [theme, setTheme] = useState("light");
  const [auth, setAuth] = useState(() => !!localStorage.getItem("demo_auth"));
  const [route, setRoute] = useState(() => (auth ? "notes" : "login"));
  const [noteCategories] = useState([
    "All", "Work", "Personal", "Ideas", "Archive",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [notes, setNotes] = useState([
    { id: 1, title: "Meeting Notes", body: "Buy milk. Discuss Q2 roadmap.", category: "Work" },
    { id: 2, title: "App Idea", body: "Build a notes app with tags/categories.", category: "Ideas" },
    { id: 3, title: "Shopping List", body: "Eggs, Cheese, Coffee.", category: "Personal" }
  ]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Navigation logic per route/page
  const onNav = (to) => {
    if (to === "logout") {
      setAuth(false);
      localStorage.removeItem("demo_auth");
      setRoute("login");
    } else {
      setRoute(to);
    }
  };

  // "Login" - set auth true and route to notes panel
  const handleLogin = (user) => {
    setAuth(true);
    localStorage.setItem("demo_auth", "1");
    setRoute("notes");
  };

  // Notes CRUD operations
  const handleNewNote = () => {
    setEditingNote(null);
    setModalOpen(true);
  };
  const handleSelectNote = (note) => {
    setEditingNote(note);
    setModalOpen(true);
  };
  const handleSaveNote = (note) => {
    if (!note.id) {
      // New note
      setNotes([
        ...notes,
        {
          ...note,
          id: notes.length
            ? Math.max(...notes.map((n) => n.id)) + 1
            : 1,
          category: selectedCategory === "All" ? "Personal" : selectedCategory,
        },
      ]);
    } else {
      // Edit existing
      setNotes(
        notes.map((n) => (n.id === note.id ? { ...n, ...note } : n))
      );
    }
    setModalOpen(false);
    setEditingNote(null);
  };
  const handleDeleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
    setModalOpen(false);
    setEditingNote(null);
  };

  // Filter notes by category/search
  const filteredNotes = notes.filter(
    (note) =>
      (selectedCategory === "All" || note.category === selectedCategory) &&
      (note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.body.toLowerCase().includes(search.toLowerCase()))
  );

  // Render different routes/pages
  if (!auth) {
    return <LoginPage onLogin={handleLogin} onNav={onNav} />;
  }

  return (
    <div className={`App theme-${theme}`}>
      <Header onNav={onNav} isAuthenticated={auth} />
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      <main className="main-layout">
        <Sidebar
          categories={noteCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <section className="main-content">
          {route === "notes" && (
            <div>
              <div className="notes-toolbar">
                <button className="btn-accent" onClick={handleNewNote}>
                  + New Note
                </button>
              </div>
              <NotesList
                notes={filteredNotes}
                onSelect={handleSelectNote}
                search={search}
                setSearch={setSearch}
              />
              <DiscussionPanel />
            </div>
          )}
          {route === "readme" && <ReadMePage />}
        </section>
      </main>
      <NoteEditorModal
        open={modalOpen}
        note={editingNote}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}

export default App;
