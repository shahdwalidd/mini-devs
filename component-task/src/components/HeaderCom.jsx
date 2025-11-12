export default function HeaderCom() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "teal",
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1>Welcome to App</h1>
    </div>
  );
}
