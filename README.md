# Run locally
docker-compose up -d
yarn start

# Run db migrations
docker-compose run flyway -url=jdbc:postgresql://db:5432/compup -user=dbuser -password=password migrate
docker-compose restart server

# Feature Ideas
- Money Transactions by user
- Highest balance
- Edit transactions
- Teams
