import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ofcozkvmuvxjaowabyxo.supabase.co';
const SUPABASE_API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mY296a3ZtdXZ4amFvd2FieXhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzMjQxNzksImV4cCI6MjA0NTkwMDE3OX0.SzCNFc8jDUV615_d4_oh6N9r-9XB7gIhTdCLO_Vt4_4';

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

export default supabase;
