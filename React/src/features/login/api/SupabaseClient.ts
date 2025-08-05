import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URI
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_API_KEY

//supabase api 연결 설정
export const SupabaseClient = createClient(supabaseUrl, supabaseAnonKey)
