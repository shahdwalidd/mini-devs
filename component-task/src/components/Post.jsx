export default function Post() {
  return (
    <div
      style={{
        border: "3px solid teal", // دمج borderColor و borderWidth في سطر واحد
        padding: "20px",
        margin: "20px",
        borderRadius: "20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        color: "#333",
        fontFamily: "Arial, sans-serif",
        width: "60%",
        maxWidth: "500px", // يخلي البوست مش كبير جدًا على الشاشات الكبيرة
        height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center", // يخلي النصوص في المنتصف
        backgroundColor: "#fff", // optional: خلفية بيضاء لتمييز البوست
      }}
    >
      <h2>This is a Post title</h2>
      <hr style={{ width: "80%" }} /> {/* عرض خط أقل من عرض البوست */}
      <p>This is the post body</p>
    </div>
  );
}
