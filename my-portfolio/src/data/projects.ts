export const projects = [
  {
    title: "AI Examples",
    description:
      "Collection of AI code examples and experiments with GPT, LangChain, and LlamaIndex.",
    techStack: ["TypeScript", "LangChain", "OpenAI", "LlamaIndex", "Python", "Qdrant"],
    githubUrl: "https://github.com/ManevN/ai-examples",
    liveDemo: null,
    details: `
## Project Steps

### Qdrant Setup
- Run Qdrant locally via Docker: \`docker run -p 6333:6333 -p 6334:6334 qdrant/qdrant\`
- Access dashboard: http://localhost:6333/dashboard
- Test collections: http://localhost:6333/collections

### Generate Embeddings with Python
- Use \`sentence-transformers\` Python package
- Create script \`generate_vectors.py\` to convert text to embeddings
- Output saved to \`vector.json\`

### Upload Vectors to Qdrant
- Install \`qdrant-client\` Python package
- Script \`upload_vectors_to_qdrant.py\` uploads embeddings
- Use REST API to upload and search

### Phase 2 - Retrieval & Generation (Basic RAG)
- Run \`ollama run llama3\`
- Python script \`rag_local_ollama.py\` with dependencies \`sentence-transformers\`, \`qdrant-client\`, \`requests\`
`,
  },
];
