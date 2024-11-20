export default function FormPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Formulario para ID: {id}</h1>
      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" name="name" style={{ margin: "10px", padding: "5px" }} />
        </div>
        <div>
          <label>Correo:</label>
          <input type="email" name="email" style={{ margin: "10px", padding: "5px" }} />
        </div>
        <button type="submit" style={{ padding: "10px 20px", fontSize: "16px" }}>
          Enviar
        </button>
      </form>
    </div>
  );
}