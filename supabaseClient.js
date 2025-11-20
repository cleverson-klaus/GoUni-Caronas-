// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// ATENÇÃO: Use as variáveis de ambiente do seu FRONTEND aqui.
// Elas devem ser prefixadas com NEXT_PUBLIC_
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Erro: Variáveis de ambiente NEXT_PUBLIC_SUPABASE_URL ou NEXT_PUBLIC_SUPABASE_ANON_KEY não definidas.");
    // Você pode querer lançar um erro aqui em produção
}

// Cria e exporta o cliente Supabase para ser usado no frontend
export const supabase = createClient(supabaseUrl, supabaseAnonKey)