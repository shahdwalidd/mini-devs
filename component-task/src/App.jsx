import "./App.css";
import HeaderCom from "./components/HeaderCom.jsx";
import Post from "./components/Post.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <>
      {/* Header */}
      <HeaderCom />

      {/* Container الرئيسي للـ Sidebar و Posts */}
      <div
        id="full"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginTop: "100px", // أقل من قبل عشان ما يكون فارغ كبير
          padding: "20px",
          gap: "20px", // مسافة بين Sidebar و Posts
        }}
      >
        {/* Posts Container */}
        <div
          id="posts"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            flex: 1, // ياخد كل المساحة المتاحة
            gap: "20px", // مسافة بين كل بوست
          }}
        >
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>

        {/* Sidebar */}
        <div style={{ width: "300px" /* عرض ثابت للـ Sidebar */ }}>
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
