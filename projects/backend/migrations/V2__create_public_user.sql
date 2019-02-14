create table if not exists
public.users (
  id	   SERIAL PRIMARY KEY,
  name	 text NOT NULL,
  role	 name DEFAULT current_role UNIQUE,
  created_at  timestamp without time zone NOT NULL default (now() at time zone 'utc')
);