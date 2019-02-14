create table if not exists
public.users (
  id	   SERIAL PRIMARY KEY,
  name	 text NOT NULL,
  created_at  timestamp without time zone NOT NULL default (now() at time zone 'utc')
);