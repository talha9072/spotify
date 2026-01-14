import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://lmaokknzcnahqrvxocsc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtYW9ra256Y25haHFydnhvY3NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzOTIzNTMsImV4cCI6MjA4Mzk2ODM1M30.ExpT4fRy5uGe5lmlncCFXfJMLPni9yVh7Aqf5IG6Edk"
);