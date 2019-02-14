create table if not exists
public.money_transactions (
  id		   SERIAL PRIMARY KEY,
  start   timestamp without time zone NOT NULL,
  until   timestamp without time zone NOT NULL,

  CHECK		(debitor_id <> creditor_id)
);