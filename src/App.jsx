import Header from "./components/Header";
import Student from "./components/Student";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <Student name="Arun" course="Computer Science" marks="90" />
      <Student name="Meena" course="Information Technology" marks="85" />
      <Student name="Kavi" course="Data Science" marks="95" />

      <Footer />
    </div>
  );
}

export default App;