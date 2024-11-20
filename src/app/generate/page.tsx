"use client";
import { useState } from "react";
import QRCode from "qrcode";
import { v4 as uuidv4 } from "uuid";

export default function Generate() {
  const [qrCode, setQrCode] = useState("");
  const [formId, setFormId] = useState("");

  const generateQr = async () => {
    const id = uuidv4(); // Genera un ID único
    setFormId(id);

    const qrUrl = `${window.location.origin}/form/${id}`;
    const qr = await QRCode.toDataURL(qrUrl);
    setQrCode(qr);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Generador de QR</h1>
      <button onClick={generateQr} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Generar Código QR
      </button>
      {qrCode && (
        <div style={{ marginTop: "20px" }}>
          <h3>Escanea el código QR o usa el enlace:</h3>
          <img src={qrCode} alt="QR Code" style={{ width: "200px" }} />
          <p>
            <a href={`/form/${formId}`} target="_blank">
              {window.location.origin}/form/{formId}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}