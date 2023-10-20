.PHONY: node
node:
	@docker compose exec node sh

.PHONY: logs
logs:
	@docker compose logs node -f
