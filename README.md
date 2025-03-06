
# Minha DietIA - Back-end

Este é o servidor back-end do aplicativo **Minha DietIA**, desenvolvido com **Fastify** e integrado com a **Gemini API do Google**. O servidor é responsável por criar dietas personalizadas com base em parâmetros fornecidos pelo usuário, como peso, altura, idade, objetivo, nível de atividade, preferências alimentares, restrições alimentares, entre outros.

## Tecnologias Utilizadas

- **Fastify**: Framework web rápido e de baixo consumo para Node.js.
- **Gemini API**: API do Google para obter dados nutricionais e calcular as necessidades diárias de calorias.
- **Fastify CORS**: Para configurar a política de CORS no servidor.
- **CORS**: Pacote para gerenciar as permissões de CORS.
- **dotenv**: Para carregar variáveis de ambiente a partir de um arquivo `.env`.
- **tsx**: Transpila o código TypeScript diretamente em um ambiente Node.js.

## Instalação

Siga as etapas abaixo para configurar e executar o back-end localmente:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/jpeccia/MinhaDietIA-server.git
   cd MinhaDietIA-server
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o arquivo `.env`:**
   Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias:
   ```dotenv
   API_KEY=seu-api-key
   ```

4. **Inicie o servidor:**
   ```bash
   npm run dev
   ```

## Endpoints

### `POST /api/dieta`

Este endpoint cria uma dieta personalizada com base nos parâmetros fornecidos no corpo da requisição.

#### Parâmetros da requisição:

```json
{
  "name": "Fernando",
  "gender": "masculino",
  "weight": 70,
  "height": 175,
  "age": 30,
  "objective": "emagrecimento",
  "level": "moderado",
  "foodPreference": "vegetariano",
  "foodRestrictions": "glúten",
  "numberMeals": 3,
  "useSuplementation": "sim"
}
```

#### Resposta esperada:

```json
{
  "nome": "Fernando",
  "sexo": "masculino",
  "idade": 30,
  "altura": 175,
  "peso": 70,
  "calorias": 2000,
  "objetivo": "emagrecimento",
  "refeicoes": [
    {
      "horario": "08:00",
      "nome": "Café da manhã",
      "alimentos": ["Ovo", "Pão integral", "Suco de laranja"],
      "suplementos": ["Multivitamínico"]
    },
    {
      "horario": "12:00",
      "nome": "Almoço",
      "alimentos": ["Arroz integral", "Frango grelhado", "Salada"],
      "suplementos": []
    },
    {
      "horario": "19:00",
      "nome": "Jantar",
      "alimentos": ["Peixe grelhado", "Legumes cozidos", "Arroz integral"],
      "suplementos": []
    }
  ]
}
```

## Estrutura de Pastas

```bash
src/
├── controllers/         # Contém os controladores para as rotas da API
├── services/            # Lógica de negócio (integração com a Gemini API)
├── routes.ts             # Definição das rotas do Fastify
├── server.ts            # Configuração principal do Fastify
```

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma branch para a sua funcionalidade (`git checkout -b feature/funcionalidade`).
3. Comite suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`).
4. Faça o push para a branch (`git push origin feature/funcionalidade`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a MIT License - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ por João Otávio Peccia.
