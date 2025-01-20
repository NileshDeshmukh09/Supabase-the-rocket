import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://retdkxrmvbwovmhxivcw.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJldGRreHJtdmJ3b3ZtaHhpdmN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNzg2MDcsImV4cCI6MjA1Mjk1NDYwN30.LM6NktkX6Xzji7RowPIGLfvKdtHdMXhvKvALYTKpL_g";

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;