# Voxus Challenge 1

## Pré-requisitos
 - Docker
 - Postman / Insomnia

 ---

## Instruções de Instalação e Execução

- Clone o seguinte repositório: [https://github.com/VitorMantovani/voxus-challenge-1.git]
- Navegue até o diretório clonado: cd voxus-challenge-1/next-sunset-sunrise
- Execute a imagem docker através do comando: docker build -t sunset-sunrise .
- Rode o container através do comando: docker run -p 8888:8888 -d sunset-sunrise

---

## Endpoints

http://localhost:8888/api/sun-event

---

### Exemplo de JSON:

{
	"type": "sunrise",
	"latitude": "-23.3645",
	"longitude": "-46.7403"
}

---
