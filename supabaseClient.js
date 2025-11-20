// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// [CORRIGIDO] As chaves são colocadas diretamente no código para projetos de frontend puros.
// Estas chaves são seguras para serem expostas no lado do cliente.
const supabaseUrl = "https://qjdvicklqfccqwxwcafl.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqZHZpY2tscWZjY3F3eHdjYWZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0OTU2OTEsImV4cCI6MjAzMDA3MTY5MX0.o5cR0P3rT2FwUe3E3g-v22FnaB02dJfe2h2i6t1i2s0"

if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Erro: As chaves do Supabase não foram definidas no arquivo supabaseClient.js.");
}

// Cria e exporta o cliente Supabase para ser usado no frontend
export const supabase = createClient(supabaseUrl, supabaseAnonKey)