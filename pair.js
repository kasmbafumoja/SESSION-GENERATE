async function getCode() {
  const number = document.getElementById("number").value;
  const codeDiv = document.getElementById("code");
  if (!number) { codeDiv.innerText = "⚠️ Entrez un numéro !"; return; }

  try {
    const res = await fetch("/api/pair", {
      headers: { "x-pair-token": "TERMUX-TOKEN" }
    });
    const data = await res.json();
    if (data.ok) {
      codeDiv.innerText = `Votre code : ${data.code}`;
    } else {
      codeDiv.innerText = `Erreur: ${data.message}`;
    }
  } catch (e) {
    codeDiv.innerText = "❌ Impossible de contacter le serveur";
  }
}
