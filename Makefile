up:
	docker-compose up -d
up-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
down:
	docker-compose down
env:
	cp .env.example .env && npm install
rund: 
	npm run dev