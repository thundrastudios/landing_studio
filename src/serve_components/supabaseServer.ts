import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://stjnunvmyabafzcbpwmo.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0am51bnZteWFiYWZ6Y2Jwd21vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NTg4NzAsImV4cCI6MjA3NDEzNDg3MH0.ZT8lRQ6sJnGPnl9kO2c0ZqGN028xAEArGridd1rbr_4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
