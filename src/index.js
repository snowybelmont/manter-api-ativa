const axios = require("axios");

const API_URL = "https://projeto-sacha.onrender.com/presences/all";
const INTERVALO_DE_SOLICITACAO = 60000;

async function manterApiAtiva() {
  while (true) {
    try {
      const resposta = await axios.get(API_URL);

      console.log(`Solicitação bem-sucedida em ${API_URL}`);
      console.log("Conteúdo da resposta:");
      console.log(resposta.data);
    } catch (erro) {
      console.error(`Erro ao enviar solicitação: ${erro.message}`);
    }

    await new Promise((resolve) =>
      setTimeout(resolve, INTERVALO_DE_SOLICITACAO)
    );
  }
}

if (require.main === module) {
  manterApiAtiva();
}
