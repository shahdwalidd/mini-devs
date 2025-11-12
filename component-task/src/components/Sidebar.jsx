
 

            import "./Side.css";
            import Tagbutton from "./Tagbutton.jsx";

export default function Sidebar() { 
  return (
  <div
  style={{
    border: "3px solid teal",
    padding: "20px",
    margin: "20px",
    borderRadius: "20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    color: "#333",
    fontFamily: "Arial, sans-serif",
    width: "400px", // ثابت للSidebar
   
    maxHeight: "700px",
    display: "flex",
    flexDirection: "row", // ترتيب عمودي
        flexWrap: "wrap",
    alignItems: "center",
    gap: "10px", // مسافة بين البوتنز
    overflowY: "auto", // scroll لو العدد كبير
    backgroundColor: "#f9f9f9"
  }}
>
  <Tagbutton />
  <Tagbutton />
  <Tagbutton />
  <Tagbutton />
  <Tagbutton />
  <Tagbutton />
  <Tagbutton />
  <Tagbutton />
  <Tagbutton />
  <Tagbutton />
  <Tagbutton />
  <Tagbutton />
  <Tagbutton />
  <Tagbutton />
  <Tagbutton />
  <Tagbutton />

</div>

  );
}
