create table if not exists
public.event_participations (
  id          SERIAL PRIMARY KEY,
  name        text NOT NULL,
  event_id    SERIAL NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  user_id     SERIAL NOT NULL,
  created_at  timestamp without time zone NOT NULL default (now() at time zone 'utc')
);