import { useState } from "react";

export default function HeartSyncApp() {
  const [screen, setScreen] = useState("profile");

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center">HeartSync</h1>

      <div className="flex justify-center space-x-2">
        <button onClick={() => setScreen("profile")} className="px-4 py-2 bg-gray-200 rounded-xl">Perfil</button>
        <button onClick={() => setScreen("chat")} className="px-4 py-2 bg-gray-200 rounded-xl">Chat</button>
        <button onClick={() => setScreen("match")} className="px-4 py-2 bg-gray-200 rounded-xl">Compatibilidade</button>
      </div>

      {screen === "profile" && (
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Perfil</h2>
          <p><strong>Nome:</strong> João</p>
          <p><strong>Idade:</strong> 27</p>
          <p><strong>Preferências:</strong> Conversas com humor, honestidade</p>
          <p><strong>Personalidade:</strong> Extrovertido, Sarcástico, Racional</p>
        </div>
      )}

      {screen === "chat" && (
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Chat com Ana</h2>
          <div className="space-y-2">
            <div><strong>João:</strong> És mais Netflix ou sair com amigos?</div>
            <div><strong>Ana:</strong> Um pouco dos dois! Mas adoro sair.</div>
            <div><strong>João:</strong> Gosto disso. Vida é para ser vivida, né?</div>
          </div>
        </div>
      )}

      {screen === "match" && (
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Compatibilidade com Ana</h2>
          <p className="mb-1">Baseado nas conversas, a IA detectou:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Estilo comunicativo descontraído</li>
            <li>Preferência por interação social</li>
            <li>Bom ritmo de resposta e humor alinhado</li>
          </ul>
          <p className="font-semibold">Compatibilidade: 82%</p>
        </div>
      )}
    </div>
  );
}
