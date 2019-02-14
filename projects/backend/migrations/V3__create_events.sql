create table if not exists
public.events (
  id          SERIAL PRIMARY KEY,
  name        text NOT NULL,
  start       date NOT NULL,
  until       date NOT NULL,
  created_at  timestamp without time zone NOT NULL default (now() at time zone 'utc'),
  CHECK       (start <= until)
);