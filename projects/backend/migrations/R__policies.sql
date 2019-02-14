ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS user_policy
ON public.users;

CREATE POLICY user_policy
ON public.users
FOR ALL
USING (true)
WITH CHECK (role = current_user);

